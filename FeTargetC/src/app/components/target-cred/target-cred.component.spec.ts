import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetCredComponent } from './target-cred.component';

describe('TargetCredComponent', () => {
  let component: TargetCredComponent;
  let fixture: ComponentFixture<TargetCredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetCredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TargetCredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
