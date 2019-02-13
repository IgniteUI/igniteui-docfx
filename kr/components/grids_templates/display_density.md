---
title:  그리드 표시 밀도- 네이티브 Angular| Ignite UI for Angular
_description: Ignite UI for Angular 데이터 그리드 컨트롤은 열의 데이터 유형을 기반으로 하는 편집 가능한 열의 기본 셀 템플릿을 제공합니다.
_keywords: Ignite UI for Angular, UI 컨트롤, Angular 위젯, 웹 위젯, UI 위젯, Angular, 네이티브 Angular 컴포넌트 세트, 네이티브 Angular 컨트롤, 네이티브 Angular 컴포넌트 라이브러리, 네이티브 Angular 컴포넌트, Angular 그리드, Angular 데이터 그리드 컴포넌트, Angular 데이터 그리드 컨트롤, Angular 그리드 컴포넌트, Angular 그리드 컨트롤, Angular 고성능 그리드, 그리드 표시 밀도
_language: kr
---

### 그리드 표시 밀도

**Igx-Grid** 디자인은 [머티리얼 디자인 가이드라인](https://material.io/guidelines/material-design/introduction.html)을 기반으로 합니다. 현재 사전 정의된 표시 [밀도](https://material.io/design/layout/density.html#usage) 옵션 중에서 선택할 수 있는 옵션을 제공합니다. 사용에 적합한 밀도를 선택하면 대량의 콘텐츠와의 상호 작용으로 사용자 경험을 크게 향상시킬 수 있습니다.

#### 데모

<div class="sample-container loading" style="height:620px">
    <iframe id="grid-displayDensity-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-displayDensity' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-displayDensity-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>

<div class="divider--half"></div>

### 사용 방법
위의 데모에서 볼 수 있듯이 [**Igx-Grid**]({environment:angularApiUrl}/classes/igxgridcomponent.html)는 3가지 밀도 옵션을 제공합니다: **소**, **중**, **대**. 아래의 코드 조각은 [`displayDensity`]({environment:angularApiUrl}/classes/igxgridcomponent.html#displaydensity)를 설정하는 방법을 보여줍니다:

```html
<igx-grid #grid [data]="data" [displayDensity]="'cosy'" >
</igx-grid>
```
또는
```typescript
...
this.grid.displayDensity = "cosy";
...
```

이제 각 옵션을 그리드 컴포넌트에 반영하는 방법을 자세하게 살펴 보겠습니다. 서로 다른 표시 밀도 옵션 사이에서 전환하면 각 그리드 요소의 높이 및 해당 패딩이 변경됩니다. 또한, 사용자 열  [**너비**]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width)를 적용하려면 왼쪽 및 오른쪽 패딩 합계보다 커야 함을 고려해야 합니다.
 - **comfortable** - 이것은 밀도가 가장 낮고 행 높이가 `50px`인 기본 그리드 표시 밀도입니다. 왼쪽 및 오른쪽 패딩은 `24픽셀`이며, 최소 열 [`너비`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width)는 `48픽셀`임,
 - **cosy** - 이것은 행 높이가 `40px`인 중간 밀도입니다. 왼쪽 및 오른쪽 패딩은 `16픽셀`이며, 최소 열 [`너비`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width)는 `32픽셀`임,
 - **소** - 밀도가 가장 높고 행 높이가 `32px`, 왼쪽 및 오른쪽 패딩은 `12px`이며, 최소 열 [`너비`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width)는 `24픽셀`임,

> [!NOTE]
> 현재 크기는 무효화할 수 **없습니다**.

이제 샘플을 계속 진행하여 [`displayDensity`]({environment:angularApiUrl}/classes/igxgridcomponent.html#displaydensity)가 어떻게 적용되는지 살펴 보겠습니다. 먼저 각 밀도를 전환하는데 도움이 되는 버튼을 추가해 보겠습니다:

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
    <igx-buttongroup [values]="displayDensities" (onSelect)="selectDensity($event)"></igx-buttongroup>
</div>
<igx-grid #grid [data]="data" [displayDensity]="density" width="100%" height="550px">
    <igx-column-group  header="Customer Information">
    <igx-column field="CustomerName" header="Customer Name" [dataType]="'string'" [sortable]="true" [hasSummary]="true" [filterable]="true">
    </igx-column>
    <igx-column-group  header="Customer Address">
        <igx-column field="Country" header="Country" [dataType]="'string'" [sortable]="true" [hasSummary]="true" [filterable]="true">
        </igx-column>
        <igx-column field="City" header="City" [dataType]="'string'" [sortable]="true" [hasSummary]="true" [filterable]="true">
            </igx-column>
        <igx-column field="Address" header="Address" [dataType]="'string'" [sortable]="true" [hasSummary]="true" [filterable]="true">
        </igx-column>
        <igx-column field="PostalCode" header="Postal Code" [dataType]="'string'" [sortable]="true" [hasSummary]="true" [filterable]="true">
        </igx-column>
    </igx-column-group>
    </igx-column-group>
    <igx-column field="Salesperson" header="Sales Person" [dataType]="'string'" [sortable]="true" [hasSummary]="true"  [filterable]="true">
    </igx-column>
    <igx-column field="ShipperName" header="Shipper Name"  [dataType]="'string'" [sortable]="true" [hasSummary]="true"  [filterable]="true">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date"  [dataType]="'date'" [sortable]="true" [hasSummary]="true" [filterable]="true">
        <ng-template igxCell let-cell="cell" let-val>
            {{val | date:'dd/MM/yyyy'}}
        </ng-template>
    </igx-column>
    <igx-column-group  header="Product Details">
        <igx-column field="ProductID" header="ID" [dataType]="'string'" [sortable]="true" [hasSummary]="true"  >
        </igx-column>
        <igx-column field="ProductName" header="Name" [dataType]="'string'" [sortable]="true" [hasSummary]="true"  >
        </igx-column>
        <igx-column field="UnitPrice" header="Unit Price" [dataType]="'number'" [sortable]="true" [hasSummary]="true"  >
        </igx-column>
        <igx-column field="Quantity" header="Quantity" [dataType]="'number'" [sortable]="true" [hasSummary]="true"  >
        </igx-column>
        <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'" [sortable]="true" [hasSummary]="true" [filterable]="true">
        </igx-column>
    </igx-column-group>
    <igx-column-group  header="Shipping Information">
        <igx-column field="ShipName" header="Name" [dataType]="'string'" [sortable]="true" [hasSummary]="true" [filterable]="true">
        </igx-column>
        <igx-column-group  header="Shipping Address">
            <igx-column field="ShipCountry" header="Country" [dataType]="'string'" [sortable]="true" [hasSummary]="true" [filterable]="true">
            </igx-column>
            <igx-column field="ShipCity" header="City" [dataType]="'string'" [sortable]="true" [hasSummary]="true" [filterable]="true">
            </igx-column>
            <igx-column field="ShipPostalCode" header="Postal Code" [dataType]="'string'" [sortable]="true" [hasSummary]="true" [filterable]="true">
            </igx-column>
        </igx-column-group>
    </igx-column-group>
</igx-grid>
```

마지막으로 밀도를 실제로 적용하기 위해 필요한 논리를 실행합니다:

```typescript
@ViewChild("grid", { read: IgxGridComponent })
public grid: IgxGridComponent;
.....
public selectDensity(event) {
    this.density = this.displayDensities[event.index].label;

}
```

그리드의 행 높이를 변경할 수 있도록 [**Igx-Grid**]({environment:angularApiUrl}/classes/igxgridcomponent.html)가 제공하는 또 다른 옵션은 [`rowHeight`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowheight)속성입니다. 이제 이 속성이 [`displayDensity`]({environment:angularApiUrl}/classes/igxgridcomponent.html#displaydensity) 옵션과 함께 그리드 레이아웃에 어떤 영향을 미치는지 살펴 보겠습니다.

다음 사항에 유의하십시오:
 - [`displayDensity`]({environment:angularApiUrl}/classes/igxgridcomponent.html#displaydensity)옵션은 **[rowHeight]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowheight)가 지정된 경우**,  행 높이에 영향을 주지 **않습니다**;
 - [`displayDensity`]({environment:angularApiUrl}/classes/igxgridcomponent.html#displaydensity)는 위에서 설명한 대로 **그리드의 나머지 요소에 모두 영향을 미칩니다**;

이제 샘플을 확장하고 [`rowHeight`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowheight) 속성을 그리드에 추가할 수 있습니다:
 ```html
 <igx-grid #grid [data]="data" [displayDensity]="density" [rowHeight]="'80px'" width="100%" height="550px">
 ..............
 </igx-grid>

 ```
<div class="divider--half"></div>

### API
<div class="divider--half"></div>

* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

<div class="divider--half"></div>

### 추가 리소스

* [그리드 개요](grid.md)
* [가상화 및 성능](virtualization.md)
* [편집](editing.md)
* [페이징](paging.md)
* [필터링](filtering.md)
* [정렬](sorting.md)
* [요약](summaries.md)
* [열 핀 고정](column_pinning.md)
* [열 크기 조정](column_resizing.md)
* [선택](selection.md)
* [검색](search.md)
