import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-clearable-example',
  templateUrl: './input-clearable-example.component.html',
  styleUrls: ['./input-clearable-example.component.css']
})

export class InputClearableExampleComponent implements OnInit {

  infusionRate: any;
  infusionTime: any;
  dosage: any;
  value = "Clear me";
  
  constructor() { }

  ngOnInit(): void {
  }

}


