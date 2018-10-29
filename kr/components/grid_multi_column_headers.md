---
title: 열 그룹 컴포넌트- 네이티브 Angular| Ignite UI for Angular
_description: 복수 열 헤더를 사용하면 열을 공통 헤더 아래에 배치하여 그룹화할 수 있습니다. 모든 열 그룹은 다른 그룹 또는 열의 조합을 표시할 수 있습니다.
_keywords: Ignite UI for Angular, UI 컨트롤, Angular 위젯, 웹 위젯, UI 위젯, Angular, 네이티브 Angular 컴포넌트 세트, 네이티브 Angular 컨트롤, 네이티브 Angular 컴포넌트 라이브러리, Angular 데이터 그리드 컴포넌트, Angular 데이터 그리드 컨트롤, 네이티브 Angular 컴포넌트, Angular 그리드 컴포넌트, Angular 그리드 컨트롤, Angular 고성능 그리드, 복수 열 헤더, 지연된 복수 열 헤더, 그리드 복수 열 헤더, Angular 그리드 복수 열 헤더, Angular 열
_language: kr
---

## 복수 열 헤더

[`IgxGrid`]({environment:angularApiUrl}/classes/igxgridcomponent.html) supports `multi-column headers` which allows you to group columns by placing them under a common header. Every `column group` could be a representation of combinations between other groups or columns.

## 데모

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-multi-column-headers-iframe" src='{environment:demosBaseUrl}/multi-column-headers' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-multi-column-headers-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>

`Multi column header` 선언은 [`header`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html#header) 제목이 전달된 [`igx-column-group`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html) 컴포넌트에 열 집합을 래핑하여 실행할 수있습니다.

```html
<igx-grid [data]="data" height="600px">
    <igx-column-group header="Contact Information">
        <igx-column filterable="true" sortable="true" resizable="true" field="Phone"></igx-column>
        <igx-column filterable="true" sortable="true" resizable="true" field="Fax"></igx-column>
        <igx-column filterable="true" sortable="true" resizable="true" field="PostalCode"></igx-column>
    </igx-column-group>
</igx-grid>
```

중첩 헤더의 `n-th` 수준을 달성하려면 상기의 선언을 따라야 실행합니다. [`igx-column-group`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html)를 중첩함으로써 원하는 결과를 얻을 수 있습니다.

```html
<igx-grid [data]="data" height="600px">
    <igx-column-group header="General Information">
        <igx-column [movable]="true" filterable="true" sortable="true" resizable="true" field="CompanyName"></igx-column>
        <igx-column-group [movable]="true" header="Person Details">
            <igx-column [movable]="true" [pinned]="false" filterable="true" sortable="true" resizable="true" field="ContactName"></igx-column>
            <igx-column [movable]="true" filterable="true" sortable="true" resizable="true" field="ContactTitle"></igx-column>
        </igx-column-group>
    </igx-column-group>
</igx-grid>
```

모든 [`igx-column-group`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html)는 [`이동`](grid_column_moving.md), [`핀 고정`](grid_column_pinning.md) 및 [`숨기기`](grid_column_hiding.md)를 지원합니다.
> [!NOTE]
> 열 집합과 열 그룹이 있는 경우 가장 위의 상위 열에 대해서만 핀 고정이 가능합니다. 더 구체적으로 중첩된 `column groups` 또는 `columns`의 핀 고정은 허용되지 않습니다. <br />
> `columns`과 `column groups` 사이의 이동은 계층에서 같은 수준이고 같은 `group`인 경우에만 허용됩니다. <br />
> `columns/column-groups`이 현재 `group`으로 래핑되어 있지 않은 즉, **최상위** `columns`인 경우 표시된 전체 열 사이에서 이동이 허용됩니다.

```html
<igx-grid [data]="data" height="600px">
    <igx-column-group  [movable]="true" [pinned]="true" header="General Information">
        <igx-column [movable]="true" filterable="true" sortable="true" resizable="true" field="CompanyName"></igx-column>
    </igx-column-group>
    <igx-column filterable="true" sortable="true" resizable="true" field="Phone"></igx-column>
    <igx-column filterable="true" sortable="true" resizable="true" field="Fax"></igx-column>
    <igx-column filterable="true" sortable="true" resizable="true" field="PostalCode"></igx-column>
</igx-grid>
```

### API 참조
<div class="divider--half"></div>

* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxColumnGroupComponent]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html)
<div class="divider--half"></div>

### 추가 리소스
<div class="divider--half"></div>

* [그리드 개요](grid.md)
* [가상화 및 성능](grid_virtualization.md)
* [페이징](grid_paging.md)
* [필터링](grid_filtering.md)
* [정렬](grid_sorting.md)
* [요약](grid_summaries.md)
* [열 크기 조정](grid_column_resizing.md)
* [선택](grid_selection.md)
* [그룹화](grid_groupby.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
