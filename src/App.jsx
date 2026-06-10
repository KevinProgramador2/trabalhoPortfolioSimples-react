import Header from "./components/Header";
import CardExperiencia from "./components/CardExperiencia";
import "./App.css";
import Rodape from "./components/Rodape";
import services from "./services/minhasExperiencias.js";

function App() {
  return (
    <main>
      <Header />

      {services.map((item) => (
        <CardExperiencia
          key={item.id}
          titulo={item.titulo}
          cargo={item.cargo}
          descricao={item.descricao}
          btnCard={item.btnCard}
        />
      ))}


      <Rodape />
    </main>
  );
}

export default App;
