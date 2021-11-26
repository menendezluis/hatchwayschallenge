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
              if(student.id === action.payload){
              student.showTests = !student.showTests;
              }
            });
          },
       AddTag: (state, action) => {
         state.list.forEach(student => {
          
              if(student.id === action.payload.studentId){
                 student.tag = action.payload.value;
              }
            });
          }
       }

   }
)


export const {setStudentList,updateShowTests,AddTag} = studentSlice.actions;
export default studentSlice.reducer



export const fetchStudentList = (search,datos) => dispatch => {
        axios
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
                      skill: student.skill,
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
      
           
   //}

export const updateShowStudent = (id,showTests) => dispatch => {

   
          dispatch(updateShowTests(id))
            
          }
   
          
export const AddATag = (student) => dispatch => {

   
  dispatch(AddTag(student))
      
    }
