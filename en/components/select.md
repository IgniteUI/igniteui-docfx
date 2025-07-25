---
title: Angular Select Component - Ignite UI for Angular
_description: Learn how to configure Angular Select Component. Angular Select provides an input with Angular dropdown list, allowing single item selection of the Angular Combobox. Try it now.
_keywords:  angular select, angular select component, angular forms, angular form select component, angular ui components, igniteui for angular, infragistics
---

# Angular Select Component Overview
Angular Select is a form component used for selecting a single value from a list of predefined values. The Angular Select Component provides functionality identical to the native HTML select element, but offers a lot more customization options. It is based on the [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) and supports all of its features, including templating, virtualization, and customizing the dropdown list items.

## Angular Select Example
Below is a basic Angular Select example. It has a simple contextual menu that displays a list of several choices opening per click.

<code-view style="height: 300px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/select-sample-1" alt="Angular Select Example">
</code-view>

## Getting Started with Ignite UI for Angular Select

To get started with the Ignite UI for Angular Select component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxSelectModule` in the **app.module.ts** file.

```typescript
// app.module.ts
...
import { IgxSelectModule } from 'igniteui-angular';
// import { IgxSelectModule } from '@infragistics/igniteui-angular'; for licensed package
@NgModule({
    ...
    imports: [..., IgxSelectModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxSelectComponent` as a standalone dependency, or use the [`IGX_SELECT_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/select/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { FormsModule } from '@angular/forms';
import { IGX_SELECT_DIRECTIVES } from 'igniteui-angular';
// import { IGX_SELECT_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-select [(ngModel)]="selected">
        <label igxLabel>Simple Select</label>
        <igx-select-item value="Orange">Orange</igx-select-item>
        <igx-select-item value="Apple">Apple</igx-select-item>
        <igx-select-item value="Banana">Banana</igx-select-item>
        <igx-select-item value="Mango">Mango</igx-select-item>
    </igx-select>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_SELECT_DIRECTIVES, FormsModule]
    /* or imports: [IgxSelectComponent, IgxSelectItemComponent, IgxLabelDirective, FormsModule] */
})
export class HomeComponent {
    public selected: string;
}
```

Now that you have the Ignite UI for Angular Select module or directives imported, you can start using the `igx-select` component.

## Using the Angular Select

Add the `igx-select` along with a list of items to choose from. We use [`igx-select-item`]({environment:angularApiUrl}/classes/igxselectitemcomponent.html) to display the items that the `igx-select` contains.
```html
<igx-select>
    <label igxLabel>Simple Select</label>
    <igx-select-item value="Orange">Orange</igx-select-item>
    <igx-select-item value="Apple">Apple</igx-select-item>
    <igx-select-item value="Banana">Banana</igx-select-item>
    <igx-select-item value="Mango">Mango</igx-select-item>
</igx-select>
```
Another way to do it would be to use a collection of items that we want to display using the [*ngFor](https://angular.io/api/common/NgForOf) structural directive:

```typescript
public items: string[] = ['Orange', 'Apple', 'Banana', 'Mango'];
```

```html
<igx-select [(ngModel)]="selected">
    <label igxLabel>Simple Select</label>
    <igx-select-item *ngFor="let item of items" [value]="item">
        {{item}}
    </igx-select-item>
</igx-select>
```

By default, the Select component will use the `innerText` of the item element in the input field. In cases with more complex item templates, you can explicitly set the `text` property to specify what to display in the input field when this item is selected. For example:

```html
<igx-select>
    <igx-select-item *ngFor="let item of items" [value]="item.value" [text]="item.text">
        {{item.text}} ( {{item.count}} )
    </igx-select-item>
