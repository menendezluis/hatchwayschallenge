import React,{ useEffect, useState } from 'react'
//redux
import { fetchStudentList } from '../../store/slices/students'
import {useDispatch,useSelector} from 'react-redux'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Divider from '@mui/material/Divider';

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
        <div className="container ">
        
        {students.map((student,index) => (
            <div className="row mb-2 mt-3" key={index}>
                <div className="col-sm-3">
                    <img src={student.pic} className="rounded-circle border w-100 " alt=""/>
                </div>
                <div className="col-sm-7" style={{textAlign: "left"}}>
                    <h3 className="text-uppercase card-title">{student.firstName}{" "}{student.lastName}</h3>
                    <div className="text-left">
                        <ul style={{listStyleType: "none", textAlign: "left",fontSize: '0.70em', color:"#a2a2a2"}}>
                            <li>{student.email}</li>
                    <li>Email: {student.email}</li>
                    <li>Company: {student.company}</li>
                    <li>Skill: {student.skill}</li>
                    <li>Average: {student.avg} %</li>
                    </ul>
                    </div>
               </div>
               <div className="col-sm-2">
               
               <FontAwesomeIcon className="w-100" icon={faPlus} />
                    </div>
                    <Divider />
                   
            </div>
            

        ))}
                
        </div>
    )
}

export default StudentsList
