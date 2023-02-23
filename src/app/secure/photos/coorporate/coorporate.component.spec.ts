import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoorporateComponent } from './coorporate.component';

describe('CoorporateComponent', () => {
  let component: CoorporateComponent;
  let fixture: ComponentFixture<CoorporateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoorporateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoorporateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
