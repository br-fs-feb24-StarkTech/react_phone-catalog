import React from "react";
import { Teste } from "../../types/ProductProps";

interface Props {
  color: Teste;
}

export const VariantsButtons: React.FC<Props> = ( color ) => {
    return (
        <>
        <span className={`variants__colors-border ${color === colorActive ? "active--border" : ""}`}>
            <button className={`variants__color color--${color}`} onClick={() => handleChangeColor(color)}></button>
        </span>
        </>
    )
}