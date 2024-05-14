package com.tec.workflix.controllers;

import com.tec.workflix.models.UsuarioServicio;
import com.tec.workflix.services.UsuarioServicioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/prestaciones")
public class UsuarioServicioController {
    @Autowired
    UsuarioServicioService service;

    @GetMapping("/listar")
    public List<Map<String, Object>> listar(Model model) {
        return service.listar();
    }

    @PostMapping("/actualizar/{id}")
    public String save(@RequestBody UsuarioServicio usuarioServicio, @PathVariable int id, Model model) {
        try {
            usuarioServicio.setId(id);
            int r = service.actualizarServicio(usuarioServicio);
            if (r == 0) {
                return "No se pudo Actualizar!";
            }
            return "Se actualizó con éxito!";
        } catch (Exception e) {
            e.printStackTrace();
            return "Error en la actualización: " + e.getMessage();
        }
    }
}
