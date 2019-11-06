---
title: Doughnut Chart コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Doughnut Chart コンポーネントは、複数の変数を同心円状の輪で表示でき、データは他のコレクションや共通データソースにバインドできます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Data Grid コンポーネント, Angular Data Grid コントロール, Angular Doughnut Chart コントロール, Angular Doughnut Chart コンポーネント, Angular data grid Doughnut Chart コンポーネント例, Angular Doughnut Chart
_language: ja
---

## ドーナツ チャート

Doughnut Chart コンポーネントは円チャートと同様、変数の発生を比例的に表示します。ドーナツ型チャート は、複数の変数をコンセントリック リングで表示でき、階層データの可視化を組み込みでサポートします。

### デモ

<div class="sample-container loading" style="height: 550px">
    <iframe id="doughnut-chart-overview-iframe" src='{environment:dvDemosBaseUrl}/charts/doughnut-chart-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="doughnut-chart-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### 依存

チャート パッケージをインストールするときは、コア パッケージもインストールする必要があります。

-   **npm install --save igniteui-angular-core**
-   **npm install --save igniteui-angular-charts**

### 必要なモジュール

[`IgxDoughnutChart`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdoughnutchart.html) は、以下のモジュールが必要です。

```ts
// app.module.ts
import { IgxDoughnutChartModule } from "igniteui-angular-charts/ES5/igx-doughnut-chart-module";

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

ドーナツ チャート モジュールをインポートした後、チャートをデータにバインドします。
Igx-doughnut-chart コンポーネントを作成するには、はじめにデータをバインドする必要があります。以下のコード スニペットは、シンプルなデータソースを作成する方法を示します。

```ts
this.state = {
    data: [
        { MarketShare: 30, Company: "Google",    },
        { MarketShare: 15, Company: "Microsoft", },
        { MarketShare: 30, Company: "Apple",     },
        { MarketShare: 15, Company: "Samsung",   },
        { MarketShare: 10, Company: "Other",     },
] };
```

以下のコードはドーナツ型チャートを上記のデータにバインドします。

```html
 <igx-doughnut-chart width="700px"
                     height="500px">
        <igx-ring-series  [itemsSource]="data"
                labelMemberPath="Label"
                valueMemberPath="Value">
        </igx-ring-series>
 </igx-doughnut-chart>
```

<div class="divider--half"></div>

## 構成可能な要素

### 複数のリング

xamDoughnutChart は、複数のリングを、異なるコレクションにバインド可能な各リングと同時に表示できます。または共通のデータ ソースを共有できます。

### スライスの選択

ドーナツ型チャート コンポーネントは、1 つ以上のスライスの状態を 選択された状態に設定する API を公開します。任意で、単一のカスタム ビジュアル スタイルを選択済みスライスに適用できます。

**スライス選択の有効化/無効化** - `AllowSliceSelection` を設定してドーナツ型チャートでスライスの選択を有効または無効にします。

**選択されたスライスのスタイル設定** - スライスの `targetType` で選択されたスライスのスタイルを定義し、ドーナツ型チャートの `SelectedStyle` プロパティに割り当てることでスタイル設定できます。

**スライスをクリックして選択状態を変更** - `SliceClick` イベントにイベント ハンドラーをアタッチした場合、選択状態を変更するためのイベント引数のクリックしたスライスへの参照を提供します。ドーナツ型チャートは、選択されたスライスのスタイルを決定する `SelectedStyle` プロパティを公開します。デフォルトでは、適用されるスタイルはありません。スライスを選択しても、その見た目はどのようにも変わりません。選択されたスライスにカスタム スタイルを適用する場合は、Slice の `targetType` で Style を定義し、`SelectedStyle` プロパティの値として設定する必要があります。

**IsSelected プロパティの設定** - ドーナツ型チャートは、`IsSelected` プロパティを直接変更できるすべてのスライスへの参照を保持しなす。ドーナツ型チャートは、スライスの選択済み/選択解除の状態の変更に使用する `SliceClick` イベントを公開します。

### 

<div class="sample-container loading" style="height: 550px">
    <iframe id="doughnut-chart-selection-iframe" data-src='{environment:dvDemosBaseUrl}/charts/doughnut-chart-selection' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="doughnut-chart-selection-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### スライスの分割

**スライスをクリックして展開状態を変更**
`SliceClick` イベントにイベント ハンドラーをアタッチした場合、クリックされたスライスへの参照がイベント引数に提供されて展開状態を変更できます。

**IsExploded プロパティの設定**
ドーナツ型チャートはすべてのスライスへの参照を保持して `IsExploded` プロパティを直接変更できます。

```ts
import { SliceClickEventArgs } from "igniteui-react-charts/ES5/igr-slice-click-event-args";
```

### 

<div class="sample-container loading" style="height: 550px">
    <iframe id="doughnut-chart-explosion-iframe" data-src='{environment:dvDemosBaseUrl}/charts/doughnut-chart-explosion' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="doughnut-chart-explosion-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### 凡例

[`IgxDoughnutChart`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdoughnutchart.html) は凡例の使用をサポートしています。使用される凡例は、一連のチャートを介して接続されている ItemLegend です。

### 凡例のデモ

<div class="sample-container loading" style="height: 450px">
    <iframe id="doughnut-chart-legend-iframe" data-src='{environment:dvDemosBaseUrl}/charts/doughnut-chart-legend' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="doughnut-chart-legend-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">stackblitz で表示
    </button>
</div>
