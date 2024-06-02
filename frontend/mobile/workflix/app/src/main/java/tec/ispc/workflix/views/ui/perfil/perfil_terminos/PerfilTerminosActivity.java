package tec.ispc.workflix.views.ui.perfil.perfil_terminos;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import com.squareup.picasso.Picasso;

import tec.ispc.workflix.R;
import tec.ispc.workflix.models.Usuario;
import tec.ispc.workflix.views.MainActivity;
import tec.ispc.workflix.views.ui.perfil.Perfil;

public class PerfilTerminosActivity extends AppCompatActivity {
    private TextView tv_nombre;
    private TextView tv_apellido;
    private TextView tv_decripcion;
    ImageView tv_foto;
    private Button sign_out_btn;
    private Context context;
    private Button btn_Perfil_terminos;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_perfil_terminos);

        tv_nombre = findViewById(R.id.nombreProf);
        tv_apellido = findViewById(R.id.apellidoProf);
        tv_decripcion = findViewById(R.id.descripcion);
        tv_foto = (ImageView) findViewById(R.id.imagenProf);
        btn_Perfil_terminos = findViewById(R.id.btn_Perfil_terminos);

        SharedPreferences preferences = getSharedPreferences("user_data", Context.MODE_PRIVATE);
        String nombre = preferences.getString("nombre", ""); // El segundo parámetro es un valor por defecto si la clave no se encuentra
        String apellido = preferences.getString("apellido", "");
        String telefono = preferences.getString("descripcion", "");
        String foto = preferences.getString("foto", "");
        String direccion = preferences.getString("direccion","");
        //    Integer precio = preferences.getInt("precio",0);
        String tipo_usuario = preferences.getString("tipo_usuario", "");

        Usuario usuario = new Usuario();
        usuario.setFoto(foto);

        if (!foto.isEmpty()) {
            String imageUrl = cargarImagen(usuario);
            Picasso.get()
                    .load(imageUrl)
                    .placeholder(R.drawable.placeholder) // Imagen de placeholder mientras carga
                    .error(R.drawable.profesional_1)     // Imagen de error si falla la carga
                    .into(tv_foto);
        }

        // Cambiar visibilidad de btn_home según tipo_usuario
        if ("profesional".equalsIgnoreCase(tipo_usuario)) {
            btn_Perfil_terminos.setVisibility(View.VISIBLE);
        } else {
            btn_Perfil_terminos.setVisibility(View.GONE);
        }

        tv_nombre.setText(nombre);
        tv_apellido.setText(apellido);
        tv_decripcion.setText(telefono);



        sign_out_btn = findViewById(R.id.btn_Cerrar_sesion);

        // Set On click listener
        sign_out_btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                cerrarSesion();
            }
        });
    };

    public void cerrarSesion () {
        // Vuelvo los valores a null
        tv_nombre.setText(null);
        tv_apellido.setText(null);
        tv_decripcion.setText(null);
        tv_foto.setImageBitmap(null);


        // Obtener una referencia a SharedPreferences
        SharedPreferences preferences = getSharedPreferences("user_data", Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = preferences.edit();
        editor.putString("nombre", null);
        editor.putString("apellido", null);
        editor.putString("correo", null);
        editor.putString("descripcion", null);
        editor.putString("foto", null);
        editor.putString("direccion", null);
        //  editor.putInt("precio", 0);
        editor.putString("tipo_usuario", null);
        editor.apply();
        // Vuelvo al home
        Intent irAlHome = new Intent(PerfilTerminosActivity.this, MainActivity.class);
        startActivity(irAlHome);
        finish();
    };
    public void irPerfilEditar(View view) {
        Intent irPerfilEditarIntent = new Intent(this, Perfil.class);
        startActivity(irPerfilEditarIntent);
    };

    public void terminos (View view) {
        Intent intent = new Intent(this, terminosCondiciones.class);
        startActivity(intent);
        finish();
    };
    private String cargarImagen(Usuario usuario) {
        if (usuario.getFoto() != null && !usuario.getFoto().isEmpty()) {
            return tec.ispc.workflix.utils.Environment.URL + usuario.getFoto();
        } else {
            return "android.resource://" + context.getPackageName() + "/" + R.drawable.profesional_1;
        }
    }

};