</igx-select>
```

To see the `text` property in action with a bit more sophisticated item templates, check the grouping sample below **Select with Groups** section.

### Input Properties

The Select component supports the following directives applicable to the [Input Group](input-group.md):

- `igxLabel` - No need to set the `for` property, as linking with the Angular Select input is handled automatically via `aria-labelledby`.
- `igx-prefix`/`igxPrefix`
- `igx-suffix`/`igxSuffix` - Note the built-in toggle button suffix will always be displayed last.
- `igx-hint`/`igxHint`

```html
<igx-select [(ngModel)]="selected">
    <label igxLabel>Pick a fruit</label>
    <igx-prefix>
        <span class="bio-prefix">BIO</span>
    </igx-prefix>
    <igx-suffix *ngIf="selected">
        <igx-icon (click)="clearSelection($event)">clear</igx-icon>
    </igx-suffix>
    <igx-hint>Choose a banana</igx-hint>
    <igx-select-item *ngFor="let item of items" [value]="item">
        {{item}}
    </igx-select-item>
</igx-select>
```
<code-view style="height: 350px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/select-input-directives" >
</code-view>

>[!NOTE]
>If no [`placeholder`]({environment:angularApiUrl}/classes/igxselectcomponent.html#placeholder) is specified for the Select component and there is no selection made, the `igxLabel` will transition and appear where you would expect the placeholder to be.

### Group Select Items
To help visually separate item groups, the select component supports item grouping by wrapping items in an `<igx-select-item-group>`.
This works best with hierarchical data that can be iterated to declare the components. In the following example, each group has a `label` and a collection of `items`:
```typescript
public greengrocery: Array<{ label: string, items: Array<{ type: string, origin: string }> }> = [
    { label: 'Fruits', items: [
            { type: 'Apple', origin: 'local' },
            { type: 'Orange', origin: 'import' },
            { type: 'Banana', origin: 'import'}
        ]
    },
    { label: 'Vegetables', items: [
            { type: 'Cucumber', origin: 'local' },
            { type: 'Potato', origin: 'import' },
            { type: 'Pepper', origin: 'local' }
        ]
    }
];
```

Then in your template file you can iterate over the objects and access their items accordingly:

```html
<igx-select #select>
    <label igxLabel>Select With Groups</label>
    <igx-select-item-group *ngFor="let group of greengrocery" [label]="group.label">
        <igx-select-item *ngFor="let item of group.items" [value]="item.type" [text]="item.type">
            {{item.type}}
            <igx-icon
                title="Local product"
                *ngIf="item.origin === 'local'; else templateImport"
            >local_shipping</igx-icon>
            <ng-template #templateImport>
                <igx-icon title="Import product">flight</igx-icon>
            </ng-template>
        </igx-select-item>
    </igx-select-item-group>
</igx-select>
```

<code-view style="height: 400px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/select-sample-2" >
</code-view>

### Header & Footer
Currently, there are no default header and footer templates for the Select component. However, you can add a header or a footer template by marking them respectively with `igxSelectHeader` or `igxSelectFooter`. As these are custom templates, you should define their styling as well.
In this example, there are both header and footer ng-templates defined. In the header there is a basic filtering, implemented via [`igx-buttongroup`]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html). The footer includes static summary of all of the items, based on the delivery method.
```html
<igx-select>
    <label igxLabel>Pick your fruit</label>
    <igx-select-item *ngFor="let fruit of fruits" [value]="fruit.type" [text]="fruit.type" [ngSwitch]="fruit.delivery">
        {{fruit.type}}
        <igx-icon *ngSwitchCase="'flight'">flight</igx-icon>
        <igx-icon *ngSwitchCase="'train'">train</igx-icon>
        <igx-icon *ngSwitchCase="'boat'">directions_boat</igx-icon>
    </igx-select-item>
    <ng-template igxSelectHeader>
        <div class="custom-select-header">
            <span class="sample-template-heading">DELIVERY METHOD</span>
            <igx-buttongroup (click)="filter($event.target.title)">
                    <button igxButton title="flight"><igx-icon title="flight">flight</igx-icon></button>
                    <button igxButton title="train"><igx-icon title="train">train</igx-icon></button>
                    <button igxButton title="boat"><igx-icon title="boat">directions_boat</igx-icon></button>
            </igx-buttongroup>
        </div>
    </ng-template>
    <ng-template igxSelectFooter>
        <div class="custom-select-footer">
            <span class="sample-template-heading">TOTAL</span>
            <div class="sample-template-icons">
                <span class="sample-template-icons__item">
                    <igx-icon
                        title="flight"
                        [class.important-icon]="selected === 'flight'"
                    >flight</igx-icon>
                    {{flightCount}}
                </span>
                <span class="sample-template-icons__item">
                    <igx-icon
                        title="train"
                        [class.important-icon]="selected === 'train'"
                    >train</igx-icon>
                    {{trainCount}}
                </span>
                <span class="sample-template-icons__item">
                    <igx-icon
                        title="boat"
                        [class.important-icon]="selected === 'boat'"
                    >directions_boat
                    </igx-icon>
                    {{boatCount}}
                </span>
            </div>
        </div>
    </ng-template>
