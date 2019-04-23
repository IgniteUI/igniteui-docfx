---
title: Angular Spreadsheet | Grid コントロール | Ignite UI for Angular | 概要 | Infragistics |
_description: スプレッドシート コントロールを使用して、Excel ドキュメントの作成と編集のエクスペリエンスをアプリケーションに直接埋め込むことができます。
_keywords: Spreadsheet, Ignite UI for Angular, Infragistics
_language: ja
---

## Angular Spreadsheet

Angular Spreadsheet は、スプレッドシート データの視覚化と編集を可能にする Angular コンポーネントです。機能には、アクティブ化、セル編集、条件付き書式設定、選択、クリップボードなどがあります。

### デモ

<div class="sample-container" style="height: 500px">
    <iframe id="spreadsheet-overview-sample-iframe" src='{environment:demosBaseUrl}/spreadsheet/spreadsheet-overview' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="spreadsheet-overview-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### 依存関係

スプレッドシート パッケージをインストールするときは、core パッケージと excel パッケージもインストールする必要があります。

-   **npm install --save igniteui-angular-core**
-   **npm install --save igniteui-angular-excel**
-   **npm install --save igniteui-angular-spreadsheet**

<!--
> [!NOTE]
> Angular:
>
> In order to use the spreadsheet, you need to register the
> `Ig$SpreadsheetModule` in your app during load:
-->

```typescript
import { IgxExcelModule } from "igniteui-angular-excel/ES5/igx-excel-module";
import { IgxSpreadsheetModule } from "igniteui-angular-spreadsheet/ES5/igx-spreadsheet-module";

@NgModule({
    imports: [
        // ...
        IgxExcelModule,
        IgxSpreadsheetModule,
        // ...
    ]
})
export class AppModule {}
```

<div class="divider--half"></div>

### 使用方法

スプレッドシート モジュールがインポートされたので、次にスプレッドシートの基本設定です。

```html
<igx-spreadsheet #spreadsheet height="500px" width="100%">
</igx-spreadsheet>
```

以下は、ワークブックをスプレッドシートにロードする方法を示しています。

```ts
import { IgxSpreadsheetComponent } from "igniteui-angular-spreadsheet/ES5/igx-spreadsheet-component";
import { ExcelUtility } from './../utilities/excel-utility';

---

@ViewChild("spreadsheet", { read: IgxSpreadsheetComponent })
public spreadsheet: IgxSpreadsheetComponent;

ngOnInit() {
    const excelFile = '../../assets/Sample1.xlsx';
    ExcelUtility.loadFromUrl(excelFile).then((w) => {
      this.spreadsheet.workbook = w;
    });
  }
```
