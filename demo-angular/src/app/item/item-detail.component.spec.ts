import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { ItemDetailComponent } from "./item-detail.component";
import { Page } from "@nativescript/core";
import { AppModule } from "../app.module";

describe("ItemDetailComponent", () => {
  let itemDetailComponent: ItemDetailComponent;
  let fixture: ComponentFixture<ItemDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [
        { provide: Page, useValue: new Page() },
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { id: 10 } } },
        },
      ],
    });
    fixture = TestBed.createComponent(ItemDetailComponent);
    fixture.detectChanges();
    itemDetailComponent = fixture.componentInstance;
  });

  it("should be created", () => {
    expect(itemDetailComponent).toBeTruthy();
  });
  it("should contain an item", () => {
    expect(itemDetailComponent.item.name).toBe('Messi');
  });
});
