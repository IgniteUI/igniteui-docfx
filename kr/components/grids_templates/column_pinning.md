@@if (igxName === 'IgxGrid') {
---
title: 열 핀 고정 컴포넌트 - 네이티브 Angular | Ignite UI for Angular
_description: Pinning with the Ignite UI for Angular Column Pinning component allows the users to always see the pinned columns while horizontally scrolling. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Grid, Angular Table, Angular Data Grid component, Angular Data Table component, Angular Data Grid control, Angular Data Table control, Angular Grid component, Angular Table component, Angular Grid control, Angular Table control, Angular High Performance Grid, Angular High Performance Data Table, column pinning, Angular Data Table column pinning, pinning, pin
_language: kr
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: 열 핀 고정 컴포넌트 - 네이티브 Angular | Ignite UI for Angular
_description: Pinning with the Ignite UI for Angular Column Pinning component allows the users to always see the pinned columns while horizontally scrolling. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Tree Grid, Angular Tree Table, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular High Performance Tree Grid, Angular High Performance Tree Table, column pinning, Angular Tree Table column pinning, pinning, pin
_language: kr
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: 열 핀 고정 컴포넌트 - 네이티브 Angular | Ignite UI for Angular
_description: Pinning with the Ignite UI for Angular Column Pinning component allows the users to always see the pinned columns while horizontally scrolling. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Hierarchical Grid, Angular Hierarchical Table, Angular Hierarchical Grid component, Angular Hierarchical Table component, Angular Hierarchical Grid control, Angular Hierarchical Table control, Angular High Performance Hierarchical Grid, Angular High Performance Hierarchical Table, column pinning, Angular Hierarchical Table column pinning, pinning, pin
_language: kr
---
}

### @@igComponent 열 핀 고정
단일 열 또는 복수 열을 @@igComponent의 왼쪽에 핀 고정할 수 있습니다. Ignite UI for Angular의 **열 핀 고정**을 사용하면 사용자가 수평 스크롤하는 동안 핀 고정된 열이 항상 표시됩니다. 

#### 데모

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-sample-pinning-iframe" src='{environment:demosBaseUrl}/grid/grid-sample-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:670px">
    <iframe id="treegrid-sample-pinning-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-column-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-sample-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-sample-pinning-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-sample-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
}

#### 열 핀 고정 API

핀 고정된 영역이 @@igComponent 자체보다 넓지 않는 한 각 열을 핀 고정할 수 있습니다. 열 핀 고정은 [`igx-column`]({environment:angularApiUrl}/classes/igxcolumncomponent.html)의 핀 고정된 입력을 통해 제어됩니다. 핀 고정된 열은 항상 @@igComponent의 왼쪽에 렌더링되고 @@igComponent 자체의 핀 고정되어 있지 않은 열의 수평 스크롤로 고정됩니다.


@@if (igxName === 'IgxGrid') {
```html
<igx-grid #grid1 [data]="data | async" [width]="700px" [autoGenerate]="false" [paging]="true" [perPage]="6" (onColumnInit)="initColumns($event)"
    (onSelection)="selectCell($event)">
    <igx-column [field]="Name" [pinned]="true"></igx-column>
    <igx-column [field]="AthleteNumber"></igx-column>
    <igx-column [field]="TrackProgress"></igx-column>
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false">
    <igx-column [field]="Name" [pinned]="true"></igx-column>
    <igx-column [field]="Title"></igx-column>
    <igx-column [field]="ID"></igx-column>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'" #hierarchicalGrid>
        <igx-column #artist field="Artist" [width]="'180px'">
            <ng-template igxHeader>
                <div class="title-inner">
                    <span style="float:left">Artist</span>
                    <igx-icon class="pin-icon" fontSet="fas" name="fa-thumbtack" (click)="toggleColumn(artist)"></igx-icon>
                </div>
            </ng-template>
        </igx-column>
        <igx-column #photo field="Photo">
                <ng-template igxHeader>
                        <div class="title-inner">
                            <span style="float:left">Photo</span>
                            <igx-icon class="pin-icon" fontSet="fas" name="fa-thumbtack" (click)="toggleColumn(photo)"></igx-icon>
                        </div>
                    </ng-template>
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column #debut field="Debut">
            <ng-template igxHeader>
                <div class="title-inner">
                    <span style="float:left">Debut</span>
                    <igx-icon class="pin-icon" fontSet="fas" name="fa-thumbtack" (click)="toggleColumn(debut)"></igx-icon>
                </div>
            </ng-template>
        </igx-column>
        <igx-column #grammynominations field="Grammy Nominations" [width]="'200px'">
            <ng-template igxHeader>
                <div class="title-inner">
                    <span style="float:left">Grammy Nominations</span>
                    <igx-icon class="pin-icon" fontSet="fas" name="fa-thumbtack" (click)="toggleColumn(grammynominations)"></igx-icon>
                </div>
            </ng-template>
        </igx-column>
        <igx-column #grammyawards field="Grammy Awards" [width]="'180px'">
            <ng-template igxHeader>
                <div class="title-inner">
                    <span style="float:left">Grammy Awards</span>
                    <igx-icon class="pin-icon" fontSet="fas" name="fa-thumbtack" (click)="toggleColumn(grammyawards)"></igx-icon>
                </div>
            </ng-template>
        </igx-column>
```
}

