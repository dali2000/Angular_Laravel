import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S3EditComponent } from './s3-edit.component';

describe('S3EditComponent', () => {
  let component: S3EditComponent;
  let fixture: ComponentFixture<S3EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S3EditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(S3EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
