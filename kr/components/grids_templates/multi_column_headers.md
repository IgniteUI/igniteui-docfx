@@if (igxName === 'IgxGrid') {
---
제목: 열 그룹 컴포넌트- 네이티브 Angular | Ignite UI for Angular
_description: Multi-column headers allow grouping columns by placing them under a common header. Every column group could be a representation of combination between  other groups or columns.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Grid, Angular Table, Angular Data Grid component, Angular Data Table component, Angular Data Grid control, Angular Data Table control, Angular Grid component, Angular Table component, Angular Grid control, Angular Table control, Angular High Performance Grid, Angular High Performance Data Table, Multi Column Headers, Deferred Multi Column Headers, Grid Multi Column Headers, Angular Grid Multi Column Headers, Angular Data Table Multi Column Headers
_language: kr
---
}
@@if (igxName === 'IgxTreeGrid') {
---
제목: 열 그룹 컴포넌트- 네이티브 Angular | Ignite UI for Angular
_description: Multi-column headers allow grouping columns by placing them under a common header. Every column group could be a representation of combination between  other groups or columns.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Tree Grid, Angular Tree Table, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular High Performance Tree Grid, Angular High Performance Tree Table, Multi Column Headers, Deferred Multi Column Headers, Tree Grid Multi Column Headers, Angular Tree Grid Multi Column Headers, Angular Tree Table Multi Column Headers
_language: kr
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
제목: 열 그룹 컴포넌트- 네이티브 Angular | Ignite UI for Angular
_description: Multi-column headers allow grouping columns by placing them under a common header. Every column group could be a representation of combination between  other groups or columns.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Hierarchical Grid, Angular Hierarchical Table, Angular Hierarchical Grid component, Angular Hierarchical Table component, Angular Hierarchical Grid control, Angular Hierarchical Table control, Angular Hierarchical Table control, Angular High Performance Hierarchical Grid, Angular High Performance Hierarchical Table, Multi Column Headers, Deferred Multi Column Headers, Hierarchical Grid Multi Column Headers, Angular Hierarchical Grid Multi Column Headers, Angular Hierarchical Table Multi Column Headers
_language: kr
---
}

### 복수 열 헤더

[`@@igxName`]({environment:angularApiUrl}/classes/@@igTypeDoc.html)는 `복수 열 헤더`를 지원하여 열을 공통 헤더 아래에 배치하여 그룹화할 수 있습니다. 모든 `열 그룹`은 다른 그룹 또는 열의 조합을 표시할 수 있습니다.

#### 데모

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-multi-column-headers-iframe" src='{environment:demosBaseUrl}/grid/multi-column-headers' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-multi-column-headers-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="treegrid-multi-column-headers-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-multi-column-headers' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-multi-column-headers-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="hierarchical-grid-multi-column-headers-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-multi-column' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-multi-column-headers-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
}

