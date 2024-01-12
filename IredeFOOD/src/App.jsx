import Header from "./components/header/Header";
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [item1, setItem1] = useState(0);
  const [item2, setItem2] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(item1 + item2);
  }, [item1, item2]);

  return (
    <div>
      <Header />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Card value={item1} setItem={setItem1}/>
        <Card value={item2} setItem={setItem2}/>
      </main>
      {total === 0 ? null : total === 1 ? 
        <Footer text={"item"} value={total} />
       :
        <Footer text={"itens"} value={total} />
      }
    </div>
  );
}

export default App;
