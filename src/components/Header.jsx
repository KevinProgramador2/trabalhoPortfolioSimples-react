import { useState } from "react";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.nome}>Kevin Silva</h1>
      <p className={styles.profissao}>Desenvolvedor Full Stack</p>
      <img
        className={styles.imagem}
        src="src/assets/euAnimated.png.jpeg"
        alt="foto de perfil"
      />
    </header>
  );
}

export default Header;
