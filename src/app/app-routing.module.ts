import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaheshwariComponent } from './navbar/maheshwari/maheshwari.component';
import { HelptextComponent } from './navbar/helptext/helptext.component';
import { ListyourbusinessComponent } from './navbar/listyourbusiness/listyourbusiness.component';
import { UpComponent } from './navbar/signin/up/up.component';
import { HomeComponent } from './home/home/home.component';
import { RecommendationComponent } from './home/recommendation/recommendation.component';
import { InnerpageComponent } from './navbar/listyourbusiness/innerpage/innerpage.component';

const routes: Routes = [
  {path:'maheshwari',component:MaheshwariComponent},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'helptext',component:HelptextComponent},
  {path:'listyourbusiness',component:ListyourbusinessComponent},
  {path:'innerpage',component:InnerpageComponent},
  
  
  // {path:'signinup',component:signin/UpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
