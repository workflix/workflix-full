package tec.ispc.workflix.views.ui.perfil.perfil_terminos;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import tec.ispc.workflix.R;

public class terminosCondiciones extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_terminos_condiciones);
    }

    public void aceptar (View view) {
        Intent intent = new Intent(this, PerfilTerminosActivity.class);
        startActivity(intent);
        finish();
    }
}