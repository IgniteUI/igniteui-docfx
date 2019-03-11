@@if (igxName === 'IgxGrid') {
---
title: Grid Toolbar コンポーネント - ネイティブ Angular|Ignite UI for Angular
_description: Ignite UI for Angular Grid Toolbar コンポーネントは、IgxGrid 機能 UI コントロールを一元管理できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Grid, Angular Table, Angular Data Grid コンポーネント, Angular Data Table コンポーネント, Angular Data Grid コントロール, Angular Data Table コントロール, Angular Grid コンポーネント, Angular Table コンポーネント, Angular Grid コントロール, Angular Table コントロール, Angular 高パフォーマンス Grid, Angular 高パフォーマンス Data Table, Angular Data Grid Toolbar, Angular Data Table Toolbar, Grid Toolbar, Angular Grid Toolbar, Angular Table Toolbar, excel エクスポート, grid column hiding chooser, grid column pinning chooser, data table column hiding, data table column ピン固定
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Tree Grid Toolbar コンポーネント - ネイティブ Angular|Ignite UI for Angular
_description: Ignite UI for Angular Tree Grid Toolbar コンポーネントは、IgxTreeGrid 機能 UI コントロールを一元管理できます。
_keywords: Ignite UI for Angular, UI controls, Angular ウィジェット, web widgets, UI ウィジェット, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, Native Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Tree Grid, Angular Tree Table, Angular Tree Grid コンポーネント, Angular Tree Table コンポーネント, Angular Tree Grid コントロール, Angular Tree Table コントロール, Angular Tree Grid コンポーネント, Angular Tree Table コンポーネント, Angular Tree Grid コントロール, Angular Tree Table コントロール, Angular 高パフォーマンス Tree Grid, Angular 高パフォーマンス Tree Table, Angular Tree Grid Toolbar, Angular Tree Table Toolbar, Tree Grid Toolbar, Angular Tree Grid Toolbar, Angular Tree Table Toolbar, excel エクスポート, tree grid column hiding chooser, tree grid column pinning chooser, tree table column hiding, tree table column pinning
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Hierarchical Grid Toolbar コンポーネント - ネイティブ Angular|Ignite UI for Angular
_description: Angular Hierarchical Grid Toolbar コンポーネントは、IgxHierarchicalGrid 機能 UI コントロールを一元管理できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, Native Angular コンポーネント Suite, Native Angular コントロール, Native Angular コンポーネント Library, ネイティブ Angular コンポーネント, Angular Hierarchical Grid, Angular Hierarchical Table, Angular Hierarchical Grid コンポーネント, Angular Hierarchical Table コンポーネント, Angular Hierarchical Grid コントロール, Angular Hierarchical Table コントロール, Angular 高パフォーマンス Hierarchical Grid, Angular 高パフォーマンス Hierarchical Table, Angular Hierarchical Grid Toolbar, Angular Hierarchical Table Toolbar, Hierarchical Grid Toolbar, excel エクスポート, hierarchical grid column hiding chooser, hierarchical grid column pinning chooser, hierarchical table column hiding, hierarchical table column pinning
_language: ja
---
}
### @@igComponent ツールバー

Ignite UI for Angular の @@igComponent は、**UI** 操作のコンテナとなる [`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) 機能をサポートします。ツールバーは @@igComponent の一番上に配置され @@igComponent の水平サイズに一致します。ツールバーのコンテナは、グリッド機能に関連するさまざまな UI コントロール (列の非表示、列ピン固定、エクセル エクスポートなど) をホストします。

#### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="grid-toolbar-sample-1-iframe" src='{environment:demosBaseUrl}/grid/grid-toolbar-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="treegrid-toolbar-sample-4-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-4' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-toolbar-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-toolbar-sample-1-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-title' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-toolbar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
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
- 列のピン固定は [`columnHiding`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnpinning) を **true** に設定
- MS Excel エクスポートは、グリッドの [`exportExcel`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#exportexcel) プロパティを **true** に設定
- MS Excel エクスポートは、@@igComponent の [`exportExcel`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#exportcsv) プロパティを **true** に設定

@@if (igxName === 'IgxHierarchicalGrid') {
> [!NOTE]
> 階層下に Hierarchical Grid をエクスポートまたはその子グリッドがエクスポートされて、エクスポートされるデータは行のフラットなコレクションで、
> 該当のグリッドに属します　(子グリッドはエクスポートされるデータに含まれません)。
}

各ボタン テキストを設定するプロパティについては、以下の API セクションを確認してください。

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="grid-toolbar-sample-2-iframe" src='{environment:demosBaseUrl}/grid/grid-toolbar-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="treegrid-toolbar-sample-1-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-toolbar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-toolbar-sample-2-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-options' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-toolbar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
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

更にツールバー機能は簡単にオン/オフすることができます。エクスポート処理は、エクスポート処理初期化する際に発生される  **app.module.ts** イベントで詳細設定することができます。このイベントは、エクスポーターとエクスポーターのオプションで公開できます。

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
    <iframe id="grid-toolbar-sample-3-iframe" src='{environment:demosBaseUrl}/grid/grid-toolbar-sample-3' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="treegrid-toolbar-sample-2-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-toolbar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
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
    <iframe id="grid-toolbar-sample-4-iframe" src='{environment:demosBaseUrl}/grid/grid-toolbar-sample-4' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="treegrid-toolbar-sample-3-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-3' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-toolbar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-toolbar-sample-3-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-custom' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-toolbar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
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
