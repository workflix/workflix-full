package tec.ispc.workflix.views.ui.dashboard_admin;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;

import tec.ispc.workflix.R;
import tec.ispc.workflix.views.MainActivity;

public class DashboardAdminActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.dashboard_admin);
    }

    public void usuarios(View view){
        Intent verIntent = new Intent(this, DashboardUsuariosActivity.class);
        startActivity(verIntent);
    }

    public void servicios(View view){
        Intent verServicios = new Intent(this, DashboardServiciosActivity.class);
        startActivity(verServicios);
    }


    public void administradores(View view) {
        Intent verAdmin = new Intent(this, DashboardAdminVistaActivity.class);
        startActivity(verAdmin);
    }
    public void cerrarSesionAdmin(View view){
        // Obtener una referencia a SharedPreferences
        SharedPreferences preferences = getSharedPreferences("user_data", Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = preferences.edit();
        editor.putString("nombre", null);
        editor.putString("apellido", null);
        editor.putString("correo", null);
        editor.putString("telefono", null);
        editor.remove("is_admin");
        editor.apply();
        // Vuelvo al home
        Intent irAlHome = new Intent(DashboardAdminActivity.this, MainActivity.class);
        startActivity(irAlHome);
        finish();

    }
}
