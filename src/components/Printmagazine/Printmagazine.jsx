import style from "./printmagazine.module.css"
import Button from "../Button/Button";
import img from "../../img/magazin-cover.png"

const Printmagazine = () => {
    return (
        <>
            <div className={style.title}>Printmagazine</div>
            <div className={style.date}>03/2022</div>
            <div className={style.image}><img src={img} alt="image" /></div>
            <div className={style.btn}>
                <Button title="Button" onclick={() => { console.log('Click!'); }} />
            </div>
        </>
    );
}

export default Printmagazine;