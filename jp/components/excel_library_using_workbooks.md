---
title: Excel ライブラリ コンポーネント - Native Angular | Ignite UI for Angular
_description: Ignite UI for Excel Library コンポーネントのワークブック処理
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular Excel ライブラリ, Angular Excel ライブラリ例, Angular Excel ライブラリ コンポーネント, Angular Excel Engine, Workbook, Font, Document プロパティ
_language: ja
---

## ワークブックを使用した Excel ライブラリ

Infragistics Excel エンジンは、データを Microsoft® Excel® に保存、また Microsoft® Excel® からの読み込みを可能にします。ライブラリのさまざまなクラスを使用してワークブックやワークシートを作成、データを入力、データを Excel にエクスポートできます。Infragistics Excel Engine は、Excel スプレッドシートでアプリケーションのデータの表示や Excel からアプリケーションへのデータのインポートが簡単にできます。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="excel-library-overview-sample-iframe" src='{environment:dvDemosBaseUrl}/excel-library/operations-on-workbooks' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="excel-library-overview-sample-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">stackblitz で表示
    </button>
</div>

<div class="divider--half"></div>

### 既定のフォントを変更

[`IWorkbookFont`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/iworkbookfont.html) の新しいインスタンスを作成します。workbook.styles.apply メソッドでワークブックの Style コレクションに新しいフォントを追加します。このスタイルにはワークブックのすべてのセルのデフォルトのプロパティが含まれています。ただし、行、列またはセルで指定されている場合はその限りではありません。スタイルのプロパティを変更すると、ワークブックのデフォルトのセル書式プロパティが変更します。

```ts
var workbook = new Workbook();
var normalFont: IWorkbookFont;
normalFont.name = "Times New Roman";
normalFont.height = 16 * 20;
```

```ts
import { IWorkbookFont } from 'igniteui-webcomponents-excel/ES2015/excel.core';

let workbook = new Workbook();
let font: IWorkbookFont;
font = workbook.styles().normalStyle.styleFormat.font;
font.name = "Times New Roman";
font.height = 16 * 20;
```

### ワークブック プロパティの設定

Microsoft® Excel® ドキュメント プロパティは、ドキュメントの整理やトラッキングを改善するための情報を提供します。[`Workbook`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html) オブジェクトの [`documentProperties`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html#documentproperties) プロパティで Infragistics Excel Library を使用してこれらのプロパティを設定できます。使用可能なプロパティは以下のとおりです。

-   author

-   title

-   subject

-   keywords

-   category

-   status

-   comments

-   company

-   manager

以下のコードは、ワークブックを作成し、Title および Status ドキュメント プロパティを設定する方法を示します。

```ts
var workbook = new Workbook();
workbook.documentProperties.title = "Expense Report";
workbook.documentProperties.status = "Complete";
```

```ts
let workbook = new Workbook();
workbook.documentProperties.title = "Expense Report";
workbook.documentProperties.status = "Complete";
```
