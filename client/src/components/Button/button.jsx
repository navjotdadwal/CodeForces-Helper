import React from "react";

import {
    ButtonComponent
} from "./buttonStyles";

const Button = ({innerText}) => {
    return (
        <ButtonComponent>
            <button className="butn">
                {innerText}
            </button>
        </ButtonComponent>
    );
};
export default Button;