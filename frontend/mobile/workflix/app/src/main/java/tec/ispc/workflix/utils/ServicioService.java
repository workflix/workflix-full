package tec.ispc.workflix.utils;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.DELETE;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.PUT;
import retrofit2.http.Path;
import tec.ispc.workflix.models.Servicio;

public interface ServicioService {
    @GET("listar")
    Call<List<Servicio>> getServicios();

    @POST("agregar")
    Call<Servicio>addServicio(@Body Servicio servicio);

    @PUT("actualizar/{id}")
    Call<Servicio>updateServicio(@Body Servicio servicio,@Path("id") int id);

    @DELETE("eliminar/{id}")
    Call<Servicio>deleteServicio(@Path("id")int id);
}
