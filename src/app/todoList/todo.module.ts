import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { TodoListComponent } from './todoList.component';
import { TodoRoutingModule } from './todo.routing.module';
import {TableModule} from 'primeng/table';
@NgModule({
  declarations: [TodoListComponent],
  imports: [CommonModule,HttpClientModule,TodoRoutingModule,TableModule,],
  providers: [],
})

export class TodoModule {}
