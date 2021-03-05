---
title: Angular 折れ線チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの Angular 折れ線チャート
_keywords: Angular Charts, Line Chart, Infragistics, Angular チャート, 折れ線チャート, インフラジスティックス
mentionedTypes: ["XamCategoryChart", "XamDataChart"]
_language: ja
---

# Angular 折れ線チャート

Angular 折れ線チャート (または折れ線グラフ) は、カテゴリ折れ線グラフの一種で、一定期間にわたる 1 つ以上の数量の直線セグメントで接続されたポイントで表される連続データ値を示します。トレンドの表示や比較分析によく使用されます。Y 軸 (左側のラベル) は数値を示し、X 軸 (下側のラベル) は時系列または比較カテゴリを示します。比較する 1 つ以上のデータセットを含めることができます。これはチャートで複数の線として描画されます。

複数シリーズの場合、Angular 折れ線チャートでは、表示されるデータをエンド ユーザーが簡単に認識できるよう、より視覚的なインジケーターが必要です。エクスペリエンスを向上させるには、複数シリーズの凡例を追加する必要があります。最初に凡例オブジェクトをアプリケーションに追加し、それを Angular `XamCategoryChart` の [`IgxLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlegendcomponent.html) プロパティに設定します。これにより、ユーザーは各行がどのデータセットに対応するかを分かりやすく表示します。

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-with-legend' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="凡例付きの Angular 折れ線チャート"></iframe>
</div>

<div class="divider--half"></div>

Angular 折れ線チャートを使用するには、最初に次のモジュールをアプリケーションに追加する必要があります:

<!-- Angular -->

```ts
// app.module.ts
import { IgxCategoryChartModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxCategoryChartModule,
        // ...
    ]
})
export class AppModule {}
```

<!-- end: Angular -->

-   折れ線チャートとは異なり、エリア チャートは X 軸 (下軸) とデータ値を表す線の間の領域を色またはテクスチャで塗りつぶして視覚的にボリュームを表します。
-   Angular 折れ線チャートは、データ ポイントをつなぐ線にスプライン補間とデータの表示を改善するスムージングがないこと以外は、Angular スプライン チャートと同じです。

折れ線チャートには、データに基づいて複数のバリアントがあります。以下が含まれます。

-   階層型折れ線チャート
-   積層型折れ線チャート
-   ステップ折れ線チャート
-   極座標型折れ線チャート
-   積層型 100 折れ線チャート

折れ線チャートにはいくつかのユースケースがあります。例:

-   パン、ズーム、ドリルダウンなどのチャート操作に適した大容量のデータセットを使用する場合
-   経時的なトレンドを比較する必要がある場合
-   2 つ以上のデータ シリーズの違いを表示したい場合
-   個別のカテゴリの部分対全体の累積比較を表示したい場合
-   比較解析のために 1 つ以上のカテゴリのデータ トレンドを表示する必要がある場合
-   詳細な時系列データを可視化する必要がある場合

折れ線チャートのベスト プラクティス:

-   データ比較が正確になるように Y 軸 (左軸または右軸) を常に 0 から開始する
-   時系列データを左から右へ並べ替える
-   実線などの視覚属性を使用して一連のデータを表示する

以下の場合に折れ線チャートを使用しないでください。

-   多くの (7 または 10 以上) シリーズのデータがある場合チャートを読みやすくすることが目標である場合
-   時系列データの値は同じ (同じ期間のデータ) である場合; 重複した行を区別できなくなります。

データ構造:

-   データ ソースはデータ項目の配列またはリスト (単一シリーズの場合) である必要があります。
-   データ ソースは、配列の配列またはリストのリスト (複数シリーズの場合) である必要があります。
-   データ ソースに少なくとも 1 つのデータ項目を含む必要があります
-   すべてのデータ項目には、少なくとも 1 つのデータ列 (文字列または日時) が含まれている必要があります。
-   すべてのデータ項目には少なくとも 1 つの数値データ列が含まれている必要があります。

次のコード スニペットは、折れ線チャートの作成に使用できるサンプルデータ ソースを示しています:

```ts
public initData() {
    this.data = [
        { Year: "2009", Europe: 31, China: 21,  USA: 19 },
        { Year: "2010", Europe: 43, China: 26,  USA: 24 },
        { Year: "2011", Europe: 66, China: 29,  USA: 28 },
        { Year: "2012", Europe: 69, China: 32,  USA: 26 },
        { Year: "2013", Europe: 58, China: 47,  USA: 38 },
        { Year: "2014", Europe: 40, China: 46,  USA: 31 },
        { Year: "2015", Europe: 78, China: 50,  USA: 19 },
        { Year: "2016", Europe: 13, China: 90,  USA: 52 },
        { Year: "2017", Europe: 78, China: 132, USA: 50 },
        { Year: "2018", Europe: 40, China: 134, USA: 34 },
        { Year: "2019", Europe: 80, China: 96,  USA: 38 },
    ];
}
```

## 単一シリーズの Angular 折れ線チャート

以下の例に示すように、Angular 折れ線チャートは、2009 年以降の 10 年間の再生可能電力量など、値の経時変化を示すためによく使用されます。

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-single-source" data-src='{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-single-source' width="100%" height="100%" seamless frameBorder="0" class="lazyload" alt="単一ソースの Angular 折れ線チャート"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="category-chart-line-chart-single-source-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

## 複数シリーズの Angular 折れ線チャート

Angular 折れ線チャートを使用すると、複数のシリーズを組み合わせて時間の経過に伴う変化を比較または確認できます。中国と米国のデータを含むデータ ソースにバインドするだけで、折れ線チャートは追加データに合わせて自動的に更新されます。

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-multiple-sources" data-src='{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-multiple-sources' width="100%" height="100%" seamless frameBorder="0" class="lazyload" alt="複数シリーズの Angular 折れ線チャート"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="category-chart-line-chart-multiple-sources'-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

## ライブ データの Angular 折れ線チャート

Angular 折れ線チャート コンポネントは、次のデモに示すように、数百万に及ぶデータ ポイントを含む大量データを処理し、それらを数ミリ秒ごとに更新できます。

この例では、選択した間隔でライブ データを Angular 折れ線チャートにストリーミングしています。データ ポイントを 5,000 から 100 万に設定し、チャートを更新してチャートを描画するデバイスに基づいてスケールを最適化できます。

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-high-frequency" data-src='{environment:dvDemosBaseUrl}/charts/category-chart-high-frequency' width="100%" height="100%" seamless frameBorder="0" class="lazyload" alt="ライブ データの Angular 折れ線チャートの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="category-chart-high-frequency-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

## Angular 折れ線チャートのスタイル設定

チャートを設定したら、線の色の変更、凡例のフォント ファミリの変更、[`ChartTitle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/charttitle.html) のサイズの増加など読みやすくするためにスタイル設定をカスタマイズできます。

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-styling" data-src='{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload" alt="Angular 折れ線チャートのスタイル設定"></iframe>
</div>
   <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="category-chart-line-chart-styling-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


<div class="divider--half"></div>

<!-- ## Additional Resources

- [Series Animations](chart-features-animations.md)
- [Series Annotations](chart-features-annotations.md)
- [Series Highlighting](chart-features-highlighting.md)
- [Series Markers](chart-features-markers.md)
- [Series Tooltips](chart-features-tooltips.md)
- [Series Trendlines](chart-features-trendlines.md) -->

<!-- TODO list API links used in this topic 
## API Members
- `XamCategoryChart`
- `ChartType`
- `ItemsSource`
- `Legend`
-->
