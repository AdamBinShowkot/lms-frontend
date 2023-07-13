import { createSlice } from "@reduxjs/toolkit";

const initialState={
    tags:[]
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
        }
    }
});

export const {addTags,deleteTags}=uiSlice.actions;
export default uiSlice.reducer;