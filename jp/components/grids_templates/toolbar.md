---
title: Angular Grid ツール バー | マテリアル テーブル | Ignite UI for Angular | インフラジスティックス 
_description: 重要な UI 操作のための Angular Toolbar 用の Ignite UI を使用方法をご紹介します。マテリアル UI テーブル ツールバーは、さまざまな機能に関連するさまざまな UI コントロールをホストします。
_keywords: Angular ツール バー, igniteui for angular, infragistics
_language: ja
---

### UI 操作のための @@igComponent ツールバー コンテナ

Ignite UI for Angular の @@igComponent は、UI 操作のコンテナとなる [`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) 機能をサポートします。Angular ツールバーは Angular コンポーネントの一番上、つまり @@igComponent にあり、水平方向のサイズと一致します。ツールバーのコンテナは、グリッド機能に関連するさまざまな UI コントロール (列の非表示、列ピン固定、エクセル エクスポート、Angular イベントなど) をホストします。

#### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="grid-toolbar-sample-1-iframe" src='{environment:demosBaseUrl}/grid/grid-toolbar-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-toolbar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="treegrid-toolbar-sample-4-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-4' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-toolbar-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-toolbar-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-toolbar-sample-1-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-title' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-toolbar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-toolbar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}

@@igComponent の [`showToolbar`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#showtoolbar) プロパティを使用してツールバーを表示するには、`true` に設定します。ツールバーは、テキスト タイトルの左揃えをサポートし、グリッドの @@igComponent の [`toolbarTitle`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#toolbartitle) プロパティを使用してコンテンツを設定します。以下のコード スニペットは、ツールバーとタイトルを設定する方法を確認できます。

@@if (igxName === 'IgxGrid') {
```html
<igx-grid [data]="data" [autoGenerate]="true" height="400px" width="600px"
    [showToolbar]="true"
    toolbarTitle="Grid Title">
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true" height="400px" width="900px"
    [showToolbar]="true"
    toolbarTitle="Tree Grid Toolbar">
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid #hierarchicalGrid class="hgrid" [data]="localdata" [showToolbar]="true" toolbarTitle="Singers" 
     [height]="'500px'" [width]="'800px'">
</igx-hierarchical-grid>
```
}

#### 機能

ツールバーは、列の非表示、列のピン固定、データを MS Excel や CSV 形式にエクスポートできます。 
各機能は、対応する boolean プロパティを設定して個別に有効にすることができます。
- 列の非表示は [`columnHiding`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnhiding) を **true** に設定
- 列のピン固定は [`columnPinning`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnpinning) を **true** に設定
- MS Excel エクスポートは、グリッドの [`exportExcel`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#exportexcel) プロパティを **true** に設定
- CSV エクスポートは、@@igComponent の [`exportCsv`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#exportcsv) プロパティを **true** に設定

@@if (igxName === 'IgxHierarchicalGrid') {
> [!NOTE]
> 階層下に Hierarchical Grid をエクスポートまたはその子グリッドがエクスポートされて、エクスポートされるデータは行のフラットなコレクションで、
> 該当のグリッドに属します　(子グリッドはエクスポートされるデータに含まれません)。
}

各ボタン テキストを設定するプロパティについては、以下の API セクションを確認してください。

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="grid-toolbar-sample-2-iframe" data-src='{environment:demosBaseUrl}/grid/grid-toolbar-sample-2' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-toolbar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="treegrid-toolbar-sample-1-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-1' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-toolbar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-toolbar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-toolbar-sample-2-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-options' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-toolbar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-toolbar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}

以下のコード スニペットは、ツールバーのすべての機能を有効にします。

@@if (igxName === 'IgxGrid') {
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
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true" height="400px" width="900px"
    [showToolbar]="true"
    toolbarTitle="Tree Grid Toolbar"
    [columnHiding]="true"
    [columnPinning]="true"
    [exportExcel]="true"
    [exportCsv]="true"
    exportText="Export"
    exportExcelText="Export to Excel"
    exportCsvText="Export to CSV">
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
 <igx-hierarchical-grid #hierarchicalGrid class="hgrid" [data]="localdata" [showToolbar]="true" toolbarTitle="Singers" 
    [columnHiding]="true" [columnPinning]="true" [height]="'500px'" [width]="'100%'">
...
</igx-hierarchical-grid>
```
}

