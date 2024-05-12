export class User {
  id: number = 0;
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  telefono: number = 0;
  clave: string = '';
  direccion: string = '';
  ciudad: string = '';
  provincia: string = '';
  descripcion: string = '';
  foto: string = '';
  tipoUsuario: string = '';
  cantidad: number = 0;
  precio:number = 0;
  constructor(
      id: number,
      nombre: string,
      apellido: string,
      correo: string,
      telefono: number,
      clave: string,
      direccion: string,
      ciudad: string,
      provincia: string,
      descripcion: string,
      foto: string,
      tipoUsuario: string,
      cantidad: number,
      precio:number) {
      this.id = id;
      this.nombre = nombre;
      this.apellido = apellido;
      this.correo = correo;
      this.telefono = telefono;
      this.clave = clave;
      this.direccion = direccion;
      this.ciudad = ciudad;
      this.provincia = provincia;
      this.descripcion = descripcion;
      this.foto = foto;
      this.tipoUsuario = tipoUsuario;
      this.cantidad = cantidad;
      this.precio = precio;

  }
}
