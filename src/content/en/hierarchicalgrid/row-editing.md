---
title: Editing Rows in Angular Hierarchical Grid - Ignite UI for Angular
_description: Want to enable row editing in Angular Hierarchical Grid? Need a powerful API for CRUD operations? Try our Ignite UI for Angular Data Grid rows editing component!
_keywords: row editing, igniteui for angular, infragistics
_license: commercial
_canonicalLink: grid/row-editing
---



# Angular Hierarchical Grid Row Editing

The Hierarchical Grid provides a convenient way to perform data manipulations through inline editing and a powerful API for Angular CRUD operations. Click on a row and press **Enter key** or simply double click with the mouse on the row that needs to be modified.

## Angular Hierarchical Grid Row Editing Example

The following sample demonstrates how to enable row editing in the Hierarchical Grid. Changing a cell value and then clicking or navigating to another cell on the same row won't  update the row value until confirmed by using the **Done** button, or discarded by using **Cancel** button.





<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-row-editing/" alt="Angular Hierarchical Grid Row Editing Example">
</code-view>

<div class="divider--half"></div>


> [!NOTE]
> When a row is in edit mode, then clicking on a cell on another row will act like the Done button is pressed - submit all the changes of the previous row. If the new cell that gets focus is editable, then the new row also enters edit mode, while if the cell is not editable, then only the previous row exits edit mode.

## Row Editing Usage

To get started import the `IgxHierarchicalGridModule` in the **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxHierarchicalGridModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxHierarchicalGridModule],
    ...
})
export class AppModule {}
```

Then define a Hierarchical Grid with bound data source and [`rowEditable`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowEditable) set to true:




```html
<igx-hierarchical-grid [data]="localdata" [autoGenerate]="false" [rowEditable]="true">
    <igx-column field="Artist" [editable]="true" [dataType]="'string'"></igx-column>
    <igx-column field="HasGrammyAward" [editable]="true" [dataType]="'boolean'">
    </igx-column>
    <igx-column field="Debut" [editable]="true" [dataType]="'number'"></igx-column>
    <igx-column field="GrammyNominations" [editable]="true" [dataType]="'number'" [hasSummary]="true"></igx-column>
    <igx-column field="GrammyAwards" [editable]="true" [dataType]="'number'"
    [hasSummary]="true"></igx-column>
    <igx-column width="10%">
        <ng-template igxCell let-cell="cell">
            <button igxIconButton="flat" (click)="removeRow(cell.cellID.rowIndex)">
                <igx-icon>delete</igx-icon>
            </button>
        </ng-template>
    </igx-column>

    <igx-row-island [key]="'Albums'" #layout1 [autoGenerate]="false">
        <igx-column field="Album" [editable]="true" [dataType]="'string'"></igx-column>
        <igx-column field="Launch Date" [editable]="true" [dataType]="'date'"></igx-column>
        <igx-column field="Billboard Review" [editable]="true" [dataType]="'number'"></igx-column>
        <igx-column field="US Billboard 200" [editable]="true" [dataType]="'number'"></igx-column>
        <igx-row-island [key]="'Songs'" [autoGenerate]="false">
            <igx-column field="No."></igx-column>
            <igx-column field="Title"></igx-column>
            <igx-column field="Released"></igx-column>
            <igx-column field="Genre"></igx-column>
        </igx-row-island>
    </igx-row-island>
</igx-hierarchical-grid>
```



> [!NOTE]
> Setting primary key is mandatory for row editing operations.
> [!NOTE]
> It's not needed to enable editing for individual columns. Using the [`rowEditable`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowEditable) property in the Hierarchical Grid, will mean that all rows, with defined `field` property, excluding primary one, will be editable. If you want to disable editing for specific column, then you set the [`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) column's input to `false`.






```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxRowIslandComponent, IgxHierarchicalGridComponent } from 'igniteui-angular/grids/hierarchical-grid';
// import { IgxRowIslandComponent, IgxHierarchicalGridComponen } from '@infragistics/igniteui-angular'; for licensed package
import { SINGERS } from './data';

@Component({
    selector: 'hierarchical-grid-row-editing',
    styleUrls: ['./hierarchical-grid-row-editing.component.scss'],
    templateUrl: 'hierarchical-grid-row-editing.component.html'
})

export class HGridRowEditingSampleComponent implements OnInit {
    public localdata;

    @ViewChild('layout1')
    layout1: IgxRowIslandComponent;

    @ViewChild('hierarchicalGrid')
    hierarchicalGrid: IgxHierarchicalGridComponent;

    constructor() {
        this.localdata = SINGERS;
    }
}
```



