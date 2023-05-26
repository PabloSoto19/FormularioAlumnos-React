import { useState, useEffect } from 'react';
import Error from './Error'

const Formulario = ({ alumnos, setAlumnos, alumno, setAlumno }) => {
    const [nombre, setNombre] = useState('');
    const [matricula, setMatricula] = useState('');
    const [carrera, setCarrera] = useState('');
    const [foto, setFoto] = useState(null);
    const [error, setError] = useState(false)

    useEffect(() => {
        if (Object.keys(alumno).length > 0) {
            setNombre(alumno.nombre)
            setMatricula(alumno.matricula)
            setCarrera(alumno.carrera)
            setFoto(alumno.foto)
        }
    }, [alumno])

  const opcionesCarrera = [
    "Ingeniería en Sistemas",
    "Administración",
    "Derecho",
    "Ortodoncia",
    "Civil",
    "TICS",
    "Logistica",
    "Mecatronica"];

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)
        return random  + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación del Formulario
        if ([nombre, matricula, carrera, foto].includes('') ) {
            console.log('Hay Al Menos un campo vacio')

            setError(true)
            return;
        }

        setError(false)

        // Objeto de Alumno
        const objetoAlumno = {
          nombre,
          matricula,
          carrera,
          foto: typeof foto === "string" ? foto :  URL.createObjectURL(foto)
      }
    

        if (alumno.id) {
            // Editando el Registro
            objetoAlumno.id = alumno.id
            const alumnosActualizados = alumnos.map(alumnoState => alumnoState.id === alumno.id ? objetoAlumno : alumnoState)

            setAlumnos(alumnosActualizados)
            setAlumno({})

        } else {
          const objetoAlumno = {
            nombre,
            matricula,
            carrera,
            foto: foto ? URL.createObjectURL(foto) : null
        }
            // Nuevo registro
            objetoAlumno.id = generarId();
            setAlumnos([...alumnos, objetoAlumno]);
        }

        // Reiniciar el form
        setNombre('')
        setMatricula('')
        setCarrera('')
        setFoto(null); // Reiniciar el estado de la foto
    }


    return (
        <div className="w-full md:w-1/2 lg:w-2/5 mx-auto">
        <p className="text-lg mt-5 text-center mb-10">  </p>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        >
           { error &&  <Error><p>Todos los campos son obligatorios</p></Error>}

           <div className="mb-5">
            <label htmlFor="matricula" className="block text-gray-700 uppercase font-bold">
              Matrícula
            </label>
            <input
              id="matricula"
              type="text"
              placeholder="Matrícula"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:border-lime-400 focus:outline-none"
              value={matricula}
              onChange={(e) => setMatricula(e.target.value)}
             
            />
          </div>
               
          <div className="mb-5">
            <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">
              Nombre Alumno
            </label>
            <input
              id="nombre"
              type="text"
              placeholder="Nombre del Alumno"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:border-lime-400 focus:outline-none"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
      
            />
          </div>
      
        

          <div className="mb-5">
            <label htmlFor="carrera" className="block text-gray-700 uppercase font-bold">
              Carrera
            </label>
            <select
              id="carrera"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:border-lime-400 focus:outline-none"
              value={carrera}
              onChange={(e) => setCarrera(e.target.value)}
            
            >
              <option value="">Selecciona una opción</option>
              {opcionesCarrera.map((opcion) => (
                <option key={opcion} value={opcion}>
                  {opcion}
                </option>
              ))}
            </select>
          </div>
      

          <div className="mb-5">
            <label htmlFor="foto" className="block text-gray-700 uppercase font-bold">
              Foto Perfil
            </label>
            <input
              id="foto"
              type="file"
              accept="image/*"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:border-lime-400 focus:outline-none"
              onChange={(e) => setFoto(e.target.files[0])}
            />
          </div>
      
          <input
            type="submit"
            className="bg-lime-600 w-full p-3 text-white uppercase font-bold hover:bg-lime-700 cursor-pointer transition-colors
              mr-auto"
            value={alumno.id ? 'Editar Alumno' : 'Agregar Alumno'}
          />
        </form>
      </div>
    );      
}
export default Formulario    