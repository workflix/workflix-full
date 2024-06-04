package com.tec.workflix.models;

public class Email {
    private String remitente;
    private String destinatario;
    private String asunto;
    private String usuarioNombre;
    private String usuarioApellido;
    private String tokenClave;

    public Email(String remitente, String destinatario, String asunto, String usuarioNombre, String usuarioApellido, String tokenClave) {
        this.remitente = remitente;
        this.destinatario = destinatario;
        this.asunto = asunto;
        this.usuarioNombre = usuarioNombre;
        this.usuarioApellido = usuarioApellido;
        this.tokenClave = tokenClave;
    }

    public String getRemitente() {
        return remitente;
    }

    public void setRemitente(String remitente) {
        this.remitente = remitente;
    }

    public String getDestinatario() {
        return destinatario;
    }

    public void setDestinatario(String destinatario) {
        this.destinatario = destinatario;
    }

    public String getAsunto() {
        return asunto;
    }

    public void setAsunto(String asunto) {
        this.asunto = asunto;
    }

    public String getUsuarioNombre() {
        return usuarioNombre;
    }

    public void setUsuarioNombre(String usuarioNombre) {
        this.usuarioNombre = usuarioNombre;
    }

    public String getUsuarioApellido() {
        return usuarioApellido;
    }

    public void setUsuarioApellido(String usuarioApellido) {
        this.usuarioApellido = usuarioApellido;
    }

    public String getTokenClave() {
        return tokenClave;
    }

    public void setTokenClave(String tokenClave) {
        this.tokenClave = tokenClave;
    }
}
