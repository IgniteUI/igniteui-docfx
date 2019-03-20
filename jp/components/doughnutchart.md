---
title: Doughnut Chart コンポーネント - ネイティブ Angular |Ignite UI for Angular
mentionedTypes: ['DoughnutChart', 'DoughnutChartType']
_description: Ignite UI for Angular Doughnut Chart コンポーネントは、複数の変数を同心円状の輪で表示でき、データは他のコレクションや共通データソースにバインドできます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント Library, Angular Data Grid コンポーネント, Angular Data Grid コントロール, Angular Doughnut Chart コントロール, Angular Doughnut Chart コンポーネント, Angular data grid Doughnut Chart コンポーネント例, Angular Doughnut Chart

---

## ドーナツ チャート

`IgxDoughnutChart` コンポーネントは円チャートと同様、変数の発生を比例的に表示します。ドーナツ型チャート は、複数の変数をコンセントリック リングで表示でき、階層データの可視化を組み込みでサポートします。

### デモ

<div class="sample-container loading" style="height: 450px">
    <iframe id="doughnut-chart-overview-iframe" src='{environment:demosBaseUrl}/charts/doughnut-chart-overview' width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="doughnut-chart-overview-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

### 依存関係

chart パッケージをインストールするときに core パッケージもインストールする必要があります。
**npm install igniteui-angular-core**
**npm install igniteui-angular-charts**

<!-- -->

ラジアル ゲージが `NgModule` としてエクスポートされるため、アプリケーションで `AppModule` に `IgxDoughnutChart` をインポートする必要があります。

<!-- -->

```typescript
// app.module.ts
import { IgxDoughnutChartModule } from 'igniteui-angular-charts/ES5/igx-doughnut-chart-module';

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

```typescript
this.state = {
    data: [
        { MarketShare: 30, Company: "Google",    },
        { MarketShare: 15, Company: "Microsoft", },
        { MarketShare: 30, Company: "Apple",     },
        { MarketShare: 15, Company: "Samsung",   },
        { MarketShare: 10, Company: "Other",     },
] };
```

次のコードは、ドーナツ型チャートを上記のデータにバインドする方法を示しています。

```html
 <igx-doughnut-chart width="700px"
                     height="500px">
    <igx-doughnut-chart-series>
        <igx-ring-series  [itemsSource]="data"
                labelMemberPath="Label"
                valueMemberPath="Value">
    </igx-doughnut-chart-series>
 </igx-doughnut-chart>
```

<div class="divider--half"></div>

## 構成可能な要素

### 複数のリング

`IgxDoughnutChart` は、各リングを異なるコレクションにバインドして複数のリングを同時に表示や共通のデータソースの共有ができます。

### スライスの選択

`IgxDoughnutChart` コンポーネントは、1 スライス以上の状態を選択済みに設定するための API を公開します。任意で、単一のカスタム ビジュアル スタイルを選択済みスライスに適用できます。

**スライス選択の有効化/無効化** - `allowSliceSelection` を設定してドーナツ型チャートでスライスの選択を有効または無効にします。

**選択されたスライスのスタイル設定** - スライスの `targetType` で選択されたスライスのスタイルを定義し、ドーナツ型チャートの `selectedStyle` プロパティに割り当てることでスタイル設定できます。

**スライスをクリックして選択状態を変更** - `sliceClick` イベントにイベント ハンドラーをアタッチした場合、選択状態を変更するためのイベント引数のクリックしたスライスへの参照を提供します。ドーナツ型チャートは、選択されたスライスのスタイルを決定する `selectedStyle` プロパティを公開します。デフォルトでは、適用されるスタイルはありません。スライスを選択しても、その見た目はどのようにも変わりません。独自のスタイルを選択されたスライスに適用すると、Slice の `targetType` を持つ Style を定義して、`selectedStyle` プロパティの値として設定する必要があります。

**IsSelected プロパティの設定** - `IgxDoughnutChart` は、`isSelected` プロパティを直接変更できるすべてのスライスへの参照を保持しなす。ドーナツ型チャートは、スライスの選択済み/選択解除の状態の変更に使用する `sliceClick` イベントを公開します。

**SelectedSlices コレクションのコンテンツを変更** - `selectedSlices` コレクションのコンテンツを変更して選択されたスライスを変更できます。ドーナツ型チャートは、Slice オブジェクトへに対し `isSelected` プロパティを直接修正できるすべてのスライスへの参照を保持します。

### スライス選択のデモ

<div class="sample-container loading" style="height: 450px">
    <iframe id="doughnut-chart-selection-iframe" data-src='{environment:demosBaseUrl}/charts/doughnut-chart-selection' width="100%" height="100%" seamless="" frameborder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="doughnut-chart-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

### スライスの分割

`IgxDoughnutChart` スライスは、プログラム上で、またはユーザー インタラクションによって分割できます。

**スライス分割の有効化/無効化**
`allowSliceExplosion` プロパティを設定してスライスを分割する機能を有効または無効にできます。

**スライスのクリック時にスライスの分割状態を変更**
`sliceClick` イベント用イベント ハンドラーをアタッチすると、イベント引数でクリックされたスライスへの参照を提供され、分割状態を修正できます。

**IsExploded プロパティの設定**
`IgxDoughnutChart` は、`isExploded` プロパティを直接修正できるすべてのスライスへの参照を保持します。

**ExplodedSlices コレクションのコンテンツの修正**
`explodedSlices` コレクションのコンテンツを変更することにより公開されたスライスを変更できます。

### スライスの分割のデモ

<div class="sample-container loading" style="height: 450px">
    <iframe id="doughnut-chart-explosion-iframe" data-src='{environment:demosBaseUrl}/charts/doughnut-chart-explosion' width="100%" height="100%" seamless="" frameborder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="doughnut-chart-explosion-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

### 凡例

`IgxDoughnutChart` は凡例の使用をサポートしています。使用される凡例は、一連のチャートを介して接続されている ItemLegend です。

### 凡例のデモ

<div class="sample-container loading" style="height: 450px">
    <iframe id="doughnut-chart-legend-iframe" data-src='{environment:demosBaseUrl}/charts/doughnut-chart-legend' width="100%" height="100%" seamless="" frameborder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="doughnut-chart-explosion-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>
