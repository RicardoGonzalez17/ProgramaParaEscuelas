class Alumno {
    constructor(matricula, nombre, apellidos, edad, materiasInscritas = [], calificaciones = [])
    {
        this.matricula = matricula;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.materiasInscritas = materiasInscritas;
        this.calificaciones = calificaciones;
    }

    InscribirseEnMateria(materia)
    {
        this.materiasInscritas.push(materia);
    }

    AsignarCalificacion(materia,calificacion)
    {
        var formatoCalifacaciónMateria = {
            materia: materia.nombre,
            calificacion: calificacion
        }
        this.calificaciones.push(formatoCalifacaciónMateria);
    }

    ObtenerPromedioAlumno()
    {
        let sumaDeCalificaciones = 0;
        let califacionesAlumno = this.calificaciones.map((calificacion) => calificacion.calificacion).flat();

        for (let index = 0; index < califacionesAlumno.length; index++) {
            sumaDeCalificaciones = sumaDeCalificaciones + califacionesAlumno[index];           
        }
        return sumaDeCalificaciones/califacionesAlumno.length;
    }
}
export {Alumno}