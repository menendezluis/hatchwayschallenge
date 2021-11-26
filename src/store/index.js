import {configureStore} from '@reduxjs/toolkit'


//reducer
import students from './slices/students'
import search from './slices/search'
export default configureStore({
    reducer:{
        students: students,
        search:search
    }
})