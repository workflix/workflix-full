package tec.ispc.workflix.views.ui.dashboard_admin;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ListView;

import com.google.android.material.floatingactionbutton.FloatingActionButton;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import tec.ispc.workflix.R;
import tec.ispc.workflix.models.Usuario;
import tec.ispc.workflix.utils.Apis;
import tec.ispc.workflix.utils.UsuarioService;
import tec.ispc.workflix.views.ui.adapters.UsuarioActivity;
import tec.ispc.workflix.views.ui.adapters.UsuarioAdapter;

public class DashboardUsuariosActivity extends AppCompatActivity {

    UsuarioService usuarioService;
    List<Usuario> listarUsuario= new ArrayList<>();
    ListView listView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.dashboard_usuarios);

        listView=(ListView)findViewById(R.id.listViewUsuarios);
        listUsuario();

        FloatingActionButton fab = findViewById(R.id.fabeUsuario);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent=new Intent(DashboardUsuariosActivity.this, UsuarioActivity.class);
                intent.putExtra("ID","");
                intent.putExtra("NOMBRE","");
                intent.putExtra("APELLIDO","");
                intent.putExtra("CLAVE","");
                intent.putExtra("TELEFONO","");
                intent.putExtra("CORREO","");

                startActivity(intent);
            }
        });
    }
    public void listUsuario() {
        usuarioService = Apis.getUsuarioService();
        Call<List<Usuario>> call = usuarioService.getUsuarios();
        call.enqueue(new Callback<List<Usuario>>() {
            @Override
            public void onResponse(Call<List<Usuario>> call, Response<List<Usuario>> response) {
                if (response.isSuccessful()) {
                    List<Usuario> usuarios = response.body();
                    // Filtrar la lista para mostrar solo usuarios que no son administradores
                    listarUsuario = filtrarUsuariosNoAdmin(usuarios);
                    listView.setAdapter(new UsuarioAdapter(DashboardUsuariosActivity.this, R.layout.content_listar, listarUsuario));
                }
            }

            @Override
            public void onFailure(Call<List<Usuario>> call, Throwable t) {
                Log.e("Error no pude recuperar la lista de usuarios:", t.getMessage());
            }
        });
    }

    private List<Usuario> filtrarUsuariosNoAdmin(List<Usuario> usuarios) {
        List<Usuario> usuariosNoAdmin = new ArrayList<>();
        for (Usuario usuario : usuarios) {
            if (!usuario.isIs_admin()) {
                usuariosNoAdmin.add(usuario);
            }
        }
        return usuariosNoAdmin;
    }

}