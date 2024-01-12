import style from "./style.module.css";

function Footer({text, value}) {
  return (
    <footer className={style.footer}>
      <span>Total de Items</span>
      <span>{value} {text}</span>
    </footer>
  );
}

export default Footer;
