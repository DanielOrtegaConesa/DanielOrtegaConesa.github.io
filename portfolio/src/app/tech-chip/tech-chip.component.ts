import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tech-chip',
  templateUrl: './tech-chip.component.html',
  styleUrls: ['./tech-chip.component.scss']
})
export class TechChipComponent implements OnInit {

  @Input() src: string;
  @Input() placeholder: string;
  constructor() { }

  ngOnInit() {
  }

}
