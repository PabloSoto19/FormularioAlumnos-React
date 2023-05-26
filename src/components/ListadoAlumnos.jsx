import Alumno from "./Alumno"

const ListadoAlumnos = ({alumnos, setAlumno, eliminarAlumno}) => {
    return (
      
        <div className="bg-white shadow-lg mx-auto rounded-lg p-4 md:w-1/6 lg:w-3/4 md:h-screen  mt-8 overflow-y-scroll uppercase">
        {alumnos && alumnos.length ? (
          <>
            <h2 className="font-black text-3xl text-center mb-4">Listado de Alumnos</h2>
            {alumnos.map((alumno) => (
              <Alumno
                key={alumno.id}
                alumno={alumno}
                setAlumno={setAlumno}
                eliminarAlumno={eliminarAlumno}
              />
              
            ))}
          </>
        ) : (
          <>
            <p className="font-black text-3xl text-center mb-4 ">
              Comienza agregando alumnos{' '}
              <span className="text-lime-500 font-black">y aparecerán en este lugar</span>
            </p>
          </>
        )}
      </div>
      
      
    )
}

export default ListadoAlumnos
