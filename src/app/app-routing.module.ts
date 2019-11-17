import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomePage } from './home/home.page';
import { ShapeGeneratePage } from './shape-generate/shape-generate.page';
import { MovingCirclePage } from './moving-circle/moving-circle.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'shape-generate', component: ShapeGeneratePage },
  { path: 'moving-circle', component: MovingCirclePage },
  { path: '*', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
