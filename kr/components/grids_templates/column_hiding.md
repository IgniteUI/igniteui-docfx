@@if (igxName === 'IgxGrid') {
---
title: 열 숨기기 컴포넌트 - 네이티브 Angular | Ignite UI for Angular
_description: Column hiding with the Ignite UI for Angular Column Hiding component allows the users hide and show columns by using a built-in UI of the Data Grid.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Grid, Angular Table, Angular Data Grid component, Angular Data Table component, Angular Data Grid control, Angular Data Table control, Angular Grid component, Angular Table component, Angular Grid control, Angular Table control, Angular High Performance Grid, Angular High Performance Data Table, grid column hiding, column hiding, angular grid column hiding, angular data table column hiding, angular column hiding
_language: kr
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: 열 숨기기 컴포넌트 - 네이티브 Angular | Ignite UI for Angular
_description: Column hiding with the Ignite UI for Angular Column Hiding component allows the users hide and show columns by using a built-in UI of the Tree Grid.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Tree Grid, Angular Tree Table, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular High Performance Tree Grid, Angular High Performance Tree Table, tree grid column hiding, column hiding, angular tree grid column hiding, angular tree table column hiding, angular column hiding
_language: kr
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: 열 숨기기 컴포넌트 - 네이티브 Angular | Ignite UI for Angular
_description: Column hiding with the Ignite UI for Angular Column Hiding component allows the users hide and show columns by using a built-in UI of the Hierarchical Grid.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Hierarchical Grid, Angular Hierarchical Table, Angular Hierarchical Grid component, Angular Hierarchical Table component, Angular Hierarchical Grid control, Angular Hierarchical Table control, Angular High Performance Hierarchical Grid, Angular High Performance Hierarchical Table, hierarchical grid column hiding, column hiding, angular hierarchical grid column hiding, angular hierarchical table column hiding, angular column hiding
_language: kr
---
}


### @@igComponent 열 숨기기

Ignite UI for Angular @@igComponent는 사용자가 **UI**를 통해 직접 열을 숨기거나 표시할 수 있도록 하는 [`IgxColumnHidingComponent`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html)를 제공합니다. @@igComponent에 내장된 열 숨기기 UI가 있으며 @@igComponent 도구 모음을 통해 사용할 수 있습니다. 또한, 개발자가 열 숨기기 UI를 별도의 컴포넌트로 정의하여 페이지에서 원하는 위치에 배치할 수 있습니다.

#### 데모

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="grid-column-hiding-toolbar-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-column-hiding-toolbar-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-column-hiding-toolbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="treegrid-column-hiding-toolbar-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-column-hiding-toolbar' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-column-hiding-toolbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:570px">
    <iframe id="hierarchicalgrid-column-hiding-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-hiding' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchicalgrid-column-hiding-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider--half"></div>

}

### @@igComponent 설정
@@igComponent를 작성하고 데이터를 바인딩하는 것으로 시작합니다. 또한, 열에서 필터링 및 정렬을 사용할 수 있습니다.

