import { useContext } from "react";
import { AssetContext } from "../Grandfather/Grandfather";

const Friend = () => {
     const gift = useContext(AssetContext);
    return (
        <div>
            <h2>Friend</h2>
            <h5>has : {gift}</h5>
        </div>
    );
};

export default Friend;