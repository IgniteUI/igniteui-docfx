@@if (igxName === 'IgxGrid') {
---
title: 仮想化ィレクティブ - ネイティブ Angular | Ignite UI for Angular 
_description: Ignite UI for Angular Virtualization ディレクティブは大量データ セットの処理でスピードおよびパフォーマンスのための主な機能です。仮想描画機能はメモリでの DOM オブジェクトの数を固定すると、スムーズなスクロールを実現できます。 
_keywords: Ignite UI for Angular, UI controls, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular Components Suite, ネイティブ Angular コントロール, ネイティブ Angular Components Library, ネイティブ Angular コンポーネント, Angular Grid, Angular Table, Angular Data Grid コンポーネント, Angular Data Table コンポーネント, Angular Data Grid コントロール, Angular Data Table コントロール, Angular Grid コンポーネント, Angular Table コンポーネント, Angular Grid コントロール, Angular Table コントロール, Angular 高パフォーマンス Grid, Angular High Performance Data Table, Angular Virtualization Directive, Angular Data Table Virtualization, Virtualization, Angular Data Table パフォーマンス, Data Table パフォーマンス
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: 仮想化ィレクティブ - ネイティブ Angular | Ignite UI for Angular 
_description: Ignite UI for Angular Virtualization ディレクティブは大規模なデータ セットの処理でスピードおよびパフォーマンス向上のための主要な機能です。仮想描画機能はメモリでの DOM オブジェクトの数を固定すると、スムーズなスクロールを実現できます。 
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Tree Grid, Angular Tree Table, Angular Tree Grid コンポーネント, Angular Tree Table コンポーネント, Angular Tree Grid コントロール, Angular Tree Table コントロール, Angular Tree Grid コンポーネント, Angular Tree Table コンポーネント, Angular Tree Grid コントロール, Angular Tree Table コントロール, Angular 高パフォーマンス Tree Grid, Angular 高パフォーマンス Tree Table、Angular Virtualization Directive, Angular Tree Table Virtualization, Virtualization, Angular Tree Table パフォーマンス, Tree Table パフォーマンス
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: 仮想化ィレクティブ - ネイティブ Angular | Ignite UI for Angular 
_description: Ignite UI for Angular Virtualization ディレクティブは大規模なデータ セットの処理でスピードおよびパフォーマンス向上のための主要な機能です。仮想描画機能はメモリでの DOM オブジェクトの数を固定すると、スムーズなスクロールを実現できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular Components Suite, ネイティブ Angular Controls, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Hierarchical Grid, Angular Hierarchical Table, Angular Hierarchical Grid コンポーネント, Angular Hierarchical Table コンポーネント, Angular Hierarchical Grid コントロール, Angular Hierarchical Table コントロール, Angular 高パフォーマンス Hierarchical Grid, Angular 高パフォーマンス Hierarchical Table, Angular Virtualization Directive, Angular Hierarchical Table Virtualization, Virtualization, Angular Hierarchical Table パフォーマンス, Hierarchical Table パフォーマンス
---
}
### @@igComponent 仮想化とパフォーマンス

Ignite UI for Angular の [@@igxName]({environment:angularApiUrl}/classes/@@igTypeDoc.html) コントロールは、[`igxForOf`]({environment:angularApiUrl}/classes/igxforofdirective.html) ディレクティブを使用し、水平および垂直方向にコンテンツを仮想化します。

@@if (igxName === 'IgxGrid') {
#### デモ

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-sample-2-iframe" src='{environment:demosBaseUrl}/grid/grid-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
#### デモ
<div class="sample-container loading" style="height:620px">
    <iframe id="hierarchical-grid-lod-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-lod' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-lod-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}

### 仮想化の有効化

[`igxForOf`]({environment:angularApiUrl}/classes/igxforofdirective.html) ディレクティブは、ビューポートに表示されているデータのみを描画し、ユーザーがスクロール時に表示データを切り替えた際に @@ が DOM 描画およびメモリ使用を最適化します。[@@igxName]({environment:angularApiUrl}/classes/@@igTypeDoc.html) の [`width`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#width) と [`height`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#height) は、デフォルトが `100%` で表示コンテンツが使用可能なスペースにフィットしない場合、水平または垂直のスクロールバーが必要になります。ただし、@@igComponent の [`width`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#width) および/または [`height`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#height) を `null` に設定することが可能で、関連するディメンションが内部の項目サイズの合計で決定されます。スクロールバーが表示されず、すべての項目が相対するディメンション ([`width`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#width) が `null` 値の場合は列で、[`height`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#height) が null 値の場合は行) に描画されます。

データのサイズは以下によって決定されます。

*   垂直 (行) 仮想化の行の高さ。[`rowHeight`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowheight) オプションで決定されますがデフォルトは 50(px) です。
*   水平 (列) 仮想化の列幅 (ピクセル単位)。各列コンポーネントで明示的に幅を設定、または明示的に幅が設定されないすべての列に適用する @@igComponent の [`columnWidth`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnwidth) オプションを設定できます。

ディメンションを設定せずにグリッドでデフォルト動作を適用する場合、ほとんどの場合は望ましいレイアウトになります。列幅は列カウント、幅が設定された列、および @@igComponent コンテナの計算幅に基づいて決定されます。グリッドは、割り当てる幅が 136px 未満になる以外はすべての列を利用可能なスペースに合わせようとします。その場合、割り当てられない幅を持つ列は 136px の最小幅に設定され、水平方向スクロールバーが表示されます。グリッドは水平方向に仮想化されます。

列幅をパーセンテージ (%) で明示的に設定する場合、ほとんどの場合に水平スクロールバーがない水平方向に仮想化されないグリッドを作成します。

@@if (igxName === 'IgxGrid') {
### リモート仮想化

[@@igxName]({environment:angularApiUrl}/classes/@@igTypeDoc.html) は、データ チャンクがリモート サービスから要求されるシナリオをサポートし、内部で使用される [`igxForOf`]({environment:angularApiUrl}/classes/igxforofdirective.html) ディレクティブで実装された動作を公開します。


### 仮想化の制限

*   Mac OS で 「Show scrollbars only when scrolling」システム オプションを true (デフォルト値) に設定した場合、水平スクロールバーが表示されません。これは、@@igComponent の行コンテナーで、overflow が hidden に設定されているためです。オプションを "Always" に変更するとスクロールが表示されます。

### FAQ

#### 仮想化で @@igComponentでディメンションを設定する必要があるのはなぜですか？

描画する前にコンテナーおよび項目のサイズの情報がない場合に @@igComponent でランダムな位置にスクロールすると、スクロールバーの幅や高さの設定、表示項目の決定で誤りが発生します。ディメンションの推測がスクロールバーの誤操作となり、ユーザー エクスペリエンスを低下させます。そのため、仮想化を有効にするには、関連ディメンションを設定する必要があります。

<div class="divider--half"></div>

### API リファレンス
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxForOfDirective]({environment:angularApiUrl}/classes/igxforofdirective.html)
* [IForOfState]({environment:angularApiUrl}/interfaces/iforofstate.html)

### その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [並べ替え](sorting.md)
* [集計](summaries.md)
* [列移動](column_moving.md)
* [列のピン固定](column_pinning.md)
* [列のサイズ変更](column_resizing.md)
* [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
