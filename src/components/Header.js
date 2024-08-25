import { Link } from 'react-router-dom';
import styles from "./Header.module.css";


function Header() {
    return (
      
        <div> 
           
           <h1 className={styles.titulo}>AGENTES DO VALORANT</h1>
           <div className={styles.header__container}>
            <nav className={styles.menuNav}>
                <ul className={styles.menuNav__ul}>
                <li className={styles.menuNav__ul_itemMenu}>
              <Link className={styles.itemMenu__link} to="/">Início</Link>
            </li>
            <li className={styles.menuNav__ul_itemMenu}>
              <Link className={styles.itemMenu__link} to="/agentes">Agentes</Link>
            </li>
          </ul>
                <input type="text" id="name" className={styles.input__nav} placeholder="Digite o nome do Agente"/>
            </nav>
            </div>
        </div>
    );
}


export default Header