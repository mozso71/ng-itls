import { CapitalizeDirective } from './capitalize.directive';
import { DirectiveComponent } from './directive.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('Component - Directive - CapitalizeDirective', () => {
  let component: DirectiveComponent;
  let fixture: ComponentFixture<DirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveComponent, CapitalizeDirective],
    });

    fixture = TestBed.createComponent(DirectiveComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should capitalize text when initially clicked', () => {
    const debugEl: HTMLElement = fixture.debugElement.nativeElement;
    const div: HTMLElement = debugEl.querySelector('div');
    div.click();
    fixture.detectChanges();

    expect(div.style.textTransform).toBe('uppercase');
  });

  it('should lowercase when clicked twice', () => {
    const debugEl: HTMLElement = fixture.debugElement.nativeElement;
    const div: HTMLElement = debugEl.querySelector('div');
    div.click();
    fixture.detectChanges();
    div.click();
    fixture.detectChanges();

    expect(div.style.textTransform).toBe('lowercase');
  });
});
