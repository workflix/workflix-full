package com.tec.workflix.models;

import jakarta.validation.constraints.NotBlank;

public class Clave {
    @NotBlank
    private String clave;
    @NotBlank
    private String confirmarClave;
    @NotBlank
    private String tokenClave;

    public Clave(String clave, String confirmarClave, String tokenClave) {
        this.clave = clave;
        this.confirmarClave = confirmarClave;
        this.tokenClave = tokenClave;
    }

    public @NotBlank String getConfirmarClave() {
        return confirmarClave;
    }

    public void setConfirmarClave(@NotBlank String confirmarClave) {
        this.confirmarClave = confirmarClave;
    }

    public @NotBlank String getTokenClave() {
        return tokenClave;
    }

    public void setTokenClave(@NotBlank String tokenClave) {
        this.tokenClave = tokenClave;
    }

    public @NotBlank String getClave() {
        return clave;
    }

    public void setClave(@NotBlank String clave) {
        this.clave = clave;
    }
}
