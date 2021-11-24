import React,{ useEffect, useState } from 'react'
//redux
import { fetchStudentList } from '../../store/slices/students'
import {useDispatch,useSelector} from 'react-redux'
//material
/*import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';
*/
//vote

import './style.css'

const StudentsList = () => {
    const [reload, setReload] = useState(false)
    const { list: students } = useSelector(state => state.students)
//console.log("random",random)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchStudentList())
    }, [reload])
    return (
        <div className="container">
        <h1>iam a robot</h1>
        {students.map((student,index) => (
            <div className="student" key={index}>
                <img src={student.pic} alt=""/>
                <p>Email: {student.email}</p>
                <p>Company: {student.company}</p>
                <p>Average: {student.avg} %</p>
               </div>
        ))}
                
        </div>
    )
}

export default StudentsList
