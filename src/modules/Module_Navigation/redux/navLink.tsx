import { createSlice} from "@reduxjs/toolkit";
import {v1} from 'uuid'
import {
    FacebookOutlined,
    GithubOutlined,
    InstagramOutlined,
} from '@ant-design/icons';
 const navLink = createSlice({
    name:'navLink',
    initialState:{
        socialNetwork: [
            {icon:<FacebookOutlined />,to:'https://vk.com/danil_korablev',key:v1()},
            {icon:<GithubOutlined />,to:'https://vk.com/danil_korablev',key:v1()},
            {icon:<InstagramOutlined />,to:'https://vk.com/danil_korablev',key:v1()}
        ],
        navigate: [
            {text:'Доставка',to:'/delivery',key:v1()},
            {text:'FAQ',to:'/FAQ',key:v1()},
            {text:'Вакансии',to:'/vacancy',key:v1()},
            {text:'Магазины',to:'/outlets',key:v1()},
            {text:'Контакты',to:'/contact',key:v1()}

        ],

    },
    reducers:{

        },
    }
)
export default navLink.reducer