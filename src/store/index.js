import {configureStore} from '@reduxjs/toolkit'

//reducer
import students from './slices/students'
export default configureStore({
    reducer:{
        students: students,
    }
})