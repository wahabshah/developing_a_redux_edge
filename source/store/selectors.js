
export const getNotes = (state)=>{
     return state.ids.map( (id)=>state.byId[id]);
}

export const getOpenNoteId = (state)=>{
    return state.openNoteId;
}

export const getNote = (state,id)=>{
    return state.byId[id] || null;
}