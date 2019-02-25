---
title: 조건부 셀 스타일 - 네이티브 Angular| Ignite UI for Angular
_description: 조건부 셀 스타일 기능은 사용자 조건에 따라 열 셀 스타일을 지정하는 방법을 제공합니다.
_keywords: Ignite UI for Angular, UI 컨트롤, Angular 위젯, 웹 위젯, UI 위젯, Angular, 네이티브 Angular 컴포넌트 세트 네이티브 Angular 컨트롤, 네이티브 Angular 컴포넌트 라이브러리, Angular 데이터 그리드 컴포넌트, Angular 데이터 그리드 컨트롤, 네이티브 Angular 컴포넌트, Angular 그리드 컴포넌트, Angular 그리드 컨트롤, 셀 스타일, 조건부 서식, 조건부 셀 스타일, Angular 그리드 조건부 열 스타일, Angular 조건부 셀 스타일
_language: kr
---

### 조건부 셀 스타일
Ignite UI for Angular의 그리드 컴포넌트는 사용자 규칙을 기반으로 **조건부 셀 스타일**을 제공합니다. 

이것은 [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) 입력 [`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellclasses)를 키 값 쌍이 포함된 객체 리터럴로 설정하면 됩니다. 키는 CSS 클래스의 이름이며 값은 불 값을 반환하는 콜백 함수 또는 불 값입니다.

#### 데모

<div class="sample-container loading" style="height:530px">
    <iframe id="cell-styling-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-cell-styling' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="cell-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>
<div class="divider--half"></div>

#### 개요
[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) [`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellclasses) 입력 및 사용자 규칙을 설정하여 igGrid 셀의 조건부 스타일을 지정할 수 있습니다.

```html
<!-- sample.component.html -->
<igx-column field="BeatsPerMinute" dataType="number" [cellClasses]="beatsPerMinuteClasses"></igx-column>
```

[`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellclasses) 입력은 키 값 쌍을 포함하는 객체 리터럴을 허용하며 여기서 키는 CSS 클래스의 이름이고 값은 불 또는 불 값을 반환하는 콜백 함수입니다.

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

**::ng-deep** 또는 **`ViewEncapsulation.None`**을 사용하여 사용자 스타일을 현재 컴포넌트와 그 하위 요소를 통해 강제로 적용할 수 있습니다.

### API 참조
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#mixin-igx-grid)

### 추가 리소스
<div class="divider--half"></div>

* [그리드 개요](grid.md)
* [가상화 및 성능](virtualization.md)
* [편집](editing.md)
* [페이징](paging.md)
* [필터링](filtering.md)
* [정렬](sorting.md)
* [그룹화](groupby.md)
* [요약](summaries.md)
* [열 이동](column_moving.md)
* [열 핀 고정](column_pinning.md)
* [열 크기 조정](column_resizing.md)
* [열 숨기기](column_hiding.md)
* [선택](selection.md)
* [검색](search.md)
* [툴 모음](toolbar.md)
* [Excel로 내보내기](../exporter_excel.md)
* [Excel에서 붙여넣기](paste_excel.md)
* [복수 열 헤더](multi_column_headers.md)
* [표시 밀도](display_density.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
