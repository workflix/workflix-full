package tec.ispc.workflix.views.ui.dashboard;

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
import tec.ispc.workflix.models.Servicio;
import tec.ispc.workflix.utils.Apis;
import tec.ispc.workflix.utils.ServicioService;
import tec.ispc.workflix.views.ui.adapters.ServicioActivity;
import tec.ispc.workflix.views.ui.adapters.ServicioAdapter;

public class DashboardServiciosActivity extends AppCompatActivity {
    ServicioService servicioService;
    List<Servicio> listarServicio= new ArrayList<>();
    ListView listView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_dashboard_servicios);

        listView=(ListView)findViewById(R.id.listViewServicios);
        listServicio();

        FloatingActionButton fab = findViewById(R.id.fabeServicio);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent=new Intent(DashboardServiciosActivity.this, ServicioActivity.class);
                intent.putExtra("ID","");
                intent.putExtra("NOMBRE","");
                startActivity(intent);
            }
        });
    }


    public void listServicio() {
        servicioService= Apis.getServicioService();
        Call<List<Servicio>> call=servicioService.getServicios();
        call.enqueue(new Callback<List<Servicio>>() {
            @Override
            public void onResponse(Call<List<Servicio>> call, Response<List<Servicio>> response) {
                if(response.isSuccessful()) {
                    listarServicio = response.body();
                    listView.setAdapter(new ServicioAdapter(DashboardServiciosActivity.this,R.layout.content_listar_servicios,listarServicio));
                }
            }

            @Override
            public void onFailure(Call<List<Servicio>> call, Throwable t) {
                Log.e("Error no pude recuperar la lista de servicios:",t.getMessage());
            }
        });
    }
}