package com.tec.workflix.controllers;

import com.tec.workflix.models.Servicio;
import com.tec.workflix.models.Usuario;
import com.tec.workflix.services.ServicioService;
import com.tec.workflix.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/servicios")
public class ServicioController {
    @Autowired
    private ServicioService service;

    @GetMapping("/listar")
    public List<Map<String, Object>> listar(Model model) {
        return service.listar();
    }

    @PostMapping("/agregar")
    public String save(@RequestBody Servicio servicio, Model model) {
        int id=service.add(servicio);
        if(id==0) {
            return "No se pudo Registrar!";
        }
        return "Se registró con éxito!";
    }

    @PostMapping("/actualizar/{id}")
    public String save(@RequestBody Servicio servicio, @PathVariable int id, Model model) {
        servicio.setId(id);
        int r=service.edit(servicio);
        if(r==0) {
            return "No se pudo Actualizar!";
        }
        return "Se actualizó con éxito!";
    }
    @PostMapping("/eliminar/{id}")
    public String delete(@PathVariable int id,Model model) {
        int r=service.delete(id);
        if(r==0) {
            return "Registro Servicio No Eliminado!";
        }
        return "Registro Servicio Eliminado!";
    }
}
