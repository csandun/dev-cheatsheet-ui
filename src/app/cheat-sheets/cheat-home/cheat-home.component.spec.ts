import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheatHomeComponent } from './cheat-home.component';

describe('CheatHomeComponent', () => {
  let component: CheatHomeComponent;
  let fixture: ComponentFixture<CheatHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheatHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheatHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
