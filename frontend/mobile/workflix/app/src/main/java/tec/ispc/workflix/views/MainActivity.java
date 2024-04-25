package tec.ispc.workflix.views;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;

import tec.ispc.workflix.R;
import androidx.annotation.NonNull;
import androidx.appcompat.app.ActionBarDrawerToggle;
import androidx.appcompat.widget.Toolbar;
import androidx.core.view.GravityCompat;
import androidx.drawerlayout.widget.DrawerLayout;

import android.os.Handler;
import android.view.Menu;
import android.view.MenuItem;

import com.google.android.material.navigation.NavigationView;

import tec.ispc.workflix.views.ui.dashboard_admin.DashboardActivity;
import tec.ispc.workflix.views.ui.dashboard_admin.DashboardAdminActivity;
import tec.ispc.workflix.views.ui.login.LoginActivity;
import tec.ispc.workflix.views.ui.menu.*;
import tec.ispc.workflix.views.ui.perfil_terminos.PerfilTerminosActivity;

public class MainActivity extends AppCompatActivity implements NavigationView.OnNavigationItemSelectedListener {

    private DrawerLayout drawerLayout;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mostrarElementos();

        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        drawerLayout = findViewById(R.id.drawer_layout);
        NavigationView navigationView = findViewById(R.id.nav_view);
        navigationView.setNavigationItemSelectedListener(this);

        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(this, drawerLayout, toolbar, R.string.open_nav,
                R.string.close_nav);
        drawerLayout.addDrawerListener(toggle);
        toggle.syncState();

        if (savedInstanceState == null) {
            getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container, new HomeFragment()).commit();
            navigationView.setCheckedItem(R.id.nav_home);
        }
        // Desactiva el título predeterminado
        getSupportActionBar().setDisplayShowTitleEnabled(false);

        // Habilita la vista personalizada
        getSupportActionBar().setDisplayShowCustomEnabled(true);

        // Establece el diseño personalizado
        getSupportActionBar().setCustomView(R.layout.custom_toolbar);
    };

  public void mostrarElementos(){
      SharedPreferences preferences = getSharedPreferences("user_data", Context.MODE_PRIVATE);
      boolean isAdmin = preferences.getBoolean("is_admin", /*Valor por defecto nulo:*/ false);

      NavigationView navigationView = findViewById(R.id.nav_view);
      if (preferences.contains("nombre")) {
          navigationView.getMenu().findItem(R.id.nav_login).setVisible(false);
      if (isAdmin) {
          navigationView.getMenu().findItem(R.id.dashboard_admin).setVisible(true);
          navigationView.getMenu().findItem(R.id.nav_perfil_terminos).setVisible(false);
      }else if(!isAdmin) {
          navigationView.getMenu().findItem(R.id.nav_perfil_terminos).setVisible(true);
          navigationView.getMenu().findItem(R.id.dashboard_admin).setVisible(false);
      }
      } else {
          navigationView.getMenu().findItem(R.id.dashboard_admin).setVisible(false);
          navigationView.getMenu().findItem(R.id.nav_perfil_terminos).setVisible(false);}};

    @Override
    public boolean onNavigationItemSelected(@NonNull MenuItem item) {
        int itemId = item.getItemId();

        if (itemId == R.id.nav_home) {
            getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container, new HomeFragment()).commit();
        }
        else if (itemId == R.id.nav_login) {
            // Iniciar la actividad de login
            Intent loginIntent = new Intent(this, LoginActivity.class);
            startActivity(loginIntent);
        }
        else if (itemId == R.id.nav_perfil_terminos) {
            // Iniciar la actividad de login
            Intent loginIntent = new Intent(this, PerfilTerminosActivity.class);
            startActivity(loginIntent);
        }
        else if (itemId == R.id.dashboard_admin) {
            // Iniciar la actividad de login
            Intent dashboardIntent = new Intent(this, DashboardAdminActivity.class);
            startActivity(dashboardIntent);
        }
        /*else if (itemId == R.id.nav_settings) {
            getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container, new SettingsFragment()).commit();
        }*/ /*else if (itemId == R.id.nav_share) {
            getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container, new ShareFragment()).commit();
        }*/
        else if (itemId == R.id.nav_contact_mail) {
            getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container, new ContactMail()).commit();
        }
        else if (itemId == R.id.nav_about) {
            getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container, new AboutFragment()).commit();
        } else if (itemId == R.id.nav_logout) {
            finishAffinity();
        };
        drawerLayout.closeDrawer(GravityCompat.START);
        return true;
    };
    @Override
    public void onBackPressed() {
        if (drawerLayout.isDrawerOpen(GravityCompat.START)) {
            drawerLayout.closeDrawer(GravityCompat.START);
        } else {
            super.onBackPressed();
        }
    };
    @Override
    public void onPointerCaptureChanged(boolean hasCapture) {
        super.onPointerCaptureChanged(hasCapture);
    }
};
