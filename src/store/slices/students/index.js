import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const studentSlice = createSlice({
   name:"students",
   initialState:{
       list:[]
   },
   reducers:{
       setStudentList: (state, action) => {
        state.list = action.payload;
       },
       updateShowTests: (state, action) => {
         state.list.forEach(student => {
            console.log( action)
              if(student.id === action.payload){
                  console.log(student.showTests)
                  console.log(student.id)
                 student.showTests = !student.showTests;
              }
            });
          }
       }

   }
)


export const {setStudentList,updateShowTests} = studentSlice.actions;
export default studentSlice.reducer



export const fetchStudentList = (search,datos) => dispatch => {

    if(datos && search && datos===typeof "string"){
       let array = datos.filter(element => element.lastName.toUpperCase().includes(search.toUpperCase()))
       let array2 = datos.filter(element => element.firstName.toUpperCase().includes(search.toUpperCase()))
       let array3 = []
       array3.push(...array, ...array2)
       array3 = array3.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i)
        dispatch(setStudentList( array3))
    }
    else{ axios
        .get("https://api.hatchways.io/assessment/students")
        .then((response) => {
            let array = []
            response.data.students.forEach(student => {
                
                let object = {
                      id: student.id,
                      firstName: student.firstName,
                      lastName: student.lastName,
                      email: student.email,
                      country: student.city,
                      pic: student.pic,
                      skills: student.skill,
                      company: student.company,
                      avg: student.grades.reduce((a,b) => parseInt(a)+parseInt(b))/student.grades.length,
                      grades: student.grades,
                      showTests: false
                  }
                  array.push(object)
              });
  
              console.log(response.data.students)
          dispatch(setStudentList(array))
            
            
        })
        .catch((error) => console.log(error));}
      
           
   }

export const updateShowStudent = (id,showTests) => dispatch => {

   
          dispatch(updateShowTests(id))
            
          }
   