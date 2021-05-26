@@if (igxName === 'IgxGrid') {
---
title: Angular Conditional Cell Styling | Ignite UI for Angular | Infragistics 
_description: Define a variety of styles with the help of the conditional styling feature of the Material UI grid, by using different material styling guidelines with a rich API
_keywords: conditional styling, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Conditional Cell Styling | Ignite UI for Angular | Infragistics 
_description: Define a variety of styles with the help of the conditional styling feature of the Material UI grid, by using different material styling guidelines with a rich API
_keywords: conditional styling, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Conditional Cell Styling | Ignite UI for Angular | Infragistics 
_description: Define a variety of styles with the help of the conditional styling feature of the Material UI grid, by using different material styling guidelines with a rich API
_keywords: conditional styling, ignite ui for angular, infragistics
---
}

### @@igxName Conditional Cell Styling
The @@igxName component in Ignite UI for Angular provides **conditional styling of cells** based on custom rules.

This can be achieved by setting the [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) input [`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellclasses) to an object literal containing key-value pairs. The key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value. The result is a convenient material styling of the cell.

#### 데모

@@if (igxName === 'IgxGrid') {

<code-view style="height:530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-cell-styling" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-conditional-cell-style" >
</code-view>

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
        <span *ngIf="cell.row.data.UnitPrice == 0">-</span>
        <span *ngIf="cell.row.data.UnitPrice != 0">${{val}}</span>
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
* [열 이동](column-moving.md)
* [열 핀 고정](column_pinning.md)
* [열 크기 조정](column-resizing.md)
* [열 숨기기](column_hiding.md)
* [선택](selection.md)
* [검색](search.md)
* [도구 모음](toolbar.md)
* [복수 열 헤더](multi-column-headers.md)
* [표시 밀도](display-density.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
