import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _router: Router) {}

  canActivate(): Observable<boolean> |boolean {
    //   Check for token in session or in cokie

    // if (sessionStorage.getItem("user")) {
    //   return true;
    // } else {
        // If token not found the return false and redirect to login page
    //   this._router.navigate(["/login"]);
    //   return false;
    // }
    return true
  }
}
