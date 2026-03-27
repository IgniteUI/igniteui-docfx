---
title: Angular Pivot Grid State Persistence - Ignite UI for Angular
_description: Easily save and restore the grid state, using our comprehensive Ignite UI toolset for Angular. Learn how to restore configuration, explore usage, and see demos!
_keywords: state persistence, ignite ui for angular, infragistics
_license: commercial
_canonicalLink: grid/state-persistence
---



# Angular Pivot Grid State Persistence

Тhe igxGridState directive allows developers to easily save and restore the grid state. When the [`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) directive is applied on the grid, it exposes the [`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getState) and [`setState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#setState) methods that developers can use to achieve state persistence in any scenario.

## Supported Features

[`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) directive supports saving and restoring the state of the following features:









- `Sorting`
- `Filtering`
- `Cell Selection`
- `Row Selection`
- `Column Selection`
- `Expansion`
- `Pivot Configuration`
  - Pivot Configuration properties defined by the [`IPivotConfiguration`]({environment:angularApiUrl}/interfaces/ipivotconfiguration.html) interface.
  - Pivot Dimension and Value functions are restored using application level code, see [Restoring Pivot Configuration](state-persistence.md#restoring-pivot-configuration) section.
  - Pivot Row and Column strategies are also restored using application level code, see [Restoring Pivot Strategies](state-persistence.md#restoring-pivot-strategies) section.



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
<igx-pivot-grid [igxGridState]="options"></igx-pivot-grid>
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





## Restoring Pivot Configuration

[`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) will not persist pivot dimension functions, value formatters, etc. by default (see [`limitations`](state-persistence.md#limitations)). Restoring any of these can be achieved with code on application level. The `IgxPivotGrid` exposes two events which can be used to set back any custom functions you have in the configuration: [`dimensionInit`]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#dimensionInit) and [`valueInit`]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#valueInit). Let's show how to do this:

- Assign event handlers for the `dimensionInit` and `valueInit` events:

```html
<igx-pivot-grid #grid1 [data]="data" [pivotConfiguration]="pivotConfig" [igxGridState]="options"
    (valueInit)='onValueInit($event)' (dimensionInit)='onDimensionInit($event)'>
</igx-pivot-grid>
```

> The [`dimensionInit`]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#dimensionInit) and [`valueInit`]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#valueInit) events are emitted for each value and dimension defined in the [`pivotConfiguration`]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#pivotConfiguration) property.

- In the `valueInit` event handler set all custom aggregators, formatters and styles:

```typescript
public onValueInit(value: IPivotValue) {
    // Needed only for custom aggregators, formatter or styles.
    if (value.member === 'AmountofSale') {
        value.aggregate.aggregator = IgxTotalSaleAggregate.totalSale;
        value.aggregateList?.forEach((aggr: IPivotAggregator) => {
            switch (aggr.key) {
                case 'SUM':
                    aggr.aggregator = IgxTotalSaleAggregate.totalSale;
                    break;
                case 'MIN':
                    aggr.aggregator = IgxTotalSaleAggregate.totalMin;
                    break;
                case 'MAX':
                    aggr.aggregator = IgxTotalSaleAggregate.totalMax;
                    break;
            }
        });
    } else if (value.member === 'Value') {
        value.formatter = (value) => value ? '$' + parseFloat(value).toFixed(3) : undefined;
        value.styles.upFontValue = (rowData: any, columnKey: any): boolean => parseFloat(rowData.aggregationValues.get(columnKey.field)) > 150
        value.styles.downFontValue = (rowData: any, columnKey: any): boolean => parseFloat(rowData.aggregationValues.get(columnKey.field)) <= 150;
    }
}
```

- In the `dimensionInit` event handler set all custom `memberFunction` implementations:

```typescript
public onDimensionInit(dim: IPivotDimension) {
    switch (dim.memberName) {
        case 'AllProducts':
            dim.memberFunction = () => 'All Products';
            break;
        case 'ProductCategory':
            dim.memberFunction = (data) => data.Product.Name;
            break;
        case 'City':
            dim.memberFunction = (data) => data.Seller.City;
            break;
        case 'SellerName':
            dim.memberFunction = (data) => data.Seller.Name;
            break;
    }
}
```













<code-view style="height:820px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/pivot-grid/pivot-grid-state-persistence/" >
</code-view>





## Restoring Pivot Strategies

[`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) will not persist neither remote pivot operations nor custom dimension strategies (For further information see [Pivot Grid Remote Operations](pivot-grid-custom.md) sample) by default (see [`limitations`](state-persistence.md#limitations)). Restoring any of these can be achieved with code on application level. The `IgxGridState` exposes an event called [`stateParsed`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#stateParsed) which can be used to additionally modify the grid state before it gets applied. Let's show how to do this:

> [`stateParsed`]({environment:angularApiUrl}/classes/igxgridstatedirective) is only emitted when we are using [`setState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#setState) with string argument.

- Set custom sorting strategy and custom pivot column and row dimension strategies:

```html
<igx-pivot-grid #grid [data]="data" [pivotConfiguration]="pivotConfigHierarchy" [defaultExpandState]='true'
    [igxGridState]="options" [sortStrategy]="customStrategy" [pivotUI]='{ showConfiguration: false }' [superCompactMode]="true" [height]="'500px'">
</igx-pivot-grid>
```

```typescript
@ViewChild(IgxGridStateDirective, { static: true })
public state!: IgxGridStateDirective;

public customStrategy = NoopSortingStrategy.instance();
public options: IGridStateOptions = {...};
public pivotConfigHierarchy: IPivotConfiguration = {
    columnStrategy: NoopPivotDimensionsStrategy.instance(),
    rowStrategy: NoopPivotDimensionsStrategy.instance(),
    columns: [...],
    rows: [...],
    values: [...],
    filters: [...]
};
```

- Restoring the state from the `sessionStorage` and applying the custom strategies looks like the following:

```typescript
public restoreState() {
    const state = window.sessionStorage.getItem('grid-state');
    this.state.stateParsed.pipe(take(1)).subscribe(parsedState => {
        parsedState.sorting.forEach(x => x.strategy = NoopSortingStrategy.instance());
        parsedState.pivotConfiguration.rowStrategy = NoopPivotDimensionsStrategy.instance();
        parsedState.pivotConfiguration.columnStrategy = NoopPivotDimensionsStrategy.instance();
    });
    this.state.setState(state as string);
}
```

<code-view style="height: 580px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/pivot-grid/pivot-grid-noop-persistence/" alt="Angular Pivot Noop Grid State Persistence Example">
</code-view>





## Limitations




- [`getState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html#getState) method uses JSON.stringify() method to convert the original objects to a JSON string. JSON.stringify() does not support Functions, thats why the [`IgxGridState`]({environment:angularApiUrl}/classes/igxgridstatedirective.html) directive will ignore the pivot dimension [`memberFunction`]({environment:angularApiUrl}/interfaces/IPivotDimension.html#memberFunction), pivot values [`member`]({environment:angularApiUrl}/interfaces/IPivotValue.html#member), [`formatter`]({environment:angularApiUrl}/interfaces/IPivotValue.html#formatter), custom [`aggregate`]({environment:angularApiUrl}/interfaces/IPivotValue.html#aggregate) functions,
 [`styles`]({environment:angularApiUrl}/interfaces/IPivotValue.html#styles) and pivot configuration strategies: [`columnStrategy`]({environment:angularApiUrl}/interfaces/ipivotconfiguration.html#columnStrategy) and [`rowStrategy`]({environment:angularApiUrl}/interfaces/ipivotconfiguration.html#rowStrategy).


<div class="divider--half"></div>


## API References





- [IgxPivotGridComponent]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html)
- [IgxGridStateDirective]({environment:angularApiUrl}/classes/igxgridstatedirective.html)


## Additional Resources

<div class="divider--half"></div>




- [Pivot Grid Overview](pivot-grid.md)
- [Pivot Grid Remote Operations](pivot-grid-custom.md)
- [Pivot Grid Features](pivot-grid-features.md)

