import { configureStore } from '@reduxjs/toolkit'
import routeReducer from './route'
import skillBoxReducer from './backToSkillBox'

export const store = configureStore({
  reducer: {
    router: routeReducer,
    backToSkillBoxx: skillBoxReducer,
  },
})