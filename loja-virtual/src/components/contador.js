import { useState, useEffect } from "react";

function Contador() {
   const [contador, setcontador] = useState(0)
    function adicionarCont() {
        setcontador(contador + 1)
    }
    return (
        <div className="contador">
        <button id="Bc" onClick={adicionarCont}>Adicionado ao carrinho</button><div className="numeroC">{contador}</div>
        </div>
    )
}

export default Contador