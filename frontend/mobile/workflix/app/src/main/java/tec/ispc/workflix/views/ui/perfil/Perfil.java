package tec.ispc.workflix.views.ui.perfil;


import androidx.annotation.Nullable;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.media.MediaScannerConnection;
import android.net.Uri;
import android.os.Bundle;
import android.os.Environment;
import android.provider.MediaStore;
import android.util.Base64;
import android.util.Log;
import android.view.View;
import android.widget.Adapter;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;
import com.squareup.picasso.Picasso;


import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import tec.ispc.workflix.R;
import tec.ispc.workflix.models.Servicio;
import tec.ispc.workflix.models.Usuario;
import tec.ispc.workflix.utils.Apis;
import tec.ispc.workflix.utils.ServicioService;
import tec.ispc.workflix.utils.UsuarioService;
import tec.ispc.workflix.views.MainActivity;
import tec.ispc.workflix.views.ui.perfil.perfil_terminos.PerfilTerminosActivity;

public class Perfil extends AppCompatActivity {
    ImageView imagenFoto;
    private UsuarioService usuarioService;
    private TextView tv_nombre, tv_apellido, tv_correo, tv_telefono, tv_ciudad, tv_profesion, tv_provincia, tv_descripcion, tv_foto, tv_precio, tv_direccion;
    private Button sign_out_btn;
    private Button btnEliminarPerfil;
    private Button btnActualizarPerfil;
    private String CARPETA_RAIZ="misImagenesPrueba/";
    private String RUTA_IMAGEN=CARPETA_RAIZ+"misFotos";
    private String path;
    private Bitmap bitmap;
    final int COD_SELECCIONA = 10;
    final int COD_FOTO = 20;
    private String rutaImagen;
    private String tipo_usuario;
    private ArrayAdapter<String> adapter;
    ServicioService servicioService;
    private Context context;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_crear_perfil);

        // Text views objetos
        tv_nombre = findViewById(R.id.perfilNombre);
        tv_apellido = findViewById(R.id.perfilApellido);
        tv_correo = findViewById(R.id.perfilCorreo);
        tv_telefono = findViewById(R.id.perfilTelefono);
        tv_ciudad = findViewById(R.id.perfilCiudad);
        tv_provincia = findViewById(R.id.perfilProvincia);
        tv_descripcion = findViewById(R.id.perfilDescripcion);
        tv_profesion = findViewById(R.id.perfilServicio);

        btnActualizarPerfil = findViewById(R.id.btnActualizarPerfil);
        btnEliminarPerfil = findViewById(R.id.btnEliminarPerfil);

        imagenFoto = (ImageView) findViewById(R.id.imagenFoto);

        SharedPreferences preferences = getSharedPreferences("user_data", Context.MODE_PRIVATE);
        String nombre = preferences.getString("nombre", ""); // El segundo parámetro es un valor por defecto si la clave no se encuentra
        String apellido = preferences.getString("apellido", "");
        String correo = preferences.getString("correo", "");
        String telefono = preferences.getString("telefono", "");
        String ciudad = preferences.getString("ciudad","");
        String descripcion = preferences.getString("descripcion","");
        String provincia = preferences.getString("provincia","");
        String profesion = preferences.getString("profesion","");
        String foto = preferences.getString("foto","");
        tipo_usuario = preferences.getString("tipo_usuario", "");
        int id = preferences.getInt("id",0);
        Usuario usuario = new Usuario();
        usuario.setFoto(foto);

        // Seteo los valores al perfil
        tv_nombre.setText(nombre);
        tv_apellido.setText(apellido);
        tv_telefono.setText(telefono);
        tv_correo.setText(correo);
        tv_ciudad.setText(ciudad);
        tv_descripcion.setText(descripcion);
        tv_provincia.setText(provincia);
        tv_profesion.setText(profesion);

        Spinner spinnerServicios = findViewById(R.id.spinnerServicios);

        // Muestra el botón correcto basado en el tipo de usuario
        if ("profesional".equalsIgnoreCase(tipo_usuario)) {
            tv_profesion.setVisibility(View.VISIBLE);
        }else {
            spinnerServicios.setVisibility(View.VISIBLE);
            listServicio(spinnerServicios);
        }

        if (!foto.isEmpty()) {
            String imageUrl = cargarImagen(usuario);
            Picasso.get()
                    .load(imageUrl)
                    .placeholder(R.drawable.placeholder) // Imagen de placeholder mientras carga
                    .error(R.drawable.profesional_1)     // Imagen de error si falla la carga
                    .into(imagenFoto);
        }

        btnEliminarPerfil.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                tv_nombre.setText(null);
                tv_apellido.setText(null);
                tv_telefono.setText(null);
                tv_correo.setText(null);
                tv_ciudad.setText(null);
                tv_descripcion.setText(null);
                tv_provincia.setText(null);
                tv_profesion.setText(null);
                deleteUsuario(Integer.valueOf(id));
                // Obtener una referencia a SharedPreferences
                SharedPreferences preferences = getSharedPreferences("user_data", Context.MODE_PRIVATE);
                SharedPreferences.Editor editor = preferences.edit();
                editor.remove("id");
                editor.putString("nombre", null);
                editor.putString("apellido", null);
                editor.putString("correo", null);
                editor.putString("telefono", null);
                editor.putString("ciudad", null);
                editor.putString("descripcion", null);
                editor.putString("provincia", null);
                editor.putString("profesion", null);
                editor.putString("foto", null);
                editor.putString("tipo_usuario", null);
                editor.apply();
                Intent intent =new Intent(Perfil.this, MainActivity.class);
                startActivity(intent);
                finish();
            }
        });

    btnActualizarPerfil.setOnClickListener(new View.OnClickListener() {
        @Override
        public void onClick(View v) {
            Usuario usuario = new Usuario();
            usuario.setId(id);
            usuario.setNombre(tv_nombre.getText().toString());
            usuario.setApellido(tv_apellido.getText().toString());
            usuario.setTelefono(tv_telefono.getText().toString());
            usuario.setCorreo(tv_correo.getText().toString());
            usuario.setCiudad(tv_ciudad.getText().toString());
            usuario.setProvincia(tv_provincia.getText().toString());
            usuario.setProfesion(tv_profesion.getText().toString());
            usuario.setDescripcion(tv_descripcion.getText().toString());

            updateUsuario(usuario,Integer.valueOf(id));
            Intent intent =new Intent(Perfil.this, PerfilTerminosActivity.class);
            startActivity(intent);

        }
    });
    }
    public void listServicio(final Spinner spinner) {
        servicioService = Apis.getServicioService();
        Call<List<Servicio>> call = servicioService.getServicios();
        call.enqueue(new Callback<List<Servicio>>() {
            @Override
            public void onResponse(Call<List<Servicio>> call, Response<List<Servicio>> response) {
                if (response.isSuccessful()) {
                    List<Servicio> listarServicio = response.body();
                    if (listarServicio != null && !listarServicio.isEmpty()) {
                        // Crear una lista de nombres de servicios
                        List<String> nombresServicios = new ArrayList<>();
                        // Agregar la opción "Selecciona tu servicio" al principio
                        nombresServicios.add("Selecciona tu servicio");
                        for (Servicio servicio : listarServicio) {
                            nombresServicios.add(servicio.getNombre());
                        }

                        // Crear un ArrayAdapter para el Spinner
                        ArrayAdapter<String> adapter = new ArrayAdapter<>(Perfil.this, android.R.layout.simple_spinner_item, nombresServicios);
                        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);

                        // Establecer el ArrayAdapter en el Spinner
                        spinner.setAdapter(adapter);
                    }
                }
            }
            @Override
            public void onFailure(Call<List<Servicio>> call, Throwable t) {
                Log.e("Error no pude recuperar la lista de servicios:", t.getMessage());
            }
        });
    }
    public void updateUsuario(Usuario usuario,int id){
        usuarioService= Apis.getUsuarioService();
        Call<Usuario>call=usuarioService.actPerfil(usuario,id);
        call.enqueue(new Callback<Usuario>() {
            @Override
            public void onResponse(Call<Usuario> call, Response<Usuario> response) {
                if(response.isSuccessful()){
                    Toast.makeText(Perfil.this,"Se Actualizó con éxito su Perfil",Toast.LENGTH_LONG).show();
                }
            }
            @Override
            public void onFailure(Call<Usuario> call, Throwable t) {
                Log.e("Error al actualizar su Perfil:",t.getMessage());
            }
        });
        Intent intent =new Intent(Perfil.this, PerfilTerminosActivity.class);
        startActivity(intent);
    }
    public void deleteUsuario(int id){
        usuarioService= Apis.getUsuarioService();
        Call<Usuario> call=usuarioService.deleteUsuario(id);
        call.enqueue(new Callback<Usuario>() {
            @Override
            public void onResponse(Call<Usuario> call, Response<Usuario> response) {
                if(response.isSuccessful()){
                    Toast.makeText(Perfil.this,"Se Elimino el registro con éxito",Toast.LENGTH_LONG).show();
                }
            }

            @Override
            public void onFailure(Call<Usuario> call, Throwable t) {
                Log.e("Error al eliminar el Usuario:",t.getMessage());
            }
        });
        Intent intent =new Intent(Perfil.this, MainActivity.class);
        startActivity(intent);
    }
    private String cargarImagen(Usuario usuario) {
        if (usuario.getFoto() != null && !usuario.getFoto().isEmpty()) {
            return tec.ispc.workflix.utils.Environment.URL + usuario.getFoto();
        } else {
            return "android.resource://" + context.getPackageName() + "/" + R.drawable.profesional_1;
        }
    }
    /*
        private String convertirImgString(Bitmap bitmap) {
        ByteArrayOutputStream array = new ByteArrayOutputStream();
        bitmap.compress(Bitmap.CompressFormat.JPEG,100,array);
        byte [] imagenByte = array.toByteArray();
        String imagenString = Base64.encodeToString(imagenByte,Base64.DEFAULT);
        return imagenString;
    }

    public void subirFoto(View view) {
        cargarImagen();
    }

    private void cargarImagen() {

        final CharSequence[] opciones = {"Cargar Imagen", "Cancelar"};
        final AlertDialog.Builder alertOpciones = new AlertDialog.Builder(Perfil.this);
        alertOpciones.setTitle("Seleccione una Opcion");
        alertOpciones.setItems(opciones, new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialogInterface, int i) {
                (opciones[i].equals("Tomar Foto")){
                    tomarFotografia();}
                   if ( opciones[i].equals("Cargar Imagen")){
                        Intent intent = new Intent(Intent.ACTION_PICK, MediaStore.Images.Media.EXTERNAL_CONTENT_URI);
                        intent.setType("image/");
                        startActivityForResult(intent.createChooser(intent,"Seleccionar aplicación: "),COD_SELECCIONA);
                    }else {
                        dialogInterface.dismiss();
                    }
            }
        });

        alertOpciones.show();
    }

    private void tomarFotografia() {
        File fileImagen = new File(Environment.getExternalStorageDirectory(),RUTA_IMAGEN);
        boolean isCreada = fileImagen.exists();
        String nombreImagen = "";
        if (isCreada==false){
            isCreada=fileImagen.mkdirs();
        }
        if (isCreada==true){
            nombreImagen = (System.currentTimeMillis()/1000)+".jpg";
        }
        path = Environment.getExternalStorageDirectory()+File.separator+RUTA_IMAGEN+File.separator+nombreImagen;

        File imagen = new File(path);

        Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        intent.putExtra(MediaStore.EXTRA_OUTPUT, Uri.fromFile(imagen));
        startActivityForResult(intent,COD_FOTO);
    };

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (resultCode==RESULT_OK){
            switch (requestCode){
                case COD_SELECCIONA:
                    Uri miPath = data.getData();
                    // Guarda la URI de la imagen para su posterior uso
                    rutaImagen = miPath.toString();
                    // Guarda "rutaImagen" en la base de datos o en SharedPreferences
                    //imagen.setImageURI(miPath);
                    try {
                        bitmap=MediaStore.Images.Media.getBitmap(getApplicationContext().getContentResolver(),miPath);
                        imagenFoto.setImageBitmap(bitmap);
                    } catch (IOException e) {
                        throw new RuntimeException(e);
                    }
                    break;
                case COD_FOTO:    protected void onCreate(Bundle savedInstanceState) {
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
            });    protected void onCreate(Bundle savedInstanceState) {
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


                    MediaScannerConnection.scanFile(this, new String[]{path}, null, new MediaScannerConnection.OnScanCompletedListener() {
                        @Override
                        public void onScanCompleted(String s, Uri uri) {
                            Log.i("Ruta de almacenamiento","Path: "+path);
                        }
                    });
                    bitmap = BitmapFactory.decodeFile(path);
                    imagenFoto.setImageBitmap(bitmap);
            }

        }
    }

     */
}

