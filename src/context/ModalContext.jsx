import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function useModal() {
    return useContext(ModalContext);
}

export function ModalProvider({ children }) {
    const [modal, setModal] = useState();

    return (
        <ModalContext.Provider value={[modal, setModal]}>
            {children}
        </ModalContext.Provider>
    );
}