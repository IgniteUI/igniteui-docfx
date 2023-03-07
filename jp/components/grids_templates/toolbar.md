@@if(igxName==='IgxGrid') {
---
title: Angular Grid Toolbar - Ignite UI for Angular 
_description: 重要な UI 操作には Angular Data Grid Toolbar を使用します。列の非表示、ピン固定、Excel エクスポートなど、グリッドの機能にさまざまな UI コントロールをホストします。
_keywords: Angular ツール バー, igniteui for angular, インフラジスティックス
_language: ja
---
}

@@if(igxName!=='IgxGrid') {
---
title: Angular Grid Toolbar - Ignite UI for Angular 
_description: 重要な UI 操作には Angular @@igComponent Toolbar を使用します。列の非表示、ピン固定、Excel エクスポートなど、グリッドの機能にさまざまな UI コントロールをホストします。
_keywords: Angular ツール バー, igniteui for angular, インフラジスティックス
_language: ja
_canonicalLink: grid/toolbar
---
}

# Angular @@igComponent Toolbar

Ignite UI for Angular の @@igComponent は、UI 操作のコンテナーとなる [`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) 機能をサポートします。Angular ツールバーは Angular コンポーネントの一番上、つまり @@igComponent にあり、水平方向のサイズと一致します。ツールバー コンテナーは、次の @@igComponent の機能、またはその他のカスタム コンテンツ用に事前定義された UI コントロールをホストできます:

 - 列の非表示
 - 列のピン固定
 - Excel エクスポート
 - 高度なフィルタリング

ツールバーと事前定義された UI コンポーネントは、Angular イベントをサポートし、開発者向けに API を公開します。

## Angular ツールバー グリッドの例

@@if (igxName === 'IgxGrid') {

<code-view style="height:420px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-toolbar-sample-1" alt="Angular ツールバー グリッドの例">
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:420px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-4" alt="Angular ツールバー グリッドの例">
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:510px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-title" alt="Angular ツールバー グリッドの例">
</code-view>

}

事前定義された `actions` および `title` UI コンポーネントが `<igx-grid-toolbar>` 内に追加されます。これはすべて、対応するグリッド機能とのデフォルトのインタラクションを提供するツールバーを持つために必要です。

@@if (igxName === 'IgxGrid') {
```html
<igx-grid [data]="data" [autoGenerate]="true">
    <igx-grid-toolbar>
        <igx-grid-toolbar-title>Grid Toolbar</igx-grid-toolbar-title>
        <igx-grid-toolbar-actions>
            <igx-grid-toolbar-advanced-filtering><igx-grid-toolbar-advanced-filtering>
            <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
            <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
            <igx-grid-toolbar-exporter></igx-grid-toolbar-exporter>
        </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true">
    <igx-grid-toolbar>
        <igx-grid-toolbar-title>Tree Grid Toolbar</igx-grid-toolbar-title>
        <igx-grid-toolbar-actions>
            <igx-grid-toolbar-advanced-filtering><igx-grid-toolbar-advanced-filtering>
            <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
            <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
            <igx-grid-toolbar-exporter></igx-grid-toolbar-exporter>
        </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid [data]="data">
    <igx-grid-toolbar>
        <igx-grid-toolbar-title>Hierarchical Grid Toolbar</igx-grid-toolbar-title>
        <igx-grid-toolbar-actions>
            <igx-grid-toolbar-advanced-filtering><igx-grid-toolbar-advanced-filtering>
            <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
            <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
            <igx-grid-toolbar-exporter></igx-grid-toolbar-exporter>
        </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
</igx-hierarchical-grid>
```
}

> 注: 上記のコード スニペットに示されているように、事前定義された `actions` UI コンポーネントは [`<igx-grid-toolbar-actions>` コンテナー](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbaractionscomponent.html)にラップされています。このように、ツールバーのタイトルはツールバーの左側に配置され、アクションはツールバーの右側に配置されます。

これらの UI はそれぞれ独立して追加することも、まったく追加しないこともできます。このようにして、ツールバー コンテナーは空になります。

@@if (igxName === 'IgxGrid') {
```html
<igx-grid [data]="data" [autoGenerate]="true">
    <igx-grid-toolbar>
    </igx-grid-toolbar>
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true">
    <igx-grid-toolbar>
    </igx-grid-toolbar>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid [data]="data">
    <igx-grid-toolbar>
    </igx-grid-toolbar>
</igx-hierarchical-grid>
```
}

デフォルトの各 UI コンポーネントの詳細については、以下の**機能**セクションを読み続けてください。

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

ツールバーは、グリッド全体に影響を与えるロジック/インタラクションを分離するのに最適です。上記のように、制御、列の非表示、列のピン固定、高度なフィルタリング、およびグリッドからのデータのエクスポートのためのデフォルトのコンポーネントを提供するように構成できます。これらの機能は、Ignite UI for Angular スイートのカード コンポーネントと同様のパターンに従うことで、互いに独立して有効にできます。
以下にリストされているのは、ツールバーの主な機能と、それぞれのサンプル コードです。


@@if (igxName === 'IgxGrid') {

<code-view style="height:630px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-toolbar-sample-2" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:420px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-1" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:510px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-options" >
</code-view>

}


### タイトル
グリッドのツールバーのタイトルを設定するには、[IgxGridToolbarTitleComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbartitlecomponent.html) を使用します。
ユーザーは、単純なテキストからより複雑なテンプレートまで、どんなものでも提供できます。
```html
<igx-grid-toolbar>
    <igx-grid-toolbar-title>Grid toolbar title</igx-grid-toolbar-title>
</igx-grid-toolbar>
```

### 操作
ツールバーは、ユーザーが親グリッドに関連して操作/インタラクションを配置できる[特定のコンテナー](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbaractionscomponent.html)を公開します。
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

各アクションは、[`overlaySettings`]({environment:angularApiUrl}/classes/igxgridtoolbarhidingcomponent.html#overlaySettings) 入力を使用して、アクション ダイアログのオーバーレイ設定を変更する方法を公開するようになりました。例:

```html
<igx-grid-toolbar-actions>
    <igx-grid-toolbar-pinning [overlaySettings]="overlaySettingsScaleCenter"></igx-grid-toolbar-pinning>
    <igx-grid-toolbar-hiding [overlaySettings]="overlaySettingsAuto"></igx-grid-toolbar-hiding>
</igx-grid-toolbar-actions>
```

```ts
public data: any[];
public positionStrategyScaleCenter = new GlobalPositionStrategy({
    openAnimation: scaleInCenter,
    closeAnimation: scaleOutCenter
});
public overlaySettingsScaleCenter = {
    positionStrategy: this.positionStrategyScaleCenter,
    scrollStrategy: new AbsoluteScrollStrategy(),
    modal: true,
    closeOnEscape: true
};

public positionStrategyAuto = new AutoPositionStrategy();
public overlaySettingsAuto = {
    positionStrategy: this.positionStrategyAuto,
    scrollStrategy: new AbsoluteScrollStrategy(),
    modal: false,
    closeOnEscape: false
};
constructor() {
    this.data = athletesData;
}
```

デフォルトの overlaySettings は、*ConnectedPositionStrategy* と *Absolute* スクロール方法を使用しています。モーダルは false に設定されており、[Esc] キーを押して閉じるインタラクションと外側のクリックで閉じるインタラクションが有効になっています。

### 列のピン固定
[Toolbar Pinning コンポーネント]({environment:angularApiUrl}/classes/igxgridtoolbarpinningcomponent.html)は、グリッド内の列のピン固定を操作するためのデフォルトの UI を提供します。
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
[Toolbar Hiding コンポーネント]({environment:angularApiUrl}/classes/igxgridtoolbarhidingcomponent.html)は、列非表示を操作するためのデフォルトの UI を提供します。コンポーネントのタイトル、コンポーネント入力のプレースホルダー、ドロップダウン自体の高さなど、UI をカスタマイズするための同じ入力プロパティを公開します。

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
[Toolbar Advanced Filtering コンポーネント]({environment:angularApiUrl}/classes/igxgridtoolbaradvancedfilteringcomponent.html)は、高度なフィルタリング機能のデフォルトの UI を提供します。コンポーネントは、ボタンのデフォルトのテキストを変更する方法を公開します。
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

残りのツールバー操作と同様に、エクスポートは、すぐに使用できる [Toolbar Exporter コンポーネント]({environment:angularApiUrl}/classes/igxgridtoolbarexportercomponent.html)を介して提供されます。
エクスポート コンポーネントは、ターゲット データ形式 (Excel CSV) のそれぞれのサービスを使用しています。つまり、それぞれのサービスが依存関係挿入チェーンを通じて提供されない場合、コンポーネントは何もエクスポートできません。
Angular の DI の復習が必要な場合は、[公式ガイド](https://angular.io/guide/dependency-injection)をご覧ください。これは、アプリケーションのすべてのエクスポート サービスを有効にする方法を示すサンプル スニペットです。

```typescript
// app.module.ts

import { IgxExcelExporterService, IgxCsvExporterService } from 'igniteui-angular';
// import { IgxExcelExporterService, IgxCsvExporterService } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    providers: [IgxExcelExporterService, IgxCsvExporterService ]
})
export class AppModule { ... }
```

> [!Note]
> v 12.2.1 以降では、エクスポーター サービスは root で提供されます。つまり、AppModule プロバイダーでそれらを宣言する必要はありません。

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

エクスポートされたファイル名を変更することに加えて、ユーザーは [toolbarExporting](environment:angularApiUrl}/classes/@@igTypeDoc.html#toolbarExporting) イベントを待機し、イベント プロパティのオプション エントリをカスタマイズすることで、エクスポーター オプションをさらに構成できます。

> [!NOTE]
> デフォルトで CSV にエクスポートした際にエクスポーターがカンマ区切りセパレーターを使用してエクスポートし、出力ファイルに .csv 拡張しを使用します。
> エクスポーターのイベントにサブスクライブまたはエクスポーター オプション フィールドの値を変更して、エクスポート パラメーターをカスタマイズできます。
> またイベント引数のキャンセル フィールドを true に設定してエクスポートをキャンセルすることもできます。

次のコード スニペットは、ツールバーのエクスポート イベントのサブスクライブとエクスポーター オプションの構成を示しています。

```html
<@@igSelector (toolbarExporting)="configureExport($event)" ></@@igSelector>
```

```typescript
configureExport(args: IGridToolbarExportEventArgs) {
    const options: IgxExporterOptionsBase = args.options;

    options.fileName = `Report_${new Date().toDateString()}`;

    if (options instanceof IgxExcelExporterOptions) {
        options.columnWidth = 10;
    } else {
        options.fileType = CsvFileTypes.TSV;
        options.valueDelimiter = '\t';
    }

    args.exporter.columnExporting.subscribe((columnArgs: IColumnExportingEventArgs) => {
        @@if (igxName === 'IgxGrid') {
        // Don't export image fields
        columnArgs.cancel = columnArgs.header === 'Athlete' ||
                            columnArgs.header === 'Country';
        }
        @@if (igxName === 'IgxTreeGrid') {
        // Don't export image field
        columnArgs.cancel = columnArgs.header === 'Name';
        }
    });
}
```
}

以下のサンプルは、エクスポート ファイルをカスタマイズする方法を示します。

@@if (igxName === 'IgxGrid') {

<code-view style="height:420px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-toolbar-sample-3" >
</code-view>

<div class="divider"></div>
}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:420px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-2" >
</code-view>

<div class="divider"></div>
}

## エクスポート インジケーター

デフォルトのツールバー エクスポーター コンポーネントを使用する場合、エクスポート操作が行われると、操作の進行中にツールバーに進行状況インジケーターが表示されます。
さらに、ユーザーはツールバーの [showProgress]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html#showProgress) プロパティを設定して、自分の長時間実行操作に使用するか、グリッドで実行されている操作を示す別の方法として使用できます。
以下のサンプルでは、progressbar が表示されるようにデータのエクスポートに必要な時間を増やすために、大量のデータを使用しています。さらに、グリッドで長時間実行される操作をシミュレートする別のボタンがあります。

@@if (igxName === 'IgxGrid') {

<code-view style="height: 370px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/exporting-visualization" >
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height: 370px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-exporting-visualization" >
</code-view>

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

<code-view style="height:420px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-toolbar-sample-4" >
</code-view>

<div class="divider"></div>
}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:420px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-3" >
</code-view>

<div class="divider"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:510px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-custom" >
</code-view>

<div class="divider"></div>
}

## スタイル設定

ツールバーのスタイル設定を始めるには、すべてのテーマ関数とコンポーネント ミックスインが存在する index ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
``` 

