import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SumupListViewComponent } from './sumup-list-view.component';

describe('SumupListViewComponent', () => {
  let component: SumupListViewComponent;
  let fixture: ComponentFixture<SumupListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SumupListViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SumupListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
