package com.tec.workflix.models;

import jakarta.persistence.*;

import java.util.List;

@Table(name = "Servicio")
@Entity
public class Servicio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;
    private String nombre;

    @OneToMany(mappedBy = "servicio", cascade = CascadeType.ALL)
    private List<UsuarioServicio> usuarioServicios;

    public Servicio() {
    }

    public Servicio(int id, String nombre) {
        this.id = id;
        this.nombre = nombre;
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


    public List<UsuarioServicio> getUsuarioServicios() {
        return usuarioServicios;
    }

    public void setUsuarioServicios(List<UsuarioServicio> usuarioServicios) {
        this.usuarioServicios = usuarioServicios;
    }
}
