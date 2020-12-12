import { createFeatureSelector, createSelector } from '@ngrx/store';
import { features } from '../features/features';
import { NotesState } from './notes.reducer';
import * as fromNotes from './notes.reducer';


export const selectNotesState = createFeatureSelector<NotesState>(features.notes);

export const getNoteById = (id: string) => createSelector(
  selectNotesState,
  NotesState => NotesState.entities[id]
);

export const selectAllNotes = createSelector(
  selectNotesState,
  fromNotes.selectAll
);

export const selectCoursesByDate = (date: string) => createSelector(
  selectAllNotes,
  notes => notes.filter(note => note.date === date)
);

