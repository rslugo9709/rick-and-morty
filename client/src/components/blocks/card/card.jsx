import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import style from "./card.module.css"

//importamos las actions
import { addFavorite, removeFavorite } from "../../../redux/actions";

function Card(props){
   
   //definimos los hooks
    const [fav, setFav] = useState(false);
    const [closeBtn, setCloseBtn] = useState(true);

    //traemos las props
    const {onClose, addFavorite, removeFavorite, favorites} = props;
    //console.log("renderizo props desde card")
    //console.log(props)

    var character = {
      name: props.name,
      id: props.id,
      gender: props.gender,
      image: props.image,
      species: props.species
    }

    console.log("Vemos que llega como character")
    console.log(character)
    //asignamos el navigate
    const navigate = useNavigate();

    useEffect(() => {
      if (!onClose) {
        setCloseBtn(false);
      }
    }, []);

    useEffect(() => {
      favorites.forEach((fav) => {
        if (fav.id === props.id) {
          setFav(true);
        }
      });
    }, [favorites]);

    function navigateHandler() {
      navigate(`/detail/${character.id}`);
    }

    const favoriteHandler = (character) =>{
        console.log("dentro de la funcion de favorite handler")
        if(!fav){
          console.log("intenta agregar")
           //se cambia el estado
            addFavorite(character);
            setFav(true);

        }else{
          console.log("intenta borrar")
            removeFavorite(character);  
            setFav(false);

        }
     }
     
     console.log("se imprime el character")
     console.log(props.id)

     console.log("se imprimen las props")
     console.log(props)
     
    return(
        <div className={style.card}>
        {
        fav ? (
           <button onClick={() => favoriteHandler(character.id)}>❤️</button>
        ) : (
           <button onClick={() => favoriteHandler(character)}>🤍</button>
        )
        }
     
        <button className={style.cerrar} onClick={() => onClose(props.id)}>X</button>
         <Link to={`/detail/${props.id}`}>
         <h2  className={style.link}>{props.name}</h2>
         </Link>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img className={style.imagenes} src={props.image} alt={props.name} /> 
        </div>
    )
}





const mapDispatchToProps = (dispatch) => {
   return {
     addFavorite: (character) => dispatch(addFavorite(character)),
 
     removeFavorite: (id) => dispatch(removeFavorite(id)),
   };
 };
 
 const mapStateToProps = (state) => {
   return {
     favorites: state.myFavorites,
   };
 };
 
 export default connect(mapStateToProps, mapDispatchToProps)(Card);