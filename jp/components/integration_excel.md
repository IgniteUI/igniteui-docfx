---
title: Excel コンポーネントの統合 - ネイティブ Angular | Ignite UI for Angular
_description: ユーザーは編集やオフライン プレゼンテーション用にデータをエクスポートできます。Ignite UI for Angular コンポーネントと統合した Excel 形式でエクスポートできます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Grid, Angular Data Grid, Angular Grid コントロール, Angular Grid コンポーネント, Excel エクスポート, Angular Excel コンポーネント, Angular エクスポート Excel
_language: ja
---

## Excel と統合

<p class="highlight">
Ignite UI for Angular `IgxGrid` は、Microsoft® Excel® データの読み込み、書き込みが可能です。
</p>
<div class="divider"></div>

### Excel Exporter

<p class="highlight">
Ignite UI for Angular Excel Exporter サービスは、Microsoft® Excel® 形式で生データ (配列) または `IgxGrid` のデータをエクスポートできます。エクスポート機能は、`IgxExcelExporterService` クラスでカプセル化され、MS Excel テーブル形式でデータをエクスポートします。この形式では、フィルタリングや並べ替えなどの機能が使用できます。</p>
<div class="divider"></div>

#### Excel Exporter デモ

<div class="sample-container loading" style="height: 100px;">
    <iframe id="excel-export-sample-iframe" src="{environment:demosBaseUrl}/export-excel"
        width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="excel-export-sample-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

#### 使用方法

Ignite UI Excel Exporter を使用するには、**IgxCsvExporterService** を **app.module.ts** ファイルにインポートし、`providers` 配列にサービスを追加します。

```typescript
// app.module.ts

...
import { IgxExcelExporterService } from "igniteui-angular/services/index";

@NgModule({
  providers: [ IgxExcelExporterService ]
})

export class AppModule {}
```

> 注: Excel Exporter サービスは JSZip にピア依存関係があります。JSZip ライブラリは Excel Exporter の使用時にインストールしてください。

エクスポート処理の開始は、コンポーネントのテンプレートでボタンのハンドラーを使用します。

```html
<button (click)="exportButtonHandler()">Export Data to Excel</button>
```

エクスポーター サービスへのアクセスは、コンポーネントのコンストラクターで `IgxExcelExporterService` 型の引数を定義し、Angular フレームワークはサービスのインスタンスを提供します。データを MS Excel 形式でエクスポートするには、エクスポーター サービスの `exportData` メソッドを呼び出します。このメソッドで、エクスポートするデータは最初の引数です。2 番目の引数は `IgxExcelExporterOptions` 型で、エクスポート処理の構成を許可します。

以下のコードはコンポーネントの typescript ファイルでエクスポート処理を実行します。

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

正しく設定された場合、エクスポート ボタンが表示されます。ボタンが押されるとエクスポート処理をトリガーし、ブラウザーで "ExportedDataFile.csv" ファイルをダウンロードします。このファイルは `localData` 配列のデータを CSV 形式で含みます。


#### IgxGrid データのエクスポート

Excel Exporter サービスでも `IgxGrid` からのデータを MS Excel 形式でエクスポートできますが、`IgxExcelExporterService` の `export` メソッドを呼び出し、`IgxGrid` を最初の引数として渡す必要があります。

以下はその例です。

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

<div class="sample-container loading" style="height: 300px;">
    <iframe id="excel-export-sample-iframe2" src="{environment:demosBaseUrl}/export-excel-sample-1"
        width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="excel-export-sample-iframe2"
    data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>



#### エクスポートするコンテンツのカスタマイズ

上記の例では、Excel Exporter サービスで利用可能なデータをすべてエクスポートしましたが、特定の行や列をエクスポートしない場合の実装は、各列で発生される `onColumnExport` または各行で発生される `onRowExport` イベントを処理し、イベント引数オブジェクトの `cancel` プロパティを `true` に設定して各イベントをキャンセルします。

以下の例では、ヘッダーが "Age" で、インデックスが 1 の場合、エクスポートから列を除外します。

```typescript
// component.ts

this.excelExportService.onColumnExport.subscribe((args: IColumnExportingEventArgs) => {
  if (args.header == "Age" && args.columnIndex == 1) {
      args.cancel = true;
  }
});
this.excelExportService.export(this.igxGrid1, new IgxExcelExporterOptions("ExportedDataFile"));
```

`IgxGrid` からのデータのエクスポートで、エクスポート処理は行フィルタリングおよび列の非表示などの機能に応じてグリッドで表示されるデータのみをエクスポートします。`IgxExcelExporterOptions` オブジェクトのプロパティを設定し、エクスポーター サービスを構成してフィルターした行または非表示の列を含むことができます。このプロパティは以下の表で説明します。

