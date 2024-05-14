package tec.ispc.workflix.utils;
import java.util.List;
import retrofit2.Call;
import retrofit2.http.GET;
import tec.ispc.workflix.models.Usuario;
import retrofit2.http.Body;
import retrofit2.http.POST;
import retrofit2.http.Path;
public interface UsuarioService {
    @GET("listar")
    Call<List<Usuario>> getUsuarios();

    @POST("agregar")
    Call<Usuario>addUsuario(@Body Usuario usuario);

    @POST("actualizar/{id}")
    Call<Usuario>updateUsuario(@Body Usuario usuario,@Path("id") int id);

    @POST("eliminar/{id}")
    Call<Usuario>deleteUsuario(@Path("id")int id);

    @POST("perfil/{id}")
    Call<Usuario>actPerfil(@Body Usuario usuario,@Path("id")int id);

}
