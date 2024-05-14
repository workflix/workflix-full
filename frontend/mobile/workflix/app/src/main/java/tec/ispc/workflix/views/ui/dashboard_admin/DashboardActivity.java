package tec.ispc.workflix.views.ui.dashboard_admin;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.ListView;

import androidx.appcompat.app.AppCompatActivity;

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

public class DashboardActivity extends AppCompatActivity {
    UsuarioService usuarioService;
    List<Usuario> listarUsuario= new ArrayList<>();
    ListView listView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_listar_usuarios);

        listView=(ListView)findViewById(R.id.listViewUsuarios);
        listUsuario();

        FloatingActionButton fab = findViewById(R.id.fabeUsuario);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent=new Intent(DashboardActivity.this, UsuarioActivity.class);
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
    public void listUsuario(){
        usuarioService= Apis.getUsuarioService();
        Call<List<Usuario>> call=usuarioService.getUsuarios();
        call.enqueue(new Callback<List<Usuario>>() {
            @Override
            public void onResponse(Call<List<Usuario>> call, Response<List<Usuario>> response) {
                if(response.isSuccessful()) {
                    List<Usuario> usuarios = response.body();
                    listarUsuario = filtrarUsuariosAdmin(usuarios);
                    listView.setAdapter(new UsuarioAdapter(DashboardActivity.this,R.layout.content_listar,listarUsuario));
                }
            }
            @Override
            public void onFailure(Call<List<Usuario>> call, Throwable t) {
                Log.e("Error no pude recuperar la lista de usuarios:",t.getMessage());
            }
        });
    }
    private List<Usuario> filtrarUsuariosAdmin(List<Usuario> usuarios) {
        List<Usuario> usuariosAdmin = new ArrayList<>();
        for (Usuario usuario : usuarios) {
            if (usuario.isIs_admin()) {
                usuariosAdmin.add(usuario);
            }
        }
        return usuariosAdmin;
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }
}