package com.tec.workflix.modelsDAO;

import com.tec.workflix.interfaces.IUsuarioServicioInterface;
import com.tec.workflix.models.UsuarioServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class UsuarioServicioDAO implements IUsuarioServicioInterface {

    @Autowired
    JdbcTemplate template;

    @Override
    public List<Map<String, Object>> listar() {
        List<Map<String, Object>> list = template.queryForList("select * from usuario_servicio");
        return list;
    }

    @Override
    public int actualizarServicio(UsuarioServicio usuarioServicio){
        String sql = "update usuario_servicio set servicio_id=?, usuario_id=? where id=?";
        return template.update(sql, usuarioServicio.getServicio().getId(), usuarioServicio.getUsuario().getId(), usuarioServicio.getId());
    }
}