MS Excel および CSV へのエクスポートは、プロバイダーとしてそれぞれ [`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) と [`IgxCsvExporterService`]({environment:angularApiUrl}/classes/igxcsvexporterservice.html) を使用します。いずれかを使用する場合は、**app.module.ts** ファイルの **providers** 配列で指定してください。たとえば、以下のコード スニペットは、すべてのエクスポーター サービスを含む方法を示します。

```typescript
// app.module.ts

...
import { IgxExcelExporterService, IgxCsvExporterService } from "igniteui-angular";

@NgModule({
  providers: [ IgxExcelExporterService, IgxCsvExporterService ]
})

export class AppModule {}
```
@@if (igxName !== 'IgxHierarchicalGrid') {
#### エクスポートのカスタマイズ

更にツールバー機能は簡単にオン/オフすることができます。エクスポート処理は、エクスポート処理初期化する際に発生される [`onToolbarExporting`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#ontoolbarexporting) イベントで詳細設定することができます。このイベントは、エクスポーターとエクスポーターのオプションで公開できます。

> [!NOTE]
> デフォルトで CSV にエクスポートした際にエクスポーターがカンマ区切りセパレーターを使用してエクスポートし、出力ファイルに .csv 拡張しを使用します。
> エクスポーターのイベントにサブスクライブまたはエクスポーター オプション フィールドの値を変更して、エクスポート パラメーターをカスタマイズできます。
> またイベント引数のキャンセル フィールドを true に設定してエクスポートをキャンセルすることもできます。

以下のコード スニペットは、[`onToolbarExporting`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#ontoolbarexporting) イベントにサブスクライブする方法やデフォルトのエクスポート処理をキャンセルする方法を示します。

```html
<@@igSelector ... (onToolbarExporting)="toolbarExportingHandler($event)"></@@igSelector>
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
        @@if (igxName === 'IgxGrid') {
        // Don't export image fields
        columnArgs.cancel = columnArgs.header === "Athlete" ||
                            columnArgs.header === "Country";
        }
        @@if (igxName === 'IgxTreeGrid') {
        // Don't export image field
        columnArgs.cancel = columnArgs.header === "Name";
        }
    });
}
```

以下のサンプルは、エクスポート ファイルをカスタマイズする方法を示します。

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="grid-toolbar-sample-3-iframe" data-src='{environment:demosBaseUrl}/grid/grid-toolbar-sample-3' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-toolbar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="treegrid-toolbar-sample-2-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-2' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-toolbar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-toolbar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider"></div>
}
}
#### カスタム コンテンツ テンプレート

ツールバーにアプリケーション固有の UI (カスタム ボタンなど) を追加する場合、ng-template を作成して [`igxToolbarCustomContent`]({environment:angularApiUrl}/classes/igxgridtoolbarcustomcontentdirective.html) ディレクティブでマークします。以下のコード スニペットはカスタム テンプレートを定義する方法を示します。

```html
<@@igSelector [showToolbar]="true" ...>

    ...

    <ng-template igxToolbarCustomContent let-@@igObjectRef="grid">
        <button igxButton="flat" igxRipple igxRippleCentered="true" (click)="@@igObjectRef.clearSort()">
            <igx-icon fontSet="material">clear</igx-icon>
            Clear Sort
        </button>
    </ng-template>
</@@igSelector>
```

> [!NOTE]
> [`igxToolbarCustomContent`]({environment:angularApiUrl}/classes/igxgridtoolbarcustomcontentdirective.html) ディレクティブのコンテキストに 2 つのプロパティがあります。
> `grid` - ツールバーを含む [`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) への参照。
> `toolbar` - [`Infragistics.Web.Mvc.dll`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) への参照を追加します。

以下のサンプルは、列ヘッダーをクリックして並べ替えセットをクリアするためのボタンをツールバーに追加する方法です。

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="grid-toolbar-sample-4-iframe" data-src='{environment:demosBaseUrl}/grid/grid-toolbar-sample-4' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-toolbar-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="treegrid-toolbar-sample-3-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-3' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-toolbar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-toolbar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-toolbar-sample-3-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-custom' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-toolbar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-toolbar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider"></div>
}

### スタイル設定

ツールバーのスタイル設定を開始するには、すべてのテーマ機能とコンポーネントミックスインが存在するインデックスファイルをインポートする必要があります。

```scss
// custom-grid-paging-style.component.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

最も簡単な方法として、[`igx-grid-toolbar-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-toolbar-theme) を拡張し、`$background-color` と `$title-text-color` パラメーターを受け取る新しいテーマを作成する方法があります。

```scss
$dark-grid-toolbar-theme: igx-grid-toolbar-theme(
    $background-color: #292826,
    $title-text-color: #FFCD0F
);
```

