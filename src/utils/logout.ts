import Cookies from 'js-cookie';

export const logout = ()=>{

    sessionStorage.removeItem("userData")

    Cookies.remove("refresh_token")
    Cookies.remove("access_token")
}