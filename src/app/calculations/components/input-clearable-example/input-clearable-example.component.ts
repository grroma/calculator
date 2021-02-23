import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-input-clearable-example',
  templateUrl: './input-clearable-example.component.html',
  styleUrls: ['./input-clearable-example.component.css']
})

export class InputClearableExampleComponent implements OnInit {

  infusionRateControl = new FormControl('');
  infusionTimeControl =  new FormControl('');
  dosageControl =  new FormControl('');

  clearInfusionRate() { this.infusionRateControl.reset(); this.infusionRateControl.reset(); }
  clearInfusionTime() { this.infusionTimeControl.reset(); this.infusionTimeControl.reset(); }
  clearDosage() { this.dosageControl.reset(); this.dosageControl.reset(); }
  
  constructor(private fb: FormBuilder){}

  ngOnInit(){  
  }
}