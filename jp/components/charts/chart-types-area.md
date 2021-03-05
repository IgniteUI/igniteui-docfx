---
title: Angular エリア チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの Angular エリア チャート
_keywords: Angular Charts, Area Chart, Infragistics, Angular チャート, エリア チャート, インフラジスティックス
mentionedTypes: ["XamCategoryChart", "XamDataChart"]
_language: ja
---

# Angular エリア チャート

Angular エリア チャート (エリア グラフ) は、線の下のエリアが塗りつぶされた線分で接続されたポイントのコレクションを示すカテゴリ エリア チャートの一種です。Y 軸 (左側のラベル) は数値を示し、X 軸 (下側のラベル) は時系列または比較カテゴリを示します。エリア チャートは時間毎のデータの変化や複数の項目を比較する場合に用いられ、プロットされた値の合計を表示することで全体に対するデータ間の関係も表します。比較する 1 つ以上のデータセットを含めることができます。これはチャートで複数のエリアとして描画されます。

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/category-chart-area-chart-with-legend' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="凡例付きの Angular エリア チャート"></iframe>
</div>

<div class="divider--half"></div>

## 単一シリーズの Angular エリア チャート

以下の例に示すように、Angular エリア チャートは、ヨーロッパで 2009 年以降の 10 年間の再生可能電力量など、値の経時変化を示すためによく使用されます。

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/category-chart-area-chart-single-source' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="単一シリーズの Angular エリア チャート"></iframe>
</div>

<div class="divider--half"></div>

## 複数シリーズの Angular エリア チャート

Angular エリア チャートを使用すると、複数のシリーズを組み合わせて、時間の経過とともにどのように変化するかを比較または確認できます。ヨーロッパ、中国と米国のデータを含むデータ ソースにバインドするだけで、エリア チャートは追加データに合わせて自動的に更新されます。

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/category-chart-area-chart-multiple-sources' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="複数ソースの Angular エリア チャート"></iframe>
</div>

<div class="divider--half"></div>

## Angular エリア チャートのスタイル設定

以下に示すように、マーカー アウトライン、マーカー ブラシ、シリーズ ブラシ、シリーズ アウトラインなど、追加のスタイル設定をエリア チャート シリーズで構成できます。

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/category-chart-area-chart-styling' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular エリア チャートのスタイル設定"></iframe>
</div>

<div class="divider--half"></div>

## Angular ステップ エリア チャート

ステップ エリア チャートはカテゴリ チャートのグループに属し、連続する垂直線と水平線で接続されたポイントのコレクションを使用して描画され、線の下の領域は塗りつぶされます。値は y 軸に表示され、カテゴリが表示されます x 軸上。ステップ エリア チャートは、一定期間の変化量を強調するか、複数の項目を比較します。

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/category-chart-step-area-multiple-sources' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular ステップ エリア チャート"></iframe>
</div>

<div class="divider--half"></div>

## Angular 範囲エリア チャート

<!-- TODO copy and combine content (code snippets, iframes, description) from these topics:
	data-chart-type-range-area-series.md
-->

## Angular 積層型エリア チャート

積層型エリア チャートは、線分で接続されたポイントのコレクションを使用して描画され、線の下のエリアが塗りつぶされ、互いの上に積層されます。積層型エリア チャートは、エリア チャートとすべて同じ要件に従いますが、唯一の違いは、網掛けエリアが互いに積層されていることです。以下の例では、米国、ヨーロッパ、中国の間で生成された再生可能電力を示しています。

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/data-chart-stacked-area-chart' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 積層型エリア チャート"></iframe>
</div>

<div class="divider--half"></div>

## Angular 積層型 100 エリア シリーズ

積層型 100 エリア チャートは、Y 軸上の値の取り扱いを除いたすべての面で 積層型エリア シリーズと同じです。データを直接表現するのでなく、積層型 100 エリア シリーズは、データ ポイント内のすべての値の合計の割合でデータを表します。このシリーズは、生産元に関連する国のエネルギー消費量など、時間の経過とともに変化する全体の一部を表す場合があります。このような場合、積層されたすべての要素を均等に表すことをお勧めします。

<!-- <div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-area-chart' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Stacked 100 Area Chart"></iframe>
</div> -->

<div class="divider--half"></div>

## Angular 積層型 スプライン エリア シリーズ

<div class="divider--half"></div>

## Angular 積層型 100 スプライン エリア シリーズ

<div class="divider--half"></div>

## Angular ラジアル エリア チャート

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/data-chart-radial-area-chart' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular ラジアル エリア チャート"></iframe>
</div>

<div class="divider--half"></div>

## Angular 極座標型エリア チャート

<!-- TODO copy and combine content (code snippets, iframes, description) from these topics:
	data-chart-type-polar-area-series.md
	data-chart-type-polar-spline-area-series.md
-->

## Angular 極座標型スプライン エリア チャート

<!-- TODO copy and combine content (code snippets, iframes, description) from these topics:
	data-chart-type-polar-area-series.md
	data-chart-type-polar-spline-area-series.md
-->

<!-- TODO list API links used in this topic 
## API メンバー
-->
