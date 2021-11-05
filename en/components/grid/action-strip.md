---
title: Angular Grid ActionStrip | Ignite UI for Angular | infragistics 
_description: Check how easy it is to use ActionStrip in Grid component to achieve row actions
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular ActionStrip components, Angular ActionStrip directives, Angular ActionStrip controls
---

# Grid ActionStrip

The Grid component in Ignite UI for Angular provides the ability to use `ActionStrip` component to achieve row actions. 
By default, we are providing two grid action components:

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

You can use the them or create custom component and then add it to the `ActionStrip`. If you want to use `ActionStrip` to achieve a Gmail scenario with row actions such as `delete`, `edit` and etc. You can simply create button component with `igx-icon`, add click event to it and insert it into the `igx-action-strip` component.

```html
 <igx-action-strip #actionstrip>
    <igx-grid-pinning-actions></igx-grid-pinning-actions>
        <button title="Edit" igxButton="icon" igxRipple (click)='startEdit(actionstrip.context)'>
            <igx-icon>edit</igx-icon>
        </button>
        <button title="Delete" igxButton="icon" igxRipple *ngIf='!isDeleted(actionstrip.context)' (click)='actionstrip.context.delete()'>
            <igx-icon>delete</igx-icon>
        </button>
    </igx-action-strip>
</igx-grid>
```

<code-view style="height: 600px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-action-strip" >
</code-view>


## API References

For more detailed information regarding the Action Strip API, refer to the following links:
* [`IgxActionStripComponent API`]({environment:angularApiUrl}/classes/igxactionstripcomponent.html)

Additional components and/or directives that can be used within the Action Strip:

* [`IgxGridActionsBaseDirective `]({environment:angularApiUrl}/classes/igxgridactionsbasedirective.html)
* [`IgxGridPinningActionsComponent`]({environment:angularApiUrl}/classes/igxpinningactionscomponent.html)
* [`IgxGridEditingActionsComponent`]({environment:angularApiUrl}/classes/igxeditingactionscomponent.html)
* [`IgxDividerDirective`]({environment:angularApiUrl}/classes/igxdividerdirective.html)