@@if (igxName === 'IgxGrid') {
```html
<!--columnHiding.component.html-->

<igx-grid #grid id="grid" [data]="data" [autoGenerate]="false" width="100%" height="560px" columnWidth="200px" [allowFiltering]="true">
    <igx-column [field]="'ID'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'ContactName'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'ContactTitle'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'City'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'CompanyName'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Fax'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Address'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'PostalCode'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Country'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Phone'" dataType="string" [sortable]="true"></igx-column>
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
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
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata"
        [height]="'560px'" [width]="'100%'" columnWidth="200px" [allowFiltering]="true" #hGrid>
            <igx-column field="Artist" [sortable]="true" [disableHiding]="true"></igx-column>
            <igx-column field="Photo">
                <ng-template igxCell let-cell="cell">
                    <div class="cell__inner_2">
                        <img [src]="cell.value" class="photo" />
                    </div>
                </ng-template>
            </igx-column>
            <igx-column field="Debut" [sortable]="true"></igx-column>
            <igx-column field="Grammy Nominations" [sortable]="true"></igx-column>
            <igx-column field="Grammy Awards" [sortable]="true"></igx-column>

            <igx-row-island [key]="'Albums'" [autoGenerate]="false" #layout1 >
                <igx-column field="Album" [sortable]="true"></igx-column>
                <igx-column field="Launch Date" [sortable]="true"></igx-column>
                <igx-column field="Billboard Review" [sortable]="true"></igx-column>
                <igx-column field="US Billboard 200" [sortable]="true"></igx-column>
            <igx-row-island [key]="'Songs'" [autoGenerate]="false">
                    <igx-column field="No."></igx-column>
                    <igx-column field="Title"></igx-column>
                    <igx-column field="Released"></igx-column>
                    <igx-column field="Genre"></igx-column>
            </igx-row-island>
        </igx-row-island>

        <igx-row-island [key]="'Tours'" [autoGenerate]="false">
            <igx-column field="Tour"></igx-column>
            <igx-column field="Started on"></igx-column>
            <igx-column field="Location"></igx-column>
            <igx-column field="Headliner"></igx-column>
        </igx-row-island>

        </igx-hierarchical-grid>
```
}

### 도구 모음의 열 숨기기 UI

