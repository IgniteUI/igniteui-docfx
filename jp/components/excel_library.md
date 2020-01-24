---
title: Excel ライブラリ | データ スプレッドシート | Ignite UI for Angular | インフラジスティックス
_description: Excel ライブラリは、Microsoft Excel 機能を使用してスプレッドシート データを使用した作業が可能になります。Excel からアプリケーションへデータを簡単に転送できます。
_keywords: Excel library, Ignite UI for Angular, Infragistics, Excel ライブラリ, インフラジスティックス
mentionedTypes: ['Workbook']
_language: ja
---

## Excel ライブラリ

Infragistics Angular Excel ライブラリは、Workbook、Worksheet、Cell、Formula などの人気の Microsoft® Excel® スプレッドシート オブジェクトを使用してスプレッドシート データで作業をすることができます。Infragistics Angular Excel ライブラリによって Excel スプレッドシートでアプリケーションのデータを表示するだけでなく、Excel からアプリケーションへのデータの転送も簡単になります。

### サンプル

<div class="sample-container loading" style="height: 500px">
    <iframe id="excel-library-overview-sample-iframe" src='{environment:dvDemosBaseUrl}/excel-library/operations-on-workbooks' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="excel-library-overview-sample-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">stackblitz で表示
    </button>
</div>

<div class="divider--half"></div>

### 依存関係

excel パッケージをインストールするときに core パッケージもインストールする必要があります。

-   **npm install --save igniteui-angular-core**
-   **npm install --save igniteui-angular-excel**

### 必要なモジュール

excel ライブラリは、以下のモジュールが必要です。

```ts
// app.module.ts
import { IgxExcelModule } from 'igniteui-angular-excel';

@NgModule({
    imports: [
        // ...
        IgxExcelModule,
        // ...
    ]
})
export class AppModule {}
```

### Excel ライブラリの 5 つのモジュール

-   **IgxExcelCoreModule** – オブジェクトモデルを含み、Excel の基盤となります。
-   **IgxExcelFunctionsModule** – Sum、Average、Min、Max、SumIfs、Ifs など、数式評価のほとんどのカスタム関数を含み、このモジュールがなくても数式が計算 ( “=SUM(A1:A5 などの数式を適用するなど) されてセルの Value を要求する場合は数式の解析で問題を発生しません。(注: 例外のスローではありません。数式の結果がエラーとなるため特定のエラーを表すオブジェクト)。
-   **IgxExcelXlsModule** – xls (および関連する) タイプ ファイルのロジックの読み込みと保存を含みます。これは Excel97to2003 関連の WorkbookFormats です。
-   **IgxExcelXlsxModule** – xlsx (および関連する) タイプ ファイルのロジックの読み込みと保存を含みます。これは Excel2007 関連および StrictOpenXml ANDWorkbookFormats です。
-   **IgxExcelModule** – 他の 4 つのモジュールの参照ですべての機能の読み込み/使用を可能にします。

### サポートされるバージョンの Microsoft Excel

以下は Excel のサポートされるバージョンのリストです。\*\*

-   Microsoft Excel 97

-   Microsoft Excel 2000

-   Microsoft Excel 2002

-   Microsoft Excel 2003

-   Microsoft Excel 2007

-   Microsoft Excel 2010

-   Microsoft Excel 2013

-   Microsoft Excel 2016

> [!NOTE]
> Excel ライブラリ は Excel Binary Workbook (.xlsb) フォーマットを現時点ではサポートしていません。

### ワークブックの読み込みと保存

注: Excel ライブラリ モジュールをインポートした後、ワークブックを読み込みます。

> [!NOTE]
>
> In the following code snippet, an external [ExcelUtility](excel_utility.md) class is used to save and load a [`Workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html).

[`Workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html) オブジェクトを読み込んで保存するために、読み込み、保存メソッドを使用します。以下のコードは、読み込みや保存などの様々なメソッドを公開するクラスです。

```ts
import { Workbook } from "igniteui-angular-excel";
import { WorkbookSaveOptions } from "igniteui-angular-excel";
import { WorkbookFormat } from "igniteui-angular-excel";
import { ExcelUtility } from "ExcelUtility";

var workbook = ExcelUtility.load(file);
ExcelUtility.save(workbook, "fileName");
```

<div class="divider--half"></div>

### ヒープの管理

Excel Library のサイズに因り、ソースマップの生成を無効にすることを推奨します。

`Angular.json` の変更:

```ts
...
    "architect": {
        "build": {
          "builder": "...",
          "options": {
            "vendorSourceMap": false,
            "outputPath": "dist",
            "index": "src/index.html",
            "main": "src/main.ts",
            "tsConfig": "src/tsconfig.app.json",
                  // ...
          },
              // ...
        },
        "serve": {
          "builder": "...",
          "options": {
            "vendorSourceMap": false,
            "browserTarget": "my-app:build"
          },
              // ...
        },
        // ...
      }
```

<!-- -->
