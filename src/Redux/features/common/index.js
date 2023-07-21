import { createSlice } from "@reduxjs/toolkit";
import { 
    getAllBloodGroup,
    getAllGender, 
    getAllOccupationLists
} from "./Async";

const initialState={
    occupations:[],
    gender:[],
    bloodGroup:[]
}

const CommonSlice=createSlice({
    name:'Common',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getAllBloodGroup.fulfilled,(state,action)=>{
            state.bloodGroup=action.payload
        });
        builder.addCase(getAllGender.fulfilled,(state,action)=>{
            state.gender=action.payload
        });
        builder.addCase(getAllOccupationLists.fulfilled,(state,action)=>{
            state.occupations=action.payload;
        })
    }
})

export default CommonSlice.reducer;