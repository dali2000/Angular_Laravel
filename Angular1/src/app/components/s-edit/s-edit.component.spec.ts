import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SEditComponent } from './s-edit.component';

describe('SEditComponent', () => {
  let component: SEditComponent;
  let fixture: ComponentFixture<SEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
