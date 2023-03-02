import {RootState} from "../../../../store";


export const getNavigateLink = (state:RootState) => {
    return state.navLink.navigate
}
export const getSocialNetwork = (state:RootState) => {
    return state.navLink.socialNetwork
}