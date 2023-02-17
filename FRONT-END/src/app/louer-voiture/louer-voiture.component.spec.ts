import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LouerVoitureComponent } from './louer-voiture.component';

describe('LouerVoitureComponent', () => {
  let component: LouerVoitureComponent;
  let fixture: ComponentFixture<LouerVoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LouerVoitureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LouerVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
