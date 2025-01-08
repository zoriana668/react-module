import {FC} from 'react';
import {ICharacter} from "../../models/ICharacter.ts";

type MyPropsType = {
    character: ICharacter
}

const CharacterComponent:FC<MyPropsType> = ({character}) => {
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