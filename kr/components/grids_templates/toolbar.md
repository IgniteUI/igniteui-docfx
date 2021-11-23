@@if (igxName === 'IgxGrid') {
---
title: 그리드 도구 모음 컴포넌트- 네이티브 Angular | Ignite UI for Angular
_description: With the Ignite UI for Angular Grid Toolbar component you can have a centralized location for IgxGrid features UI controls.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Grid, Angular Table, Angular Data Grid component, Angular Data Table component, Angular Data Grid control, Angular Data Table control, Angular Grid component, Angular Table component, Angular Grid control, Angular Table control, Angular High Performance Grid, Angular High Performance Data Table, Angular Data Grid Toolbar, Angular Data Table Toolbar, Grid Toolbar, Angular Grid Toolbar, Angular Table Toolbar, excel export, grid column hiding chooser, grid column pinning chooser, data table column hiding, data table column pinning
_language: kr
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: 트리 그리드 도구 모음 컴포넌트- 네이티브 Angular | Ignite UI for Angular
_description: With the Ignite UI for Angular Tree Grid Toolbar component you can have a centralized location for IgxTreeGrid features UI controls.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Tree Grid, Angular Tree Table, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular High Performance Tree Grid, Angular High Performance Tree Table, Angular Tree Grid Toolbar, Angular Tree Table Toolbar, Tree Grid Toolbar, Angular Tree Grid Toolbar, Angular Tree Table Toolbar, excel export, tree grid column hiding chooser, tree grid column pinning chooser, tree table column hiding, tree table column pinning
_language: kr
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: 계층 그리드 도구 모음 컴포넌트- 네이티브 Angular | Ignite UI for Angular
_description: With the Ignite UI for Angular Hierarchical Grid Toolbar component you can have a centralized location for IgxHierarchicalGrid features UI controls.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Hierarchical Grid, Angular Hierarchical Table, Angular Hierarchical Grid component, Angular Hierarchical Table component, Angular Hierarchical Grid control, Angular Hierarchical Table control, Angular High Performance Hierarchical Grid, Angular High Performance Hierarchical Table, Angular Hierarchical Grid Toolbar, Angular Hierarchical Table Toolbar, Hierarchical Grid Toolbar, excel export, hierarchical grid column hiding chooser, hierarchical grid column pinning chooser, hierarchical table column hiding, hierarchical table column pinning
_language: kr
---
}
### @@igComponent 도구 모음

