import styles from "../styles/CardExperiencia.module.css";

function CardExperiencia({ titulo, cargo, descricao, secaoCard, btnCard }) {
  return (
    <section className={styles.secaoCard}>
      <h1 className={styles.titulo}>{titulo}</h1>
      <h4 className={styles.cargo}>{cargo}</h4>
      <p className={styles.descricao}>{descricao}</p>
    </section>
  );
}

export default CardExperiencia;
