---
title: Drop Down Component
_description: Use Ignite UI for Angular Drop Down component to display a list of items which supports a single item selection.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Drop Down components, Angular Drop Down controls
---

## Drop Down
<p class="highlight">The Ignite UI for Angular Drop Down component displays a scrollable list of items which may be visually grouped. Clicking or tapping an item selects it and closes the drop down</p>
<div class="divider"></div>

### Demo
<div class="sample-container loading" style="height:200px">
    <iframe id="dropdown-sample-1-iframe" src='{environment:demosBaseUrl}/data-entries/dropdown-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="dropdown-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
</div>
<div class="divider--half"></div>

### Usage

#### First Steps

To get started with the drop-down component, first you need to import the `IgxDropDownModule` in the **app.module.ts** file:

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

#### Add Drop Down

Let's create a simple drop-down that provides several option items to choose from. To achieve this, we will use the [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) as well as the [IgxToggleAction]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html) to open/close the drop-down.


```html
<!-- dropdown.component.html -->
<button igxButton="raised" 
        [igxToggleAction]="dropdown"
        [igxDropDownItemNavigation]="dropdown">
        Options
</button>
<igx-drop-down #dropdown>
    <igx-drop-down-item *ngFor="let item of items">
        {{ item.field }}
    </igx-drop-down-item>
</igx-drop-down>
```

```typescript
// dropdown.component.ts
export class MyDropDownComponent {
    public items: Array<{ field: string }> = [
        { field: "Option 1" },
        { field: "Option 2" },
        { field: "Option 3" }
    ];
}
```

### Examples

#### Predefined selected item
Let's say we want to have a predefined selected item. One way to do this, is by handling the [onOpening]({environment:angularApiUrl}/classes/igxdropdowncomponent.html#onopening) event of the drop-down component.

```html
<!-- dropdown.component.html -->
<button igxButton="raised" 
        [igxToggleAction]="dropdown" 
        [igxDropDownItemNavigation]="dropdown">
        Options
</button>
<igx-drop-down #dropdown (onOpening)="dropdown.setSelectedItem(0)">
    <igx-drop-down-item *ngFor="let item of items">
        {{ item.field }}
    </igx-drop-down-item>
</igx-drop-down>
```

```typescript
// dropdown.component.ts
export class MyDropDownComponent {
    public items: Array<{ field: string }> = [
        { field: "Option 1" },
        { field: "Option 2" },
        { field: "Option 3" }
    ];
}
```

<div class="sample-container loading" style="height: 200px">
    <iframe id="dropdown-sample-2-iframe" data-src='{environment:demosBaseUrl}/data-entries/dropdown-sample-2' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on stackblitz
    </button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="dropdown-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on codesandbox
    </button>
</div>

<div class="divider--half"></div>

#### Grouping items

To provide a more useful visual information, use the [isHeader]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html#isheader) property to group items semantically or the [disabled]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html#disabled) property to display an item as a non-interactive. You can also set the [selected]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html#selected) property on a particular item to make it the selected item.

```html
<!-- dropdown.component.html -->
<button igxButton="raised" 
        [igxToggleAction]="dropdown"
        [igxDropDownItemNavigation]="dropdown">
        Countries
</button>
<igx-drop-down #dropdown [width]="'144px'">
    <div class="drop-down__scroll-container">
        <igx-drop-down-item *ngFor="let item of items" 
                            [disabled]="item.disabled"
                            [isHeader]="item.header"
                            [selected]="item.selected">
            {{ item.field }}
        </igx-drop-down-item>
    </div>
</igx-drop-down>
```

```typescript
// dropdown.component.ts
export class MyDropDownComponent {
    public items: any[] = [
        { field: "EU", header: true },
        { field: "Germany" },
        { field: "Bulgaria", selected: true },
        { field: "UK", disabled: true },
        { field: "NA", header: true },
        { field: "Canada" },
        { field: "USA" },
        { field: "Mexico" }
    ];
}
```

If the sample is configured properly, a list of countries should be displayed as a group under EU header, UK as a non-interactive item, and Bulgaria as a selected item:

<div class="sample-container loading" style="height: 310px">
    <iframe id="dropdown-sample-3-iframe" data-src='{environment:demosBaseUrl}/data-entries/dropdown-sample-3' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on stackblitz
    </button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="dropdown-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on codesandbox
    </button>
</div>

#### Grouping hierarchical data

The `igx-drop-down` items can also be grouped using the [`igx-drop-down-item-group`]({environment:angularApiUrl}/classes/igxdropdowngroupcomponent.html) container, making it easier for users to differentiate separate categories. The `igx-drop-down-item-group` accepts `igx-drop-down-item` elements as its content and renders them in a grouped fashion.

```typescript
// dropdown.component.ts
export class MyCustomDropDownComponent {
    ...
    public foods: { 
        name: string,
        entries: { name: string, refNo: string }[]
    }[] = [
    {
        name: 'Vegetables',
        entries: [{
            name: 'Cucumber',
            refNo: `00000`
        }, {
        name: 'Lettuce',
        refNo: `00001`
        },
        ...]
    }, {
        name: 'Fruits',
        entries: [{
            name: 'Banana',
            refNo: `10000`
        }, {
            name: 'Tomato',
            refNo: `10001`
        },
        ...]
    }, {
        name: 'Meats',
        entries: [{
            name: 'Chicken',
            refNo: `20000`
        }, {
            name: 'Beef',
            refNo: `20001`
        },
        ...]
    }];
}
```