#### API まとめ

以下は、その他の Excel Exporter サービスの API です。

##### 入力

以下の入力は **IgxExcelExporterService** コンポーネントで利用できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `export` | Method | IgxGrid コンポーネントのデータを MS Excel 形式にエクスポートするメソッド。 |
| `exportData` | Method | 配列データを MS Excel 形式でエクスポートするメソッド。 |

<div class="divider--half"></div>

以下の入力は **IgxExcelExporterOptions** コンポーネントで利用できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `fileName` | string | エクスポート操作でファイル名を提供します。 |
| `ignorePinning` | boolean | 列固定が無視されるかどうかを指定します。ignoreColumnsOrder を true に設定した場合、このオプションは常に true に設定されているとみなされます。 |
| `ignoreColumnsOrder` | boolean | エクスポーターがグリッドの列順序を無視するかどうかを指定します。 |
| `ignoreColumnsVisibility` | boolean | 非表示列をエクスポートするかどうかを指定します。 |
| `ignoreFiltering` | boolean | フィルター アウトされた行をエクスポートするかどうかを指定します。 |
| `ignoreSorting` | boolean | エクスポートするデータをグリッドのように並べ替えるかどうかを指定します。 |
| `exportAsTable` | boolean | エクスポートするデータを Excel テーブルとして書式設定するかどうかを指定します。(デフォルトで True) |
| `columnWidth` | number | エクスポートする Excel ファイルの列幅を設定します。指定なしまたは 0 の場合、列の最大文字列の幅が使用されます。 |
| `rowHeight` | number | エクスポートされた Excel ファイルの行の高さを設定します。指定なしまたは 0 の場合、Excel 行のデフォルトの高さが使用されます。 |

<div class="divider"></div>

##### 出力

以下の出力は **IgxExcelExporterService** コンポーネントで利用できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `onColumnExport` | EventEmitter<`IColumnExportingEventArgs`> | Excel 列がエクスポートされているときに発生します。 |
| `onRowExport` | EventEmitter<`IRowExportingEventArgs`> | Excel 行がエクスポートされているときに発生します。 |
| `onExportEnded` | EventEmitter<`IExcelExportEndedEventArgs`> | Excel ファイルがエクスポートされたときに発生します。 |

<div class="divider"></div>

### Excel からの貼り付け

Ignite UI for Angular `IgxGrid` は、クリップボードにコピーした Excel データを読み込めます。このセクションは、カスタムコードを使用して実装する方法を説明します。

#### Excel から貼り付けのデモ

このサンプルでは、Excel から `igxGrid` の貼り付けを実装する方法を紹介します。
サンプルは、Excel スプレッドシートを開いて行をコピーし、キーボード (Ctrl + V、Shift + Insert、Command + V) を使用してグリッドに貼り付けます。

上部に2 つのオプションとドロップダウン ボタンがあります。
<ol>
<li>新規行としてデータを貼り付け - このモードでは、Excel からコピーしたデータが新規行としてグリッドに追加されます。</li>
<li>アクティブ セルから開始する貼り付け - このモードではグリッド データが上書きされます。</li>
</ol>

貼り付け後の新しいデータはイタリックになります。

<div class="sample-container loading" style="height: 570px;">
    <iframe id="excel-paste-sample-iframe" src="{environment:demosBaseUrl}/grid-paste"
        width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="excel-paste-sample-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider"></div>

#### 使用方法

`paste-handler` ディレクティブ` を `igxGrid` に追加し、`onDataProcessed` を処理します。

```html
<igx-grid #grid1 [data]="data" [width]="'100%'" [height]="'505px'" [autoGenerate]="false" paste-handler (onDataProcessed)="dataPasted($event)" [primaryKey]="'ID'">
    <igx-column [field]="'Name'"></igx-column>
    <igx-column [field]="'Title'"></igx-column>
    <igx-column [field]="'Phone'"></igx-column>
    <igx-column [field]="'Country'"></igx-column>
