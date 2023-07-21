import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import configAxios from '../../../utils/axios';

export const getAllGender=createAsyncThunk(
    'getAllGender',
    async()=>{
        configAxios();
        const genderLists=axios.get(`/common/getGender`).then((response)=>{
            if(response.status===200 && response.data.IsSuccess){
                return response.data.data;
            }
        }).catch((error)=>{
            console.log("Get All Gender Error .")
            return []
        })

        return genderLists;
    }
);

export const getAllBloodGroup=createAsyncThunk(
    'getAllBloodGroup',
    async()=>{
        configAxios();
        const genderLists=axios.get(`/common/getBloodGroup`).then((response)=>{
            if(response.status===200 && response.data.IsSuccess){
                return response.data.data;
            }
        }).catch((error)=>{
            console.log("Get All Gender Error .")
            return []
        })

        return genderLists;
    }
)

export const getAllOccupationLists=createAsyncThunk(
    'getAllOccupation',
    async()=>{
        configAxios();
        const occupationLists=axios.get(`/common/getOccupation`).then((response)=>{
            if(response.status===200 && response.data.IsSuccess){
                return response.data.data;
            }
        }).catch((error)=>{
            console.log("Get Occupation Lists Error.");
            return [];
        })
        return occupationLists;
    }
)
