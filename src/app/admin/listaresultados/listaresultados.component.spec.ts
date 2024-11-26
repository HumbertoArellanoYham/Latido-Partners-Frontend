import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaresultadosComponent } from './listaresultados.component';

describe('ListaresultadosComponent', () => {
  let component: ListaresultadosComponent;
  let fixture: ComponentFixture<ListaresultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaresultadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaresultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
