package tec.ispc.workflix.views.ui.tarjetas;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.squareup.picasso.Picasso;

import tec.ispc.workflix.R;
import tec.ispc.workflix.models.Usuario;


public class TarjetaAmpliadaActivity extends AppCompatActivity {
    private Context context;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_tarjeta_ampliada);

        // Recepcion de los datos que vienen del CataloAdapter
        Bundle extras = getIntent().getExtras();
        if (extras != null) {
            String nombreCompleto = extras.getString("nombreCompleto");
            String foto = extras.getString("imagenURL");
            String descripcion = extras.getString("descripcion");
            String correo = extras.getString("correo");
            String ciudad = extras.getString("ciudad");
            String provincia = extras.getString("provincia");
            String telefono = extras.getString("telefono");
            String servicio = extras.getString("servicio");
            Usuario usuario = new Usuario();
            usuario.setFoto(foto);
            // Se asignan los datos del profesional TextViews e ImageView
            TextView perfilNombreTextView = findViewById(R.id.perfilNombre);
            ImageView imagenFotoImageView = findViewById(R.id.imagenFoto);
            TextView perfilDescripcionTextView = findViewById(R.id.perfilDescripcion);
            TextView perfilCorreoTextView = findViewById(R.id.perfilCorreo);
            TextView perfilCiudadTextView = findViewById(R.id.perfilCiudad);
            TextView perfilProvinciaTextView = findViewById(R.id.perfilProvincia);
            TextView perfilTelefonoTextView = findViewById(R.id.perfilTelefono);
            TextView perfilServicioTextView = findViewById(R.id.perfilServicio);

            // Envio de datos a la interfaz
            perfilNombreTextView.setText(nombreCompleto);
            perfilDescripcionTextView.setText(descripcion);
            perfilCorreoTextView.setText(correo);
            perfilCiudadTextView.setText(ciudad);
            perfilProvinciaTextView.setText(provincia);
            perfilTelefonoTextView.setText(telefono);
            perfilServicioTextView.setText(servicio);

            String imageUrl = cargarImagen(usuario);
            Picasso.get()
                    .load(imageUrl)
                    .placeholder(R.drawable.placeholder) // Imagen de placeholder mientras carga
                    .error(R.drawable.profesional_1)     // Imagen de error si falla la carga
                    .into(imagenFotoImageView);

            // Obtén el botón "Contactar" por su ID
            Button contactarButton = findViewById(R.id.contactarButton);
            contactarButton.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    // Crea una Intent para abrir WhatsApp
                    Intent intent = new Intent(Intent.ACTION_VIEW);
                    String whatsappUrl = "https://api.whatsapp.com/send?phone=" + telefono;
                    intent.setData(Uri.parse(whatsappUrl));

                    // Comprueba si hay una aplicación que puede manejar la acción
                    if (intent.resolveActivity(getPackageManager()) != null) {
                        startActivity(intent);
                    } else {
                        // Opcional: Mostrar un mensaje si no se encuentra la aplicación
                        Toast.makeText(TarjetaAmpliadaActivity.this, "WhatsApp no está instalado.", Toast.LENGTH_SHORT).show();
                    }
                }
            });
        }

    }
    public void volverCatalogo(View view) {
        Intent intent =new Intent(TarjetaAmpliadaActivity.this, CatalogoActivity.class);
        startActivity(intent);
    }
    private String cargarImagen(Usuario usuario) {
        if (usuario.getFoto() != null && !usuario.getFoto().isEmpty()) {
            return tec.ispc.workflix.utils.Environment.URL + usuario.getFoto();
        } else {
            return "android.resource://" + context.getPackageName() + "/" + R.drawable.profesional_1;
        }
    }
}