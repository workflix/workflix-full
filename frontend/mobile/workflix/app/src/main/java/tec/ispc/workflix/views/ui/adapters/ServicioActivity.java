package tec.ispc.workflix.views.ui.adapters;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import tec.ispc.workflix.R;
import tec.ispc.workflix.models.Servicio;
import tec.ispc.workflix.utils.Apis;
import tec.ispc.workflix.utils.ServicioService;
import tec.ispc.workflix.views.ui.dashboard.DashboardServiciosActivity;

public class ServicioActivity extends AppCompatActivity {

    ServicioService servicioService;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_servicio);

        TextView iduser=(TextView)findViewById(R.id.IdServicio);
        EditText txtId=(EditText)findViewById(R.id.txtIdServicio);

        TextView nombre=(TextView)findViewById(R.id.NombreServicio);
        final EditText txtNombre=(EditText)findViewById(R.id.txtNombreServicio);

        Button btnSave=(Button)findViewById(R.id.btnSaveServicio);
        Button btnVolver=(Button)findViewById(R.id.btnVolverServicio);
        Button btnEliminar=(Button)findViewById(R.id.btnEliminarServicio);

        Bundle bundle=getIntent().getExtras();
        final String id = bundle.getString("ID");
        String nom=bundle.getString("NOMBRE");

        txtId.setText(id);
        txtNombre.setText(nom);


        if(id.trim().length()==0||id.equals("")){
            iduser.setVisibility(View.INVISIBLE);
            txtId.setVisibility(View.INVISIBLE);
        }

        btnSave.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Servicio servicio = new Servicio();

                servicio.setNombre(txtNombre.getText().toString());


                if(id.trim().length()==0||id.equals("")){
                    addServicio(servicio);
                    Intent intent =new Intent(ServicioActivity.this, DashboardServiciosActivity.class);
                    startActivity(intent);
                }else{
                    updateServicio(servicio,Integer.valueOf(id));
                    Intent intent =new Intent(ServicioActivity.this, DashboardServiciosActivity.class);
                    startActivity(intent);
                }

            }
        });
        btnEliminar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                deleteServicio(Integer.valueOf(id));
                Intent intent =new Intent(ServicioActivity.this, DashboardServiciosActivity.class);
                startActivity(intent);
            }
        });

        btnVolver.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent =new Intent(ServicioActivity.this, DashboardServiciosActivity.class);
                startActivity(intent);
            }
        });

    }

    public void addServicio(Servicio servicio){
        servicioService = Apis.getServicioService();
        Call<Servicio> call=servicioService.addServicio(servicio);
        call.enqueue(new Callback<Servicio>() {
            @Override
            public void onResponse(Call<Servicio> call, Response<Servicio> response) {
                if(response.isSuccessful()){
                    Toast.makeText(ServicioActivity.this,"Se agrego un Servicio con éxito",Toast.LENGTH_LONG).show();
                }
            }
            @Override
            public void onFailure(Call<Servicio> call, Throwable t) {
                Log.e("Error al agregar un Servicio:",t.getMessage());
            }
        });
        Intent intent =new Intent(ServicioActivity.this, DashboardServiciosActivity.class);
        startActivity(intent);
    }
    public void updateServicio(Servicio servicio,int id){
        servicioService = Apis.getServicioService();
        Call<Servicio>call=servicioService.updateServicio(servicio,id);
        call.enqueue(new Callback<Servicio>() {
            @Override
            public void onResponse(Call<Servicio> call, Response<Servicio> response) {
                if(response.isSuccessful()){
                    Toast.makeText(ServicioActivity.this,"Se Actualizó con éxito el Servicio",Toast.LENGTH_LONG).show();
                }
            }
            @Override
            public void onFailure(Call<Servicio> call, Throwable t) {
                Log.e("Error al actualizar el Servicio:",t.getMessage());
            }
        });
        Intent intent =new Intent(ServicioActivity.this, DashboardServiciosActivity.class);
        startActivity(intent);
    }
    public void deleteServicio(int id){
        servicioService = Apis.getServicioService();
        Call<Servicio>call=servicioService.deleteServicio(id);
        call.enqueue(new Callback<Servicio>() {
            @Override
            public void onResponse(Call<Servicio> call, Response<Servicio> response) {
                if(response.isSuccessful()){
                    Toast.makeText(ServicioActivity.this,"Se Elimino el registro de servicio con éxito",Toast.LENGTH_LONG).show();
                }
            }

            @Override
            public void onFailure(Call<Servicio> call, Throwable t) {
                Log.e("Error al eliminar el Servicio:",t.getMessage());
            }
        });
        Intent intent =new Intent(ServicioActivity.this, ServicioActivity.class);
        startActivity(intent);
    }
}