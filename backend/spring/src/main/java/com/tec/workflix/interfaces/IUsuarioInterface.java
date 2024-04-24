package com.tec.workflix.interfaces;

import com.tec.workflix.models.Usuario;

import java.util.List;
import java.util.Map;

public interface IUsuarioInterface {
    public List<Map<String, Object>> listar();
    public List<Map<String, Object>>listarId(int id);
    public int add(Usuario usuario);
    public int edit(Usuario usuario);
    public int actualizarPerfil(Usuario usuario);
    public int delete(int id);

}
