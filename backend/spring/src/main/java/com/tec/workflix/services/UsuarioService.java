package com.tec.workflix.services;

import com.tec.workflix.interfaces.IUsuarioInterface;
import com.tec.workflix.models.Usuario;
import com.tec.workflix.modelsDAO.UsuarioDAO;
import com.tec.workflix.repository.IUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service

public class UsuarioService implements IUsuarioInterface {

    @Autowired

    UsuarioDAO dao;

    @Override
    public List<Map<String, Object>> listar() {
        return dao.listar();
    }

    @Override
    public List<Map<String, Object>> listarId(int id) {
        return null;
    }

    @Override
    public int add(Usuario usuario) {
        return dao.add(usuario);
    }

    @Override
    public int edit(Usuario usuario) {
        return dao.edit(usuario);
    }

    @Override
    public int delete(int id) {
        return dao.delete(id);
    }

    @Override
    public int actualizarPerfil(Usuario usuario) {
        return  dao.actualizarPerfil(usuario);
    }
    @Override
    public int recomendarPerfil(Usuario usuario) {
        return dao.recomendarPerfil(usuario);
    }
    @Override
    public List<Usuario> destacadosPerfil() {
        return dao.destacadosPerfil();
    }
    // Login
    @Autowired
    IUsuarioRepository usuarioRepository;

    public int registerNewUserServiceMethod(String nombre, String apellido, String correo, String clave, String telefono){
        return usuarioRepository.registerNewUser(nombre,apellido,correo,clave, telefono);
    }// Fin registro de usuario metodo


    public List<String> checkUserEmail(String correo){
        return usuarioRepository.checkUserEmail(correo);
    }// Fin metodo para checkear usuario por email
    public String checkUserPasswordByEmail(String correo){
        return usuarioRepository.checkUserPasswordByEmail(correo);
    }// Fin metodo para checkear password por correo
    public Usuario getUserDetailByEmail(String correo){
        return usuarioRepository.getUserDetailsByEmail(correo);
    }// Fin metodo para obtener detalle del usuario por correo

    public void updateUserProfileImage(Integer id, String imageUrl) {
       Usuario usuario = usuarioRepository.findById(id).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        usuario.setFoto(imageUrl);
        usuarioRepository.save(usuario);
    }

    public Optional<Usuario> getByEmail(String correo){
        try {
            //Obtener el usuario por correo
            return usuarioRepository.findByEmail(correo);
        } catch (Exception e) {
            System.err.println("Error al obtener el correo: " + e.getMessage());
            throw e;
        }
    }
}
