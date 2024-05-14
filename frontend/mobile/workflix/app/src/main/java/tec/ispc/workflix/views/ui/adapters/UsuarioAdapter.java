package tec.ispc.workflix.views.ui.adapters;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import java.util.List;

import tec.ispc.workflix.R;
import tec.ispc.workflix.models.Usuario;

public class UsuarioAdapter extends ArrayAdapter<Usuario>{
    private Context context;
    private List<Usuario>usuarios;

    public UsuarioAdapter(@NonNull Context context, int resource, @NonNull List<Usuario> objects) {
        super(context, resource, objects);
        this.context = context;
        this.usuarios = objects;
    }

    public View getView(final int position, @Nullable View convertView, @NonNull ViewGroup parent) {
        LayoutInflater layoutInflater=(LayoutInflater)context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        View rowView=layoutInflater.inflate(R.layout.content_listar,parent,false);

        TextView txtidUsuario=(TextView)rowView.findViewById(R.id.IdUsuarioList);
        TextView txtNombre=(TextView)rowView.findViewById(R.id.NombreUsuarioList);;
        TextView txtApellido=(TextView)rowView.findViewById(R.id.ApellidoUsuarioList);
        txtidUsuario.setText(String.format("ID:%d",usuarios.get(position).getId()));
        String nombreCompleto = usuarios.get(position).getNombre() + " " + usuarios.get(position).getApellido();
        txtNombre.setText(String.format("Usuario: %s", nombreCompleto));

        rowView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent=new Intent(context, UsuarioActivity.class);
                intent.putExtra("ID",String.valueOf(usuarios.get(position).getId()));
                intent.putExtra("NOMBRE",usuarios.get(position).getNombre());
                intent.putExtra("APELLIDO",usuarios.get(position).getApellido());
                intent.putExtra("TELEFONO",usuarios.get(position).getTelefono());
                intent.putExtra("CORREO",usuarios.get(position).getCorreo());
                intent.putExtra("CLAVE",usuarios.get(position).getClave());
                context.startActivity(intent);
            }
        });
        return rowView;

    }
}
