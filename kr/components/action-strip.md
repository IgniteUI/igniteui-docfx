---
title: Action Strip
_description: The Action Strip represents a template area for one or more actions. The Action Strip requires to be inside a relative container, as it is going to overlay it.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular ActionStrip components, Angular ActionStrip directives, Angular ActionStrip controls
---

## Action Strip
<p class="highlight">
The Ignite UI for Angular [`igxActionStrip`]({environment:angularApiUrl}/classes/igxactionstripcomponent.html) represents a template area for one or more actions. The Action Strip is intended to provide additional UI and functionality for a specific container. This container should be relative, because the Action Strip attempts to overlay its relative parent. This provides an easy way to position the actions over the parent. Event though the parent is overlapped by the Action Strip the main interactions and user access to the container will remain available.
</p>

<div class="divider--half"></div>

#### Demo

<div class="sample-container loading" style="height: 400px;">
    <iframe id="action-strip-paragraph-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/menus/action-strip-paragraph" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="action-strip-paragraph-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

### Usage
In order to initialize and position correctly the Action Strip it needs to be inside relative container:

```html
<div style="position:relative;width:100px;height:100px;">
    <igx-action-strip>
        <button igxButton (click)="makeTextBold()">
            <igx-icon>format_bold</igx-icon>
        </button>
    </igx-action-strip>
<div>
```

By default the Action Strip will be visible, but this can be controlled by the [`hidden`]({environment:angularApiUrl}/classes/igxactionstripcomponent.html#hidden) @Input property.

#### Menu look and feel
When there is a need for too many actions, which are overlapping the main content it is a good idea to use [`IgxActionStripMenuItem`]({environment:angularApiUrl}/classes/igxactionstripmenuitemdirective.html) directive. Any item marked with `*igxActionStripMenuItem` will be resulting a three-dot button, which toggles a dropdown containing those items.

```html
<div style="position:relative;width:100px;height:100px;">
    <igx-action-strip>
        <button *igxActionStripMenuItem igxButton (click)="alignTextLeft()">
            <igx-icon>format_align_left</igx-icon>
        </button>
        <button *igxActionStripMenuItem igxButton (click)="alignTextCenter()">
            <igx-icon>format_align_center</igx-icon>
        </button>
        <button *igxActionStripMenuItem igxButton (click)="alignTextRight()">
            <igx-icon>format_align_right</igx-icon>
        </button>
    </igx-action-strip>
</div>
```

<div class="sample-container loading" style="height: 400px;">
    <iframe id="action-strip-menu-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/menus/action-strip-paragraph-menu" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="action-strip-menu-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

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

<div class="sample-container loading" style="height: 600px;">
    <iframe id="action-strip-grid-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/grid/grid-action-strip" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="action-strip-grid-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Styling

The igxGrid allows styling through the [Ignite UI for Angular Theme Library](../themes/component-themes.md). The grid's [theme]({environment:sassApiUrl}/index.html#function-igx-grid-theme) exposes a wide variety of properties, which allow the customization of all the features of the grid.

In the below steps, we are going through the steps of customizing the grid's Pinning styling.

#### Importing global theme
To begin the customization of the Pinning feature, you need to import the `index` file, where all styling functions and mixins are located.
```scss
@import '~igniteui-angular/lib/core/styles/themes/index'
```
In order to create a new theme `igx-action-strip-theme` should be extended:
```scss
$custom-strip: igx-action-strip-theme(
    $background: rgba(150, 133, 143, 0.4),
    $actions-background: rgba(109, 121, 147, 0.6),
    $color:  null,
    $delete-action: null,
    $actions-border-radius: 0
);
```

The last step is to include the component theme in our application.
```scss
@include igx-action-strip($custom-strip);
```

<div class="sample-container loading" style="height: 400px;">
    <iframe id="action-strip-styling-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/menus/action-strip-styling" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="action-strip-styling-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>


### API and Style References

For more detailed information regarding the ActionStrip's API, refer to the following links:
* [`IgxActionStripComponent API`]({environment:angularApiUrl}/classes/igxactionstripcomponent.html)

The following built-in CSS styles helped us achieve this Action Strip layout:

* [`IgxActionStripComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-action-strip-theme)

Additional components and/or directives that can be used within Action Strip:

* [`IgxActionStripMenuItemDirective`]({environment:angularApiUrl}/classes/igxmenuitemdirective.html)
* [`IgxGridActionsBaseDirective `]({environment:angularApiUrl}/classes/igxgridactionsbasedirective.html)
* [`IgxGridPinningActionsComponent`]({environment:angularApiUrl}/classes/igxpinningactionscomponent.html)
* [`IgxGridEditingActionsComponent`]({environment:angularApiUrl}/classes/igxeditingactionscomponent.html)
* [`IgxDividerDirective`]({environment:angularApiUrl}/classes/igxdividerdirective.html)


<div class="divider"></div>

###Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)