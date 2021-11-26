import React, {useState, useEffect} from 'react'
import { createSearchBy,updateSearchData } from '../../store/slices/search'
import {useDispatch,useSelector} from 'react-redux'


export const SearchBox = () => {
    
    const { list: search } = useSelector(state => state.students)
    //console.log("random",random)
        const dispatch = useDispatch()
   
    useEffect(() => {
        dispatch(createSearchBy())
    }, [])
    const handleChange = (e,text) => {
        const data = {
            id: text,
            value: e
        }
         dispatch(updateSearchData(data))
    }

    return (
        <div>
            <input type="text"
                  
                        onChange={(e) => handleChange(e.target.value,"byName")}
                    placeholder="Search by name or Lastname"
                    style={{
                        width: '100%',
                        padding: '0.5rem',
                        fontSize: '1rem',
                        outline: 0,
                        borderWidth: "0 0 2px",
                        borderColor: '#ccc',
                        boxShadow: 'none',
                      
                        }}  
                />
                 <input type="text"
                  
                  onChange={(e) => handleChange(e.target.value,"byTag")}
              placeholder="Search by Tag"
              style={{
                  width: '100%',
                  padding: '0.5rem',
                  fontSize: '1rem',
                  outline: 0,
                  borderWidth: "0 0 2px",
                  borderColor: '#ccc',
                  boxShadow: 'none',
                
                  }}  
          />
        </div>
    )
}

export default SearchBox