const classPanel = (state = { lesson: [] }, action) => {
    switch (action.type) {
        case 'GETCLASS':
            return {
                lesson: [...action.data]
            }
    }
    return state;
}

export {
    classPanel
}



