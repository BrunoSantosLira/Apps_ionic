import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pagina/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tecnologia',
    loadChildren: () => import('./pagina/tecnologia/tecnologia.module').then( m => m.TecnologiaPageModule)
  },
  {
    path: 'economia',
    loadChildren: () => import('./pagina/economia/economia.module').then( m => m.EconomiaPageModule)
  },
  {
    path: 'mundo',
    loadChildren: () => import('./pagina/mundo/mundo.module').then( m => m.MundoPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pagina/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pagina/login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
