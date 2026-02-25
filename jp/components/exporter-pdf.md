---
title: PDF へのエクスポート コンポーネント - ネイティブ Angular| Ignite UI for Angular
_description: ユーザーがオフライン プレゼンテーションのためにデータをエクスポートできます。PDF へのエクスポート Ignite UI for Angular コンポーネントで PDF 形式にエクスポートできます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Grid, Angular Data Grid, Angular Grid コントロール, Angular Grid コンポーネント, PDF  エクスポート, Angular PDF コンポーネント, Angular エクスポート PDF
_license: commercial
_language: ja
---

# PDF Exporter (PDF エクスポーター)

<p class="highlight">

Ignite UI for Angular PDF Exporter サービスは、生データ配列や [**IgxGrid**](grid/grid.md)、[**IgxTreeGrid**](treegrid/tree-grid.md)、[**IgxHierarchicalGrid**](hierarchicalgrid/hierarchical-grid.md)、[**IgxPivotGrid**](pivotGrid/pivot-grid.md) などの高度な Grid コンポーネントを含むさまざまなソースからデータを PDF 形式でエクスポートする強力な機能を提供します。エクスポート機能は [`IgxPdfExporterService`]({environment:angularApiUrl}/classes/igxpdfexporterservice.html) クラスにカプセル化されており、複数ページのドキュメント サポート、自動ページ区切り、カスタマイズ可能な書式設定オプションなどの包括的な機能を含む、PDF 形式へのシームレスなデータ エクスポートを可能にします。
</p>
<div class="divider"></div>

## Angular PDF Exporter の例


<code-view style="height: 150px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           explicit-editor="stackblitz"
           iframe-src="{environment:demosBaseUrl}/services/export-pdf/" alt="Angular PDF エクスポーターの例">
</code-view>

<div class="divider--half"></div>

## 使用方法

Ignite UI PDF Exporter の使用を開始するには、まず [`IgxPdfExporterService`]({environment:angularApiUrl}/classes/igxpdfexporterservice.html) をコンポーネントにインポートします。

```typescript
import { IgxPdfExporterService } from 'igniteui-angular/grids/core';

// import { IgxPdfExporterService } from '@infragistics/igniteui-angular/grids/core'; for licensed package

@Component({
  ...
})
export class AppComponent { ... }
```

エクスポート プロセスを開始するには、コンポーネントのテンプレートでボタン クリック ハンドラーを使用できます。

```html
<button (click)="exportButtonHandler()">Export Data to PDF</button>
```

