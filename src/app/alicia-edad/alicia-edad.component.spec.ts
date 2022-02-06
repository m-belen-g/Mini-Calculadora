import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliciaEdadComponent } from './alicia-edad.component';

describe('AliciaEdadComponent', () => {
  let component: AliciaEdadComponent;
  let fixture: ComponentFixture<AliciaEdadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AliciaEdadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AliciaEdadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
