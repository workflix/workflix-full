package tec.ispc.workflix.views.ui.tarjetas;

import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import java.util.ArrayList;
import java.util.List;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import tec.ispc.workflix.R;
import tec.ispc.workflix.models.Servicio;
import tec.ispc.workflix.models.Usuario;
import tec.ispc.workflix.models.UsuarioServicio;
import tec.ispc.workflix.utils.Apis;
import tec.ispc.workflix.utils.ServicioService;
import tec.ispc.workflix.utils.UsuarioService;

public class CatalogoActivity extends AppCompatActivity {
    private RecyclerView recyclerViewUsuarios;
    private CatalogoAdapter catalogoAdapter;
    private List<Usuario> listaDeUsuarios = new ArrayList<>();
    List<Servicio> listaDeServicios= new ArrayList<>();
    List<UsuarioServicio> listaDeUsuarioServicios= new ArrayList<>();

    private int serviciosCargados = 0;
    private int usuarioServiciosCargados = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_catalogo);

        recyclerViewUsuarios = findViewById(R.id.recyclerViewUsuarios);
        catalogoAdapter = new CatalogoAdapter(listaDeUsuarios, this);
        recyclerViewUsuarios.setLayoutManager(new LinearLayoutManager(this));
        recyclerViewUsuarios.setAdapter(catalogoAdapter);

        obtenerListaDeUsuarios();
    }
    public void listServicio() {
        ServicioService servicioService= Apis.getServicioService();
        Call<List<Servicio>> call=servicioService.getServicios();
        call.enqueue(new Callback<List<Servicio>>() {
            @Override
            public void onResponse(Call<List<Servicio>> call, Response<List<Servicio>> response) {
                if(response.isSuccessful()) {
                    listaDeServicios = response.body();
                    Log.d("listServicio", "Lista de servicios obtenida correctamente.");
                    serviciosCargados++;
                    // Verificar si ambas listas están cargadas
                    verificarListasCargadas();
                }
            }
            @Override
            public void onFailure(Call<List<Servicio>> call, Throwable t) {
                Log.e("Error no pude recuperar la lista de servicios:",t.getMessage());
            }
        });
    }
    private void obtenerListaDeUsuarios() {
        UsuarioService usuarioService = Apis.getUsuarioService();
        Call<List<Usuario>> call = usuarioService.getUsuarios();

        call.enqueue(new Callback<List<Usuario>>() {
            @Override
            public void onResponse(Call<List<Usuario>> call, Response<List<Usuario>> response) {
                if (response.isSuccessful()) {
                    listaDeUsuarios = response.body();
                   listaDeUsuarios = filtrarUsuariosNoAdmin(listaDeUsuarios);
                    catalogoAdapter.setUsuarios(listaDeUsuarios);
                } else {
                    Toast.makeText(CatalogoActivity.this, "Error al obtener usuarios", Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<List<Usuario>> call, Throwable t) {
                Log.e("Error al obtener lista de usuarios", t.getMessage());
            }
        });
    }
   private List<Usuario> filtrarUsuariosNoAdmin(List<Usuario> usuarios) {
    List<Usuario> usuariosNoAdmin = new ArrayList<>();
    for (Usuario usuario : usuarios) {
        if ("profesional".equals(usuario.getTipo_usuario())) {
            usuariosNoAdmin.add(usuario);
        }
    }
    return usuariosNoAdmin;
}

}