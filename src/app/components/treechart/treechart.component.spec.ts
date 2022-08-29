import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreechartComponent } from './treechart.component';

describe('TreechartComponent', () => {
  let component: TreechartComponent;
  let fixture: ComponentFixture<TreechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreechartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
