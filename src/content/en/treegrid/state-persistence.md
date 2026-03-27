---
title: Angular Tree Grid State Persistence - Ignite UI for Angular
_description: Easily save and restore the grid state, using our comprehensive Ignite UI toolset for Angular. Learn how to restore columns, explore usage, and see demos!
_keywords: state persistence, ignite ui for angular, infragistics
_license: commercial
_canonicalLink: grid/state-persistence
---






# Angular Tree Grid State Persistence

Тhe igxGridState directive allows developers to easily save and restore the grid state. When the [`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) directive is applied on the grid, it exposes the [`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getState) and [`setState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#setState) methods that developers can use to achieve state persistence in any scenario.

## Supported Features

[`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) directive supports saving and restoring the state of the following features:





- `Sorting`
- `Filtering`
- `Advanced Filtering`
- `Paging`
- `Cell Selection`
- `Row Selection`
- `Column Selection`
- `Row Pinning`
- `Expansion`
- `Columns`
  - **NEW**: Multi column headers are now supported out of the box
  - Columns order
  - Column properties defined by the [`IColumnState`]({environment:angularApiUrl}/interfaces/icolumnstate.html) interface.
  - Columns templates and functions are restored using application level code, see [Restoring Column](state-persistence.md#restoring-columns) section.







>[!NOTE]
> The [`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) directive does not take care of templates. Go to [Restoring Column](state-persistence.md#restoring-columns) section to see how to restore column templates.

>[!NOTE]
> The `Row Selection`  feature requires the [`primaryKey`]({environment:angularApiUrl}/classes/IgxGridComponent.html#primaryKey) property to be set, so it can be stored/restored correctly.

## Usage

[`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getState) - This method returns the grid state in a serialized JSON string, so developers can just take it and save it on any data storage (database, cloud, browser localStorage, etc). The method accepts first optional parameter `serialize`, which determines whether [`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getState) will return an [`IGridState`]({environment:angularApiUrl}/interfaces/igridstate.html) object or a serialized JSON string.
The developer may choose to get only the state for a certain feature/features, by passing in the feature name, or an array with feature names as a second argument.

```typescript
// get all features` state in a serialized JSON string
const gridState = state.getState();

// get an `IGridState` object, containing all features original state objects, as returned by the grid public API
const gridState: IGridState = state.getState(false);

// get the sorting and filtering expressions
const sortingFilteringStates: IGridState = state.getState(false, ['sorting', 'filtering']);
```

[`setState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#setState) - The [`setState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#setState) method accepts the serialized JSON string or [`IGridState`]({environment:angularApiUrl}/interfaces/igridstate.html) object as argument and will restore the state of each feature found in the object/JSON string.

```typescript
state.setState(gridState);
state.setState(sortingFilteringStates)
```

`options` - The [`options`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#options) object implements the [`IGridStateOptions`]({environment:angularApiUrl}/interfaces/igridstateoptions.html) interface, i.e. for every key, which is the name of a certain feature, there is the boolean value indicating if this feature state will be tracked. [`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getState) method will not put the state of these features in the returned value and [`setState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#setState) method will not restore state for it.

```typescript
public options =  { cellSelection: false; sorting: false; }
```





```html
<igx-tree-grid [igxGridState]="options"></igx-tree-grid>
```




The simple to use single-point API's allows to achieve a full state persistence functionality in just a few lines of code. **Copy paste the code from below** - it will save the grid state in the browser `sessionStorage` object every time the user leaves the current page. Whenever the user returns to main page, the grid state will be restored. No more need to configure those complex advanced filtering and sorting expressions every time to get the data you want - do it once and have the code from below do the rest for your users:

```typescript
// app.component.ts
@ViewChild(IgxGridStateDirective, { static: true })
public state!: IgxGridStateDirective;

public ngOnInit() {
    this.router.events.pipe(take(1)).subscribe((event: NavigationStart) => {
        this.saveGridState();
    });
}

public ngAfterViewInit() {
    this.restoreGridState();
}

public saveGridState() {
    const state = this.state.getState() as string;
    window.sessionStorage.setItem('grid1-state', state);
}

public restoreGridState() {
    const state = window.sessionStorage.getItem('grid1-state');
    this.state.setState(state);
}
```



## Restoring columns

When possible the state directive will reuses the columns that already exists on the grid when restoring the state, instead of creating new column instances. The only scenario where a new instance will be created is when the column (or its children in case of a column groups) have no `field` property so there's no way to uniquely identify the matching column and re-use it.

For such scenarios, the following [`limitations`](state-persistence.md#limitations) are imposed. In that case restoring complex objects can be achieved with code on application level. Let's show how to do this for templated columns:

1. Define a template reference variable (in the example below it is `#activeTemplate`) and assign an event handler for the [`columnInit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columnInit) event:




```html
<igx-tree-grid id="grid" #grid igxGridState (columnInit)="onColumnInit($event)">
    <igx-column [field]="'IsActive'" header="IsActive">
        <ng-template igxCell #activeTemplate let-column let-val="val">
            <igx-checkbox [checked]="val"></igx-checkbox>
        </ng-template>
    </igx-column>
    ...
</igx-tree-grid>
```


2. Query the template view in the component using @ViewChild or @ViewChildren decorator. In the [`columnInit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columnInit) event handler, assign the template to the column `bodyTemplate` property:

```typescript
@ViewChild('activeTemplate', { static: true }) public activeTemplate: TemplateRef<any>;
public onColumnInit(column: IgxColumnComponent) {
    if (column.field === 'IsActive') {
        column.bodyTemplate = this.activeTemplate;
        column.summaries = MySummary;
        column.filters = IgxNumberFilteringOperand.instance();
    }
}
```











## Demo

<code-view style="height:1010px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-state/" >
</code-view>











## Limitations




- [`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getstate) method uses JSON.stringify() method to convert the original objects to a JSON string. JSON.stringify() does not support Functions, thats why the [`IgxGridState`] directive will ignore the columns [`formatter`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#formatter), [`filters`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filters), [`summaries`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#summaries), [`sortStrategy`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortstrategy), [`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellClasses), [`cellStyles`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellstyles), [`headerTemplate`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#headerTemplate) and [`bodyTemplate`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#bodyTemplate) properties.



<div class="divider--half"></div>


## API References




- [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
- [IgxGridStateDirective]({environment:angularApiUrl}/classes/igxgridstatedirective.html)



## Additional Resources

<div class="divider--half"></div>




- [Tree Grid overview](tree-grid.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Selection](selection.md)


