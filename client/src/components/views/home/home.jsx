import Cards from "../../blocks/cards/cards";
import styles from "./home.module.css";

export default function Home({characters, onClose}){
    let ver = true;
    return(
        <div >
            <Cards characters={characters} onClose={onClose} ver={ver}/>
        </div>
    )

}