ツールバー内のボタンをスタイル設定するために、[`igx-button-theme`]({environment:sassApiUrl}/index.html#function-igx-button-theme) を拡張する別のテーマを作成します。

```scss
$dark-button-theme: igx-button-theme(
    $outlined-background: #FFCD0F,
    $outlined-text-color: #292826,
    $outlined-hover-background: #404040,
    $outlined-hover-text-color: #FFCD0F
);
```

最後にコンポーネントのテーマを**含めます**。Button テーマは、ツールバーのアクション コンテナにスコープされるため、外側のボタンはツールバーに影響を受けません。

```scss
@include igx-grid-toolbar($dark-grid-toolbar-theme);
.igx-grid-toolbar__actions {
    @include igx-button($dark-button-theme);

    .igx-button--outlined {
        margin-left: 0.5rem;
        border: none;
    }
}
```

>[!NOTE]
>コンポーネントが [`Emulated`](../themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を`ペネトレーション`する必要があります。

```scss
:host {
    ::ng-deep {
        @include igx-grid-toolbar($dark-grid-toolbar-theme);

        .igx-grid-toolbar__actions {
            @include igx-button($dark-button-theme);
    
            .igx-button--outlined {
                margin-left: 0.5rem;
                border: none;
            }
        }
    }
}
```

#### カラーパレットの定義

上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) および [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$yellow-color: #FFCD0F;
$black-color: #292826;

$dark-palette: igx-palette($primary: $black-color, $secondary: $yellow-color);
```

また [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取り出すことができます。 

```scss
$dark-button-theme: igx-button-theme(
    $outlined-background: igx-color($dark-palette, "secondary", 400),
    $outlined-text-color: igx-color($dark-palette, "primary", 400),
    $outlined-hover-background: igx-color($dark-palette, "primary", 400),
    $outlined-hover-text-color: igx-color($dark-palette, "secondary", 400)
);

$dark-grid-toolbar-theme: igx-grid-toolbar-theme(
    $background-color: igx-color($dark-palette, "primary", 200),
    $title-text-color: igx-color($dark-palette, "secondary", 400)
);
```

>[!NOTE]
>`igx-color` および `igx-palette` は、色を生成および取得するための重要な機能です。使い方の詳細については[`パレット`](../themes/palette.md)のトピックを参照してください。

#### スキーマの使用

テーマ エンジンを使用して [**スキーマ**](../themes/schemas.md) の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

すべてのコンポーネントに提供されている 2 つの定義済みスキーマの 1 つを拡張します。この場合、[`dark-grid-toolbar`]({environment:sassApiUrl}/index.html#variable-_dark-grid-toolbar) と [`dark-button`]({environment:sassApiUrl}/index.html#variable-_dark-button) スキーマ。

```scss
$dark-grid-toolbar-schema: extend($_dark-grid-toolbar,
    (
        background-color:(
            igx-color: ("primary", 200)
        ),
        title-text-color:(
            igx-color: ("secondary", 400)
        )
    )
);

$dark-button-schema: extend($_dark-button,
    (
        outlined-background: (
            igx-color: ("secondary", 400)
        ),
        outlined-text-color: (
            igx-color: ("primary", 400)
        ),
        outlined-hover-background: (
            igx-color: ("primary", 400)
        ),
        outlined-hover-text-color: (
            igx-color: ("secondary", 400)
        )
    )
);
```

カスタム スキーマを適用するには、グローバル ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) または [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)) のいずれかを**拡張**する必要があります。この方法は、基本的にカスタム スキーマでコンポーネントをポイントし、その後それぞれのコンポーネントテーマに追加します。

```scss
// Extending the global dark-schema
$custom-dark-schema: extend($dark-schema,(
    igx-grid-toolbar: $dark-grid-toolbar-schema,
    igx-button: $dark-button-schema
));

// Defining button-theme with the global dark schema
$dark-button-theme: igx-button-theme(
  $palette: $dark-palette,
  $schema: $custom-dark-schema
);

// Defining grid-toolbar-theme with the global dark schema
$dark-grid-toolbar-theme: igx-grid-toolbar-theme(
  $palette: $dark-palette,
  $schema: $custom-dark-schema
);
```

上記と同じ方法でテーマを含める必要があることに注意してください。

#### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="grid-toolbar-style-iframe" data-src='{environment:demosBaseUrl}/grid/grid-toolbar-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-toolbar-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="treegrid-toolbar-style-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-toolbar-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-toolbar-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:530px">
    <iframe id="hierarchical-grid-toolbar-style-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-toolbar-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-toolbar-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider"></div>
}

### API リファレンス

以下は、Grid Toolbar サービスのその他の API です。

[`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html)

[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) プロパティ:
* [`toolbar`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#toolbar)
* [`showToolbar`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#showtoolbar)
* [`toolbarTitle`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#toolbartitle)
* [`columnHiding`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnhiding)
* [`columnHidingTitle`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnhidingtitle)
* [`hiddenColumnsText`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#hiddencolumnstext)
* [`columnPinning`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnpinning)
* [`columnPinningTitle`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnpinningtitle)
* [`pinnedColumnsText`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#pinnedcolumnstext)
* [`exportExcel`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#exportexcel)
* [`exportCsv`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#exportcsv)
* [`exportText`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#exporttext)
* [`exportExcelText`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#exportexceltext)
* [`exportCsvText`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#exportcsvtext)

[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) イベント:
* [`onToolbarExporting`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#ontoolbarexporting)

スタイル:

* [`@@igxNameComponent スタイル`]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

### その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
