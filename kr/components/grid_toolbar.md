---
title: 그리드 도구 모음 컴포넌트- 네이티브 Angular| Ignite UI for Angular
_description: Ignite UI for Angular 그리드 도구 모음 컴포넌트를 사용하면 IgxGrid 기능 UI 컨트롤의 중앙 위치를 지정할 수 있습니다.
_keywords: Ignite UI for Angular, UI 컨트롤, Angular 위젯, 웹 위젯, UI 위젯, Angular, 네이티브 Angular 컴포넌트 세트, 네이티브 Angular 컨트롤, 네이티브 Angular 컴포넌트 라이브러리, 네이티브 Angular 컴포넌트, Angular 그리드, Angular 데이터 그리드 컴포넌트, Angular 데이터 그리드 컨트롤, Angular 그리드 컴포넌트, Angular 그리드 컨트롤, Angular 고성능 그리드, Angular 데이터 그리드 도구 모음, 그리드 도구 모음, Angular 그리드 도구 모음, Excel 내보내기, 그리드 열 숨기기 선택기, 그리드 열 핀 고정 선택기
_language: kr
---

### 그리드 도구 모음

Ignite UI for Angular 그리드는 기본적으로 **UI** 작업을 위한 컨테이너인 [`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) 기능을 제공합니다. 도구 모음은 그리드 상단에 있으며 그리드의 가로 크기와 일치합니다. 도구 모음 컨테이너는 열 숨기기, 열 핀 고정, Excel 내보내기 등 그리드 기능과 관련된 다양한 UI 컨트롤을 제공합니다.

#### 데모

<div class="sample-container loading" style="height:420px">
    <iframe id="grid-toolbar-sample-1-iframe" src='{environment:demosBaseUrl}/grid-toolbar-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>

그리드의 [`showToolbar`]({environment:angularApiUrl}/classes/igxgridcomponent.html#showtoolbar) 속성을 사용하여 IgxGrid의 도구 모음을 표시하려면 **true**로 설정합니다. 도구 모음은 텍스트 제목의 왼쪽 정렬을 지원하며 그리드의 [`toolbarTitle`]({environment:angularApiUrl}/classes/igxgridcomponent.html#toolbartitle) 속성을 사용하여 내용을 설정합니다. 다음의 코드 조각은 도구 모음을 활성화하고 제목을 설정하는 방법을 보여줍니다:

```html
<igx-grid [data]="data" [autoGenerate]="true" height="400px" width="600px"
    [showToolbar]="true"
    toolbarTitle="Grid Title">
</igx-grid>
```

#### 기능

IgxGrid의 도구 모음은 열 숨기기, 열 핀 고정, 데이터를 MS Excel 및 CSV로 내보내기 할 수 있도록 구성할 수 있습니다. 대응하는 불 속성을 true로 설정하여 각 기능을 독립적으로 활성화할 수 있습니다:
- 열 숨기기는 [`columnHiding`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columnhiding)을 **true**로 설정
- 열 핀 고정은 [`columnPinning`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columnpinning)을 **true**로 설정
- MS Excel 내보내기는 그리드의 [`exportExcel`]({environment:angularApiUrl}/classes/igxgridcomponent.html#exportexcel) 속성을 **true**로 설정
- CSV 내보내기는 그리드의 [`exportCsv`]({environment:angularApiUrl}/classes/igxgridcomponent.html#exportcsv) 속성을 **true**로 설정

각 버튼의 텍스트를 설정하는 속성에 대해서는 이하의 API 부분에 열거되어 있습니다.

<div class="sample-container loading" style="height:420px">
    <iframe id="grid-toolbar-sample-2-iframe" src='{environment:demosBaseUrl}/grid-toolbar-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>

다음 코드 조각은 도구 모음의 모든 기능을 활성화하는 방법을 보여줍니다:

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

#### 내보내기 사용자 정의

단순히 도구 모음 기능을 켜거나 끄는 것 외에도 내보내기 처리는 사용자가 내보내기 처리를 초기화할 때 생성되는 [`onToolbarExporting`]({environment:angularApiUrl}/classes/igxgridcomponent.html#ontoolbarexporting) 이벤트에서 상세 설정할 수 있습니다. 이 이벤트는 내보내기와 내보내기 옵션을 모두 보여줍니다.

> [!NOTE]
> 기본적으로 CSV로 내보내기를 할 때 내보내기는 쉼표 구분 기호를 사용하여 내보내기를 하며 출력 파일에는 '.csv' 확장자를 사용합니다.
> 내보내기 이벤트에 서브스크라이브하거나 내보내기 옵션 필드 값을 변경하여 내보내기 매개 변수를 사용자 정의할 수 있습니다.
> 또한, 이벤트 인수의 취소 필드를 true로 설정하여 내보내기 처리를 취소할 수 있습니다.

다음 코드 조각은 [`onToolbarExporting`]({environment:angularApiUrl}/classes/igxgridcomponent.html#ontoolbarexporting) 이벤트에 서브스크라이브하는 방법과 기본 내보내기 처리를 취소하는 방법을 보여줍니다.

```html
<igx-grid ... (onToolbarExporting)="toolbarExportingHandler($event)"></igx-grid>
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
        // Don't export image fields
        columnArgs.cancel = columnArgs.header === "Avatar" ||
                            columnArgs.header === "CountryFlag";
    });
}
```

다음 샘플에서는 내보내기 파일을 사용자 지정하는 방법을 보여줍니다.

<div class="sample-container loading" style="height:420px">
    <iframe id="grid-toolbar-sample-3-iframe" src='{environment:demosBaseUrl}/grid-toolbar-sample-3' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>

<div class="divider"></div>

#### Custom Content Template

If you need to add some application specific UI to the toolbar (like custom buttons for example) you may create an ng-template and mark it with the [`igxToolbarCustomContent`]({environment:angularApiUrl}/classes/igxgridtoolbarcustomcontentdirective.html) directive. The following code snippet demonstrates how to define such custom template:

```html
<igx-grid [showToolbar]="true" ...>

    ...

    <ng-template igxToolbarCustomContent let-igxGrid="grid">
        <button igxButton="flat" igxRipple igxRippleCentered="true" (click)="igxGrid.clearSort()">
            <igx-icon fontSet="material">clear</igx-icon>
            Clear Sort
        </button>
    </ng-template>
