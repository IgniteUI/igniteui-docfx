@@if (igxName === 'IgxGrid') {
---
title: Angular Grid State Persistence | Ignite UI for Angular | Infragistics
_description: Easily achieve state persistence for the IgxGrid by using the API exposed by the IgxGridState directive.
_keywords: state persistence, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid State Persistence | Ignite UI for Angular | Infragistics
_description: Easily achieve state persistence for the IgxTreeGrid by using the API exposed by the IgxGridState directive.
_keywords: state persistence, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid State Persistence | Ignite UI for Angular | Infragistics
_description: Easily achieve state persistence for the IgxHierarchicalGrid by using the API exposed by the IgxGridState directive.
_keywords: state persistence, ignite ui for angular, infragistics
---
}

### @@igComponent State Persistence

Ignite UI for Angular @@igComponent component provides the [`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) directive which allows developers to easily save and restore the grid state. When the [`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) directive is applied on the grid, it exposes the [`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getstate) and [`setState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#setstate) method, that developers can use to achieve state persistence in any scenario.

## Features Supported
[`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) directive supports saving and restoring the state of the following features: `Sorting`, `Filtering`, Advanced Filtering, Paging, Cell Selection, Row Selection, Column Selection, GroupBy (only for `IgxGrid`), Row Pinning, Expansion and all column properties defined by the [`IColumnState`]({environment:angularApiUrl}/interfaces/icolumnstate.html) interface.


> The [`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) directive does not take care of templates. If a developer needs to restore templates (or formatter functions let's say), those templates can be set in the onColumnInit event. The dev needs to query those templates using ViewChild or ViewChildren:

#### Usage

[`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getstate) - This method returns the grid state in a serialized JSON string, the easisest way to enable developers just take it and save it on any data storage (database, cloud, etc). Once the developer needs to restore this state, just pass it back to the [`setState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#setstate) method. The first optional method parameter is `serialize`, which determines whether [`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getstate) will return the original objects, or the serialized JSOn string.
The developer may choose to get only the state for a certain feature/features, by passing in the feature name, or an array with feature names as a second argument.
```typescript
// get all features` state in a serialized JSON string
const gridState = this.state.getState();

// get all features original state objects, as returned by the grid public API
const gridState = this.state.getState(false);

// get the sorting and filtering expressions
const sortingFilteringStates = this.state.getState(false, ["sorting", "filtering"]);
```

[`setState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#setstate) - The [`setState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#setstate) method will accept the serialized JSON string or an object implementing the [`IGridState`]({environment:angularApiUrl}/classes/igridstate.html) interface as argument and will restore the state of each feature found in the object/JSON string. Internally the IgxGridState directive works with the public grid API, so it does not abstract away anything that cannot be done from the application itself. Instead, if wraps the API for getting/setting any features properties/states in an easy to use single API.

```typescript
public restoreGridState(gridState) {
    this.state.setState(gridState);
}

public restoreSortingFiltering(sortingFilteringStates: IGridState) {
    this.state.setState(sortingFilteringStates)
}
```

`options` - The [`options`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#options) object is an object implementing the [`IGridStateOptions`]({environment:angularApiUrl}/classes/igridstateoptions.html) interface, i.e. for every key, which is the name of a certain feature, there is the boolean value indicating if this feature state will be tracked. If a developer has excluded certain features, then the object retrieved the [`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getstate) method will not contain those features' state.

```typescript
public options =  { cellSelection: false; sorting: false; }
```
```html
<igx-grid [IgxGridState]="options"></igx-grid>
```


Thеse simple to use single-point API's allows to achieve a full state persistence functionality in just few lines of code. **Copy paste the code from below** - it will save the grid state in the browser `sessionStorage` object every time the user leaves the current page. Whenever the user returns to this page, the grid is restored the same state that the user has set. No more need to configure those complex advanced filtering and sorting expressions every time to get the data you want - do it once and have the code from below do the rest for your users:

```typescript
  // app.component.ts
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
      window.localStorage.setItem("grid1-state", state);
  }

  public restoreGridState() {
      const state = window.localStorage.getItem("grid1-state");
      this.state.setState(state);
  }
```
. Depending on the scenario, the state can be saved to the browser `localStorage` or `sessionStorage` object, or saved in a database, cloud, passed on to a service, etc.

### Restoring columns

Due to the [`limitations`](state_persistence.md#limitations), the [`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) will not persist columns templates, column formatters, etc. on restoring. If any of these need to be restored too, it can be achieved with code on application level. Let's show how to do this for templated columns:

1. Define a template reference variable (in the example below it is `#activeTemplate`) and assign an event handler for the [`onColumnInit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumninit) event:
```html
<igx-grid id="grid" #grid igxGridState (onColumnInit)="onColumnInit($event)">
    <igx-column [field]="'IsActive'" header="IsActive">
        <ng-template igxCell #activeTemplate let-column let-val="val">
            <igx-checkbox [checked]="val">
            </igx-checkbox>
        </ng-template>
    </igx-column>
    ...
</igx-grid>
```

2. Query the template view in the component using @ViewChild or @ViewChildren decorator. In the [`onColumnInit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumninit) event handler manually assign the template to the column `bodyTemplate` property:
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

@@if (igxName === 'IgxHierarchicalGrid') {
### Restoring Child Grids
Saving state for the child grids is controlled by the ['inheritance']({environment:angularApiUrl}/interfaces/igxgridstateoptions.html#inheritance) property and is enabled by default.

> Note: [`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) will use the same options for saving/restoring for the root grid and all child grids down  the hierarchy. For example, if we pass the following options:
``` html
<!-- public options = {selection: false, sorting: false, inheritance: true} -->
<igx-grid [igxGridState]="options"></igx-grid>
```
Then the `getState` API will return the state for all grids (root grid and child grids) features excluding `selection` and `sorting`. If later on the developer wants to restore only the `filtering` state for all grids, use:
```typescript
this.state.setState(state, ['filtering', 'inheritance']);
```
}

#### Demo

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:960px">
    <iframe id="grid-state" src='{environment:demosBaseUrl}/grid/grid-state' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-state" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:960px">
    <iframe id="grid-state" src='{environment:demosBaseUrl}/grid/grid-state' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hGrid-state" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}


@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:960px">
    <iframe id="grid-state" src='{environment:demosBaseUrl}/grid/tree-grid-state' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-state" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}


#### Limitations
@@if (igxName === 'IgxHierarchicalGrid') {
When restoring all grid features at once (using `setState` API with no parameters), then column properties for the root grid will be resetted to default. For example, if there is column selection in the root grid, it will be resetted after columns.
}
[`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getstate) method uses JSON.stringify() method to convert the original objects to a JSON string. However, this does not support Functions, thats why the [`IgxGridState`] directive will ignore the columns [`formatter`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#formatter), [`filters`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filters), [`summaries`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#summaries), [`sortStrategy`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortstrategy), [`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellclasses), [`cellStyles`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellstyles), [`headerTemplate`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#headertemplate) and [`bodyTemplate`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#bodytemplate) properties.
<div class="divider--half"></div>



### API References

@@if (igxName === 'IgxGrid') {
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
}
@@if (igxName === 'IgxHierarchicalGrid') {
* [IgxHierarchicalGridComponent]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
}
@@if (igxName === 'IgxTreeGrid') {
* [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
}
* [IgxGridStateDirective]({environment:angularApiUrl}/classes/igxgridstatedirective.html)

### Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Selection](selection.md)