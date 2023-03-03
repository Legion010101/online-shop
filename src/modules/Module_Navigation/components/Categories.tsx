import style from './Header.module.sass'
import styles from './Categories.module.sass'
import {FC} from "react";


export const Categories = () => {
    const list = [
        'Супер скидки',
        'Смотреть всё',
        'Новое',
        'Коллекции',
        'Одежда',
        'Сувенирка',
        'Сертификаты']
    return (
        <div className={styles.categories}>
            <div className={style.container}>
              <List list={list}/>
            </div>
        </div>
    )
}
 const List: FC<propsType> = ({list}) => {

    return (
        <div className={styles.list}>
            {list.map(c => {

                    return <div className={styles.item}>{c} </div>
                }
                )
            }
        </div>

    )
}
type propsType ={
    list: string[]
}