import tape from "tape";
import * as actions from './actions';

tape("action creater | addNote :: Create correct action",({deepEqual,end})=>{

     const actualAction=  actions.addNote("Hi","id-123",1);
     const expectedAction ={
         type:"app/addNote",
         payload:{
             id:"id-123",
             content:"Hi",
             timeStamp:1
         }
        };
     deepEqual(expectedAction,actualAction);
     end();
});

tape("action creater  | updateNote :: Create correct action", (({deepEqual,end})=>{
    
    const actualAction = actions.updateNote("Hi again","id-123",1);
    const expectedAction = {
        type:"app/updateNote",
        payload:{
        id:"id-123",
        content:"Hi again",
        timeStamp:1
        }
       
    };
    deepEqual(actualAction,expectedAction);
    end();

}));

tape("action creater | deleteNote :: Create correct action ",({deepEqual,end})=>{
       
    const actualAction = {
        type:"app/deleteNote",
        payload:{
            id:"id-123"
        }
    };
    const expectedAction = actions.deleteNote("id-123");
   deepEqual(actualAction, expectedAction);
   end();

});

tape("action creater | openNote :: create action correctly", ({deepEqual,end})=>{
    const expectedAction = {
        type:"app/openNote",
        payload:{
          id:"id-123"
       }
    };
    const actualAction = actions.openNote("id-123");
    deepEqual(expectedAction,actualAction);
    end();    
});

tape("action creater | closeNote :: create action correctly",({deepEqual,end})=>{
          const expectedAction={
              type:"app/closeNote"
          };
          const actualAction= actions.closeNote();
          deepEqual(expectedAction,actualAction);
          end();
});
