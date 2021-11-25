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
       }

   }
})

export const {setStudentList} = studentSlice.actions;
export default studentSlice.reducer


export const fetchStudentList = () => dispatch => {
 console.log("hola")
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
                    skills: student.skill,
                    company: student.company,
                    avg: student.grades.reduce((a,b) => parseInt(a)+parseInt(b))/student.grades.length,
                    grades: student.grades
                }
                array.push(object)
            });

            console.log(response.data.students)
        dispatch(setStudentList(array))
          
          
      })
      .catch((error) => console.log(error));
        
}

