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
To get started with the Ignite UI for Angular Drop Down, let's first import the **IgxDropDownModule** in the **app.module.ts** file:

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

Let's create a simple dropdown that provides several option items to choose from. To achieve this, we use the **igx-drop-down** component as well as **igx-toggle** to open/close the dropdown.


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

Let's say we want to have a predefined selected item. One way to do this, is by handling **igx-drop-down**  `onOpening` event of  [**IgxDropDownComponent**](https://www.infragistics.com/products/ignite-ui-angular/angular/components/drop_down.html).

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

To provide more useful visual information, use `isHeader` to group items semantically or `disabled` to display an item as non-interactive. You can also set `isSelected` to a particular item to make it the selected item.

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

To enable keyboard navigation for the igxDropDown component, the igxDropDownItemNavigation directive should be applied. It's recommended that the directive is applied to the element that is triggering the opening and closing the of the drop down. That element will also have the focus, and when using the directive it will handle all triggered events. By default the focus will always stay on the element that igxDropDownItemNavigation is applied on, and this happens because the igxDropDown doesn't focus its items by default.
The following sample demonstrates an input that on click opens and closes igxDropDown instance. Applying the igxDropDownItemNavigation on the input itself, will enable keyboard navigation, when using arrow up and arrow down, and in the same the input will not loose the focus during that process.

```
<igx-input-group #inputGroupProvince (click)="toggleDDProvince()">
    <input igxInput #inputProvince type="text"
        [igxDropDownItemNavigation]="dropdownProvince"/>
    <igx-suffix><igx-icon [name]="arrowProvince"></igx-icon></igx-suffix>
</igx-input-group>
<igx-drop-down #dropdownProvince>
    <igx-drop-down-item *ngFor="let p of provinceData">
        {{ p }}
    </igx-drop-down-item>
</igx-drop-down>
```

If you want the drop down items to receive focus then you need to explicitly set `allowItemsFocus` property of the igxDropDown to `true`. In that case you can apply the igxDropDownItemNavigation on the drop down itself, however this can also happen on the input again. Applying the directive on the drop down means that you can omit the value, because it is the drop down itself.

```
<igx-input-group #inputGroupProvince (click)="toggleDDProvince()">
    <input igxInput #inputProvince type="text"/>
    <igx-suffix><igx-icon [name]="arrowProvince"></igx-icon></igx-suffix>
</igx-input-group>
<igx-drop-down #dropdownProvince [allowItemsFocus]="true" igxDropDownItemNavigation>
    <igx-drop-down-item *ngFor="let p of provinceData">
        {{ p }}
    </igx-drop-down-item>
</igx-drop-down>
```

<div class="divider--half"></div>

### API Summary
The following table summarizes some of the useful **igx-drop-down** component inputs, outputs and methods.

#### Inputs
The following inputs are available in the **igx-drop-down** component:

| Name | Type | Description |
| :--- | :--- | :--- |
| `width` | string | Sets the width of the control. |
| `height` | string | Sets the height of the control. |
| `allowItemsFocus` | boolean | Allows items to take focus. |

<div class="divider--half"></div>

#### Outputs
The following outputs are available in the **igx-drop-down** component:

| Name | Cancelable | Description | Parameters
| :--- | :--- | :--- | :--- |
| `onSelection` | false | Emitted when item selection is changing, before the selection completes. | ISelectionEventArgs |
| `onOpening` | false | Emitted before the dropdown is opened. |
| `onOpened` | false | Emitted when a dropdown is being opened. |
| `onClosed` | false | Emitted when a dropdown is being closed. |

#### Methods
The following methods are available in the **igx-drop-down** component:

| Signature | Description |
| :--- | :--- | :--- |
| `toggle()` | Toggles the drop down opened/closed. |
| `setSelectedItem(index: number)` | Selects dropdown item by index. |
| `open()` | Opens the dropdown. |
| `close()` | Closes the dropdown. |

#### Getters
The following getters are available on the **igx-drop-down** component:

| Name | Type | Description |
| :--- | :--- | :--- |
| `selectedItem` | `number` | Gets the selected item. |
| `items` | `IgxDropDownItemComponent[]` | Gets all of the items but headers. |
| `headers` | `IgxDropDownItemComponent[]` | Gets header items. |
| `collapsed` | `boolean` | Gets if the dropdown is collapsed. |



The following table summarizes some of the useful **igx-drop-down-item** component inputs.

#### Inputs
The following inputs are available in the **igx-drop-down-item** component:

| Name | Type | Description |
| :--- | :--- | :--- |
| `isHeader` | `boolean`| Defines if the item is a group header. |
| `disabled` | `boolean`| Defines if the given item is disabled. |
| `isFocused` | `boolean`| Defines if the given item is focused. |
| `isSelected` | `boolean` | Defines if the given item is selected. |

###Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)



