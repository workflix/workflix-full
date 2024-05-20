package tec.ispc.workflix.views.ui.register;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import com.android.volley.AuthFailureError;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

import java.util.HashMap;
import java.util.Map;

import tec.ispc.workflix.R;
import tec.ispc.workflix.views.ui.login.LoginActivity;


public class RegisterActivity extends AppCompatActivity {
    EditText nombreEditText, apellidoEditText, correoEditText, claveEditText, clave2EditText, telefonoEditText;
    Button registrarseButton;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);


        nombreEditText = findViewById(R.id.editTextText);
        apellidoEditText = findViewById(R.id.editTextText2);
        correoEditText = findViewById(R.id.editTextTextEmailAddress);
        claveEditText = findViewById(R.id.editTextTextPassword);
        clave2EditText= findViewById(R.id.editTextTextPassword2);
        telefonoEditText = findViewById(R.id.editTextPhone);


        registrarseButton = findViewById(R.id.button);
        registrarseButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                registerUser();

            }

        });
    }


    private void registerUser() {
        if (!validateNombre() || !validateApellido() || !validateCorreo() || !validateClaveS() || !validateTelefono()){
            return;
        }

        RequestQueue queue = Volley.newRequestQueue(RegisterActivity.this);

        // Colocar la IP Local de su servidor
        String url = "http://192.168.0.125:8080/api/v1/user/register";

        StringRequest stringRequest = new StringRequest(Request.Method.POST, url, new Response.Listener<String>() {

            @Override
            public void onResponse(String response) {

                if (response.equalsIgnoreCase("USUARIO REGISTRADO CORRECTAMENTE")) {
                    nombreEditText.setText(null);
                    apellidoEditText.setText(null);
                    correoEditText.setText(null);
                    claveEditText.setText(null);
                    clave2EditText.setText(null);
                    telefonoEditText.setText(null);
                    Intent loginIntent = new Intent(RegisterActivity.this, LoginActivity.class);
                    startActivity(loginIntent);
                    Toast.makeText(RegisterActivity.this, "Se ha  registrado correctamente", Toast.LENGTH_LONG).show();

                }
            }
        }, new Response.ErrorListener() {

            @Override
            public void onErrorResponse(VolleyError error) {
                error.printStackTrace();
                System.out.println(error.getMessage());
                Toast.makeText(RegisterActivity.this, "No se ha podido guardar el registro", Toast.LENGTH_LONG).show();

            }

    }){
            @Nullable
            @Override
            protected Map<String, String> getParams() throws AuthFailureError{

                Map<String, String> params = new HashMap<>();
                params.put("nombre", nombreEditText.getText().toString());
                params.put("apellido", apellidoEditText.getText().toString());
                params.put("correo", correoEditText.getText().toString());
                params.put("clave", claveEditText.getText().toString());
                params.put("telefono", telefonoEditText.getText().toString());

                return params;
            }
        };
        queue.add(stringRequest);

    }

    public boolean validateNombre(){
        String nombre = nombreEditText.getText().toString();

        if(nombre.isEmpty()){
            nombreEditText.setError("Debe ingresar un nombre");
            return false;
        }else{
            nombreEditText.setError(null);
            return true;
        }
    }// Revisa si nombre está vacio.
    public boolean validateApellido(){
        String apellido = apellidoEditText.getText().toString();

        if(apellido.isEmpty()){
            apellidoEditText.setError("Debe ingresar un apellido");
            return false;
        }else{
            apellidoEditText.setError(null);
            return true;
        }
    }// Revisa si apellido está vacio.

    public boolean validateCorreo(){
        String correo = correoEditText.getText().toString();
        // Check If Email Is Empty:
        if(correo.isEmpty()){
            correoEditText.setError("Debe ingresar un correo");
            return false;
        }else if(!isValidEmail(correo)){
            correoEditText.setError("Por favor ingrese un correo válido");
            return false;
        }else{
            correoEditText.setError(null);
            return true;
        }
    }// fin validacion correo
    private boolean isValidEmail(String email) {
        String emailPattern = "[a-zA-Z0-9._-]+@[a-z]+\\.+[a-z]+";
        return email.matches(emailPattern);
    } //pattern para correo


    private boolean validateClaveS() {
        String clave = claveEditText.getText().toString();
        String clave2 = clave2EditText.getText().toString();


        if(clave.isEmpty()){
            claveEditText.setError("Debe ingresar una clave");
            return false;
        }else if (clave.length() < 6) {
            claveEditText.setError("La contraseña debe tener al menos 6 caracteres");
            return false;
        }else if (!clave.equals(clave2)){
            claveEditText.setError("Las claves no coinciden!");
            return false;
        }else if(clave2.isEmpty()){
            clave2EditText.setError("La confirmación de la clave no puede estar vacía");
            return false;
        }else{
            claveEditText.setError(null);
            clave2EditText.setError(null);
            return true;
        }
    }
    public boolean validateTelefono(){
        String telefono = telefonoEditText.getText().toString();

        if(telefono.isEmpty()){
            telefonoEditText.setError("Debe ingresar un teléfono");
            return false;
        }else{
            telefonoEditText.setError(null);
            return true;
        }
    }


    public void irLogin(View view) {
        Intent loginIntent = new Intent(this, LoginActivity.class);
        startActivity(loginIntent);
        finish();
    }

}