import { useEffect, useState } from "react";

function DolarContainer() {
    const [dolarValues, setDolarValue] = useState([]);
    const [dolarInput, setDolarInput] = useState(1);

    const handleInputChange = (e) => {
        setDolarInput(e.target.value);
    };

    useEffect(() => {
        fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
            .then((res) => res.json())
            .then((data) => {
                const filteredData = data.filter(
                    (dolar) =>
                        dolar.casa.venta !== "No Cotiza" &&
                        dolar.casa.venta !== "0"
                );
                return setDolarValue(filteredData);
            });
    }, [dolarInput]);

    return (
        <>
            <label htmlFor="inputDolar">Dolares:</label>
            <input
                type="number"
                defaultValue={1}
                onChange={(e) => handleInputChange(e)}
                onKeyDownCapture={(e) => handleInputChange(e)}
            />
            <br />
            {dolarValues.map((dolar) => (
                <div key={dolar.casa.nombre}>
                    <h1>{dolar.casa.nombre}</h1>
                    <p>
                        {(
                            parseFloat(dolar.casa.venta.replace(",", ".")) *
                            dolarInput
                        ).toFixed(2)}
                    </p>
                    <br />
                </div>
            ))}
        </>
    );
}

export default DolarContainer;
