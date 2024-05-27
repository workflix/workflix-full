export class UserService {
  id: number = 0;
  usuario_id:number = 0;
  servicio_id:number = 0;
    constructor(
        id: number,
        usuario_id: number,
        servicio_id: number,
        ) {
            this.id = id,
            this.usuario_id = usuario_id,
            this.servicio_id= servicio_id
    }
  }
