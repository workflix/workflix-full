package com.tec.workflix.services;

import com.tec.workflix.interfaces.IUsuarioServicioInterface;
import com.tec.workflix.models.UsuarioServicio;
import com.tec.workflix.modelsDAO.UsuarioServicioDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class UsuarioServicioService implements IUsuarioServicioInterface {

    @Autowired
    UsuarioServicioDAO dao;

    @Override
    public List<Map<String, Object>> listar() {
        return dao.listar();
    }

    @Override
    public int actualizarServicio(UsuarioServicio usuarioServicio) {
        return dao.actualizarServicio(usuarioServicio);
    }
}
