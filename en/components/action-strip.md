---
title: Angular Action Strip Component – Ignite UI for Angular | Infragistics
_description: The Action Strip represents a template area for one or more actions. The Action Strip requires to be inside a relative container, as it is going to overlay it.
_keywords: Angular Action Strip component, Angular Action Strip directive, Angular Action Strip control, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Angular UI Components
---

# Angular Action Strip Directive Overview

<p class="highlight">
The Ignite UI for Angular Action Strip component provides an overlay area containing one or more actions allowing additional UI and functionality to be shown on top of a specific target container upon user interaction e.g. hover. The container should be positioned relatively as the Action Strip attempts to overlay it and is itself positioned absolutely. Despite overlapped by an Action Strip, the main interactions and user access to the target container remain available.
</p>

## Angular Action Strip Example

<code-view style="height: 400px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/action-strip-paragraph" alt="Angular Action Strip Example">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Action Strip

To get started with the Ignite UI for Angular Action Strip component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxActionStripModule` in your **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxActionStripModule } from 'igniteui-angular';
// import { IgxActionStripModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxActionStripModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxActionStripComponent` as a standalone dependency, or use the [`IGX_ACTION_STRIP_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/action-strip/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

...
import { IGX_ACTION_STRIP_DIRECTIVES, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';
// import { IGX_ACTION_STRIP_DIRECTIVES, IgxButtonDirective, IgxIconComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <div style="width:100px; height:100px;">
        <igx-action-strip>
            <button igxButton (click)="makeTextBold()">
                <igx-icon>format_bold</igx-icon>
            </button>
        </igx-action-strip>
    <div>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_ACTION_STRIP_DIRECTIVES, IgxButtonDirective, IgxIconComponent]
    /* or imports: [IgxActionStripComponent, IgxButtonDirective, IgxIconComponent] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Action Strip module or directives imported, you can start with a basic configuration of the `igx-action-strip` component.

## Using the Angular Action Strip Component

To initialize and position the Action Strip correctly, it needs to be inside a relatively positioned container:

```html
<div style="position:relative; width:100px; height:100px;">
  <igx-action-strip>
    <button igxButton (click)="makeTextBold()">
      <igx-icon>format_bold</igx-icon>
    </button>
  </igx-action-strip>
</div>
```

By default, the Action Strip will not be visible, but this can be configured via the [`hidden`]({environment:angularApiUrl}/classes/igxactionstripcomponent.html#hidden) @Input property.

### Menu look and feel

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

<code-view style="height: 400px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/action-strip-paragraph-menu" >
</code-view>

### Reusing the Action Strip

The same Action Strip instance can be used in multiple places in the document as long as the actions need not be visible simultaneously for them.
The Action Strip can change its parent container, which is possible by changing the [`context`]({environment:angularApiUrl}/classes/igxactionstripcomponent.html#context).
The best way to do so is via the [`show`]({environment:angularApiUrl}/classes/igxactionstripcomponent.html#show) API method and passing the `context` as an argument. The `context` should be an instance of a component and should have an accessible `element` property of the `ElementRef` type.

> [!NOTE]
> The `show` API method uses [Angular Renderer2](https://angular.io/api/core/Renderer2) to append the Action Strip to that `element`.

## Usage in Grids

The Action Strip provides additional functionality and UI for the IgxGrid.
This can be utilized via grid action components and we are providing two default ones:

- [`IgxGridEditingActionsComponent`]({environment:angularApiUrl}/classes/igxgrideditingactionscomponent.html) - includes functionality and UI related to grid editing. It allows you to quickly toggle edit mode for cells or rows, depending on the value of the `rowEditable` option of the grid and whether deleting rows is allowed.
- [`IgxGridPinningActionsComponent`]({environment:angularApiUrl}/classes/igxgridpinningactionscomponent.html) - includes functionality and UI related to grid row pinning. It allows you to quickly pin rows and navigate between pinned rows and their disabled counterparts.

```html
<igx-grid [data]="data" [rowEditable]="true" [primaryKey]="'ID'">
  <igx-column *ngFor="let c of columns" [field]="c.field"> </igx-column>

  <igx-action-strip #actionStrip>
    <igx-grid-pinning-actions></igx-grid-pinning-actions>
    <igx-grid-editing-actions></igx-grid-editing-actions>
  </igx-action-strip>
</igx-grid>
```

> [!NOTE]
> These components inherit [`IgxGridActionsBaseDirective`]({environment:angularApiUrl}/classes/igxgridactionsbasedirective.html) and when creating a custom grid action component, it should also inherit `IgxGridActionsBaseDirective`.

> [!NOTE]
> When `IgxActionStripComponent` is a child component of the grid, hovering a row will automatically show the UI.

<code-view style="height: 600px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-action-strip" >
</code-view>

> [!NOTE]
> More information about how to use ActionStrip in the grid component could be found [here](/components/grid/row-actions.html).

## Styling

To customize the Action Strip, you first need to import the `index` file, where all styling functions and mixins are located.

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Next, we have to create a new theme that extends the `action-strip-theme` and pass the parameters which we'd like to change:

```scss
$custom-strip: action-strip-theme(
  $background: rgba(109, 121, 147, 0.2),
  $actions-background: rgba(#011627, 0.9),
  $actions-border-radius: 0
);
```

The last step is to include the newly created component theme in our application.

```scss
@include css-vars($custom-strip);
```

<code-view style="height: 400px;" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/action-strip-styling" >
</code-view>

## API and Style References

For more detailed information regarding the Action Strip API, refer to the following links:

* [`IgxActionStripComponent API`]({environment:angularApiUrl}/classes/igxactionstripcomponent.html)

The following built-in CSS styles helped us achieve this Action Strip layout:

* [`IgxActionStripComponent Styles`]({environment:sassApiUrl}/themes#function-action-strip-theme)

Additional components and/or directives that can be used within the Action Strip:

* [`IgxGridActionsBaseDirective `]({environment:angularApiUrl}/classes/igxgridactionsbasedirective.html)
* [`IgxGridPinningActionsComponent`]({environment:angularApiUrl}/classes/igxgridpinningactionscomponent.html)
* [`IgxGridEditingActionsComponent`]({environment:angularApiUrl}/classes/igxgrideditingactionscomponent.html)
* [`IgxDividerDirective`]({environment:angularApiUrl}/classes/igxdividerdirective.html)

<div class="divider"></div>

## Theming Dependencies

* [IgxButton Theme]({environment:sassApiUrl}/themes#function-button-theme)
* [IgxRipple Theme]({environment:sassApiUrl}/themes#function-ripple-theme)
* [IgxDropDown Theme]({environment:sassApiUrl}/themes#function-drop-down-theme)
* [IgxIcon Theme]({environment:sassApiUrl}/themes#function-icon-theme)

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
