---
title: Angular マスター - 詳細 Grid - Ignite UI for Angular
_description: Ignite UI Angular Grid を使用して行データの展開可能な詳細ビュー テンプレートを定義します。マスター - 詳細スタイル データを階層構造で表示する場合に便利です。
_keywords: マスターと詳細, igniteui for angular, インフラジスティックス
_language: ja
---

# Angular Master-Detail Grid

`igxGrid` コンポーネントは、コンテンツを展開/縮小することで特定の行の追加の詳細を表示する detail テンプレートの指定をサポートします。指定した場合、各レコードは master として機能し、展開すると、現在のレコードのコンテキスト データを含むカスタマイズ可能な詳細テンプレートが表示されます。

このモードは、master-detail スタイル データを階層構造で表示する必要がある場合に役立ちます。

## Angular Grid Master-Detail の例


<code-view style="height:600px" 
           data-demos-base-url="{environment:lobDemosBaseUrl}" 
           iframe-src="{environment:lobDemosBaseUrl}/grid/grid-master-detail" alt="Angular Grid Master-Detail の例">
</code-view>



## 構成

Master-detail モードで表示するように `igxGrid` を設定するには、`igxGridDetail` ディレクティブでマークされたグリッド内のテンプレートを指定する必要があります。

```html
 <igx-grid ... >
         <ng-template igxGridDetail let-dataItem>
              <!-- Custom detail template content here -->
        </ng-template>
    </igx-grid>
```

テンプレートのコンテキストはマスター レコード データであるため、マスター レコードの値を詳細テンプレートに表示できます。例:

```html
    <igx-grid ... >
         <ng-template igxGridDetail let-dataItem>
            <div *ngIf="dataItem.Category">
                <header>{{dataItem.Category.CategoryName}}</header>
                <span>{{dataItem.Category.Description}}</span>
            </div>
        </ng-template>
    </igx-grid>
```


## API

展開状態は、`igxGrid` の [`expansionStates`]({environment:angularApiUrl}/classes/igxgridcomponent.html#expansionStates) 入力で制御できます。状態はキーと値のペア [行識別子、展開状態] に保存されます。このプロパティは、展開状態を取得/設定し、双方向バインディングをサポートします。

```html
  <igx-grid [(expansionStates)]='expansionState' >
    ...
  </igx-grid>
```

展開状態を制御するための追加の API メソッドも公開されています。
- [`expandAll`]({environment:angularApiUrl}/classes/igxgridcomponent.html#expandAll)
- [`collapseAll`]({environment:angularApiUrl}/classes/igxgridcomponent.html#collapseAll)
- [`toggleRow`]({environment:angularApiUrl}/classes/igxgridcomponent.html#toggleRow)
- [`expandRow`]({environment:angularApiUrl}/classes/igxgridcomponent.html#expandRow)
- [`collapseRow`]({environment:angularApiUrl}/classes/igxgridcomponent.html#collapseRow)

## キーボード ナビゲーション

- 詳細行にフォーカスがある場合:

    - `上矢印` - 前の行のセルにフォーカスし、1 つ上の行へ移動します。
    - `下矢印` - 次の行のセルにフォーカスし、1 つ下の行へ移動します。
    - `Tab` - フォーカス可能な要素がある場合、テンプレート内の次のフォーカス可能な要素にフォーカスを移動します。そうでない場合は、次のグリッド行に移動します。
    - `Shift + Tab` - 前の行にフォーカスします。

- エキスパンダーのデータ行にフォーカスがある場合:
    - `Alt + 右矢印/下矢印` - 行を展開します。
    - `Alt + 左矢印/下矢印` - 行を縮小します。

## 既知の問題と制限


|既知の制限| 説明|
| --- | --- |
| カスタム詳細テンプレート内のタブ ナビゲーションは、次のフォーカスされた要素が表示ビュー ポート以外にある場合、マスター グリッドのスクロール位置を更新しない場合があります。| カスタム詳細テンプレート内のタブ ナビゲーションは、ブラウザーに残されています。 |
| 詳細テンプレートは Excel にエクスポートされません。| 詳細テンプレートにはあらゆる種類のコンテンツが含まれているため、Excel にエクスポートすることはできません。|
| 検索機能は、詳細テンプレートの要素を強調表示しません。 | |



<div class="divider--half"></div>

## API リファレンス
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent スタイル]({environment:sassApiUrl}/#function-grid-theme)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxGridRow]({environment:angularApiUrl}/classes/igxgridrow.html)
* [IgxTreeGridRow]({environment:angularApiUrl}/classes/igxtreegridrow.html)
* [IgxHierarchicalGridRow]({environment:angularApiUrl}/classes/igxhierarchicalgridrow.html)
* [IgxGridCell]({environment:angularApiUrl}/classes/igxgridcell.html)