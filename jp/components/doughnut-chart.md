---
title:  ドーナツ チャート | 階層データ 可視化 | Ignite UI for Angular | インフラジスティックス
_description: ドーナツチャート コンポーネントを使用して、複数の変数を同心円で表示し、階層データを可視化します。詳細については、以下のサンプルを参照してください。
_keywords: doughnut chart, Ignite UI for Angular, Infragistics, ドーナツ チャート, インフラジスティックス
mentionedTypes: ['XamDoughnutChart']
_language: ja
---

## ドーナツ チャート

Ignite UI for Angular Doughnut Chart コンポーネントは円チャートと同様、変数の発生を比例的に表示します。ドーナツ型チャート は、複数の変数をコンセントリック リングで表示でき、階層データの可視化を組み込みでサポートします。

### サンプル

<div class="sample-container loading" style="height: 450px">
    <iframe id="doughnut-chart-overview-iframe" src='{environment:dvDemosBaseUrl}/charts/doughnut-chart-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="doughnut-chart-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### 依存関係

chart パッケージをインストールするときに core パッケージもインストールする必要があります。

-   **npm install --save igniteui-angular-core**
-   **npm install --save igniteui-angular-charts**

### モジュールの要件

Angular Douhgnut Chart コンポーネントは以下のモジュールを要求します。

```ts
// app.module.ts
import { IgxDoughnutChartModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxDoughnutChartModule,
        // ...
    ]
})
export class AppModule {}
```

<div class="divider--half"></div>

### 使用方法

ファイナドーナツ型 チャート モジュールをインポートした後、チャートをデータにバインドします。
コンポーネントを作成するには、最初にバインドするためのデータが必要になります。以下のコード スニペットは、シンプルなデータソースを作成する方法を示します。

```ts
this.data = [
    { Value: 30, Label: "Google",    },
    { Value: 15, Label: "Microsoft", },
    { Value: 30, Label: "Apple",     },
    { Value: 15, Label: "Samsung",   },
    { Value: 10, Label: "Other",     },
];
```

次のコードは、ドーナツ型チャートを上記のデータにバインドする方法を示しています。

```html
 <igx-doughnut-chart height="100%" width="100%">
        <igx-ring-series
            [dataSource]="data"
            labelMemberPath="Label"
            valueMemberPath="Value">
        </igx-ring-series>
 </igx-doughnut-chart>
```

<div class="divider--half"></div>

### 複数のリング

ドーナツ チャート コンポーネントは、複数のリングを、異なるデータ ソースにバインド可能な各リングと同時に表示できます。または共通のデータ ソースを共有できます。たとえば、以下の 2 つのデータ ソースは、複数のリングにバインドするために使用されます。

```ts
public Months: any[];
public Seasons: any[];
/// ...

this.Months = [
    { Value: 1, Label: "December" },
    { Value: 1, Label: "January" },
    { Value: 1, Label: "February" },
    { Value: 1, Label: "March" },
    { Value: 1, Label: "April" },
    { Value: 1, Label: "May" },
    { Value: 1, Label: "June" },
    { Value: 1, Label: "July" },
    { Value: 1, Label: "August" },
    { Value: 1, Label: "September" },
    { Value: 1, Label: "October" },
    { Value: 1, Label: "November" },
];
this.Seasons = [
    { Value: 4, Label: "Winter" },
    { Value: 4, Label: "Spring" },
    { Value: 4, Label: "Summer" },
    { Value: 4, Label: "Fall" },
];
```

```html
 <igx-doughnut-chart width="700px" height="500px">
        <igx-ring-series name="Months"
            [dataSource]="Months"
            labelsPosition="Center"
            labelMemberPath="Label"
            valueMemberPath="Value"
            radiusFactor="0.9"
            startAngle="0">
        </igx-ring-series>
        <igx-ring-series name="Seasons"
            [dataSource]="Seasons"
            labelsPosition="InsideEnd"
            labelMemberPath="Label"
            valueMemberPath="Value"
            radiusFactor="0.4"
            startAngle="0">
        </igx-ring-series>
 </igx-doughnut-chart>
```

