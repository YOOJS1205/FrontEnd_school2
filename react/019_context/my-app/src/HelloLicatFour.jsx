import { useContext } from 'react';
import { DarkMode } from './context/darkmode';

const HelloLicatFour = () => {
    const { mode } = useContext(DarkMode);

    return (
        <div>
            <h2>{`${mode}`}</h2>
        </div>
    )
}

export default HelloLicatFour;