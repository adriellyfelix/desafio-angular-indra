import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UserCrudComponent} from "./views/userCrud/userCrud.component";
import { UserCreateComponent } from './component/user/userCreate/userCreate.component';
import { UserUpdateComponent } from './component/user/userUpdate/userUpdate.component';
import { UserDeleteComponent } from './component/user/userDelete/userDelete.component';
import { HistoricCrudComponent } from './views/historicCrud/historicCrud.component';
import { ProviderComponent } from './component/fuel/provider/provider.component';
import { AbbreviationComponent } from './component/fuel/abbreviation/abbreviation.component';
import { ValueAverageFlagComponent } from './component/fuel/averageFlag/valueAverageFlag.component';
import { ValueAverageCityComponent } from './component/fuel/averageCity/valueAverageCity.component';
import { HistoricCreateComponent } from './component/historic/historicCreate/historicCreate.component';

const routes: Routes = [
  {
    path: "",
    component: UserCreateComponent
  },

  {
    path: "users",
    component: UserCrudComponent

  },
  {
    path: "userUpdate",
    component: UserUpdateComponent
  },
  {
    path: "userDelete",
    component: UserDeleteComponent
  },
  {
    path: "historic",
    component: HistoricCrudComponent
  },
  {
    path: "historicCreate",
    component: HistoricCreateComponent
  },
  {
    path: "provider",
    component: ProviderComponent
  },
  {
    path: "abbreviation",
    component: AbbreviationComponent
  },
  {
    path: "average-flag",
    component: ValueAverageFlagComponent
  },
  {
    path: "average-country",
    component: ValueAverageCityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
