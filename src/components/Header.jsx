import styles from "../styles/Header.module.css";
import minhaImagem from "../assets/euAnimated.jpeg";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.nome}>Kevin Silva</h1>
      <p className={styles.profissao}>Desenvolvedor Full Stack</p>

      <img className={styles.imagem} src={minhaImagem} alt="foto de perfil" />
    </header>
  );
}

export default Header;
