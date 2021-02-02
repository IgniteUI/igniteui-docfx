---
title: Angular スプレッドシート | テーブルとスプレッドシート コンポーネント | インフラジスティックス
_description: Angular スプレッドシート コントロールを使用して、Excel ドキュメントと編集機能をアプリケーションに直接埋め込みます。データ可視化を向上させます。
_keywords: Excel Spreadsheet, Ignite UI for Angular, Infragistics, Excel スプレッドシート, インフラジスティックス
_language: ja
mentionedTypes: ['Spreadsheet']
---

# Angular Spreadsheet の概要

Angular Spreadsheet は、スプレッドシート データの視覚化と編集を可能にします。機能には、アクティブ化、セル編集、条件付き書式設定、選択、クリップボードなどがあります。

## Angular Spreadsheet の例

<div class="sample-container loading" style="height: 500px">
    <iframe id="spreadsheet-overview-sample-iframe" src='{environment:dvDemosBaseUrl}/excel/spreadsheet-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Spreadsheet の例"></iframe>
</div>


<div class="divider--half"></div>

## 依存関係

Angular スプレッドシート コンポーネントをインストールするときは、core パッケージと excel パッケージもインストールする必要があります。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save igniteui-angular-core
npm install --save igniteui-angular-excel
npm install --save igniteui-angular-spreadsheet
</pre>

## モジュールの要件

[`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) を作成するには、以下のモジュールが必要です。

```ts
import { IgxExcelModule } from 'igniteui-angular-excel';
import { IgxSpreadsheetModule } from 'igniteui-angular-spreadsheet';

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

## 使用方法

Angular スプレッドシート モジュールがインポートされたので、次にスプレッドシートの基本設定です。

```html
<igx-spreadsheet #spreadsheet height="500px" width="100%">
</igx-spreadsheet>
```

> [!NOTE]
>
> 次のコード スニペットでは、外部の [ExcelUtility](excel-utility.md) クラスを使用して [`workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#workbook) を保存およびロードしています。

以下は、ワークブックを Angular スプレッドシートにロードする方法を示しています。

```ts
import { IgxSpreadsheetComponent } from 'igniteui-angular-spreadsheet';
import { ExcelUtility } from 'ExcelUtility';

// ...

@ViewChild("spreadsheet", { read: IgxSpreadsheetComponent })
public spreadsheet: IgxSpreadsheetComponent;

ngOnInit() {
    const excelFile = '../../assets/Sample1.xlsx';
    ExcelUtility.loadFromUrl(excelFile).then((w) => {
      this.spreadsheet.workbook = w;
    });
}
```
