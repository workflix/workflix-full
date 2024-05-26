package tec.ispc.workflix.models;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class UsuarioServicio {
    @SerializedName("id")
    @Expose
    private int id;

    @SerializedName("usuario_id")
    @Expose
    private int usuarioId; // Cambiar a int para representar solo el ID del usuario

    @SerializedName("servicio_id")
    @Expose
    private int servicioId; // Cambiar a int para representar solo el ID del servicio

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(int usuarioId) {
        this.usuarioId = usuarioId;
    }

    public int getServicioId() {
        return servicioId;
    }

    public void setServicioId(int servicioId) {
        this.servicioId = servicioId;
    }
}