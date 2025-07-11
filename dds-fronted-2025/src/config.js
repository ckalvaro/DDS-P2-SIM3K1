// opcion 1 cuando se hacen pruebas locales
//const urlServidor = "http://localhost:3000"


// opcion 2 cuando se despliega el frontend en un servidor distinto al backend
//const urlServidor = "https://labsys.frc.utn.edu.ar/dds-backend-2025"
const urlServidor = "https://pymes2025.azurewebsites.net"
//const urlServidor = "https://webapi.pymes.net.ar"
//const urlServidor = "http://localhost:3000"    //ojo sin https:// solo http://  (sin la "s" de seguridad)


// opcion 3 cuando se despliega el frontend, en el mismo servidor que el backend
//const urlServidor = ""  




const urlResourceArticulos = urlServidor + "/api/articulos";
const urlResourceCategorias = urlServidor + "/api/categorias";
const urlResourceUsuarios = urlServidor + "/api/usuarios";




export const config = {
    urlServidor,
    urlResourceArticulos,
    urlResourceCategorias,
    urlResourceUsuarios,
}
