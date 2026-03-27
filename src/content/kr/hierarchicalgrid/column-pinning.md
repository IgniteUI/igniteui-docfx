---
title: Angular Hierarchical Grid Column Pinning | Lock Column | Ignite UI for Angular | Infragistics
_description: Start to use the Pinning feature of the Ignite UI for Angular table in order to lock column or change column order with rich and easy to use API
_keywords: lock column, ignite ui for angular, infragistics 
---


### Hierarchical Grid Column Pinning 
A column or multiple columns can be pinned to the left-hand side of the Angular UI Grid. **Column Pinning** in Ignite UI for Angular allows the end users to lock column in a particular column order, this will allow them to see it while horizontally scrolling the Hierarchical Grid. The Material UI Grid has a built-in column pinning UI, which can be used through the Hierarchical Grid's toolbar to change the pin state of the columns. In addition, you can define a custom UI and change the pin state of the columns via the Column Pinning API.

#### 데모





<code-view style="height:510px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-pinning/" >
</code-view>



#### 열 핀 고정 API

핀 고정된 영역이 Hierarchical Grid 자체보다 넓지 않는 한 각 열을 핀 고정할 수 있습니다. 열 핀 고정은 [`igx-column`]({environment:angularApiUrl}/classes/igxcolumncomponent.html)의 핀 고정된 입력을 통해 제어됩니다. 핀 고정된 열은 항상 Hierarchical Grid의 왼쪽에 렌더링되고 Hierarchical Grid 자체의 핀 고정되어 있지 않은 열의 수평 스크롤로 고정됩니다.





```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'800px'" #hierarchicalGrid>
    <igx-column [field]="Artist" [width]="200px" [pinned]="true"></igx-column>
    <igx-column [field]="Debut" [width]="200px"></igx-column>
</igx-hierarchical-grid>
```


Hierarchical Grid의 [`IgxHierarchicalGridComponent`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)의 [`pinColumn`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#pincolumn) 또는 [`unpinColumn`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#unpincolumn) 메소드를 사용하여 열을 필드 이름별로 핀 고정하거나 핀 고정 해제할 수도 있습니다:




```typescript
this.hierarchicalGrid.pinColumn("Artist");
this.hierarchicalGrid.unpinColumn("Debut");
```


두 메소드는 각각 조작이 성공했는지 여부를 나타내는 불 값을 반환합니다. 일반적인 실패 원인으로 열이 이미 원하는 상태인 경우가 있습니다. [`pinColumn`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#pincolumn)은 결과가 핀 고정 영역이 Hierarchical Grid 자체보다 크거나 같을 경우에도 실패합니다. 다음의 예제를 참조하십시오:




```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'800px'" #hierarchicalGrid>
    <igx-column [field]="Artist" [width]="200px" [pinned]="true"></igx-column>
    <igx-column [field]="Debut" [width]="200px"></igx-column>
</igx-hierarchical-grid>
```

```typescript
var succeed = this.hierarchicalGrid.pinColumn("Artist"); // pinning fails and succeed will be false
```

`Artist` 열을 핀 고정하는 것이 허용되면 핀 고정된 영역은 Hierarchical Grid의 너비보다 커집니다.


열은 가장 오른쪽에 배치된 핀 고정된 열의 오른쪽에 핀 고정됩니다. [`columnPin`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#columnPin) 이벤트에서 이벤트 인수인 [`insertAtIndex`]({environment:angularApiUrl}/interfaces/ipincolumneventargs.html#insertatindex) 속성을 원하는 위치 인덱스로 변경하면 핀 고정 열의 순서를 변경할 수 있습니다.




```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'800px'" 
        (columnPin)="columnPinning($event)" #hierarchicalGrid>
</igx-hierarchical-grid> 
```

```typescript
public columnPinning(event) {
    if (event.column.field === "Artist") {
        event.insertAtIndex = 0;
    }
}
```


### Pinning Position

You can change the column pinning position via the [`pinning`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#pinning) configuration option. It allows you to set the columns position to either Start or End.
When set to End the columns are rendered at the end of the grid, after the unpinned columns. Unpinned columns can be scrolled horizontally, while the pinned columns remain fixed on the right.






```html
<igx-hierarchical-grid #grid1 [data]="data" [autoGenerate]="true" [pinning]="pinningConfig"></igx-hierarchical-grid>
```


```typescript
public pinningConfig: IPinningConfig = { columns: ColumnPinningPosition.End };
```
#### Demo





<code-view style="height:510px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-sample-right-pinning/" >
</code-view>





### Custom Column Pinning UI

You can define your custom UI and change the pin state of the columns via the related API.

Let's say that instead of a toolbar you would like to define pin icons in the column headers that the end user can click to change the particular column's pin state.
This can be done by creating a header template for the column with a custom icon.







```html
<ng-template igxHeader let-column #pinTemplate>
    <div class="title-inner">
        <span style="float:left">{{column.header || column.field}}</span>
        <igx-icon class="pin-icon" [class.pinned]="column.pinned" [class.unpinned]="!column.pinned" fontSet="fas" name="fa-thumbtack"
            (click)="toggleColumn(column)"></igx-icon>
    </div>
</ng-template>
<igx-hierarchical-grid class="hierarchicalGrid" [data]="localdata" [autoGenerate]="false"
    [height]="'500px'" [width]="'100%'" #hierarchicalGrid>
    <igx-column field="CompanyName" header="Company Name" [headerTemplate]="pinTemplate" width="200px" [pinned]="true"></igx-column>
    <igx-column field="ContactName" header="Contact Name" [headerTemplate]="pinTemplate" width="150px"></igx-column>
    <igx-column field="ContactTitle" header="Contact Title" [headerTemplate]="pinTemplate" width="200px"></igx-column>
    <igx-row-island [key]="'Orders'" [autoGenerate]="false">
            <igx-column field="OrderDate" header="Order Date" [headerTemplate]="pinTemplate" [dataType]="'date'" width="150px"></igx-column>
            <igx-column field="RequiredDate" header="Required Date" [headerTemplate]="pinTemplate" [dataType]="'date'" width="150px"></igx-column>
            <igx-column field="ShippedDate" header="Shipped Date" [headerTemplate]="pinTemplate" [dataType]="'date'" width="150px"></igx-column>
            <igx-column field="ShipVia" header="Ship Via" [headerTemplate]="pinTemplate" width="150px"></igx-column>
        <igx-row-island [key]="'OrderDetails'" [autoGenerate]="false">
                <igx-column field="UnitPrice" header="Unit Price" width="150px"></igx-column>
                <igx-column field="Quantity" width="150px"></igx-column>
                <igx-column field="Discount" width="150px"></igx-column>
        </igx-row-island>
    </igx-row-island>
</igx-hierarchical-grid>
```


On click of the custom icon the pin state of the related column can be changed using the column's API methods.

```typescript
public toggleColumn(col: IgxColumnComponent) {
    col.pinned ? col.unpin() : col.pin();
}
```

#### Demo





<code-view style="height:510px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-pinning/" >
</code-view>



### 핀 고정 제한

*   열 너비를 백분율(%)로 명시적으로 설정한 경우, 핀 고정 열이 있으면 Hierarchical Grid 자체 및 헤드 내용이 바르게 정렬되지 않습니다. 열 핀 고정 기능이 제대로 작동하려면 열 너비가 픽셀(px)로 설정하거나 Hierarchical Grid에 의해 자동 할당되어야 합니다.

<div class="divider--half"></div>

### 문제 해결

이 부분에서는 열 핀 고정 기능에 문제가 있는 경우, 취할 수 있는 조치에 대한 방안을 제공합니다.

#### 경고

* `IgxHierarchicalGrid - 핀 고정 영역이 최대 핀 고정 폭을 초과합니다. 다음 열은 다른 문제를 방지하기 위해 핀 고정 해제되었습니다:... .` - 사용자가 처음에 너무 많은 핀 고정 열을 정의한 경우에 이 경고가 표시됩니다. 처음에 핀 고정된 열의 합계 너비는 Hierarchical Grid 너비의 80%를 넘지 않아야 합니다. 그렇지 않으면 기본적으로 Hierarchical Grid의 제한을 초과하지 않는 최초의 열(정의된 순서)을 취하고 나머지(경고에 나열된 열)는 핀 고정 해제됩니다. Hierarchical Grid에서 핀 고정을 초기화하기 전에 [`columnInit`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#columnInit) 이벤트를 사용하여 초기화할 때 일부 열을 수동으로 핀 고정 해제할지 결정하기 위해 자체 논리를 실행할 수 있습니다. 각 열에 트리거됩니다.

<div class="divider--half"></div>



### API 참조
* [IgxHierarchicalGridComponent]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

### 추가 리소스
<div class="divider--half"></div>

* [Hierarchical Grid 개요](hierarchical-grid.md)
* [가상화 및 성능](virtualization.md)
* [페이징](paging.md)
* [필터링](filtering.md)
* [정렬](sorting.md)
* [요약](summaries.md)
* [열 이동](column-moving.md)
* [열 크기 조정](column-resizing.md)
* [선택](selection.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
