import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ItemsComponent } from "./items.component";
import { Page } from "@nativescript/core";
import { AppModule } from '../app.module';

describe("ItemsComponent", () => {
  let itemsComponent: ItemsComponent;
  let fixture: ComponentFixture<ItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [{ provide: Page, useValue: new Page() }],
    });
    fixture = TestBed.createComponent(ItemsComponent);
    fixture.detectChanges();
    itemsComponent = fixture.componentInstance;
  });

  it("should be created", () => {
    expect(itemsComponent).toBeTruthy();
  });
  it("should contain 22 items", () => {
    expect(itemsComponent.items.length).toBe(22);
  });
  it("should contain a proper plugin reference", () => {
    expect(itemsComponent.plugin).toBeDefined();
  });
});
