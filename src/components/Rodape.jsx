import { useState } from "react";
import styles from "../styles/Rodape.module.css";

function Rodape() {
  const [mostrarContato, setMostrarContato] = useState(false);

  return (
    <footer>
      <button
        className={styles.botaoContato}
        onClick={() => setMostrarContato(!mostrarContato)}
      >
        {mostrarContato ? "Ocultar Contato" : "Mostrar Contato"}
      </button>

      {mostrarContato && (
        <div className={styles.contatosDiv}>
          <p>Email: kevinrezende.dev@gmail.com | Tel: (11) 99999-9999</p>
          <a
            className={styles.btnCard}
            href="https://www.linkedin.com/in/kevinrezende/"
            target="_blank"
          >
            Linkedin
          </a>
        </div>
      )}
    </footer>
  );
}
export default Rodape;
