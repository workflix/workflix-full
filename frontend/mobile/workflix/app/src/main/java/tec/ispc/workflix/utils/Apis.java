package tec.ispc.workflix.utils;

public class Apis {
    public static ServicioService getServicioService(){
        return Cliente.getCliente(Environment.URL_SERVICIOS).create(ServicioService.class);
    }
    public static UsuarioService getUsuarioService(){
        return Cliente.getCliente(Environment.URL_USUARIOS).create(UsuarioService.class);
    }
    public static UsuarioServicioService getUsuarioServicioService(){
        return Cliente.getCliente(Environment.URL_PRESTACIONES).create(UsuarioServicioService.class);
    }
}
