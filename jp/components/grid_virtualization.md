---
title: Virtualization Directive - Native Angular | Ignite UI for Angular 
_description: The Ignite UI for Angular Virtualization directive is the core mechanic behind the speed and performance of the grid when handling large data sets, since its virtual rendering mechanism allows the user to effortlessly scroll by its fixing of the number of DOM objects in memory. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Angular Virtualization Directive, Virtualization, Performance
_language: ja
---

### グリッドの仮想化とパフォーマンス

In Ignite UI for Angular, the `igxGrid` control now utilizes the `igxForOf` directive and virtualizes its content both vertically and horizontally.

#### デモ

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-sample-2-iframe" src='{environment:demosBaseUrl}/grid-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>

### 仮想化の有効化

By utilizing the `igxForOf` directive the Data Grid now optimizes DOM rendering and memory consumption by rendering only what is currently visible in the view port and swapping the displayed data while the user scrolls the data horizontally/vertically. `igxGrid`'s `width` and `height` defaults to `100%` which will enable virtualization if the content displayed cannot fit inside the available space and scrollbars are required either vertically or horizontally. However, it is also possible to explicitly set the grid's `width` and/or `height` to `null` which means that the related dimension will be determined by the total size of the items inside. No scrollbar will then be shown and all items will be rendered along the respective dimension (columns if `width` is `null` and rows if height is `null`).

関連するグリッド ディメンションのサイズが設定される場合、仮想化は自動的に有効化されます。

*   垂直 (行) 仮想化の場合は高さ。ピクセル ("500px") またはパーセンテージ ("50%") で設定できます。

*   水平 (列) 仮想化の場合は幅。ピクセル ("500px") またはパーセンテージ ("50%") で設定できます。

関連するディメンションが設定されない場合、相対する行/列仮想化は無効になります。

データ部分のサイズが以下のことによって決定されます。

*   垂直 (行) 仮想化の行高さ。これは `rowHeight` オプションによって決定され、デフォルト値は 50 (px) です。
*   水平 (列) 仮想化の列幅 (ピクセル単位)。各列コンポーネントで明示的に幅を設定するか、明示的に幅が設定されないすべての列に適用するグリッドの `columnWidth` オプションを設定できます。

必要なサイズを指定しない場合、仮想化がないグリッドを作成します。たとえば、高さが指定されないグリッドは**すべて**の行を一度に表示し、合計サイズに基づいて高さを増加します。幅が指定されたが列に幅が設定されないグリッドは列をすべて利用可能なスペースでスクロールバーなしで描画します。列幅がパーセンテージ (%) で定義されるグリッドにも適用します。

### Grid リモート仮想化デモ

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-sample-4-iframe" src='{environment:demosBaseUrl}/grid-sample-4' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>

### 仮想化の制限

*   変更可能な行高さはサポートされません。すべての行を同じ高さに設定する必要があります。
*   列仮想化の場合、すべての列をピクセル単位で定義される幅が必要です。列コンポーネントで明示的に設定するか、グリッドの `columnWidth` オプションで設定します。
*   行/列の指定したディメンションが実際の描画された要素と一致する必要があります。たとえば、グリッド セルのために行高さを大きくするテンプレートまたはクラスが定義される場合、指定した `rowHeight` 値と一致しない場合、垂直仮想化が正しく操作しません。仮想項目数が DOM の実際要素と一致しません。列およびその幅に同じ条件があります。
*   Browsers currently have height limitation for DOM elements. Because of that the total height of the rows shouldn't exceed the height limitation of the browsers. Otherwise there may be unexpected changes in behavior of `igxGrid`. For example Internet Explorer 11 has height limitation of 1 533 916 pixels, which for rows with height 50px means no more than 30 678 rows.


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
* [列のサイズ変更](grid_column_resizing.html)
* [選択](grid_selection.html)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
