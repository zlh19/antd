let id=0;
const todos = (state = { todos: [] }, action)=>{
    switch (action.type) {
        case 'ADD':
            id++
            state.todos.push({ iptInfor: action.iptInfor ,id:id});
            return { 
                todos: [...state.todos]
            }
        case 'REMOVE_ITEM':
            const nowId=action.id;
            state.todos.map((item,index)=>{
                if (item.id === nowId){
                    state.todos.splice(index,1)
                }
            })
            return {
                todos: [...state.todos]
            }
    }
    return state;
}


export {
    todos
}
