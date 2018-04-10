---
title: グリッドの仮想化とパフォーマンス
_description: Ignite UI for Angular Data Grid コントロールは列および行を仮想化します。表示されるデータの部分のみを DOM に可視化します。結果は、データの大きいセットでスムーズにスクロールできます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Data Grid コンポーネント, Angular Data Grid コントロール, Angular Grid コンポーネント, Angular Grid コントロール, Angular 高いパフォーマンス Grid, 仮想化, パフォーマンス
_language: ja
---

## グリッドの仮想化とパフォーマンス

<p class="highlight">最新のアプリケーションでは、高いパフォーマンスでシームレスに大きいデータ セットを表示する要件があります。
このため、`igxGrid` コントロールは `igxForOf` ディレクティブを使用します。コンテンツを垂直方向 (データ レコード) および水平方向 (列) に仮想化します。ユーザーが大きいデータ セットでスムーズにスクロールできます。
`igxForOf` ディレクティブを使用すると、ビューポートに表示されているデータのみを描画し、ユーザーがスクロールするときに表示されるデータを切り替えると、Data Grid は DOM 描画およびメモリ使用を最適化します。</p>
<div class="divider"></div>

### グリッドの仮想化デモ

<div class="sample-container loading" style="height:850px">
    <iframe id="grid-sample-2-iframe" src='{environment:demosBaseUrl}/grid-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>

### 仮想化の有効化

関連するグリッド ディメンションのサイズが設定される場合、仮想化は自動的に有効化されます。

*   垂直 (行) 仮想化の場合は高さ。ピクセル ("500px") またはパーセンテージ ("50%") で設定できます。

*   水平 (列) 仮想化の場合は幅。ピクセル ("500px") またはパーセンテージ ("50%") で設定できます。

関連するディメンションが設定されない場合、相対する行/列仮想化は無効になります。

データ部分のサイズが以下のことによって決定されます。

*   垂直 (行) 仮想化の行高さ。これは `rowHeight` オプションによって決定され、デフォルト値は 50 (px) です。
*   水平 (列) 仮想化の列幅 (ピクセル単位)。各列コンポーネントで明示的に幅を設定するか、明示的に幅が設定されないすべての列に適用するグリッドの `columnWidth` オプションを設定できます。

必要なサイズを指定しない場合、仮想化がないグリッドを作成します。たとえば、高さが指定されないグリッドは**すべて**の行を一度に表示し、合計サイズに基づいて高さを増加します。幅が指定されたが列に幅が設定されないグリッドは列をすべて利用可能なスペースでスクロールバーなしで描画します。列幅がパーセンテージ (%) で定義されるグリッドにも適用します。

### 仮想化の制限

*   変更可能な行高さはサポートされません。すべての行を同じ高さに設定する必要があります。
*   列仮想化の場合、すべての列をピクセル単位で定義される幅が必要です。列コンポーネントで明示的に設定するか、グリッドの `columnWidth` オプションで設定します。
*   行/列の指定したディメンションが実際の描画された要素と一致する必要があります。たとえば、グリッド セルのために行高さを大きくするテンプレートまたはクラスが定義される場合、指定した `rowHeight` 値と一致しない場合、垂直仮想化が正しく操作しません。仮想項目数が DOM の実際要素と一致しません。列およびその幅に同じ条件があります。


### FAQ

#### 仮想化のためにグリッドでディメンションを設定する必要がある理由とは?

描画する前にコンテナーおよび項目のサイズの情報がない場合、グリッドでランダム位置にスクロールすると、スクロールバーの幅または高さの設定、または表示する項目の決定は正しくありません。実際のディメンションの前提がスクロールバーの変な動作になり、エクスペリエンスが悪くなります。そのため、仮想化を有効化するには、関連ディメンションを設定する必要があります。

#### グリッドの幅/高さを設定し、列の幅および行の高さも設定すると、結果はどうなりますか?

構成の組み合わせの結果の詳細については、以下の表を参照してください。

| グリッド幅の設定     | グリッドの高さの設定    | 'rowHeight' の設定    | 'columnHeight' の設定、またはすべての列の幅の明示的な設定 | 結果                                                |
|--------------------|--------------------|--------------------|------------------------------------------------------------|-------------------------------------------------------|
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:                                         | 水平および垂直仮想化が有効化されたグリッド |
| :heavy_check_mark: | :x:                | N/A                | :heavy_check_mark:                                         | 水平仮想化のみが有効化されたグリッド              |
| :x:                | :heavy_check_mark: | :heavy_check_mark: | N/A                                                        | 垂直の仮想化のみが有効化されたグリッド                |
| :x:                | :x:                | N/A                | N/A                                                        | 仮想化のないグリッド                           |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :x:                                                        | 垂直の仮想化のみが有効化されたグリッド                |
| :heavy_check_mark: | :heavy_check_mark: | :x:                | :heavy_check_mark:                                         | 無効な構成                                        |
| :heavy_check_mark: | :heavy_check_mark: | :x:                | :x:                                                        | 無効な構成                                        |

<br/>
*   グリッドの高さを設定し、`rowHeight` を `null` 値に設定することはサポートされません。
*   グリッドの `columnWidth` が設定されない場合、特定の列幅を設定してその他の列幅を設定しないと、垂直仮想化がないグリッドを作成します。列のサイズはコンテナーに適用されるフレックス ルールによって決定されます。

### 追加のリソース
<div class="divider--half"></div>

* [グリッドの概要](grid.html)
* [ページング](grid_paging.html)
* [フィルタリング](grid_filtering.html)
* [並べ替え](grid_sorting.html)
* [集計](grid_summaries.html)
* [列のピン固定](grid_column_pinning.html)

<div class="divider--half"></div>
是非コミュニティに参加してください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
