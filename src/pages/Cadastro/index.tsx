import "./style.cadastro.css";
import { Link } from "react-router-dom";
import ModalEquipamento from "../../components/ModalEquipamento";
import useModalEquipamento from "../../hooks/useModalEquipamento";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Cadastro() {
  const [modelo, setModelo] = useState("");
  const [id_fabricante, setFabricante] = useState("");
  const [consumo_nominal, setConsumoNominal] = useState("");
  const [data_compra, setData] = useState("");
  const [id_setor, setSetor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://localhost:8080/equipamento", {
        modelo,
        id_fabricante,
        consumo_nominal,
        data_compra,
        id_setor,
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    document.title = "Cadastro - SASC";
  }, []);

  const { isOpen, toggle } = useModalEquipamento();

  return (
    <>
      <ModalEquipamento isOpen={isOpen} toggle={toggle}>
        <div id="formEquipamento">
          <form onSubmit={handleSubmit}>
            <label>Modelo</label>
            <input
              type="text"
              value={modelo}
              onChange={(event) => setModelo(event.target.value)}
            />
            <label>Fabricante</label>
            <input
              type="text"
              value={id_fabricante}
              onChange={(event) => setFabricante(event.target.value)}
            />
            <label>Consumo Nominal</label>
            <input
              type="number"
              value={consumo_nominal}
              onChange={(event) => setConsumoNominal(event.target.value)}
            />
            <label>Data</label>
            <input
              type="date"
              value={data_compra}
              onChange={(event) => setData(event.target.value)}
            />
            <label>Setor</label>
            <input
              type="text"
              value={id_setor}
              onChange={(event) => setSetor(event.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </ModalEquipamento>
      <div id="cadastro">
        <div className="centering">
          <div className="articles">
            <article onClick={toggle}>
              <figure>
                <img
                  src="https://img.freepik.com/fotos-gratis/fundo-de-armazenamento-em-nuvem-remixado-do-dominio-publico-pela-nasa_53876-104240.jpg?w=740&t=st=1701032336~exp=1701032936~hmac=2dae78e2e1f87548a4858ab01f691503ecdcb476746fa75947b97c0a9517c423"
                  alt="Preview"
                />
              </figure>
              <div className="article-preview">
                <h2>Equipamento</h2>
                <p>
                  Cadastro de equipamentos como: Servidores, switches, desktops,
                  acess points, etc.
                </p>
              </div>
            </article>

            <Link to="/home">
              <article>
                <figure>
                  <img
                    src="https://img.freepik.com/fotos-gratis/design-de-escritorio-moderno-com-equipamento-de-computador-gerado-por-ai_188544-22422.jpg?w=826&t=st=1701032456~exp=1701033056~hmac=681e741200b5fbd2be5bd0fb6a8b010b93e11a29a5f96e6b5a3c5ab04dfd0acb"
                    alt="Preview"
                  />
                </figure>
                <div className="article-preview">
                  <h2>Setor</h2>
                  <p>
                    Cadastro de equipamentos como: Servidores, switches,
                    desktops, acess points, etc.
                  </p>
                </div>
              </article>
            </Link>
            <Link to="/home">
              <article>
                <figure>
                  <img
                    src="https://img.freepik.com/fotos-gratis/empregados-jovens-sentados-no-escritorio-a-mesa-e-usando-um-laptop-uma-equipe-trabalham-brainstorming-reuniao-conceito_146671-15624.jpg?w=740&t=st=1701032487~exp=1701033087~hmac=6ecfbef85f3ff2daf47ca313f990607bc4232f7e4f137344ba9d890dca3401ec"
                    alt="Preview"
                  />
                </figure>
                <div className="article-preview">
                  <h2>Funcionário</h2>
                  <p>
                    Cadastro de equipamentos como: Servidores, switches,
                    desktops, acess points, etc.
                  </p>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
