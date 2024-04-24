package com.tec.workflix.services;

import com.tec.workflix.interfaces.IServicioInterface;
import com.tec.workflix.models.Servicio;
import com.tec.workflix.modelsDAO.ServicioDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ServicioService implements IServicioInterface {

    @Autowired
    ServicioDAO dao;

    @Override
    public List<Map<String, Object>> listar() {
        return dao.listar();
    }

    @Override
    public List<Map<String, Object>> listarId(int id) {
        return null;
    }

    @Override
    public int add(Servicio servicio) {
        return dao.add(servicio);
    }

    @Override
    public int edit(Servicio servicio) {
        return dao.edit(servicio);
    }

    @Override
    public int delete(int id) {
        return dao.delete(id);
    }

}
