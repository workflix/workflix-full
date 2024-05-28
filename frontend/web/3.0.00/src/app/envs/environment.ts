export const environment = {
  stripeAPIKey: 'pk_test_51PGmuUByU9zDfoe2zLdhBfM2Xj7BamQm6cauJrHHNpC8hMKis8EjSilSBKWdWe8ipYv0gCVvl00DmyAkQ4voq54L00H8AAZlV9',
  serverURL: 'http://localhost:4242',
};

export class Enviroment {
  static URL_PRINCIPAL: string = 'http://localhost:8080';
  static URL_USUARIO_SERVICIO: string = this.URL_PRINCIPAL + '/prestaciones';
  static URL_USUARIOS:string = this.URL_PRINCIPAL+'/usuarios';
  static URL_LOGIN:string = this.URL_PRINCIPAL+'/api/v1/user/login';
  static URL_REGISTER:string = this.URL_PRINCIPAL+'/api/v1/user/register';
  static URL_SERVICIOS:string = this.URL_PRINCIPAL+'/servicios';
}
