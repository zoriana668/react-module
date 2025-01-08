import {FC, ReactNode} from 'react';
import {ICharacter} from "../../models/ICharacter.ts";

type MyPropsType = {
    character: ICharacter;
    children?: ReactNode;

}

const CharacterComponent:FC<MyPropsType> = ({character, children}) => {
    return (
        <div>
            <h2>{character.name} {character.surname}</h2>
            <img src={character.photo} alt={character.name}/>
            <p>{character.age}</p>
            <p>{character.info}</p>
        </div>
    );
};

export default CharacterComponent;