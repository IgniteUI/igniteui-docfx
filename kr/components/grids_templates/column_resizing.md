@@if (igxName === 'IgxGrid') {
---
title: 열 크기 조정 컴포넌트- 네이티브 Angular | Ignite UI for Angular
_description: With deferred column resizing, see a temporary resize indicator while the drag operation is in effect with using the Ignite UI for Angular Column Resizing Component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Grid, Angular Table, Angular Data Grid component, Angular Data Table component, Angular Data Grid control, Angular Data Table control, Angular Grid component, Angular Table component, Angular Grid control, Angular Table control, Angular High Performance Grid, Angular High Performance Data Table, Column Resizing, Deferred Column Reszing, Grid Column Resizing, Angular Grid Column Resizing, Angular Data Table Column Resizing
_language: kr
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: 열 크기 조정 컴포넌트- 네이티브 Angular | Ignite UI for Angular
_description: With deferred column resizing, see a temporary resize indicator while the drag operation is in effect with using the Ignite UI for Angular Column Resizing Component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Tree Grid, Angular Tree Table, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular High Performance Tree Grid, Angular High Performance Tree Table, Column Resizing, Deferred Column Reszing, Tree Grid Column Resizing, Angular Tree Grid Column Resizing, Angular Tree Table Column Resizing
_language: kr
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: 열 크기 조정 컴포넌트- 네이티브 Angular | Ignite UI for Angular
_description: With deferred column resizing, see a temporary resize indicator while the drag operation is in effect with using the Ignite UI for Angular Column Resizing Component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Hierarchical Grid, Angular Hierarchical Table, Angular Hierarchical Grid component, Angular Hierarchical Table component, Angular Hierarchical Grid control, Angular Hierarchical Table control, Angular High Performance Hierarchical Grid, Angular High Performance Hierarchical Table, Column Resizing, Deferred Column Reszing, Hierarchical Grid Column Resizing, Angular Hierarchical Grid Column Resizing, Angular Hierarchical Table Column Resizing
_language: kr
---
}


### @@igComponent 열 크기 조정

열 크기 조정의 지연에서는 드래그 조작의 실행 중에 크기 조정 인디케이터가 일시적으로 표시됩니다. 드래그 조작이 완료되면 새로운 열 크기가 적용됩니다.

#### @@igComponent 열 크기 조정 데모

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-resizing-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-resizing-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-resizing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="treegrid-resizing-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-column-resizing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-resizing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-resizing-sample-iframe" src='{environment:lobDemosBaseUrl}/hierarchical-grid/hierarchical-grid-resizing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-resizing-sample-iframe" data-demos-base-url="{environment:lobDemosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider--half"></div>
}

