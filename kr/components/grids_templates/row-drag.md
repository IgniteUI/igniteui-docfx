@@if (igxName === 'IgxGrid') {
---
title: 그리드 행 드래그
_description: The Ignite UI for Angular Data Grid control features the fastest, touch-responsive data-rich grid with popular features, including hierarchical and list views.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Grid, Angular Table, Angular Data Grid component, Angular Data Table component, Angular Data Grid control, Angular Data Table control, Angular Grid component, Angular Table component, Angular Grid control, Angular Table control, Angular High Performance Grid, Angular High Performance Data Table, Row Drag, Row Dragging, Data Grid Row Drag, Data Table Row Drag
_language: kr
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: 트리 그리드 행 드래그
_description: The Ignite UI for Angular Tree Grid control features the fastest, touch-responsive data-rich tree grid with popular features, including hierarchical and list views.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Tree Grid, Angular Tree Table, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular High Performance Tree Grid, Angular High Performance Tree Table, Row Drag, Row Dragging, Tree Grid Row Drag, Tree Table Row Drag
_language: kr
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: 계층 그리드 행 드래그
_description: The Ignite UI for Angular Hierarchical Grid control features the fastest, touch-responsive data-rich tree grid with popular features.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Hierarchical Grid, Angular Hierarchical Table, Angular Hierarchical Grid component, Angular Hierarchical Table component, Angular Hierarchical Grid control, Angular Hierarchical Table control, Angular High Performance Hierarchical Grid, Angular High Performance Hierarchical Table, Row Drag, Row Dragging, Hierarchical Grid Row Drag, Hierarchical Table Row Drag
_language: kr
---
}

### @@igComponent 행 드래그

Ignite UI for Angular @@igComponent에서 **RowDrag**는 루트 `@@igSelector` 컴포넌트에서 초기화되며 [`rowDraggable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowdraggable) 입력을 통해 구성할 수 있습니다. 행 드래그를 활성화하면 사용자가 행 드래그를 시작할 수 있는 행 드래그 핸들을 제공합니다.

#### 데모

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-row-drag-to-grid-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-row-drag-to-grid' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-row-drag-to-grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
}

@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:560px">
    <iframe id="tree-grid-row-drag-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/tree-grid-row-drag' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-row-drag-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider--half"></div>
}

@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:560px">
    <iframe id="hierarchical-grid-row-drag-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-row-drag' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-row-drag-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider--half"></div>
}

### 컨피규레이터

`@@igSelector`에 행 드래그를 활성화하려면 그리드의 [`rowDraggable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowdraggable)을 **`true`**로 설정하면 됩니다. 이 기능이 활성화되면 각 행에 행 드래그 핸들이 표시됩니다. 이 핸들은 행 드래그를 시작하는 데 사용할 수 있습니다.

```html
<@@igSelector [rowDraggable]="true">
 ...
</@@igSelector>
```
버튼을 누른 상태에서 드래그 핸들을 클릭하고 *커서를 움직이면* 그리드의 [`onRowDragStart`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onrowdragstart) 이벤트가 실행됩니다. 언제든지 클릭을 해제하면 [`onRowDragEnd`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onrowdragend) 이벤트가 실행됩니다.

아래에서 행 드래그를 지원하도록 `@@igSelector`를 구성하는 방법과 드롭 이벤트를 적절하게 처리하는 방법에 대한 내용을 살펴볼 수 있습니다.

@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {
이 예제에서는 그리드에서 지정된 영역으로 행을 드래그하여 놓을 경우, 그리드에서 행을 삭제하는 것을 보여 줍니다.
}
@@if (igxName === 'IgxGrid') {
이 예제에서는 그리드에서 다른 행으로 행을 드래그하면 첫 번째 데이터 소스에서 행을 삭제하고 두 번째 행에 추가하는 것을 보여 줍니다.
}

#### 드롭 영역

행 드래그를 활성화하는 것은 매우 간단한데 다음은 행 *드롭*을 처리하는 방법을 설정해야 합니다.
[`igxDrop` 지시문](../drag-drop.md)을 사용하여 행을 삭제할 위치를 정의할 수 있습니다.

먼저 앱 모듈에서 `IgxDragDropModule`을 가져와야 합니다:

