---
title: Pie Chart コンポーネント - Native Angular  | Ignite UI for Angular
_description: Ignite UI for Angular  Pie Chart を使用すると、列のデータ型に基づいて定義済みのデフォルト集計ビューを持つ別のコンテナーで列情報を表示します。
_keywords: Ignite UI for Angular , Angular , ネイティブ Angular  コンポーネント スイート, ネイティブ Angular  コントロール, ネイティブ Angular  コンポーネント, ネイティブ Angular  コンポーネント ライブラリ, Angular  Chart, Angular  Pie Chart, Angular  Pie Chart コントロール, Angular Pie Chart コンポーネント
_language: ja
---

## 円チャート

円チャートは、セクションに分割された円形の領域で構成される、円チャートを表示するためのコンポーネントです。各セクションには、基本データ値に比例する円弧の長さがあります。

コンポーネントは分類したデータを表すために使用されます。カテゴリが少ない場合や各カテゴリが全体としてデータの相対的に大きなパーセンテージを構成する場合、これは最も効率的です。

### デモ

<div class="sample-container loading" style="height: 350px">
    <iframe id="pie-chart-overview-iframe" src='{environment:dvDemosBaseUrl}/charts/pie-chart-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"  data-iframe-id="pie-chart-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

### 依存関係

chart パッケージをインストールするときに core パッケージもインストールする必要があります。

-   **npm install --save igniteui-angular-core**
-   **npm install --save igniteui-angular-charts**

### 必要なモジュール

[`IgxPieChart`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechart.html) は、以下のモジュールが必要です。

```ts
// app.module.ts
import { IgxPieChartModule } from "igniteui-angular-charts/ES5/igx-pie-chart-module";

@NgModule({
    imports: [
        // ...
        IgxPieChartModule,
        // ...
    ]
})
export class AppModule {}
```

<div class="divider--half"></div>

### 使用方法

円チャート モジュールをインポートした後、チャートをデータにバインドします。
円チャート コンポーネントを作成するには、はじめにデータをバインドする必要があります。以下のコード スニペットは、シンプルなデータソースを作成する方法を示します。

```ts
var data = [
            { MarketShare: 30, Company: "Google",    },
            { MarketShare: 30, Company: "Apple",     },
            { MarketShare: 15, Company: "Microsoft", },
            { MarketShare: 15, Company: "Samsung",   },
            { MarketShare: 10, Company: "Other",     },
];
```

以下のコードは円チャートを上記のデータにバインドします。

```html
<igx-pie-chart [dataSource]="data"
               width="700px"
               height="500px"
               labelMemberPath="Company"
               valueMemberPath="MarketShare">
</igx-pie-chart>
```

<div class="divider--half"></div>

## 構成可能な要素

### 凡例

円チャートの隣に凡例を表示するには、ItemLegend を作成し、`Infragistics.Controls.Charts.Legend` プロパティに割り当てます。`legendLabelMemberPath` は、各円スライスの凡例項目を表示するために使用するデータ モデルのプロパティを指定します。

また、凡例項目の外観をカスタマイズするために `legendItemTemplate` と `legendItemBadgeTemplate` プロパティ、多数のフォント プロパティを使用できます。

```html
 <igx-pie-chart [dataSource]="data"
                width="700px"
                height="500px"
                labelMemberPath="Company"
                valueMemberPath="MarketShare"
                legendLabelMemberPath="Company"
                [legend]="PieChartLegend">
</igx-pie-chart>
```

<div class="sample-container loading" style="height: 320px">
    <iframe id="pie-chart-legend-iframe" data-src='{environment:dvDemosBaseUrl}/charts/pie-chart-legend' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="pie-chart-legend-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で開く
    </button>
</div>

### その他の分類項目

Pie Chart  コンポーネントの基本データに、小さい値を含む多くの項目が含まれる場合があります。この場合、Others カテゴリは、単一スライスへの複数のデータ値の自動集計を許可します。

以下のサンプルは、`othersCategoryThreshold` を 2 に設定、`othersCategoryType` は Number に設定されています。したがって、2 以下の値を含む項目は、Others カテゴリに割り当てられます。

> 注: `othersCategoryType` を Percent に設定すると、`othersCategoryThreshold` は値ではなくパーセンテージとして解釈されます。つまり、値がすべての項目の値の合計の 2% 未満である項目は、Others カテゴリに割り当てられます。使用しているアプリケーションに最も適切な `othersCategoryType` を使用できます。

```html
 <igx-pie-chart [dataSource]="data"
                width="700px"
                height="500px"
                labelMemberPath="Company"
                valueMemberPath="MarketShare"
                othersCategoryThreshold="2"
                othersCategoryType="Number"
                othersCategoryText="Others">
 </igx-pie-chart>
```

<div class="sample-container loading" style="height: 320px">
    <iframe id="pie-chart-others-iframe" data-src='{environment:dvDemosBaseUrl}/charts/pie-chart-others' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="pie-chart-others-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で開く
    </button>
</div>

### 展開

円チャート コントロールは個々の円スライスの選択と展開だけでなく、選択状態を変更しカスタム ロジックを実装することを可能にする `SliceClick` イベントをサポートします。

```html
<igx-pie-chart [dataSource]="data"
               width="700px"
               height="500px"
               allowSliceExplosion="true"
               sliceClick="piechart_SliceClick">
</igx-pie-chart>
```

<div class="sample-container loading" style="height: 320px">
    <iframe id="pie-chart-explosion-iframe" data-src='{environment:dvDemosBaseUrl}/charts/pie-chart-explosion' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="pie-chart-explosion-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で開く
    </button>
</div>

### 選択

デフォルトで、円チャートはマウス クリックによるスライス選択をサポートします。選択されたスライスは、`selectedItems` プロパティで取得します。選択したスライスがハイライトされます。

円チャートのモードは `selectionMode` プロパティで設定します。デフォルト値は `single` です。選択機能を無効化するためにはプロパティを `manual` に設定します。

円チャートは、選択モードを 3 つサポートします。

-   Single - single モードに設定すると、一度に 1 つのスライスのみ選択します。他のスライスを選択すると、最初に選択したスライスは選択解除され、新しいスライスが選択されます。
-   Multiple - Multiple モードに設定すると、一度に複数のスライスを選択します。スライスをクリックするとスライスが選択され、他のスライスをクリックすると、最初のスライスも、新しくクリックしたスライスも選択されます。
-   手動 - Manual モードに設定すると、選択は無効化されます。

円チャートには、選択機能に関連する 4 つのイベントがあります。

-   SelectedItemChanging
-   SelectedItemChanged
-   SelectedItemsChanging
-   SelectedItemsChanged

「Changing」で終わるイベントはキャンセル可能なイベントです。すなわち、イベント引数プロパティ  `Cancel` を true に設定することで、スライスの選択を停止します。True に設定すると、関連付けられたプロパティは更新されず、その結果スライスは選択されません。この設定はたとえば、スライスのデータによって一定のスライスの選択を無効化する場合に使用します。

「その他」スライスをクリックすると、`pieSliceOthersContext` オブジェクトが返されます。オブジェクトは、「その他」スライスに含まれるデータ項目のリストがあります。

```html
<igx-pie-chart [dataSource]="data"
               width="700px"
               height="500px"
               selectionMode="multiple">
</igx-pie-chart>
```

<div class="sample-container loading" style="height: 320px">
    <iframe id="pie-chart-selection-iframe" data-src='{environment:dvDemosBaseUrl}/charts/pie-chart-selection' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="pie-chart-selection-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で開く
    </button>
</div>
