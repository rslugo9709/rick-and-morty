import { useState, useEffect, useReducer } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";

import './App.css'


//importamos los componentes
import NavBar from './components/blocks/nav/nav.jsx';


//importamos las views
import Home from './components/views/home/home';
import Favorites from "./components/views/favorites/favorites"
import About from './components/views/about/about';
import Login from './components/views/ingresar/ingresar';
import Creedentials from './components/views/creedentials/creedentials';
import Detail from './components/views/details/details';
function App() {

  const location = useLocation();
  
  //const [searchString, setSearchString] = useState("");
  const [filtered, setFiltered] = useState([]);

  //

  //hooks para hacer el login
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);


  //Hacemos las funciones para hacer el login

  async function loginHandler(userData){
    console.log("se imprime el user data")
    console.log(userData)
    const {email, password} = userData;
    const url = "http://localhost:3001/rickandmorty/login";
    console.log(email, password);
    try{
      //setAccess(true);
      //navigate("/home");
      const response = (
        await axios(url + `?email=${email}&password=${password}`)
      ).data;
      console.log(response)
      if(response.access){
        navigate("/home");
      }
      setAccess(response);
      console.log(response.access)

    }catch(error){
      alert(error.message)
    }
  }


    useEffect(() =>{
      !access && navigate("/");

    }, [access]);

    

    //Para hacer logout

    function logoutHandler(){
      setAccess(false);
      navigate("/");
    }


    //funcion que permite capturar lo que escribe el usuario
    function changeHandler(e){
      e.preventDefault();

    }


    //cerrar personajes
    function closeHandlers(id){
      //console.log("se imprime desde el close handlers")
      //console.log(id);
      //se busca el id que se quiere cerrar
      let found = filtered.find((char) => char.id === Number(id));
      

      //console.log("se imprime el found");
      //console.log(found);
      //se saca el id
      let deleted = filtered.filter((char) => char.id !== found.id)

      setFiltered(deleted);
    }




    async function searchHandler(character) {
      ///console.log("se ejecuta la funcion buscar")
      //console.log(character)
      try {
        //console.log(filtered)
        let found = filtered.find(
          (char) => char.id === Number(character)
        ); 
         
          
          //console.log("Entra en el try")
          //console.log("comprobamos el found")
          //console.log(found)
          
        if (!(found)) {
          let response = (
            await axios.get(
              `https://rickandmortyapi.com/api/character/${character}`
            )
          ).data;
          //console.log(response.data)
          if (response.name) {
            //console.log(response.name)
            setFiltered([...filtered, response]);
          }
        } else {
          alert("Ya agregaste este personaje!");
        }
      } catch (error) {
        alert(error.message);
      }
    }

  


  return (
    <div className='App'>
              <div>
        {/*Si en la ruta donde estoy es diferente a una ruta diferente a la raiz */}
        {(location.pathname !== "/" && location.pathname !== "/login") && <NavBar onSearch={searchHandler} onChange={changeHandler} logout={logoutHandler}/>}
      </div>


        <Routes>
          <Route path='/' element={<Login />} />
          <Route 
            path="/home" 
            element={<Home characters={filtered} onClose={closeHandlers}/>}
          />
          {/*<Route 
            path="/" 
            element={<Home characters={filtered} onClose={closeHandlers}/>}
          />*/ }
          <Route path='/login' element={<Creedentials login={loginHandler} />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/about' element={<About />} />
          <Route path="/fav" element={<Favorites />} />
          

        </Routes>
    </div>
  )
}

export default App