</igx-grid>
```

```typescript
    public dataPasted(processedData) {
        if (this.pasteMode === "Paste data as new records") {
            this.addRecords(processedData);
        } else {
            this.updateRecords(processedData);
        }
    }

    public addRecords(processedData: any[]) {
        const columns = this.grid1.visibleColumns;
        const pk = this.grid1.primaryKey;
        const addedData = [];
        for (const curentDataRow of processedData) {
            const rowData = {};
            for (const col of columns) {
                rowData[col.field] = curentDataRow[col.visibleIndex];
            }
            // generate PK
            rowData[pk] = this.grid1.data.length + 1;
            this.grid1.addRow(rowData);
            addedData.push(rowData);
            this.grid1.cdr.detectChanges();
        }
        // scroll to last added row
        this.grid1.verticalScrollContainer.scrollTo(this.grid1.data.length);

        this.grid1.verticalScrollContainer.onChunkLoad.pipe(take(1)).subscribe(() => {
            this.clearStyles();
            for (const data of addedData) {
                const row = this.grid1.getRowByKey(data[pk]);
                if (row) {
                    row.nativeElement.style["font-style"] = "italic";
                    row.nativeElement.style.color = "gray";
                }
            }
        });
    }
    public updateRecords(processedData: any[]) {
        const cell = this.grid1.selectedCells[0];
        const pk = this.grid1.primaryKey;
        if (!cell) { return; }
        const rowIndex = cell.row.index;
        // const rowPkValue = cell.row.rowData[pk];
        const cellIndex = cell.column.visibleIndex;
        const columns = this.grid1.visibleColumns;
        let index = 0;
        const updatedRecsPK = [];
        for (const curentDataRow of processedData) {
            const rowData = {};
            const dataRec = this.grid1.data[rowIndex + index];
            const rowPkValue = dataRec ? dataRec[pk] : this.grid1.data.length + 1;
            rowData[pk] = rowPkValue;
            for (let j = 0; j < columns.length; j++) {
                let currentCell;
                if (j >= cellIndex) {
                    currentCell = curentDataRow.shift();
                }
                const colKey = columns[j].field;
                rowData[colKey] = currentCell || (!!dataRec ? dataRec[colKey] : null);
            }
            if (!dataRec) {
                // no rec to update, add instead
                rowData[pk] = rowPkValue;
                this.grid1.addRow(rowData);
                continue;
            }
            this.grid1.updateRow(rowData, rowPkValue);
            this.grid1.cdr.detectChanges();
            updatedRecsPK.push(rowPkValue);
            index++;
        }

        this.clearStyles();
        for (const pkVal of updatedRecsPK) {
            const row = this.grid1.getRowByKey(pkVal);
            if (row) {
            row.nativeElement.style["font-style"] = "italic";
            row.nativeElement.style.color = "gray";
            }
        }
    }

    protected clearStyles() {
        for (const row of this.grid1.rowList.toArray()) {
            row.nativeElement.style["font-style"] = "";
            row.nativeElement.style.color = "";
        }
    }
```
<div class="divider"></div>

#### 貼り付けハンドラー ディレクディブ

以下は `paste-handler` 実装です。

```typescript
import { Directive, EventEmitter, HostListener, Output} from "@angular/core";

@Directive({ selector: "[paste-handler]" })
export class PasteHandler {
    public textArea;

    @Output()
    public onDataProcessed = new EventEmitter<any>();

    public ngOnInit(): void {
        const div = document.createElement("div");
        const divStyle = div.style;
        divStyle.position = "fixed";
        divStyle.top = "-10000px";
        divStyle.left = "-10000px";
        document.body.appendChild(div);
        this.textArea = document.createElement("textarea");
        const style = this.textArea.style;
        style.opacity = "0";
        style.overflow = "hidden";
        div.appendChild(this.textArea);

        this.textArea.addEventListener("paste", (eventArgs) => { this.onPaste(eventArgs); });
    }

    @HostListener("focusin", ["$event"])
    public focusIn(eventArgs) {
    }

    @HostListener("keydown", ["$event"])
    public ControlV(eventArgs) {
        const ctrl = eventArgs.ctrlKey;
        const key = eventArgs.keyCode;
        // Ctrl-V || Shift-Ins || Cmd-V
        if ((ctrl || eventArgs.metaKey) && key === 86 || eventArgs.shiftKey && key === 45) {
            this.textArea.focus();
        }
    }

    public onPaste(eventArgs) {
    let data;
    const clData = "clipboardData";

    // get clipboard data - from window.cliboardData for IE or from the original event's argumets.
    if (window[clData]) {
        window.event.returnValue = false;
        data = window[clData].getData("text");
    } else {
        data = eventArgs[clData].getData("text/plain");
    }

    // process the clipboard data
    const processedData = this.processData(data);

    this.onDataProcessed.emit(processedData);
    }

    public processData(data) {
        const pasteData = data.split("\n");
        for (let i = 0; i < pasteData.length; i++) {
            pasteData[i] = pasteData[i].split("\t");
            // Check if last row is a dummy row
            if (pasteData[pasteData.length - 1].length === 1 && pasteData[pasteData.length - 1][0] === "") {
                pasteData.pop();
            }
            // remove empty data
            if (pasteData.length === 1 &&
                 pasteData[0].length === 1 &&
                  (pasteData[0][0] === "" || pasteData[0][0] === "\r")) {
                    pasteData.pop();
            }
        }
        return pasteData;
    }
}

```

### 追加のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
