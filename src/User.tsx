import React, { FunctionComponent } from "react";


type UserProps = {
    name: string;
    age: number;
    onClick: () => void

}

export const User: FunctionComponent<UserProps> = ({name, age, onClick}) => {
    return(
        <button onClick={onClick}>
        {name} {age}</button>
    )
}