import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-category',
  templateUrl: './main-category.component.html',
  styleUrls: ['./main-category.component.css']
})
export class MainCategoryComponent implements OnInit {
  @Input("title") public title: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onSelect(title: any){
    this.router.navigate([`cheatsheets/${title}`])
  }

}
