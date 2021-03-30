import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCrudComponent } from './views/userCrud/userCrud.component';
import { NavigationComponent } from './component/template/navigation/navigation.component';
import { UserCreateComponent } from './component/user/userCreate/userCreate.component';
import {HttpClientModule} from '@angular/common/http';
import { UserReadComponent } from './component/user/userRead/userRead.component';
import { UserUpdateComponent } from './component/user/userUpdate/userUpdate.component';
import { UserDeleteComponent } from './component/user/userDelete/userDelete.component';
import { HistoricCrudComponent } from './views/historicCrud/historicCrud.component';
import { HistoricReadComponent } from './component/historic/historicRead/historicRead.component';
import { ProviderComponent } from './component/fuel/provider/provider.component';
import  { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AbbreviationComponent } from './component/fuel/abbreviation/abbreviation.component';
import { ValueAverageFlagComponent } from './component/fuel/averageFlag/valueAverageFlag.component';
import { ValueAverageCityComponent } from './component/fuel/averageCity/valueAverageCity.component';
import { HistoricCreateComponent } from './component/historic/historicCreate/historicCreate.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCrudComponent,
    NavigationComponent,
    UserCreateComponent,
    UserReadComponent,
    UserUpdateComponent,
    UserDeleteComponent,
    HistoricCrudComponent,
    HistoricReadComponent,
    ProviderComponent,
    AbbreviationComponent,
    ValueAverageFlagComponent,
    ValueAverageCityComponent,
    HistoricCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
