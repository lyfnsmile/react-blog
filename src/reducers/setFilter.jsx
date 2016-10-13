function setFilter(state = FILTER.SHOW_ALL,action){
  switch(action.type){
    case SETFILTER:
      return action.filter;
    default:
      return state;
  }
}