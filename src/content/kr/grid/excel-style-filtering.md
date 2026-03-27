---
title: 그리드 Excel 스타일 필터링
_description: The Ignite UI for Angular Data Grid control features the fastest, touch-responsive data-rich grid with popular features, including hierarchical and list views.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Grid, Angular Table, Angular Data Grid component, Angular Data Table component, Angular Data Grid control, Angular Data Table control, Angular Grid component, Angular Table component, Angular Grid control, Angular Table control, Angular High Performance Grid, Angular High Performance Data Table, Filtering, Data Grid Filtering, Data Table Filtering, Excel, Excel Style Filtering
_language: kr
---




### Grid Excel 스타일 필터링

Ignite UI for Angular의 Grid 컴포넌트는 Excel과 유사한 필터 UI를 제공합니다.

#### 데모



<code-view style="height:950px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-excel-style-filtering-sample-1/" >
</code-view>





<div class="divider--half"></div>

###사용 방법

Excel 스타일 필터링을 켜려면 2개의 입력을 설정해야 합니다. [`allowFiltering`]({environment:angularApiUrl}/classes/igxgridcomponent.html#allowfiltering)을 `true`로 설정하고 [`filterMode`]({environment:angularApiUrl}/classes/igxgridcomponent.html#filtermode)를 `excelStyleFilter`로 설정해야 합니다.


```html
<igx-grid [data]="data" [autoGenerate]="true" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">
</igx-grid>
```




###상호 작용

특정 열의 필터 메뉴를 열려면 헤더의 필터 아이콘을 클릭해야 합니다. 필터링 기능과 함께 열에서 정렬, 핀 고정, 이동 또는 숨기기가 설정된 경우, 켜져 있는 기능 버튼이 표시됩니다.

필터가 적용되지 않으면 목록의 모든 항목이 선택됩니다. 목록 위의 입력으로부터 필터링할 수 있습니다. 데이터를 필터링하려면 목록에서 항목을 선택/선택 취소하고 Apply 버튼을 클릭합니다. 목록 항목에 적용된 필터링은 `equals` 연산자로 필터 식을 만들고 각 식간의 논리 연산자는 [`OR`]({environment:angularApiUrl}/enums/filteringlogic.html#or)입니다. 필터를 삭제하려면 Select All 항목을 선택한 다음 Apply 버튼을 누릅니다. 

다른 식으로 필터를 적용하려면 **Text 필터**를 클릭하고 특정 열에 사용 가능한 모든 필터 연산자의 하위 메뉴가 열립니다. 이들 중 하나를 선택하면 사용자 필터 대화상자가 열리며 다른 필터 및 논리 연산자를 사용하여 원하는 대로 식을 추가할 수 있습니다. 필터를 삭제할 수 있는 clear 버튼도 있습니다.


<div class="divider--half"></div>

###메뉴 기능 구성

정렬, 이동, 핀 고정 및 숨기기 기능은 필터 메뉴에서 제거할 수 있습니다. 제어하는 입력은 다음과 같습니다: [`sortable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortable), [`movable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#movable), [`disablePinning`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#disablepinning), [`disableHiding`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#disablehiding).


```html
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="650px" width="100%" [allowFiltering]="true" [filterMode]="'excelStyleFilter'" [moving]="true">
    <igx-column field="ProductName" header="Product Name" [sortable]="true"[dataType]="'string'">
    </igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [sortable]="false" [disablePinning]="true" [disableHiding]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [disablePinning]="true" [disableHiding]="true" [sortable]="true" [dataType]="'number'">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [sortable]="false" [dataType]="'date'" [formatter]="formatDate">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" [sortable]="true" [dataType]="'boolean'">
    </igx-column>
</igx-grid>
```

<div class="divider--half"></div>

아래 샘플에서 'Product Name' 및 'Discontinued' 열에서는 4가지 기능이 모두 활성화되어 있으며, 'Quantity Per Unit' 에서는 4 가지 모두 비활성화되어 있으며, 'Unit Price' 에서는 정렬 및 이동만 활성화되어 있으며, 'Order Date' 에서는 고정 및 숨기기만 활성화되어 있습니다.




<div class="divider--half"></div>



<code-view style="height:900px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-excel-style-filtering-sample-2/" >
</code-view>





<div class="divider--half"></div>

열의 정렬, 이동, 핀 고정 및 숨기기 기능을 유지하면서 Excel 스타일 필터 메뉴에서 항목을 제거하는 경우, 각 조작에 대해 그리드에 템플릿을 추가할 수 있습니다.


```html
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="650px" width="100%" [allowFiltering]="true" [filterMode]="'excelStyleFilter'" [moving]="true">
    <ng-template igxExcelStyleSorting>Sorting Template</ng-template>
    <ng-template igxExcelStyleHiding>Hiding Template</ng-template>
    <ng-template igxExcelStyleMoving>Moving Template</ng-template>
    <ng-template igxExcelStylePinning>Pinning Template</ng-template>
    <igx-column field="ProductName" header="Product Name" [sortable]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [sortable]="false" [disablePinning]="true" [disableHiding]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [disablePinning]="true" [disableHiding]="true" [sortable]="true" [dataType]="'number'">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [sortable]="false" [dataType]="'date'" [formatter]="formatDate">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" [sortable]="true" [dataType]="'boolean'">
    </igx-column>
</igx-grid>
```





<div class="divider--half"></div>



<code-view style="height:900px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-excel-style-filtering-sample-3/" >
</code-view>





<div class="divider--half"></div>

### API 참조
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxGridComponent API]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent 스타일]({environment:sassApiUrl}/themes#function-grid-theme)

### 추가 리소스
<div class="divider--half"></div>

* [Grid 개요](grid.md)
* [가상화 및 성능](virtualization.md)
* [페이징](paging.md)
* [정렬](sorting.md)
* [요약](summaries.md)
* [열 이동](column-moving.md)
* [열 핀 고정](column_pinning.md)
* [열 크기 조정](column-resizing.md)
* [선택](selection.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
