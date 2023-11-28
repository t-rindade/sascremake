import "./style.cadastro.css";
import { Link } from "react-router-dom";
import ModalEquipamento from "../../components/ModalEquipamento";
import useModalEquipamento from "../../hooks/useModalEquipamento";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import api from "../../utils/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cadastro() {
  const notify = () =>
    toast.success("Cadastrado", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const [modelo, setModelo] = useState("");
  const [id_fabricante, setFabricante] = useState("");
  const [consumo_nominal, setConsumoNominal] = useState("");
  const [data_compra, setData] = useState("");
  const [id_setor, setSetor] = useState("");
  const [valor, setValor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/equipamento", {
        modelo,
        id_fabricante,
        consumo_nominal,
        data_compra,
        id_setor,
        valor,
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  const [fabricantes, setFabricantes] = useState<any[]>([]);

  function listarFabricantes() {
    api.get("fabricante").then((response: any) => {
      console.log(response.data);
      setFabricantes(response.data);
    });
  }

  const [setores, setSetores] = useState<any[]>([]);

  function listarSetores() {
    api.get("setor").then((response: any) => {
      console.log(response.data);
      setSetores(response.data);
    });
  }

  useEffect(() => {
    document.title = "Cadastro - SASC";

    listarFabricantes();
    listarSetores();
  }, []);

  const { isOpen, toggle } = useModalEquipamento();

  return (
    <>
      <ModalEquipamento isOpen={isOpen} toggle={toggle}>
        <div id="divformEquipamento">
          <h1>Cadastro de Equipamentos</h1>
          <form id="formEquipamento" onSubmit={handleSubmit}>
            <label>Modelo</label>
            <input
              className="inputEquipamento"
              type="text"
              value={modelo}
              onChange={(event) => setModelo(event.target.value)}
            />

            <label>Fabricante</label>
            <select
              className="selectEquipamento"
              name=""
              id="selectfabricante"
              onChange={(event) => setFabricante(event.target.value)}
            >
              <option selected disabled value="">
                Selecione
              </option>
              {fabricantes.map((fabricante: any, index: number) => {
                return (
                  <option key={index} value={fabricante.id}>
                    {fabricante.titulo}
                  </option>
                );
              })}
            </select>

            <label>Consumo Nominal</label>
            <input
              className="inputEquipamento"
              type="number"
              value={consumo_nominal}
              onChange={(event) => setConsumoNominal(event.target.value)}
            />
            <label>Data</label>
            <input
              className="inputEquipamento"
              type="date"
              value={data_compra}
              onChange={(event) => setData(event.target.value)}
            />

            <label>Setor</label>
            <select
              className="selectEquipamento"
              name=""
              id="selectsetor"
              onChange={(event) => setSetor(event.target.value)}
            >
              <option selected disabled value="">
                Selecione
              </option>
              {setores.map((setor: any, index: number) => {
                return (
                  <option key={index} value={setor.id}>
                    {setor.titulo}
                  </option>
                );
              })}
            </select>

            <label>Valor</label>
            <input
              className="inputEquipamento"
              type="any"
              value={valor}
              onChange={(event) => setValor(event.target.value)}
            />

            <button onClick={notify} id="submitEquipamento" type="submit">
              CADASTRAR
            </button>
            <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
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
