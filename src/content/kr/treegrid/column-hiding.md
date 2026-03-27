---
title: Angular Tree Grid Column Hiding | Ignite UI for Angular | Infragistics
_description: Learn how to use the Column Hiding feature that allows users to change the visible state of the columns directly through the UI of the Ignite Material UI table
_keywords: column hiding, ignite ui for angular, infragistics
---



### Tree Grid 열 숨기기

The Material UI Grid has a built-in column hiding UI, which can be used through the Tree Grid's toolbar to change the visible state of the columns. In addition, developers can always define the column hiding UI as a separate component and place it anywhere they want on the page.

#### 데모




<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-column-hiding-toolbar/" >
</code-view>

<div class="divider--half"></div>



### Tree Grid 설정
Tree Grid를 작성하고 데이터를 바인딩하는 것으로 시작합니다. 또한, 열에서 필터링 및 정렬을 사용할 수 있습니다.



```html
<!--columnHiding.component.html-->

<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" width="100%"
    height="560px" columnWidth="200px" [allowFiltering]="true">
    <igx-column [field]="'Name'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'ID'" dataType="number" [sortable]="true"></igx-column>
    <igx-column [field]="'Title'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'HireDate'" dataType="date" [sortable]="true"></igx-column>
    <igx-column [field]="'Age'" dataType="number" [sortable]="true"></igx-column>
    <igx-column [field]="'Address'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'City'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Country'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Fax'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'PostalCode'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Phone'" dataType="string" [sortable]="true"></igx-column>
</igx-tree-grid>
```



### 도구 모음의 열 숨기기 UI

The built-in Column Hiding UI is placed inside an [`IgxDropDownComponent`]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) in the Tree Grid's toolbar. We can show/hide the Column Hiding UI by using this exact dropdown.
For this purpose all we have to do is set both the [`IgxGridToolbarActionsComponent`]({environment:angularApiUrl}/classes/igxgridtoolbaractionscomponent.html) and the [`IgxGridToolbarHidingComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarhidingcomponent.html) inside of the Tree Grid. We will also add a title to our toolbar by using the [`IgxGridToolbarTitleComponent`]({environment:angularApiUrl}/classes/igxgridtoolbartitlecomponent.html) and a custom style for our Tree Grid's wrapper.




```html
<!--columnHiding.component.html-->

<div class="grid__wrapper">
    <igx-tree-grid ...>
    <igx-grid-toolbar>
        <igx-grid-toolbar-title>Employees</igx-grid-toolbar-title>
        <igx-grid-toolbar-actions>
            <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
        </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
    ...
</igx-tree-grid>
</div>
```

```css
/* columnHiding.component.css */

.grid__wrapper {
    margin: 10px;
}
```



By using the [`columnsAreaMaxHeight`]({environment:angularApiUrl}/classes/igxgridtoolbarhidingcomponent.html#columnsAreaMaxHeight) property of the IgxGridToolbarHidingComponent, we can set the maximum height of the area that contains the column actions. This way if we have a lot of actions and not all of them can fit in the container, a scrollbar will appear, which will allow us to scroll to any action we want.

```typescript
// columnHiding.component.ts

public ngAfterViewInit() {
    this.hidingActionRef.columnsAreaMaxHeight = "200px";
}
```

열 숨기기 UI에 확장된 기능 세트를 사용하려면 열 숨기 UI 컴포넌트 자체에 대한 참조를 반환하는 도구 모음의 [`columnHidingUI`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html#columnhidingui) 속성을 사용합니다. 이렇게 하면 각 API에 접속하여 애플리케이션의 요구에 따라 사용할 수 있습니다.

이 조항 시작 부분에 있는 코드의 결과는 열 숨기기 데모 부분에서 확인할 수 있습니다.


### 사용자 열 숨기기 UI

수동으로 [`IgxColumnHidingComponent`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html)를 정의하고 페이지의 원하는 위치에 배치하고 싶은 경우를 살펴 봅니다. 단순히 마크업에 컴포넌트의 인스턴스를 작성함으로써 쉽게 실행할 수 있습니다. 이를 위해 먼저 `IgxColumnHidingModule` 모듈을 추가합니다.

```typescript
// app.module.ts

...
import {
    ...
    IgxColumnHidingModule 
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxColumnHidingModule],
})
export class AppModule {}
```

[`IgxColumnHidingComponent`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html)를 작성합니다! 이 애플리케이션에서는 그리드 옆에 배치합니다(도구 모음의 열 숨기기 UI와 다르며, 컴포넌트는 디자인에 의해 드롭 다운 안에 있음). 또한, 컴포넌트의 [`columns`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html#columns) 속성을 Tree Grid의 열에 설정하고 일부 사용자 스타일을 추가하여 애플리케이션을 더욱 유용하게 합니다!



```html
<!--columnHiding.component.html-->

<div class="columnHidingContainer">
    <igx-column-hiding #columnHidingUI [columns]="treeGrid.columns">
    </igx-column-hiding>
</div>
<div class="gridContainer">
    <igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" width="100%" height="500px" columnWidth="200px">
        ...
    </igx-tree-grid>
</div>
```



```css
/* columnHiding.component.css */

.grid__wrapper {
    margin: 15px;
    display: flex;
    flex-direction: row;
}

.columnHidingContainer {
    min-width: 250px;
    height: 560px;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    border: 1px gray;
    border-radius: 10px;
    box-shadow: 1px 1px 2px 2px rgba(50, 50, 50, 0.25);
    igx-column-hiding {
        height: 460px;
    }
}

