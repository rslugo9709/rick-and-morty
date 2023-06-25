

import React from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.css";


export default function Login(){

    return (
        <div className={styles.containergen}>
            


            <Link to={"/login"} className={styles.boton}>Ingresar</Link>

            
        </div>
        
    )
}

