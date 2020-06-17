@@if (igxName === 'IgxGrid') {
---
title: Angular Grid データ コピー | Ignite UI for Angular | インフラジスティックス
_description: グリッドから選択されたデータをエクスポートして Excel ファイルにエクスポートするためにデータ選択動作を使用します。Angular データ グリッドには、高機能な Angular のイベントがあります。
_keywords: copy data, igniteui for angular, infragistics, データのコピー
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Grid データ コピー| Ignite UI for Angular | インフラジスティックス
_description: グリッドから選択されたデータをエクスポートして Excel ファイルにエクスポートするためにデータ選択動作を使用します。Angular データ グリッドには、高機能な Angular のイベントがあります。
_keywords: copy data, igniteui for angular, infragistics, データのコピー
_language: ja
---
}

### @@igComponent クリップボードの操作
クリップボードへのコピー操作が @@igComponent で可能になりました。この機能は、現在の複数セル データ選択を通して Angular Data Grid のデータをすばやくコピーするための簡単でカスタマイズ可能な方法を提供します。システム クリップボードの動作により、ユーザーは @@igComponent から Excel または他の外部プログラムにデータをコピーできます。

#### デモ


@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:635px">
    <iframe id="grid-clipboard-operations-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-clipboard-operations-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-clipboard-operations-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:635px">
    <iframe id="tree-grid-clipboard-operations-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/tree-grid-clipboard-operations-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-clipboard-operations-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>
}

### 機能
コピー動作は、ブラウザーとオペレーティング システムで定義されているデフォルトのインタラクションで動作します。以下は、コピー＆ペースト動作の場合です。

- Windows または Unix 
  - キーボード ショートカット: <kbd>Ctrl</kbd> + <kbd>C</kbd> / <kbd>Ctrl</kbd> + <kbd>Ins</kbd>
  - キーボード ショートカット: <kbd>Ctrl</kbd> + <kbd>V</kbd> / <kbd>Shift</kbd> + <kbd>Ins</kbd>
  - ブラウザー メニューからのコピー操作
- macOS
  - キーボード ショートカット: <kbd>⌘ Cmd</kbd> + <kbd>C</kbd>
  - キーボード ショートカット: <kbd>⌘ Cmd</kbd> + <kbd>V</kbd>
  - ブラウザー メニューからのコピー操作


### 制限
- カットとコピーの両方のイベントは、Internet Explorer では本来サポートされていません。例外は発生される ** paste ** イベント(IE 11)ですが、イベントの `clipboardData` プロパティを公開していません。
> [!NOTE] 
> IE 11のセルを`コピー`するためには、キーボード選択を使用できます。複数セルを選択するには `Shift キー` を押しながらコピーするには `Ctrl + C` を押します。

- グリッドが編集モードの間、コピー動作は無効になります。
- この機能の現在のバージョンは、グリッドからのコピー動作のみをカバーします。今後、グリッドの動作内で`貼り付け`を公開する予定です。
@@if (igxName === 'IgxGrid') { カスタムの貼り付けハンドラを使って`貼り付け`の動作を設定することができます。[Excelから貼り付け](paste_excel.md) トピックをご覧ください 。}

### API の使用
次のオプションを処理する [`clipboardOptions`]({environment:angularApiUrl}/classes/igxgridcomponent.html#clipboardoptions) プロパティを公開します。
- [`enabled`]({environment:angularApiUrl}/classes/igxgridcomponent.html#clipboardoptions.enabled) は選択したセルのコピーを有効または無効にします。
- [`copyHeaders`]({environment:angularApiUrl}/classes/igxgridcomponent.html#clipboardoptions.copyHeaders) は、コピー時に関連付けられているヘッダーを含めます。
- [`copyFormatters`]({environment:angularApiUrl}/classes/igxgridcomponent.html#clipboardoptions.copyFormatters) は、既存の列フォーマッタをコピーしたデータに適用します。
- [`separator`]({environment:angularApiUrl}/classes/igxgridcomponent.html#clipboardoptions.separator) クリップボードのデータのフォーマットに使用する文字列の区切り文字。デフォルトは `/t` です。

> [!NOTE] 
> Excel は、タブで区切られたテキスト (タブ区切り `/t`) を自動的に検出し、データを別々の列に正しく貼り付けることができます。貼り付け形式が機能せず、貼り付けたものがすべて 1 列に表示される場合は、Excel の区切り文字が別の文字に設定されている、またはテキストがタブではなくスペースを使用しています。

- [`onGridCopy`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#resizable) コピー操作が実行されたときに発生します。[`clipboardOptions`]({environment:angularApiUrl}/classes/igxgridcomponent.html#clipboardoptions) を使用してコピー動作が有効になっている場合のみ発生します。

### その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [集計](summaries.md)
* [列のピン固定](column_pinning.md)
* [選択](selection.md)
* [仮想化とパフォーマンス](virtualization.md)
* [複数列ヘッダー](multi_column_headers.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