The @@igComponent in Ignite UI for Angular provides an [`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) which is essentially a container for **UI** operations. The Angular toolbar is located at the top of the Angular component, i.e the @@igComponent and it matches its horizontal size. The toolbar container can host predefined UI controls for the following @@igComponent's features:

 - Column Hiding
 - Column Pinning
 - Excel Exporting
 - Advanced Filtering

or just any other custom content. The toolbar and the predefined UI components support Angular events and expose API for developers.

#### 데모

@@if (igxName === 'IgxGrid') {

<code-view style="height:420px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-toolbar-sample-1" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:420px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-4" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:510px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-title" >
</code-view>

}

The predefined `actions` and `title` UI components are added inside the `<igx-grid-toolbar>` and this is all needed to have a toolbar providing default interactions with the corresponding Grid features:

@@if (igxName === 'IgxGrid') {
```html
    <igx-grid-toolbar>
        <igx-grid-toolbar-title>Grid Toolbar</igx-grid-toolbar-title>
        <igx-grid-toolbar-actions>
            <igx-grid-toolbar-advanced-filtering><igx-grid-toolbar-advanced-filtering>
            <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
            <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
            <igx-grid-toolbar-exporter></igx-grid-toolbar-exporter>
        </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true">
    <igx-grid-toolbar>
        <igx-grid-toolbar-title>Tree Grid Toolbar</igx-grid-toolbar-title>
        <igx-grid-toolbar-actions>
            <igx-grid-toolbar-advanced-filtering><igx-grid-toolbar-advanced-filtering>
            <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
            <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
            <igx-grid-toolbar-exporter></igx-grid-toolbar-exporter>
        </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid [data]="data">
    <igx-grid-toolbar>
        <igx-grid-toolbar-title>Hierarchical Grid Toolbar</igx-grid-toolbar-title>
        <igx-grid-toolbar-actions>
            <igx-grid-toolbar-advanced-filtering><igx-grid-toolbar-advanced-filtering>
            <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
            <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
            <igx-grid-toolbar-exporter></igx-grid-toolbar-exporter>
        </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
</igx-hierarchical-grid>
```
}

> Note: As seen in the code snippet above, the predefined `actions` UI components are wrapped in the [`<igx-grid-toolbar-actions>` container]({environment:angularApiUrl}/classes/igxgridtoolbaractionsdirective.html). This way, the toolbar title is aligned to the left of the toolbar and the actions are aligned to the right of the toolbar.

Of course, each of these UIs can be added independently of each other, or may not be added at all. This way the toolbar container will be rendered empty:

@@if (igxName === 'IgxGrid') {
```html
<igx-grid [data]="data" [autoGenerate]="true">
    <igx-grid-toolbar>
    </igx-grid-toolbar>
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true">
    <igx-grid-toolbar>
    </igx-grid-toolbar>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid [data]="data">
    <igx-grid-toolbar>
    </igx-grid-toolbar>
</igx-hierarchical-grid>
```
}

For a comprehensive look over each of the default UI components, continue reading the **Features** section
below.

#### 기능

The toolbar is great at separating logic/interactions which affects the grid as a whole.
As shown above, it can be configured to provide default components for controlling, column hiding, column pinning,
advanced filtering and exporting data from the grid.
These features can be enabled independently from each other by following a pattern similar to the card component of
the Ignite UI for Angular suite.
Listed below are the main features of the toolbar with example code for each of them.

@@if (igxName === 'IgxHierarchicalGrid') {
> [!NOTE]
> 계층 그리드 또는 하위 그리드를 계층 아래로 내보내기를 하는 경우, 내보내기를 한 데이터는 각 그리드에 속한
> 행의 플랫 컬렉션이 됩니다(하위 그리드는 내보내기를 한 데이터에 포함되지 않음).
}

각 버튼의 텍스트를 설정하는 속성에 대해서는 이하의 API 부분에 열거되어 있습니다.

@@if (igxName === 'IgxGrid') {

<code-view style="height:420px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-toolbar-sample-2" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:420px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-1" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:510px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-options" >
</code-view>

}

다음 코드 조각은 도구 모음의 모든 기능을 활성화하는 방법을 보여줍니다:

@@if (igxName === 'IgxGrid') {
```html
<igx-grid [data]="data" [autoGenerate]="true" height="400px" width="600px"
    [showToolbar]="true"
    toolbarTitle="Grid Title"
    [columnHiding]="true"
    [columnPinning]="true"
    [exportExcel]="true"
    [exportCsv]="true"
    exportText="Export"
    exportExcelText="Export to Excel"
    exportCsvText="Export to CSV">
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true" height="400px" width="900px"
    [showToolbar]="true"
    toolbarTitle="Tree Grid Toolbar"
    [columnHiding]="true"
    [columnPinning]="true"
    [exportExcel]="true"
    [exportCsv]="true"
    exportText="Export"
    exportExcelText="Export to Excel"
    exportCsvText="Export to CSV">
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
 <igx-hierarchical-grid #hierarchicalGrid class="hgrid" [data]="localdata" [showToolbar]="true" toolbarTitle="Singers" 
    [columnHiding]="true" [columnPinning]="true" [height]="'500px'" [width]="'100%'">
...
</igx-hierarchical-grid>
```
}

MS Excel로 내보내기 및 CSV로 내보내기 기능은 공급자로 각각 [`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) 및 [`IgxCsvExporterService`]({environment:angularApiUrl}/classes/igxcsvexporterservice.html)를 사용합니다. 이들 중 하나를 사용해야 하는 경우에는 **app.module.ts** 파일의 **공급자** 배열에서 지정해야 합니다. 예를 들면, 다음의 코드 조각은 모든 내보내기 서비스를 포함하는 방법을 보여줍니다:

