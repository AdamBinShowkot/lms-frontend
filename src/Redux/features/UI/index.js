import { createSlice } from "@reduxjs/toolkit";

const initialState={
    tags:[],
    isCollapsed:false
}

const uiSlice=createSlice({
    name:'UI',
    initialState,
    reducers:{
        addTags:(state,action)=>{
            state.tags=[...state.tags,action.payload]
        },
        deleteTags:(state,action)=>{
            state.tags=state.tags.filter((tData)=>{
                if(tData.id===action.payload.id){
                    return false;
                }
            })
        },
        handleMenuCollapsed:(state,action)=>{
            state.isCollapsed=!state.isCollapsed
        }
    }
});

export const {addTags,deleteTags,handleMenuCollapsed}=uiSlice.actions;
export default uiSlice.reducer;