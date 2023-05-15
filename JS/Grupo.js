class Grupo {
    constructor(idGrupo, nombreGrupo, alumnos = [])
    {
        this.idGrupo = idGrupo;
        this.nombreGrupo = nombreGrupo;
        this.alumnos = alumnos;
    }

    InscribirAlumno(alumno)
    {
        this.alumnos.push(alumno);
    }

    BuscarAlumnoPorNombre(nombre)
    {
        if(nombre.trim().length > 0)
            return arrayConResultado = this.alumnos.filter((alumno)=> alumno.nombre == nombre);
        else {
            return arrayConResultado =  [{
              nombre: 'Favor de colocar el nombre del alumno a buscar'  
            }]
        }
    }

    BuscarAlumnoPorApellido(apellido)
    {
        if(apellido.trim().length > 0)
            return arrayConResultado = this.alumnos.filter((alumno)=> alumno.apellido == apellido);
        else {
            return arrayConResultado =  [{
              nombre: 'Favor de colocar el apellido del alumno a buscar'  
            }]
        }
    }

    BuscarAlumnoPorMatricula(matricula)
    {
        if(matricula.trim().length > 0)
            return arrayConResultado = this.alumnos.filter((alumno)=> alumno.matricula == matricula);
        else {
            return arrayConResultado =  [{
              nombre: 'Favor de colocar la matricula del alumno a buscar'  
            }]
        }
    }

    PromedioPorGrupo()
    {
        let sumaCalificaciones = 0;
        let alumnosConCalificaciones = this.alumnos.map((alumno)=>alumno.calificaciones).flat().map((calificacion)=>calificacion.calificacion)

        for (let index = 0; index < alumnosConCalificaciones.length; index++) {
            sumaCalificaciones = sumaCalificaciones + alumnosConCalificaciones[index];           
        }
        return sumaCalificaciones/alumnosConCalificaciones.length;
    }

    CrearRegistroDeAlumnoPorCadaCalificacion()
    {
        const alumnosConCalificaciones = [];
        for (let index = 0; index < this.alumnos.length; index++) {
            for (let index2 = 0; index2 < this.alumnos[index].calificaciones.length; index2++) {
                const alumno = {
                    matricula: this.alumnos[index].matricula,
                    nombre: this.alumnos[index].nombre,
                    apellidos: this.alumnos[index].apellidos,
                    materia: this.alumnos[index2].calificaciones[index2].materia,
                    calificacion: this.alumnos[index2].calificaciones[index2].calificacion
                }
                alumnosConCalificaciones.push(alumno);
            }
        }
        return alumnosConCalificaciones;
    }
    OrdenarAlumnosDesc()
    {
        const alumnosFormateados = this.CrearRegistroDeAlumnoPorCadaCalificacion();
        return alumnosFormateados.sort((a,b) => b.calificacion - a.calificacion);
    }

    OrdernarAlumnosAsc()
    {
        const alumnosFormateados = this.CrearRegistroDeAlumnoPorCadaCalificacion();
        return alumnosFormateados.sort((a,b) => a.calificacion - b.calificacion);
    }
}
export {Grupo}
