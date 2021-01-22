import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentBoxComponent } from './parent-box.component';

describe('ParentBoxComponent', () => {
  let component: ParentBoxComponent;
  let fixture: ComponentFixture<ParentBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
