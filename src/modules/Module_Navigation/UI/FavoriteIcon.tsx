import styles from "../components/UIBar.module.sass";
import {
    HeartOutlined,
    UserOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons';

export const FavoriteIcon =()=>{

    return (
        <div className={styles.favorite}>
            <div className={styles.item}> <HeartOutlined /> </div>
            <div className={styles.item}> <UserOutlined /> </div>
            <div className={styles.item}> <ShoppingCartOutlined /> </div>
        </div>
    )
}