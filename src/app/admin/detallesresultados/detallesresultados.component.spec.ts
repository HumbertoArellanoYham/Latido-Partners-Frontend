import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesresultadosComponent } from './detallesresultados.component';

describe('DetallesresultadosComponent', () => {
  let component: DetallesresultadosComponent;
  let fixture: ComponentFixture<DetallesresultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesresultadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetallesresultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
