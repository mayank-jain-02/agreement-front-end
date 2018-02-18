export default function(state = {}, action) {
    switch(action.type) {
        case 'CAPTURE_UPDATE_VALUES':         
            return Object.assign({}, action.payload);
        default: return state;
    }
}