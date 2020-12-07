import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TodoListComponent } from "./todoList.component";

const routes: Routes = [
  {
    path: "",
    component: TodoListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