```typescript
import { ..., IgxDragDropModule } from 'igniteui-angular';
...
@NgModule({
    imports: [..., IgxDragDropModule]
})
```

그런 다음 템플릿에서 지시문의 선택기를 사용하여 드롭 영역을 정의합니다.

@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {
```html
<div class="drop-area" igxDrop (onEnter)="onEnterAllowed($event)" (onLeave)="onLeaveAllowed($event)"
(onDrop)="onDropAllowed($event)">
    <igx-icon>delete</igx-icon>
    <div>Drag a row here to delete it</div>
</div>
```
}
@@if (igxName === 'IgxGrid') {
이 경우, 드롭 영역은 모두 행을 드롭할 두 번째 그리드가 됩니다.
```html
<igx-grid #targetGrid igxDrop [data]="data2" [autoGenerate]="false" [emptyGridTemplate]="dragHereTemplate"
    (onEnter)="onEnterAllowed($event)" (onLeave)="onLeaveAllowed($event)" (onDrop)="onDropAllowed($event)" [primaryKey]="'ID'">
    ...
</igx-grid>
```

그리드는 처음에는 비어 있으므로 사용자에게 유용한 템플릿을 정의합니다.

```html
<ng-template #dragHereTemplate>
    Drop a row to add it to the grid
</ng-template>
```
}

#### 드롭 영역 이벤트 핸들러

