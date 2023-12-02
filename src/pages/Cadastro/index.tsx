import "./style.cadastro.css";
import { Link } from "react-router-dom";
import ModalEquipamento from "../../components/ModalEquipamento";
import ModalEndereco from "../../components/ModalEndereco";

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

  const [id_modelo, setModelo] = useState("");
  const [data_compra, setData] = useState("");
  const [id_setor, setSetor] = useState("");

  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  const handleSubmitEquipamento = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/equipamento", {
        id_modelo,
        data_compra,
        id_setor,
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  const handleSubmitEndereco = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/endereco", {
        cep,
        logradouro,
        numero,
        bairro,
        cidade,
        estado,
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  const [modelos, setModelos] = useState<any[]>([]);

  function listarModelos() {
    api.get("modelo").then((response: any) => {
      console.log(response.data);
      setModelos(response.data);
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

    listarModelos();
    listarSetores();
  }, []);

  const { isOpen, toggleEquipamento } = useModalEquipamento();

  return (
    <>
      <ModalEquipamento isOpen={isOpen} toggleEquipamento={toggleEquipamento}>
        <div id="divformEquipamento">
          <h1>Cadastro de Equipamentos</h1>
          <form id="formEquipamento" onSubmit={handleSubmitEquipamento}>
            <label>Modelo</label>
            <select
              className="selectEquipamento"
              name=""
              id="selectModelo"
              onChange={(event) => setModelo(event.target.value)}
            >
              <option selected disabled value="">
                Selecione
              </option>
              {modelos.map((modelo: any, index: number) => {
                return (
                  <option key={index} value={modelo.id}>
                    {modelo.modelo}
                  </option>
                );
              })}
            </select>

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
            <article onClick={toggleEquipamento}>
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
                  Cadastro de equipamentos como: Servidores, switches, desktops,
                  acess points, etc.
                </p>
              </div>
            </article>

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
                  Cadastro de equipamentos como: Servidores, switches, desktops,
                  acess points, etc.
                </p>
              </div>
            </article>

            <article>
              <figure>
                <img
                  src="https://img.freepik.com/fotos-gratis/pinos-vermelhos-turva-no-mapa_23-2148510530.jpg?w=740&t=st=1701210263~exp=1701210863~hmac=f093f00ccb4da518ee553de1257cdbedfcdca02e520a4cb26c15a1bc5115ea7d"
                  alt="Preview"
                />
              </figure>
              <div className="article-preview">
                <h2>Endereço</h2>
                <p>
                  Cadastro de equipamentos como: Servidores, switches, desktops,
                  acess points, etc.
                </p>
              </div>
            </article>

            <article>
              <figure>
                <img
                  src="https://img.freepik.com/vetores-gratis/fundo-realista-do-processador-de-microchip_23-2148885300.jpg?w=740&t=st=1701210313~exp=1701210913~hmac=acbc81ff2dbefbebbc9eb85b099c72298eb39834bc53dda2c29ae6ab045a0b5b"
                  alt="Preview"
                />
              </figure>
              <div className="article-preview">
                <h2>Fabricante</h2>
                <p>
                  Cadastro de equipamentos como: Servidores, switches, desktops,
                  acess points, etc.
                </p>
              </div>
            </article>

            <article>
              <figure>
                <img
                  src="https://img.freepik.com/fotos-gratis/interior-de-um-grande-armazem-logistico-ai-generative_123827-23884.jpg?w=740&t=st=1701210441~exp=1701211041~hmac=33f44cb8698515f32ab41634904650dec2269bdb8f85cd80ba4b36bc6840659f"
                  alt="Preview"
                />
              </figure>
              <div className="article-preview">
                <h2>Unidade</h2>
                <p>
                  Cadastro de equipamentos como: Servidores, switches, desktops,
                  acess points, etc.
                </p>
              </div>
            </article>

            <article>
              <figure>
                <img
                  src="https://img.freepik.com/fotos-gratis/interior-de-um-grande-armazem-logistico-ai-generative_123827-23884.jpg?w=740&t=st=1701210441~exp=1701211041~hmac=33f44cb8698515f32ab41634904650dec2269bdb8f85cd80ba4b36bc6840659f"
                  alt="Preview"
                />
              </figure>
              <div className="article-preview">
                <h2>Modelo</h2>
                <p>
                  Cadastro de equipamentos como: Servidores, switches, desktops,
                  acess points, etc.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
