---
title: Action Strip
_description: The Action Strip represents a template area for one or more actions. The Action Strip requires to be inside a relative container, as it is going to overlay it.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular ActionStrip components, Angular ActionStrip directives, Angular ActionStrip controls
---

## Action Strip
<p class="highlight">
The Ignite UI for Angular Action Strip component provides an overlay area containing one or more actions allowing additional UI and functionality to be shown on top of a specific target container upon user interaction e.g. hover. The container should be positioned relatively as the Action Strip attempts to overlay it and is itself positioned absolutely. Despite overlapped by an Action Strip, the main interactions and user access to the target container remain available.
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
To initialize and position the Action Strip correctly, it needs to be inside a relatively positioned container:

```html
<div style="position:relative; width:100px; height:100px;">
    <igx-action-strip>
        <button igxButton (click)="makeTextBold()">
            <igx-icon>format_bold</igx-icon>
        </button>
    </igx-action-strip>
<div>
```

By default, the Action Strip will be visible, but this can be configured via the [`hidden`]({environment:angularApiUrl}/classes/igxactionstripcomponent.html#hidden) @Input property.

#### Menu look and feel
For scenarios where more than three action items will be shown, it is best to use [`IgxActionStripMenuItem`]({environment:angularApiUrl}/classes/igxactionstripmenuitemdirective.html) directive. Any item within the Action Strip marked with the `*igxActionStripMenuItem` structural directive will be shown in a dropdown, revealed upon toggling the more button i.e. the three dots representing the last action.

```html
<div style="position:relative; width:100px; height:100px;">
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

The same Action Strip instance can be used in multiple places in the document as long as the actions need not be visible simultaneously for them.
The Action Strip can change its parent container, which is possible by changing the [`context`]({environment:angularApiUrl}/classes/igxactionstripcomponent.html#context).
The best way to do so is via the [`show`]({environment:angularApiUrl}/classes/igxactionstripcomponent.html#show) API method and passing the `context` as an argument. The `context` should be an instance of a component and should have an accessible `element` property of the `ElementRef` type.

>Note: The `show` API method uses [Angular Renderer2](https://angular.io/api/core/Renderer2) to append the Action Strip to that `element`.


### Usage in Grids

The Action Strip provides additional functionality and UI for the IgxGrid.
This can be utilized via grid action components and we are providing two default ones:
- [`IgxGridEditingActionsComponent`]({environment:angularApiUrl}/classes/igxgrideditingactionscomponent.html) - includes functionality and UI related to grid editing. It allows you to quickly toggle edit mode for cells or rows, depending on the value of the `rowEditable` option of the grid and whether deleting rows is allowed.
- [`IgxGridPinningActionsComponent`]({environment:angularApiUrl}/classes/igxgridpinningactionscomponent.html) - includes functionality and UI related to grid row pinning. It allows you to quickly pin rows and navigate between pinned rows and their disabled counterparts.

```html
<igx-grid [data]="data" [rowEditable]="true" [primaryKey]="'ID'">
    <igx-column *ngFor="let c of columns" [field]="c.field">
    </igx-column>

    <igx-action-strip #actionStrip>
        <igx-grid-pinning-actions></igx-grid-pinning-actions>
        <igx-grid-editing-actions></igx-grid-editing-actions>
    </igx-action-strip>
</igx-grid>
```
>Note: These components inherit [`IgxGridActionsBaseDirective`]({environment:angularApiUrl}/classes/igxgridactionsbasedirective.html) and when creating a custom grid action component, it should also inherit `IgxGridActionsBaseDirective`.

<div class="sample-container loading" style="height: 600px;">
    <iframe id="action-strip-grid-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/grid/grid-action-strip" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="action-strip-grid-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Styling

To customize the Action Strip, you first need to import the `index` file, where all styling functions and mixins are located.
```scss
@import '~igniteui-angular/lib/core/styles/themes/index'
```
Next, we have to create a new theme that extends the `igx-action-strip-theme` and pass the parameters which we'd like to change:
```scss
$custom-strip: igx-action-strip-theme(
    $background: rgba(150, 133, 143, 0.4),
    $actions-background: rgba(109, 121, 147, 0.6),
    $color:  null,
    $delete-action: null,
    $actions-border-radius: 0
);
```

The last step is to include the newly created component theme in our application.

When `$legacy-support` is set to `false`(default), include the component css variables like this:
```scss
@include igx-css-vars($custom-strip);
```

When `$legacy-support` is set to `true`, include the component theme like this:
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

For more detailed information regarding the Action Strip API, refer to the following links:
* [`IgxActionStripComponent API`]({environment:angularApiUrl}/classes/igxactionstripcomponent.html)

The following built-in CSS styles helped us achieve this Action Strip layout:

* [`IgxActionStripComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-action-strip-theme)

Additional components and/or directives that can be used within the Action Strip:

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
