import { createSlice } from '@reduxjs/toolkit'

const initialState={
    value:0,
}

export const routes = createSlice({
    name:'router',
    initialState,
    reducers:{
        aboutSection:(state, action) =>{
            state.value = action.payload
        }
    }
})

export const { aboutSection } = routes.actions

export default routes.reducer