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
import tec.ispc.workflix.models.Servicio;

public class ServicioAdapter extends ArrayAdapter<Servicio> {
    private Context context;
    private List<Servicio>servicios;

    public ServicioAdapter(@NonNull Context context, int resource, @NonNull List<Servicio> objects) {
        super(context, resource, objects);
        this.context = context;
        this.servicios = objects;
    }
    public View getView(final int position, @Nullable View convertView, @NonNull ViewGroup parent) {
        LayoutInflater layoutInflater=(LayoutInflater)context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        View rowView=layoutInflater.inflate(R.layout.content_listar_servicios,parent,false);

        TextView txtidServicio=(TextView)rowView.findViewById(R.id.IdServicioList);
        TextView txtNombre=(TextView)rowView.findViewById(R.id.NombreServicioList);;

        txtidServicio.setText(String.format("ID:%d",servicios.get(position).getId()));
        String nombreCompleto = servicios.get(position).getNombre();
        txtNombre.setText(String.format("Servicio: %s", nombreCompleto));

        rowView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent=new Intent(context, ServicioActivity.class);
                intent.putExtra("ID",String.valueOf(servicios.get(position).getId()));
                intent.putExtra("NOMBRE",servicios.get(position).getNombre());
                context.startActivity(intent);
            }
        });
        return rowView;

    }
}
