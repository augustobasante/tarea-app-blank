import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pagina1',
    loadChildren: () => import('./pagina1/pagina1.module').then( m => m.Pagina1PageModule)
  },
  {
    path: 'pagina2',
    loadChildren: () => import('./pagina2/pagina2.module').then( m => m.Pagina2PageModule)
  },
  {
    path: 'pagina3',
    loadChildren: () => import('./pagina3/pagina3.module').then( m => m.Pagina3PageModule)
  },
  {
    path: 'modelo1',
    loadChildren: () => import('./modelos/modelo1/modelo1.module').then( m => m.Modelo1PageModule)
  },
  {
    path: 'modelo2',
    loadChildren: () => import('./modelos/modelo2/modelo2.module').then( m => m.Modelo2PageModule)
  },
  {
    path: 'modelo3',
    loadChildren: () => import('./modelos/modelo3/modelo3.module').then( m => m.Modelo3PageModule)
  },
  {
    path: 'modelo4',
    loadChildren: () => import('./modelos/modelo4/modelo4.module').then( m => m.Modelo4PageModule)
  },
  {
    path: 'modelo5',
    loadChildren: () => import('./modelos/modelo5/modelo5.module').then( m => m.Modelo5PageModule)
  },
  {
    path: 'modelo6',
    loadChildren: () => import('./modelos/modelo6/modelo6.module').then( m => m.Modelo6PageModule)
  },
  {
    path: 'contactos',
    loadChildren: () => import('./contactos/contactos.module').then( m => m.ContactosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
