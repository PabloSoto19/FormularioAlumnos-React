const Alumno = ({ alumno, setAlumno, eliminarAlumno }) => {
  const { nombre, matricula, foto, carrera, id } = alumno

  const handleEliminar = () => {
    const respuesta = window.confirm('¿Deseas eliminar este alumno?')

    if (respuesta) {
      eliminarAlumno(id)
    }
  }

  return (
    <div className="mx-auto my-10 bg-white shadow-md px-5 py-10 rounded-xl border-2 border-lime-600 flex flex-col items-center sm:flex-row sm:items-center">

      <img src={foto} alt={nombre} className="w-40 h-40 rounded-full mr-5" />

      <div className="w-full sm:w-1/2">
        <p className="font-bold mb-3 text-gray-700 uppercase text-shadow-lg">Nombre del Alumno: {''}
          <span className="font-normal normal-case">{nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase text-shadow-lg">Matricula: {''}
          <span className="font-normal normal-case">{matricula}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase text-shadow-lg">Carrera: {''}
          <span className="font-normal normal-case">{carrera}</span>
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between items-center mt-10 w-full sm:w-auto">
        <button
          type="button"
          className="py-2 px-10 bg-lime-600 hover:bg-lime-700 text-white font-bold uppercase rounded-lg transition duration-300 ease-in-out w-full sm:w-auto mt-5 sm:mt-0 sm:mr-3"
          onClick={() => setAlumno(alumno)}
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 text-white font-bold uppercase rounded-lg transition duration-300 hover:bg-red-700 border-red-600 w-full sm:w-auto mt-5 sm:mt-0"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>

    </div>








  )
}

export default Alumno
