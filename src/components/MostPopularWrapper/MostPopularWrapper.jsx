import style from "./mostpopularwrapper.module.css"
import MostPopular from "../MostPopular/MostPopular"

const MostPopularWrapper = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.category}>Most Popular</div>
            <MostPopular
                num="01"
                title="Street art festival"
                autor="Cristofer Vaccaro" />

            <MostPopular
                num="02"
                title="Hope dies last"
                autor="Anne Henry" />

            <MostPopular
                num="03"
                title="Artists who want to rise above"
                autor="Anna Nielsen" />
        </div>
    );
}

export default MostPopularWrapper;