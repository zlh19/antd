const bicycle = (state, action) => {
    state=state||{}
    let { bicycleList }=action;
    switch (action.type) {
        case 'GETBICYCLEINFO':
            return {
                bicycleList
            }
        default:
            return state;
    }
}

export {
    bicycle
}



