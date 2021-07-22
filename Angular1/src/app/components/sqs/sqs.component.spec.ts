import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqsComponent } from './sqs.component';

describe('SqsComponent', () => {
  let component: SqsComponent;
  let fixture: ComponentFixture<SqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
