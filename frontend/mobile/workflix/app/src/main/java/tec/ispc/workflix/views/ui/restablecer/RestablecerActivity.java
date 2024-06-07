package tec.ispc.workflix.views.ui.restablecer;

import androidx.appcompat.app.AppCompatActivity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.app.AlertDialog;
import android.content.DialogInterface;

import tec.ispc.workflix.R;
import tec.ispc.workflix.views.ui.auth.login.LoginActivity;

public class RestablecerActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_restablecer);
    }

    public void irIngreso(View view) {
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setMessage("Se ha enviado un enlace de recuperación a tu correo electrónico.");
        builder.setPositiveButton("OK", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                dialog.dismiss();
                Intent intent = new Intent(RestablecerActivity.this, LoginActivity.class);
                startActivity(intent);
            }
        });
        AlertDialog dialog = builder.create();
        dialog.show();
    }

    public void volver(View view) {
        Intent intent = new Intent(RestablecerActivity.this, LoginActivity.class);
        startActivity(intent);
    }
}