.columnsOrderOptionsContainer {
    margin-top: 20px;
    margin-bottom: 20px;
}

.gridContainer {
    width: 100%;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    margin-left: 30px;    
}
```


#### 제목 및 필터 프롬프트 추가

열 숨기기 컴포넌트의 사용자 기능을 확장시키기 위해 [`title`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html#title) 및 [`filterColumnsPrompt`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html#filtercolumnsprompt) 속성을 설정합니다! [`title`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html#title)이 맨 위에 표시되고 [`filterColumnsPrompt`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html#filtercolumnsprompt)는 열 숨기기 UI의 필터 입력에 표시되는 프롬프트 텍스트입니다.

```html
<!--columnHiding.component.html-->

<div class="columnHidingContainer">
    <igx-column-hiding #columnHidingUI [columns]="treeGrid.columns"
                       title="Column Hiding" filterColumnsPrompt="Type here to search">
    </igx-column-hiding>
</div>
```

#### 열 표시 순서 옵션 추가

사용자가 열 숨기기 UI에서 열의 표시 순서를 선택할 수도 있습니다. 이를 위해 [`columnDisplayOrder`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html#columndisplayorder) 속성을 사용하며 이 속성은 열거형 속성으로 다음 옵션을 포함합니다:

- **Alphabetical**(알파벳순으로 열 순서를 정렬)
- **DisplayOrder**(Tree Grid에 표시되는 순서에 따라 열 순서를 정렬)

이 옵션에 잘 디자인된 두 개의 라디오 버튼을 추가합니다! [**IgxRadio**](../radio-button.md) 모듈에 추가하기만 하면 됩니다.

```typescript
// app.module.ts

...
import {
    ...
    IgxRadioModule    
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxRadioModule],    
})
export class AppModule {}
```

이제는 두 라디오 버튼의 [`checked`]({environment:angularApiUrl}/classes/igxradiocomponent.html#checked) 속성을 서로 다른 조건으로 각각 바인딩하고 클릭 이벤트를 처리합니다.

```html
<!--columnHiding.component.html-->

<div class="columnHidingContainer">
    ...
    <div class="columnsOrderOptionsContainer">
        <igx-radio [checked]="columnHidingUI.columnDisplayOrder === 'Alphabetical'"
                   (click)="columnHidingUI.columnDisplayOrder = 'Alphabetical'">
            Alphabetical order
        </igx-radio>
        <igx-radio [checked]="columnHidingUI.columnDisplayOrder === 'DisplayOrder'"
                   (click)="columnHidingUI.columnDisplayOrder = 'DisplayOrder'">
            Display order
        </igx-radio>
    </div>
</div>
```

#### 열 숨기기 해제
단지 [`disableHiding`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#disablehiding) 속성을 true로 설정하면 사용자가 열 숨기기 UI를 통해 열을 숨길 수 없도록 방지할 수 있습니다.



```html
<!--columnHiding.component.html-->

<div class="gridContainer">
    <igx-tree-grid ... >
        ...
        <igx-column [field]="'Name'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
        <igx-column [field]="'Title'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
        ...
    </igx-tree-grid>
</div>
```


모든 것이 잘 진행되었다면 다음과 같이 열 숨기기 UI 컴포넌트가 표시됩니다:




<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-column-hiding/" >
</code-view>

<div class="divider--half"></div>


### API 참조


이 조항에서는 Tree Grid 도구 모음에 내장된 열 숨기기 UI를 사용하는 방법과 별도의 컴포넌트로 정의하는 방법을 설명했습니다. 사용자가 다른 열 순서 중에서 선택할 수 있는 기능을 제공하는 UI를 장착하여 사용자 제목 및 필터 프롬프트 텍스트를 설정했습니다. 또한, Ignite UI for Angular 컴포넌트 [**IgxRadio**](../radio-button.md) 버튼을 추가로 사용했습니다.



열 숨기기 UI에는 아래에 나열된 몇 가지 API가 추가로 포함되어 있습니다.

* [IgxColumnHidingComponent]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html)
* [IgxColumnHidingComponent 스타일]({environment:sassApiUrl}/themes#function-igx-column-hiding-theme)

사용된 상대 API가 있는 추가 컴포넌트 및/또는 지시문:

[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) 속성:
* [disableHiding]({environment:angularApiUrl}/classes/igxcolumncomponent.html#disablehiding)

[`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) 속성:
* [showProgress]({environment:angularApiUrl}/classes/IgxGridToolbarComponent.html#showProgress)

[`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) 메소드:

[`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) 이벤트:
* [columnVisibilityChanged]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#columnVisibilityChanged)

[IgxRadioComponent]({environment:angularApiUrl}/classes/igxradiocomponent.html)

스타일:

* [IgxTreeGridComponent 스타일]({environment:sassApiUrl}/themes#function-grid-theme)
* [IgxRadioComponent 스타일]({environment:sassApiUrl}/themes#function-radio-theme)

### 추가 리소스
<div class="divider--half"></div>

* [Tree Grid 개요](tree-grid.md)
* [가상화 및 성능](virtualization.md)
* [필터링](filtering.md)
* [페이징](paging.md)
* [정렬](sorting.md)
* [요약](summaries.md)
* [열 핀 고정](column_pinning.md)
* [열 크기 조정](column-resizing.md)
* [선택](selection.md)
* [검색](search.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
