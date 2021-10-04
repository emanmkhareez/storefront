// create the initalState for reducer categories
const initalState={
    categories:[
        { name:'barbie', description:'product to  spiderman  doll 👭🙈'},
        {name:'spiderman', description:'product to  spiderman  doll 👦🙈' }],
        
        activeCategory: {},
    }
//create reducer 
    export const ReducerCategories=(state=initalState,action)=>{
        switch(action.type){
            case 'Change_Active':
                state.categories.forEach(item=>{
                    if(item.name==action.payload)
                    {
                     item.activeCategory=item   
                    }
                   
                })
                return{
                    categories:state.categories,
                    activeCategory:state.activeCategory
                }
                
                   default:
                    return state;
        } 

    }