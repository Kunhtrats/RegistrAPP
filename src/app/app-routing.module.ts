import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'ingresar',
    loadChildren: () => import('./ingresar/ingresar.module').then( m => m.IngresarPageModule)
  },
  {
    path: 'recover-pass',
    loadChildren: () => import('./recover-pass/recover-pass.module').then( m => m.RecoverPASSPageModule)
  },
  {
    path: 'lobby',
    loadChildren: () => import('./lobby/lobby.module').then( m => m.LobbyPageModule)
  },
  {
    path: 'lobby-settings',
    loadChildren: () => import('./lobby-settings/lobby-settings.module').then( m => m.LobbySettingsPageModule)
  },
  {
    path: 'qr-page',
    loadChildren: () => import('./qr-page/qr-page.module').then( m => m.QrPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
