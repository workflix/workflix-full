package com.tec.workflix.controllers;

import java.util.List;
import java.util.Map;

import com.tec.workflix.models.Usuario;
import com.tec.workflix.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.net.MalformedURLException;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.web.*;
@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("/usuarios")
public class UsuarioController {
    private static String UPLOAD_DIR = "src/main/resources/static/images/";
    @Autowired
    private UsuarioService service;

    @GetMapping("/listar")
    public List<Map<String, Object>> listar(Model model) {
        return service.listar();
    }

    @PostMapping("/agregar")
    public String save(@RequestBody Usuario usuario, Model model) {
        int id=service.add(usuario);
        if(id==0) {
            return "No se pudo Registrar!";
        }
        return "Se registró con éxito!";
    }
    @PutMapping("/actualizar/{id}")
    public String save(@RequestBody Usuario usuario, @PathVariable int id, Model model) {
        usuario.setId(id);
        int r = service.edit(usuario);
        if (r == 0) {
            return "No se pudo Actualizar!";
        }
        return "Se actualizó con éxito!";
    }

    @PostMapping("/perfil/{id}")
    public String updatePerfil(@RequestBody Usuario usuario, @PathVariable int id, Model model){
        usuario.setId(id);
        int r= service.actualizarPerfil(usuario);
        if (r==0){
            return "No se pudo actualizar el Perfil";
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
    @PutMapping("/recomendacion/{id}")
    public String recomendarPerfil(@RequestBody Usuario usuario, @PathVariable int id, Model model){
        usuario.setId(id);
        int r= service.recomendarPerfil(usuario);
        if (r==0){
            return "No se pudo actualizar el Perfil";
        }
        return "Se actualizó con éxito!";
    }
    @GetMapping("/destacados")
    public ResponseEntity<List<Usuario>> getDestacadosPerfiles() {
        List<Usuario> usuarios = service.destacadosPerfil();
        return ResponseEntity.ok(usuarios);
    }

    @PostMapping("/upload/{id}")
    public ResponseEntity<String> uploadImage(@PathVariable Integer id, @RequestParam("file") MultipartFile file) {
        try {
            if (file.isEmpty()) {
                return ResponseEntity.badRequest().body("Archivo vacío");
            }
            System.out.println("Subida de archivo para el usuario con ID: " + id);
            System.out.println("Nombre del archivo: " + file.getOriginalFilename());
            // Guardar archivo en servidor
            Path path = Paths.get(UPLOAD_DIR + file.getOriginalFilename());
            Files.write(path, file.getBytes());

            // Guardar ruta en base de datos
            String imageUrl = "/images/" + file.getOriginalFilename();
            service.updateUserProfileImage(id, imageUrl);

            return ResponseEntity.ok("Imagen subida y ruta guardada con éxito.");
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Error al subir la imagen.");
        }
    }
    @GetMapping("/imagen/{nombreImagen}")
    public ResponseEntity<Resource> getImagen(@PathVariable String nombreImagen) {
        try {
            Path path = Paths.get(UPLOAD_DIR + nombreImagen);
            Resource resource = new UrlResource(path.toUri());

            if(resource.exists() && resource.isReadable()) {
                return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(resource);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (MalformedURLException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
/*
   @PostMapping("/actualizar/{id}")
    public String save(@RequestBody Usuario usuario, @PathVariable int id, Model model) {
        usuario.setId(id);
        int r=service.edit(usuario);
        if(r==0) {
            return "No se pudo Actualizar!";
        }
        return "Se actualizó con éxito!";
    }

      @PostMapping("/eliminar/{id}")
    public String delete(@PathVariable int id,Model model) {
        int r=service.delete(id);
        if(r==0) {
            return "Registro No Eliminado!";
        }
        return "Registro Eliminado!";
    }
*/