템플릿에서 드롭 영역을 정의한 후에는 컴포넌트의 `.ts` 파일에 있는 `igxDrop`의 [`onEnter`]({environment:angularApiUrl}/classes/igxdropdirective.html#onenter), [`onLeave`]({environment:angularApiUrl}/classes/igxdropdirective.html#onleave) 및 [`onDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html#ondrop) 이벤트에 대한 핸들러를 선언해야 합니다.

먼저, `onEnter` 및 `onLeave` 핸들러를 살펴보겠습니다. 이 방법은 드래그 *고스트* 아이콘을 변경하여 사용자가 행을 드롭할 수 있는 영역 위에 있음을 표시할 수 있습니다:

```typescript
export class @@igxNameRowDragComponent {
    ...
    public onEnterAllowed(args) {
        this.changeGhostIcon(args.drag.dragGhost, DragIcon.ALLOW);
    }

    public onLeaveAllowed(args) {
        this.changeGhostIcon(args.drag.dragGhost, DragIcon.DEFAULT);
    }

    private changeGhostIcon(ghost, icon: string) {
        if (ghost) {
            const currentIcon = ghost.querySelector(".igx-grid__drag-indicator  > igx-icon");
            if (currentIcon) {
                currentIcon.innerText = icon;
            }
        }
    }

}
```
`changeGhostIcon` **프라이빗** 메소드는 드래그 고스트 내부의 아이콘을 변경합니다. 이 메소드의 논리는 아이콘이 포함된 요소(드래그 인디케이터 컨테이너에 적용된 `igx-grid__drag-indicator` 클래스 사용)를 찾아 요소의 내부 텍스트를 전달된 것으로 변경합니다.
아이콘 자체는 [`재료` 폰트 세트](https://material.io/tools/icons/)에 있으며 별도의 **`enum`**으로 정의됩니다:
@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {
```typescript
enum DragIcon {
    DEFAULT = "drag_indicator",
    ALLOW = "remove"
}
```
}
@@if (igxName === 'IgxGrid') {
```typescript
enum DragIcon {
    DEFAULT = "drag_indicator",
    ALLOW = "add"
}
```
}

다음으로, 사용자가 실제로 드롭 영역 내에 행을 *드롭*할 때 실행되는 것을 정의해야 합니다.
@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {
```typescript
export class @@igxNameRowDragComponent {
    ...
    public onDropAllowed(args: IgxDropEventArgs) {
        args.cancel = true;
        const draggedRow: @@igxNameGridRowComponent = args.dragData;
        draggedRow.delete();
    }

}
```

행이 드롭되면 다음을 실행합니다:
- 이벤트 취소
- 행의 [`delete()`]({environment:angularApiUrl}/classes/@@igxNameRowComponent.html#delete) 메소드를 호출
}

@@if (igxName === 'IgxGrid') {
```typescript
export class @@igxNameRowDragComponent {
    @ViewChild("sourceGrid", { read: IgxGridComponent }) public sourceGrid: IgxGridComponent;
    @ViewChild("targetGrid", { read: IgxGridComponent }) public targetGrid: IgxGridComponent;
    ... 
    public onDropAllowed(args) {
        args.cancel = true;
        this.targetGrid.addRow(args.dragData.rowData);
        this.sourceGrid.deleteRow(args.dragData.rowID);
    }
    ...
}
```

`ViewChild` 데코레이터와 드롭 핸들을 통해 각 그리드에 대한 참조를 다음과 같이 정의합니다:
- 이벤트 취소
- 드롭되는 행의 데이터를 포함하는 행을 `targetGrid`에 추가
- 드래그한 행을 `sourceGrid`에서 삭제
}

#### 드래그 아이콘 템플레이팅
드래그 핸들 아이콘은 그리드의 [`dragIndicatorIconTemplate`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#dragindicatoricontemplate)를 사용하여 템플레이팅할 수 있습니다. 구축 중인 예제에서 아이콘을 기본(`drag_indicator`)에서 `drag_handle`로 변경해 보겠습니다.
이를 위해 `igxDragIndicatorIcon`을 사용하여 `@@igSelector`의 내부에 템플릿을 전달할 수 있습니다:
```html
<@@igSelector>
...
    <ng-template igxDragIndicatorIcon>
        <igx-icon>drag_handle</igx-icon>
    </ng-template>
...
</@@igSelector>
```


새로운 아이콘 템플릿을 설정하면  `DragIcon enum`에서 `DEFAULT` 아이콘도 조정해야 하므로 `changeIcon` 메소드에 의해 적절히 변경됩니다:
```typescript
enum DragIcon {
    DEFAULT = "drag_handle",
    ...
}
```

@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {
#### 드롭 영역 스타일
드롭 핸들러가 올바르게 설정되면 드롭 영역 스타일만 약간 설정하면 됩니다:
```css
.drop-area {
    width: 160px;
    height: 160px;
    background-color: #d3d3d3;
    border: 1px dashed #131313;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    text-align: center;
    margin: 8px;
}

:host {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    width: 100%;
}
```

결과는 아래의 데모에서 볼 수 있습니다:
}
@@if (igxName === 'IgxGrid') {
드롭 핸들러가 올바르게 설정되면 잘 된 것입니다!
구성 결과는 다음과 같을 것입니다:
}

#### 예제 데모
@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-row-drag-to-grid-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-row-drag-to-grid' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-row-drag-to-grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>

The following sample demonstrates how to configure row reordering in the grid. Holding onto the drag icon will allow you to move a row anywhere in the grid.
<div class="sample-container loading" style="height:830px">
    <iframe id="grid-row-reorder" src='{environment:demosBaseUrl}/grid/grid-row-reorder' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-row-reorder" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}

@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:560px">
    <iframe id="tree-grid-row-drag-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/tree-grid-row-drag' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-row-drag-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider--half"></div>

The following sample demonstrates how to configure row reordering in the tree grid. Notice that we also have row selection enabled and we preserve the selection when dropping the dragged row.
<div class="sample-container loading" style="height:560px">
    <iframe id="tree-grid-row-reorder-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/tree-grid-row-reordering' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-row-reorder-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div> 
}

@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:560px">
    <iframe id="hierarchical-grid-row-drag-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-row-drag' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-row-drag-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider--half"></div>

The following sample demonstrates how to configure row reordering in the hierarchical grid.
Notice that we also have row selection enabled and we preserve the selection when dropping the dragged row.
<div class="sample-container loading" style="height:560px">
    <iframe id="hierarchical-grid-row-reorder-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-row-reorder' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-row-reorder-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div> 
}

### 제한 사항

`rowDraggable` 지시문을 사용할 경우, 고려해야 할 몇 가지 사항이 있습니다:
> [!NOTE]
> 행 드롭 이벤트를 처리할 경우, 행 드래그 고스트의 남은 요소가 표시되지 않도록 `eventArgs.cancel`을 **`true`**로 설정해야 합니다 

## API 참조

* [rowDraggable]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowdraggable)
* [onRowDragStart]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onrowdragstart)
* [onRowDragEnd]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onrowdragend)
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)

## 추가 리소스
<div class="divider--half"></div>

* [@@igComponent 개요](@@igMainTopic.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
