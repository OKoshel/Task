import {makeAutoObservable} from "mobx";
import {ITodo} from "../interfaces/Interfaces";

class Todos{
    todos: ITodo[] = []
    constructor() {
        makeAutoObservable(this)
    }

    fetchTodos(){
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(response => response.json())
            .then(json => {
                this.todos = [...this.todos, ...json]
            })
    }

    addNewTodo(newItem: ITodo){
        this.todos.push(newItem)

    }
    deleteTodo(id: number){
        this.todos.filter((item) => item.id !==id)

    }
    deleteAllTodos(items: ITodo[]){
      this.todos = items

    }


}

export default new Todos()