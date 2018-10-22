---
title: 그리드 도구 모음 컴포넌트- 네이티브 Angular | Ignite UI for Angular
_description: Ignite UI for Angular 그리드 도구 모음 컴포넌트를 사용하면 IgxGrid 기능 UI 컨트롤의 중앙 위치를 지정할 수 있습니다.
_keywords: Ignite UI for Angular, UI 컨트롤, Angular 위젯, 웹 위젯, UI 위젯, Angular, 네이티브 Angular 컴포넌트 세트, 네이티브 Angular 컨트롤, 네이티브 Angular 컴포넌트 라이브러리, 네이티브 Angular 컴포넌트, Angular 그리드, Angular 데이터 그리드 컴포넌트, Angular 데이터 그리드 컨트롤, Angular 그리드 컴포넌트, Angular 그리드 컨트롤, Angular 고성능 그리드, Angular 데이터 그리드 도구 모음, 그리드 도구 모음, Angular 그리드 도구 모음, Excel 내보내기, 그리드 열 숨기기 선택기, 그리드 열 핀 고정 선택기
_language: kr
---

### 그리드 도구 모음

Ignite UI for Angular 그리드는 기본적으로 **UI** 작업을 위한 컨테이너인 **toolbar** 기능을 지원합니다. 도구 모음은 그리드 상단에 있으며 그리드의 가로 크기와 일치합니다. 도구 모음 컨테이너는 열 숨기기, 열 핀 고정, Excel 내보내기 등 그리드 기능과 관련된 다양한 UI 컨트롤을 제공합니다.

#### 데모

<div class="sample-container loading" style="height:420px">
    <iframe id="grid-toolbar-sample-1-iframe" src='{environment:demosBaseUrl}/grid-toolbar-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

그리드의 `showToolbar` 속성을 사용하여 IgxGrid의 도구 모음을 표시하려면 `true`로 설정합니다. 도구 모음은 텍스트 제목의 왼쪽 정렬을 지원하며 그리드의 `toolbarTitle` 속성을 사용하여 내용을 설정합니다. 다음의 코드 조각은 도구 모음을 활성화하고 제목을 설정하는 방법을 보여줍니다:

```html
<igx-grid [data]="data" [autoGenerate]="true" height="400px" width="600px"
    [showToolbar]="true"
    toolbarTitle="Grid Title">
</igx-grid>
```

#### 기능

IgxGrid의 도구 모음은 열 숨기기, 열 핀 고정, 데이터를 MS Excel 및 CSV로 내보내기 할 수 있도록 구성할 수 있습니다. 대응하는 불 속성을 true로 설정하여 각 기능을 독립적으로 활성화할 수 있습니다:
- 열 숨기기는 `columnHiding`을 `true`로 설정
- 열 핀 고정은 `columnPinning`을 `true`로 설정
- MS Excel 내보내기는 그리드의 `exportExcel` 속성을 `true`로 설정
- CSV 내보내기는 그리드의 `exportCsv` 속성을 `true`로 설정.

각 버튼의 텍스트를 설정하는 속성에 대해서는 이하의 API 부분에 열거되어 있습니다.

<div class="sample-container loading" style="height:420px">
    <iframe id="grid-toolbar-sample-2-iframe" src='{environment:demosBaseUrl}/grid-toolbar-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
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

MS Excel로 내보내기 및 CSV로 내보내기 기능은 공급자로 각각 `IgxExcelExporterService` 및 `IgxCsvExporterService`를 사용합니다. 이들 중 하나를 사용해야 하는 경우에는 'app.module.ts' 파일의 '공급자' 배열에서 지정해야 합니다. 예를 들면, 다음의 코드 조각은 모든 내보내기 서비스를 포함하는 방법을 보여줍니다:

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

단순히 도구 모음 기능을 켜거나 끄는 것 외에도 내보내기 처리는 사용자가 내보내기 처리를 초기화할 때 생성되는 `onToolbarExporting` 이벤트에서 상세 설정할 수 있습니다. 이 이벤트는 내보내기와 내보내기 옵션을 모두 보여줍니다.

