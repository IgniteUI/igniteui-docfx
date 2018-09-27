---
title: Drop Down Component
_description: Use Ignite UI for Angular Drop Down component to display a list of items which supports a single item selection.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Drop Down components, Angular Drop Down controls
---

##Drop Down
<p class="highlight">The Ignite UI for Angular Drop Down displays a scrollable list of items which may be visually grouped and supports selection of a single item. Clicking or tapping an item selects it and closes the Drop Down</p>
<div class="divider"></div>

### Drop Down Demo
<div class="sample-container" style="height:380px">
    <iframe id="dropdown-sample-3-iframe" src='{environment:demosBaseUrl}/dropdown-sample-3' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> To start using Ignite UI for Angular components in your own projects, make sure you have configured all necessary dependencies and have performed the proper setup of your project. You can learn how to do this in the [**installation**](https://www.infragistics.com/products/ignite-ui-angular/getting-started#installation) topic.

###Usage
To get started with the Ignite UI for Angular Drop Down, let's first import the [IgxDropDownModule]({environment:angularApiUrl}/classes/igxdropdownmodule.html) in the **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxDropDownModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxDropDownModule],
    ...
})
export class AppModule {}
```

Let's create a simple dropdown that provides several option items to choose from. To achieve this, we use the **igx-drop-down** component as well as [igxToggleAction]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html) to open/close the dropdown.


Having all set up, let's show all the options in the [**IgxDropDownComponent**](https://www.infragistics.com/products/ignite-ui-angular/angular/components/drop_down.html) component. The dropdown contains several options as dropdown items.

```html
<!-- dropdown.component.html -->

<div class="sample-wrapper drop-down-wrapper">
    <button igxButton="raised" (click)="toggleDropDown($event)" [igxDropDownItemNavigation]="dropdown1">Options</button>
    <igx-drop-down #dropdown1>
        <igx-drop-down-item *ngFor="let item of items">
            {{ item.field }}
        </igx-drop-down-item>
    </igx-drop-down>
</div>
```

```typescript
// dropdown.component.ts

...
    @ViewChild(IgxDropDownComponent) public igxDropDown: IgxDropDownComponent;

    public items: any[] = [];

    private _positionSettings = {
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalStartPoint: VerticalAlignment.Bottom
    };
    private _overlaySettings = {
      closeOnOutsideClick: true,
      modal: false,
      positionStrategy: new ConnectedPositioningStrategy(this._positionSettings),
      scrollStrategy: new CloseScrollStrategy()
    };

    public ngOnInit() {
        for (let i = 1; i < 4; i ++) {
            const item = { field: "Option " + i };
            this.items.push(item);
        }
    }

    public toggleDropDown(eventArgs) {
        this._overlaySettings.positionStrategy.settings.target = eventArgs.target;
        this.igxDropDown.toggle(this._overlaySettings);
    }
```


If the sample is configured properly, a dropdown with several options should be displayed.

<div class="sample-container" style="height: 200px">
    <iframe id="dropdown-sample-1-iframe" src='{environment:demosBaseUrl}/dropdown-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="dropdown-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on stackblitz
    </button>
</div>

<div class="divider--half"></div>

Let's say we want to have a predefined selected item. One way to do this, is by handling **igx-drop-down** [onOpening]({environment:angularApiUrl}/classes/igxdropdowncomponent.html#onopening) event of [**IgxDropDownComponent**](https://www.infragistics.com/products/ignite-ui-angular/angular/components/drop_down.html).

```html
<!-- dropdown.component.html -->

<div class="sample-wrapper drop-down-wrapper">
    <button igxButton="raised" (click)="toggleDropDown($event)" [igxDropDownItemNavigation]="dropdown2">Options</button>
    <igx-drop-down #dropdown2 (onOpening)="onOpening($event)">
        <igx-drop-down-item *ngFor="let item of items">
            {{ item.field }}
        </igx-drop-down-item>
    </igx-drop-down>
</div>
```

```typescript
// dropdown.component.ts

...
    @ViewChild(IgxDropDownComponent) public igxDropDown: IgxDropDownComponent;

    public items: any[] = [];

    private _positionSettings = {
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalStartPoint: VerticalAlignment.Bottom
    };

    private _overlaySettings = {
      closeOnOutsideClick: true,
      modal: false,
      positionStrategy: new ConnectedPositioningStrategy(this._positionSettings),
      scrollStrategy: new CloseScrollStrategy()
  };

    public ngOnInit() {
        for (let i = 1; i < 4; i ++) {
            const item = { field: "Option " + i };
            this.items.push(item);
        }
    }

    public toggleDropDown(eventArgs) {
        this._overlaySettings.positionStrategy.settings.target = eventArgs.target;
        this.igxDropDown.toggle(this._overlaySettings);
    }

    public onOpening(ev) {
        this.igxDropDown.setSelectedItem(0);
    }

```

<div class="sample-container" style="height: 200px">
    <iframe id="dropdown-sample-2-iframe" src='{environment:demosBaseUrl}/dropdown-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="dropdown-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on stackblitz
    </button>
</div>

<div class="divider--half"></div>

To provide more useful visual information, use [isHeader]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html#isheader) to group items semantically or [disabled]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html#disabled) to display an item as non-interactive. You can also set [isSelected]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html#isselected) to a particular item to make it the selected item.

```html
<!-- dropdown.component.html -->

