import style from '../components/Header.module.sass'
import {useSelector} from "react-redux";
import {getSocialNetwork} from "../redux/Selectors/navLinkSelectors.";
import {NavLink} from "react-router-dom";

export const SocialNetworks =()=>{
    const socials = useSelector(getSocialNetwork)
    return (
        <div className={style.social}>
            {socials.map(s=>{
                return <NavLink key={s.key} to={s.to} target="_blank">{s.icon}</NavLink>
            })}
        </div>
    )
}