@@igComponent의 [`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html)의 [`pinColumn`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#pincolumn) 또는 [`unpinColumn`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#unpincolumn) 메소드를 사용하여 열을 필드 이름별로 핀 고정하거나 핀 고정 해제할 수도 있습니다:

@@if (igxName === 'IgxGrid') {
```typescript
this.grid.pinColumn("AthleteNumber");
this.grid.unpinColumn("Name");
```
}
@@if (igxName === 'IgxTreeGrid') {
```typescript
this.treeGrid.pinColumn("Title");
this.treeGrid.unpinColumn("Name");
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
this.hierarchicalGrid.pinColumn("Artist");
this.hierarchicalGrid.unpinColumn("Debut");
```
}

두 메소드는 각각 조작이 성공했는지 여부를 나타내는 불 값을 반환합니다. 일반적인 실패 원인으로 열이 이미 원하는 상태인 경우가 있습니다. [`pinColumn`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#pincolumn)은 결과가 핀 고정 영역이 @@igComponent 자체보다 크거나 같을 경우에도 실패합니다. 다음의 예제를 참조하십시오:

@@if (igxName === 'IgxGrid') {
```html
<igx-grid #grid1 [data]="data | async" [width]="300px" [autoGenerate]="false">
    <igx-column [field]="Name" [width]="200px" [pinned]="true"></igx-column>
    <igx-column [field]="AthleteNumber" [width]="200px"></igx-column>
</igx-grid>
```

```typescript
var succeed = this.grid.pinColumn("AthleteNumber"); // pinning fails and succeed will be false
```

`AthleteNumber` 열을 핀 고정하는 것이 허용되면 핀 고정된 영역은 @@igComponent의 너비보다 커집니다.
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treeGrid [data]="data" [width]="300px" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false">
    <igx-column [field]="Name" [width]="200px" [pinned]="true"></igx-column>
    <igx-column [field]="Title" [width]="200px"></igx-column>
</igx-tree-grid>
```

```typescript
var succeed = this.treeGrid.pinColumn("Title"); // pinning fails and succeed will be false
```

`Title` 열을 핀 고정하는 것이 허용되면 핀 고정된 영역은 @@igComponent의 너비보다 커집니다.
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'800px'" #hierarchicalGrid>
    <igx-column [field]="Artist" [width]="200px" [pinned]="true"></igx-column>
    <igx-column [field]="Debut" [width]="200px"></igx-column>
</igx-tree-grid>
```

```typescript
var succeed = this.hierarchicalGrid.pinColumn("Artist"); // pinning fails and succeed will be false
```

`Artist` 열을 핀 고정하는 것이 허용되면 핀 고정된 영역은 @@igComponent의 너비보다 커집니다.
}

열은 가장 오른쪽에 배치된 핀 고정된 열의 오른쪽에 핀 고정됩니다. [`onColumnPinning`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#oncolumnpinning) 이벤트에서 이벤트 인수인 [`insertAtIndex`]({environment:angularApiUrl}/interfaces/ipincolumneventargs.html#insertatindex) 속성을 원하는 위치 인덱스로 변경하면 핀 고정 열의 순서를 변경할 수 있습니다.

@@if (igxName === 'IgxGrid') {
```html
<igx-grid #grid1 [data]="data | async" [autoGenerate]="true" (onColumnPinning)="columnPinning($event)"></igx-grid>
```

```typescript
public columnPinning(event) {
    if (event.column.field === "Name") {
        event.insertAtIndex = 0;
    }
}
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true" (onColumnPinning)="columnPinning($event)"></igx-tree-grid>
```

```typescript
public columnPinning(event) {
    if (event.column.field === "Name") {
        event.insertAtIndex = 0;
    }
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'800px'" 
        (onColumnPinning)="columnPinning($event) #hierarchicalGrid></igx-hierarchical-grid> 
```

```typescript
public columnPinning(event) {
    if (event.column.field === "Artist") {
        event.insertAtIndex = 0;
    }
}
```
}

### 핀 고정 제한

*   열 너비를 백분율(%)로 명시적으로 설정한 경우, 핀 고정 열이 있으면 @@igComponent 자체 및 헤드 내용이 바르게 정렬되지 않습니다. 열 핀 고정 기능이 제대로 작동하려면 열 너비가 픽셀(px)로 설정하거나 @@igComponent에 의해 자동 할당되어야 합니다.

<div class="divider--half"></div>

### 문제 해결

이 부분에서는 열 핀 고정 기능에 문제가 있는 경우, 취할 수 있는 조치에 대한 방안을 제공합니다.

#### 경고

* `@@igxName - 핀 고정 영역이 최대 핀 고정 폭을 초과합니다. 다음 열은 다른 문제를 방지하기 위해 핀 고정 해제되었습니다:... .` - 사용자가 처음에 너무 많은 핀 고정 열을 정의한 경우에 이 경고가 표시됩니다. 처음에 핀 고정된 열의 합계 너비는 @@igComponent 너비의 80%를 넘지 않아야 합니다. 그렇지 않으면 기본적으로 @@igComponent의 제한을 초과하지 않는 최초의 열(정의된 순서)을 취하고 나머지(경고에 나열된 열)는 핀 고정 해제됩니다. @@igComponent에서 핀 고정을 초기화하기 전에 [`onColumnInit`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#oncolumninit) 이벤트를 사용하여 초기화할 때 일부 열을 수동으로 핀 고정 해제할지 결정하기 위해 자체 논리를 실행할 수 있습니다. 각 열에 트리거됩니다.

<div class="divider--half"></div>

### API 참조
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

### 추가 리소스
<div class="divider--half"></div>

* [@@igComponent 개요](@@igMainTopic.md)
* [가상화 및 성능](virtualization.md)
* [페이징](paging.md)
* [필터링](filtering.md)
* [정렬](sorting.md)
* [요약](summaries.md)
* [열 이동](column_moving.md)
* [열 크기 조정](column_resizing.md)
* [선택](selection.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
