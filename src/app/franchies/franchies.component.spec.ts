import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchiesComponent } from './franchies.component';

describe('FranchiesComponent', () => {
  let component: FranchiesComponent;
  let fixture: ComponentFixture<FranchiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FranchiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FranchiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
