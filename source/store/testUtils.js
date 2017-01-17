export const getMockState={
      withNoNotes:()=>({
          byId:{},
          ids:[],
          openNoteId:""
      }),
      withOneNote:()=>({
          byId:{
              "id-123":{
                  id:"id-123",
                  content:"Hi",
                  timeStamp:1
              }
          },
          ids:["id-123"],
          openNoteId:null
      })
}