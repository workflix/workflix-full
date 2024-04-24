package com.tec.workflix.interfaces;

import com.tec.workflix.models.Servicio;
import java.util.List;
import java.util.Map;

public interface IServicioInterface {
        public List<Map<String, Object>> listar();
        public List<Map<String, Object>>listarId(int id);
        public int add(Servicio servicio);
        public int edit(Servicio servicio);
        public int delete(int id);
}
