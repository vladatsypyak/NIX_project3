import { createStore } from "redux"
import quizApp from "./reducer";
export let store = createStore(quizApp)
console.log(store.getState())


const unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
})
// store.dispatch(addTodo('some text'))