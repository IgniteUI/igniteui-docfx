---
title: Drop Down Component
_description: Use Ignite UI for Angular Drop Down component to display a list of items which supports a single item selection.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Drop Down components, Angular Drop Down controls
---

## Drop Down
<p class="highlight">The Ignite UI for Angular Drop Down displays a scrollable list of items which may be visually grouped and supports selection of a single item. Clicking or tapping an item selects it and closes the Drop Down</p>
<div class="divider"></div>

### Drop Down Demo
<div class="sample-container loading" style="height:220px">
    <iframe id="dropdown-sample-4-iframe" src='{environment:demosBaseUrl}/data-entries/dropdown-sample-4' width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Usage
To get started with the [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html), first you need to install Ignite UI for Angular by typing the following command:

```cmd
ng add igniteui-angular
```
For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting_started.md) topic.

The next step is to import the `IgxDropDownModule` in the **app.module.ts** file:

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


Having all set up, let's show all the options in the [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) component. The dropdown contains several options as dropdown items.

```html
<!-- dropdown.component.html -->

<div class="sample-wrapper">
    <button class="button" igxButton="raised" [igxToggleAction]="dropdown" [igxDropDownItemNavigation]="dropdown" >Options</button>
    <igx-drop-down #dropdown [width]="'100px'">
        <igx-drop-down-item *ngFor="let item of items">
            {{ item.field }}
        </igx-drop-down-item>
    </igx-drop-down>
</div>
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


If the sample is configured properly, a dropdown with several options should be displayed.

<div class="sample-container loading" style="height: 200px">
    <iframe id="dropdown-sample-1-iframe" data-src='{environment:demosBaseUrl}/data-entries/dropdown-sample-1' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="dropdown-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on stackblitz
    </button>
</div>

<div class="divider--half"></div>

#### Predefined selected item
Let's say we want to have a predefined selected item. One way to do this, is by handling **igx-drop-down** [onOpening]({environment:angularApiUrl}/classes/igxdropdowncomponent.html#onopening) event of [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html).

```html
<!-- dropdown.component.html -->

<div class="sample-wrapper">
    <button class="button" igxButton="raised" [igxToggleAction]="dropdown" [igxDropDownItemNavigation]="dropdown">Options</button>
    <igx-drop-down #dropdown (onOpening)="dropdown.setSelectedItem(0)" [width]="'100px'">
        <igx-drop-down-item *ngFor="let item of items">
            {{ item.field }}
        </igx-drop-down-item>
    </igx-drop-down>
</div>
```

```typescript
// dropdown.component.ts

...
export class MyDropDownComponent {
    public items: Array<{ field: string }> = [
        { field: "Option 1" },
        { field: "Option 2" },
        { field: "Option 3" }
    ];
}
```

<div class="sample-container loading" style="height: 200px">
    <iframe id="dropdown-sample-2-iframe" data-src='{environment:demosBaseUrl}/data-entries/dropdown-sample-2' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="dropdown-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on stackblitz
    </button>
</div>

<div class="divider--half"></div>

To provide more useful visual information, use [isHeader]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html#isheader) to group items semantically or [disabled]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html#disabled) to display an item as non-interactive. You can also set [selected]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html#selected) to a particular item to make it the selected item.

```html
<!-- dropdown.component.html -->

<div class="sample-wrapper">
    <button class="button" igxButton="raised" [igxToggleAction]="dropdown" [igxDropDownItemNavigation]="dropdown">Countries</button>
    <igx-drop-down #dropdown [width]="'144px'">
        <div class="drop-down__scroll-container">
            <igx-drop-down-item *ngFor="let item of items" [disabled]="item.disabled" [isHeader]="item.header"
                [selected]="item.selected">
                {{ item.field }}
            </igx-drop-down-item>
        </div>
    </igx-drop-down>
</div>
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

If the sample is configured properly, a list  of countries should be displayed as a group under EU header, UK as a non-interactive item, and Bulgaria as selected item.

<div class="sample-container loading" style="height: 298px">
    <iframe id="dropdown-sample-3-iframe" data-src='{environment:demosBaseUrl}/data-entries/dropdown-sample-3' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on stackblitz
    </button>
</div>

#### Grouping hierarchical data

Items in the `igx-drop-down` can also be grouped using the [`igx-drop-down-item-group`]({environment:angularApiUrl}/classes/igxdropdowngroupcomponent.html). The `igx-drop-down-item-group` accepts `igx-drop-down-item`s as its content and renders them in a grouped fashion.
In the code snippets below, you can see how you can use the `igx-drop-down-item-group` to display the example `foods` array in a grouped fashion.
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

The `igx-drop-down-item-group` displays all of the `igx-drop-down-item`s under it in a grouped fashion, making it easier for users to differentiate the separate categories of foods in the example. The group also has the additional functionality of disabling `igx-drop-down-item`s inside of its body. For example, lets say we do not the `Meats` food group to be selectable in our drop down. Instead of disabling all of the entries in `Meats` separately, we can do the following:

