import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputClearableExampleComponent } from './input-clearable-example.component';

describe('InputClearableExampleComponent', () => {
  let component: InputClearableExampleComponent;
  let fixture: ComponentFixture<InputClearableExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputClearableExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputClearableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
