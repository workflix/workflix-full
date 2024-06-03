package com.tec.workflix.modelsDAO;

import com.tec.workflix.interfaces.IUsuarioInterface;
import com.tec.workflix.models.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class UsuarioDAO implements IUsuarioInterface {

    @Autowired
    JdbcTemplate template;


    @Override
    public List<Map<String, Object>> listar() {
        List<Map<String, Object>> list = template.queryForList("select * from usuario");
        return list;
    }

    @Override
    public List<Map<String, Object>> listarId(int id) {
        return null;
    }

    @Override
    public int add(Usuario usuario) {
        String sql = "insert into usuario(nombre,apellido,clave,telefono,correo)values(?,?,?,?,?)";
        return template.update(sql, usuario.getNombre(), usuario.getApellido(), usuario.getClave(), usuario.getTelefono(), usuario.getCorreo());
    }

    @Override
    public int edit(Usuario usuario) {
        String sql="update usuario set nombre=?, apellido=?, clave=?, telefono=?, correo=? where id=?";
        return template.update(sql,usuario.getNombre(), usuario.getApellido(), usuario.getClave(), usuario.getTelefono(), usuario.getCorreo(),usuario.getId());
    }
    @Override
    public int actualizarPerfil(Usuario usuario) {
        // Verificar y establecer un valor por defecto para tipoUsuario en el servidor
        if (usuario.getTipoUsuario() == null || usuario.getTipoUsuario().isEmpty()) {
            usuario.setTipoUsuario("profesional"); // Cambia "default_type" por el valor por defecto que desees
        }

        String sql = "UPDATE usuario SET nombre=?, apellido=?, telefono=?, correo=?, direccion=?, ciudad=?, provincia=?, descripcion=?, precio=?, tipo_usuario=? WHERE id=?";
        return template.update(sql,
                usuario.getNombre(),
                usuario.getApellido(),
                usuario.getTelefono(),
                usuario.getCorreo(),
                usuario.getDireccion(),
                usuario.getCiudad(),
                usuario.getProvincia(),
                usuario.getDescripcion(),
                usuario.getPrecio(),
                usuario.getTipoUsuario(),
                usuario.getId()
        );
    }

    @Override
    public int delete(int id) {
        String sql="delete from usuario where id=?";
        return template.update(sql,id);
    }

    @Override
    public int recomendarPerfil(Usuario usuario){
        String sql="update usuario set recomendacion=? where id=?";
        return template.update(sql,usuario.getRecomendacion(),usuario.getId());
    }
    @Override
    public List<Usuario> destacadosPerfil() {
        String sql = "SELECT * FROM usuario ORDER BY recomendacion DESC, precio ASC LIMIT 5";
        return template.query(sql, new BeanPropertyRowMapper<>(Usuario.class));
    }
}
