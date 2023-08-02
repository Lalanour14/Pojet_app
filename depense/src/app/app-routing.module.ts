import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  
  {
    path: '',
    redirectTo: 'depense',
    pathMatch: 'full'
  },
  {
    path: 'depense',
    loadChildren: () => import('./depense/depense.module').then( m => m.DepensePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


