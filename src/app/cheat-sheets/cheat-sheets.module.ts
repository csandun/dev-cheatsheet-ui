import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { cheatsheetsRoutes } from './cheet-sheets.route';
import { CheatHomeComponent } from './cheat-home/cheat-home.component';
import { MainCategoryComponent } from './main-category/main-category.component';
import { CheatSheetComponent } from './cheat-sheet/cheat-sheet.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ CheatHomeComponent, MainCategoryComponent, CheatSheetComponent],
  entryComponents:[CheatHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(cheatsheetsRoutes) ,
    NgbModule.forRoot(),
  ]
})
export class CheatSheetsModule { }
