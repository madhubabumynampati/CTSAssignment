import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { CustomDirectiveComponent } from "./customDirectiveComponent/customDirectiveComponent";
import { HeaderComponent } from "./header/header.component";
import { AuthGuard } from "./services/authGaurd";
import { FormsComponent } from './formsComponent/formsComponent.component';
import { EmployeeDeActivateService } from './services/empCanDeactivate.gaurd';
import { SiblingsComponent } from './siblingComponents/siblings.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "todos",
    pathMatch: "full",
  },
  {
    path: "",
    component: HeaderComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    children: [
      {
        path: "directive",
        component: CustomDirectiveComponent,
      },
      {
        path: "siblings",
        component: SiblingsComponent,
      },
      {
        path: "forms",
        canDeactivate:[EmployeeDeActivateService],
        component: FormsComponent,
      },
      {
        path: "todos",
        loadChildren: () =>
          import("./todoList/todo.module").then((m) => m.TodoModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
