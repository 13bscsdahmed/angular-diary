import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoteModel } from '../../../../store/notes/models/note.model';
import { select, Store } from '@ngrx/store';
import { AddNote } from '../../../../store/notes/notes.actions';
import { selectAllNotes } from '../../../../store/notes/notes.selectors';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UUID } from 'angular2-uuid';
import { AppUtils } from '../../../shared/utils/app.utils';
import { ValidatorUtil } from '../../../shared/utils/validator.utils';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit, OnDestroy {
  noteForm = new FormGroup({
    note: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    picture: new FormControl('', [Validators.required, ValidatorUtil.urlValidator]),
    video: new FormControl('', [Validators.required, ValidatorUtil.urlValidator])
  });
  note: NoteModel = this.getDefaultNoteValue();
  destroy$: Subject<boolean> = new Subject<boolean>();
  loading$: Observable<NoteModel[]>;
  constructor(private store: Store) { }

  ngOnInit(): void {
  }
  
  /**
   * Function returns default note value
   */
  getDefaultNoteValue(): NoteModel {
    return {
      id: '',
      text: '',
      date: '',
      picture: '',
      video: '',
      timestamp: ''
    };
  }
  
  /**
   * Function to add note
   */
  addNote() {
    if (this.noteForm.valid) {
      this.note = {
        id: UUID.UUID(),
        text: this.noteForm.value.note,
        date: this.noteForm.value.date.toString() || '',
        picture: this.noteForm.value.picture,
        video: this.noteForm.value.video,
        timestamp: AppUtils.getDateTimeString(new Date())
      };
      
      this.store.dispatch(new AddNote(this.note));
      this.noteForm.reset();
  
      (Object as any).values(this.noteForm.controls).forEach(
        (control: any) => {
          control.markAsPristine();
        });
      this.note = this.getDefaultNoteValue();
    }
  }
  
  getNotes() {
    // this.loading$ = this.store.pipe(select(selectAllNotes));
    // this.store.select(selectAllNotes).subscribe((data: NoteModel) => {
    //   console.log(data);
    // });
  
    this.store.select(selectAllNotes).pipe(takeUntil(this.destroy$)).subscribe((data) => {
        console.log('data', data);
      }
    );
  }
  
  
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  
}
