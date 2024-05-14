package tec.ispc.workflix.views.ui.login;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;

import tec.ispc.workflix.R;
import tec.ispc.workflix.databinding.ActivityLoginBinding;
import tec.ispc.workflix.views.MainActivity;
import tec.ispc.workflix.views.ui.catalogo.CatalogoActivity;
import tec.ispc.workflix.views.ui.register.RegisterActivity;
import tec.ispc.workflix.views.ui.restablecer.RestablecerActivity;

public class LoginActivity extends AppCompatActivity {

    private LoginViewModel loginViewModel;
    private ActivityLoginBinding binding;


    Button sign_in_btn;
    EditText et_email, et_password, tel;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        binding = ActivityLoginBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());
        // Hook Edit text fields
        et_email = findViewById(R.id.et_email);
        et_password = findViewById(R.id.et_password);

        // Hook Button

        sign_in_btn = findViewById(R.id.sign_in_btn);

        sign_in_btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                authenticateUser();
            }
        });

    }

    private void authenticateUser() {
        // Chequear por error
        if (!validateEmail() || !validatePassword()){
            return;
        }
        // Obtener una referencia a SharedPreferences
        SharedPreferences preferences = getSharedPreferences("user_data", Context.MODE_PRIVATE);

        // Comprobar si los datos del usuario están presentes
        if (preferences.contains("nombre")) {
            // Redirigir al usuario a MainActivity
            Intent irAMain = new Intent(LoginActivity.this, MainActivity.class);
            startActivity(irAMain);
            finish();
        } else {
        // Fin check por errores
        RequestQueue queue = Volley.newRequestQueue(LoginActivity.this);

        // Colocar la IP Local de su servidor
        String url = "http://190.96.112.66:8080/api/v1/user/login";

        // Set paramaters
        HashMap<String, String> params = new HashMap<String, String>();
        params.put("correo", et_email.getText().toString());
        params.put("clave", et_password.getText().toString());

        // Set request object

        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest(Request.Method.POST, url, new JSONObject(params),
                new Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject response) {
                        try {
                            // Obtengo valores de respuesta del objeto
                            int id = response.getInt("id");
                            String nombre = (String) response.get("nombre");
                            String apellido = (String) response.get("apellido");
                            String telefono = (String) response.get("telefono");
                            String correo = (String) response.get("correo");
                            String ciudad = response.isNull("ciudad") ? "" : response.getString("ciudad");
                            String descripcion = response.isNull("descripcion") ? "" : response.getString("descripcion");
                            String provincia = response.isNull("provincia") ? "" : response.getString("provincia");
                            String profesion = response.isNull("profesion") ? "" : response.getString("profesion");
                            String foto = response.isNull("foto") ? "" : response.getString("foto");

                            boolean is_admin = response.getBoolean("is_admin");

                            // Guardar los datos del usuario en SharedPreferences
                            SharedPreferences preferences = getSharedPreferences("user_data", Context.MODE_PRIVATE);
                            SharedPreferences.Editor editor = preferences.edit();
                            editor.putInt("id",id);
                            editor.putString("nombre", nombre);
                            editor.putString("apellido", apellido);
                            editor.putString("telefono", telefono);
                            editor.putString("correo", correo);
                            editor.putString("ciudad",ciudad);
                            editor.putString("descripcion",descripcion);
                            editor.putString("provincia",provincia);
                            editor.putString("profesion",profesion);
                            editor.putString("foto",foto);
                            editor.putBoolean("is_admin",is_admin);
                            editor.apply();
                            // Redirigir al usuario a MainActivity
                            Intent irAMain = new Intent(LoginActivity.this, MainActivity.class);
                            startActivity(irAMain);
                            finish();
                        }catch (JSONException e){
                            e.printStackTrace();
                            System.out.println(e.getMessage());
                        } // Fin de catch
                    }
                }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {

                error.printStackTrace();
                System.out.println(error.getMessage());
                Toast.makeText(LoginActivity.this,"El login falló",Toast.LENGTH_LONG).show();
            }
        }
        );// Fin request del objeto

        queue.add(jsonObjectRequest);
        }};

    private boolean validatePassword() {
        String clave = et_password.getText().toString();
        if(clave.isEmpty()){
            et_password.setError("Debe ingresar una clave");
            return false;
        }else if (clave.length() < 6) {
            et_password.setError("La contraseña debe tener al menos 6 caracteres");
            return false;
        }else{
            et_password.setError(null);
            return true;
        }
    }

    private boolean validateEmail() {
        String correo = et_email.getText().toString();
        // Check If Email Is Empty:
        if(correo.isEmpty()){
            et_email.setError("Debe ingresar un correo");
            return false;
        }else if(!isValidEmail(correo)){
            et_email.setError("Por favor ingrese un correo válido");
            return false;
        }else{
            et_email.setError(null);
            return true;
        }
    }
    private boolean isValidEmail(String email) {
        String emailPattern = "[a-zA-Z0-9._-]+@[a-z]+\\.+[a-z]+";
        return email.matches(emailPattern);
    } //pattern para correo

    public void irRegistro(View view) {
        Intent registroIntent = new Intent(this, RegisterActivity.class);
        startActivity(registroIntent);
    }
    public void irRestablecer(View view) {
        Intent restablecerIntent = new Intent(this, RestablecerActivity.class);
        startActivity(restablecerIntent);
    }
    public void irCatalogo(View view) {
        Intent catalogoIntent = new Intent(this, CatalogoActivity.class);
        startActivity(catalogoIntent);
    }


}