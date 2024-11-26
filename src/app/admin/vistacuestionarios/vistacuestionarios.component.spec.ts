import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistacuestionariosComponent } from './vistacuestionarios.component';

describe('VistacuestionariosComponent', () => {
  let component: VistacuestionariosComponent;
  let fixture: ComponentFixture<VistacuestionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistacuestionariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistacuestionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
