---
title: Angular 円チャート | データ可視化ツール | インフラジスティックス
_description: インフラジスティックスの Angular 円チャートを使用して、分類データを表示するカラフルな円チャートを作成します。Ignite UI for Angular 円チャートの設定可能な要素について説明します。
_keywords: Angular charts, pie chart, Ignite UI for Angular, Infragistics, data binding, slice selection, slice explosion, animation, Angular チャート, 円チャート, データ バインディング, スライス選択, スライス切り離し, アニメーション, インフラジスティックス
mentionedTypes: ['XamPieChart','SliceSelectionMode','PieSliceOthersContext']
_language: ja
---

# Angular 円チャートの概要

Ignite UI for Angular 円チャート コンポネントは、セクションに分割された円形の領域で構成される、円チャートを表示するためのコンポーネントです。各セクションには、基本データ値に比例する円弧の長さがあります。

コンポーネントは分類したデータを表すために使用されます。カテゴリが少ない場合や各カテゴリが全体としてデータの相対的に大きなパーセンテージを構成する場合、これは最も効率的です。

## Angular 円チャートの例

<div class="sample-container loading" style="height: 350px">
    <iframe id="pie-chart-data-sample-iframe" src='{environment:dvDemosBaseUrl}/charts/pie-chart-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 円チャートの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="pie-chart-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->

## 依存関係

chart コンポーネントをインストールするときに core パッケージもインストールする必要があります。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save igniteui-angular-core
npm install --save igniteui-angular-charts
</pre>

<!-- end: Angular, React, WebComponents -->

## モジュールの要件

