import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestionarioanswerComponent } from './cuestionarioanswer.component';

describe('CuestionarioanswerComponent', () => {
  let component: CuestionarioanswerComponent;
  let fixture: ComponentFixture<CuestionarioanswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuestionarioanswerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuestionarioanswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
