package tec.ispc.workflix.views.ui.restablecer;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import tec.ispc.workflix.R;
import tec.ispc.workflix.views.ui.catalogo.CatalogoActivity;
import tec.ispc.workflix.views.ui.login.LoginActivity;

public class RestablecerActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_restablecer);
    }
    public void irIngreso(View view) {
        Intent Intent = new Intent(this, LoginActivity.class);
        startActivity(Intent);
    }
}
