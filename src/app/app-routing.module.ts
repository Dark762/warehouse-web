import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionSharedModule } from 'projects/administration/src/app/adm.SharedModule';
import { IdentitySharedModule } from 'projects/identity/src/app/iden.SharedModule';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

const routes: Routes =
  [

    { path: '', redirectTo: 'main', pathMatch: 'full' },
    {
      path: 'main',
      component: MainLayoutComponent
    },
    {
      path: 'administration',
      loadChildren: () => import('../../projects/administration/src/app/app.module').then(m => m.AppModule)
    },
    {
      path: 'identity',
      loadChildren: () => import('../../projects/identity/src/app/app.module').then(m => m.AppModule)
    }
   

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  AdministracionSharedModule.forRoot(),
  IdentitySharedModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