> [!NOTE]
> 기본적으로 CSV로 내보내기를 할 때 내보내기는 쉼표 구분 기호를 사용하여 내보내기를 하며 출력 파일에는 '.csv' 확장자를 사용합니다.
> 내보내기 이벤트에 서브스크라이브하거나 내보내기 옵션 필드 값을 변경하여 내보내기 매개 변수를 사용자 정의할 수 있습니다.
> 또한, 이벤트 인수의 취소 필드를 true로 설정하여 내보내기 처리를 취소할 수 있습니다.

다음 코드 조각은 `onToolbarExporting` 이벤트에 서브스크라이브하는 방법과 기본 내보내기 처리를 취소하는 방법을 보여줍니다.

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
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider"></div>

### API 요약

그리드 도구 모음 서비스에는 아래에 나열된 몇 가지 API가 추가로 포함되어 있습니다.

#### 입력

**IgxGrid** 컴포넌트에서 다음 입력을 사용할 수 있습니다:
| 이름 | 형식 | 설명 |
| :--- | :--- | :--- |
| `toolbar` | IgxGridToolbarComponent | 도구 모음 컴포넌트에 대한 참조입니다. |
| `showToolbar` | boolean | 그리드 도구 모음을 표시하거나 숨깁니다. |
| `toolbarTitle` | string | 도구 모음 제목을 설정합니다. |
| `columnHiding` | boolean | 열 숨기기 기능을 표시하거나 숨깁니다. |
| `columnHidingTitle` | string | 열 숨기기 팝업 제목의 텍스트를 설정합니다. |
| `hiddenColumnsText` | string | 열 숨기기 기능 버튼의 텍스트를 설정합니다. |
| `columnPinning` | boolean | 열 핀 고정 기능을 표시하거나 숨깁니다. |
| `columnPinningTitle` | string | 열 핀 고정 팝업 제목의 텍스트를 설정합니다. |
| `pinnedColumnsText` | string | 열 핀 고정 기능 버튼의 텍스트를 설정합니다. |
| `exportExcel` | boolean | MS Excel로 내보내기 옵션을 표시하거나 숨깁니다. |
| `exportCsv` | boolean | CSV로 내보내기 옵션을 표시하거나 숨깁니다. |
| `exportText` | string | 기본 내보내기 버튼의 텍스트 내용을 설정합니다. |
| `exportExcelText` | string | MS Excel로 내보내기 버튼의 텍스트 내용을 설정합니다. |
| `exportCsvText` | string | CSV로 내보내기 버튼의 텍스트 내용을 설정합니다. |

<div class="divider"></div>

**IgxGridToolbarComponent** 컴포넌트에서 다음 입력을 사용할 수 있습니다:
| 이름 | 형식 | 설명 |
| :--- | :--- | :--- |
| `dropDownsMaxHeight` | string | 도구 모음의 드롭다운 패널 높이를 설정하거나 가져옵니다. 예: '100px' 또는 '50%'. |

<div class="divider"></div>

#### 출력

**IgxGrid** 컴포넌트에서 다음 출력을 사용할 수 있습니다:
| 이름 | 형식 | 설명 |
| :--- | :--- | :--- |
| `onToolbarExporting` | EventEmitter<`IGridToolbarExportEventArgs`> | 사용자가 내보내기 처리를 시작하면 발생합니다. |

<div class="divider"></div>

#### 이벤트 인수

다음의 필드는 **IGridToolbarExportEventArgs** 이벤트 객체에서 사용할 수 있습니다:
| 이름 | 형식 | 설명 |
| :--- | :--- | :--- |
| `grid` | `IgxGridComponent` | 내보내기 하는 그리드 컴포넌트에 대한 참조입니다. |
| `exporter` | `IgxBaseExporter` | 내보내기 처리에 사용되는 내보내기 객체에 대한 참조입니다. |
| `options` | `IgxExporterOptionsBase` | 내보내기 옵션에 대한 참조입니다. |
| `cancel` | `boolean` | 이 필드는 기본적으로 `false`로 설정되어 있습니다. 이 매개 변수를 `true`로 설정하면 기본 매개 변수로 내보내기 처리가 시작되지 않기 때문에 사용자 정의 내보내기를 할 수 있도록 제공합니다. |

### 추가 리소스

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
