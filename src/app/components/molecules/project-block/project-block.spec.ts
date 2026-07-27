import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBlock } from './project-block';

describe('ProjectBlock', () => {
  let component: ProjectBlock;
  let fixture: ComponentFixture<ProjectBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
