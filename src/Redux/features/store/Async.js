import { createAsyncThunk } from "@reduxjs/toolkit";
import configureAxios from "../../../utils/axios";
import axios from "axios";

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