</igx-select>
```
<code-view style="height: 610px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/select-header-footer" >
</code-view>


### Custom Toggle Button in Angular Select
You can customize the default toggle button, using the `igxSelectToggleIcon` directive or setting a `TemplateRef` to the [`toggleIconTemplate`]({environment:angularApiUrl}/classes/igxselectcomponent.html#toggleIconTemplate) property.

```html
<igx-select #select>
    ...
    <ng-template igxSelectToggleIcon let-collapsed>
        <igx-icon>{{ collapsed ? 'add_circle' : 'add_circle_outline'}}</igx-icon>
    </ng-template>
    ...
<igx-select>
```

## Keyboard Navigation

- Open the `igx-select` by clicking on the `Space`, `Enter` or `ALT + Up/Down Arrow` keys, while the select is focused.
- Close the `igx-select` using the `ALT + Up/Down Arrow` combination or any of the `Enter`, `Space`, `Esc` or `Tab` keys.
- Using the `Up/Down Arrow` keys will navigate through the items.
- Using the `Home` or `End` keys will navigate you to the first and last items in the list.
- You can navigate through list items, starting with a certain character, by pressing the corresponding key.
- You can navigate to a specific item by rapidly typing the first few characters of the item you wish to go to.
- Select an item using the `Enter` or `Space` keys

>[!NOTE]
>`igx-select` supports only *single* selection of items.

You can also try out the [drag and drop App Builder™](https://www.infragistics.com/products/appbuilder) to see how it automates certain processes and reduces the need for excessive hand coding when building your next Angular app. 

## Custom Overlay Settings
You can create custom [`OverlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html). To do this you first define your template like so:
```html
<igx-select [overlaySettings]="customOverlaySettings">
    <igx-select-item *ngFor="let item of items">
        {{item}}
    </igx-select-item>
</igx-select>
```
- Where the `overlaySettings` property is bound to your custom settings.

Inside your class, you would have something along the lines of:
```typescript
export class MyClass implements OnInit {
    @ViewChild(IgxSelectComponent)
    public select: IgxSelectComponent;
    public items: string[] = ['Orange', 'Apple', 'Banana', 'Mango', 'Tomato'];
    public customOverlaySettings: OverlaySettings;

    public ngOnInit(): void {
        const positionSettings: PositionSettings = {
            closeAnimation: scaleOutBottom,
            horizontalDirection: HorizontalAlignment.Right,
            horizontalStartPoint: HorizontalAlignment.Left,
            openAnimation: scaleInTop,
            verticalDirection: VerticalAlignment.Bottom,
            verticalStartPoint: VerticalAlignment.Bottom
        };
        this.customOverlaySettings = {
            target: this.select.inputGroup.element.nativeElement,
            positionStrategy: new ConnectedPositioningStrategy(
                positionSettings
            ),
            scrollStrategy: new AbsoluteScrollStrategy()
        };
    }
}
```
You can see that we create a [*PositionSettings*]({environment:angularApiUrl}/interfaces/positionsettings.html) object that is directly passed to our [*ConnectedPositioningStrategy*]({environment:angularApiUrl}/classes/connectedpositioningstrategy.html), it is not required to do it, but since we want to define a custom positioning, we use them to override the strategy's default settings.

