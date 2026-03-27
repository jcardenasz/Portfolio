import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsCarousel } from './tools-carousel';

describe('ToolsCarousel', () => {
  let component: ToolsCarousel;
  let fixture: ComponentFixture<ToolsCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolsCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
