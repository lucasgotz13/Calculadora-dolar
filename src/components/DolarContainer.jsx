import { useEffect, useState } from "react";
import Dolar from "./Dolar";

function DolarContainer() {
    const [dolarValues, setDolarValue] = useState([]);
    const [dolarInput, setDolarInput] = useState(1);

    const handleInputChange = (e) => {
        if (e.keyCode === 190 || e.target.value < 0) {
            e.preventDefault();
        }
        setDolarInput(e.target.value);
    };

    useEffect(() => {
        fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
            .then((res) => res.json())
            .then((data) => {
                const filteredData = data.filter((dolar) =>
                    [
                        "Dolar Oficial",
                        "Dolar Bolsa",
                        "Dolar Blue",
                        "Dolar turista",
                    ].includes(dolar.casa.nombre)
                );
                return setDolarValue(filteredData);
            });
    }, [dolarInput]);

    return (
        <div className="p-20 h-screen flex flex-col justify-center items-center bg-background">
            <h1 className="text-5xl text-white font-bold text-center mb-20">
                Calculadora dolares-pesos
            </h1>
            <div className=" flex flex-col p-10 rounded-lg bg-primary">
                <label
                    htmlFor="inputDolar"
                    className="text-3xl text-white text-center  mb-3.5"
                >
                    Dolares
                </label>
                <input
                    type="number"
                    defaultValue={1}
                    onChange={handleInputChange}
                    onKeyDownCapture={handleInputChange}
                    className="bg-secondary rounded-md p-2"
                />
                <br />
                <p className="text-3xl text-white mt-3.5 text-center">Pesos</p>
                <div className="mt-5 p-10  bg-secondary rounded-md ">
                    {dolarValues.map((dolar) => (
                        <Dolar dolar={dolar} dolarInput={dolarInput} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DolarContainer;
