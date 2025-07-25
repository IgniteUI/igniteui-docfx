@@if (igxName === 'IgxGrid') {
---
title: Angular Grid のセル選択 - Ignite UI for Angular
_description: さまざまなイベント、豊富な API、またはマウス操作を使用してセル データ選択を簡単に実行できます。Grid はセル選択で 3 つのモードをサポートします。今すぐお試しください。
_keywords: データ選択, igniteui for angular, インフラジスティックス
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid のセル選択 - Ignite UI for Angular
_description: さまざまなイベント、豊富な API、またはマウス操作を使用してセル データ選択を簡単に実行できます。Grid はセル選択で 3 つのモードをサポートします。今すぐお試しください。
_keywords: データ選択, igniteui for angular, infragistics
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid のセル選択 - Ignite UI for Angular 
_description: さまざまなイベント、豊富な API、またはマウス操作を使用してセル データ選択を簡単に実行できます。Grid はセル選択で 3 つのモードをサポートします。今すぐお試しください。
_keywords: データ選択, igniteui for angular, infragistics
_language: ja
---
}

# Angular セル選択
選択機能により、@@igComponent ベースのマテリアル UI で豊富なデータ選択機能が有効になります。強力な API と使いやすいメソッドのおかげで、さまざまなイベントと単一の選択アクションを利用できます。@@igComponent は、セル選択の 3 つのモードをサポートしています。[`cellSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#cellSelection) プロパティを変更することで、それらを簡単に切り替えることができます。セルの選択を無効にするか、*グリッド内の 1 つのセルのみを選択する*か、*グリッド内の複数のセルを選択する*ことができます。これはデフォルトのオプションとして提供されています。
@@if (igxName === 'IgxHierarchicalGrid') { 階層グリッドでは、グリッド レベルでセル選択モードを指定できます。たとえば、親グリッドではマルチセル選択を有効にできますが、子グリッドではセル選択モードを単一または無効にすることができます。}これらの各オプションについて詳しく説明します。

## Angular セル選択の例
以下のサンプルは、@@igComponent の**セル選択**動作の 3 つのタイプを示します。以下のボタンを使用して、使用可能な各選択モードを有効にします。Snackbar メッセージ ボックスで各ボタンの操作について簡単に説明します。
<div class="divider--half"></div>

@@if (igxName === 'IgxGrid') {

<code-view style="height:700px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-cell-selection" alt="Angular セル選択の例">
</code-view>

<div class="divider--half"></div>
}

@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:700px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-cell-selection" >
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:750px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hGrid-cell-selection" >
</code-view>

<div class="divider--half"></div>
}

## 選択タイプ
### @@igComponent 複数セル選択

@@if (igxName === 'IgxHierarchicalGrid') {
これは、親グリッドと子グリッドの両方でのデフォルトのセル選択モードです。セルの選択は一度に 1 つのグリッドで行うことができますが、クロス グリッド範囲の選択を行うことか、複数のグリッドでセルを選択することはできないことに注意してください。範囲選択およびマウス ドラッグ機能に関連する各キーの組み合わせは、同じグリッドでのみ使用できます。
}
セルの選択方法:
- `マウス ドラッグ` - セルの長方形データ選択。
- `Ctrl キー` 押下 + `マウス ドラッグ` - 複数の範囲が選択されます。その他の既存のセル選択は保持されます。
- Shift キーを使用して複数セルの選択をインスタンス化します。Shift キーを押しながら、単一セルを選択して別の単一セルを選択します。2 つのセル間のセル範囲が選択されます。`Shift キー`を押しながら他の 2 番目のセルを選択すると、最初に選択したセルの位置 (開始点) に基づいてセル選択範囲が更新されます。
- `Shift キー`を押しながら`矢印キー`を使用してキーボードで複数セルを選択します。マルチセル選択範囲は、フォーカスされたセルに基づいて作成されます。
- Shift キーを押しながら `Ctrl + Arrow キー`と `Ctrl + Home/End` を使用してキーボードで複数セルを選択します。マルチセル選択範囲は、フォーカスされたセルに基づいて作成されます。
- `Ctrl キー`を押しながら`左マウスキー`でクリックすると、選択したセルコレクションに単一のセル範囲が追加されます。
- マウスでクリックしてドラッグすることで、連続した複数セルの選択が可能です。

@@if (igxName === 'IgxGrid') {
#### デモ


<code-view style="height:700px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-multi-cell-selection" >
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
#### デモ


<code-view style="height:700px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-multi-cell-selection" >
</code-view>

<div class="divider--half"></div>
}

### @@igComponent 単一選択

`[cellSelection]="'single'"` を設定すると、一度にグリッド内で選択されたセルを1つだけ持つことができます。また、モード`マウス ドラッグ`は機能せず、セルを選択する代わりに、デフォルトのテキスト選択が行われます。

>[!NOTE]
> `selection mode` が `single` であるか `multiple` であるかに関係なく、単一セルが [`selected`]({environment:angularApiUrl}/classes/igxgridcomponent.html#selected) イベントが発生したときに発生します。複数セル選択モードでは、セル範囲を選択すると [`rangeSelected`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rangeSelected) イベントが発生します。

### @@igComponent 選択なし
セルの選択を無効にする場合は、`[cellSelection]="'none'"` プロパティを設定するだけです。このモードでは、セルをクリックするかキーボードでナビゲートしようとすると、セルは**選択されず**、`アクティブ化のスタイル`のみが適用され、ページ上の他の要素をスクロールまたはクリックすると失われます。選択を定義する唯一の方法は、以下で説明する API メソッドを使用することです。

@@if (igxName !== 'IgxHierarchicalGrid') {
## キーボード ナビゲーションのインタラクション

### Shift キーが押されている間
- <kbd>Shift</kbd> + <kbd>上矢印</kbd> - 現在の選択範囲に上のセルを追加します。
- <kbd>Shift</kbd> + <kbd>下矢印</kbd> - 現在の選択範囲に下のセルを追加します。
- <kbd>Shift</kbd> + <kbd>左矢印</kbd> - 現在の選択に左のセルを追加します。
- <kbd>Shift</kbd> + <kbd>右矢印</kbd> - 現在の選択範囲に右のセルを追加します。

### Ctrl + Shift キーが押されている間
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>上矢印</kbd> - 列内のフォーカスのあるセルの上にあるすべてのセルを選択します。
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>下矢印</kbd> - 列内のフォーカスのあるセルの下にあるすべてのセルを選択します。
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>左矢印</kbd> - 行の先頭まですべてのセルを選択します。
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>右矢印</kbd> - 行末まですべてのセルを選択します。
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Home</kbd> - フォーカスされているセルからグリッド内の最初のセルまでのすべてのセルを選択します。
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>End</kbd> - フォーカスされているセルからグリッド内の最後のセルまでのすべてのセルを選択します。

> [!NOTE]
> 連続スクロールは、グリッド本体でのみ可能です。

## API の使用
以下は、範囲の選択、選択の解除、または選択したセル データを取得する方法です。

### 範囲の選択

@@if (igxName === 'IgxGrid') {
[`selectRange(range)`]({environment:angularApiUrl}/classes/igxgridcomponent.html#selectRange) - API を使用してセル範囲を選択します。`rowStart` と `rowEnd` は行インデックスを使用する必要があり、`columnStart` と `columnEnd` は列インデックスまたは列データフィールド値を使用できます。
}
@@if (igxName === 'IgxTreeGrid') {
[`selectRange(range)`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#selectRange) - API を使用してセル範囲を選択します。`rowStart` と `rowEnd` は行インデックスを使用する必要があり、`columnStart` と `columnEnd` は列インデックスまたは列データフィールド値を使用できます。
}
@@if (igxName === 'IgxHierarchicalGrid') {
[`selectRange(range)`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#selectRange) - API を使用してセル範囲を選択します。`rowStart` と `rowEnd` は行インデックスを使用する必要があり、`columnStart` と `columnEnd` は列インデックスまたは列データフィールド値を使用できます。
}

```typescript
const range = { rowStart: 2, rowEnd: 2, columnStart: 1, columnEnd: 1 };
this.grid1.selectRange(range);
...

const range = { rowStart: 0, rowEnd: 2, columnStart: 'Name', columnEnd: 'ParentID' };
this.grid1.selectRange(range);

```

> [!NOTE]
> 選択範囲は加算操作です。以前の選択はクリアされません。

### セル選択のクリア

@@if (igxName === 'IgxGrid') {
[`clearCellSelection()`]({environment:angularApiUrl}/classes/igxgridcomponent.html#clearCellSelection) は、現在のセル選択をクリアします。
}
@@if (igxName === 'IgxTreeGrid') {
[`clearCellSelection()`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#clearCellSelection) は、現在のセル選択をクリアします。
}
@@if (igxName === 'IgxHierarchicalGrid') {
[`clearCellSelection()`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#clearCellSelection) は、現在のセル選択をクリアします。
}

### 選択したデータの取得

@@if (igxName === 'IgxGrid') {
[`getSelectedData()`]({environment:angularApiUrl}/classes/igxgridcomponent.html#getSelectedData) は、選択内容に応じた形式で選択されたデータの配列を返します。
}
@@if (igxName === 'IgxTreeGrid') {
[`getSelectedData()`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#getSelectedData) は、選択内容に応じた形式で選択されたデータの配列を返します。
}
@@if (igxName === 'IgxHierarchicalGrid') {
[`getSelectedData()`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#getSelectedData) は、選択内容に応じた形式で選択されたデータの配列を返します。
}

1. 3 つの異なる単一セルが選択されている場合:
```
expectedData = [
    { CompanyName: 'Infragistics' },
    { Name: 'Michael Langdon' },
    { ParentID: 147 }
];
```

2. 1 列から 3 つのセルが選択されている場合:
```
expectedData = [
    { Address: 'Obere Str. 57'},
    { Address: 'Avda. de la Constitución 2222'},
    { Address: 'Mataderos 2312'}
];
```

3. 1 行 3 列から 3 つのセルをマウスドラッグで選択した場合:
```
expectedData = [
    { Address: 'Avda. de la Constitución 2222', City: 'México D.F.', ContactTitle: 'Owner' }
];
```

4. 2 行 3 列から 3 つのセルをマウスドラッグで選択した場合:
```
expectedData = [
    { ContactTitle: 'Sales Agent', Address: 'Cerrito 333', City: 'Buenos Aires'},
    { ContactTitle: 'Marketing Manager', Address: 'Sierras de Granada 9993', City: 'México D.F.'}
];
```

5. 2 つの異なる範囲が選択されている場合:
```
expectedData = [
    { ContactName: 'Martín Sommer', ContactTitle: 'Owner'},
    { ContactName: 'Laurence Lebihan', ContactTitle: 'Owner'},
    { Address: '23 Tsawassen Blvd.', City: 'Tsawassen'},
    { Address: 'Fauntleroy Circus', City: 'London'}
];
```

6. 2 つの重複範囲が選択されている場合、形式は次のようになります。
```
expectedData = [
    { ContactName: 'Diego Roel', ContactTitle: 'Accounting Manager', Address: 'C/ Moralzarzal, 86'},
    { ContactName: 'Martine Rancé', ContactTitle: 'Assistant Sales Agent', Address: '184, chaussée de Tournai', City: 'Lille'},
    { ContactName: 'Maria Larsson', ContactTitle: 'Owner', Address: 'Åkergatan 24', City: 'Bräcke'},
    { ContactTitle: 'Marketing Manager', Address: 'Berliner Platz 43', City: 'München'}
];
```

@@if (igxName === 'IgxGrid') {
> [!NOTE]
> [`selectedCells()`]({environment:angularApiUrl}/classes/igxgridcomponent.html#selectedCells) は、表示されているすべての行 (グリッドのビューポート内の行) と、表示されていない列を含むすべての列からセルを返します。[`getSelectedData()`]({environment:angularApiUrl}/classes/igxgridcomponent.html#getSelectedData) も、選択したセル データを返します。
> [`getSelectedRanges(): GridSelectionRange[]`]({environment:angularApiUrl}/classes/igxgridcomponent.html#getSelectedRanges) は、キーボードとポインターの両方の操作からグリッドで現在選択されている範囲を返します。
}
@@if (igxName === 'IgxTreeGrid') {
> [!NOTE]
> [`selectedCells()`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#selectedCells) は、表示されているすべての行 (グリッドのビューポート内の行) と、表示されていない列を含むすべての列からセルを返します。[`getSelectedData()`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#getSelectedData) も、選択したセル データを返します。
> [`getSelectedRanges(): GridSelectionRange[]`]({environment:angularApiUrl}/classes/igxgridcomponent.html#getSelectedRanges) は、キーボードとポインターの両方の操作からグリッドで現在選択されている範囲を返します。
}
@@if (igxName === 'IgxHierarchicalGrid') {
> [!NOTE]
> [`selectedCells()`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#selectedCells) は、表示されているすべての行 (グリッドのビューポート内の行) と、表示されていない列を含むすべての列からセルを返します。[`getSelectedData()`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#getSelectedData) も、選択したセル データを返します。
> [`getSelectedRanges(): GridSelectionRange[]`]({environment:angularApiUrl}/classes/igxgridcomponent.html#getSelectedRanges) は、キーボードとポインターの両方の操作からグリッドで現在選択されている範囲を返します。
}

## 機能の統合
マルチセル選択はインデックス ベースです (DOM 要素選択)。

- `ソート` - ソートが実行されると、選択は解除されません。昇順または降順でソートしている間、現在選択されているセルはそのままになります。
- `ページング` - ページング時に選択されたセルはクリアされます。選択はページを超えては持続されません。選択はページを超えては持続されません。
- `フィルタリング` - フィルタリングが実行されると、選択は解除されません。フィルタリングがクリアされている場合は、最初に選択されたセルが返されます。
- `サイズ変更` - 列のサイズを変更すると、選択したセルはクリアされません。
- `非表示` - 選択したセルはクリアされません。列が非表示の場合は、次に表示されている列のセルが選択されます。
- `ピン固定` - 選択したセルはクリアされません。非表示と同じです。
- `グループ化` - 列をグループ化すると、選択したセルはクリアされません。

}

## スタイル設定

テーマ エンジンは、**選択したセルの範囲**をスタイルできるプロパティを公開します。

### テーマのインポート

選択のスタイル設定を始めるには、すべてのテーマ関数とコンポーネントミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
``` 

### 色の定義

完了後、[`contrast-color`]({environment:sassApiUrl}/palettes#function-contrast-color) と [`color`]({environment:sassApiUrl}/palettes#function-color) 関数を使用できます。これらの関数を使用して、選択範囲に使用する色を定義します。

```scss
$text-color: contrast-color($color: 'primary', $variant: 900);
$background-color: color($color: "primary", $variant: 900);
$border-yellow: #f2c43c;
```

>[!NOTE]
>`contrast-color` 関数と `color` 関数を使用しない場合は、いつでもカラーの値をハードコードできます。

### カスタム テーマの作成

次に、`text-color`、`background-color`、`border-yellow` 変数をそれぞれ `$cell-selected-text-color`、`$cell-selected-background`、`$cell-active-border-color` として渡して、[`grid-theme`]({environment:sassApiUrl}/themes#function-grid-theme) を拡張する新しいテーマを作成します。

```scss
$custom-grid-theme: grid-theme(
  $cell-selected-text-color: $text-color,
  $cell-active-border-color: $border-yellow,
  $cell-selected-background: $background-color
);
```

### テーマの適用

次にコンポーネントのスタイルにミックスインを含め (アプリ スタイルにすることも可能)、@@igSelector がデフォルトのテーマの代わりに新しく作成されたテーマを使用するようになります。

```scss
@include css-vars($custom-grid-theme);
```

カスタム テーマを適用すると、選択したグリッドセルが選択した色で強調表示されます。

@@if (igxName === 'IgxGrid'){
### デモ


<code-view style="height:620px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-multi-cell-selection-style" >
</code-view>

}

@@if (igxName === 'IgxHierarchicalGrid'){
### デモ

<code-view style="height:620px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-multi-cell-style" >
</code-view>

}


@@if (igxName === 'IgxTreeGrid'){
### デモ

<code-view style="height:620px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-multi-cell-selection-style" >
</code-view>

}

>[!NOTE]
>このサンプルは、`Change Theme` (テーマの変更) から選択したグローバル テーマに影響を受けません。

## API リファレンス

* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
@@if (igxName !== 'IgxTreeGrid') {* [IgxGridRow API]({environment:angularApiUrl}/classes/igxgridrow.html)}@@if (igxName === 'IgxTreeGrid') {* [IgxTreeGridRow API]({environment:angularApiUrl}/classes/igxtreegridrow.html)}
* [IgxGridCell API]({environment:angularApiUrl}/classes/igxgridcell.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/themes#function-grid-theme)

## その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [選択](selection.md)
* [行の選択](row-selection.md)
* [フィルタリング](filtering.md)
* [並び替え](sorting.md)
* [集計](summaries.md)
* [列移動](column-moving.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [仮想化とパフォーマンス](virtualization.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular) 
