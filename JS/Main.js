import { Escuela } from "./Escuela.js";
import { Alumno } from "./Alumno.js";
import { Materia } from "./Materia.js";
import { Grupo } from "./Grupo.js";

    
const matematicasUno = new Materia (123,'Matematicas 1', 'Lunes y Miercoles de 08:00 a 09:00')
const espaniol = new Materia (456, 'Español', 'Martes y Jueves de 13:00 a 14:00')
const programacion = new Materia (333, 'Programación', 'Lunes a Viernes de 10:00 a 11:00')

const grupoA = new Grupo('AA1','Grupo A')

const devf = new Escuela (111,'Dev.f','Desconocido #12')

const ricardo = new Alumno('RIGV17','Ricardo','González',27)
const israel = new Alumno('IGVR17','Israel','González',28)
const roberto = new Alumno('GGGV17','Roberto','González',26)
const alumnos = [];
alumnos.push(ricardo);
alumnos.push(israel);
alumnos.push(roberto);

devf.AgregarGrupo(grupoA);
devf.AgregarMateria(matematicasUno);
devf.AgregarMateria(espaniol);
devf.AgregarMateria(programacion);

grupoA.InscribirAlumno(ricardo);
grupoA.InscribirAlumno(israel);

roberto.InscribirseEnMateria(programacion);

roberto.AsignarCalificacion(programacion,10);
ricardo.AsignarCalificacion(programacion,9);
israel.AsignarCalificacion(programacion,10);
israel.AsignarCalificacion(matematicasUno,8);

console.log(grupoA);
console.log(ricardo)
console.log(israel)
console.log(roberto)
console.log(devf)
console.log(grupoA.PromedioPorGrupo());
console.log(israel.ObtenerPromedioAlumno());

console.log(grupoA.OrdernarAlumnosAsc());


let CrearTabla = function(lista) {
  let stringTabla = `<thead class="thead-dark">
                        <tr>
                          <th>Matricula</th>
                          <th>Nombre</th>
                          <th>Apellidos</th>
                        </tr>
                      </thead>`;
  for (let alumno of lista) {
    let fila = `<tr>
                  <td>${alumno.matricula}</td>
                  <td>${alumno.nombre}</td>
                  <td>${alumno.apellidos}</td>
                </tr>`
    stringTabla +=fila;
  }
  return stringTabla;
};
document.getElementById("tablaAlumnos").innerHTML = CrearTabla(alumnos);
document.addEventListener("DOMContentLoaded", function() {
  var headerHeight = document.querySelector("header").offsetHeight;
  document.documentElement.style.setProperty("--header-height", headerHeight + "px");
});