```html
<igx-drop-down>
    <igx-drop-down-item-group *ngFor="let foodGroup of foods" [label]="foodGroup.name" [disabled]="foodGroup.name === 'Meats'">
        <igx-drop-down-item *ngFor="let food of foodGroup.entries" [value]='food.refNo'>
            {{ food.name }}
        </igx-drop-down-item>
    </igx-drop-down-item-group>
</igx-drop-down>
``` 

This disables the `Meats` group, as well as all of the child items inside!

You can see the results in the sample below:
<div class="sample-container loading" style="height: 298px">
    <iframe id="dropdown-sample-5-iframe" data-src='{environment:demosBaseUrl}/data-entries/dropdown-sample-5' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on stackblitz
    </button>
</div>

#### Drop Down as menu
You can configure the [`igxDropDown`]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) to behave as a menu. To do this, set the [`ISelectionEventArgs`]({environment:angularApiUrl}/interfaces/iselectioneventargs.html) [`cancel`]({environment:angularApiUrl}/interfaces/iselectioneventargs.html#cancel) member to *true* in the [`onSelection`]({environment:angularApiUrl}/classes/igxdropdowncomponent.html#onselection) event handler. Thus, the selected item is not preserved on menu opening and selection is invalidated. Still, you can get the clicked item through the [`ISelectionEventArgs`]({environment:angularApiUrl}/interfaces/iselectioneventargs.html) [`newSelection`]({environment:angularApiUrl}/interfaces/iselectioneventargs.html#newselection) member value.

```html
<!-- dropdown.component.html -->

<div class="drop-down-wrapper">
    <igx-navbar title="Contacts">
        <button [igxToggleAction]="menu" [igxToggleOutlet]="outlet" [overlaySettings]="overlaySettings" [igxDropDownItemNavigation]="menu"
            igxButton="icon">
            <igx-icon fontSet="material">more_vert</igx-icon>
        </button>
        <igx-drop-down #menu (onSelection)="onSelection($event)">
            <igx-drop-down-item *ngFor="let item of items" [value]="item.text">
                <div>{{ item.text }}</div>
            </igx-drop-down-item>
        </igx-drop-down>
    </igx-navbar>

    <div class="textContainer">
        <ng-container *ngIf="text">
            <label igxLabel>Clicked menu item: {{ text }}</label>
        </ng-container>
    </div>

    <div class="overlayOutlet" igxOverlayOutlet #outlet="overlay-outlet"></div>
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

<div class="sample-container loading" style="height: 280px">
    <iframe id="dropdown-menu-iframe" data-src='{environment:demosBaseUrl}/data-entries/dropdown-menu' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-menu-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on stackblitz
    </button>
</div>

#### Navigation directive
To enable keyboard navigation for the `igxDropDown` component, the [igxDropDownItemNavigation]({environment:angularApiUrl}/classes/igxdropdownitemnavigationdirective.html) directive can be applied. The directive should be applied to the active(focused) element or a parent container. This will allow the directive to handle all triggered events. By default, igxDropDown or its items don't take focus, so for example the directive can be placed on a `button` or `input` that controls the drop down.
The [igxDropDownItemNavigation]({environment:angularApiUrl}/classes/igxdropdownitemnavigationdirective.html) directive value should be target component that is or extends [IgxDropDownBaseDirective]({environment:angularApiUrl}/classes/igxdropdownbasedirective.html) class.


The following sample demonstrates an input that on click opens and closes igxDropDown instance. Applying the [igxDropDownItemNavigation]({environment:angularApiUrl}/classes/igxdropdownitemnavigationdirective.html) on the input itself, will enable keyboard navigation, when using arrow up and arrow down. This relies on the default drop down behavior with [allowItemsFocus]({environment:angularApiUrl}/classes/igxdropdowncomponent.html#allowitemsfocus) disabled to allow the button input to maintain focus.


```html
<!-- input-dropdown.component.html -->

<igx-input-group #inputGroup [igxToggleAction]="dropDown" class="input-group">
    <input class="input"  type="text" igxInput [igxDropDownItemNavigation]="dropDown"
        readonly= "true"
        placeholder="choose an option"
        [value]="dropDown.selectedItem?.value"
        (keydown.ArrowDown)="openDropDown()"/>

    <igx-suffix igxButton="icon" class="dropdownToggleButton" igxRipple>
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
    <iframe id="dropdown-sample-4-iframe" data-src='{environment:demosBaseUrl}/data-entries/dropdown-sample-4' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
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



When [allowItemsFocus]({environment:angularApiUrl}/classes/igxdropdowncomponent.html#allowitemsfocus) is enabled, drop down items gain tab index and are focused when active. The focused drop down items are the ones that trigger events, during keyboard navigation, which means that the [igxDropDownItemNavigation]({environment:angularApiUrl}/classes/igxdropdownitemnavigationdirective.html) should be applied on the individual drop down items.

```
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
Using the [Ignite UI for Angular Theming](themes/index.md), we can greatly alter the **igx-drop-down** appearance. We are going to create and style an `igx-drop-down` component to choose an RPG 'Hero Class' from. 

#### Import theme
First, in order for us to use the functions exposed by the theme engine, we need to import the `index` file in our style file: 

```scss
// in component.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

#### Define palette & colors
After we've imported the `index` file we can go ahead and use the [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) function to define some color variables we would like to use in our custom theme. We are going to use these for our custom igx-drop-down styling in conjunction with our own color [palette](themes/palette.md) where we can specify our main colors to be used by the component.
Fist define a custom palette and pass our main colors:
```scss
$my-primary-color:#FFC314;
$my-secondary-color: #7344df;
$my-info-color: #ffffff;

$my-color-palette: igx-palette(
    $primary: $my-primary-color,
    $secondary: $my-secondary-color,
    $info: $my-info-color
);
```
In order to see our custom palette and colors applied, we need to pass these to a theme function.
So in one bold move we will [`create a custom theme`](themes/component-themes.md#creating-themes) and pass our cool colors to a number of predefined `igx-drop-down-theme` parameters. Let's say we have decided modifying these specific parameters will be more than sufficient to make our component look the way we like. It is really convenient to make use of the previously created [palette](themes/palette.md) and base our new colors on it. Lets say we are going for some different shades of purple.
```scss
$custom-drop-down-theme: igx-drop-down-theme(
    $background-color: igx-color($my-color-palette, "secondary", 100),
    $header-text-color: igx-color($my-color-palette, "secondary", 600),
    $item-text-color: igx-color($my-info-color, "info"),

    $selected-item-background: igx-color($my-color-palette, "secondary", 400),
    $selected-item-text-color: igx-color($my-color-palette, "info"),
    $selected-hover-item-background: igx-color($my-color-palette, "secondary", 400),
    $selected-hover-item-text-color: igx-color($my-color-palette, "info"),
    $selected-focus-item-background: igx-color($my-color-palette, "secondary", 400),
    $selected-focus-item-text-color: igx-color($my-color-palette, "info"),

    $focused-item-background: igx-color($my-color-palette, "secondary", 300),
    $focused-item-text-color: igx-color($my-color-palette, "info"),

    $hover-item-background: igx-color($my-color-palette, "info"),
    $hover-item-text-color: igx-color($my-color-palette, "secondary", 600)
);
```
As in this particular sample we are going to use a button to toggle the `igx-drop-down`, we can go a bit further and style it as well. So we go a bit outside the `igx-drop-down` topic and to complement the overall drop-down theme styling we will create a custom button theme passing it our color palette like: 
```scss
$custom-button-theme: igx-button-theme(
    $palette: $my-color-palette
);

```

#### Applying
All that's left is to properly scope our newly created themes.

##### Globally
In case you want this newly created `igx-drop-down` theme to be applied [`globally`](themes/component-themes.md#creating-themes) in your app (to all of the components of this type, keep in mind we are actually extending igx-drop-down-theme), all that is needed is to include the theme in your app root style file. The same applies for our custom button theme:
```scss
// in root app.scss
// Pass our drop-down theme to the `igx-drop-down` mixin
    @include igx-drop-down($custom-drop-down-theme);
// Pass our button theme to the `igx-button` mixin
    @include igx-button($custom-button-theme);

```
##### Scoped
There may be a case where you want a particular `igx-drop-down` be styled differently than the others in the app. This will require to use angular specific pseudo-class selectors like `:host`, `::ng-deep`, etc.

 >[!NOTE]
 >If the component is using an [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`.

On the other side, in order to prevent our custom theme to leak to other component descendants, be sure to include the `:host` selector before `::ng-deep`:

```scss
:host {
    ::ng-deep {
        @include igx-drop-down($custom-drop-down-theme);
        @include igx-button($custom-button-theme);
    }
}
```

> [!NOTE]
> The [**IgxDropDown**]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) component uses [IgxOverlay](overlay_main.md) to hold and display the `igx-drop-down-items` list container. To properly scope your styles you might have to use an [OverlaySetting.outlet]({environment:angularApiUrl}/interfaces/overlaysettings.html#outlet). For more details check: [`IgxOverlay styling guide`](overlay_styling.md).

#### Demo
<div class="sample-container loading" style="height:350px">
    <iframe id="dropdown-styling-iframe" src='{environment:demosBaseUrl}/data-entries/dropdown-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

### API Summary
* [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) 
* [IgxDropDownComponent Styles]({environment:sassApiUrl}/index.html#mixin-igx-drop-down)
* [IgxDropDownItemComponent]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html).
* [IgxOverlay]({environment:angularApiUrl}/interfaces/overlaysettings.html)
* [IgxOverlay Styles]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)

### Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
