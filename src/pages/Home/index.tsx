import { useEffect, useState } from "react";
import "./style.home.css";
import { Link, useNavigate } from "react-router-dom";
import api from "../../utils/api";
import CardEquipamento from "../../components/CardEquipamento";

export default function Home() {
  const [equipamentos, setEquipamentos] = useState<any[]>([]);

  function listarEquipamento() {
    api.get("equipamento").then((response: any) => {
      console.log(response.data);
      setEquipamentos(response.data);
    });
  }

  useEffect(() => {
    listarEquipamento();
  }, []);

  return (
    <>
      <div id="home">
        <ul>
          {equipamentos.map((equipamento: any, index: any) => {
            return (
              <li key={index}>
                <CardEquipamento
                  id={equipamento.id}
                  modelo={equipamento.modelo}
                  titulo={equipamento.fabricante.titulo}
                  consumo_nominal={equipamento.consumo_nominal}
                  data_compra={equipamento.data_compra}
                  tituloFabricante={equipamento.setor.titulo}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
