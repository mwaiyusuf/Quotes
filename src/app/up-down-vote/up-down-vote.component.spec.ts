import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpDownVoteComponent } from './up-down-vote.component';

describe('UpDownVoteComponent', () => {
  let component: UpDownVoteComponent;
  let fixture: ComponentFixture<UpDownVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpDownVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpDownVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
