import { createSlice } from "@reduxjs/toolkit";

const initialState={
    menus:[]
}

const MenuSlice=createSlice({
    name:'Menus',
    initialState,
    reducers:{
        getAllMenus:(state,action)=>{
            state.menus=action.payload
        }
    }
})

export const {getAllMenus}=MenuSlice.actions;
export default MenuSlice.reducer;