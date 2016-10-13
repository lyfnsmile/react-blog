import fetch from 'isomorphic-fetch'




function addTodo(text){
  return {
    type:ADD_TODO,
    text
  }
}
 
function completeTodo(index){
  return {
    type:COMPELETE_TODO,
    index
  }
}
 
function selectFilter(filter){
  return {
    type:SETFILTER, 
    filter
  }
}