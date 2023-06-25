import {Link} from "react-router-dom";

import styles from "./nav.module.css";
import SearchBar from "../searchbar/searchbar";

export default function NavBar({onSearch, onChange, logout}){

    return(
        <div>
            <nav className={styles.nav}>
                <div className= {styles.container}>
                    <Link to={"/home"} className={styles.links}>Home</Link>
                    <Link to={"/about"} className={styles.links}>About</Link>
                    <Link to={"/fav"} className={styles.links}>Favorites </Link>
                    <Link className={styles.links} onClick={logout}> 
                    Logout
                    </Link>
                </div>
            <SearchBar onSearch={onSearch} />
            </nav>
        </div>
    )

}