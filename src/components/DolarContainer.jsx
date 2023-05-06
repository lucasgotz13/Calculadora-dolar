import { useEffect, useState } from "react"

function DolarContainer() {
    const [dolarValues, setDolarValue] = useState(null) 

    useEffect(() => {
        fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
            .then(res => res.json())
            .then(data => setDolarValue(data))
    }, [])

    return (
        <div>DolarContainer</div>
                
    )
}

export default DolarContainer
