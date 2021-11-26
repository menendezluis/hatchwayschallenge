import React,{ useEffect, useState } from 'react'
//redux
import { fetchStudentList,updateShowStudent } from '../../store/slices/students'
import {useDispatch,useSelector} from 'react-redux'
import {faPlus,faMinus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Divider from '@mui/material/Divider';
import Tag from '../../components/tag'

import './style.css'
import AddTag from '../addTag'

const StudentsList = () => {
    const [reload, setReload] = useState(false)
    const { list: students } = useSelector(state => state.students)
    const { list: search } = useSelector(state => state.search)
    let listStudents= []
    let listToShow = []
   /* students.forEach(element => {
        listStudents.push(element)
    });
*/


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchStudentList())
        
    }, [reload])
   
    const handleShowOptions = (id) => {
        dispatch(updateShowStudent(id))
    }
  
    if(!students.length){
        return <div>Loading</div>
    }

   
    if(search[0].value !=='' && search[0].value !== undefined && search[0].value !== null && search[0].id === 'byName'){
        students.forEach(element => {
            if(element.lastName.toUpperCase().includes(search[0].value.toUpperCase())){
                listStudents.push(element)
            }
            if(element.firstName.toUpperCase().includes(search[0].value.toUpperCase())){
                listStudents.push(element)
            }
        });
    }
    if(search[1].value !=='' && search[1].value !== undefined && search[1].value !== null && search[1].id === 'byTag'){
        students.forEach(element => {
        
            if(element.tag && element.tag !== undefined && element.tag !== null){
            if(element.tag.toUpperCase().includes(search[1].value.toUpperCase())){
                listStudents.push(element)
            }}
        });
    }
    if (listStudents.length > 0) {
        listStudents.forEach(element => {
            listToShow.push(element)
        });
        listToShow.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i)
    }
    else {
        listToShow = students
    }
    return (
        <div className="container ">
        
        {listToShow.map((student,index) => (
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
                  
                  {student.showTests ? <ul  style={{listStyleType: "none", textAlign: "left",fontSize: '0.70em', color:"#a2a2a2"}}>
                    
                     {student.grades.map((grade,index) => (
                        <li key={index}>Test {index+1} - {grade}</li>
                     ))} </ul>: null} 
                        <ul  style={{listStyleType: "none", textAlign: "left",fontSize: '0.70em', color:"#a2a2a2"}}>
                          {student.tag ? <li>  <Tag >{student.tag}</Tag></li> : 
                            <li> <AddTag index={index} studentId={student.id} /></li>
                     }
                            </ul> 
                    </div>

               </div>
               <div className="col-sm-2">
               <div onClick={()=>handleShowOptions(student.id)}>
                <FontAwesomeIcon icon={student.showTests ? faMinus : faPlus} className="text-secondary" />
               
                    </div>
                    </div>
                    <div>
                   
                    </div>
                    <Divider 
                    
                    />
                   
            </div>
            

        ))}
                
        </div>
    )
}

export default StudentsList
