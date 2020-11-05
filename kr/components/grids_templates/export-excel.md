@@if (igxName === 'IgxGrid') {
---
title: Angular Grid Export to Excel | Ignite UI for Angular | Infragistics
_description: Learn how to use the Excel Exporter service in order to export Grid data to MS Excel file. Grid Angular Material table has a rich set of helpful angular events
_keywords: data export, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid Export to Excel | Ignite UI for Angular | Infragistics
_description: Learn how to use the Excel Exporter service in order to export Grid data to MS Excel file. Grid Angular Material table has a rich set of helpful angular events
_keywords: data export, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid Export to Excel | Ignite UI for Angular | Infragistics
_description: Learn how to use the Excel Exporter service in order to export Grid data to MS Excel file. Grid Angular Material table has a rich set of helpful angular events
_keywords: data export, ignite ui for angular, infragistics
---
}

### @@igComponent Export to Excel Service

<p class="highlight">
The Excel Exporter service can export data to excel from the @@igxName. The data export functionality is encapsulated in the [`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) class and the data is exported in MS Excel table format. This format allows features like filtering, sorting, etc. To do this you need to invoke the [`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html)'s [`export`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#export) method and pass the @@igxName component as first argument to export grid easily.</p>

<div class="divider"></div>

#### Excel 내보내기 데모

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height: 300px;">
    <iframe id="excel-export-sample-iframe" src="{environment:demosBaseUrl}/services/export-excel-sample-1"
        width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="excel-export-sample-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height: 350px;">
    <iframe id="excel-export-sample-iframe" src="{environment:demosBaseUrl}/services/export-excel-tree-grid-sample"
        width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="excel-export-sample-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
    <!-- todo -->
}

<div class="divider--half"></div>

#### @@igComponent의 데이터 내보내기

IgniteUI Excel 내보내기를 사용하려면 먼저 app.module.ts 파일에서 [`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) 를 가져와서 providers 배열에 서비스를 추가합니다:

```typescript
// app.module.ts

...
import { IgxExcelExporterService } from "igniteui-angular/services/index";

@NgModule({
  providers: [ IgxExcelExporterService ]
})

export class AppModule {}
```

> **참고:** Excel 내보내기 서비스는 JSZip 라이브러리에 피어 종속됩니다. Excel 내보내기를 사용할 경우에는 JSZip 라이브러리를 설치해야 합니다.

내보내기 처리를 시작하려면 컴포넌트 템플릿에 있는 버튼 핸들러를 사용해야 합니다.

```html
<@@igSelector #@@igObjectRef [data]="localData" [autoGenerate]="true"></@@igSelector>
<button (click)="exportButtonHandler()">Export @@igxName to Excel</button>
```

컴포넌트 생성자에서 [`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) 형식의 인수를 정의하여 내보내기 서비스에 액세스할 수 있으며 Angular 프레임워크는 서비스 인스턴스를 제공합니다. 데이터를 MS Excel 형식으로 내보내기를 하려면 내보내기 서비스의 [`export`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#export) 메소드를 호출하고 @@igxName 컴포넌트를 첫 번째 인수로서 전달해야 합니다.

다음은 컴포넌트의 typescript 파일에서 내보내기 처리를 실행하는 코드입니다:

```typescript
// component.ts

...
import { IgxExcelExporterService, IgxExcelExporterOptions } from "igniteui-angular";
import { @@igxNameComponent } from "igniteui-angular";
...

@ViewChild("@@igObjectRef") public @@igObjectRef: IgxGridComponent;

constructor(private excelExportService: IgxExcelExporterService) {
}

public exportButtonHandler() {
  this.excelExportService.export(this.@@igObjectRef, new IgxExcelExporterOptions("ExportedDataFile"));
}

```

모두 다 실행되면 @@igxName 컴포넌트와 그 아래에 버튼이 표시됩니다. 버튼을 누르면 내보내기 처리가 트리거되고 브라우저에서 MS Excel 형식의 @@igComponent 컴포넌트에서 데이터를 포함한 “ExportedDataFile.xlsx” 파일을 다운로드합니다.

#### 내보내기를 하는 콘텐츠의 사용자 정의

위의 예에서 Excel 내보내기 서비스는 사용 가능한 모든 데이터를 내보내기 했습니다. 행 또는 전체 열 내보내기를 하지 말아야 하는 상황이 있을 수 있습니다. 이를 위해 각 열 및/또는 각 행에서 각각 발생하는 [`onColumnExport`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#oncolumnexport) 및/또는 [`onRowExport`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#onrowexport) 이벤트를 처리하고 이벤트 인수 객체의 [`cancel`]({environment:angularApiUrl}/interfaces/irowexportingeventargs.html#cancel) 속성을 `true`로 설정하여 해당 이벤트를 취소할 수 있습니다.

다음 예에서는 헤더가 “Age”이고 인덱스가 1인 경우, 내보내기에서 열을 제외합니다:

```typescript
// component.ts

this.excelExportService.onColumnExport.subscribe((args: IColumnExportingEventArgs) => {
  if (args.header == "Age" && args.columnIndex == 1) {
      args.cancel = true;
  }
});
this.excelExportService.export(this.@@igObjectRef, new IgxExcelExporterOptions("ExportedDataFile"));
```

@@igComponent 컴포넌트에서 데이터를 내보내기 할 때 내보내기 처리는 행 필터링 및 열 숨기기 등의 기능을 사용하고 @@igComponent 에 표시되는 데이터만 내보내기를 합니다. [`IgxExcelExporterOptions`]({environment:angularApiUrl}/classes/igxexcelexporteroptions.html) 객체의 속성을 설정하여 필터링된 행 또는 숨겨진 열을 포함하도록 내보내기 서비스를 구성할 수 있습니다. 이러한 속성은 아래 표에 설명되어 있습니다.

#### API 참조

Excel 내보내기 서비스에는 아래의 몇 가지 API가 추가로 포함되어 있습니다.

* [IgxExcelExporterService API]({environment:angularApiUrl}/classes/igxexcelexporterservice.html)
* [IgxExcelExporterOptions API]({environment:angularApiUrl}/classes/igxexcelexporteroptions.html)

사용된 추가 컴포넌트:

* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent 스타일]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

<div class="divider"></div>

#### 추가 리소스

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
