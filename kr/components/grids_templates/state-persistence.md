@@if (igxName === 'IgxGrid') {
---
title: Angular Grid State Persistence | Ignite UI for Angular | Infragistics
_description: Easily achieve state persistence for the IgxGrid by using the API exposed by the IgxGridState directive.
_keywords: state persistence, ignite ui for angular, infragistics
---
}
<!-- @@if (igxName === 'IgxTreeGrid') {
---
title: Angular TreeGrid Editing | Data Manipulation | Ignite UI for Angular
_description: Easily achieve state persistence for the IgxTreeGrid by using the API exposed by the IgxGridState directive.
_keywords: state persistence, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular HierarchicalGrid Editing | Data Manipulation | Ignite UI for Angular
_description: Easily achieve state persistence for the IgxTreeGrid by using the API exposed by the IgxGridState directive.
_keywords: state persistence, ignite ui for angular, infragistics
---
} -->

### @@igComponent State Persistence

Ignite UI for Angular @@igComponent component provides the [`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) directive which allows developers to easily save and restore the grid state. When the [`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) directive is applied on the grid, it exposes the [`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getstate) and [`setState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#setstate) method, that developers can use to achieve state persistence in any scenario.

#### API

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


The usefullnes of thеse simple to use single-point API's allows you to achieve a full state persistence functionality in just few lines of code. **Copy paste the code from below** - it will save the grid state in the browser `sessionStorage` object every time the user leaves the current page. Whenever the user returns to this page, the grid is restored the same state that the user has set. No more need to configure those complex advanced filtering and sorting expressions every time to get the data you want - do it once and have the code from below do the rest for your users:

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

#### Demo

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:960px">
    <iframe id="grid-state" src='{environment:demosBaseUrl}/grid/grid-state' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-state" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

#### Limitations

[`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getstate) method uses JSON.stringify() method to convert the original objects to a JSON string. However, this does not support Functions, thats why the [`IgxGridState`] directive will ignore the columns [`formatter`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#formatter), [`filters`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filters), [`summaries`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#summaries), [`sortStrategy`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortstrategy), [`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellclasses) and [`cellStyles`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellstyles) properties. It is up to the developer to keep track and restore those on application level. It is recommended to set these in the [`onColumnInit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumninit) event:

```typescript
// app.component.ts
public initColumns(column: IgxColumnComponent) {
    if (column.field === 'Age') {
        column.summaries = MySummary;
        column.filters = IgxNumberFilteringOperand.instance();
    }
}
```

<!-- @@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:950px">
    <iframe id="treegrid-state" src='{environment:demosBaseUrl}/tree-grid/treegrid-state' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-state" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:660px">
    <iframe id="hierarchical-grid-state" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-state' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-state" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
} -->
<div class="divider--half"></div>


### API References

* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridStateDirective]({environment:angularApiUrl}/classes/igxgridstatedirective.html)


### Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Selection](selection.md)