---
title: Angular Tree Grid の選択 - Ignite UI for Angular
_description: Ignite UI for Angular グリッドでデータを選択は、さまざまなイベント、豊富な API、単一選択のような単純なマウス操作を使用して簡単に行うことができます。
_keywords: data select, igniteui for angular, インフラジスティックス
_license: commercial
_language: ja
---



# Angular Tree Grid の選択

Ignite UI for Angular Tree Grid を使用して、さまざまなイベント、豊富な API、または単一選択などのシンプルなマウス操作でデータを簡単に選択できます。

## Angular Grid 選択の例

以下のサンプルは、Tree Grid の**セル選択**動作の 3 つのタイプを示します。以下のボタンを使用して、使用可能な各選択モードを有効にします。Snackbar メッセージ ボックスで各ボタンの操作について簡単に説明します。
<div class="divider--half"></div>





<code-view style="height:650px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-cell-selection/" alt="Angular Grid 選択の例">
</code-view>

<div class="divider--half"></div>



## Angular Grid 選択のオプション

Ignite UI for Angular Tree Grid コンポーネントは、[行選択](row-selection.md)、[セル選択](cell-selection.md)、[列選択](column-selection.md)の 3 つの選択モードを提供します。デフォルトでは、Tree Grid で**複数セル選択**モードのみが有効になっています。選択モードを変更/有効化するには、[`rowSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowSelection)、[`cellSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#cellSelection) 、または [`selectable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selectable) プロパティを使用できます。

### Angular 行選択

[`rowSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowSelection) プロパティを使用すると、次のオプションを指定できます。
- none - Tree Grid の行選択が無効になります。
- single - Tree Grid 内の 1 行のみの選択が利用可能になります。
- multiple - 複数行の選択は、<kbd>ctrl</kbd> + <kbd>click</kbd>、<kbd>space キー</kbd>を押して`行セレクター`を使用することにより、複数行の選択が可能になります。
- multipleCascade -  これはカスケード選択のモードであり、ユーザーがユーザーの操作で選択したレコードの下のツリー内のすべての子が選択されます。このモードでは、親の選択状態はその子の選択状態に完全に依存します。


> 詳細については、[行選択トピック](row-selection.md)を参照してください。

### Angular セル選択

以下のオプションは、プロパティ [`cellSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#cellSelection) で指定できます。
- none - Tree Grid のセル選択が無効になります。
- single - Tree Grid 内の 1 セルのみ選択が利用可能になります。
- multiple - Tree Grid の選択のデフォルト状態です。Multi - セルの選択は、マウスの左ボタンを連続してクリックした後、マウスをセル上にドラッグすることで利用できます。

> 詳細については、[セル選択トピック](cell-selection.md)を参照してください。

### Angular 列選択

[`selectable` プロパティ]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selectable) を使用して、**列**ごとに以下のオプションを指定できます。
- False - 対応する列選択は Tree Grid に対して無効になります。
- True - 対応する列選択は Tree Grid に対して有効になります。
- 以下の 3 つのバリエーションがあります。
- 単一選択 - 列セルを<kbd>マウス クリック</kbd>します。
- 複数列の選択 - <kbd>Ctrl</kbd> キーを押しながら列セルを<kbd>マウス クリック</kbd>します。
- 列の範囲選択 - <kbd>Shift</kbd> キーを押しながら + <kbd>マウス クリック</kbd>、その間のすべての列が選択されます。

> 詳細については、[列選択トピック](column-selection.md)を参照してください。



## 既知の問題と制限

- IE11 で選択を有効にした Tree Grid コンポーネントを使用するには、Angular アプリケーションの polyfill.ts に配列ポリフィルを明示的にインポートする必要があります。IE11 は、バージョン 13.0.0 でサポートされなくなりました。

    ```typescript
    import 'core-js/es7/array';
    ```

- グリッドに `primaryKey` が設定されておらず、リモート データ シナリオが有効になっている場合 (ページング、ソート、フィルタリング、スクロール時に、グリッドに表示されるデータを取得するためのリモート サーバーへのリクエストがトリガーされる場合)、データ要求が完了すると、行は次の状態を失います:
  - Row Selection
  - Row Expand/collapse
  - Row Editing
  - Row Pinning

## API リファレンス

- [IgxTreeGridComponent API]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
- [IgxTreeGridRow API]({environment:angularApiUrl}/classes/igxtreegridrow.html)
- [IgxGridCell API]({environment:angularApiUrl}/classes/igxgridcell.html)
- [IgxTreeGridComponent スタイル]({environment:sassApiUrl}/themes#function-grid-theme)

## その他のリソース

<div class="divider--half"></div>

- [Tree Grid 概要](tree-grid.md)
- [行選択](row-selection.md)
- [セル選択](cell-selection.md)
- [ページング](paging.md)
- [フィルタリング](filtering.md)
- [ソート](sorting.md)
- [集計](summaries.md)
- [列移動](column-moving.md)
- [仮想化とパフォーマンス](virtualization.md)


<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
