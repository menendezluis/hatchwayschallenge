import React, {useState} from 'react'
import { fetchStudentList } from '../../store/slices/students'
import {useDispatch,useSelector} from 'react-redux'


export const SearchBox = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const { list: students } = useSelector(state => state.students)
    //console.log("random",random)
        const dispatch = useDispatch()
   
    const handleChange = (e) => {
        setSearchTerm(e.target.value)
        dispatch(fetchStudentList(e.target.value,students))
    }

    return (
        <div>
            <input type="text"
                     value={searchTerm}
                        onChange={(e) => handleChange(e)}
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
        </div>
    )
}

export default SearchBox