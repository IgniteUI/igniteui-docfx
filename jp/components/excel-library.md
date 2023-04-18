---
title: Angular Excel ライブラリ | データ スプレッドシートとテーブル | インフラジスティックス
_description: インフラジスティックスの Angular Excel ライブラリは、Microsoft Excel 機能を使用してスプレッドシート データを使用した作業が可能になります。Ignite UI for Angular Excel ライブラリを使用して Excel からアプリケーションにデータを簡単に転送できる方法について説明します。
_keywords: Excel library, Ignite UI for Angular, Infragistics, workbook, Excel ライブラリ, ワークブック, インフラジスティックス
mentionedTypes: ['Workbook', 'Worksheet', 'Cell', 'Formula']
_language: ja
---

# Angular Excel ライブラリの概要

Infragistics Angular Excel ライブラリは、[`workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/sheet.html#workbook)、[`Worksheet`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheet.html)、[`IgxCell`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcell.html)、[`Formula`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/formula.html) などの人気の Microsoft® Excel® スプレッドシート オブジェクトを使用してスプレッドシート データで作業をすることができます。Infragistics Angular Excel ライブラリによって Excel スプレッドシートでアプリケーションのデータを表示するだけでなく、Excel からアプリケーションへのデータの転送も簡単になります。

## Angular Excel ライブラリの例

<code-view style="height: 100px" alt="Angular Excel ライブラリの例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/excel/excel-library/overview"
                                                 github-src="excel/excel-library/overview">
</code-view>


<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->

## 依存関係

excel パッケージをインストールするときに core パッケージもインストールする必要があります。

```cmd
npm install --save igniteui-angular-core
npm install --save igniteui-angular-excel
```

## モジュールの要件

Angular Excel ライブラリを作成するには、以下のモジュールが必要です。

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

## モジュールの実装

Excel ライブラリには、アプリのバンドル サイズを制限するために使用できる 5 つのモジュールが含まれています。

*   **IgxExcelCoreModule** – オブジェクトモデルを含み、Excel の基盤となります。
*   **IgxExcelFunctionsModule** – Sum、Average、Min、Max、SumIfs、Ifs など、数式評価のほとんどのカスタム関数を含み、このモジュールがなくても数式が計算 ( “=SUM(A1:A5 などの数式を適用するなど) されてセルの Value を要求する場合は数式の解析で問題を発生しません。(注: 例外のスローではありません。数式の結果がエラーとなるため特定のエラーを表すオブジェクト)。
*   **IgxExcelXlsModule** – xls (および関連する) タイプ ファイルのロジックの読み込みと保存を含みます。これは Excel97to2003 関連の WorkbookFormats です。
*   **IgxExcelXlsxModule** – xlsx (および関連する) タイプ ファイルのロジックの読み込みと保存を含みます。これは Excel2007 関連および StrictOpenXml ANDWorkbookFormats です。
*   **IgxExcelModule** – 他の 4 つのモジュールの参照ですべての機能の読み込み/使用を可能にします。

<!-- end: Angular, React, WebComponents -->

## サポートされるバージョンの Microsoft Excel

以下は Excel のサポートされるバージョンのリストです。

*   Microsoft Excel 97

*   Microsoft Excel 2000

*   Microsoft Excel 2002

*   Microsoft Excel 2003

*   Microsoft Excel 2007

*   Microsoft Excel 2010

*   Microsoft Excel 2013

*   Microsoft Excel 2016

<!--Angular -->

## ヒープの管理

Excel Library のサイズに因り、ソースマップの生成を無効にすることを推奨します。

architect => build => options から serve の options で `vendorSourceMap` オプションを設定して `angular.json` を変更します。

```ts
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

<!--end:Angular-->

## API リファレンス

*   `Load`
*   `WorkbookInProcessRuntime`
*   [`Worksheet`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheet.html)
*   [`workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/sheet.html#workbook)
