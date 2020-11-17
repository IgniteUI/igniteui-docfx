@@if(igxName==='IgxGrid') {
---
title: Angular Grid ツール バー | マテリアル テーブル | Ignite UI for Angular | インフラジスティックス 
_description: 重要な UI 操作のための Angular Toolbar 用の Ignite UI を使用方法をご紹介します。マテリアル UI テーブル ツールバーは、さまざまな機能に関連するさまざまな UI コントロールをホストします。
_keywords: Angular ツール バー, igniteui for angular, インフラジスティックス
_language: ja
---
}

@@if(igxName!=='IgxGrid') {
---
title: Angular Grid ツール バー | マテリアル テーブル | Ignite UI for Angular | インフラジスティックス 
_description: 重要な UI 操作のための Angular Toolbar 用の Ignite UI を使用方法をご紹介します。マテリアル UI テーブル ツールバーは、さまざまな機能に関連するさまざまな UI コントロールをホストします。
_keywords: Angular ツール バー, igniteui for angular, インフラジスティックス
_language: ja
_canonicalLink: grid/toolbar
---
}

# UI 操作のための @@igComponent ツールバー コンテナ

Ignite UI for Angular の @@igComponent は、UI 操作のコンテナとなる [`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) 機能をサポートします。Angular ツールバーは Angular コンポーネントの一番上、つまり @@igComponent にあり、水平方向のサイズと一致します。ツールバーのコンテナは、グリッド機能に関連するさまざまな UI コントロール (列の非表示、列ピン固定、エクセル エクスポート、Angular イベントなど) をホストします。

## Angular ツールバー グリッドの例

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="grid-toolbar-sample-1-iframe" src='{environment:demosBaseUrl}/grid/grid-toolbar-sample-1' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular Toolbar Grid Example"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-toolbar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="treegrid-toolbar-sample-4-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-4' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-toolbar-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-toolbar-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-toolbar-sample-1-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-title' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-toolbar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-toolbar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
}

@@igComponent タグの間に `igx-grid-toolbar` コンポーネントを挿入することにより、@@igComponent のツールバーを有効にできます。
ツールバーの追加機能は、デフォルトのツールバー UI コンポーネントを使用するか、独自のコンポーネントを作成することで有効になります。
デフォルトの UI コンポーネントとそれらを有効にする方法の全般的な概要については、以下の**機能**セクションを読み進めてください。
以下のコード スニペットは、ツールバーとタイトルを設定する方法を確認できます。

@@if (igxName === 'IgxGrid') {
```html
<igx-grid [data]="data" [autoGenerate]="true">
    <igx-grid-toolbar>
        <igx-grid-toolbar-title>Grid Title</igx-grid-toolbar-title>
    </igx-grid-toolbar>
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true">
    <igx-grid-toolbar>
        <igx-grid-toolbar-title>Tree Grid Toolbar</igx-grid-toolbar-title>
    </igx-grid-toolbar>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid [data]="data">
    <igx-grid-toolbar>
        <igx-grid-toolbar-title>Hierarchical Grid Toolbar</igx-grid-toolbar-title>
    </igx-grid-toolbar>
</igx-hierarchical-grid>
```
}

@@if (igxName === 'IgxHierarchicalGrid') {

## 子グリッド付きのツールバー
IgxHierarchicalGrid の子グリッドの実装方法と DI スコープの動作には特定の制限があるため、子グリッドのスコープでツールバーを使用する場合は注意が必要です。`igx-row-island` タグ内でツールバー コンポーネントを定義するときは、必ずツールバー自体で IgxGridToolbar ディレクティブを使用し、提供されたグリッド インスタンスを入力プロパティとしてツールバー自体に渡すようにしてください。
これにより、テンプレートのスコープ内に常に正しいグリッド インスタンスが含まれるようになります。

```html
<igx-hierarchical-grid>
    ...
    <igx-row-island>
        <!--
            You can name the binding from igxGridToolbar however you want. Just make sure to use
            it inside the template if you need to access the grid instance.
        -->
        <igx-grid-toolbar [grid]="gridRef" *igxGridToolbar="let gridRef">
            <igx-grid-toolbar-title>Child toolbar {{ gridRef.parentIsland.level }}</igx-grid-toolbar-title>
        </igx-grid-toolbar>
    </igx-row-island>
    ...
</igx-hierarchical-grid>
```

}

## 機能

ツールバーは、グリッド全体に影響を与えるロジック/インタラクションを分離するのに最適です。
したがって、制御、列の非表示、列のピン固定、高度なフィルタリング、およびグリッドからのデータのエクスポートのためのデフォルトのコンポーネントを提供するように構成できます。これらの機能は、Ignite UI for Angular スイートのカード コンポーネントと同様のパターンに従うことで、互いに独立して有効にできます。
以下にリストされているのは、ツールバーの主な機能と、それぞれのサンプル コードです。


@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="grid-toolbar-sample-2-iframe" data-src='{environment:demosBaseUrl}/grid/grid-toolbar-sample-2' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-toolbar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="treegrid-toolbar-sample-1-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-1' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-toolbar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-toolbar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-toolbar-sample-2-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-options' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-toolbar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-toolbar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
}


### タイトル
グリッドのツールバーのタイトルを設定するには、[IgxGridToolbarTitleDirective]({environment:angularApiUrl}/classes/igxgridtoolbartitledirective.html) を使用します。
ユーザーは、単純なテキストからより複雑なテンプレートまで、どんなものでも提供できます。
```html
<igx-grid-toolbar>
    <igx-grid-toolbar-title>Grid toolbar title</igx-grid-toolbar-title>
</igx-grid-toolbar>
```

### 操作
ツールバーは、ユーザーが親グリッドに関連して操作/インタラクションを配置できる[特定のコンテナ]({environment:angularApiUrl}/classes/igxgridtoolbaractionsdirective.html)を公開します。
ツールバーのタイトル部分と同様に、ユーザーは、デフォルトのツールバー インタラクション コンポーネントを含め、そのテンプレート部分内にどんなものでも提供できます。

```html
<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <button igxButton>Action</button>
        <igx-select></igx-select>
        ...
    </igx-grid-toolbar-actions>
</igx-grid-toolbar>
```

### 列のピン固定
[このコンポーネント]({environment:angularApiUrl}/classes/igxgridtoolbarpinningcomponent.html)は、グリッド内の列のピン固定を操作するためのデフォルトの UI を提供します。
コンポーネントは、ツールバーを含む親グリッドと、コンポーネントのタイトル、コンポーネント入力のプレースホルダー、ドロップダウン自体の高さなど、UI をカスタマイズするためのいくつかの入力プロパティを使用して、そのまま動作します。

```html
<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <igx-grid-toolbar-pinning
            title="Grid pinned columns"
            prompt="Filter column collection"
            columnListHeight="400px"
        >
        </igx-grid-toolbar-pinning>
    </igx-grid-toolbar-actions>
</igx-grid-toolbar>
```


### 列の非表示
ピン固定操作コンポーネントと同様に、[非表示コンポーネント]({environment:angularApiUrl}/classes/igxgridtoolbarhidingcomponent.html)は、列の非表示と対話するためのデフォルトの UI を提供します。

```html
<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <igx-grid-toolbar-hiding
            title="Grid column hiding"
            prompt="Filter column collection"
            columnListHeight="400px"
        >
        </igx-grid-toolbar-hiding>
    </igx-grid-toolbar-actions>
</igx-grid-toolbar>
```

### 高度なフィルタリング
グリッドで高度なフィルタリングが有効になっている場合、ユーザーは高度なフィルタリング機能の[デフォルト コンポーネント]({environment:angularApiUrl}/classes/igxgridtoolbaradvancedfilteringcomponent.html)を提供できます。
コンポーネントは、ボタンのデフォルトのテキストを変更する方法を公開します。
```html
<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <igx-grid-toolbar-advanced-filtering>Custom text for the toggle button</igx-grid-toolbar-advanced-filtering>
    </igx-grid-toolbar-actions>
</igx-grid-toolbar>
```

### データのエクスポート

@@if (igxName === 'IgxHierarchicalGrid') {
> [!NOTE]
> 階層グリッドまたは階層下の子グリッドのいずれかをエクスポートすると、エクスポートされるデータは、それぞれのグリッドに属する行のフラット コレクションになります (子グリッドはエクスポートされたデータに含まれません)。
}

残りのツールバー操作と同様に、エクスポートは、すぐに使用できるツールバー [コンポーネント]({environment:angularApiUrl}/classes/igxgridtoolbarexportercomponent.html)を介して提供されます。
エクスポート コンポーネントは、ターゲット データ形式 (Excel CSV) のそれぞれのサービスを使用しています。つまり、それぞれのサービスが依存関係挿入チェーンを通じて提供されない場合、コンポーネントは何もエクスポートできません。
Angular の DI の復習が必要な場合は、[公式ガイド](https://angular.io/guide/dependency-injection)をご覧ください。これは、アプリケーションのすべてのエクスポート サービスを有効にする方法を示すサンプル スニペットです。

```typescript
// app.module.ts

import { IgxExcelExporterService, IgxCsvExporterService } from 'igniteui-angular';

@NgModule({
    ...
    providers: [IgxExcelExporterService, IgxCsvExporterService ]
})
export class AppModule { ... }
```

ツールバー エクスポーター コンポーネントは、UI とエクスポート エクスペリエンスの両方をカスタマイズするためのいくつかの入力プロパティを公開します。
これらは、表示テキストの変更から、ドロップダウンのオプションの有効化/無効化、生成されたファイルの名前のカスタマイズまで多岐にわたります。
完全なリファレンスについては、ツールバー エクスポータ コンポーネントの [API ヘルプ]({environment:angularApiUrl}/classes/igxgridtoolbarexportercomponent.html)を参照してください。

これは、Angular テンプレートを介してカスタマイズできるいくつかのオプションを示すスニペットです。

```html
<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <igx-grid-toolbar-exporter
            <!-- If active, enables the csv export entry in the dropdown UI -->
            [exportCSV]="csvExportEnabled"
            <!-- If active, enables the excel export entry in the dropdown UI -->
            [exportExcel]="excelExportEnabled"
            <!-- The name of the generated export file without the file extension -->
            filename="exported_data"
        >
            Custom text for the exporter button
            <span excelText>Custom text for the excel export entry</span>
            <span csvText>Custom text for the CSV export entry</span>
        </igx-grid-toolbar-exporter>
    </igx-grid-toolbar-actions>
</igx-grid-toolbar>
```

@@if (igxName !== 'IgxHierarchicalGrid') {

エクスポートされたファイル名を変更することに加えて、ユーザーは [onToolbarExporting](environment:angularApiUrl}/classes/@@igTypeDoc.html#ontoolbarexporting) イベントを待機し、イベント プロパティのオプション エントリをカスタマイズすることで、エクスポーター オプションをさらに構成できます。

> [!NOTE]
> デフォルトで CSV にエクスポートした際にエクスポーターがカンマ区切りセパレーターを使用してエクスポートし、出力ファイルに .csv 拡張しを使用します。
> エクスポーターのイベントにサブスクライブまたはエクスポーター オプション フィールドの値を変更して、エクスポート パラメーターをカスタマイズできます。
> またイベント引数のキャンセル フィールドを true に設定してエクスポートをキャンセルすることもできます。

次のコード スニペットは、ツールバーのエクスポート イベントのサブスクライブとエクスポーター オプションの構成を示しています。

```html
<@@igSelector (onToolbarExporting)="configureExport($event)" ></@@igSelector>
```

```typescript
configureExport(args: IGridToolbarExportEventArgs) {
    const options: IgxExporterOptionsBase = args.options;

    options.fileName = `Report_${new Date().toDateString()}`;

    if (options instanceof IgxExcelExporterOptions) {
        options.columnWidth = 10;
    } else {
        options.fileType = CsvFileTypes.TSV;
        options.valueDelimiter = "\t";
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
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-toolbar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="treegrid-toolbar-sample-2-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-2' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-toolbar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-toolbar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider"></div>
}

## エクスポート インジケーター

デフォルトのツールバー エクスポーター コンポーネントを使用する場合、エクスポート操作が行われると、操作の進行中にツールバーに進行状況インジケーターが表示されます。
さらに、ユーザーはツールバーの [showProgress]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html#showprogress) プロパティを設定して、自分の長時間実行操作に使用するか、グリッドで実行されている操作を示す別の方法として使用できます。

以下のサンプルでは、progressbar が表示されるようにデータのエクスポートに必要な時間を増やすために、大量のデータを使用しています。さらに、グリッドで長時間実行される操作をシミュレートする別のボタンがあります。


@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height: 370px;">
    <iframe id="excel-export-sample1-iframe" src="{environment:demosBaseUrl}/grid/exporting-visualization"
    width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="excel-export-sample1-iframe" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="excel-export-sample1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height: 370px;">
    <iframe id="excel-export-sample2-iframe" src="{environment:demosBaseUrl}/tree-grid/tree-grid-exporting-visualization"
    width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="excel-export-sample2-iframe" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="excel-export-sample2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>
}

## カスタム コンテンツ

> [!NOTE]
> これは、古いツールバー テンプレート ディレクティブを置き換えます。v11 より前のバージョンから移行する場合は、マイグレーションによってテンプレート コンテンツの移動が処理されます。
> ただし、テンプレート内のバインディングは処理しないため、マイグレーションの完了後に、変更されたテンプレート ファイルを再確認してください。

ツールバー コンポーネントのアクション部分が特定のユース ケースに十分でない場合、ツールバー自体には、ユーザーが追加の UI を提供できる一般的なコンテンツ プロジェクションがあります。
ユーザーが API 呼び出しまたはバインディングにそれぞれのグリッド インスタンスを必要とする場合は、テンプレート参照変数を作成できます。


サンプル スニペットは次のとおりです。

```html
<@@igSelector #gridRef ...>

    ...
    <igx-grid-toolbar>
        <igx-grid-toolbar-title>{{ titleBinding }}</igx-grid-toolbar-title>

        <!--
            Everything between the toolbar tags except the default toolbar components/directives
            will be projected as custom content.
         -->
        <button igxButton="flat" igxRipple (click)="#gridRef.clearSort()">
            <igx-icon fontSet="material">clear</igx-icon>
            Clear Sort
        </button>

        <igx-grid-toolbar-actions>
            ...
        </igx-grid-toolbar-actions>
    </igx-grid-toolbar>

</@@igSelector>
```


以下のサンプルは、列ヘッダーをクリックして並べ替えセットをクリアするためのボタンをツールバーに追加する方法です。

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="grid-toolbar-sample-4-iframe" data-src='{environment:demosBaseUrl}/grid/grid-toolbar-sample-4' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-toolbar-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="treegrid-toolbar-sample-3-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-3' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-toolbar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-toolbar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-toolbar-sample-3-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-custom' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-toolbar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-toolbar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider"></div>
}

