import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

//import { AuthGuard } from "./users/auth-guard.service";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
  imports: [
      RouterModule.forRoot([
        { path: "home", component: DashboardComponent },
        // {
        //   path: "customers",
        //   canActivate: [ AuthGuard ],
        //   data: { preload: true },
        //   loadChildren: "app/customers/customer.module#CustomerModule"
        // }
        { path: '', redirectTo: 'home', pathMatch: 'full'},
        { path: '**', redirectTo: 'home', pathMatch: 'full'}
      ])
  ],
  providers: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }