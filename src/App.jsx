import { useState } from "react";
import DolarContainer from "./components/DolarContainer";

function App() {
    return (
        <>
            <h1 className="text-3xl text-red-500">Calculadora dolares-pesos</h1>
            <DolarContainer />
        </>
    );
}

export default App;
