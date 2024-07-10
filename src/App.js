import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Colaborador from './componentes/Colaborador/Index.js';
import Footer from './componentes/Footer/index.jsx';

function App() {

  const[mostraFormulario,acutalizarMostrar] = useState(true)
  const[colaboradores, actualizarColaboradores] = useState([{
    id: uuidv4(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav:true
  },
  {
  id: uuidv4(),  
  equipo: "Programacion",
  foto: "https://github.com/genesysR-dev.png",
  nombre: "Genesys Rondón",
  puesto: "Desarrolladora de software e instructora",
  fav:false
  
  },
  {
    id: uuidv4(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav:false
  },
  { 
    id: uuidv4(),
    equipo: "Programacion",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e instructor",
    fav:false
  },
  {
    id: uuidv4(),
    equipo: "Inovacion y Gestion",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev. FullStack",
    fav:false
  },

  ])

  const [equipos, actualizarEquipos] = useState (
    [
      {
        id: uuidv4(),
        titulo:"Programacion",
        colorPrimario: "#57C278",
        colorSecundario:  "#D9F7E9"
      },
  
      {
        id: uuidv4(),
        titulo:"Front End",
        colorPrimario: "#82CFFA",
        colorSecundario:  "#E8F8FF"
      },
      
      {
        id: uuidv4(),
        titulo:"Data Science",
        colorPrimario: "#A6D157",
        colorSecundario:  "#F0F8E2"
      },
  
      {
        id: uuidv4(),
        titulo:"Devops",
        colorPrimario: "#E06B69",
        colorSecundario:  "#FDE7E8"
      },
  
      {
        id: uuidv4(),
        titulo:"UX y Diseño",
        colorPrimario: "#DB6EBF",
        colorSecundario:  "#FAE9F5"
      },
  
      {
        id: uuidv4(),
        titulo:"Movil",
        colorPrimario: "#FFBA05",
        colorSecundario:  "#FFF5D9"
      },
  
      {
        id: uuidv4(),
        titulo:"Inovacion y Gestion",
        colorPrimario: "#FF8A29",
        colorSecundario:  "#FFEEDF"
      },
      
  
  ]
  )
  
  // Temario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra 

  const cambiarMostrar = () => {
    acutalizarMostrar(!mostraFormulario)
  }

  // Registra colaborador

  const registrarColaborador = (Colaborador) => {
    console.log("Nuevo colaborador", Colaborador)
    // Spread operator
    actualizarColaboradores([...colaboradores, Colaborador])
  }

  // Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((Colaborador) => Colaborador.id !==id)
    actualizarColaboradores(nuevosColaboradores)
  }
// Actualizar color de equipo
const actualizarColor= (color, id) => {
  console.log("Actializar:", color, id)
  const equiposActualizados = equipos.map((equipo)=>{ 
    if(equipo.id === id) {
      equipo.colorPrimario = color
    }

    return equipo
  })

  actualizarEquipos(equiposActualizados)
}

// Crear Equipo
const crearEquipo = (nuevoEquipo) =>{
  console.log(nuevoEquipo)
  actualizarEquipos([...equipos,{...nuevoEquipo, id: uuidv4()} ])
}

const like = (id) => {
  console.log("like", id)
  const colaboradoresActualizados = colaboradores.map((Colaborador) => {
    if (Colaborador.id === id){
      Colaborador.fav = !Colaborador.fav
    }
    return Colaborador
  })

  actualizarColaboradores(colaboradoresActualizados)
}

  return (
    <div >
      <Header />
      {/* {mostraFormulario  ? <Formulario/> : <></>} */}
      {
      mostraFormulario && <Formulario 
      equipos={equipos.map((equipo) =>equipo.titulo)}
      registrarColaborador={registrarColaborador}
      crearEquipo={crearEquipo}
      />
      }
      
      
      <MiOrg cambiarMostrar= {cambiarMostrar} />
      
      {

        equipos.map((equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo} 
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador} 
        actualizarColor={actualizarColor}
        like={like}
        />
      )
      }
      <Footer />


    </div>
  );
}

export default App;