[`IgxPieChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartcomponent.html) を作成するには、以下のモジュールが必要です。

```ts
// app.module.ts

import { IgxPieChartModule } from 'igniteui-angular-charts';

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

## 使用方法

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
               width="100%"
               height="100%"
               labelMemberPath="Company"
               valueMemberPath="MarketShare">
</igx-pie-chart>
```

<div class="divider--half"></div>

## 凡例

円チャートの隣に凡例を表示するには、ItemLegend を作成し、[`IgxLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlegendcomponent.html) プロパティに割り当てます。[`legendLabelMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#legendlabelmemberpath) は、各円スライスの凡例項目を表示するために使用するデータ モデルのプロパティを指定します。

また、凡例項目の外観をカスタマイズするために [`legendItemTemplate`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#legenditemtemplate) と [`legendItemBadgeTemplate`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#legenditembadgetemplate) プロパティ、多数のフォント プロパティを使用できます。

```html
<igx-pie-chart [dataSource]="data"
               width="100%"
               height="100%"
               valueMemberPath="MarketShare"
               labelMemberPath="Company"
               legendLabelMemberPath="Company"
               [legend]="PieChartLegend">
</igx-pie-chart>
```

<div class="sample-container loading" style="height: 350px">
    <iframe id="pie-chart-legend-iframe" data-src='{environment:dvDemosBaseUrl}/charts/pie-chart-legend' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="pie-chart-legend-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

## その他の分類項目

Pie Chart  コンポーネントの基本データに、小さい値を含む多くの項目が含まれる場合があります。この場合、Others カテゴリは、単一スライスへの複数のデータ値の自動集計を許可します。

以下のサンプルは、[`othersCategoryThreshold`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#otherscategorythreshold) を 2 に設定、[`othersCategoryType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#otherscategorytype) は Number に設定されています。したがって、2 以下の値を含む項目は、Others カテゴリに割り当てられます。

[`othersCategoryType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#otherscategorytype) を Percent に設定すると、[`othersCategoryThreshold`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#otherscategorythreshold) は値ではなくパーセンテージとして解釈されます。つまり、値がすべての項目の値の合計の 2% 未満である項目は、Others カテゴリに割り当てられます。使用しているアプリケーションに最も適切な [`othersCategoryType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#otherscategorytype) を使用できます。

```html
<igx-pie-chart [dataSource]="data"
               width="100%"
               height="100%"
               labelMemberPath="Company"
               valueMemberPath="MarketShare"
               othersCategoryThreshold="2"
               othersCategoryType="Number"
               othersCategoryText="Others">
</igx-pie-chart>
```

<div class="sample-container loading" style="height: 350px">
    <iframe id="pie-chart-others-iframe" data-src='{environment:dvDemosBaseUrl}/charts/pie-chart-others' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="pie-chart-others-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

## 展開

円チャート コントロールは個々の円スライスの選択と展開だけでなく、選択状態を変更しカスタム ロジックを実装することを可能にする `SliceClick` イベントをサポートします。

```html
<igx-pie-chart [dataSource]="data"
               width="100%"
               height="100%"
               allowSliceExplosion="true"
               sliceClick="piechart_SliceClick">
</igx-pie-chart>
```

<div class="sample-container loading" style="height: 350px">
    <iframe id="pie-chart-explosion-iframe" data-src='{environment:dvDemosBaseUrl}/charts/pie-chart-explosion' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="pie-chart-explosion-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

## 選択

デフォルトで、円チャートはマウス クリックによるスライス選択をサポートします。選択されたスライスは、[`selectedItems`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#selecteditems) プロパティで取得します。選択したスライスがハイライトされます。

円チャートのモードは [`selectionMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#selectionmode) プロパティで設定します。デフォルト値は [`Single`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sliceselectionmode.html#single) です。選択機能を無効化するためにはプロパティを [`Manual`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sliceselectionmode.html#manual) に設定します。

円チャートは、選択モードを 3 つサポートします。

-   Single - Single モードに設定すると、一度に 1 つのスライスのみ選択します。他のスライスを選択すると、最初に選択したスライスは選択解除され、新しいスライスが選択されます。
-   Multiple - Multiple モードに設定すると、一度に複数のスライスを選択します。スライスをクリックするとスライスが選択され、他のスライスをクリックすると、最初のスライスも、新しくクリックしたスライスも選択されます。
-   Manual - Manual モードに設定すると、選択は無効化されます。

円チャートには、選択機能に関連する 4 つのイベントがあります。

-   SelectedItemChanging
-   SelectedItemChanged
-   SelectedItemsChanging
-   SelectedItemsChanged

「Changing」で終わるイベントはキャンセル可能なイベントです。すなわち、イベント引数プロパティ  `Cancel` を true に設定することで、スライスの選択を停止します。True に設定すると、関連付けられたプロパティは更新されず、その結果スライスは選択されません。この設定はたとえば、スライスのデータによって一定のスライスの選択を無効化する場合に使用します。

「その他」スライスをクリックすると、[`IgxPieSliceOthersContext`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiesliceotherscontext.html) オブジェクトが返されます。オブジェクトは、「その他」スライスに含まれるデータ項目のリストがあります。

```html
<igx-pie-chart [dataSource]="data"
            width="100%"
            height="100%"
            selectionMode="multiple"
            selectedSliceStroke = "white"
            selectedSliceFill= "rgb(143,143,143)"
            selectedSliceOpacity =1.0
            selectedSliceStrokeThickness=2>
</igx-pie-chart>
```

<div class="sample-container loading" style="height: 350px">
    <iframe id="pie-chart-selection-iframe" data-src='{environment:dvDemosBaseUrl}/charts/pie-chart-selection' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="pie-chart-selection-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

## アニメーション

チャートの半径をスケールする `radiusFactor` プロパティを設定して円チャートをすばやくアニメーション化できます。`startAngle` プロパティを設定してチャートが回転する間、チャートの角度が増加し続けるようにします。

以下のコードでは、radiusFactor がチャートをサイズの 0.25％ 増加し、startAngle がチャートを 1 度回転しています。radiusFactor と startAngle が最大値に達すると、アニメーション フラグをリセットし、間隔をクリアしてアニメーションを停止します。

```ts
window.setInterval(() => this.tick(), 15);

public tick(): void {
    if (this.isAnimating) {
        if (this.chart.radiusFactor < 1.0)
            this.chart.radiusFactor += 0.0025;

        if (this.chart.startAngle < 360)
            this.chart.startAngle++;

        if (this.chart.radiusFactor >= 1.0 &&
            this.chart.startAngle >= 360) {
            this.isAnimating = false;
            window.clearInterval(this.interval);
        }
    }
}
```

<div class="sample-container loading" style="height: 350px">
    <iframe id="pie-chart-animation-iframe" data-src='{environment:dvDemosBaseUrl}/charts/pie-chart-animation' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="pie-chart-animation-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>
