import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandfather/Grandfather";

const Aunty = ({asset}) => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'Afia'}></Cousin>
                <Cousin name={'Rifat'} asset={asset}></Cousin>
            </section>

            <h3>Money: {money}</h3>
            <button onClick={() => setMoney(money + 1000)}>Add 1000 tk</button>
        </div>
    );
};

export default Aunty;