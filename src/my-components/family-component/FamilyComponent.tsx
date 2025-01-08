import {simpsons} from "../../data/charactersList.ts";
import CharacterComponent from "../character-component/CharacterComponent.tsx";


export const FamilyComponent = ()=> {
    return (
        <div>
            {
                simpsons.map(value => <CharacterComponent character={value}>
                    {value.info}
                    </CharacterComponent>)
            }
        </div>
    )
}