내장된 열 숨기기 UI는 @@igComponent 도구 모음의 [`IgxDropDownComponent`]({environment:angularApiUrl}/classes/igxdropdowncomponent.html)안에 배치됩니다. 이 정밀한 드롭 다운을 사용하여 열 숨기기 UI를 표시/비표시할 수 있습니다.
이를 위해 @@igComponent의 [`showToolbar`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#showtoolbar) 및 [`columnhiding`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnhiding) 속성을 true로 설정해야 합니다. 도구 모음이 활성화되어 있지 않으면 [`columnhiding`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnhiding) 속성을 활성화해도 아무 효과가 없습니다.
[`toolbarTitle`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#toolbartitle) 속성과 @@igComponent' 래퍼에 사용자 스타일을 설정하여 도구 모음에 제목을 추가합니다.

@@if (igxName === 'IgxHierarchicalGrid') {
```html
<!--columnHiding.component.html-->
<div class="hgrid-sample">
    <igx-hierarchical-grid class="hgrid" [data]="localdata" [showToolbar]="true"[columnHiding]="true" toolbarTitle="Singers">
    ...
 </igx-hierarchical-grid>
</div>
```
```css
/* columnHiding.component.css */
.photo {
    vertical-align: middle;
    max-height: 62px;
}
.cell__inner_2 {
    margin: 1px
}
```
}

@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {
```html
<!--columnHiding.component.html-->

<div class="grid__wrapper">
    <@@igSelector ... [showToolbar]="true" [columnHiding]="true" toolbarTitle="Employees">
        ...
    </@@igSelector>
</div>
```

```css
/* columnHiding.component.css */

.grid__wrapper {
    margin: 10px;
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {

}


@@igComponent는 도구 모음의 열 숨기기 UI를 사용할 때 유용한 속성을 제공합니다.
[`columnHidingTitle`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnhidingtitle) 및 [`hiddenColumnsText`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#hiddencolumnstext) 속성을 사용하여 도구 모음의 드롭다운 버튼에 표시되는 제목과 텍스트를 설정합니다. 더 구체적으로 [`hiddenColumnsText`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#hiddencolumnstext)는 버튼에 기본적으로 포함된 열 카운트 수의 오른쪽에 표시됩니다.
[`hiddenColumnsText`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#hiddencolumnstext) 속성은 로컬리제이션 목적으로도 사용할 수 있어 매우 편리합니다.

@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {
```html
<!--columnHiding.component.html-->

<div class="grid__wrapper">
    <@@igSelector ... [showToolbar]="true" [columnHiding]="true" toolbarTitle="Employees" columnHidingTitle="Column Hiding" hiddenColumnsText="Hidden">
        ...
    </@@igSelector>
</div>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<div class="hgrid-sample">
    <igx-hierarchical-grid class="hgrid" [data]="localdata" [showToolbar]="true"[columnHiding]="true" toolbarTitle="Singers" 
    columnHidingTitle="Column Hiding" hiddenColumnsText="Hidden">
 </igx-hierarchical-grid>
</div>
```
}

열 숨기기 UI의 [`columnsAreaMaxHeight`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html#columnsareamaxheight) 속성을 사용하여 열이 포함된 영역의 최대 높이를 설정할 수 있습니다. 이 방법으로 열이 너무 많아 컨테이너에 모두 들어가지 않을 경우, 스크롤바가 표시되어 임의의 열로 이동할 수 있으며, 검색 입력은 상단에 핀 고정되고 표시/숨기기 버튼은 하단에 핀 고정됩니다.

```typescript
// columnHiding.component.ts

public ngAfterViewInit() {        
    this.@@igObjectRef.toolbar.columnHidingUI.columnsAreaMaxHeight = "200px";
}
```

열 숨기기 UI에 확장된 기능 세트를 사용하려면 열 숨기 UI 컴포넌트 자체에 대한 참조를 반환하는 도구 모음의 [`columnHidingUI`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html#columnhidingui) 속성을 사용합니다. 이렇게 하면 각 API에 접속하여 애플리케이션의 요구에 따라 사용할 수 있습니다.

이 조항 시작 부분에 있는 코드의 결과는 [열 숨기기 데모](#demo) 부분에서 확인할 수 있습니다.

@@if (igxName !== 'IgxHierarchicalGrid') {
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

[`IgxColumnHidingComponent`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html)를 작성합니다! 이 애플리케이션에서는 그리드 옆에 배치합니다(도구 모음의 열 숨기기 UI와 다르며, 컴포넌트는 디자인에 의해 드롭 다운 안에 있음). 또한, 컴포넌트의 [`columns`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html#columns) 속성을 @@igComponent의 열에 설정하고 일부 사용자 스타일을 추가하여 애플리케이션을 더욱 유용하게 합니다!

@@if (igxName === 'IgxGrid') {
```html
<!--columnHiding.component.html-->

<div class="columnHidingContainer">
    <igx-column-hiding #columnHidingUI [columns]="@@igObjectRef.columns">
    </igx-column-hiding>
</div>
<div class="gridContainer">
    <@@igSelector #@@igObjectRef [data]="data" [autoGenerate]="false" width="100%" height="500px" columnWidth="200px">
        ...
    </@@igSelector>
</div>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<!--columnHiding.component.html-->

<div class="columnHidingContainer">
    <igx-column-hiding #columnHidingUI [columns]="@@igObjectRef.columns">
    </igx-column-hiding>
</div>
<div class="gridContainer">
    <@@igSelector #@@igObjectRef [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" width="100%" height="500px" columnWidth="200px">
        ...
    </@@igSelector>
</div>
```
}

@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {
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
}

#### 제목 및 필터 프롬프트 추가

열 숨기기 컴포넌트의 사용자 기능을 확장시키기 위해 [`title`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html#title) 및 [`filterColumnsPrompt`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html#filtercolumnsprompt) 속성을 설정합니다! [`title`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html#title)이 맨 위에 표시되고 [`filterColumnsPrompt`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html#filtercolumnsprompt)는 열 숨기기 UI의 필터 입력에 표시되는 프롬프트 텍스트입니다.

```html
<!--columnHiding.component.html-->

<div class="columnHidingContainer">
    <igx-column-hiding #columnHidingUI [columns]="@@igObjectRef.columns"
                       title="Column Hiding" filterColumnsPrompt="Type here to search">
    </igx-column-hiding>
</div>
```

#### 열 표시 순서 옵션 추가

사용자가 열 숨기기 UI에서 열의 표시 순서를 선택할 수도 있습니다. 이를 위해 [`columnDisplayOrder`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html#columndisplayorder) 속성을 사용하며 이 속성은 열거형 속성으로 다음 옵션을 포함합니다:

- **Alphabetical**(알파벳순으로 열 순서를 정렬)
- **DisplayOrder**(@@igComponent에 표시되는 순서에 따라 열 순서를 정렬)

이 옵션에 잘 디자인된 두 개의 라디오 버튼을 추가합니다! [**IgxRadio**](../radio_button.md) 모듈에 추가하기만 하면 됩니다.

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

@@if (igxName === 'IgxGrid') {
```html
<!--columnHiding.component.html-->

<div class="gridContainer">
    <igx-grid ... >
        ...
        <igx-column [field]="'ContactName'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
        <igx-column [field]="'ContactTitle'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
        ...
    </igx-grid>
</div>
```
}
@@if (igxName === 'IgxTreeGrid') {
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
}

모든 것이 잘 진행되었다면 다음과 같이 열 숨기기 UI 컴포넌트가 표시됩니다:

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="grid-column-hiding-sample-iframe" data-src='{environment:demosBaseUrl}/grid/grid-column-hiding-sample' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-column-hiding-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="treegrid-column-hiding-sample-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-column-hiding' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-column-hiding-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider--half"></div>
}
}
### API 참조

@@if (igxName !== 'IgxHierarchicalGrid') {
이 조항에서는 @@igComponent 도구 모음에 내장된 열 숨기기 UI를 사용하는 방법과 별도의 컴포넌트로 정의하는 방법을 설명했습니다. 사용자가 다른 열 순서 중에서 선택할 수 있는 기능을 제공하는 UI를 장착하여 사용자 제목 및 필터 프롬프트 텍스트를 설정했습니다. 또한, Ignite UI for Angular 컴포넌트 [**IgxRadio**](../radio_button.md) 버튼을 추가로 사용했습니다.
}
@@if (igxName === 'IgxHierarchicalGrid') {
이 항목에서는 @@igComponent 도구 모음에 정의된 열 숨기기 UI를 사용하는 방법을 설명했습니다.
}

열 숨기기 UI에는 아래에 나열된 몇 가지 API가 추가로 포함되어 있습니다.

* [IgxColumnHidingComponent]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html)
* [IgxColumnHidingComponent 스타일]({environment:sassApiUrl}/index.html#function-igx-column-hiding-theme)

사용된 상대 API가 있는 추가 컴포넌트 및/또는 지시문:

[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) 속성:
* [columnHiding]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnhiding)
* [columnHidingTitle]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnhidingtitle)
* [hiddenColumnsCount]({environment:angularApiUrl}/classes/@@igTypeDoc.html#hiddencolumnscount)
* [hiddenColumnsText]({environment:angularApiUrl}/classes/@@igTypeDoc.html#hiddencolumnstext)

[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) 속성:
* [disableHiding]({environment:angularApiUrl}/classes/igxcolumncomponent.html#disablehiding)

[`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) 속성:
* [columnHidingUI]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html#columnhidingui)
* [columnHidingDropdown]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html#columnhidingdropdown)

[`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) 메소드:
* [toggleColumnHidingUI]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html#togglecolumnhidingui)

[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) 이벤트:
* [onColumnVisibilityChanged]({environment:angularApiUrl}/classes/@@igTypeDoc.html#oncolumnvisibilitychanged)

[IgxRadioComponent]({environment:angularApiUrl}/classes/igxradiocomponent.html)

스타일:

* [@@igxNameComponent 스타일]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxRadioComponent 스타일]({environment:sassApiUrl}/index.html#function-igx-radio-theme)

### 추가 리소스
<div class="divider--half"></div>

* [@@igComponent 개요](@@igMainTopic.md)
* [가상화 및 성능](virtualization.md)
* [필터링](filtering.md)
* [페이징](paging.md)
* [정렬](sorting.md)
* [요약](summaries.md)
* [열 핀 고정](column_pinning.md)
* [열 크기 조정](column_resizing.md)
* [선택](selection.md)
@@if (igxName !== 'IgxHierarchicalGrid') {* [검색](search.md)}

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