```html
<igx-drop-down>
    <igx-drop-down-item-group *ngFor="let foodGroup of foods" [label]="foodGroup.name">
        <igx-drop-down-item *ngFor="let food of foodGroup.entries" [value]='food.refNo'>
            {{ food.name }}
        </igx-drop-down-item>
    </igx-drop-down-item-group>
</igx-drop-down>
```

The group also has the additional functionality of disabling items inside of its body. For example, lets say we do not want the `Meats` food group to be selectable in our drop-down. Instead of disabling all of the entries in `Meats` separately, we can disable the group, as well as all of the child items inside:

```html
<igx-drop-down>
    <igx-drop-down-item-group *ngFor="let foodGroup of foods" [label]="foodGroup.name" [disabled]="foodGroup.name === 'Meats'">
        <igx-drop-down-item *ngFor="let food of foodGroup.entries" [value]='food.refNo'>
            {{ food.name }}
        </igx-drop-down-item>
    </igx-drop-down-item-group>
</igx-drop-down>
``` 

You can see the results in the sample below:
<div class="sample-container loading" style="height: 310px">
    <iframe id="dropdown-sample-5-iframe" data-src='{environment:demosBaseUrl}/data-entries/dropdown-sample-5' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on stackblitz
    </button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="dropdown-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on codesandbox
    </button>
</div>

