import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    canActivate: [ AuthGuard ],
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'beer-details', canActivate: [ AuthGuard ], loadChildren: './beer-details/beer-details.module#BeerDetailsModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'menus', canActivate: [ AuthGuard ], loadChildren: './menus/menus.module#MenusPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
