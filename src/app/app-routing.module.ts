import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsHomeComponent } from './elements/elements-home/elements-home.component';
import { CollectionsHomeComponent } from './collections/collections-home/collections-home.component';
import { ViewsHomeComponent } from './views/views-home/views-home.component';
import { ModsHomeComponent } from './mods/mods-home/mods-home.component';

const routes: Routes = [
  {path: 'elements', component: ElementsHomeComponent},
  {path: 'collections', component: CollectionsHomeComponent},
  {path: 'views', component: ViewsHomeComponent},
  {path: 'mods', component: ModsHomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
