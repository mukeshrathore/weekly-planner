import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatGridListModule,
  MatTableModule,
  MatIconModule,
  MatDividerModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatGridListModule,
    MatTableModule,
    MatIconModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatGridListModule,
    MatTableModule,
    MatIconModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ]
})
export class ImportMaterialModuleModule { }
