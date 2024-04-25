package tec.ispc.workflix.views.ui.catalogo;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

import com.squareup.picasso.Picasso;

import tec.ispc.workflix.R;
import tec.ispc.workflix.views.ui.perfil.Perfil;
import tec.ispc.workflix.views.ui.perfil_terminos.PerfilTerminosActivity;


public class TarjetaAmpliadaActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_tarjeta_ampliada);

        // Recepcion de los datos que vienen del CataloAdapter
        Bundle extras = getIntent().getExtras();
        if (extras != null) {
            String nombreCompleto = extras.getString("nombreCompleto");
            String imagenURL = extras.getString("imagenURL");
            String descripcion = extras.getString("descripcion");
            String correo = extras.getString("correo");
            String ciudad = extras.getString("ciudad");
            String provincia = extras.getString("provincia");
            String telefono = extras.getString("telefono");
            String servicio = extras.getString("servicio");

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
            Picasso.get().load(imagenURL).into(imagenFotoImageView);
            perfilDescripcionTextView.setText(descripcion);
            perfilCorreoTextView.setText(correo);
            perfilCiudadTextView.setText(ciudad);
            perfilProvinciaTextView.setText(provincia);
            perfilTelefonoTextView.setText(telefono);
            perfilServicioTextView.setText(servicio);

            // Obtén el botón "Contactar" por su ID
            Button contactarButton = findViewById(R.id.contactarButton);
            contactarButton.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    // Crea una Intent para realizar una llamada
                    Intent intent = new Intent(Intent.ACTION_DIAL);
                    intent.setData(Uri.parse("tel:" + telefono));

                    // Comprueba si hay una aplicación que puede manejar la acción
                    if (intent.resolveActivity(getPackageManager()) != null) {
                        startActivity(intent);
                    }
                }
            });







        }

    }
    public void volverCatalogo(View view) {
        Intent intent =new Intent(TarjetaAmpliadaActivity.this, CatalogoActivity.class);
        startActivity(intent);
    }
}