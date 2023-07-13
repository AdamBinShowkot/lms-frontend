import axios from "axios";
import configureAxios from "../axios";

let menuLists=[];

export const getMenuLists=()=>{
    configureAxios();
    let UserId=localStorage.getItem("UserId");
    axios.get('/getMenuLists?&UserId='+JSON.stringify(UserId))
    .then((response)=>{
        console.log(response)
        if(response.status===200 && response.data.IsSuccess){
            menuLists=response.data.MenuLists;
            sessionStorage.setItem("MenuLists",JSON.stringify(menuLists));
        }
    }).catch((error)=>{

    })
}

export default menuLists;
