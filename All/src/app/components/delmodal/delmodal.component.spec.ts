import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelmodalComponent } from './delmodal.component';

describe('DelmodalComponent', () => {
  let component: DelmodalComponent;
  let fixture: ComponentFixture<DelmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
