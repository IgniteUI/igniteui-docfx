---
itle: Angular 棒チャート | データ可視化 | インフラジスティックス
_description: インフラジスティックスの Angular 棒チャート
_keywords: Angular Charts, Bar Chart, Infragistics, Angular チャート, 棒チャート, インフラジスティックス
mentionedTypes: ["XamDataChart"]
_language: ja
---

# Angular 棒チャート

Angular 棒チャート、棒グラフ、または水平棒チャートは、さまざまなカテゴリのデータの頻度、カウント、合計、または平均を、水平棒または等しい幅と異なる長さでエンコードされたデータとすばやく比較するために使用される最も一般的なカテゴリ チャート タイプの 1 つです。これらは、時間の経過とともに、項目の価値の変化を示すのに理想的です。データは、チャートの左から右にデータ ポイントの値に向かって伸びる長方形のコレクションを使用して表されます。棒が垂直 (上下) に表示される縦棒チャートまたは縦棒グラフのように、棒チャートは縦棒チャートと同じように描画されますが、時計回りに 90 度回転し、水平に (左から右) 表示されます。

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/data-chart-bar-chart-with-legend' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="凡例付きの Angular 棒チャート"></iframe>
</div>

<div class="divider--half"></div>

棒チャートにはいくつかのユースケースがあります:

-   時間の経過に伴う傾向またはデータのカテゴリの数値の変化を表示したい場合
-   1 つ以上のデータ系列のデータ値を比較したい場合
-   部分と全体の比較を表示したい場合
-   カテゴリの上位または下位のパーセンテージを表示したい場合
-   サブカテゴリにグループ化された複数のデータ ポイントの分析 (積層型棒)

Angular 棒チャートには、データまたはデータを使用して正しいストーリーを伝える方法に基づいたいくつかの種類が含まれています:

-   グループ化された棒チャート
-   積層型棒チャート
-   極座標型棒チャート
-   積層型 100 棒チャート

棒チャートのベスト プラクティス:

-   数値軸を 0 から開始します。
-   棒には単色を使用します。
-   各棒を区切るスペースが棒自体の幅の 1/2 であることを確認します。
-   ランキング、または順序付けられたカテゴリ (項目) の比較は、昇順または降順で並べ替えられていることを確認します。
-   読みやすくするために、Y 軸 (チャートの左側のラベル) のカテゴリ値を右揃えにします。

次の場合は棒チャートを使用しないでください:

-   データが多すぎるため、Y 軸がスペースに収まらないか、判読できません。
-   詳細な時系列分析が必要なときは、時系列を含む折れ線チャートを検討してください。

棒チャートのデータ構造:

-   データソースはデータ項目の配列またはリストである必要があります。
-   データ ソースに少なくとも 1 つのデータ項目を含む必要があります。
-   リストには、少なくとも 1 つのデータ列 (文字列または日時) が含まれている必要があります。
-   リストには、少なくとも 1 つの数値データ列が含まれている必要があります。

一般的な Angular 棒チャートのシナリオ：

-   セールス マネージメント
-   インベントリ マネージメント
-   株価チャート
-   数値または時系列値を比較する任意の文字列値

<div class="divider--half"></div>

## 単一シリーズの Angular 棒チャート

棒チャートは、カテゴリ シリーズのグループに属し、チャートの左から右へデータ ポイント値に向かって延びる四角形のコレクションを使用して描画されます。
この例では、棒チャートはパーセント ベースの小売ショッピング データを比較しています。 

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/data-chart-bar-chart-single-source' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="単一ソースの Angular 棒チャート"></iframe>
</div>

<div class="divider--half"></div>

## 複数シリーズの Angular 棒チャート

棒チャートは、比較のためにカテゴリごとに複数の列を描画できます。この例では、棒チャートは人気のある映画フランチャイズの興行収益を比較しています。

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/data-chart-bar-chart-multiple-sources' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="複数ソースの Angular 棒チャート"></iframe>
</div>

<div class="divider--half"></div>

## Angular 棒チャートのスタイル設定

この例では、棒チャートは各棒の注釈値を使用して、CalloutLayer を使用した人気のあるオンライン小売ショッピング サイト間のパーセント比較を示しています。

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/data-chart-bar-chart-styling' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 棒チャートのスタイル設定"></iframe>
</div>

<div class="divider--half"></div>

## Angular 積層型棒チャート

積層型棒チャート、または積層型棒グラフは、チャートの横棒にさまざまなサイズのフラグメントを表示することにより、さまざまなカテゴリのデータの構成を比較するために使用されるカテゴリ チャートの一種です。各棒または積層フラグメントの長さは、その全体的な値に比例します。

積層型棒チャートは、データを表すデータ ポイントが水平方向に隣り合って積み重ねられ、データを視覚的にグループ化するという点で、棒チャートとは異なります。各積層は正の値と負の値の両方を含みます。すべての正の値は X 軸の正の側にグループ化され、すべての負の値は X 軸の負の側にグループ化されます。

### Angular 積層型棒チャート

積層型棒チャートのこの例では、数値の X 軸 (チャートの下部のラベル) とカテゴリの Y 軸 (チャートの左側のラベル) があります。

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/data-chart-stacked-bar-chart' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 積層型棒チャート"></iframe>
</div>

<div class="divider--half"></div>

## Angular 積層型 100 棒チャート

Angular 積層型 100 棒チャートは、X 軸 (チャートの下のラベル) の値の処理を除いて、すべての点で Angular 積層型棒チャートと同じです。データを直接表現するのでなく、積層型棒チャートは、データ ポイント内のすべての値の合計の割合でデータを表します。

積層型 100 棒チャートのこの例では、Energy Product (エネルギー積) の値は、水平棒のフラグメント内のすべてのデータの 100% 値として表示されます。

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-bar-chart' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 積層型 100 棒チャート"></iframe>
</div>

<div class="divider--half"></div>

## Angular 範囲棒チャート

Ignite UI for Angular 範囲棒チャートは、範囲チャートのグループに属し、線の間の領域が塗りつぶされた 2 本の線を使用してレンダリングされます。このタイプのシリーズは、同じデータ ポイントの低い値と高い値の間の変化量を強調します一定期間、または複数のアイテムを比較します。範囲値は Y 軸に表示され、カテゴリは X 軸に表示されます。

### Angular 範囲棒チャート

この範囲棒チャートの例では、日付ごとの高温と低温の間の気象データの差異が示されています。

<!-- <div class="sample-container loading" style="height: 500px">
    <iframe></iframe>
</div>
<div class="divider--half"></div> -->

## その他のリソース

-   [縦棒チャート](chart-types-column.md)

<!-- TODO list API links used in this topic 
## API メンバー
-->
