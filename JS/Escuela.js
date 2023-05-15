class Escuela {
    constructor(idEscuela, nombre, domicilio, materias =  [], grupos = [])
    {
        this.idEscuela = idEscuela;
        this.nombre = nombre;
        this.domicilio = domicilio;
        this.materias = materias;
        this.grupos = grupos;
    }

    AgregarMateria(materia)
    {
        this.materias.push(materia);
    }

    AgregarGrupo(grupo)
    {
        this.grupos.push(grupo);
    }

}
export {Escuela}