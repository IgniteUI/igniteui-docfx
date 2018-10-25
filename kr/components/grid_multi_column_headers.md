---
title: 열 그룹 컴포넌트- 네이티브 Angular | Ignite UI for Angular
_description: 복수 열 헤더를 사용하면 열을 공통 헤더 아래에 배치하여 그룹화할 수 있습니다. 모든 열 그룹은 다른 그룹 또는 열의 조합을 표시할 수 있습니다.
_keywords: Ignite UI for Angular, UI 컨트롤, Angular 위젯, 웹 위젯, UI 위젯, Angular, 네이티브 Angular 컴포넌트 세트, 네이티브 Angular 컨트롤, 네이티브 Angular 컴포넌트 라이브러리, Angular 데이터 그리드 컴포넌트, Angular 데이터 그리드 컨트롤, 네이티브 Angular 컴포넌트, Angular 그리드 컴포넌트, Angular 그리드 컨트롤, Angular 고성능 그리드, 복수 열 헤더, 지연된 복수 열 헤더, 그리드 복수 열 헤더, Angular 그리드 복수 열 헤더, Angular 열
_language: kr
---

## 복수 열 헤더

`igxGrid` supports `multi-column headers` which allows you to group columns by placing them under a common header. Every `column group` could be a representation of combinations between other groups or columns.

## 데모

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-multi-column-headers-iframe" src='{environment:demosBaseUrl}/multi-column-headers' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-multi-column-headers-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

`Multi column header`의 선언은 열 집합을 `igx-column-group` 컴포넌트에 `header` 제목을 전달하여 래핑합니다.

```html
<igx-grid [data]="data" height="600px">
    <igx-column-group header="Contact Information">
        <igx-column filterable="true" sortable="true" resizable="true" field="Phone"></igx-column>
        <igx-column filterable="true" sortable="true" resizable="true" field="Fax"></igx-column>
        <igx-column filterable="true" sortable="true" resizable="true" field="PostalCode"></igx-column>
    </igx-column-group>
</igx-grid>
```

중첩 헤더의 `n-th` 수준을 달성하려면 상기의 선언을 따라야 실행합니다. 즉, `igx-column-group` 을 중첩하면 원하는 결과를 얻을 수 있습니다.

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

모든 `igx-column-group`은 `moving`, `pinning`, `hidding`을 지원합니다..
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

## API 요약
### IgxColumnGroupComponent

#### 입력
| 이름 | 형식 | 설명 |
| :--- | :--- | :---|
|`searchable`| boolean | 열이 검색에 포함되는지 여부를 결정합니다. false로 설정한 경우, 이 열의 셀 값이 그리드의 검색 API 결과에 포함되지 않습니다(기본값은 true). |
|`hidden`| boolean | 열의 표시 상태. |
|`movable`| boolean | 현재 `column group`이 이동 가능한지 여부를 결정합니다. |

#### 게터/세터
|이름|형식|게터|세터|설명|
|--- |--- |--- |--- |--- |
|`allChildren`| IgxColumnComponent[] | 예 | 아니요 | `column groups`을 포함한 모든 하위의 `flatten` 데이터를 반환합니다.|
|`columnGroup`| boolean | 예 | 아니요 | 현재 열이 `column group`인지 여부를 반환합니다.|
|`level`| number | 예 | 아니요 | 헤더 계층 내에 있는 `column group` 수준을 반환합니다.|
|`parent`| IgxColumnGroupComponent|IgxColumnComponent | 예 | 아니요 | `column group`의 직접적인 상위를 반환합니다.|
|`children`| IgxColumnComponent[] | 예 | 아니요 | `column group`의 직접적인 하위를 반환합니다. |
|`topLevelParent`| IgxColumnGroupComponent | 예 | 아니요 | `group`의 최상위를 반환합니다. |
|`width`| string | 예 | 아니요 | 그룹에 포함되는 하위에 의해 결정되는 현재 `column group`의 `width`를 반환합니다. |
|`pinned`| boolean | 예 | 예 | 현재 `column group`이 핀 고정되어 있는지 여부를 가져오기/설정합니다. |

### 메소드

|이름|반환 유형|설명|
|--- |--- |--- |
|`pin(index?): boolean`|boolean|열을 핀 고정합니다. 작업이 성공하면 반환합니다.|
|`unpin(index?): boolean`|boolean|열을 핀 고정 해제합니다. 작업이 성공하면 반환합니다.|



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