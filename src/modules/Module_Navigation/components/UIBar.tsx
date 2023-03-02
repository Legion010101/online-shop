import style from './Header.module.sass'
import styleUIBar from './UIBar.module.sass'
import {Logo} from "../UI/Logo";
import {SearchInput} from "../UI/SearchInput";
import {FavoriteIcon} from "../UI/FavoriteIcon";



export const UIBar = () => {
    return (
        <div className={styleUIBar.UIBar}>
            <div className={style.container}>
                <div className={style.line}>
                    <Logo/>
                    <SearchInput/>
                    <FavoriteIcon/>
                </div>
            </div>
        </div>
    )
}