## スタイル設定

ツールバーのスタイル設定を始めるには、すべてのテーマ関数とコンポーネント mixins が存在する index ファイルをインポートする必要があります。

```scss
// custom-grid-paging-style.component.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

最も簡単な方法は、[`igx-grid-toolbar-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-toolbar-theme) を拡張する新しいテーマを作成し、`$background-color` と `$title-text-color` パラメーターを受け取る方法です。

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
>コンポーネントが [`Emulated`](../themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

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

### カラーパレットの定義

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

### スキーマの使用

テーマ エンジンを使用して [**スキーマ**](../themes/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

すべてのコンポーネントに提供されている 2 つの定義済みスキーマ (この場合は ([`dark-grid-toolbar`]({environment:sassApiUrl}/index.html#variable-_dark-grid-toolbar) と [`dark-button`]({environment:sassApiUrl}/index.html#variable-_dark-button) スキーマ) の 1 つを拡張します。

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

カスタム スキーマを適用するには、グローバル ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) または [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)) の 1 つを**拡張**する必要があります。これは基本的にカスタム スキーマでコンポーネントを指し示し、その後それぞれのコンポーネント テーマに追加するものです。

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

### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="grid-toolbar-style-iframe" data-src='{environment:demosBaseUrl}/grid/grid-toolbar-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-toolbar-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示</button>
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
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-toolbar-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示</button>
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
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-toolbar-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-toolbar-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider"></div>
}

## API リファレンス

以下は、Grid Toolbar サービスのその他の API です。

* [`IgxGridToolbarActionsDirective`]({environment:angularApiUrl}/classes/igxgridtoolbaractionsdirective.html)
* [`IgxGridToolbarAdvancedFilteringComponent`]({environment:angularApiUrl}/classes/igxgridtoolbaradvancedfilteringcomponent.html)
* [`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html)
* [`IgxGridToolbarExporterComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarexportercomponent.html)
* [`IgxGridToolbarHidingComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarhidingcomponent.html)
* [`IgxGridToolbarPinningComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarpinningcomponent.html)
* [`IgxGridToolbarTitleDirective`]({environment:angularApiUrl}/classes/igxgridtoolbartitledirective.html)


[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) イベント:
* [`onToolbarExporting`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#ontoolbarexporting)

スタイル:

* [`@@igxNameComponent スタイル`]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

## その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)