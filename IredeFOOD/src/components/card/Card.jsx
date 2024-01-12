import style from "./style.module.css";
import Sanduiche from "../../assets/sanduiche.jpg";

function Card({ value, setItem }) {


  const handleClickButton = (operator) =>{
    if(operator === "+"){
      setItem(prevItem => prevItem+1)
    }else if(operator === "-" && value > 0){
      setItem(prevItem => prevItem-1)
    }
  }
  return (
    <article className={style.card}>
      <div role="image" className={style.image}>
        <img src={Sanduiche} alt="imagem produto" />
      </div>
      <div role="group" className={style.dados}>
        <h2 role="text" aria-label="nome produto" tabIndex={0}>
          Hamburguer
        </h2>
        <p role="text" aria-label="descricao produto" tabIndex={0}>
          Experimente nosso hambúrguer premium: carne suculenta, queijo
          derretido, vegetais frescos (alface, tomate, cebola roxa) e molho
          especial. Uma combinação perfeita de sabores e texturas em cada
          mordida.
        </p>

        <div role="group" className={style.button}>
          <button type="button" role="button" aria-label="botao menos" tabIndex={0} onClick={() =>{handleClickButton('-')}}>
            -
          </button>
          <span role="text" aria-label="quantidade de itens" tabIndex={0}>
            {value < 1
              ? "adicionar Items"
              : value === 1
              ? `${value} item`
              : `${value} items`}
          </span>
          <button type="button" role="button" aria-label="botao mais" tabIndex={0} onClick={() => {handleClickButton('+')}}>
            +
          </button>
        </div>
      </div>
    </article>
  );
}

export default Card;
