import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProfileModule } from 'src/app/components/profile/profile.module';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  }
];

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProfileModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
