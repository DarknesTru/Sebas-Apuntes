import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApuntesHtmlComponent } from './apuntes-html.component';

describe('ApuntesHtmlComponent', () => {
  let component: ApuntesHtmlComponent;
  let fixture: ComponentFixture<ApuntesHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApuntesHtmlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApuntesHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
