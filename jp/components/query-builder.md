---
title: Angular Query Builder コンポーネント - Ignite UI for Angular
_description: Angular Query Builder (クエリ ビルダー) を使用すると、ユーザーは優れた UI エクスペリエンスを備えた Angular アプリで複雑なカスタム クエリを作成できます。今すぐお試しください。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, Native Angular コンポーネント Library, Angular Query Builder コンポーネント, Angular Query Builder コントロール
_language: ja
---


# Angular Query Builder (クエリ ビルダー) の概要

Angular Query Builder は、開発者が指定されたデータ セットに対して複雑なデータ フィルタリング クエリを作成できる機能豊富な UI を提供します。このコンポーネントを使用すると、式のツリーを構築し、エディターと各フィールドのデータ型によって決定される条件リストを使用して、それらの間に AND/OR 条件を設定できます。式ツリーは、バックエンドがサポートする形式のクエリに簡単に変換できます。

<p class="highlight">[`IgxQueryBuilderComponent`]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html) コンポーネントは UI を使用して複雑なクエリを作成する方法を提供します。AND/OR 演算子、条件、および値を指定すると、クエリを記述する式ツリーが作成されます。 

## Angular Query Builder の例

この Angular Query Builder の例を作成して、Angular Query Builder コンポーネントのデフォルト機能を紹介しました。プラス ボタンをクリックして、条件、「and」グループ、および「or」グループを追加します。グループ解除または削除するには、サイド バーに移動します。

<code-view style="height:530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/query-builder-sample-1" alt="Angular Query Builder の例">
</code-view>

<div class="divider--half"></div>

## インタラクション

