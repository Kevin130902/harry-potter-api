import { useEffect, useState } from "react";
import axios from "axios";

import { Card } from "./components/Card";
import { ModalRenderer } from "./components/Modal";

function Personagens() {
    const [data, setData] = useState();

    useEffect(() => {
        (async () => {
            const result = await axios.get("https://hp-api.onrender.com/api/characters")
                .then((({ data }) => ({ ok: true, data })))
                .catch(() => ({ ok: false }));

            setData(result);
        })();
    }, []);

    if (!data) {
        return <progress />;
    }

    if (!data.ok) {
        return <p>Ocorreu um erro ao tentar carregar os dados da API</p>;
    }

    const { data: chars } = data;

    return <div
        style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "1em",
            justifyContent: "center",
            margin: "2em 0",
        }}
    >
        {chars.map((char) => <Card key={char.id} {...char} />)}
    </div>;
}

export function HomePage() {
    return <>
        <ModalRenderer />
        <header className="header">
            <div className="container">
                <h1>API de Harry Potter</h1>
            </div>
        </header>
        <main className="container">
            <Personagens />
        </main>
        <footer>
            <p>Kevin Tavares - 2025 &copy;</p>
        </footer>
    </>;
}