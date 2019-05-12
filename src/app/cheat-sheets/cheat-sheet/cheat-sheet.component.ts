import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cheat-sheet',
  templateUrl: './cheat-sheet.component.html',
  styleUrls: ['./cheat-sheet.component.css']
})
export class CheatSheetComponent implements OnInit {
  title: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.title = this.route.snapshot.paramMap.get("id")
  }

}
