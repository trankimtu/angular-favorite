// File: TitlecaseComponent.component.ts 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'titlecase',
  templateUrl: './titlecase.component.html',
  styleUrls: ['./titlecase.component.css']
})
export class TitlecaseComponent implements OnInit {
  
  title="";
  
  constructor() { }

  ngOnInit(): void {
  }
}
