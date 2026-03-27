---
title:  계층 그리드 표시 밀도- 네이티브 Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Hierarchical Grid control provides default cell templates for editable columns which are based on the data type of the column.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Hierarchical Grid, Angular Hierarchical Table, Angular Hierarchical Grid component, Angular Hierarchical Table component, Angular Hierarchical Grid control, Angular Hierarchical Table control, Angular High Performance Hierarchical Grid, Angular High Performance Hierarchical Table, Hierarchical Grid Display Density, Hierarchical Table Display Density
_language: kr
---


### Hierarchical Grid 표시 밀도

**IgxHierarchicalGrid** 디자인은 [머티리얼 디자인 가이드라인](https://material.io/guidelines/material-design/introduction.html)을 기반으로 합니다. 현재 사전 정의된 표시 [밀도](https://material.io/design/layout/density.html#usage) 옵션 중에서 선택할 수 있는 옵션을 제공합니다. 사용에 적합한 밀도를 선택하면 대량의 콘텐츠와의 상호 작용으로 사용자 경험을 크게 향상시킬 수 있습니다.


#### 데모





<code-view style="height:680px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-density/" >
</code-view>

<div class="divider--half"></div>


### 사용 방법

위의 데모에서 볼 수 있듯이 [**IgxHierarchicalGrid**]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)는 3가지 밀도 옵션을 제공합니다: **compact**, **cosy**, **comfortable**. 아래의 코드는 [`displayDensity`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#displaydensity)를 설정하는 방법을 보여줍니다:

```html
<igx-hierarchical-grid #hierarchicalGrid [data]="data" [displayDensity]="'cosy'" >
</igx-hierarchical-grid>
```
또는
```typescript
...
this.hierarchicalGrid.displayDensity = "cosy";
...
```
이제 각 옵션을 Hierarchical Grid 컴포넌트에 반영하는 방법을 자세하게 살펴 보겠습니다. 서로 다른 표시 밀도 옵션 사이에서 전환하면 각 Hierarchical Grid 요소의 높이 및 해당 패딩이 변경됩니다. 또한, 사용자 열 [**width**]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width)를 적용하는 경우 왼쪽 및 오른쪽 패딩 합계보다 커야 함에 주의하십시오.
 - **comfortable** - 이것은 밀도가 가장 낮고 행 높이가 `50px`인 기본 Hierarchical Grid 표시 밀도입니다. 왼쪽 및 오른쪽 패딩은 `24px`임; 최소 열 [`width`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width)는 `48px`임;
 - **cosy** - 이것은 행 높이가 `40px`인 중간 밀도입니다. 왼쪽 및 오른쪽 패딩은 `16px`임; 최소 열 [`width`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width)는 `32px`임;
 - **compact** - 이것은 행 높이가 `32px`인 최고 밀도입니다. 왼쪽 및 오른쪽 패딩은 `12px`임; 최소 열 [`width`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width)는 `24px`임;

> [!NOTE]
> 현재 크기를 재정의 할 수는 **없습니다**.

계속하여 샘플을 사용해 [`displayDensity`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#displaydensity)의 적용 방법을 살펴 보겠습니다. 먼저 각 밀도를 전환하는데 도움이 되는 버튼을 추가해 보겠습니다:

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


마지막으로 밀도를 실제로 적용하기 위해 필요한 논리를 실행합니다:

```typescript
@ViewChild("hierarchicalGrid", { read: IgxHierarchicalGridComponent })
public hierarchicalGrid: IgxHierarchicalGridComponent;
.....
public selectDensity(event) {
    this.density = this.displayDensities[event.index].label;
}
```

[**IgxHierarchicalGrid**]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)의 Hierarchical Grid 행 높이를 변경할 수 있도록 제공하는 다른 옵션은 [`rowHeight`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowheight) 속성입니다. 이 속성이 [`displayDensity`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#displaydensity) 옵션과 함께 Hierarchical Grid 레이아웃에 어떻게 영향을 미치는지 살펴 보겠습니다.

다음 사항에 유의하십시오:
 - **[rowHeight]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowheight)가 지정된 경우,** [`displayDensity`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#displaydensity) 옵션은 행 높이에 영향을 **주지 않습니다**;
 - [`displayDensity`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#displaydensity)는 상기의 설명대로 **그리드의 나머지 요소에 모두 영향을 줍니다**;

이제 샘플을 확장하고 Hierarchical Grid에 [`rowHeight`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowheight) 속성을 추가할 수 있습니다:

 ```html
 <igx-hierarchical-grid #hierarchicalGrid [data]="data" [displayDensity]="density" [rowHeight]="'80px'" width="100%" 
 height="550px" [allowFiltering]="true">
 ..............
 </igx-hierarchical-grid>
 ```
<div class="divider--half"></div>

### API 참조

<div class="divider--half"></div>

* [IgxHierarchicalGridComponent]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
* [IgxHierarchicalGridComponent 스타일]({environment:sassApiUrl}/themes#function-grid-theme)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

<div class="divider--half"></div>

### 추가 리소스

* [Hierarchical Grid 개요](hierarchical-grid.md)
* [가상화 및 성능](virtualization.md)
* [편집](editing.md)
* [페이징](paging.md)
* [필터링](filtering.md)
* [정렬](sorting.md)
* [요약](summaries.md)
* [열 핀 고정](column_pinning.md)
* [열 크기 조정](column-resizing.md)
* [선택](selection.md)


<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
