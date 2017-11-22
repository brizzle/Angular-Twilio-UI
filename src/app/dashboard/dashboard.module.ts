import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Screen01Component } from "./screen-01.component";
import { Screen02Component } from "./screen-02.component";
import { DashboardComponent } from "./dashboard.component";

const ROUTES = [
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "screen01",
    component: Screen01Component,
    outlet: "screen01"
  },
  {
    path: "screen02",
    component: Screen02Component,
    outlet: "screen02"
  }
];

@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  declarations: [
      DashboardComponent,
      Screen01Component,
      Screen02Component
  ],
  providers: []
})
export class DashboardModule {}