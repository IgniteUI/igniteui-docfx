---
title:  Row actions in Angular Data Grid - Ignite UI for Angular 
_description: The grid component in Ignite UI for Angular provides the ability to use ActionStrip and utilize CRUD for row/cell components and row pinning.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular ActionStrip components, Angular ActionStrip directives, Angular ActionStrip controls
---
@@if (igxName === 'IgxGrid') {
# Row Actions in Angular Data Grid

The grid component in Ignite UI for Angular provides the ability to use [ActionStrip](../action-strip.md) and utilize CRUD for row/cell components and row pinning. The Action Strip component can host predefined UI controls for these operations.
}
@@if (igxName === 'IgxTreeGrid') {
# Row Actions in Angular Tree Grid

The tree grid component in Ignite UI for Angular provides the ability to use [ActionStrip](../action-strip.md) and utilize CRUD for row/cell components and row pinning. The Action Strip component can host predefined UI controls for these operations.
}
@@if (igxName === 'IgxHierarchicalGrid') {
# Row Actions in Angular Hierarchical Grid

The hierarchical grid component in Ignite UI for Angular provides the ability to use [ActionStrip](../action-strip.md) and utilize CRUD for row/cell components and row pinning. The Action Strip component can host predefined UI controls for these operations.
}

## Usage

The first step is to import the **IgxActionStripModule** in our **app.module.ts** file:

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
```

The predefined `actions` UI components are:
- [`IgxGridEditingActionsComponent`]({environment:angularApiUrl}/classes/igxgrideditingactionscomponent.html) - includes functionality and UI specifically designed for the grid editing. It allows you to quickly toggle edit mode for cells or rows, depending on the [`rowEditable`]({environment:angularApiUrl}/classes/IgxGridComponent.html#rowEditable) option and row deletion of the grid.

- [`IgxGridPinningActionsComponent`]({environment:angularApiUrl}/classes/igxgridpinningactionscomponent.html) - includes functionality and UI specifically designed for the grid row pinning. It allows you to quickly pin rows and navigate between pinned rows and their disabled counterparts.

They are added inside the `<igx-action-strip>` and this is all needed to have an Action Strip providing default interactions.

@@if (igxName === 'IgxGrid') {
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
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [data]="data" [rowEditable]="true" [primaryKey]="'ID'">
    <igx-column *ngFor="let c of columns" [field]="c.field">
    </igx-column>

    <igx-action-strip #actionStrip>
        <igx-grid-pinning-actions></igx-grid-pinning-actions>
        <igx-grid-editing-actions></igx-grid-editing-actions>
    </igx-action-strip>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid [data]="data" [rowEditable]="true" [primaryKey]="'ID'">
    <igx-column *ngFor="let c of columns" [field]="c.field">
    </igx-column>

    <igx-action-strip #actionStrip>
        <igx-grid-pinning-actions></igx-grid-pinning-actions>
        <igx-grid-editing-actions></igx-grid-editing-actions>
    </igx-action-strip>
</igx-hierarchical-grid>
```
}

>[!NOTE]
> When `IgxActionStripComponent` is a child component of the grid, hovering a row will automatically show the UI.

## Custom implementation

These components expose templates giving flexibility for customization. For instance, if we would like to use the `ActionStrip` for a Gmail scenario with row actions such as `delete`, `edit` and etc. You can simply create button component with `igx-icon`, add click event to it and insert it into the `igx-action-strip` component.

```html
<igx-grid>
    <igx-action-strip #actionstrip>
        <igx-grid-pinning-actions></igx-grid-pinning-actions>
        <button title="Edit" igxIconButton="flat" igxRipple (click)='startEdit(actionstrip.context)'>
            <igx-icon>edit</igx-icon>
        </button>
        <button title="Delete" igxIconButton="flat" igxRipple *ngIf='!isDeleted(actionstrip.context)' (click)='actionstrip.context.delete()'>
            <igx-icon>delete</igx-icon>
        </button>
    </igx-action-strip>
</igx-grid>
```

@@if (igxName === 'IgxGrid') {
<code-view style="height: 600px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-action-strip" >
</code-view>
}
@@if (igxName === 'IgxTreeGrid') {
<code-view style="height: 600px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-action-strip" >
</code-view>
}

@@if (igxName === 'IgxHierarchicalGrid') {
<code-view style="height: 600px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hGrid-action-strip" >
</code-view>
}

>[!NOTE]
> The predefined actions inherit [`IgxGridActionsBaseDirective`]({environment:infragisticsBaseUrl}/classes/igxgridactionsbasedirective.html) and when creating a custom grid action component, it should also inherit `IgxGridActionsBaseDirective`.

## API References

For more detailed information regarding the Action Strip API, refer to the following links:
* [`IgxActionStripComponent API`]({environment:angularApiUrl}/classes/igxactionstripcomponent.html)

Additional components and/or directives that can be used within the Action Strip:

* [`IgxGridActionsBaseDirective `]({environment:angularApiUrl}/classes/igxgridactionsbasedirective.html)
* [`IgxGridPinningActionsComponent`]({environment:angularApiUrl}/classes/igxgridpinningactionscomponent.html)
* [`IgxGridEditingActionsComponent`]({environment:angularApiUrl}/classes/igxgrideditingactionscomponent.html)
* [`IgxDividerDirective`]({environment:angularApiUrl}/classes/igxdividerdirective.html)