package com.tec.workflix.modelsDAO;

import com.tec.workflix.interfaces.IServicioInterface;
import com.tec.workflix.models.Servicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class ServicioDAO implements IServicioInterface {

    @Autowired
    JdbcTemplate template;


    @Override
    public List<Map<String, Object>> listar() {
        List<Map<String, Object>> list = template.queryForList("select * from servicio");
        return list;
    }

    @Override
    public List<Map<String, Object>> listarId(int id) {
            return null;
    }


    @Override
    public int add(Servicio servicio) {
        String sql = "insert into servicio(nombre)values(?)";
        return template.update(sql, servicio.getNombre());
    }

    @Override
    public int edit(Servicio servicio) {
        String sql="update servicio set nombre=? where id=?";
        return template.update(sql,servicio.getNombre(),servicio.getId());
    }

    @Override
    public int delete(int id) {
        String sql="delete from servicio where id=?";
        return template.update(sql,id);
    }
}
