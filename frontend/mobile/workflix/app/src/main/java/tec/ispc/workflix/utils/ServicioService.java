package tec.ispc.workflix.utils;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.Path;
import tec.ispc.workflix.models.Servicio;

public interface ServicioService {
    @GET("listar")
    Call<List<Servicio>> getServicios();

    @POST("agregar")
    Call<Servicio>addServicio(@Body Servicio servicio);

    @POST("actualizar/{id}")
    Call<Servicio>updateServicio(@Body Servicio servicio,@Path("id") int id);

    @POST("eliminar/{id}")
    Call<Servicio>deleteServicio(@Path("id")int id);
}
