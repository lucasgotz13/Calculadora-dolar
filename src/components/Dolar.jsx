export default function Dolar({ dolar, dolarInput }) {
    return (
        <div key={dolar.casa.nombre} className="flex gap-5">
            <h1 className="text-white text-xl">{dolar.casa.nombre}:</h1>
            <p className="text-lg">
                $
                {(
                    Math.round(
                        parseFloat(dolar.casa.venta.replace(",", ".")) * 100
                    ) / 100
                ).toFixed(0) * dolarInput}
            </p>
        </div>
    );
}