#### Drop Down as menu
You can configure the drop-down to behave as a menu. To do this, set the [ISelectionEventArgs]({environment:angularApiUrl}/interfaces/iselectioneventargs.html) interface [cancel]({environment:angularApiUrl}/interfaces/iselectioneventargs.html#cancel) member to *true* in the [onSelection]({environment:angularApiUrl}/classes/igxdropdowncomponent.html#onselection) event handler. In this way, the selected item is not preserved when opening the menu and previous selections get invalidated. Still, you can get the clicked item through the [newSelection]({environment:angularApiUrl}/interfaces/iselectioneventargs.html#newselection) member value in the event.

```html
<!-- dropdown.component.html -->
<div>
    <igx-navbar title="Contacts">
        <button [igxToggleAction]="menu"
                [igxToggleOutlet]="outlet"
                [overlaySettings]="overlaySettings"
                [igxDropDownItemNavigation]="menu"
                igxButton="icon">
            <igx-icon fontSet="material">more_vert</igx-icon>
        </button>
        <igx-drop-down #menu (onSelection)="onSelection($event)">
            <igx-drop-down-item *ngFor="let item of items" [value]="item.text">
                <div>{{ item.text }}</div>
            </igx-drop-down-item>
        </igx-drop-down>
    </igx-navbar>

    <div>
        <ng-container *ngIf="text">
            <label igxLabel>{{ text }}</label>
        </ng-container>
    </div>

    <div igxOverlayOutlet #outlet="overlay-outlet"></div>
</div>
```

```typescript
// dropdown.component.ts
export class MyMenuComponent {
    public items: Array<{ text: string }> =
        [{ text: "Add New Contact" }, { text: "Edit Contact" }, { text: "Refresh" }, { text: "Help" }];
    public text: string;
    public overlaySettings = {
        positionStrategy: new ConnectedPositioningStrategy({
            horizontalDirection: HorizontalAlignment.Left,
            horizontalStartPoint: HorizontalAlignment.Right,
            verticalStartPoint: VerticalAlignment.Bottom
        }),
        scrollStrategy: new NoOpScrollStrategy()
    };

    public onSelection(eventArgs: ISelectionEventArgs) {
        this.text = eventArgs.newSelection.value;
        eventArgs.cancel = true;
    }
}
```

<div class="sample-container loading" style="height: 240px">
    <iframe id="dropdown-menu-iframe" data-src='{environment:demosBaseUrl}/data-entries/dropdown-menu' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-menu-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on stackblitz
    </button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="dropdown-menu-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on codesandbox
    </button>
</div>

#### Navigation directive
Use the [igxDropDownItemNavigation]({environment:angularApiUrl}/classes/igxdropdownitemnavigationdirective.html) directive to enable keyboard navigation for the `igxDropDown` component. In order to allow the directive to handle all triggered events, it should be applied to the active (focused) element or a parent container. By default, a drop-down or its items don't take focus, so the directive can be placed on a `button` or `input` that will control the drop-down. The navigation directive value should target a component that is an instance or a descendant of the [IgxDropDownBaseDirective]({environment:angularApiUrl}/classes/igxdropdownbasedirective.html) class.

The following sample demonstrates an input that opens and closes the `igxDropDown` instance on click. Applying the [igxDropDownItemNavigation]({environment:angularApiUrl}/classes/igxdropdownitemnavigationdirective.html) directive on the input itself will enable keyboard navigation when using the up and down arrow keys. This relies on the default drop-down behavior with the [allowItemsFocus]({environment:angularApiUrl}/classes/igxdropdowncomponent.html#allowitemsfocus) property set to `false` to allow the input to maintain focus.


```html
<!-- input-dropdown.component.html -->
<igx-input-group #inputGroup [igxToggleAction]="dropDown">
    <input type="text" igxInput [igxDropDownItemNavigation]="dropDown"
        readonly= "true"
        placeholder="choose an option"
        [value]="dropDown.selectedItem?.value"
        (keydown.ArrowDown)="openDropDown()"/>

    <igx-suffix igxButton="icon" igxRipple>
        <igx-icon>arrow_drop{{ dropDown.collapsed ? '_down' : '_up' }}</igx-icon>
    </igx-suffix>
</igx-input-group>

<span>Selected: {{ dropDown.selectedItem?.value }}</span>
<igx-drop-down #dropDown [width]="'160px'">
    <igx-drop-down-item *ngFor="let item of items" [value]="item.field">
        {{ item.field }}
    </igx-drop-down-item>
</igx-drop-down>
```

```typescript
// input-dropdown.component.ts
export class InputDropDownComponent {
    @ViewChild(IgxDropDownComponent) public igxDropDown: IgxDropDownComponent;
    @ViewChild("inputGroup", { read: IgxInputGroupComponent}) public inputGroup: IgxInputGroupComponent;

    public items: Array<{ field: string }> = [
        { field: "Option 1" },
        { field: "Option 2" },
        { field: "Option 3" }
    ];

    public openDropDown() {
        if (this.igxDropDown.collapsed) {
            this.igxDropDown.open({
                modal: false,
                positionStrategy: new ConnectedPositioningStrategy({
                    target: this.inputGroup.element.nativeElement
                })
            });
        }
    }
}
```

<div class="sample-container loading" style="height:220px">
    <iframe id="dropdown-sample-4-iframe" data-src='{environment:demosBaseUrl}/data-entries/dropdown-sample-4' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="dropdown-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
</div>
<div class="divider--half"></div>

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

When the `allowItemsFocus` property is enabled, the drop down items gain tab index and are focused when active. The focused drop-down items are the ones that trigger events, during keyboard navigation, which means that the navigation directive should be applied on the individual drop-down items.

```html
<igx-input-group [igxToggleAction]="dropDown">
    <input igxInput type="text">
</igx-input-group>
<igx-drop-down #dropDown [allowItemsFocus]="true">
    <igx-drop-down-item *ngFor="let p of provinceData" [igxDropDownItemNavigation]="dropDown">
        {{ p }}
    </igx-drop-down-item>
</igx-drop-down>
```

### Styling
Using the [Ignite UI for Angular Theming](themes/index.md), we can greatly alter the drop-down appearance. First, in order for us to use the functions exposed by the theme engine, we need to import the `index` file in our style file: 

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`igx-drop-down-theme`]({environment:sassApiUrl}/index.html#function-igx-drop-down-theme) and accepts some of the default theme's parameters.

```scss
$custom-drop-down-theme: igx-drop-down-theme(
    $background-color: #fdfdfd,
    $header-text-color: #345779,
    $item-text-color: #2dabe8,
    $selected-item-background: #345779,
    $selected-item-text-color: #fdfdfd,
    $selected-hover-item-background: #345779,
    $selected-hover-item-text-color: #fdfdfd,
    $selected-focus-item-background: #345779,
    $selected-focus-item-text-color: #fdfdfd,
    $hover-item-background: rgba(0, 0, 0, 0.12),
    $hover-item-text-color: #345779,
);
```

#### Using CSS variables 

The last step is to pass the custom drop-down theme: 

```scss
 @include igx-css-vars($custom-drop-down-theme);
```

#### Using Theme Overrides

In order to style components for older browsers, like Internet Explorer 11, we have to use a different approach, since it doesn't support CSS variables.

If the component is using the [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`. To prevent the custom theme to leak into other components, be sure to include the `:host` selector before `::ng-deep`:

 ```scss
:host {
  ::ng-deep {
    @include igx-drop-down($custom-drop-down-theme);
  }
}
```

> [!NOTE]
> The [IgxDropDown]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) component uses the [IgxOverlay](overlay_main.md) to hold and display the `igx-drop-down-items` list container. To properly scope your styles you might have to use an [OverlaySetting.outlet]({environment:angularApiUrl}/interfaces/overlaysettings.html#outlet). For more details check: [IgxOverlay styling guide](overlay_styling.md).

#### Demo
<div class="sample-container loading" style="height:350px">
    <iframe id="dropdown-styling-iframe" src='{environment:demosBaseUrl}/data-entries/dropdown-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="dropdown-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
</div>

<div class="divider--half"></div>

### API Summary
* [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) 
* [IgxDropDownComponent Styles]({environment:sassApiUrl}/index.html#function-igx-drop-down-theme)
* [IgxDropDownItemComponent]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html).
* [IgxOverlay]({environment:angularApiUrl}/interfaces/overlaysettings.html)
* [IgxOverlay Styles]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)

### Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
