import { useState, useEffect } from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoAlumnos from './components/ListadoAlumnos';


function App() {
  const [alumnos, setAlumnos] = useState([]);
  const [alumno, setAlumno] = useState({})

  useEffect(() => {
    const obtenerLS = () => {
      const alumnosLS = JSON.parse(localStorage.getItem('alumnos')) ?? [];
      setAlumnos(alumnosLS)
    }
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('alumnos', JSON.stringify(alumnos));
  }, [alumnos])

  const eliminarAlumno = id => {
    const alumnosActualizados = alumnos.filter(alumno => alumno.id !== id);
    setAlumnos(alumnosActualizados)
  }
  return (
    <div className="container mx-auto mt-20">



      <Header />

      <div className="mt-12 md:flex">
        <Formulario
          alumnos={alumnos}
          setAlumnos={setAlumnos}
          alumno={alumno}
          setAlumno={setAlumno}
        />
        <ListadoAlumnos
          alumnos={alumnos}
          setAlumno={setAlumno}
          eliminarAlumno={eliminarAlumno}
        />
      </div>
    </div>
  )
}

export default App

