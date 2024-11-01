import { useContext } from "react";
import { AssetContext } from "../Grandfather/Grandfather";

const Special = ({asset}) => {
    const gift  = useContext(AssetContext)
    return (
        <div>
            <h2>Special</h2>
            <h5>has a : {asset}</h5>
            <h5>Also has : {gift}</h5>
        </div>
    );
};

export default Special;