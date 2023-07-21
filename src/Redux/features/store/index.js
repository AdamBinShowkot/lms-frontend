import { createSlice } from "@reduxjs/toolkit";
import { getStuckLists } from "./Async";

const initialState={
    stucks:[],
    stuckLoading:true,
    stuckError:''
}

const storeSlice=createSlice({
    name:'store',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getStuckLists.pending,(state,action)=>{
            state.stuckLoading=true;
            state.stuckError='';
        });
        builder.addCase(getStuckLists.fulfilled,(state,action)=>{
            state.stuckLoading=false;
            state.stucks=action.payload;
            state.stuckError='';
        });
        builder.addCase(getStuckLists.rejected,(state,action)=>{
            state.stuckLoading=false;
            state.stuckError='Get Stuck Lists Error.'
        })
    }
})

export default storeSlice.reducer;