### 複数リング サンプル

<div class="sample-container loading" style="height: 450px">
    <iframe id="doughnut-chart-rings-iframe" data-src='{environment:dvDemosBaseUrl}/charts/doughnut-chart-rings' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="doughnut-chart-rings-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### スライスの選択

ドーナツ型チャート コンポーネントは、1 つ以上のスライスの状態を 選択された状態に設定する API を公開します。任意で、単一のカスタム ビジュアル スタイルを選択済みスライスに適用できます。

**スライス選択の有効化/無効化** - [`allowSliceSelection`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdoughnutchartcomponent.html#allowsliceselection) プロパティを設定してドーナツ型チャートでスライスの選択を有効または無効にします。

**選択されたスライスのスタイル設定** - スライスの `TargetType` で選択されたスライスのスタイルを定義し、ドーナツ型チャートの `SelectedStyle` プロパティに割り当てることでスタイル設定できます。

**スライスをクリックして選択状態を変更** - `SliceClick` イベントにイベント ハンドラーをアタッチした場合、選択状態を変更するためのイベント引数のクリックしたスライスへの参照を提供します。ドーナツ型チャートは、選択されたスライスのスタイルを決定する `SelectedStyle` プロパティを公開します。デフォルトでは、適用されるスタイルはありません。スライスを選択しても表示は変わりません。独自のスタイルを選択されたスライスに適用すると、Slice の `TargetType` を持つ Style を定義して、`SelectedStyle` プロパティの値として設定する必要があります。

**IsSelected プロパティを設定** - Angular ドーナツ チャートは、`IsSelected` プロパティを直接変更できるすべてのスライスへの参照を保持しなす。ドーナツ チャートは、スライスの選択済み/選択解除の状態の変更に使用する `SliceClick` イベントを公開します。

**SelectedSlices コレクションのコンテンツを変更** - `SelectedSlices` コレクションのコンテンツを変更して選択されたスライスを変更できます。ドーナツ チャートは、Slice オブジェクトへに対し `IsSelected` プロパティを直接修正できるすべてのスライスへの参照を保持します。

### スライス選択のデモ

<div class="sample-container loading" style="height: 450px">
    <iframe id="doughnut-chart-selection-iframe" data-src='{environment:dvDemosBaseUrl}/charts/doughnut-chart-selection' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="doughnut-chart-selection-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### スライスの分割

ドーナツ チャート コンポーネントのスライスは、コードまたはユーザー インタラクションによって分割できます。

**スライス分割の有効化/無効化**
[`allowSliceExplosion`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdoughnutchartcomponent.html#allowsliceexplosion) プロパティを設定してスライスを分割する機能を有効または無効にできます。

**スライスのクリック時にスライスの分割状態を変更**
`SliceClick` イベント用イベント ハンドラーをアタッチする場合、イベント引数でクリックされたスライスへの参照を提供するので、分割状態を修正できます。

**IsExploded プロパティの設定**
ドーナツ チャートはすべてのスライスへの参照を保持して `IsExploded` プロパティを直接変更できます。

**ExplodedSlices コレクションのコンテンツの修正**
`ExplodedSlices` コレクションのコンテンツを変更することにより公開されたスライスを変更できます。

### スライスの分割のデモ

<div class="sample-container loading" style="height: 450px">
    <iframe id="doughnut-chart-explosion-iframe" data-src='{environment:dvDemosBaseUrl}/charts/doughnut-chart-explosion' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="doughnut-chart-explosion-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### 凡例

ドーナツ チャート コンポネントは凡例の使用をサポートしています。使用される凡例は、一連のチャートを介して接続されている ItemLegend です。

### 凡例デモ

<div class="sample-container loading" style="height: 450px">
    <iframe id="doughnut-chart-legend-iframe" data-src='{environment:dvDemosBaseUrl}/charts/doughnut-chart-legend' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="doughnut-chart-legend-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>
