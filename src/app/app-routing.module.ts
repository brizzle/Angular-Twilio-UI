import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

//import { AuthGuard } from "./users/auth-guard.service";

const ROUTES = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"},
  {
    path: "**",
    redirectTo: "dashboard",
    pathMatch: "full"}
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES, { enableTracing: false }) ],
  providers: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }