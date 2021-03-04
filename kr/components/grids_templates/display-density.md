@@if (igxName === 'IgxGrid') {
---
title:  그리드 표시 밀도- 네이티브 Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Grid control provides default cell templates for editable columns which are based on the data type of the column.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Grid, Angular Table, Angular Data Grid component, Angular Data Table component, Angular Data Grid control, Angular Data Table control, Angular Grid component, Angular Table component, Angular Grid control, Angular Table control, Angular High Performance Grid, Angular High Performance Data Table, Grid Display Density, Data Table Display Density
_language: kr
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title:  트리 그리드 표시 밀도- 네이티브 Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Tree Grid control provides default cell templates for editable columns which are based on the data type of the column.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Tree Grid, Angular Tree Table, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular High Performance Tree Grid, Angular High Performance Tree Table, Tree Grid Display Density, Tree Table Display Density
_language: kr
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title:  계층 그리드 표시 밀도- 네이티브 Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Hierarchical Grid control provides default cell templates for editable columns which are based on the data type of the column.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Hierarchical Grid, Angular Hierarchical Table, Angular Hierarchical Grid component, Angular Hierarchical Table component, Angular Hierarchical Grid control, Angular Hierarchical Table control, Angular High Performance Hierarchical Grid, Angular High Performance Hierarchical Table, Hierarchical Grid Display Density, Hierarchical Table Display Density
_language: kr
---
}

### @@igComponent 표시 밀도

**@@igxName** 디자인은 [머티리얼 디자인 가이드라인](https://material.io/guidelines/material-design/introduction.html)을 기반으로 합니다. 현재 사전 정의된 표시 [밀도](https://material.io/design/layout/density.html#usage) 옵션 중에서 선택할 수 있는 옵션을 제공합니다. 사용에 적합한 밀도를 선택하면 대량의 콘텐츠와의 상호 작용으로 사용자 경험을 크게 향상시킬 수 있습니다.


#### 데모

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:620px">
    <iframe id="grid-displayDensity-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-displayDensity' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-displayDensity-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:620px">
    <iframe id="treegrid-displayDensity-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-display-density' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-displayDensity-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:680px">
    <iframe id="hierarchicalgrid-displayDensity-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-density' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchicalgrid-displayDensity-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider--half"></div>
}

### 사용 방법

위의 데모에서 볼 수 있듯이 [**@@igxName**]({environment:angularApiUrl}/classes/@@igTypeDoc.html)는 3가지 밀도 옵션을 제공합니다: **compact**, **cosy**, **comfortable**. 아래의 코드는 [`displayDensity`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#displaydensity)를 설정하는 방법을 보여줍니다:

```html
<@@igSelector #@@igObjectRef [data]="data" [displayDensity]="'cosy'" >
</@@igSelector>
```
또는
```typescript
...
this.@@igObjectRef.displayDensity = "cosy";
...
```
이제 각 옵션을 @@igComponent 컴포넌트에 반영하는 방법을 자세하게 살펴 보겠습니다. 서로 다른 표시 밀도 옵션 사이에서 전환하면 각 @@igComponent 요소의 높이 및 해당 패딩이 변경됩니다. 또한, 사용자 열 [**width**]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width)를 적용하는 경우 왼쪽 및 오른쪽 패딩 합계보다 커야 함에 주의하십시오.
 - **comfortable** - 이것은 밀도가 가장 낮고 행 높이가 `50px`인 기본 @@igComponent 표시 밀도입니다. 왼쪽 및 오른쪽 패딩은 `24px`임; 최소 열 [`width`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width)는 `48px`임;
 - **cosy** - 이것은 행 높이가 `40px`인 중간 밀도입니다. 왼쪽 및 오른쪽 패딩은 `16px`임; 최소 열 [`width`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width)는 `32px`임;
 - **compact** - 이것은 행 높이가 `32px`인 최고 밀도입니다. 왼쪽 및 오른쪽 패딩은 `12px`임; 최소 열 [`width`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width)는 `24px`임;

> [!NOTE]
> 현재 크기를 재정의 할 수는 **없습니다**.

계속하여 샘플을 사용해 [`displayDensity`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#displaydensity)의 적용 방법을 살펴 보겠습니다. 먼저 각 밀도를 전환하는데 도움이 되는 버튼을 추가해 보겠습니다:

```html
<div class="density-chooser">
    <igx-buttongroup [values]="displayDensities"></igx-buttongroup>
</div>
```

```typescript
@ViewChild(IgxButtonGroupComponent) public buttonGroup: IgxButtonGroupComponent;
public density = "compact";
public displayDensities;

public ngOnInit() {
    this.displayDensities = [
        {
            label: "compact",
            selected: this.density === "compact",
            togglable: true
        },
        {
            label: "cosy",
            selected: this.density === "cosy",
            togglable: true
        },
        {
            label: "comfortable",
            selected: this.density === "comfortable",
            togglable: true
        }
    ];
}
```

이제 마크업을 추가할 수 있습니다.

@@if (igxName === 'IgxGrid') {
```html
<div class="density-chooser">
    <igx-buttongroup [values]="displayDensities" (selected)="selectDensity($event)"></igx-buttongroup>
</div>
<igx-grid #grid [data]="data" [displayDensity]="density" width="100%" height="550px" [allowFiltering]="true">
    <igx-column-group  header="Customer Information">
    <igx-column field="CustomerName" header="Customer Name" [dataType]="'string'" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column-group  header="Customer Address">
        <igx-column field="Country" header="Country" [dataType]="'string'" [sortable]="true" [hasSummary]="true">
        </igx-column>
        <igx-column field="City" header="City" [dataType]="'string'" [sortable]="true" [hasSummary]="true">
            </igx-column>
        <igx-column field="Address" header="Address" [dataType]="'string'" [sortable]="true" [hasSummary]="true">
        </igx-column>
        <igx-column field="PostalCode" header="Postal Code" [dataType]="'string'" [sortable]="true" [hasSummary]="true">
        </igx-column>
    </igx-column-group>
    </igx-column-group>
    <igx-column field="Salesperson" header="Sales Person" [dataType]="'string'" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="ShipperName" header="Shipper Name"  [dataType]="'string'" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date"  [dataType]="'date'" [sortable]="true" [hasSummary]="true">
        <ng-template igxCell let-cell="cell" let-val>
            {{val | date:'dd/MM/yyyy'}}
        </ng-template>
    </igx-column>
    <igx-column-group  header="Product Details">
        <igx-column field="ProductID" header="ID" [dataType]="'string'" [sortable]="true" [hasSummary]="true" [filterable]="false">
        </igx-column>
        <igx-column field="ProductName" header="Name" [dataType]="'string'" [sortable]="true" [hasSummary]="true" [filterable]="false">
        </igx-column>
        <igx-column field="UnitPrice" header="Unit Price" [dataType]="'number'" [sortable]="true" [hasSummary]="true" [filterable]="false">
        </igx-column>
        <igx-column field="Quantity" header="Quantity" [dataType]="'number'" [sortable]="true" [hasSummary]="true" [filterable]="false">
        </igx-column>
        <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'" [sortable]="true" [hasSummary]="true" >
        </igx-column>
    </igx-column-group>
    <igx-column-group  header="Shipping Information">
        <igx-column field="ShipName" header="Name" [dataType]="'string'" [sortable]="true" [hasSummary]="true" >
        </igx-column>
        <igx-column-group  header="Shipping Address">
            <igx-column field="ShipCountry" header="Country" [dataType]="'string'" [sortable]="true" [hasSummary]="true" >
            </igx-column>
            <igx-column field="ShipCity" header="City" [dataType]="'string'" [sortable]="true" [hasSummary]="true" >
            </igx-column>
            <igx-column field="ShipPostalCode" header="Postal Code" [dataType]="'string'" [sortable]="true" [hasSummary]="true" >
            </igx-column>
        </igx-column-group>
    </igx-column-group>
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<div class="density-chooser">
    <igx-buttongroup [values]="displayDensities" (selected)="selectDensity($event)"></igx-buttongroup>
</div>
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [displayDensity]="density" width="100%"
    height="550px" [allowFiltering]="true">
    <igx-column field="Name" dataType="string" [sortable]="true" [hasSummary]="true" width="200px"></igx-column>
    <igx-column-group [pinned]="false" header="General Information">
        <igx-column field="HireDate" dataType="date" [sortable]="true" [hasSummary]="true">
            <ng-template igxCell let-cell="cell" let-val>
                {{val | date:'dd/MM/yyyy'}}
            </ng-template>
        </igx-column>
        <igx-column-group header="Person Details">
            <igx-column field="ID" dataType="number" [filterable]="false"></igx-column>
            <igx-column field="Title" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="Age" dataType="number" [sortable]="true" [hasSummary]="true"
                [summaries]="numberSummaries" [filterable]="false"></igx-column>
        </igx-column-group>
    </igx-column-group>
    <igx-column-group header="Address Information">
        <igx-column-group header="Location">
            <igx-column field="Country" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="City" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="Address" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
        </igx-column-group>
        <igx-column-group header="Contact Information">
            <igx-column field="Phone" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="Fax" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="PostalCode" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
    <igx-column-group header="Address Information">
        <igx-column-group header="Location">
            <igx-column field="Country" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="City" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="Address" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
        </igx-column-group>
        <igx-column-group header="Contact Information">
            <igx-column field="Phone" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column field="Fax" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column field="PostalCode" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<div class="density-chooser">
    <igx-buttongroup [values]="displayDensities" (selected)="selectDensity($event)"></igx-buttongroup>
</div>
<igx-hierarchical-grid #hGrid [data]="localdata" [height]="'600px'" [width]="'100%'" [allowFiltering]="true">
    <igx-column field="CustomerID"></igx-column>
    <igx-column field="CompanyName"></igx-column>
    <igx-column field="ContactName"></igx-column>
    <igx-column field="ContactTitle"></igx-column>
    <igx-column field="Address"></igx-column>
    <igx-column field="City"></igx-column>
    <igx-column field="PostalCode"></igx-column>
    <igx-column field="Country"></igx-column>
    <igx-column field="Phone"></igx-column>
    <igx-column field="Fax"></igx-column>

    <igx-row-island [key]="'Orders'" [autoGenerate]="false" #layout1 >
            <igx-column field="OrderID"></igx-column>
            <igx-column field="EmployeeID"></igx-column>
            <igx-column field="OrderDate"></igx-column>
            <igx-column field="RequiredDate"></igx-column>
            <igx-column field="ShippedDate"></igx-column>
            <igx-column field="ShipVia"></igx-column>
            <igx-column field="Freight"></igx-column>
            <igx-column field="ShipName"></igx-column>
            <igx-column field="ShipAddress"></igx-column>
            <igx-column field="ShipCity"></igx-column>
            <igx-column field="ShipPostalCode"></igx-column>
            <igx-column field="ShipCountry"></igx-column>
        <igx-row-island [key]="'OrderDetails'" [autoGenerate]="false">
                <igx-column field="ProductID"></igx-column>
                <igx-column field="UnitPrice"></igx-column>
                <igx-column field="Quantity"></igx-column>
                <igx-column field="Discount"></igx-column>
        </igx-row-island>
    </igx-row-island>

</igx-hierarchical-grid>
```
}

마지막으로 밀도를 실제로 적용하기 위해 필요한 논리를 실행합니다:

```typescript
@ViewChild("@@igObjectRef", { read: @@igxNameComponent })
public @@igObjectRef: @@igxNameComponent;
.....
public selectDensity(event) {
    this.density = this.displayDensities[event.index].label;
}
```

[**@@igxName**]({environment:angularApiUrl}/classes/@@igTypeDoc.html)의 @@igComponent 행 높이를 변경할 수 있도록 제공하는 다른 옵션은 [`rowHeight`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowheight) 속성입니다. 이 속성이 [`displayDensity`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#displaydensity) 옵션과 함께 @@igComponent 레이아웃에 어떻게 영향을 미치는지 살펴 보겠습니다.

다음 사항에 유의하십시오:
 - **[rowHeight]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowheight)가 지정된 경우,** [`displayDensity`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#displaydensity) 옵션은 행 높이에 영향을 **주지 않습니다**;
 - [`displayDensity`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#displaydensity)는 상기의 설명대로 **그리드의 나머지 요소에 모두 영향을 줍니다**;

이제 샘플을 확장하고 @@igComponent에 [`rowHeight`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowheight) 속성을 추가할 수 있습니다:

 ```html
 <@@igSelector #@@igObjectRef [data]="data" [displayDensity]="density" [rowHeight]="'80px'" width="100%" 
 height="550px" [allowFiltering]="true">
 ..............
 </@@igSelector>
 ```
<div class="divider--half"></div>

### API 참조

<div class="divider--half"></div>

* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent 스타일]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

<div class="divider--half"></div>

### 추가 리소스

* [@@igComponent 개요](@@igMainTopic.md)
* [가상화 및 성능](virtualization.md)
* [편집](editing.md)
* [페이징](paging.md)
* [필터링](filtering.md)
* [정렬](sorting.md)
* [요약](summaries.md)
* [열 핀 고정](column_pinning.md)
* [열 크기 조정](column-resizing.md)
* [선택](selection.md)
@@if (igxName !== 'IgxHierarchicalGrid') {* [검색](search.md)}

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
