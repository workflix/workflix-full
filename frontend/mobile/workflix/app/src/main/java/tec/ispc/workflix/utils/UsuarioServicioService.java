package tec.ispc.workflix.utils;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;
import tec.ispc.workflix.models.UsuarioServicio;

public interface UsuarioServicioService {
    @GET("listar")
    Call<List<UsuarioServicio>> getUsuariosServicios();
}
