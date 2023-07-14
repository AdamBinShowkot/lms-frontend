import axios from "axios";
import configureAxios from "../axios";


export const getMenuLists=async(UserId,GroupId)=>{
    let menuLists=[];
    configureAxios();

    menuLists=axios.get('/getMenus?UserId='+UserId+'&GroupId='+GroupId)
    .then((response)=>{
        //console.log(response)
        if(response.status===200 && response.data.IsSuccess){
            if(response.data.data.length){
                return response.data.data;
            }else{
                return [];
            }
            //menuLists=response.data.MenuLists;
            //sessionStorage.setItem("MenuLists",JSON.stringify(menuLists));
        }
    }).catch((error)=>{
        console.log('Get Menu Lists Error.')
        return []
    })

    return menuLists;
}

export default getMenuLists;
