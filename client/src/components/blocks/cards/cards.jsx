import React from "react";
import Card from "../card/card";
import styles from "./cards.module.css"


export default function Cards(props) {
    const { characters, onClose } = props;
    //console.log("se deberian renderizar las cartas")

    //console.log("renderizo props desde cards")
    //console.log(props)
    return (
      
      
       <div className={styles.container}>

          {
             characters.map(char => <Card 
             key = {char.id}
             name={char.name}
             species={char.species}
             gender={char.gender}
             image={char.image}
             id={char.id}
             onClose={props.onClose}
             /> )
          }
       </div>
    );
 }
