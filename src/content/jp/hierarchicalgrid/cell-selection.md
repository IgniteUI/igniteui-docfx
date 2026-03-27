---
title: Angular Hierarchical Grid のセル選択 - Ignite UI for Angular
_description: さまざまなイベント、豊富な API、またはマウス操作を使用してセル データ選択を簡単に実行できます。Grid はセル選択で 3 つのモードをサポートします。今すぐお試しください。
_keywords: データ選択, igniteui for angular, infragistics
_license: commercial
_language: ja
---



# Angular セル選択

選択機能により、Hierarchical Grid ベースのマテリアル UI で豊富なデータ選択機能が有効になります。強力な API と使いやすいメソッドのおかげで、さまざまなイベントと単一の選択アクションを利用できます。Hierarchical Grid は、セル選択の 3 つのモードをサポートしています。[`cellSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#cellSelection) プロパティを変更することで、それらを簡単に切り替えることができます。セルの選択を無効にするか、**グリッド内の 1 つのセルのみを選択する**か、**グリッド内の複数のセルを選択する**ことができます。これはデフォルトのオプションとして提供されています。
 階層グリッドでは、グリッド レベルでセル選択モードを指定できます。たとえば、親グリッドではマルチセル選択を有効にできますが、子グリッドではセル選択モードを単一または無効にすることができます。これらの各オプションについて詳しく説明します。

## Angular セル選択の例

以下のサンプルは、Hierarchical Grid の**セル選択**動作の 3 つのタイプを示します。以下のボタンを使用して、使用可能な各選択モードを有効にします。Snackbar メッセージ ボックスで各ボタンの操作について簡単に説明します。
<div class="divider--half"></div>






<code-view style="height:750px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hGrid-cell-selection/" >
</code-view>

<div class="divider--half"></div>


## 選択タイプ
### Hierarchical Grid 複数セル選択


これは、親グリッドと子グリッドの両方でのデフォルトのセル選択モードです。セルの選択は一度に 1 つのグリッドで行うことができますが、クロス グリッド範囲の選択を行うことか、複数のグリッドでセルを選択することはできないことに注意してください。範囲選択およびマウス ドラッグ機能に関連する各キーの組み合わせは、同じグリッドでのみ使用できます。

セルの選択方法:
- `マウス ドラッグ` - セルの長方形データ選択。
- `Ctrl キー` 押下 + `マウス ドラッグ` - 複数の範囲が選択されます。その他の既存のセル選択は保持されます。
- Shift キーを使用して複数セルの選択をインスタンス化します。Shift キーを押しながら、単一セルを選択して別の単一セルを選択します。2 つのセル間のセル範囲が選択されます。`Shift キー`を押しながら他の 2 番目のセルを選択すると、最初に選択したセルの位置 (開始点) に基づいてセル選択範囲が更新されます。
- `Shift キー`を押しながら`矢印キー`を使用してキーボードで複数セルを選択します。マルチセル選択範囲は、フォーカスされたセルに基づいて作成されます。
- Shift キーを押しながら `Ctrl + Arrow キー`と `Ctrl + Home/End` を使用してキーボードで複数セルを選択します。マルチセル選択範囲は、フォーカスされたセルに基づいて作成されます。
- `Ctrl キー`を押しながら`左マウスキー`でクリックすると、選択したセルコレクションに単一のセル範囲が追加されます。
- マウスでクリックしてドラッグすることで、連続した複数セルの選択が可能です。




### Hierarchical Grid 単一選択

`[cellSelection]="'single'"` を設定すると、一度にグリッド内で選択されたセルを1つだけ持つことができます。また、モード`マウス ドラッグ`は機能せず、セルを選択する代わりに、デフォルトのテキスト選択が行われます。

>[!NOTE]
> `selection mode` が `single` であるか `multiple` であるかに関係なく、単一セルが [`selected`]({environment:angularApiUrl}/classes/igxgridcomponent.html#selected) イベントが発生したときに発生します。複数セル選択モードでは、セル範囲を選択すると [`rangeSelected`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rangeSelected) イベントが発生します。

### Hierarchical Grid 選択なし

セルの選択を無効にする場合は、`[cellSelection]="'none'"` プロパティを設定するだけです。このモードでは、セルをクリックするかキーボードでナビゲートしようとすると、セルは**選択されず**、`アクティブ化のスタイル`のみが適用され、ページ上の他の要素をスクロールまたはクリックすると失われます。選択を定義する唯一の方法は、以下で説明する API メソッドを使用することです。



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

次にコンポーネントのスタイルにミックスインを含め (アプリ スタイルにすることも可能)、igx-hierarchical-grid がデフォルトのテーマの代わりに新しく作成されたテーマを使用するようになります。

```scss
:host {
  @include tokens($custom-grid-theme);
}
```

カスタム テーマを適用すると、選択したグリッドセルが選択した色で強調表示されます。





### デモ

<code-view style="height:620px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-multi-cell-style/" >
</code-view>






>[!NOTE]
>このサンプルは、`Change Theme` (テーマの変更) から選択したグローバル テーマに影響を受けません。

## API リファレンス

- [IgxHierarchicalGridComponent API]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
- [IgxGridRow API]({environment:angularApiUrl}/classes/igxgridrow.html)
- [IgxGridCell API]({environment:angularApiUrl}/classes/igxgridcell.html)
- [IgxHierarchicalGridComponent スタイル]({environment:sassApiUrl}/themes#function-grid-theme)

## その他のリソース

<div class="divider--half"></div>

- [Hierarchical Grid 概要](hierarchical-grid.md)
- [選択](selection.md)
- [行の選択](row-selection.md)
- [フィルタリング](filtering.md)
- [並び替え](sorting.md)
- [集計](summaries.md)
- [列移動](column-moving.md)
- [列のピン固定](column-pinning.md)
- [列のサイズ変更](column-resizing.md)
- [仮想化とパフォーマンス](virtualization.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
