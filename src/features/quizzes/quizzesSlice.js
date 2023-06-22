import{createSlice} from '@reduxjs/toolkit'
import{addQuizIds} from "../topics/topicsSlice"



export const quizzesSlice=createSlice({

name:"quizzes",
initialState:{
    quizzes:{}
},
reducers:{
addQuiz:(state,action)=>{

    console.log(action.payload);

const{quizId,name,topicId,cardIds}=action.payload


//state.quizzes.quizzes[id]

state.quizzes[quizId]={

id:quizId,
name:name,
topicId:topicId,
cardIds:cardIds


}


}

}



})




export const thunkActionCreator=(name,id)=>{

    console.log(quiz);


return(dispatch)=>{

dispatch(quizzesSlice.actions.addQuiz(id,name,topicId,cardIds))

dispatch(addQuizIds({quizId:quizId,topicId:topicId}))

}

}

export const selectQuizzes=(state)=>state.quizzes.quizzes

export default quizzesSlice.reducer

export const {addQuiz}=quizzesSlice.actions


