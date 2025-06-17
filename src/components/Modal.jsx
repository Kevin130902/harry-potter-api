import { useModal } from "../context/ModalContext";

import { get } from "../util/traducao";
import { capitalize } from "../util/capitalize";

function ModalButton() {
    const [, openModal] = useModal();

    return (
        <button type="button" onClick={() => openModal()}>
            <i className="bi bi-x-lg"></i>
        </button>
    );
}

function Field({ label, children }) {
    return (
        <li><b>{label}:</b> {children}</li>
    );
}

export function ModalRenderer() {
    const [info] = useModal();
    const isVisible = info !== undefined;

    return <div style={{
        display: isVisible ? undefined : "none",
        height: isVisible ? undefined : "0",
    }}>
        {info && <Modal {...info} />}
    </div>;
}

export function Modal(props) {
    const { wand } = props;

    return (

        <article
            style={{
                position: "fixed",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                backgroundColor: "#0000007e",
            }}
        >
            <div
                className="char-info"
                style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr auto",
                    backgroundColor: "var(--background-color)",
                }}
            >
                {props.image && (
                    <div
                        style={{
                            border: "3px solid black",
                            marginRight: "2em",
                            maxWidth: "300px",
                        }}
                    >
                        <img style={{ width: "100%", height: "100%" }} src={props.image} />
                    </div>
                )}

                <div>
                    <Field label="Nome">
                        {props.name}
                    </Field>

                    <Field label="Nomes Alternativos">
                        <ul className="sublist">
                            {props.alternate_names.map((name) => <li key={name}>{name}</li>)}
                        </ul>
                    </Field>

                    <Field label="Espécie/Raça">
                        {get(props.species)}
                    </Field>

                    <Field label="Data de Nascimento">
                        {props.dateOfBirth ?? "Desconhecido"}
                    </Field>

                    <Field label="Ano de Nascimento">
                        {props.yearOfBirth ?? "Desconhecido"}
                    </Field>

                    <Field label="É um feiticeiro">
                        {props.wizard ? "Sim" : "Não"}
                    </Field>

                    <Field label="Ancestralidade">
                        {get(props.ancestry, "Desconhecido")}
                    </Field>

                    <Field label="Cor de Olho">
                        {get(props.eyeColour, "Desconhecido")}
                    </Field>

                    <Field label="Cor de Cabelo">
                        {get(props.hairColour, "Desconhecido")}
                    </Field>

                    <Field label="Informações da Varinha">
                        {wand.length > 0 ? (
                            <ul className="sublist">
                                <Field label="Madeira">{capitalize(wand.wood) || "Desconhecida"}</Field>
                                <Field label="Núcleo">{capitalize(wand.core) || "Desconhecido"}</Field>
                                <Field label="Tamanho">{wand.length}</Field>
                            </ul>
                        ) : "Desconhecido"}
                    </Field>

                    <Field label="Patrono">
                        {get(props.patronus)}
                    </Field>

                    <Field label="É um estudante de Hogwarts">
                        {props.hogwartsStudent ? "Sim" : "Não"}
                    </Field>

                    <Field label="É um funcionário de Hogwarts">
                        {props.hogwartsStaff ? "Sim" : "Não"}
                    </Field>

                    <Field label="Ator/Atriz">
                        {props.actor}
                        {props.alternate_actors.length > 0 && (
                            <ul className="sublist">
                                {props.alternate_actors.map((name) => <li key={name}>{name}</li>)}
                            </ul>
                        )}
                    </Field>

                    <Field label="Status">
                        {props.alive ? "Vivo" : "Morto"}
                    </Field>
                </div>

                <div>
                    <ModalButton />
                </div>
            </div>
        </article>
    );
}