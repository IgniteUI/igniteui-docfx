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

Ignite UI for Angular의 @@igComponent는 기본적으로 **UI** 조작을 위한 컨테이너인 [`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html)를 제공합니다. 도구 모음은 @@igComponent 상단에 있으며 @@igComponent의 가로 크기와 일치합니다. 도구 모음 컨테이너는 열 숨기기, 열 핀 고정, Excel 내보내기 등 @@igComponent 기능과 관련된 다양한 UI 컨트롤을 제공합니다.

#### 데모

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="grid-toolbar-sample-1-iframe" src='{environment:demosBaseUrl}/grid/grid-toolbar-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="treegrid-toolbar-sample-4-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-4' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-toolbar-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-toolbar-sample-1-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-title' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-toolbar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
}

@@igComponent의 [`showToolbar`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#showtoolbar) 속성을 사용하여 도구 모음을 표시하려면 **true**로 설정합니다. 도구 모음은 텍스트 제목의 왼쪽 정렬을 지원하며 @@igComponent의 [`toolbarTitle`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#toolbartitle) 속성을 사용하여 내용을 설정합니다. 다음의 코드 조각은 도구 모음을 활성화하고 제목을 설정하는 방법을 보여줍니다:

@@if (igxName === 'IgxGrid') {
```html
<igx-grid [data]="data" [autoGenerate]="true" height="400px" width="600px"
    [showToolbar]="true"
    toolbarTitle="Grid Title">
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true" height="400px" width="900px"
    [showToolbar]="true"
    toolbarTitle="Tree Grid Toolbar">
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid #hierarchicalGrid class="hgrid" [data]="localdata" [showToolbar]="true" toolbarTitle="Singers" 
     [height]="'500px'" [width]="'800px'">
</igx-hierarchical-grid>
```
}

#### 기능

도구 모음은 열 숨기기, 열 핀 고정, 데이터를 MS Excel 및 CSV로 내보내기 할 수 있도록 구성할 수 있습니다. 
대응하는 불 속성을 true로 설정하여 각 기능을 독립적으로 활성화할 수 있습니다:
- 열 숨기기는 [`columnHiding`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnhiding)을 **true**로 설정
- 열 핀 고정은 [`columnPinning`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnpinning)을 **true**로 설정
- MS Excel 내보내기는 @@igComponent의 [`exportExcel`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#exportexcel) 속성을 **true**로 설정
- CSV 내보내기는 @@igComponent의 [`exportCsv`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#exportcsv) 속성을 **true**로 설정

@@if (igxName === 'IgxHierarchicalGrid') {
> [!NOTE]
> 계층 그리드 또는 하위 그리드를 계층 아래로 내보내기를 하는 경우, 내보내기를 한 데이터는 각 그리드에 속한
> 행의 플랫 컬렉션이 됩니다(하위 그리드는 내보내기를 한 데이터에 포함되지 않음).
}

각 버튼의 텍스트를 설정하는 속성에 대해서는 이하의 API 부분에 열거되어 있습니다.

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="grid-toolbar-sample-2-iframe" data-src='{environment:demosBaseUrl}/grid/grid-toolbar-sample-2' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="treegrid-toolbar-sample-1-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-1' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-toolbar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-toolbar-sample-2-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-options' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-toolbar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
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

단순히 도구 모음 기능을 켜거나 끄는 것 외에도 내보내기 처리는 사용자가 내보내기 처리를 초기화할 때 생성되는 [`onToolbarExporting`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#ontoolbarexporting) 이벤트에서 상세 설정할 수 있습니다. 이 이벤트는 내보내기와 내보내기 옵션을 모두 보여줍니다.

> [!NOTE]
> 기본적으로 CSV로 내보내기를 할 때 내보내기는 쉼표 구분 기호를 사용하여 내보내기를 하며 출력 파일에는 '.csv' 확장자를 사용합니다.
> 내보내기 이벤트에 서브스크라이브하거나 내보내기 옵션 필드 값을 변경하여 내보내기 매개 변수를 사용자 정의할 수 있습니다.
> 또한, 이벤트 인수의 취소 필드를 true로 설정하여 내보내기 처리를 취소할 수 있습니다.

다음 코드 조각은 [`onToolbarExporting`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#ontoolbarexporting) 이벤트에 서브스크라이브하는 방법과 기본 내보내기 처리를 취소하는 방법을 보여줍니다.

```html
<@@igSelector ... (onToolbarExporting)="toolbarExportingHandler($event)"></@@igSelector>
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
<div class="sample-container loading" style="height:420px">
    <iframe id="grid-toolbar-sample-3-iframe" data-src='{environment:demosBaseUrl}/grid/grid-toolbar-sample-3' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="treegrid-toolbar-sample-2-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-2' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-toolbar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
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
<div class="sample-container loading" style="height:420px">
    <iframe id="grid-toolbar-sample-4-iframe" data-src='{environment:demosBaseUrl}/grid/grid-toolbar-sample-4' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="treegrid-toolbar-sample-3-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-3' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-toolbar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-toolbar-sample-3-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-custom' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-toolbar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
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
* [`onToolbarExporting`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#ontoolbarexporting)

스타일:

* [`@@igxNameComponent 스타일`]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

### 추가 리소스

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
