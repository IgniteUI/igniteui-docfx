@@if (igxName === 'IgxGrid') {
---
title: Angular Grid ソート | データ ソート | Ignite UI for Angular| インフラジスティックス
_description: Ignite UI Material UI グリッドの Angular Sort 機能を使用し、機能豊かなな API と Angular イベントを使ってソート可能な列の組み合わせを構成する方法。
_keywords: angular sort, ignite ui for angular, infragistics
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid ソート | データ ソート | Ignite UI for Angular| インフラジスティックス
_description: Ignite UI Material UI グリッドの Angular Sort 機能を使用し、機能豊かなな API と Angular イベントを使ってソート可能な列の組み合わせを構成する方法。
_keywords: angular sort, ignite ui for angular, infragistics
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid ソート | データ ソート | Ignite UI for Angular|“infragistics”
_description: Ignite UI Material UI グリッドの Angular Sort 機能を使用し、機能豊かなな API と Angular イベントを使ってソート可能な列の組み合わせを構成する方法。
_keywords: angular sort, ignite ui for angular, infragistics
_language: ja
---
}

# @@igComponent ソートの概要

Ignite UI for Angular @@igComponent では、列レベルでのデータ ソートが可能です。つまり、**@@igSelector** にソート可能な列とソート不可の列の両方を持つことができます。Angular でソートを実行すると、指定した条件に基づいてレコードの表示順序を変更できます。

### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-sorting-sample' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
更に **@@igSelector** の [`onContextMenu`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#oncontextmenu) 出力を使用してソートにカスタム contextmenu が追加されます。

<div class="sample-container loading" style="height:550px">
    <iframe id="tree-grid-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-sorting' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
更に **@@igSelector** の [`onContextMenu`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#oncontextmenu) 出力を使用してソートにカスタム contextmenu が追加されます。

<div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-sorting' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}

<div class="divider--half"></div>

[`sortable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortable) 入力で可能です。@@igComponent のソートで、[`sortingIgnoreCase`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortingignorecase) プロパティを設定して大文字と小文字を区別するソートができます。

```html
<igx-column field="ProductName" header="Product Name" [dataType]="'string'" sortable="true"></igx-column>
```

## ソート インジケーター
ソートされた列数が一定数以上ある場合、ソート順の指定がないと混乱する可能性があります。 

**@@igxName** は、ソートされた各列のインデックスを示すことにより、この問題の解決策を提供します。

@@if(igxName === "IgxGrid"){
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-sorting-indicators-iframe" class="lazyload" src='{environment:demosBaseUrl}/grid/grid-sorting-indicators' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-sorting-indicators-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sorting-indicators-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}

## API を使用したソート

@@igComponent [`sort`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#sort) メソッドを使用して列、複数の列の組み合わせをソートできます。

```typescript
import { SortingDirection } from 'igniteui-angular';

// Perform a case insensitive ascending sort on the ProductName column.
this.@@igObjectRef.sort({ fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true });

// Perform sorting on both the ProductName and Price columns.
this.@@igObjectRef.sort([
    { fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true },
    { fieldName: 'Price', dir: SortingDirection.Desc }
]);
```

> [!NOTE]
> Sorting は、[`DefaultSortingStrategy`]({environment:angularApiUrl}/classes/defaultsortingstrategy.html) アルゴリズムを使用して実行されます。[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortStrategy) または [`ISortingExpression`]({environment:angularApiUrl}/interfaces/isortingexpression.html#strategy) は、代替アルゴリズムとして [`ISortingStrategy`]({environment:angularApiUrl}/interfaces/isortingstrategy.html) のカスタム実装を使用できます。たとえば複雑なテンプレート列や画像列にユーザー定義のソートを定義する必要がある場合に便利です。

フィルター動作で、ソート状態をクリアするには [`clearSort`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#clearsort) メソッドを使用します。

```typescript
// Removes the sorting state from the ProductName column
this.@@igObjectRef.clearSort('ProductName');

// Removes the sorting state from every column in the @@igComponent
this.@@igObjectRef.clearSort();
```

> [!NOTE]
> **@@igComponent** の [`sortStrategy`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#sortstrategy) は **column** の [`sortStrategy`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortstrategy) と比較して異なるタイプです。異なるスコープで機能し、異なるパラメーターを公開するためです。

> [!NOTE]
> ソート操作で @@igComponent の基になるデータ ソースは変更**しません**。

## 初期のソート状態

@@igComponent でソート状態を初期設定するには、ソート式の配列を @@igComponent の [`sortingExpressions`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#sortingexpressions) プロパティに渡します。

```typescript
public ngOnInit() {
    this.@@igObjectRef.sortingExpressions = [
        { fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true },
        { fieldName: 'Price', dir: SortingDirection.Desc }
    ];
}
```

> [!NOTE]
> `string` 型の値が [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) `Date` の列で使用される場合、@@igComponent が値を  `Date` オブジェクトに解析しないため i@@igComponent `sorting` が正しく動作しません。`string` オブジェクトを使用する場合、値を `Date` オブジェクトに解析するためのロジックをアプリケーション レベルで実装する必要があります。

<div class="divider--half"></div>

@@if (igxName === 'IgxGrid') {
#### リモート ソート

@@igComponent はリモート ソートをサポートします。詳細については、 [`@@igComponent リモート データ操作`](remote-data-operations.md)で説明されています。

<div class="divider--half"></div>
}

## スタイル設定

ソート動作のスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

最も単純なアプローチに従って、 [`igx-grid-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-theme) を拡張し、`$sorted-header-icon-color` and `sortable-header-icon-hover-color` パラメーターを受け取ります。

```scss
$custom-theme: igx-grid-theme(
    $sorted-header-icon-color: #ffb06a,
    $sortable-header-icon-hover-color: black
);
```
最後の手順は、それぞれのテーマを持つコンポーネント mixins を**含める**ことです。 

```scss
 @include igx-grid($custom-theme);
```

>[!NOTE]
 >コンポーネントが [`Emulated`](../themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

 ```scss
:host {
    ::ng-deep {
        @include igx-grid($custom-theme);
    }
}
```

### カラーパレットの定義

上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) と [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$black-color: black;
$orange-color: #ffb06a;

$custom-palette: igx-palette($primary: $black-color, $secondary: $orange-color);
```

次に [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取得できます。

```scss
$custom-theme: igx-grid-theme(
    $sorted-header-icon-color: igx-color($custom-palette, "secondary", 500),
    $sortable-header-icon-hover-color: igx-color($custom-palette, "primary", 500)
);
```

>[!NOTE]
>`igx-color` と `igx-palette` は色の生成や取得のための関数です。使い方の詳細については [`パレット`](../themes/palette.md) のトピックをご覧ください。

### スキーマの使用

テーマ エンジンを使用して[**スキーマ**](../themes/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

すべてのコンポーネントに提供されている 2 つの定義済みスキーマ (ここでは [`_light-grid`]({environment:sassApiUrl}/index.html#variable-_light-grid)) の 1 つを拡張します。  

```scss
// Extending the light grid schema
$custom-grid-schema: extend($_light-grid,
    (
        sorted-header-icon-color: (igx-color:('secondary', 500)),
        sortable-header-icon-hover-color: (igx-color:('primary', 500))
    )
);
```

カスタム スキーマを適用するには、グローバル ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) または [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)) の 1 つを**拡張**する必要があります。これは基本的にカスタム スキーマでコンポーネントをポイントし、その後それぞれのコンポーネントテーマに追加するものです。

```scss
// Extending the global light-schema
$my-custom-schema: extend($light-schema, 
    (
        igx-grid: $custom-grid-schema
    )
);

// Defining our custom theme with the custom schema
$custom-theme: igx-grid-theme(
  $palette: $custom-palette,
  $schema: $my-custom-schema
);
```

上記と同じ方法でテーマを含める必要があることに注意してください。

@@if (igxName === 'IgxGrid') {
### デモ

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-sorting-styling-iframe" src='{environment:demosBaseUrl}/grid/grid-sorting-styling' width="100%" height="100%" 
        seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-sorting-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sorting-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
### デモ

<div class="sample-container loading" style="height:550px">
    <iframe id="tree-grid-sorting-styling-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-sorting-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-sorting-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-sorting-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
### デモ

<div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-sorting-styling-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-sorting-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-sorting-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-sorting-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}

## API リファレンス
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [ISortingExpression]({environment:angularApiUrl}/interfaces/isortingexpression.html)

## その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [集計](summaries.md)
* [列移動](column-moving.md)
* [列のピン固定](column_pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
