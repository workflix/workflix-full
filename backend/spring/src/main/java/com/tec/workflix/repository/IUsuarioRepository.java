package com.tec.workflix.repository;

import com.tec.workflix.models.Usuario;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IUsuarioRepository extends CrudRepository<Usuario,Integer> {

    @Query(value = "SELECT correo FROM usuario WHERE correo = :correo ", nativeQuery = true)
    List<String> checkUserEmail(@Param("correo")String correo);

    @Query(value = "SELECT clave FROM usuario WHERE correo = :correo ", nativeQuery = true)
    String checkUserPasswordByEmail(@Param("correo")String correo);

    @Query(value = "SELECT * FROM usuario WHERE correo = :correo ", nativeQuery = true)
    Usuario getUserDetailsByEmail(@Param("correo")String correo);

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO usuario(nombre, apellido, correo, clave, telefono) VALUES(:nombre, :apellido, :correo, :clave, :telefono)", nativeQuery = true)
    int registerNewUser(@Param("nombre") String nombre,
                        @Param("apellido") String apellido,
                        @Param("correo") String correo,
                        @Param("clave") String clave,
                        @Param("telefono") String telefono);
}