</igx-grid>
```

> [!NOTE]
> The [`igxToolbarCustomContent`]({environment:angularApiUrl}/classes/igxgridtoolbarcustomcontentdirective.html) directive's context contains two properties:
> `grid` - a reference to the [`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html) containing the toolbar and
> `toolbar` - a reference to the [`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html)

The following sample demonstrates how to add an additional button to the toolbar to clear the sorting set by clicking on the columns' headers:

<div class="sample-container loading" style="height:420px">
    <iframe id="grid-toolbar-sample-4-iframe" src='{environment:demosBaseUrl}/grid-toolbar-sample-4' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider"></div>

### API 참조

그리드 도구 모음 서비스에는 아래에 나열된 몇 가지 API가 추가로 포함되어 있습니다.

[`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html)

[`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html) properties:
* [`toolbar`]({environment:angularApiUrl}/classes/igxgridcomponent.html#toolbar)
* [`showToolbar`]({environment:angularApiUrl}/classes/igxgridcomponent.html#showtoolbar)
* [`toolbarTitle`]({environment:angularApiUrl}/classes/igxgridcomponent.html#toolbartitle)
* [`columnHiding`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columnhiding)
* [`columnHidingTitle`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columnhidingtitle)
* [`hiddenColumnsText`]({environment:angularApiUrl}/classes/igxgridcomponent.html#hiddencolumnstext)
* [`columnPinning`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columnpinning)
* [`columnPinningTitle`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columnpinningtitle)
* [`pinnedColumnsText`]({environment:angularApiUrl}/classes/igxgridcomponent.html#pinnedcolumnstext)
* [`exportExcel`]({environment:angularApiUrl}/classes/igxgridcomponent.html#exportexcel)
* [`exportCsv`]({environment:angularApiUrl}/classes/igxgridcomponent.html#exportcsv)
* [`exportText`]({environment:angularApiUrl}/classes/igxgridcomponent.html#exporttext)
* [`exportExcelText`]({environment:angularApiUrl}/classes/igxgridcomponent.html#exportexceltext)
* [`exportCsvText`]({environment:angularApiUrl}/classes/igxgridcomponent.html#exportcsvtext)

[`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html) events:
* [`onToolbarExporting`]({environment:angularApiUrl}/classes/igxgridcomponent.html#ontoolbarexporting)

스타일:

* [`IgxGridComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

### 추가 리소스

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
