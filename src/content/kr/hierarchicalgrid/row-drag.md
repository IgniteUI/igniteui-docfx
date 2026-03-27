---
title: 계층 그리드 행 드래그
_description: The Ignite UI for Angular Hierarchical Grid control features the fastest, touch-responsive data-rich tree grid with popular features.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Hierarchical Grid, Angular Hierarchical Table, Angular Hierarchical Grid component, Angular Hierarchical Table component, Angular Hierarchical Grid control, Angular Hierarchical Table control, Angular High Performance Hierarchical Grid, Angular High Performance Hierarchical Table, Row Drag, Row Dragging, Hierarchical Grid Row Drag, Hierarchical Table Row Drag
_language: kr
---


### Hierarchical Grid 행 드래그

Ignite UI for Angular Hierarchical Grid에서 **RowDrag**는 루트 `igx-hierarchical-grid` 컴포넌트에서 초기화되며 [`rowDraggable`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowdraggable) 입력을 통해 구성할 수 있습니다. 행 드래그를 활성화하면 사용자가 행 드래그를 시작할 수 있는 행 드래그 핸들을 제공합니다.

#### 데모







<code-view style="height:560px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-row-drag/" >
</code-view>

<div class="divider--half"></div>


### 컨피규레이터

`igx-hierarchical-grid`에 행 드래그를 활성화하려면 그리드의 [`rowDraggable`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowdraggable)을 **`true`**로 설정하면 됩니다. 이 기능이 활성화되면 각 행에 행 드래그 핸들이 표시됩니다. 이 핸들은 행 드래그를 시작하는 데 사용할 수 있습니다.

```html
<igx-hierarchical-grid [rowDraggable]="true">
 ...
</igx-hierarchical-grid>
```
버튼을 누른 상태에서 드래그 핸들을 클릭하고 *커서를 움직이면* 그리드의 [`rowDragStart`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowDragStart) 이벤트가 실행됩니다. 언제든지 클릭을 해제하면 [`rowDragEnd`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowDragEnd) 이벤트가 실행됩니다.

아래에서 행 드래그를 지원하도록 `igx-hierarchical-grid`를 구성하는 방법과 드롭 이벤트를 적절하게 처리하는 방법에 대한 내용을 살펴볼 수 있습니다.


이 예제에서는 그리드에서 지정된 영역으로 행을 드래그하여 놓을 경우, 그리드에서 행을 삭제하는 것을 보여 줍니다.



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


```html
<div class="drop-area" igxDrop (onEnter)="onEnterAllowed($event)" (onLeave)="onLeaveAllowed($event)"
(onDrop)="onDropAllowed($event)">
    <igx-icon>delete</igx-icon>
    <div>Drag a row here to delete it</div>
</div>
```



#### 드롭 영역 이벤트 핸들러

템플릿에서 드롭 영역을 정의한 후에는 컴포넌트의 `.ts` 파일에 있는 `igxDrop`의 [`onEnter`]({environment:angularApiUrl}/classes/igxdropdirective.html#onenter), [`onLeave`]({environment:angularApiUrl}/classes/igxdropdirective.html#onleave) 및 [`onDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html#ondrop) 이벤트에 대한 핸들러를 선언해야 합니다.

먼저, `onEnter` 및 `onLeave` 핸들러를 살펴보겠습니다. 이 방법은 드래그 *고스트* 아이콘을 변경하여 사용자가 행을 드롭할 수 있는 영역 위에 있음을 표시할 수 있습니다:

```typescript
export class IgxHierarchicalGridRowDragComponent {
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

```typescript
enum DragIcon {
    DEFAULT = "drag_indicator",
    ALLOW = "remove"
}
```



다음으로, 사용자가 실제로 드롭 영역 내에 행을 *드롭*할 때 실행되는 것을 정의해야 합니다.

```typescript
export class IgxHierarchicalGridRowDragComponent {
    ...
    public onDropAllowed(args: IgxDropEventArgs) {
        args.cancel = true;
        const draggedRow: IgxHierarchicalGridGridRowComponent = args.dragData;
        draggedRow.delete();
    }

}
```

행이 드롭되면 다음을 실행합니다:
- 이벤트 취소
- 행의 [`delete()`]({environment:angularApiUrl}/classes/IgxHierarchicalGridRowComponent.html#delete) 메소드를 호출




#### 드래그 아이콘 템플레이팅
드래그 핸들 아이콘은 그리드의 [`dragIndicatorIconTemplate`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#dragindicatoricontemplate)를 사용하여 템플레이팅할 수 있습니다. 구축 중인 예제에서 아이콘을 기본(`drag_indicator`)에서 `drag_handle`로 변경해 보겠습니다.
이를 위해 `igxDragIndicatorIcon`을 사용하여 `igx-hierarchical-grid`의 내부에 템플릿을 전달할 수 있습니다:
```html
<igx-hierarchical-grid>
...
    <ng-template igxDragIndicatorIcon>
        <igx-icon>drag_handle</igx-icon>
    </ng-template>
...
</igx-hierarchical-grid>
```


새로운 아이콘 템플릿을 설정하면  `DragIcon enum`에서 `DEFAULT` 아이콘도 조정해야 하므로 `changeIcon` 메소드에 의해 적절히 변경됩니다:
```typescript
enum DragIcon {
    DEFAULT = "drag_handle",
    ...
}
```


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



#### 예제 데모






<code-view style="height:560px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-row-drag/" >
</code-view>

<div class="divider--half"></div>

The following sample demonstrates how to configure row reordering in the hierarchical grid.
Notice that we also have row selection enabled and we preserve the selection when dropping the dragged row.

<code-view style="height:560px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-row-reorder/" >
</code-view>

<div class="divider--half"></div> 


### 제한 사항

`rowDraggable` 지시문을 사용할 경우, 고려해야 할 몇 가지 사항이 있습니다:
> [!NOTE]
> 행 드롭 이벤트를 처리할 경우, 행 드래그 고스트의 남은 요소가 표시되지 않도록 `eventArgs.cancel`을 **`true`**로 설정해야 합니다 

## API 참조

* [rowDraggable]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowdraggable)
* [rowDragStart]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowDragStart)
* [rowDragEnd]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowDragEnd)
* [IgxHierarchicalGridComponent]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)

## 추가 리소스
<div class="divider--half"></div>

* [Hierarchical Grid 개요](hierarchical-grid.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
