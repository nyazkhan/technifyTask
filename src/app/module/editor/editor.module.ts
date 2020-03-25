import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppModule } from 'src/app/app.module';
import { ProfileModule } from 'src/app/components/profile/profile.module';

const routes: Routes = [
  {
    path: '',
    component: EditorComponent,
  }
];


@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProfileModule,
    RouterModule.forChild(routes)

  ]
})
export class EditorModule { }