```typescript
// app.module.ts

...
import { IgxExcelExporterService, IgxCsvExporterService } from "igniteui-angular";

@NgModule({
  providers: [ IgxExcelExporterService, IgxCsvExporterService ]
})

export class AppModule {}
```
@@if (igxName !== 'IgxHierarchicalGrid') {
#### 내보내기 사용자 정의

단순히 도구 모음 기능을 켜거나 끄는 것 외에도 내보내기 처리는 사용자가 내보내기 처리를 초기화할 때 생성되는 [`toolbarExporting`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#toolbarExporting) 이벤트에서 상세 설정할 수 있습니다. 이 이벤트는 내보내기와 내보내기 옵션을 모두 보여줍니다.

> [!NOTE]
> 기본적으로 CSV로 내보내기를 할 때 내보내기는 쉼표 구분 기호를 사용하여 내보내기를 하며 출력 파일에는 '.csv' 확장자를 사용합니다.
> 내보내기 이벤트에 서브스크라이브하거나 내보내기 옵션 필드 값을 변경하여 내보내기 매개 변수를 사용자 정의할 수 있습니다.
> 또한, 이벤트 인수의 취소 필드를 true로 설정하여 내보내기 처리를 취소할 수 있습니다.

다음 코드 조각은 [`toolbarExporting`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#toolbarExporting) 이벤트에 서브스크라이브하는 방법과 기본 내보내기 처리를 취소하는 방법을 보여줍니다.

```html
<@@igSelector ... (toolbarExporting)="toolbarExportingHandler($event)"></@@igSelector>
```

```typescript
import { IgxExcelExporterService, IgxCsvExporterService } from "igniteui-angular";

...

public toolbarExportingHandler(args) {
    // You can customize the exporting from this event
    const options: IgxExporterOptionsBase = args.options ;
    options.fileName = "Custom Title";

    if (options instanceof IgxExcelExporterOptions) {
        const excelOptions = options as IgxExcelExporterOptions;
        excelOptions.columnWidth = 10;
    } else {
        const csvOptions = options as IgxCsvExporterOptions;
        csvOptions.fileType = CsvFileTypes.TSV;
        csvOptions.valueDelimiter = "\t";
    }

    args.exporter.onColumnExport.subscribe((columnArgs: IColumnExportingEventArgs) => {
        @@if (igxName === 'IgxGrid') {
        // Don't export image fields
        columnArgs.cancel = columnArgs.header === "Athlete" ||
                            columnArgs.header === "Country";
        }
        @@if (igxName === 'IgxTreeGrid') {
        // Don't export image field
        columnArgs.cancel = columnArgs.header === "Name";
        }
    });
}
```

다음 샘플에서는 내보내기 파일을 사용자 지정하는 방법을 보여줍니다.

@@if (igxName === 'IgxGrid') {

<code-view style="height:420px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-toolbar-sample-3" >
</code-view>

<div class="divider"></div>
}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:420px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-2" >
</code-view>

<div class="divider"></div>
}
}
#### 사용자 콘텐츠 템플릿

도구 모음에 특정 애플리케이션 UI(예: 사용자 버튼 등)를 추가해야 하는 경우, ng-template을 작성하고 [`igxToolbarCustomContent`]({environment:angularApiUrl}/classes/igxgridtoolbarcustomcontentdirective.html) 지시문으로 표시할 수 있습니다. 다음 코드 조각은 이러한 사용자 템플릿을 정의하는 방법을 보여줍니다:

```html
<@@igSelector [showToolbar]="true" ...>

    ...

    <ng-template igxToolbarCustomContent let-@@igObjectRef="grid">
        <button igxButton="flat" igxRipple igxRippleCentered="true" (click)="@@igObjectRef.clearSort()">
            <igx-icon fontSet="material">clear</igx-icon>
            Clear Sort
        </button>
    </ng-template>
</@@igSelector>
```

> [!NOTE]
> [`igxToolbarCustomContent`]({environment:angularApiUrl}/classes/igxgridtoolbarcustomcontentdirective.html) 지시문의 컨텍스트에는 2가지 속성이 있습니다:
> `grid` - 도구 모음이 포함된 [`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html)에 대한 참조 및
> `toolbar` - [`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html)에 대한 참조

다음 샘플은 열 헤더를 클릭하여 정렬 설정을 삭제하기 위해 버튼을 도구 모음에 추가하는 방법을 보여줍니다.

@@if (igxName === 'IgxGrid') {

<code-view style="height:420px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-toolbar-sample-4" >
</code-view>

<div class="divider"></div>
}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:420px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-3" >
</code-view>

<div class="divider"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:510px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-custom" >
</code-view>

<div class="divider"></div>
}

### API 참조

그리드 도구 모음 서비스에는 아래에 나열된 몇 가지 API가 추가로 포함되어 있습니다.

[`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html)

[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) 속성:
* [`toolbar`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#toolbar)
* [`showToolbar`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#showtoolbar)
* [`toolbarTitle`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#toolbartitle)
* [`columnHiding`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnhiding)
* [`columnHidingTitle`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnhidingtitle)
* [`hiddenColumnsText`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#hiddencolumnstext)
* [`columnPinning`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnpinning)
* [`columnPinningTitle`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnpinningtitle)
* [`pinnedColumnsText`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#pinnedcolumnstext)
* [`exportExcel`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#exportexcel)
* [`exportCsv`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#exportcsv)
* [`exportText`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#exporttext)
* [`exportExcelText`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#exportexceltext)
* [`exportCsvText`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#exportcsvtext)

[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) 이벤트:
* [`toolbarExporting`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#toolbarExporting)

스타일:

* [`@@igxNameComponent 스타일`]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

### 추가 리소스

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
