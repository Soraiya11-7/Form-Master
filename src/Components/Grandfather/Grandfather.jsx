import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandfather.css'

export const AssetContext = createContext('Diamond');
export const MoneyContext = createContext(1000);
const Grandfather = () => {
    const asset = 'Gold';
    const [money, setMoney] = useState(1000);
    return (
        <div className="grandfather ">
            <h2>Grandfather</h2>
            <h3>Net Money: {money}</h3>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value='Diamond'>
                    <section className="flex">
                        <Dad asset={asset}></Dad>
                        <Uncle></Uncle>
                        <Aunty asset={asset}></Aunty>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandfather;


// 1. Create a context and export it
// 2. Add Provider for the context with a value. value could be anything
// 3. useContext to access value in the context API