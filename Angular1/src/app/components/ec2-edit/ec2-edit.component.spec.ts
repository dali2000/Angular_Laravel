import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2EditComponent } from './ec2-edit.component';

describe('Ec2EditComponent', () => {
  let component: Ec2EditComponent;
  let fixture: ComponentFixture<Ec2EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ec2EditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
