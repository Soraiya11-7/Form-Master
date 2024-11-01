import { useContext } from "react";
import { MoneyContext } from "../Grandfather/Grandfather";

const Brother = () => {
    const [money] = useContext(MoneyContext);
    return (
        <div>
            <h2>Brother</h2>
            <h3>Money: {money}</h3>
        </div>
    );
};

export default Brother;