import {createSlice} from '@reduxjs/toolkit'

export const searchSlice = createSlice({
   name:"search",
   initialState:{
       list:[]
   },
   reducers:{
       setSearchList: (state, action) => {
        state.list = action.payload;
       },
       updateSearchData: (state, action) => {
        state.list.forEach(search => {
          
             if(search.id === action.payload.id){
              
                  search.value = action.payload.value;
             }
           });
         },
       
       }

   }
)


export const {setSearchList,updateSearchData} = searchSlice.actions;
export default searchSlice.reducer



export const createSearchBy = () => dispatch => {
        const array= [
          {
            id:"byName"
          },
          {
            id:"byTag"
          },
        ]
        
        dispatch(setSearchList( array))
    }
    export const updateSearchValue = (data) => dispatch => {

      
      dispatch(updateSearchData(data))
        
      }

