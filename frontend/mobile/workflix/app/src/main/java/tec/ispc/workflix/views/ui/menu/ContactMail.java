package tec.ispc.workflix.views.ui.menu;

import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import androidx.fragment.app.Fragment;
import androidx.appcompat.app.AlertDialog;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.Toast;

import tec.ispc.workflix.R;
import tec.ispc.workflix.views.MainActivity;

public class ContactMail extends Fragment {
    private Button btEnviar;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_contact_mail, container, false);

        btEnviar = view.findViewById(R.id.btEnviar);
        btEnviar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Mostrar un AlertDialog de confirmación
                new AlertDialog.Builder(getContext())
                        .setTitle("Confirmación")
                        .setMessage("¿Desea enviar el formulario?")
                        .setPositiveButton("Sí", new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int which) {
                                // Acción para enviar el formulario
                                Toast.makeText(getContext(), "Formulario enviado", Toast.LENGTH_SHORT).show();
                                Intent intent = new Intent(getActivity(), MainActivity.class);
                                startActivity(intent);
                            }
                        })
                        .setNegativeButton("No", null)
                        .show();
            }
        });

        return view;
    }
}