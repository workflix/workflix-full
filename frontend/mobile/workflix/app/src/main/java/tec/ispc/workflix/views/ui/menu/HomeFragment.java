package tec.ispc.workflix.views.ui.menu;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebView;
import android.widget.Button;

import tec.ispc.workflix.R;
import tec.ispc.workflix.utils.Environment;
import tec.ispc.workflix.utils.OnBackPressedListener;
import tec.ispc.workflix.views.ui.tarjetas.CatalogoActivity;
import tec.ispc.workflix.views.ui.auth.login.LoginActivity;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import androidx.appcompat.app.AppCompatActivity;
public class HomeFragment extends Fragment implements OnBackPressedListener {

    private Button btn_home;
    private Button btn_home2;
    private WebView webView;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_home, container, false);

        btn_home = view.findViewById(R.id.btn_home);
        btn_home2 = view.findViewById(R.id.btn_home2);
        webView = view.findViewById(R.id.webview);

        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webView.setWebViewClient(new WebViewClient());
        webView.loadUrl(Environment.URL_WEB);

        SharedPreferences preferences = getActivity().getSharedPreferences("user_data", Context.MODE_PRIVATE);
        String tipo_usuario = preferences.getString("tipo_usuario", "");

        if ("profesional".equalsIgnoreCase(tipo_usuario)) {
            btn_home.setVisibility(View.GONE);
        } else {
            btn_home.setVisibility(View.VISIBLE);
        }

        btn_home2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getActivity(), CatalogoActivity.class);
                startActivity(intent);
            }
        });

        btn_home.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getActivity(), LoginActivity.class);
                startActivity(intent);
            }
        });

        return view;
    }

    @Override
    public void onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack();
        } else {
            getActivity().onBackPressed();
        }
    }
}