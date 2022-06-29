export default (log = [] , action) => {
    switch(action.type) {
        case 'FECTH_ALL':
            return log;
        case "CREATE":
            return log;
        default:
            return log;
    }
}