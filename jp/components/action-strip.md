---
title: Action Strip
_description: The Action Strip represents a template area for one or more actions. The Action Strip requires to be inside a relative container, as it is going to overlay it.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular ActionStrip components, Angular ActionStrip directives, Angular ActionStrip controls
---

## Action Strip
<p class="highlight">
[`igxActionStrip`]({environment:angularApiUrl}/classes/igxactionstripcomponent.html)
The Action Strip represents a template area for one or more actions. The Action Strip requires to be inside a relative container, as it is going to overlay it.
</p>

<div class="divider--half"></div>

#### Demo


<div class="divider--half"></div>

### Getting Started
In order to initialize and position correctly the Action Strip it needs to be inside relative container:

```html
<div style="position:relative;width:100px;height:100px;">
    <igx-action-strip>
        <igx-icon (click)="clickHandler()">star</igx-icon>
    </igx-action-strip>
<div>
```

By default the Action Strip will be visible, but this can be controlled by the [`hidden`]({environment:angularApiUrl}/classes/igxactionstripcomponent.html#hidden) @Input property.

#### Menu look and feel
When there is a need for too many actions, which are overlapping the main content it is a good idea to use [`IgxActionStripMenuItem`]({environment:angularApiUrl}/classes/igxactionstripmenuitemdirective.html) directive. Any item marked with `*igxActionStripMenuItem` will be resulting a three-dot button, which toggles a dropdown containing those items.

```html
<div style="position:relative;width:100px;height:100px;">
    <igx-action-strip>
        <button *igxActionStripMenuItem igxButton="icon"><igx-icon>star</igx-icon></button>
        <button *igxActionStripMenuItem igxButton="icon"><igx-icon>edit</igx-icon></button>
    </igx-action-strip>
</div>
```

#### Reusing the Action Strip

Single Action Strip can be used for more than one elements. As long as the strips for those elements are not required for it to be visible simultaneously. 
The Action Strip can change the container element it is shown for.
This is achieved by changing the [`context`]({environment:angularApiUrl}/classes/igxactionstripcomponent.html#context).
The best way to achieve this is using the [`show`]({environment:angularApiUrl}/classes/igxactionstripcomponent.html#show) API method and pass the `context` as parameter. The `context` should be an instance of a component and should have an accessible element property.


### Usage in Grids

Action strip provides functionality and UI for IgxGrid.
All that can be utilized with grid action components. 
There are two default provided components:
- [`IgxGridEditingActionsComponent`]({environment:angularApiUrl}/classes/igxgrideditingactionscomponent.html) - includes functionality and UI related to grid editing. It allows starting edit mode for cell or row, depending on rowEditable option of the grid and deleting rows.
- [`IgxGridPinningActionsComponent`]({environment:angularApiUrl}/classes/igxgridpinningactionscomponent.html) - includes functionality and UI related to grid pinning. It allows pinning rows and navigating from a pinned row to the disabled row.

```html
<igx-grid [data]="data" [rowEditable]="true" [primaryKey]="'ID'">
    <igx-column *ngFor="let c of columns" [field]="c.field">
        <ng-template igxCell let-cell="cell" let-val>
            <div class="cell-template" (mouseover)="actionStrip.show(cell.row)" (mouseout)="actionStrip.hide()">
                <span>{{val}}</span>
            </div>
        </ng-template>
    </igx-column>

    <igx-action-strip #actionStrip>
        <igx-grid-pinning-actions></igx-grid-pinning-actions>
        <igx-grid-editing-actions></igx-grid-editing-actions>
    </igx-action-strip>
</igx-grid>
```
>Note: These components inherit [`IgxGridActionsBaseDirective`]({environment:angularApiUrl}/classes/igxgridactionsbasedirective.html) and when creating a custom grid action component, this component should also inherit `IgxGridActionsBaseDirective`.

### Styling

The igxGrid allows styling through the [Ignite UI for Angular Theme Library](../themes/component-themes.md). The grid's [theme]({environment:sassApiUrl}/index.html#function-igx-grid-theme) exposes a wide variety of properties, which allow the customization of all the features of the grid.

In the below steps, we are going through the steps of customizing the grid's Pinning styling.

#### Importing global theme
To begin the customization of the Pinning feature, you need to import the `index` file, where all styling functions and mixins are located.
```scss
@import '~igniteui-angular/lib/core/styles/themes/index'