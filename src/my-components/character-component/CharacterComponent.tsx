import {FC, ReactNode} from 'react';
import {ICharacter} from "../../models/ICharacter.ts";
import './CharacterComponent.css'

type MyPropsType = {
    character: ICharacter;
    children?: ReactNode;

}

const CharacterComponent:FC<MyPropsType> = ({character, children}:MyPropsType ) => {
    return (
        <div className='character-block my-10'>
            <img src={character.photo} alt={character.name}/>
            <h2 className='character-name text-2xl'>{character.name} {character.surname}</h2>
            <p className='character-age'>{character.age}</p>
            <p>{children}</p>
        </div>
    );
};

export default CharacterComponent;