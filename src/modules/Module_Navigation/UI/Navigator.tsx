import style from '../components/Header.module.sass'
import {useSelector} from "react-redux";
import {getNavigateLink} from "../redux/Selectors/navLinkSelectors.";
import {NavLink} from "react-router-dom";

export const Navigator =()=>{
    const links = useSelector(getNavigateLink)
    return (
        <div className={style.navigator}>
            {links.map(link=>{
                return <NavLink key={link.key} to={link.to} >{link.text}</NavLink>
            })}
        </div>
    )
}