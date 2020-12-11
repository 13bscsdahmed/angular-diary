import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiaryRoutingModule } from './diary-routing.module';
import { DiaryComponent } from './components/diary/diary.component';
import { NoteComponent } from './components/note/note.component';
import { HistoryComponent } from './components/history/history.component';
import { SharedModule } from '../shared/shared.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    DiaryComponent,
    NoteComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    DiaryRoutingModule,
    SharedModule,
    MDBBootstrapModule,
  ]
})
export class DiaryModule { }
