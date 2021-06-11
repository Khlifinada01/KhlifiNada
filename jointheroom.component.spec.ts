import {ComponentFixture, TestBed} from '@angular/core/testing';

import {JointheroomComponent} from './jointheroom.component';

describe('JointheroomComponent', () => {
  let component: JointheroomComponent;
  let fixture: ComponentFixture<JointheroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JointheroomComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JointheroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
