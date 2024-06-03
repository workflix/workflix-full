package com.tec.workflix.models;

import jakarta.validation.constraints.NotBlank;

public class Clave {
    @NotBlank
    private String clave;
    @NotBlank
    private String confirmarClave;
    @NotBlank
    private String tokenClave;


}
