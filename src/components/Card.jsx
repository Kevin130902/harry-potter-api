import { useModal } from "../context/ModalContext";

import { Field } from "./Field";

function CardButton({ cardInfo }) {
    const [, openModal] = useModal();

    return (
        <button type="button" onClick={() => openModal(cardInfo)}>
            <i className="bi bi-eye-fill"></i>
        </button>
    );
}

// principais: nome, data de nascimento, é feiticeiro, status
export function Card(props) {
    const img = props.image.length > 0 ? props.image : undefined;

    return (
        <article
            key={props.id}
            className="char-info"
            style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                border: "3px solid black"
            }}
        >
            <div>
                {img && <img alt={props.name ?? "Imagem vazia"} src={img} style={{ width: "80px" }} />}
                <ul>
                    <Field label="Nome">
                        {props.name}
                    </Field>

                    <Field label="Data de Nascimento">
                        {props.dateOfBirth ?? "Desconhecido"}
                    </Field>
                    <Field label="É um feiticeiro">
                        {props.wizard ? "Sim" : "Não"}
                    </Field>

                    <Field label="Status">
                        {props.alive ? "Vivo" : "Morto"}
                    </Field>
                </ul>
            </div>

            <div>
                <CardButton cardInfo={props} />
            </div>
        </article>
    );
}