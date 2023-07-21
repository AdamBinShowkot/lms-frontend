import { createAsyncThunk } from "@reduxjs/toolkit";
import configureAxios from "../../../utils/axios";
import axios from "axios";
import { Success,Warning } from "../../../utils/Message";

export const getStuckLists=createAsyncThunk(
    'store/getStuckLists',
    async()=>{
        configureAxios();
        const stackLists=axios.get(`/cupboard/lists`).then((response)=>{
            if(response.status===200 && response.data.IsSuccess){
                return response.data.data;
            }
        }).catch((error)=>{
            console.log("Get Stuck Lists Error");
            return [];
        })

        return stackLists;
    }
)

export const createNewStuck=(data)=>async(dispatch)=>{
    configureAxios();

    let myData={...data};
    axios.post(`/cupboard/create`,JSON.stringify(myData)).then((response)=>{
        if(response.status===200 && response.data.IsSuccess){
            console.log(response)
            Success(response.data.message,{},{});
            dispatch(getStuckLists());
        }
    }).catch((error)=>{
        console.log("Create Stuck Error.");
    })
}