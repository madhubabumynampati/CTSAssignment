import { Component, OnInit } from "@angular/core";
import { ComponentLevelService } from "../services/componentLevel.service";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todoList.component.html",
  styles: [""],
  providers: [ComponentLevelService],
})
export class TodoListComponent implements OnInit {
  todos: Array<any> = [];
  constructor(
    private componentLevelService: ComponentLevelService
  ) {}

  ngOnInit(): void {
    this.getTodos();
  }
  getTodos() {
    this.componentLevelService.getTodoAll().subscribe((res) => {
      this.todos = res;
    });
  }
  getTodoById(id){
    this.componentLevelService.getById(id).then(res=>{
      console.log(res)
    })
  }
  ngDoCheck() {
    // ...
    console.log("DO CHECK")

  }

}