`Multi column header`의 선언은 열 집합을 [`igx-column-group`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html) 컴포넌트에 [`header`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html#header) 제목을 전달하여 래핑합니다.

@@if (igxName === 'IgxGrid') {
```html
<igx-grid [data]="data" height="600px" [allowFiltering]="true">
    <igx-column-group header="Contact Information">
        <igx-column sortable="true" resizable="true" field="Phone"></igx-column>
        <igx-column sortable="true" resizable="true" field="Fax"></igx-column>
        <igx-column sortable="true" resizable="true" field="PostalCode"></igx-column>
    </igx-column-group>
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID">
    <igx-column-group header="Contact Information">
        <igx-column field="Phone" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
        <igx-column field="Fax" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
        <igx-column field="PostalCode" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
    </igx-column-group>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid #hierarchicalGrid [data]="localdata" [height]="'600px'" [width]="'100%'" displayDensity="compact" [allowFiltering]="true">
    <igx-column field="CustomerID" [movable]="true" sortable="true" resizable="true"></igx-column>
        ...
        <igx-column-group header="Location">
            <igx-column field="Address" [movable]="true" sortable="true" resizable="true"></igx-column>
            <igx-column field="City" [movable]="true" sortable="true" resizable="true"></igx-column>
            <igx-column field="PostalCode" [movable]="true" sortable="true" resizable="true"></igx-column>
            <igx-column field="Country" [movable]="true" sortable="true" resizable="true"></igx-column>
        </igx-column-group>
        <igx-column-group header="Contact Information">
            <igx-column field="Phone" sortable="true" resizable="true"></igx-column>
            <igx-column field="Fax" sortable="true" resizable="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
...
</igx-hierarchical-grid>
```
}

중첩 헤더의 `n-th` 수준을 달성하려면 상기의 선언을 따라야 실행합니다. 즉, [`igx-column-group`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html)을 중첩하면 원하는 결과를 얻을 수 있습니다.

@@if (igxName === 'IgxGrid') {
```html
<igx-grid [data]="data" height="600px" [allowFiltering]="true">
    <igx-column-group header="General Information">
        <igx-column [movable]="true" sortable="true" resizable="true" field="CompanyName"></igx-column>
        <igx-column-group [movable]="true" header="Person Details">
            <igx-column [movable]="true" [pinned]="false" sortable="true" resizable="true" field="ContactName"></igx-column>
            <igx-column [movable]="true" sortable="true" resizable="true" field="ContactTitle"></igx-column>
        </igx-column-group>
    </igx-column-group>
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID">
    <igx-column-group [movable]="true" [pinned]="false" header="General Information">
        <igx-column field="HireDate" dataType="date" [movable]="true" [sortable]="true" [resizable]="true"></igx-column>
        <igx-column-group [movable]="true" header="Person Details">
            <igx-column field="ID" dataType="number" [movable]="true" [resizable]="true" [filterable]="false"></igx-column>
            <igx-column field="Title" dataType="string" [movable]="true" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column field="Age" dataType="number" [movable]="true" [sortable]="true" [resizable]="true"></igx-column>
        </igx-column-group>            
    </igx-column-group>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid #hierarchicalGrid [data]="localdata" [height]="'600px'" [width]="'100%'" displayDensity="compact" [allowFiltering]="true">
    <igx-column field="CustomerID" [movable]="true" sortable="true" resizable="true"></igx-column>
    <igx-column-group [movable]="true" [pinned]="false" header="General Information">
        <igx-column field="CompanyName" [movable]="true" sortable="true" resizable="true"></igx-column>
        <igx-column-group [movable]="true" header="Person Details">
            <igx-column field="ContactName" [movable]="true" sortable="true" resizable="true"></igx-column>
            <igx-column field="ContactTitle" [movable]="true" sortable="true" resizable="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
   
    ...
</igx-hierarchical-grid>
```
}

모든 [`igx-column-group`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html)은 [`moving`](column_moving.md), [`pinning`](column_pinning.md), [`hiding`](column_hiding.md)을 지원합니다.
> [!참고]
> 열 집합과 열 그룹이 있는 경우 가장 위의 상위 열에 대해서만 핀 고정이 가능합니다. 더 구체적으로 중첩된 `column groups` 또는 `columns`의 핀 고정은 허용되지 않습니다. <br />
> `columns`과 `column groups` 사이의 이동은 계층에서 같은 수준이고 같은 `group`인 경우에만 허용됩니다. <br />
> `columns/column-groups`이 현재 `group`으로 래핑되어 있지 않은 즉, **최상위** `columns`인 경우 표시된 전체 열 사이에서 이동이 허용됩니다.

@@if (igxName === 'IgxGrid') {
```html
<igx-grid [data]="data" height="600px" [allowFiltering]="true">
    <igx-column-group  [movable]="true" [pinned]="true" header="General Information">
        <igx-column [movable]="true" sortable="true" resizable="true" field="CompanyName"></igx-column>
    </igx-column-group>
    <igx-column sortable="true" resizable="true" field="Phone"></igx-column>
    <igx-column sortable="true" resizable="true" field="Fax"></igx-column>
    <igx-column sortable="true" resizable="true" field="PostalCode"></igx-column>
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID">
    <igx-column-group header="Contact Information">
        <igx-column field="Phone" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
    </igx-column-group>
    <igx-column field="Name" dataType="string" [movable]="true" [sortable]="true" [resizable]="true"></igx-column>
    <igx-column field="Title" dataType="string" [movable]="true" [sortable]="true" [resizable]="true"></igx-column>
    <igx-column field="Age" dataType="number" [movable]="true" [sortable]="true" [resizable]="true"></igx-column>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid #hierarchicalGrid [data]="localdata" [height]="'600px'" [width]="'100%'" displayDensity="compact" [allowFiltering]="true">
    <igx-column field="CustomerID" [movable]="true" sortable="true" resizable="true"></igx-column>
    <igx-column-group [movable]="true" [pinned]="false" header="General Information">
        <igx-column field="CompanyName" [movable]="true" sortable="true" resizable="true"></igx-column>
        <igx-column-group [movable]="true" header="Person Details">
            <igx-column field="ContactName" [movable]="true" sortable="true" resizable="true"></igx-column>
            <igx-column field="ContactTitle" [movable]="true" sortable="true" resizable="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
    ...
</igx-hierarchical-grid>
```
}

### API 참조
<div class="divider--half"></div>

* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent 스타일]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxColumnGroupComponent]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html)
<div class="divider--half"></div>

### 추가 리소스
<div class="divider--half"></div>

* [@@igComponent 개요](@@igMainTopic.md)
* [가상화 및 성능](virtualization.md)
* [페이징](paging.md)
* [필터링](filtering.md)
* [정렬](sorting.md)
* [요약](summaries.md)
* [열 크기 조정](column_resizing.md)
* [선택](selection.md)
@@if (igxName === 'IgxGrid') {* [Group by](groupby.md)}

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
