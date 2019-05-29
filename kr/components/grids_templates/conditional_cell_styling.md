@@if (igxName === 'IgxGrid') {
---
제목: 조건부 셀 스타일 - 네이티브 Angular | Ignite UI for Angular
_description: Conditional Cell Styling feature provides a means for column cells styling based on custom conditions.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Grid, Angular Table, Angular Data Grid component, Angular Data Table component, Angular Data Grid control, Angular Data Table control, Angular Grid component, Angular Table component, Angular Grid control, Angular Table control, Angular High Performance Grid, Angular High Performance Data Table, Cell Styling, Conditional Formatting, Conditional Cell Styling, Angular Grid Conditional Column Styling, Angular Data Table Conditional Column Styling, Angular Conditional Cell Styling
_language: kr
---
}
@@if (igxName === 'IgxTreeGrid') {
---
제목: 조건부 셀 스타일 - 네이티브 Angular | Ignite UI for Angular
_description: Conditional Cell Styling feature provides a means for column cells styling based on custom conditions.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Tree Grid, Angular Tree Table, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular High Performance Tree Grid, Angular High Performance Tree Table, Cell Styling, Conditional Formatting, Conditional Cell Styling, Angular Tree Grid Conditional Column Styling, Angular Tree Table Conditional Column Styling, Angular Conditional Cell Styling
_language: kr
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
제목: 조건부 셀 스타일 - 네이티브 Angular | Ignite UI for Angular
_description: Conditional Cell Styling feature provides a means for column cells styling based on custom conditions.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Hierarchical Grid, Angular Hierarchical Table, Angular Hierarchical Grid component, Angular Hierarchical Table component, Angular Hierarchical Grid control, Angular Hierarchical Table control, Angular High Performance Hierarchical Grid, Angular High Performance Hierarchical Table, Cell Styling, Conditional Formatting, Conditional Cell Styling, Angular Hierarchical Grid Conditional Column Styling, Angular Hierarchical Table Conditional Column Styling, Angular Conditional Cell Styling
_language: kr
---
}

### 조건부 셀 스타일
Ignite UI for Angular의 @@igxName 컴포넌트는 사용자 규칙을 기반으로 **조건부 셀 스타일**을 제공합니다.

[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) 입력 [`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellclasses)를 키 값 쌍을 포함하는 객체 리터럴에 설정하여 실행할 수 있습니다. 키는 CSS 클래스의 이름이며 값은 불 값을 반환하는 콜백 함수 또는 불 값입니다.

#### 데모

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:530px">
    <iframe id="grid-cell-styling-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-cell-styling' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-cell-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="treegrid-cell-styling-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-conditional-cell-style' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-cell-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<!-- TODO -->
}
<div class="divider--half"></div>

#### 개요
[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) [`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellclasses) 입력을 설정하고 사용자 규칙을 정의하여 @@igxName 셀의 조건부 스타일을 지정할 수 있습니다.

@@if (igxName === 'IgxGrid') {
```html
<!-- sample.component.html -->
<igx-column field="BeatsPerMinute" dataType="number" [cellClasses]="beatsPerMinuteClasses"></igx-column>
```
}
@@if (igxName === 'IgxTreeGrid'){
```html
<!-- sample.component.html -->
<igx-column field="UnitPrice" header="Unit Price" [dataType]="'number'" [cellClasses] = "priceClasses">
    <ng-template igxCell let-cell="cell" let-val>
        <span *ngIf="cell.row.rowData.UnitPrice == 0">-</span>
        <span *ngIf="cell.row.rowData.UnitPrice != 0">${{val}}</span>
    </ng-template>
</igx-column>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
<!-- TODO -->
}

[`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellclasses) 입력은 키 값 쌍을 포함하는 객체 리터럴을 허용하며 여기서 키는 CSS 클래스의 이름이고 값은 불 또는 불 값을 반환하는 콜백 함수입니다.

@@if (igxName === 'IgxGrid') {
```typescript
// sample.component.ts

private upFontCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] > 95;
}

private downFontCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] <= 95;
}

public beatsPerMinuteClasses = {
    downFont: this.downFontCondition,
    upFont: this.upFontCondition
};
```

```scss
// sample.component.scss

::ng-deep {
    .upFont {
        color: green;
    }

    .downFont {
        color: red;
    }
}
```
}
@@if (igxName === 'IgxTreeGrid'){
```typescript
// sample.component.ts

private upPriceCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] > 25;
}

private downPriceCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] <= 25;
}

public priceClasses = {
    downPrice: this.downPriceCondition,
    upPrice: this.upPriceCondition
};
```

```scss
// sample.component.scss

::ng-deep {
    .upPrice {
        color: red;
    }

    .downPrice {
        color: green;
    }
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
<!-- TODO -->
}

**::ng-deep** 또는 **`ViewEncapsulation.None`**을 사용하여 사용자 스타일을 현재 컴포넌트와 그 하위 요소를 통해 강제로 적용할 수 있습니다.

### API 참조
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent 스타일]({environment:sassApiUrl}/index.html#mixin-igx-grid)

### 추가 리소스
<div class="divider--half"></div>

* [@@igComponent 개요](@@igMainTopic.md)
* [가상화 및 성능](virtualization.md)
* [편집](editing.md)
* [페이징](paging.md)
* [필터링](filtering.md)
* [정렬](sorting.md)
* [요약](summaries.md)
* [열 이동](column_moving.md)
* [열 핀 고정](column_pinning.md)
* [열 크기 조정](column_resizing.md)
* [열 숨기기](column_hiding.md)
* [선택](selection.md)
* [검색](search.md)
* [도구 모음](toolbar.md)
* [복수 열 헤더](multi_column_headers.md)
* [표시 밀도](display_density.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
