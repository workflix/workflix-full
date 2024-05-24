package com.tec.workflix.models;


import jakarta.persistence.*;
@Entity
@Table(name = "Usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;
    @Column
    private String nombre;
    @Column
    private String apellido;
    @Column
    private String correo;
    @Column
    private String telefono;
    @Column
    private String clave;
    @Column
    private String direccion;
    @Column
    private String ciudad;
    @Column
    private String provincia;
    @Column
    private String descripcion;

    @Column
    private Integer precio;
    @Column
    private String foto;
    @Column
    private String profesion;
    @Column(name = "tipo_usuario", columnDefinition = "VARCHAR(255) DEFAULT 'cliente'")
    private String tipoUsuario;
    @Column(columnDefinition = "INTEGER DEFAULT 0")
    private Integer recomendacion;
    public Usuario(int id, String nombre, String apellido, String correo, String telefono, String clave, String direccion, String ciudad, String provincia, String descripcion, Integer recomendacion, Integer precio, String foto, String profesion, String tipoUsuario) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.telefono = telefono;
        this.clave = clave;
        this.direccion = direccion;
        this.ciudad = ciudad;
        this.provincia = provincia;
        this.descripcion = descripcion;
        this.recomendacion = recomendacion;
        this.precio = precio;
        this.foto = foto;
        this.profesion = profesion;
        this.tipoUsuario = tipoUsuario;
    }
    public Usuario(int id) {
        this.id = id;
    }

    public Usuario() {
    }



    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getClave() {
        return clave;
    }

    public void setClave(String clave) {
        this.clave = clave;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public String getProvincia() {
        return provincia;
    }

    public void setProvincia(String provincia) {
        this.provincia = provincia;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public String getProfesion() {
        return profesion;
    }

    public void setProfesion(String profesion) {
        this.profesion = profesion;
    }

    public String getTipoUsuario() {
        return tipoUsuario;
    }

    public void setTipoUsuario(String tipoUsuario) {
        this.tipoUsuario = tipoUsuario;
    }

    public Integer getPrecio() {
        return precio;
    }

    public void setPrecio(Integer precio) {
        this.precio = precio;
    }
    public Integer getRecomendacion() {
        return recomendacion;
    }

    public void setRecomendacion(Integer recomendacion) {
        this.recomendacion = recomendacion;
    }

}

