import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

//import { AuthGuard } from "./users/auth-guard.service";
// import { DashboardComponent } from "./dashboard/dashboard.component";
// import { Screen01Component } from "./dashboard/screen-01.component";
// import { Screen02Component } from "./dashboard/screen-02.component";

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