`inject` 関数を使用して [`IgxPdfExporterService`]({environment:angularApiUrl}/classes/igxpdfexporterservice.html) にアクセスできます。データを PDF 形式でエクスポートするには、エクスポーター サービスの [`exportData`]({environment:angularApiUrl}/classes/igxpdfexporterservice.html#exportdata) メソッドを起動します。このメソッドは、エクスポートするデータを最初の引数として受け取り、エクスポート プロセスを構成できる [`IgxPdfExporterOptions`]({environment:angularApiUrl}/classes/igxpdfexporteroptions.html) インスタンスを 2 番目の引数として受け取ります。

以下は、コンポーネントの TypeScript ファイルでエクスポート プロセスを実行するコードです。

```typescript
// component.ts

...
import { Component, inject, signal } from '@angular/core';
import { IgxPdfExporterService, IgxPdfExporterOptions } from 'igniteui-angular/grids/core';

// import { IgxPdfExporterService, IgxPdfExporterOptions } from '@infragistics/igniteui-angular/grids/core'; for licensed package
...

public localData = signal([
  { Name: 'Eric Ridley', Age: '26' },
  { Name: 'Alanis Brook', Age: '22' },
  { Name: 'Jonathan Morris', Age: '23' }
]);

private pdfExportService = inject(IgxPdfExporterService);

public exportButtonHandler() {
  this.pdfExportService.exportData(this.localData, new IgxPdfExporterOptions('ExportedDataFile'));
}

```

正しく設定された場合、エクスポート ボタンが表示されます。押されたとき、エクスポート処理をトリガーし、ブラウザーが 「ExportedDataFile.pdf」 ファイルをダウンロードします。このファイルは `localData` 配列のデータを PDF 形式で含みます。

## エクスポートするコンテンツのカスタマイズ

上記の例では、PDF Exporter サービスはすべての使用可能なデータをエクスポートします。ただし、行または列全体のエクスポートをスキップしたい場合があります。これを実現するには、各列および/または各行に対してそれぞれ発生する [`columnExporting`]({environment:angularApiUrl}/classes/igxpdfexporterservice.html#columnexporting) イベントおよび/または [`rowExporting`]({environment:angularApiUrl}/classes/igxpdfexporterservice.html#rowexporting) イベントをサブスクライブできます。その後、イベント引数オブジェクトの [`cancel`]({environment:angularApiUrl}/interfaces/irowexportingeventargs.html#cancel) プロパティを `true` に設定することで、エクスポートをキャンセルできます。

以下の例では、ヘッダーが 「Age」 でインデックスが 1 の列をエクスポートから除外します。

```typescript
// component.ts

this.pdfExportService.columnExporting.subscribe((args: IColumnExportingEventArgs) => {
  if (args.header == 'Age' && args.columnIndex == 1) {
      args.cancel = true;
  }
});
this.pdfExportService.export(this.igxGrid1, new IgxPdfExporterOptions('ExportedDataFile'));
```

## PDF エクスポート オプション

[`IgxPdfExporterOptions`]({environment:angularApiUrl}/classes/igxpdfexporteroptions.html) クラスは、PDF エクスポートをカスタマイズするためのいくつかのプロパティを提供します。

- **pageOrientation**: ページの向き (`portrait` または `landscape`) を指定します。デフォルトは `landscape` です。
- **pageSize**: ページ サイズ (`a3`、`a4`、`a5`、`letter`、`legal` など) を指定します。デフォルトは `a4` です。
- **showTableBorders**: テーブルの境界線を表示するかどうかを決定します。デフォルトは `true` です。
- **fontSize**: テーブル コンテンツのフォント サイズを設定します。デフォルトは `10` です。
- **customFont**: Specifies a custom TrueType font (TTF) for Unicode character support. Required when exporting data containing non-Latin characters.

次の例は、これらのオプションを構成する方法を示しています。

```typescript
// component.ts

public exportButtonHandler() {
  const options = new IgxPdfExporterOptions('ExportedDataFile');
  options.pageOrientation = 'portrait';
  options.pageSize = 'letter';
  options.showTableBorders = true;
  options.fontSize = 12;

  this.pdfExportService.exportData(this.localData, options);
}
```

### Custom Font Configuration for Unicode Support

By default, the PDF exporter uses the built-in Helvetica font, which only supports basic Latin characters. If your data contains non-Latin characters (such as Cyrillic, Chinese, Japanese, Arabic, Hebrew, or special symbols), you must provide a custom TrueType font (TTF) using the `customFont` property.

The font data must be provided as a Base64-encoded string of the TTF file contents. You can optionally provide a separate bold variant for header styling.

#### Converting TTF Files to Base64

To convert a TTF file to Base64, use Node.js:

```javascript
const fs = require('fs');
const fontData = fs.readFileSync('path/to/font.ttf');
const base64 = fontData.toString('base64');
fs.writeFileSync('font-base64.ts', `export const MY_FONT = '${base64}';`);
```

Alternatively, you can use an online Base64 encoder tool to convert your TTF file.

#### Example: Basic Custom Font Usage

```typescript
// fonts/noto-sans.ts
export const NOTO_SANS_REGULAR = 'AAEAAAATAQAABAAwR0...[base64-encoded font data]...';

// component.ts
import { NOTO_SANS_REGULAR } from './fonts/noto-sans';

public exportButtonHandler() {
  const options = new IgxPdfExporterOptions('ExportedDataFile');
  options.customFont = {
    name: 'NotoSans',
    data: NOTO_SANS_REGULAR
  };

  this.pdfExportService.exportData(this.localData, options);
}
```

#### Example: Custom Font with Bold Variant

```typescript
// fonts/noto-sans.ts
export const NOTO_SANS_REGULAR = 'AAEAAAATAQAABAAwR0...[base64-encoded regular font]...';
export const NOTO_SANS_BOLD = 'BBFAAAAUBQAACAAxS1...[base64-encoded bold font]...';

// component.ts
import { NOTO_SANS_REGULAR, NOTO_SANS_BOLD } from './fonts/noto-sans';

public exportButtonHandler() {
  const options = new IgxPdfExporterOptions('ExportedDataFile');
  options.customFont = {
    name: 'NotoSans',
    data: NOTO_SANS_REGULAR,
    bold: {
      name: 'NotoSans-Bold',
      data: NOTO_SANS_BOLD
    }
  };

  this.pdfExportService.export(this.igxGrid1, options);
}
```

#### Recommended Fonts for Unicode Support

The following fonts provide excellent Unicode coverage:

- **Noto Sans**: Covers most Unicode scripts — [Google Fonts](https://fonts.google.com/noto/specimen/Noto+Sans)
- **Arial Unicode MS**: Comprehensive Unicode character support
- **Source Han Sans**: Excellent CJK (Chinese, Japanese, Korean) support

### Demo

<code-view style="height: 660px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           explicit-editor="stackblitz"
           iframe-src="{environment:demosBaseUrl}/services/export-pdf-custom-font/" alt="Angular PDF Exporter Custom Font Example">
</code-view>

<div class="divider--half"></div>


## 既知の制限

| 制限 | 説明 |
|---|---|
| 幅の広い PDF レイアウト | 非常に幅の広い Grid は、PDF の列がページに収まるように縮小されることがあります。ドキュメントを読みやすく保つために、エクスポートする前に明示的な列幅を適用するか、優先度の低いフィールドを非表示にしてください。 |

## API リファレンス

以下は、PDF Exporter サービスのその他の API です。

- [`IgxPdfExporterService API`]({environment:angularApiUrl}/classes/igxpdfexporterservice.html)
- [`IgxPdfExporterOptions API`]({environment:angularApiUrl}/classes/igxpdfexporteroptions.html)

使用したその他のコンポーネント:

- [IgxGridComponent API]({environment:angularApiUrl}/classes/igxgridcomponent.html)
- [IgxGridComponent スタイル]({environment:sassApiUrl}/themes#function-grid-theme)

<div class="divider"></div>

## その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)