まず、新しいパレットを作成します。

```scss
$my-dark-palette: palette(
    $primary: #2466ff,
    $secondary: #FFCD0F,
    $surface: #2a2b2f,
    $grays: #fff,
);

$my-dark-color: color($my-dark-palette, 'surface');
```

[`grid-toolbar-theme`]({environment:sassApiUrl}/index.html#function-grid-toolbar-theme) を拡張する新しいテーマを作成し、`$background-color` と `$title-text-color` パラメーターを変更します。

```scss
$dark-grid-toolbar-theme: grid-toolbar-theme(
    $palette: $my-dark-palette,
    $background-color: $my-dark-color,
    $title-text-color: color($my-dark-palette, 'secondary'),
    $dropdown-background: $my-dark-color,
);
```

ツールバーの列操作メニューにテーマを設定するには、[`column-actions-theme`]({environment:sassApiUrl}/index.html#function-column-actions-theme) コンポーネントのテーマを変更する必要があります。

```scss
$dark-column-actions-theme: column-actions-theme(
    $palette: $my-dark-palette,
    $title-color: color($my-dark-palette, 'secondary'),
    $background-color: color($my-dark-palette, 'surface')
);
```

列操作は他のコンポーネント (igx-button、igx-checkbox、および igx-input-group) を使用しているため、新しいツールバー テーマに一致するようにテーマを変更する必要があります。

```scss
$dark-button-theme: button-theme(
    $palette: $my-dark-palette,
    $outlined-background: color($my-dark-palette, 'secondary'),
    $outlined-hover-background: color($my-dark-palette, 'grays', 100),
    $outlined-hover-text-color: color($my-dark-palette, 'secondary')
);

$dark-checkbox-theme: checkbox-theme(
    $palette: $my-dark-palette,
    $tick-color: $my-dark-color,
);

$dark-input-group-theme: input-group-theme(
    $palette: $my-dark-palette
);
```

最後にコンポーネントのテーマを**含めます**。

```scss
:host {
    @include grid-toolbar($dark-grid-toolbar-theme);
    @include column-actions($dark-column-actions-theme);
    @include checkbox($dark-checkbox-theme);
    @include input-group($dark-input-group-theme);
    @include button($dark-button-theme);
}
```

>[!NOTE]
>`$legacy-support` が `false (デフォルト)` に設定されている場合、css 変数 を以下のように含めます。

```scss
:host {
    @include css-vars($dark-grid-toolbar-theme);
    @include css-vars($dark-column-actions-theme);
    @include css-vars($dark-checkbox-theme);
    @include css-vars($dark-input-group-theme);
    @include css-vars($dark-button-theme);
}
```

>[!NOTE]
>コンポーネントが [`Emulated`](../themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

```scss
:host {
    ::ng-deep {
        @include grid-toolbar($dark-grid-toolbar-theme);
        @include column-actions($dark-column-actions-theme);
        @include checkbox($dark-checkbox-theme);
        @include input-group($dark-input-group-theme);
        @include button($dark-button-theme);
    }
}
```

### デモ

@@if (igxName === 'IgxGrid') {

<code-view style="height:510px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-toolbar-style" >
</code-view>

<div class="divider"></div>
}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:420px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-style" >
</code-view>

<div class="divider"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-style" >
</code-view>

<div class="divider"></div>
}

## API リファレンス

以下は、Grid Toolbar サービスのその他の API です。

* [`IgxGridToolbarActionsComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbaractionscomponent.html)
* [`IgxGridToolbarAdvancedFilteringComponent`]({environment:angularApiUrl}/classes/igxgridtoolbaradvancedfilteringcomponent.html)
* [`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html)
* [`IgxGridToolbarExporterComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarexportercomponent.html)
* [`IgxGridToolbarHidingComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarhidingcomponent.html)
* [`IgxGridToolbarPinningComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarpinningcomponent.html)
* [`IgxGridToolbarTitleComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbartitlecomponent.html)


[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) イベント:
* [`toolbarExporting`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#toolbarExporting)

スタイル:

* [`@@igxNameComponent スタイル`]({environment:sassApiUrl}/index.html#function-grid-theme)

## その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
