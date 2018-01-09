const trainClass = (state, action) => {
    state=state||{}
    let { lessonList}=action;
    switch (action.type) {
        case 'GETLESSONINFO':
            return {
                lessonList
            }
        default:
            return state;
    }
}

export {
    trainClass
}



