import style from "./newsletter.module.css"
import Button from "../Button/Button";

const Newsletter = () => {
    return (
        <>
            <div className={style.wrapper}>
                <div className={style.header}>NEWSLETTER</div>
                <div className={style.title}>Design News to your inbox</div>
                <input className={style.input} type="text" placeholder="Email" />
                <div className={style.btn}> <Button title="Sign up" onclick={() => { console.log('Click!'); }} /></div>
            </div >
      
        </>
    );
}

export default Newsletter;