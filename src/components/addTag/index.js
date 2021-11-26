import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { AddATag } from '../../store/slices/students'


const AddTag = ({index,studentId}) => {
    console.log()
    const dispatch = useDispatch()    

const [tag, setTag] = useState('')

const addTag = () => {
   dispatch(AddATag({ 
        index:index, 
        value: tag,
        studentId: studentId}))
    setTag('')
}
    return (
        <div>
              <input type="text"
                    placeholder="Add tag"
                    style={{
                        width: '50%',
                        padding: '0.5rem',
                        fontSize: '1rem',
                        outline: 0,
                        borderWidth: "0 0 2px",
                        borderColor: '#ccc',
                        boxShadow: 'none',
                        }}  
                        onChange={ (e) => setTag(e.target.value)}
                />
                <button className="btn btn-secondary" onClick={addTag}>+</button>
        </div>
    )
}
export default AddTag