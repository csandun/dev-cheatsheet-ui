import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { CheatSheetsModule } from './cheat-sheets/cheat-sheets.module';
import { LandingComponent } from './landing/landing.component';

const routes: Routes =[
    { path: 'cheatsheets', 
      loadChildren: './cheat-sheets/cheat-sheets.module#CheatSheetsModule'
    },
    { path: '', redirectTo: 'cheatsheets', pathMatch: 'full' },
    { path: 'landing',component: LandingComponent },
    
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
