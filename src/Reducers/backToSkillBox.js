import { createSlice } from '@reduxjs/toolkit'

const initialState={
    value:0,
}

export const backToSkillBox = createSlice({
    name:'backToSkillBoxx',
    initialState,
    reducers:{
        skillBoxSection:(state, action) =>{
            state.value += action.payload
        }
    }
})

export const { skillBoxSection } = backToSkillBox.actions

export default backToSkillBox.reducer