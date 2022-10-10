class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        console.log( `nombre usuario: ${this.nombre}`, `${this.apellido}`)
    }
    
    addMascota(mascota){
        let arrMascotas = this.mascotas;
        this.mascotas = [...arrMascotas, mascota]
    }
    
    countMascotas(){
        console.log( this.mascotas.length)
    }

    addBook(nom, aut){
        let arrLibros = this.libros;
        this.libros= [...arrLibros, {nombre: nom, autor: aut}]
    }

    getBookNames(){
        const librosUsuario = [];
        this.libros.forEach((element)=> librosUsuario.push(element.nombre));
        console.log(librosUsuario)
    }
}

let librosJuan = [ 
    {
        nombre: 'Fundación e Imperio', 
        autor: 'Isaac Asimov'
    },  
    {
        nombre: 'El nombre del viento', 
        autor: 'Patrick Rothfuss'
    }
];

let mascotasJuan = ['pez', 'gato'];

let usuarioNuevo = new Usuario('Juan', 'Martínez', librosJuan, mascotasJuan);

console.log(usuarioNuevo);
usuarioNuevo.getFullName() 
usuarioNuevo.addBook('El Temor de un Hombre Sabio', 'Patrick Rothfuss');
usuarioNuevo.addMascota('perrito');
usuarioNuevo.countMascotas()
usuarioNuevo.getBookNames()
console.log(usuarioNuevo);