**열 크기 조정**은 열 단위 수준에서도 사용할 수 있는데 즉, [**@@igSelector**]({environment:angularApiUrl}/classes/@@igTypeDoc.html)에 크기를 조정 가능한 열 및 크기를 조정할 수 없는 열을 혼합하여 사용할 수 있습니다. 이는 [`igx-column`]({environment:angularApiUrl}/classes/igxcolumncomponent.html)의 [`resizable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#resizable) 입력을 통해 제어할 수 있습니다.

@@if (igxName !== 'IgxHierarchicalGrid') {
```html
<igx-column [field]="'ID'" width="100px" [resizable]="true"></igx-column>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-column [field]="'Artist'" [resizable]="true"></igx-column>
```
}
[`@@igSelector`]({environment:angularApiUrl}/classes/@@igTypeDoc.html)의 [`onColumnResized`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#oncolumnresized) 이벤트를 처리하고 열의 크기를 조정할 때 일부 사용자 논리를 구현할 수 있습니다. [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) 객체뿐 아니라 이전 및 새로운 열 너비는 이벤트 인수를 통해 공개됩니다.

@@if (igxName === 'IgxGrid') {
```html
<igx-grid [data]="data" (onColumnResized)="onResize($event)" [autoGenerate]="false">
    <igx-column [field]="'ID'" width="100px" [resizable]="true"></igx-column>
    <igx-column [field]="'CompanyName'" width="100px" [resizable]="true"></igx-column>
</igx-grid>
```

```typescript
public onResize(event) {
    this.col = event.column;
    this.pWidth = event.prevWidth;
    this.nWidth = event.newWidth;
}
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" (onColumnResized)="onResize($event)" [autoGenerate]="false">
    <igx-column [field]="'Title'" [resizable]="true" [width]="'100px'"></igx-column>
    <igx-column [field]="'HireDate'" [resizable]="true" [width]="'100px'"></igx-column>
</igx-tree-grid>
```

```typescript
public onResize(event) {
    this.col = event.column;
    this.pWidth = event.prevWidth;
    this.nWidth = event.newWidth;
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
  <igx-hierarchical-grid class="hgrid" [data]="localdata" (onColumnResized)="onResize($event)" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'" #hierarchicalGrid>
        <igx-column field="Artist" [resizable]="true"></igx-column>
        ...
</igx-hierarchical-grid>
```
```typescript
    public onResize(event) {
        this.col = event.column;
        this.pWidth = event.prevWidth;
        this.nWidth = event.newWidth;
    }
```
}

#### Resizing columns in pixels/percentages

Depending on the user scenario, the column width may be defined in pixels or percentages. Both scenarios are supported by the Column Resizing feature as well as mixing widths in pixels and percentages. By default if a column does not have width set, it will fit the available space and its width will be set in pixels which will be reflected by the resizing.

This means that the following configuration is possible:

@@if (igxName === 'IgxGrid') {
```html
<igx-grid [data]="data" (onColumnResized)="onResize($event)" [autoGenerate]="false">
    <igx-column [field]="'ID'" width="10%" [resizable]="true"></igx-column>
    <igx-column [field]="'CompanyName'" width="100px" [resizable]="true"></igx-column>
    <igx-column [field]="'ContactTitle'" [resizable]="true"></igx-column>
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" (onColumnResized)="onResize($event)" [autoGenerate]="false">
    <igx-column [field]="'Title'" [resizable]="true" [width]="'10%'"></igx-column>
    <igx-column [field]="'HireDate'" [resizable]="true" [width]="'100px'"></igx-column>
    <igx-column [field]="'Age'" dataType="number" [resizable]="true"></igx-column>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
  <igx-hierarchical-grid class="hgrid" [data]="localdata" (onColumnResized)="onResize($event)" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'" #hierarchicalGrid>
        <igx-column field="Artist" [resizable]="true" [width]="'10%'"></igx-column>
        <igx-column field="GrammyNominations" [resizable]="true" [width]="'100px'"></igx-column>
        <igx-column field="GrammyAwards" [resizable]="true"></igx-column>
        ...
</igx-hierarchical-grid>
```
}

>[!NOTE]
> There is a slight difference in the way resizing works for columns set in pixels and percentages.
    
**Pixels**

Resizing a column with width in pixels works as one will expect where the amount of pixels the mouse has moved will transform the column by the same amount.

**Percentages**

When a column width is set in percentages, the amount of pixels moved will translate to roughly how much percentages the user has moved relative to the grid width. This means that a column when resized may appear to snap to a certain size, because size in percentages can only be a whole number and there are usually some pixels lost when sizing a column to a grid's width this way.

For example, a column width of 20% and width of 21% differ in the way that those sizes, based on the grid width, can be separated by a 10 pixels gap and anything in this range cannot be reflect by the resizing.

#### 열 크기 조정 제한

최소 및 최대 허용 열 너비를 구성할 수도 있습니다. 이는 [`igx-column`]({environment:angularApiUrl}/classes/igxcolumncomponent.html)의 [`minWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#minwidth) 및 [`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxwidth) 입력을 통해 제어할 수 있습니다. 이 경우, 크기 조정 인디케이터의 드래그 조작은 열이 [`minWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#minwidth) 및 [`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxwidth)에 의해 정의된 범위 이외로 크기를 조정할 수 없음을 사용자에게 알리도록 제한됩니다.

@@if (igxName !== 'IgxHierarchicalGrid') {
```html
<igx-column [field]="'ID'" width="100px" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-column [field]="'Artist'" width="100px" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
```
}

> [!NOTE]
> [`minWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#minwidth)가 그보다 작은 값으로 설정된 경우에도 열 크기를 **88px** 미만으로 조정할 수 없습니다.

Configuring and mixing the minimum and maximum column width values with the predefined column widths is also possible. If the values set for minimum and maximum are set to percentages, the respective column size will be limited to those exact sized similar to pixels.

This means that the following configurations can de done:

@@if (igxName !== 'IgxHierarchicalGrid') {
```html
<igx-column [field]="'ID'" width="10%" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-column [field]="'Artist'" width="100px" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
```
}

or

@@if (igxName !== 'IgxHierarchicalGrid') {
```html
<igx-column [field]="'ID'" width="100px" [resizable]="true"
            [minWidth]="'5%'" [maxWidth]="'15%'"></igx-column>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-column [field]="'Artist'" width="100px" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'15%'"></igx-column>
```
}

#### 더블 클릭으로 자동 크기 열 조정

각 열은 헤더의 오른쪽을 더블 클릭하여 **자동 크기 조정**을 할 수 있는데, 열은 현재 표시되어있는 헤더를 포함하여 가장 긴 셀 값에 크기를 설정합니다. 이 동작은 기본적으로 사용되며 추가 구성이 필요하지 않습니다. 그러나, 해당 열에 [`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxwidth)가 설정되고 새로운 너비가 [`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxwidth) 값을 초과하는 경우, 열이 자동 크기 조정되지 않습니다. 이 경우, 열은 사전 설정된 [`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxwidth) 값에 따라 크기가 조정됩니다.

또한, [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html)의 [`autosize()`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#autosize) 메소드를 사용하여 동적으로 열 크기를 자동 조정할 수 있습니다.

@@if (igxName !== 'IgxHierarchicalGrid') {
```typescript
@ViewChild('@@igObjectRef') @@igObjectRef: @@igxNameComponent;

let column = this.@@igObjectRef.columnList.filter(c => c.field === 'ID')[0];
column.autosize();
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
@ViewChild('@@igObjectRef') @@igObjectRef: @@igxNameComponent;

let column = this.@@igObjectRef.columnList.filter(c => c.field === 'Artist')[0];
column.autosize();
```
}

### API 참조
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent 스타일]({environment:sassApiUrl}/index.html#mixin-igx-grid)

### 추가 리소스
<div class="divider--half"></div>

* [@@igComponent 개요](@@igMainTopic.md)
* [가상화 및 성능](virtualization.md)
* [페이징](paging.md)
* [필터링](filtering.md)
* [정렬](sorting.md)
* [요약](summaries.md)
* [열 이동](column_moving.md)
* [열 핀 고정](column_pinning.md)
* [선택](selection.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
