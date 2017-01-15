import {V4Options} from "uuid";

export const addNote= (content="",id=V4Options(), timeStamp= Date.now())=>{
    return {
        type:"app/addNote",
        payload:{
            id,
            content,
            timeStamp
        }

    }
}

export const updateNote = (content,id,timeStamp=Date.now())=>{
    return {
    type:"app/updateNote",
    payload:{
        content,
        id,
        timeStamp   
    } 
    } 
}

export const deleteNote = (id)=>{
    return {
        type:"app/deleteNote",
    payload:{
        id
    }
    }
}

export const openNote = (id)=>{
    return {
      type:"app/openNote",
      payload:{
          id
      }
    }
}

export const closeNote = ()=>{
       return {
           type:"app/closeNote"
       }
}