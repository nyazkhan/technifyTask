import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { LoginGuard } from './service/login.guard';
import { EditorGuard } from './service/editor.guard';
import { AdminGuard } from './service/admin.guard';


const routes: Routes = [

  // src\app\module\admin\admin.module.ts
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  {
    path: 'admin',
    loadChildren: () => import('./module/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AdminGuard]
  },

  {
    path: 'editor', loadChildren: () => import('./module/editor/editor.module').then(m => m.EditorModule),
    canActivate: [EditorGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard, EditorGuard, AdminGuard]

})
export class AppRoutingModule { }
