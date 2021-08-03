import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewServerComponent } from './preview-server.component';

describe('PreviewServerComponent', () => {
  let component: PreviewServerComponent;
  let fixture: ComponentFixture<PreviewServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