- You can set all settings inside of the [*ngOnInit*](https://angular.io/api/core/OnInit) hook and this will automatically affect your template upon the component's generation.


<code-view style="height: 260px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/select-sample-4" >
</code-view>


You can also pass in a customized [OverlaySettings]({environment:angularApiUrl}/interfaces/overlaysettings.html) object to the [IgxSelectComponent]({environment:angularApiUrl}/classes/igxselectcomponent.html#open)'s open function, where your template should look like this:
```html
<igx-select>
    <igx-select-item *ngFor="let item of items">
        {{item}}
    </igx-select-item>
</igx-select>

<button (click)="onClick($event)"></button>
```

And you class has the following:
```typescript
export class MyClass implements OnInit {
    /* -- */
    private otherCustomOverlaySettings: OverlaySettings = {
        positionStrategy: new GlobalPositionStrategy(),
        scrollStrategy: new AbsoluteScrollStrategy()
    }
    onClick(event: MouseEvent): void {
        this.select.open(this.otherCustomOverlaySettings)
    }
    /* -- */
}
```
>[!NOTE]
>If you pass in your custom settings both as an argument in the `open` function and in the template, `igx-select` will use the one provided in the `open` function. However, if you bind the settings to an internal event, such as `opening` or `opened` then `igx-select` will use the settings that are provided in the template.

## Styling

Every component has its own theme function.

To get the Select component styled, you have to style its containing components. In our case, these are the [input-group-theme]({environment:sassApiUrl}/index.html#function-input-group-theme) and the [drop-down-theme]({environment:sassApiUrl}/index.html#function-drop-down-theme).
Take a look at the [`Input Group`](input-group.md#styling) and the [`Drop Down`](drop-down.md#styling) styling sections to get a better understanding of how to style those two components.

We also have a [`select-theme`]({environment:sassApiUrl}/index.html#function-select-theme) function which is used only for styling the button of our Select component. <br>
To get started with styling the Select component button, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`select-theme`]({environment:sassApiUrl}/index.html#function-select-theme) and provide only the `$toggle-button-background` parameter. The theme function will automatically calculate all corresponding background and foreground colors for the different states based on this single value.

```scss
$custom-select-theme: select-theme(
  $toggle-button-background: #57a5cd,
);
```

The last step is to pass the custom radio theme in our application:

```scss
@include css-vars($custom-select-theme);
```

<code-view style="height: 220px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/select-styling" >
</code-view>


<div class="divider--half"></div>

## API Reference
* [IgxSelectComponent]({environment:angularApiUrl}/classes/igxselectcomponent.html)
* [IgxSelectItemComponent]({environment:angularApiUrl}/classes/igxselectitemcomponent.html)
* [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html)
* [IgxDropDownItemComponent]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html)
* [OverlaySettings]({environment:angularApiUrl}/interfaces/overlaysettings.html)
* [ConnectedPositioningStrategy]({environment:angularApiUrl}/classes/connectedpositioningstrategy.html)
* [GlobalPositionStrategy]({environment:angularApiUrl}/classes/globalpositionstrategy.html#constructor)
* [AbsoluteScrollStrategy]({environment:angularApiUrl}/classes/absolutescrollstrategy.html)
* [PositionSettings]({environment:angularApiUrl}/interfaces/positionsettings.html)

## Theming Dependencies
* [IgxDropDown Theme]({environment:sassApiUrl}/index.html#function-drop-down-theme)
* [IgxIcon Theme]({environment:sassApiUrl}/index.html#function-icon-theme)
* [IgxOverlay Theme]({environment:sassApiUrl}/index.html#function-overlay-theme)
* [IgxInputGroup Theme]({environment:sassApiUrl}/index.html#function-input-group-theme)

## Additional Resources
* [NgModel](https://angular.io/api/forms/NgModel)
* [ViewChild](https://angular.io/api/core/ViewChild)
* [ngForOf](https://angular.io/api/common/NgForOf)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
