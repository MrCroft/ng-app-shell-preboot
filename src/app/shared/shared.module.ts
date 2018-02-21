import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { MatCommonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MatCommonModule, MatInputModule, MatButtonModule, MatSidenavModule, MatToolbarModule,
    MatCardModule,
    MatIconModule, MatListModule, MatTableModule, MatExpansionModule, MatMenuModule,
    MatSnackBarModule
  ],
  declarations: []
})
export class SharedModule {}