<div class="sample-wrapper drop-down-wrapper">
    <button igxButton="raised" (click)="toggleDropDown($event)" [igxDropDownItemNavigation]="dropdown3">Countries</button>
    <igx-drop-down #dropdown3>
        <igx-drop-down-item *ngFor="let item of items" [disabled]="item.disabled" [isHeader]="item.header" [isSelected]="item.selected">
            {{ item.field }}
        </igx-drop-down-item>
    </igx-drop-down>
</div>

```

```typescript
// dropdown.component.ts

...
    @ViewChild(IgxDropDownComponent) public igxDropDown: IgxDropDownComponent;

    public items: any[] = [
        { field: "EU", header: true },
        { field: "Germany" },
        { field: "Bulgaria", selected: true },
        { field: "UK", disabled: true },
        { field: "NA", header: true },
        { field: "Canada" },
        { field: "USA" },
        { field: "Mexico" }];

    private _positionSettings = {
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalStartPoint: VerticalAlignment.Bottom
    };

    private _overlaySettings = {
      closeOnOutsideClick: true,
      modal: false,
      positionStrategy: new ConnectedPositioningStrategy(this._positionSettings),
      scrollStrategy: new CloseScrollStrategy()
  };

    public toggleDropDown(eventArgs) {
        this._overlaySettings.positionStrategy.settings.target = eventArgs.target;
        this.igxDropDown.toggle(this._overlaySettings);
    }

```

If the sample is configured properly, a list  of countries should be displayed as a group under EU header, UK as a non-interactive item, and Bulgaria as selected item.

<div class="sample-container" style="height: 380px">
    <iframe id="dropdown-sample-3-iframe" src='{environment:demosBaseUrl}/dropdown-sample-3' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on stackblitz
    </button>
</div>

### igxDropDownItemNavigation directive

To enable keyboard navigation for the `igxDropDown` component, the [igxDropDownItemNavigation]({environment:angularApiUrl}/classes/igxdropdownitemnavigationdirective.html) directive can be applied. The directive should be applied to the active(focused) element or a parent container. This will allow the directive to handle all triggered events. By default the the igxDropDown or its items don't take focus, so for example the directive can be placed on a button or input that controls the drop down.
The [igxDropDownItemNavigation]({environment:angularApiUrl}/classes/igxdropdownitemnavigationdirective.html) directive value should be target component that is or extends [IgxDropDownBase]({environment:angularApiUrl}/classes/igxdropdownbase.html) class.


The following sample demonstrates an input that on click opens and closes igxDropDown instance. Applying the [igxDropDownItemNavigation]({environment:angularApiUrl}/classes/igxdropdownitemnavigationdirective.html) on the input itself, will enable keyboard navigation, when using arrow up and arrow down. This relies on the default drop down behavior with [allowItemsFocus]({environment:angularApiUrl}/classes/igxcombodropdowncomponent.html#allowitemsfocus) disabled to allow the button input to maintain focus.


```
<igx-input-group [igxToggleAction]="dropdownProvince">
    <input igxInput type="text" [igxDropDownItemNavigation]="dropdownProvince">
</igx-input-group>
<igx-drop-down #dropdownProvince>
    <igx-drop-down-item *ngFor="let p of provinceData">
        {{ p }}
    </igx-drop-down-item>
</igx-drop-down>
```

Applying the directive will ensure the following actions are executed as a result from the keyboard navigation:

| Name | Description |
| :--- | :--- |
| `Enter` | Select item from the drop down and closes the drop down. |
| `Space` | Select item from the drop down and closes the drop down. |
| `Esc` | Closes the drop down. |
| `Arrow Down` | Navigate to the next item in the target component. |
| `Arrow Up` | Navigate to the previous item in the target component. |
| `End` | Navigate to the last item in the target component. |
| `Home` | Navigate to the first item in the target component. |



When [allowItemsFocus]({environment:angularApiUrl}/classes/igxcombodropdowncomponent.html#allowitemsfocus) is enabled, drop down items gain tab index and are focused when active. The focused drop down items are the ones that trigger events, during keyboard navigation, which means that the [igxDropDownItemNavigation]({environment:angularApiUrl}/classes/igxdropdownitemnavigationdirective.html) should be applied on the individual drop down items.

```
<igx-input-group [igxToggleAction]="dropdownProvince">
    <input igxInput type="text">
</igx-input-group>
<igx-drop-down #dropdownProvince [allowItemsFocus]="true">
    <igx-drop-down-item *ngFor="let p of provinceData" [igxDropDownItemNavigation]="dropdownProvince">
        {{ p }}
    </igx-drop-down-item>
</igx-drop-down>
```         

<div class="divider--half"></div>

### API Summary
**igx-drop-down** component [**API Reference**]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) and
[**Themes Reference**]({environment:sassApiUrl}/index.html#mixin-igx-drop-down).

**igx-drop-down-item** component [**API Reference**]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html).

###Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)



