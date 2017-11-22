import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

//import { AuthGuard } from "./users/auth-guard.service";
import { DashboardComponent } from "./dashboard/dashboard.component";

const ROUTES = [
  {
    path: "dashboard",
    component: DashboardComponent
  },
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