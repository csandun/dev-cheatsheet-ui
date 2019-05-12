import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [HttpClientModule, NgbModule.forRoot(),CommonModule, BrowserModule,],
  exports: [NavbarComponent, FooterComponent],
  declarations: [NavbarComponent, FooterComponent],
  providers:[]
})
export class CoreModule {}