---
title: Angular 円チャート | データ可視化ツール | インフラジスティックス
_description: Infragistics の Angular 円チャートを使用して、分類データを表示するカラフルな円チャートを作成します。
_keywords: Angular charts, pie chart, Ignite UI for Angular, Infragistics, data binding, slice selection, slice explosion, animation, チャート, 円チャート, データ バインディング, スライス選択, スライス切り離し, アニメーション, インフラジスティックス
mentionedTypes: ['XamPieChart','SliceSelectionMode','PieSliceOthersContext']
_language: ja
---

# Angular 円チャートの概要

円チャート (円グラフ) は、データセットのカテゴリ (部分) が合計 (全体) 値になる方法を示す部分対全体チャートです。カテゴリは、円グラフまたは円グラフのセクションとして描画されます。各セクション (円スライス) は基本データ値に比例する円弧の長さを持ちます。カテゴリは、分析中の合計値に対する値の割合に基づいて、100 または 100% の部分として他のカテゴリに比例して表示されます。

円チャートは小さいデータ セットに適していて、一目で読みやすくなります。円チャートは、部分対全体の可視化の一種です。その他:

-   円 
-   ドーナツ (リング) 
-   ファンネル 
-   積層型エリア
-   積層型 100% エリア (積層型パーセント エリア)
-   積層型棒 
-   積層型 100% 棒 (積層型パーセント棒) 
-   ツリーマップ 
-   ウォーターフォール 

Angular 円チャートは、データを解析するためのビューアー ツールを提供するインタラクティブ機能を含みます。

-   凡例 
-   スライスの分割
-   スライスの選択 
-   チャート アニメーション 

円チャートのベスト プラクティス:

-   スライスまたはセグメントを、合計値または全体に対するパーセンテージ値として比較する
-   ???? カテゴリのグループがどのようにより小さなセグメントに分割されるかを表示する
-   小さい非階層データ セット (6 ～ 8 セグメント未満のデータ) を表示する
-   データ セグメントの合計が 100% になるようにする
-   データの順序を最大 (最高) から最小 (最低) に並べ替える
-   12 時の位置から始めて時計回りに進む標準的なプレゼンテーション方法を使用する
-   カラー パレットがセグメント/スライスで識別できるようにする
-   データラベルを読みやすくするため、セグメントと凡例のどちらに配置するべきか検討する。
-   より分かりやすい表現のために、円の代わりに棒またはリング チャートを選択する
-   比較分析のために複数の円チャートを並べて配置しないようにする

以下の場合に円チャートを使用しないでください。 

-   経時変化を比較する場合 - 棒チャート、折れ線チャート、またはエリア チャートを使用してください
-   正確なデータ比較が必要な場合 - 棒チャート、折れ線チャート、またはエリア チャートを使用してください
-   6 セグメントまたは 8 セグメント (大量のデータ) がある場合 - データ ストーリーに適した棒チャート、折れ線チャート、またはエリア チャートを検討してください。
-   棒チャートで値の違いがわかりやすくなります。

## Angular 円チャートの例

この Angular 円チャートの例には、6 つの値を持つ単純なデータ セットが含まれています。各キー/ペア値には String と Numeric データ値があり、データ値の合計は 100% です。ここでは、部門ごとの予算支出の内訳を示しています。

<div class="sample-container loading" style="height: 350px">
    <iframe id="pie-chart-data-sample-iframe" src='{environment:dvDemosBaseUrl}/charts/pie-chart-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Pie Chart Overview Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="pie-chart-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

## Angular 円チャートの作成方法

<!-- Angular, React, WebComponents -->

### 1. Angular コア パッケージをインストールします

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save igniteui-angular-core
</pre>

<!-- end: Angular, React, WebComponents -->

<!-- Angular, React, WebComponents -->

### 2. Angular チャートをインストールします

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save igniteui-angular-charts
</pre>

<!-- end: Angular, React, WebComponents -->

### <!-- Angular, React, WebComponents -->3. <!-- end: Angular, React, WebComponents -->必要なモジュールをインストールします

円チャートを使用するには、以下のモジュールが必要です。<!-- Angular, React, WebComponents -->。<!-- end: Angular, React, WebComponents --><!-- Blazor --> モジュールはアプリケーションのエントリ ポイントに登録する必要があります。

-   PieChartModule
    <!-- end: Blazor -->

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

## Angular 円チャートの凡例

凡例は、各ポイントに関する情報を表示し、そのポイントの合計に対する割合を示します 凡例クリックを使用してポイントを縮小できます。

円チャート コンポーネントの隣に凡例を表示するには、ItemLegend を作成し、[`IgxLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlegendcomponent.html) プロパティに割り当てます。[`legendLabelMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#legendlabelmemberpath) は、各円スライスの凡例項目を表示するために使用するデータ モデルのプロパティを指定します。

また、凡例項目の外観をカスタマイズするために [`legendItemTemplate`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#legenditemtemplate) および [`legendItemBadgeTemplate`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#legenditembadgetemplate)プロパティ、[`IgxItemLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxitemlegendcomponent.html) の複数のフォント プロパティも使用できます。

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

### 円チャートの凡例でパーセンテージを表示する方法

<!-- TODO -->

### Angular 高度な円チャートの凡例でパーセンテージを表示する例

<!-- TODO -->

<!-- <div class="sample-container loading" style="height: 500px">
    <iframe></iframe>
</div>
<div class="divider--half"></div> -->

## その他の分類項目

円チャート コンポーネントの基本データに、小さい値を含む多くの項目が含まれる場合があります。この場合、Others カテゴリは、単一スライスへの複数のデータ値の自動集計を許可します。

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

円チャート コンポーネントは個々の円スライスの選択と展開だけでなく、選択状態を変更しカスタム ロジックを実装することを可能にする `SliceClick` イベントをコンポーネントサポートします。

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

デフォルトで、円チャートはマウス クリックによるスライス選択をサポートします。選択されたスライスは、[`selectedItems`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#selecteditems)  プロパティで取得します。選択したスライスがハイライトされます。

円チャートのモードは [`selectionMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#selectionmode) プロパティで設定します。デフォルト値は [`Single`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sliceselectionmode.html#single) です。選択機能を無効化するためにはプロパティを [`Manual`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sliceselectionmode.html#manual) に設定します。

円チャート コンポーネントは、選択モードを 3 つコンポーネントサポートします。

-   Single - single モードに設定すると、一度に 1 つのスライスのみ選択します。他のスライスを選択すると、最初に選択したスライスは選択解除され、新しいスライスが選択されます。
-   Multiple - Multiple モードに設定すると、一度に複数のスライスを選択します。スライスをクリックするとスライスが選択され、他のスライスをクリックすると、最初のスライスも、新しくクリックしたスライスも選択されます。
-   手動 - Manual モードに設定すると、選択は無効化されます。

円チャート コンポーネントには、選択機能に関連する 4 つのイベントがあります。

-   SelectedItemChanging
-   SelectedItemChanged
-   SelectedItemsChanging
-   SelectedItemsChanged

「Changing」で終わるイベントはキャンセル可能なイベントです。すなわち、イベント引数プロパティ `Cancel` を true に設定することで、スライスの選択を停止します。True に設定すると、関連付けられたプロパティは更新されず、その結果スライスは選択されません。この設定はたとえば、スライスのデータによって一定のスライスの選択を無効化する場合に使用します。

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
