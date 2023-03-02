import style from './Header.module.sass'
import {Navigator} from "../UI/Navigator";
import {SocialNetworks} from "../UI/SocialNetworks";

export const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.line}>
                    <div className={style.contacts}><SocialNetworks/></div>
                    <div className={style.navigator}><Navigator/></div>
                    <div className={style.btn}>
                        <div className={style.btn1}>Заказать производство </div>
                        <div className={style.btn2}>разработать дизайн </div>
                    </div>


                </div>
            </div>
        </div>
    )
}