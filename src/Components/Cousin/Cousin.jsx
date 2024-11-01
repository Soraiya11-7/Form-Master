import Friend from "../Friend/Friend";
import Special from "../Special/Special";

const Cousin = ({name, asset}) => {
    return (
        <div>
            <h2>Cousin </h2>
            <h3>{name}</h3>
            <section>
                {asset && <Special asset={asset}></Special>}
                {name==="Remi" && <Friend></Friend>}
            </section>
            
        </div>
    );
};

export default Cousin;