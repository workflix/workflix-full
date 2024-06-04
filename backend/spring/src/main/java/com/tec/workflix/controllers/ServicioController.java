package com.tec.workflix.controllers;

import com.tec.workflix.models.Servicio;
import com.tec.workflix.services.ServicioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
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

    @PutMapping("/actualizar/{id}")
    public String save(@RequestBody Servicio servicio, @PathVariable int id, Model model) {
        servicio.setId(id);
        int r=service.edit(servicio);
        if(r==0) {
            return "No se pudo Actualizar!";
        }
        return "Se actualizó con éxito!";
    }
    @DeleteMapping("/eliminar/{id}")
    public String delete(@PathVariable int id, Model model) {
        int r = service.delete(id);
        if (r == 0) {
            return "Registro No Eliminado!";
        }
        return "Registro Eliminado!";
    }
}
