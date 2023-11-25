import "./style.cardequipamento.css";
import { Link } from "react-router-dom";

export default function CardEquipamento(props: any) {
  props.equipamento;

  return (
    <>
      <div className="equipamento">
        <p>ID: {props.id}</p>
        <p>MODELO: {props.modelo}</p>
        <p>FABRICANTE: {props.titulo}</p>
        <p>CONSUMO NOMINAL: {props.consumo_nominal}</p>
        <p>DATA: {props.data_compra}</p>
        <p>SETOR: {props.tituloFabricante}</p>
      </div>
    </>
  );
}
