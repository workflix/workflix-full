package tec.ispc.workflix.views.ui.menu;

import android.content.Intent;
import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;

import tec.ispc.workflix.R;
import tec.ispc.workflix.views.ui.catalogo.CatalogoActivity;
import tec.ispc.workflix.views.ui.login.LoginActivity;


public class HomeFragment extends Fragment {
    private Button btn_home;

    private Button btn_home2;
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_home, container, false);

        btn_home2 = view.findViewById(R.id.btn_home2);
        btn_home2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Intent intent = new Intent(getActivity(), CatalogoActivity.class);
                startActivity(intent);
            }
        });




        btn_home = view.findViewById(R.id.btn_home);
        btn_home.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Intent intent = new Intent(getActivity(), LoginActivity.class);
                startActivity(intent);
            }
        });

        return view;

    }
}