@@if (igxName === 'IgxGrid') {
---
title: Angular Grid のクリップボードの操作 - Ignite UI for Angular 
_description: Angular Data Grid のクリップボード機能は、データを Excel、その他のプログラムにコピー、貼り付け、エクスポートするための高速で簡単、カスタマイズ可能な方法を提供します。今すぐお試しください。
_keywords: copy data, igniteui for angular, infragistics, データのコピー
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid クリップボードの操作 - Ignite UI for Angular 
_description: Angular Tree Grid のクリップボード機能は、データを Excel、その他のプログラムにコピー、貼り付け、エクスポートするための高速で簡単、カスタマイズ可能な方法を提供します。今すぐお試しください。
_keywords: copy data, igniteui for angular, infragistics, データのコピー
_language: ja
---
}

# Angular @@igComponent クリップボードの操作
クリップボードへのコピー操作が @@igComponent で可能になりました。この機能は、現在の複数セル データ選択を通して Angular Data Grid のデータをすばやくコピーするための簡単でカスタマイズ可能な方法を提供します。システム クリップボードの動作により、ユーザーは @@igComponent から Excel または他の外部プログラムにデータをコピーできます。

## Angular @@igComponent クリップボード操作の例


@@if (igxName === 'IgxGrid') {

<code-view style="height:635px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-clipboard-operations-sample" alt="Angular @@igComponent クリップボード操作の例">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:635px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-clipboard-operations-sample" alt="Angular @@igComponent クリップボード操作の例">
</code-view>

<div class="divider--half"></div>
}

## 機能
コピー動作は、ブラウザーとオペレーティング システムで定義されているデフォルトのインタラクションで動作します。以下は、コピー＆ペースト動作の場合です。

- Windows または Unix 
  - キーボード ショートカット: <kbd>Ctrl</kbd> + <kbd>C</kbd> / <kbd>Ctrl</kbd> + <kbd>Ins</kbd>
  - キーボード ショートカット: <kbd>Ctrl</kbd> + <kbd>V</kbd> / <kbd>Shift</kbd> + <kbd>Ins</kbd>
  - ブラウザー メニューからのコピー操作
- macOS
  - キーボード ショートカット: <kbd>⌘ Cmd</kbd> + <kbd>C</kbd>
  - キーボード ショートカット: <kbd>⌘ Cmd</kbd> + <kbd>V</kbd>
  - ブラウザー メニューからのコピー操作


## 制限
- カットとコピーの両方のイベントは、Internet Explorer では本来サポートされていません。例外は発生される **paste** イベント(IE 11)ですが、イベントの `clipboardData` プロパティを公開していません。
> [!NOTE] 
> IE 11のセルを`コピー`するためには、キーボード選択を使用できます。複数セルを選択するには `Shift キー` を押しながらコピーするには `Ctrl + C` を押します。

- グリッドが編集モードの間、コピー動作は無効になります。
- この機能の現在のバージョンは、グリッドからのコピー動作のみをカバーします。今後、グリッドの動作内で`貼り付け`を公開する予定です。
@@if (igxName === 'IgxGrid') { カスタムの貼り付けハンドラを使って`貼り付け`の動作を設定することができます。[Excel から貼り付け](paste-excel.md)トピックをご覧ください 。}

## API の使用
次のオプションを処理する [`clipboardOptions`]({environment:angularApiUrl}/classes/igxgridcomponent.html#clipboardOptions) プロパティを公開します。
- [`enabled`]({environment:angularApiUrl}/classes/igxgridcomponent.html#clipboardoptions.enabled) は選択したセルのコピーを有効または無効にします。
- [`copyHeaders`]({environment:angularApiUrl}/classes/igxgridcomponent.html#clipboardoptions.copyHeaders) は、コピー時に関連付けられているヘッダーを含めます。
- [`copyFormatters`]({environment:angularApiUrl}/classes/igxgridcomponent.html#clipboardoptions.copyFormatters) は、既存の列フォーマッタをコピーしたデータに適用します。
- [`separator`]({environment:angularApiUrl}/classes/igxgridcomponent.html#clipboardoptions.separator) クリップボードのデータのフォーマットに使用する文字列の区切り文字。デフォルトは `/t` です。

> [!NOTE] 
> Excel は、タブで区切られたテキスト (タブ区切り `/t`) を自動的に検出し、データを別々の列に正しく貼り付けることができます。貼り付け形式が機能せず、貼り付けたものがすべて 1 列に表示される場合は、Excel の区切り文字が別の文字に設定されている、またはテキストがタブではなくスペースを使用しています。

- [`gridCopy`]({environment:angularApiUrl}/classes/igxgridcomponent.html#gridCopy) コピー操作が実行されたときに発生します。[`clipboardOptions`]({environment:angularApiUrl}/classes/igxgridcomponent.html#clipboardОptions) を使用してコピー動作が有効になっている場合のみ発生します。

## その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列のピン固定](column-pinning.md)
* [選択](selection.md)
* [仮想化とパフォーマンス](virtualization.md)
* [複数列ヘッダー](multi-column-headers.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
