import { useContext } from "react";
import { ProductInfo } from './context/productinfo';
import HelloLicatFour from "./HelloLicatFour";

const HelloLicatThree = () => {
    const { name, price } = useContext(ProductInfo);

    return (
        <div>
            <h2>{name}</h2>
            <strong>{price}</strong>
            <HelloLicatFour />
        </div>
    )
}

export default HelloLicatThree;