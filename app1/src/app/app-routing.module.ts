import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmptyRouteComponent} from "./empty-route/empty-route.component";
import {TestOneComponent} from "./test-one/test-one.component";
import {TestTwoComponent} from "./test-two/test-two.component";

const routes: Routes = [
  {
    path: 'app1/route1', component: TestOneComponent
  },
  {
    path: 'app1/route2', component: TestTwoComponent
  },
  {
    path: '**', component: EmptyRouteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
