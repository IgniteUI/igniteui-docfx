@@if (igxName === 'IgxGrid') {
---
title: Angular Grid State Persistence | Ignite UI for Angular | Infragistics
_description: Easily achieve state persistence for the IgxGrid by using the API exposed by the IgxGridState directive.
_keywords: state persistence, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid State Persistence | Ignite UI for Angular | Infragistics
_description: Easily achieve state persistence for the IgxTreeGrid by using the API exposed by the IgxGridState directive.
_keywords: state persistence, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid State Persistence | Ignite UI for Angular | Infragistics
_description: Easily achieve state persistence for the IgxHierarchicalGrid by using the API exposed by the IgxGridState directive.
_keywords: state persistence, ignite ui for angular, infragistics
---
}

# @@igComponent State Persistence

Тhe igxGridState directive allows developers to easily save and restore the grid state. When the [`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) directive is applied on the grid, it exposes the [`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getstate) and [`setState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#setstate) methods that developers can use to achieve state persistence in any scenario.

## Supported Features
[`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) directive supports saving and restoring the state of the following features:

@@if (igxName !== 'IgxHierarchicalGrid') {

* `Sorting`
* `Filtering`
* `Advanced Filtering`
* `Paging`
* `Cell Selection`
* `Row Selection`
* `Column Selection`
* `Row Pinning`
* `Expansion`
* `GroupBy`
* `Columns`
    * Columns order
    * Column properties defined by the [`IColumnState`]({environment:angularApiUrl}/interfaces/icolumnstate.html) interface.
    * Columns templates and functions are restored using application level code, see [Restoring Column](state_persistence.md#restoring-columns) section.
}

@@if (igxName === 'IgxHierarchicalGrid') {
* `RowIslands`
    * saving/restoring features for all child grids down the hierarchy
* `Sorting`
* `Filtering`
* `Advanced Filtering`
* `Paging`
* `Cell Selection`
* `Row Selection`
* `Column Selection`
* `Row Pinning`
* `Expansion`
* `Columns`
    * Columns order
    * Column properties defined by the [`IColumnState`]({environment:angularApiUrl}/interfaces/icolumnstate.html) interface.
    * Columns templates and functions are restored using application level code, see [Restoring Column](state_persistence.md#restoring-columns) section.
}

> The [`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) directive does not take care of templates. Go to [Restoring Column](state_persistence.md#restoring-columns) section to see how to restore column templates.

## Usage

[`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getstate) - This method returns the grid state in a serialized JSON string, so developers can just take it and save it on any data storage (database, cloud, browser localStorage, etc). The method accepts first optional parameter `serialize`, which determines whether [`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getstate) will return an [`IGridState`]({environment:angularApiUrl}/classes/igridstate.html) object or a serialized JSON string.
The developer may choose to get only the state for a certain feature/features, by passing in the feature name, or an array with feature names as a second argument.
```typescript
// get all features` state in a serialized JSON string
const gridState = state.getState();

// get an `IGridState` object, containing all features original state objects, as returned by the grid public API
const gridState: IGridState = state.getState(false);

// get the sorting and filtering expressions
const sortingFilteringStates: IGridState = state.getState(false, ["sorting", "filtering"]);
```

[`setState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#setstate) - The [`setState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#setstate) method accepts the serialized JSON string or [`IGridState`]({environment:angularApiUrl}/classes/igridstate.html) object as argument and will restore the state of each feature found in the object/JSON string.

```typescript
state.setState(gridState);
state.setState(sortingFilteringStates)
```

`options` - The [`options`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#options) object implements the [`IGridStateOptions`]({environment:angularApiUrl}/classes/igridstateoptions.html) interface, i.e. for every key, which is the name of a certain feature, there is the boolean value indicating if this feature state will be tracked. [`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getstate) method will not put the state of these features in the returned value and [`setState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getstate) method will not restore state for it.

```typescript
public options =  { cellSelection: false; sorting: false; }
```
@@if (igxName === 'IgxGrid') {
```html
<igx-grid [igxGridState]="options"></igx-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid [igxGridState]="options"></igx-hierarchical-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [igxGridState]="options"></igx-tree-grid>
```
}

The simple to use single-point API's allows to achieve a full state persistence functionality in just a few lines of code. **Copy paste the code from below** - it will save the grid state in the browser `sessionStorage` object every time the user leaves the current page. Whenever the user returns to main page, the grid state will be restored. No more need to configure those complex advanced filtering and sorting expressions every time to get the data you want - do it once and have the code from below do the rest for your users:

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
      window.sessionStorage.setItem("grid1-state", state);
  }

  public restoreGridState() {
      const state = window.sessionStorage.getItem("grid1-state");
      this.state.setState(state);
  }
```

## Restoring columns

[`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) will not persist columns templates, column formatters, etc. by default (see [`limitations`](state_persistence.md#limitations)). Restoring any of these can be achieved with code on application level. Let's show how to do this for templated columns:

1. Define a template reference variable (in the example below it is `#activeTemplate`) and assign an event handler for the [`onColumnInit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumninit) event:
@@if (igxName === 'IgxGrid') {
```html
<igx-grid id="grid" #grid igxGridState (onColumnInit)="onColumnInit($event)">
    <igx-column [field]="'IsActive'" header="IsActive">
        <ng-template igxCell #activeTemplate let-column let-val="val">
            <igx-checkbox [checked]="val"></igx-checkbox>
        </ng-template>
    </igx-column>
    ...
</igx-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid id="grid" #grid igxGridState (onColumnInit)="onColumnInit($event)">
    <igx-column [field]="'IsActive'" header="IsActive">
        <ng-template igxCell #activeTemplate let-column let-val="val">
            <igx-checkbox [checked]="val"></igx-checkbox>
        </ng-template>
    </igx-column>
    ...
</igx-hierarchical-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid id="grid" #grid igxGridState (onColumnInit)="onColumnInit($event)">
    <igx-column [field]="'IsActive'" header="IsActive">
        <ng-template igxCell #activeTemplate let-column let-val="val">
            <igx-checkbox [checked]="val"></igx-checkbox>
        </ng-template>
    </igx-column>
    ...
</igx-tree-grid>
```
}
2. Query the template view in the component using @ViewChild or @ViewChildren decorator. In the [`onColumnInit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumninit) event handler, assign the template to the column `bodyTemplate` property:

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
## Restoring Child Grids
Saving / Restoring state for the child grids is controlled by the [`rowIslands`]({environment:angularApiUrl}/interfaces/igxgridstateoptions.html#rowislands) property and is enabled by default. [`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) will use the same options for saving/restoring features both for the root grid and all child grids down the hierarchy. For example, if we pass the following options:

``` html
<!-- public options = {selection: false, sorting: false, rowIslands: true} -->
<igx-grid [igxGridState]="options"></igx-grid>
```
Then the `getState` API will return the state for all grids (root grid and child grids) features excluding `selection` and `sorting`. If later on the developer wants to restore only the `filtering` state for all grids, use:
```typescript
this.state.setState(state, ['filtering', 'rowiIslands']);
```
}

## Demo

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:763px">
    <iframe id="grid-state" src='{environment:demosBaseUrl}/grid/grid-state' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-state" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-state" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:1010px">
    <iframe id="treegrid-state" src='{environment:demosBaseUrl}/tree-grid/tree-grid-state' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-state" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-state" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:715px">
    <iframe id="hierarchical-grid-state" src='{environment:demosBaseUrl}/hierarchical-grid/hGrid-state' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-state" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-state" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}


## Limitations
* @@if (igxName === 'IgxHierarchicalGrid') {
When restoring all grid features at once (using `setState` API with no parameters), then column properties for the root grid might be resetted to default. If this happens, restore the columns or column selection feature separately after that:
```typescript
state.setState(gridState);
state.setState(gridState.columns);
state.setState(gridState.columnSelection);
```
}
* [`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getstate) method uses JSON.stringify() method to convert the original objects to a JSON string. JSON.stringify() does not support Functions, thats why the [`IgxGridState`] directive will ignore the columns [`formatter`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#formatter), [`filters`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filters), [`summaries`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#summaries), [`sortStrategy`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortstrategy), [`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellclasses), [`cellStyles`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellstyles), [`headerTemplate`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#headertemplate) and [`bodyTemplate`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#bodytemplate) properties.
<div class="divider--half"></div>


## API References

@@if (igxName === 'IgxGrid') {
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridStateDirective]({environment:angularApiUrl}/classes/igxgridstatedirective.html)
}
@@if (igxName === 'IgxHierarchicalGrid') {
* [IgxHierarchicalGridComponent]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
* [IgxGridStateDirective]({environment:angularApiUrl}/classes/igxgridstatedirective.html)
}
@@if (igxName === 'IgxTreeGrid') {
* [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
* [IgxGridStateDirective]({environment:angularApiUrl}/classes/igxgridstatedirective.html)
}

## Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Selection](selection.md)