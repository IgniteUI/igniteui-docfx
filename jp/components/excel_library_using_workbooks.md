---
title: Excel ライブラリ コンポーネント - Native Angular | Ignite UI for Angular
_description: Ignite UI for Excel Library コンポーネントのワークブック処理
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Excel Library, Angular Excel Library Example, Angular Excel Library Component, Angular Excel Engine, Workbook, Font, Document Properties
_language: ja
---
## ワークブックの使用

Infragistics Excel Engine は、データを Microsoft® Excel® に保存、また Microsoft® Excel® からの読み込みを可能にします。ライブラリのさまざまなクラスを使用してワークブックやワークシートを作成、データを入力、データを Excel にエクスポートできます。Infragistics Excel Engine は、Excel スプレッドシートでアプリケーションのデータの表示や Excel からアプリケーションへのデータのインポートが簡単にできます。 

### デモ
<div class="sample-container" style="height: 500px">
    <iframe id="excel-library-overview-sample-iframe" src='{environment:demosBaseUrl}/excel-library/operations-on-workbooks' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <!-- TODO uncomment when Stackblitz is ready for EXCEL
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="excel-library-operations-on-workbooks-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示
    </button> -->
</div> 

<div class="divider--half"></div>

### 既定のフォントを変更

`IWorkbookFont` の新しいインスタンスを作成します。workbook.styles.apply メソッドでワークブックの Style コレクションに新しいフォントを追加します。このスタイルにはワークブックのすべてのセルのデフォルトのプロパティが含まれています。ただし、行、列またはセルで指定されている場合はその限りではありません。スタイルのプロパティを変更すると、ワークブックのデフォルトのセル書式プロパティが変更します。

```typescript
var workbook = new Workbook();
var normalFont: IWorkbookFont;
normalFont.name = "Times New Roman";
normalFont.height = 16 * 20;
```

### ワークブック プロパティの設定

Microsoft® Excel® ドキュメント プロパティは、ドキュメントの整理やトラッキングを改善するための情報を提供します。`Workbook` オブジェクトの `DocumentProperties` プロパティで Infragistics Excel Library を使用してこれらのプロパティを設定できます。使用可能なプロパティは以下のとおりです。

- author

- title

- subject

- keywords

- category

- status

- comments

- company

- manager

以下のコードは、ワークブックを作成し、Title および Status ドキュメント プロパティを設定する方法を示します。

```typescript
var workbook = new Workbook();
workbook.documentProperties.title = "Expense Report";
workbook.documentProperties.status = "Complete";
```