最初に式木が設定されていない場合は、[`AND`]({environment:angularApiUrl}/enums/filteringlogic.html#and) または [`OR`]({environment:angularApiUrl}/enums/filteringlogic.html#or) で結合された条件のグループを作成することから開始します。その後、条件またはサブグループを追加できます。 

条件、フィールド、dataType フィールドに基づくオペランド、およびオペランドが単項でない場合の値を追加します。条件が確定すると、条件情報を含むチップが表示されます。チップをホバーまたはクリックすると、チップを変更したり、その直後に別の条件やグループを追加したりできます。

複数の条件チップを選択すると、グループを作成したりクエリを削除したりするためのオプションを含むコンテキストメニューが表示されます。選択した条件でグループを作成することを選択した場合、一番上に選択した条件が配置された場所に新しく作成されたグループが表示されます。

グループを選択するために、リンク条件 ([`AND`]({environment:angularApiUrl}/enums/filteringlogic.html#and) または [`OR`]({environment:angularApiUrl}/enums/filteringlogic.html#or)) に基づいて色付けされた垂直線をクリックすることもできます。単一のグループが選択されている場合、ロジックを変更、グループ解除、または削除するオプションを含むコンテキスト メニューが表示されます。

## Ignite UI for Angular Query Builder コンポーネントで作業を開始

コンポーネントの使用を開始するには、[`fields`]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html#fields) プロパティに、フィールド名とそのデータ型を説明する配列を追加します。データ型に基づいて対応するオペランドを自動的に割り当てます。
クエリ ビルダーには [`expressionTree`]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html#expressiontree) 入力プロパティがあります。コントロールの初期状態を設定するために使用できます。

```typescript
ngAfterViewInit(): void {
    const tree = new FilteringExpressionsTree(FilteringLogic.And);
    tree.filteringOperands.push({
        fieldName: 'ID',
        condition: IgxStringFilteringOperand.instance().condition('contains'),
        searchVal: 'a',
        ignoreCase: true
    });
    const subTree = new FilteringExpressionsTree(FilteringLogic.Or);
    subTree.filteringOperands.push({
        fieldName: 'ContactTitle',
        condition: IgxStringFilteringOperand.instance().condition('doesNotContain'),
        searchVal: 'b',
        ignoreCase: true
    });
    subTree.filteringOperands.push({
        fieldName: 'CompanyName',
        condition: IgxStringFilteringOperand.instance().condition('startsWith'),
        searchVal: 'c',
        ignoreCase: true
    });
    tree.filteringOperands.push(subTree);
    
    this.queryBuilder.expressionTree = tree;
}
```

`expressionTree` は、双方向のバインド可能なプロパティです。これは、エンド ユーザーが条件を作成、編集、または削除して UI を変更したときに発行される、対応する `expressionTreeChange` 出力が実装されていることを意味します。通知を受信して変更に反応するために個別にサブスクライブすることもできます。

```html
<igx-query-builder #queryBuilder
    [fields]="fields"
    [(expressionTree)]="expressionTree"
    (expressionTreeChange)="onExpressionTreeChange()">
</igx-query-builder>
```

## スタイル設定

クエリ ビルダーのスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
``` 

クエリ ビルダーは、`background` パラメーターを使用して、そのテーマから背景色を取得します。背景を変更するには、カスタム テーマを作成する必要があります。

```scss
$custom-query-builder: query-builder-theme(
    $background: #FFCD0F
);
```

Query Builder 内には、ボタン、チップ、ドロップダウン、入力など、他のコンポーネントがあるため、それぞれに個別のテーマを作成する必要があります。

```scss
$custom-button: button-theme(
    $disabled-color: gray,
    ...
);

$custom-button-group: button-group-theme(
    $item-background:  #292826,
    ...
);

$custom-input-group: input-group-theme(
    $box-background: #4a4a4a,
    ...
);

$custom-chip: chip-theme(
    $background: #FFCD0F,
    ...
);

$custom-drop-down: drop-down-theme(
    $background-color: #292826,
    ...
);
```

この例では、リストされたコンポーネントのパラメーターの一部のみを変更しましたが、[`button-theme`]({environment:sassApiUrl}/index.html#function-button-theme)、[`button-group-theme`]({environment:sassApiUrl}/index.html#function-button-group-theme)、[`chip-theme`]({environment:sassApiUrl}/index.html#function-chip-theme)、[`drop-down-theme`]({environment:sassApiUrl}/index.html#function-drop-down-theme)、[`input-group-theme`]({environment:sassApiUrl}/index.html#function-input-group-theme) テーマは、それぞれのスタイルを制御するためのより多くのパラメーターを提供します。

最後のステップは、それぞれのテーマを持つコンポーネント ミックスインを**含める**ことです。また、高度なフィルタリング ダイアログ内の他の要素のスタイルを追加します。

```scss
@include query-builder($custom-query-builder);
igx-query-builder {
    @include button($custom-button);
    @include button-group($custom-button-group);
    @include input-group($custom-input-group);
    @include chip($custom-chip);
    @include drop-down($custom-drop-down);
    .igx-filter-empty__title {
        color: #FFCD0F
    }
    .igx-query-builder__header {
        color: #FFCD0F
    }
    .igx-filter-tree__expression-actions igx-icon {
        color: #FFCD0F
    }
    .igx-filter-tree__expression-actions igx-icon:hover {
        color: #ffe482
    }
    .igx-filter-tree__expression-actions igx-icon:focus {
        color: #ffe482
    }
    .igx-filter-contextual-menu {
        border: 1px solid #FFCD0F
    }
    .igx-filter-contextual-menu__close-btn {
        position: absolute !important;
        background: #292826 !important;
        border-color: #FFCD0F !important;
    }
    .igx-input-group__input::placeholder {
        color: gray;
    }
}
```

>[!NOTE]
>ほとんどのコンポーネントのミックスインの範囲を `igx-query-builder` 内に設定して、これらのカスタム テーマがクエリ ビルダーの中にネストされたコンポーネントにのみ影響するようにします。そうでない場合、アプリケーション内の他のボタン、チップ、入力、ドロップダウンも影響を受けます。

>[!NOTE]
>コンポーネントが [`Emulated`](themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化に`解除`する必要があります。

```scss
:host {
    ::ng-deep {
        @include drop-down($custom-drop-down);
        @include query-builder($custom-query-builder);
        igx-query-builder {
            @include button($custom-button);
            @include button-group($custom-button-group);
            @include input-group($custom-input-group);
            @include chip($custom-chip);
            .igx-input-group__input::placeholder {
                color: gray;
            }
            .igx-filter-empty__title {
                color: #FFCD0F
            }
            .igx-query-builder__header {
                color: #FFCD0F
            }
            .igx-filter-tree__expression-actions igx-icon {
                color: #FFCD0F
            }
            .igx-filter-tree__expression-actions igx-icon:hover {
                color: #ffe482
            }
            .igx-filter-tree__expression-actions igx-icon:focus {
                color: #ffe482
            }
            .igx-filter-contextual-menu {
                border: 1px solid #FFCD0F
            }
            .igx-filter-contextual-menu__close-btn {
                position: absolute !important;
                background: #292826 !important;
                border-color: #FFCD0F !important;
            }
        }
    }
}
```

### カラーパレットの定義

上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) および [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$yellow-color: #FFCD0F;
$black-color: #292826;
$dark-palette: palette($primary: $yellow-color, $secondary: $black-color);
```
また [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取り出すことができます。 

```scss
$custom-query-builder: query-builder-theme(
    $background: color($dark-palette, "secondary", 400)
);

$custom-button: button-theme(
    $disabled-color: color($dark-palette, "secondary", 100),
    ...
);

$custom-button-group: button-group-theme(
    $item-background: color($dark-palette, "secondary", 400),
    ...
);

$custom-input-group: input-group-theme(
    $box-background: color($dark-palette, "secondary", 200),
    ...
);

$custom-chip: chip-theme(
    $background: color($dark-palette, "primary", 400),
    ...
);

$custom-drop-down: drop-down-theme(
    $background-color: color($dark-palette, "secondary", 400),
    ...
);
```

>[!NOTE]
>`igx-color` および `igx-palette` は、色を生成および取得するための重要な機能です。使い方の詳細については[`パレット`](themes/sass/palettes.md)のトピックを参照してください。

### スキーマの使用

テーマ エンジンを使用して [**スキーマ**](themes/sass/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

すべてのコンポーネント (この場合は [`light-query-builder`]({environment:sassApiUrl}/index.html#variable-_light-query-builder)、[`light-button`]({environment:sassApiUrl}/index.html#variable-_light-button)、[`light-button-group`]({environment:sassApiUrl}/index.html#variable-_light-button-group)、[`light-chip`]({environment:sassApiUrl}/index.html#variable-_light-chip)、[`light-input-group`]({environment:sassApiUrl}/index.html#variable-_light-input-group) および [`light-drop-down`]({environment:sassApiUrl}/index.html#variable-_light-drop-down)) に提供されている 2 つの定義済みスキーマのいずれかを拡張します。

```scss
$query-builder-dark-palette: palette($primary: #11bd7b, $secondary: #e32057, $info: $black-color);

$custom-query-builder-schema: extend($_light-query-builder,
    (
        background:(
           color: ("info")
        )
    )
);

$custom-button-schema: extend($_light-button,
    (
        disabled-color:(
           color: ("secondary", 100)
        ),
        ...
    )
);

$custom-button-group-schema: extend($_light-button-group,
    (
        item-background:(
           color: ("secondary", 400)
        ),
        ...
    )
);

$custom-input-group-schema: extend($_light-input-group,
    (
        box-background:(
           color: ("secondary", 200)
        ),
        ...
    )
);

$custom-chip-schema: extend($_light-chip,
    (
        background:(
           color: ("primary", 400)
        ),
        ...
    )
);

$custom-drop-down-schema: extend($_light-drop-down,
    (
        background-color:(
           color: ("secondary", 400)
        ),
        ...
    )
);
```

カスタム スキーマを適用するには、グローバル ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) または [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)) の 1 つを**拡張**する必要があります。これは基本的にカスタム スキーマでコンポーネントを指し示し、その後それぞれのコンポーネント テーマに追加するものです。

```scss
$custom-light-schema: extend($light-schema,(
    igx-query-builder: $custom-query-builder-schema,
    igx-button: $custom-button-schema,
    igx-button-group: $custom-button-group-schema,
    igx-input-group: $custom-input-group-schema,
    igx-chip: $custom-chip-schema,
    igx-drop-down: $custom-drop-down-schema
));

$custom-query-builder: query-builder-theme(
    $palette: $query-builder-dark-palette,
    $schema: $custom-light-schema
);

$custom-button: button-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-button-group: button-group-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-input-group: input-group-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-chip: chip-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-drop-down: drop-down-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);
```

上記と同じ方法でテーマを含める必要があることに注意してください。

### デモ

<code-view style="height:530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/query-builder-style" >
</code-view>

>[!NOTE]
>サンプルは、`テーマの変更`で選択したグローバル テーマの影響を受けません。
<div class="divider--half"></div>

## API リファレンス
<div class="divider--half"></div>

* [IgxQueryBuilderComponent API]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html)
* [IgxQueryBuilderComponent スタイル]({environment:sassApiUrl}/index.html#function-query-builder-theme)

## その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
