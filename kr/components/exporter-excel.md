---
title: Excel로 내보내기 컴포넌트 - 네이티브 Angular| Ignite UI for Angular
_description: Users can export their data for editing or offline presentation can do so in Excel format with the Export to Excel Ignite UI for Angular component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Controls, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Grid, Angular Data Grid, Angular Grid Control, Angular Grid Component, Excel Export, Angular Excel Component, Angular Export Excel
_language: kr
---

## Excel 내보내기

<p class="highlight">
Ignite UI for Angular의 Excel 내보내기 서비스는 원시 데이터(배열) 또는 [**IgxGrid**](grid/grid.md) 에서 Microsoft® Excel® 형식으로 데이터를 내보내기할 수 있습니다. 내보내기 기능은 [`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) 클래스에 캡슐화되며 데이터는 MS Excel 표 형식으로 내보내기가 됩니다. 이 형식은 필터링, 정렬 등과 같은 기능을 사용할 수 있습니다.</p>
<div class="divider"></div>

### Excel 내보내기 데모


<code-view style="height: 100px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/services/export-excel" >
</code-view>

<div class="divider--half"></div>

### 사용 방법

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

> 참고: Excel 내보내기 서비스는 JSZip 라이브러리에 피어 종속됩니다. Excel 내보내기를 사용할 경우에는 JSZip 라이브러리를 설치해야 합니다.

내보내기 처리를 시작하려면 컴포넌트 템플릿에 있는 버튼 핸들러를 사용해야 합니다.

```html
<button (click)="exportButtonHandler()">Export Data to Excel</button>
```

컴포넌트 생성자에서 [`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) 형식의 인수를 정의하여 내보내기 서비스에 액세스할 수 있으며 Angular 프레임워크는 서비스 인스턴스를 제공합니다. 일부 데이터를 MS Excel 형식으로 내보내기 하려면 내보내기 서비스의 [`exportData`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#exportdata) 메소드를 호출해야 합니다. 이 메소드는 첫 번째 인수로 내보내기 하는 데이터를 받고, 두 번째 인수는 [`IgxExcelExporterOptions`]({environment:angularApiUrl}/classes/igxexcelexporteroptions.html) 형식으로 내보내기 처리를 구성할 수 있습니다.

다음은 컴포넌트의 typescript 파일에서 내보내기 처리를 실행하는 코드입니다:

```typescript
// component.ts

...
import { IgxExcelExporterService, IgxExcelExporterOptions } from "igniteui-angular/services/index";
...

public localData = [
  { Name: "Eric Ridley", Age: "26" },
  { Name: "Alanis Brook", Age: "22" },
  { Name: "Jonathan Morris", Age: "23" }
];

constructor(private excelExportService: IgxExcelExporterService) {
}

public exportButtonHandler() {
  this.excelExportService.exportData(this.localData, new IgxExcelExporterOptions("ExportedDataFile"));
}

```

모두 정상으로 진행되면 내보내기 버튼이 표시됩니다. 버튼을 누르면 내보내기 처리가 트리거되고 브라우저는 파일을 MS Excel 형식의 `localData` 배열 데이터가 포함된 “ExportedDataFile.xlsx” 파일을 다운로드합니다. 


### IgxGrid's 데이터 내보내기

Excel 내보내기 서비스는 [**IgxGrid**](grid/grid.md)에서 MS Excel 형식으로 데이터를 내보내기 할 수도 있습니다.유일한 차이점은 IgxExcelExporterService의 내보내기 메소드를 호출하고 IgxGrid를 첫 번째 인수로 전달해야 한다는 것입니다.

다음은 그 예입니다:

```html
<igx-grid #igxGrid1 [data]="localData" [autoGenerate]="true"></igx-grid>
<button (click)="exportButtonHandler()">Export IgxGrid</button>
```

```typescript
// component.ts

...
import { IgxExcelExporterService, IgxExcelExporterOptions } from "igniteui-angular/services/index";
import { IgxGridComponent } from "igniteui-angular/grid/grid.component";
...

@ViewChild("igxGrid1") public igxGrid1: IgxGridComponent;

public localData = [
  { Name: "Eric Ridley", Age: "26" },
  { Name: "Alanis Brook", Age: "22" },
  { Name: "Jonathan Morris", Age: "23" }
];

constructor(private excelExportService: IgxExcelExporterService) {
}

public exportButtonHandler() {
  this.excelExportService.export(this.igxGrid1, new IgxExcelExporterOptions("ExportedDataFile"));
}

```


<code-view style="height: 300px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/services/export-excel-sample-1" >
</code-view>




### 내보내기를 하는 콘텐츠의 사용자 정의

위의 예에서 Excel 내보내기 서비스는 사용 가능한 모든 데이터를 내보내기 했습니다. 행 또는 전체 열 내보내기를 하지 말아야 하는 상황이 있을 수 있습니다.이를 위해 각 열 및/또는 각 행에서 발생하는 [`onColumnExport`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#oncolumnexport)  및/또는 [`onRowExport`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#onrowexport) 이벤트에 연결할 수 있으며 이벤트 인수 객체의  [`cancel`]({environment:angularApiUrl}/interfaces/irowexportingeventargs.html#cancel) 속성을 true로 설정하여 각.

다음 예에서는 헤더가 “Age”이고 인덱스가 1인 경우, 내보내기에서 열을 제외합니다.

```typescript
// component.ts

this.excelExportService.onColumnExport.subscribe((args: IColumnExportingEventArgs) => {
  if (args.header == "Age" && args.columnIndex == 1) {
      args.cancel = true;
  }
});
this.excelExportService.export(this.igxGrid1, new IgxExcelExporterOptions("ExportedDataFile"));
```

[**IgxGrid**](grid/grid.md) 에서 데이터를 내보내기 할 때 내보내기 처리는 행 필터링 및 열 숨기기 등의 기능을 사용하고 [**IgxGrid**](grid/grid.md) 에 표시되는 데이터만 내보내기를 합니다. [`IgxExcelExporterOptions`]({environment:angularApiUrl}/classes/igxexcelexporteroptions.html) 객체의 속성을 설정하여 필터링된 행 또는 숨겨진 열을 포함하도록 내보내기 서비스를 구성할 수 있습니다. 이러한 속성은 아래 표에 설명되어 있습니다.

### API 요약

Excel 내보내기 서비스에는 아래의 몇 가지 API가 추가로 포함되어 있습니다.

* [`IgxExcelExporterService API`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html)
* [`IgxExcelExporterOptions API`]({environment:angularApiUrl}/classes/igxexcelexporteroptions.html)

사용된 추가 컴포넌트:

* [IgxGridComponent API]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

<div class="divider"></div>

### 추가 리소스

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
