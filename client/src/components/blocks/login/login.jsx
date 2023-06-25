import React from "react";
import styles from "./login.module.css"
import { useState } from "react";
import { validate } from "../../../utils/validations";

export default function Login({login}){

    const [userData, setUserData] = useState({
        username:"",
        password:""
    });
    const [errors, setErrors] = useState({
        username:"",
        password:""
    });

    function handleInputChange(e){
        const {name, value} = e.target;
        setUserData(
            {...userData, [name]: value}
        )
        setErrors(
            validate(
                {
                    ...userData,
                    [e.target.name]: e.target.value
                }
            )
        )
    }
    console.log(userData);
    function handleSubmit(e){
        e.preventDefault();
        login(userData);
    }

    return(
        <div className={styles.container}>
            <form className={styles.formulario} onSubmit={handleSubmit}>
                    <fieldset>
                    <label htmlFor="user">
                        Username:
                    </label>
                    <br />
                    <input id="user" name="username" placeholder="Please, enter your username" type="text" value={userData.username} onChange={handleInputChange} />
                    <p className={styles.danger}>{errors.username}</p>

                    <br />
                    <label htmlFor="password">
                        Password:
                    </label>
                    <br />
                    <input id="password" name="password" placeholder="Please, enter your password" type="password"  value={userData.password} onChange={handleInputChange} />
                    <p className={styles.danger}>{errors.password}</p>

                    <br />
                    <br />
                    <div className={styles.submitB}>
                    <button type="submit" className={styles.login}> Login </button>
                    </div>
                    </fieldset>
            </form>
        </div>
        )
}