> [!NOTE]
> The Hierarchical Grid uses internally a provider [`IgxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html) that holds pending cell changes, until row state submitted or cancelled.

## Positioning

- Default position of the overlay will be below the row that is in edit mode

- If there is no space below the row then overlay will appear above the row.

- Once shown - top or bottom, overlay will maintain this position during scrolling, until the overlay is closed.

## Behavior

- If row is in edit mode, then editing will continue, if a cell from the same row is clicked.

- Clicking "Done" button will finish row editing and will submit changes either to the data source, or to a transaction if available. In addition row will exit edit mode.

- Clicking "Cancel" button will revert all current changes in the row and row will exit edit mode.

- If row is in edit mode, then clicking a cell from another row will finish the current row edit and will submit new row changes (the same behavior clicking "Done" button). If the new cell that gets focus is editable, then the new row also enters edit mode, while if the cell is not editable, then only the previous row exits edit mode.

- If row is in edit mode and Hierarchical Grid is scrolled so that row goes outside the visible area, the latter will be still in edit mode. When Hierarchical Grid is scrolled, so that the row is visible again, the row will be still in edit mode. When clicked outside the Hierarchical Grid, the cell will also stay in edit mode.

- When perform _sorting_, _filtering_, _searching_ and _hiding_ operations, will revert all current changes in the row and row will exit edit mode.

- When perform _paging_, _resizing_, _pinning_ and _moving_ operations, will exit edit mode and will submit latest value.

- Each modified cell gets edited style until row edit is finished. This is the behavior, when Hierarchical Grid is not provided with transactions. When transactions are available - then cell edit style is applied until all the changes are committed.


## Keyboard Navigation

- `Enter` and `F2` enters row edit mode

- `Esc` exits row edit mode and doesn't submit any of the cell changes, made while the row was in edit mode.

- `Tab` move focus from one editable cell in the row to the next and from the right-most editable cell to the CANCEL and DONE buttons. Navigation from DONE button goes to the left-most editable cell within the currently edited row.


## Feature Integration

- Any data changing operation will terminate row editing operations and will submit current row changes. This will include operations like sorting, changing grouping and filtering criteria, paging, etc.

- Summaries will be updated after row edit is finished. Same is valid for the other features like sorting, filtering, etc.



## Customizing Row Editing Overlay

### Customizing Text

Customizing the text of the row editing overlay is possible using the `igxRowEditTextDirective`.
The `rowChangesCount` property is exposed and it holds the count of the changed cells.

```html
<ng-template igxRowEditText let-rowChangesCount>
 Changes: {{rowChangesCount}}
</ng-template>
 ```

### Customizing Buttons

Customizing the buttons of the row editing overlay is possible using the `igxRowEditActionsDirective`.
If you want the buttons to be part of the keyboard navigation, then each on of them should have the `igxRowEditTabStopDirective`.

 ```html
 <ng-template igxRowEditActions let-endRowEdit>
 <button igxButton igxRowEditTabStop (click)="endRowEdit(false)">Cancel</button>
 <button igxButton igxRowEditTabStop (click)="endRowEdit(true)">Apply</button>
</ng-template>
 ```

## Styling

Using the [Ignite UI for Angular Theme Library](../themes/index.md), we can greatly alter the Row Editing overlay.
The Row Editing overlay is a composite element - its UI is comprised of a couple of other components:
    - [`igx-banner`](../banner.md) in order to render its contents
    - [`igx-button`](../button.md)s are rendered in the default template (for the `Done` and `Cancel` buttons).

In the below example, we will make use of those two components' styling options, [`button styling`](../button.md#styling) & [`banner-styling`](../banner.md#styling), to customize the experience of our IgxHierarchicalGrid's Row Editing.
We will also style the current cell's editor and background to make it more distinct. You can learn more about cell styling in the [Cell Styling section](cell-editing.md#styling).

### Import theme

The easiest way to style the Row Editing banner is to define styles in our `app`'s global style file (typically `styles.scss`).
The first thing we need to do is import the `themes/index` file - this gives us access to all the powerful tools of the Ignite UI for Angular Sass framework:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Once we've imported the themes file, we can create custom themes.

#### Define the theme

We can now define a custom [`banner theme`]({environment:sassApiUrl}/themes#function-banner-theme) that will affect our Row Editing background and make use of one of the predefined palettes namely `$purple-palette` :

```scss
$banner-theme: banner-theme(
  $banner-background: #e3e3e3,
  $banner-message-color: color($purple-palette, "secondary", 600)
);
```

Here we are using `my-banner-palette` in conjunction with [`igx-color`]({environment:sassApiUrl}/palettes#function-color) (exposed by the theme library) for generating our colors.

### Include the theme

All we have to do now is apply the theme with a Sass `@include` statement. We pass our newly defined `$banner-theme` through the [`tokens mixin`]({environment:sassApiUrl}/themes#mixin-tokens):

```scss
:host {
  @include tokens($banner-theme);
}
```

### Component styles

Since the Row Editing overlay makes use of a lot of other components' themes, styling it via the global styles can affect other parts of our application (e.g. banners, buttons, etc.). The best way to prevent that is to scope the banner theme to the style file of the specific component it's applied to.

>[!NOTE]
>If the component is using an [`Emulated`](../themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to penetrate this encapsulation using `::ng-deep` in order to style the grid Row Editing Overlay.

```scss
// custom.component.scss

:host {
  ::ng-deep {
    @include tokens($banner-theme);
  }
}
```

With the above syntax, our custom banner theme properly applies to the grid's Row Editing overlay.

### Custom Templates

To further customize our Row Editing overlay, we can pass a custom template so we can style the `Done` and `Cancel` buttons separately:

```html
<!-- in component.html -->
<igx-hierarchical-grid>
    <ng-template igxRowEditActions let-endRowEdit>
        <div class="custom-buttons">
            <button igxIconButton="flat" class="custom-button" igxRowEditTabStop (click)="endRowEdit(false)">
                <igx-icon>clear</igx-icon>
            </button>
            <button igxIconButton="flat" class="custom-button" igxRowEditTabStop (click)="endRowEdit(true)">
                <igx-icon>check</igx-icon>
            </button>
        </div>
    </ng-template>
</igx-hierarchical-grid>
```

After we've defined our custom buttons, we can make use of the [`flat-icon-button-theme`]({environment:sassApiUrl}/themes#function-flat-icon-button-theme) to style them. You can learn more about `igx-icon-button` styling in the [Icon Button Styling documentation](../icon-button.md#icon-button-styling). We can create a custom theme for our `Done` and `Cancel`:

```scss
// custom.component.scss
...

$button-theme: flat-icon-button-theme(
  $palette: $purple-palette
);

...
.custom-buttons {
  @include tokens($button-theme);
}
```

We scope our `@include` statement in `.custom-buttons` so that it is only applied to the `Done`and `Cancel` buttons.

### Demo

After styling the banner and buttons, we also define a custom style for [the cell in edit mode](cell-editing.md#styling). The result of all the combined styles can be seen below:





<code-view style="height:560px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-row-edit-style/" >
</code-view>






>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.

## Known Issues and Limitations

- When the grid has no `primaryKey` set and remote data scenarios are enabled (when paging, sorting, filtering, scrolling trigger requests to a remote server to retrieve the data to be displayed in the grid), a row will lose the following state after a data request completes:
  - Row Selection
  - Row Expand/collapse
  - Row Editing
  - Row Pinning

## API References

- [rowEditable]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowEditable)
- [onRowEditEnter]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#onRowEditEnter)
- [onRowEdit]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#onRowEdit)
- [rowEditDone]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowEditDone)
- [onRowEditCancel]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#onRowEditCancel)
- [endEdit]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#endEdit)
- [field]({environment:angularApiUrl}/classes/igxcolumncomponent.html#field)
- [editable]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable)
- [primaryKey]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#primaryKey)
- [IgxHierarchicalGridComponent]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)

## Additional Resources

<div class="divider--half"></div>

- [Build CRUD operations with igxGrid](../general/how-to/how-to-perform-crud.md)
- [Hierarchical Grid Overview](hierarchical-grid.md)
- [Hierarchical Grid Editing](editing.md)
- [Hierarchical Grid Transactions](batch-editing.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
