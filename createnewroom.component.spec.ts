import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenewroomComponent } from './createnewroom.component';

describe('CreatenewroomComponent', () => {
  let component: CreatenewroomComponent;
  let fixture: ComponentFixture<CreatenewroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatenewroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatenewroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
