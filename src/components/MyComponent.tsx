import {FC} from "react";

// стандартний варіант підключення css
// import './MyComponent.css'


// варіант з модулями
import styles from './MyComponent.module.css'


type MyComponentPropType = { text: string };

const MyComponent:FC<MyComponentPropType> = ({text}) => {
    return (
        // <div className={'target'}>
        //     {text}
        // </div>


        //  // варіант з модулями
        <div className={styles.target}>
            {text}
        </div>
    );
};

export default MyComponent;