@@if(igxName === 'IgxGrid') {
---
title: Angular Grid ページング | Angular ページネーション テーブル | インフラジスティックス
_description: Angular ページネーションを構成して Ignite UI の Angular マテリアル テーブルにカスタム ページを作成し、さまざまな Angular イベントで要求されたページのデータを取得します。
_keywords: angular ページネーション, igniteui for angular, インフラジスティックス
_language: ja
---
}
@@if(igxName !== 'IgxGrid') {
---
title: Angular Grid ページング | Angular ページネーション テーブル | インフラジスティックス
_description: Angular ページネーションを構成して Ignite UI の Angular マテリアル テーブルにカスタム ページを作成し、さまざまな Angular イベントで要求されたページのデータを取得します。
_keywords: angular ページネーション, igniteui for angular, インフラジスティックス
_canonicalLink: grid/paging
_language: ja
---
}

# Angular @@igComponent ページネーション
ページネーションは、大量のデータセットを類似したコンテンツを持つ一連のページに分割するために使用されます。Angular テーブルのページネーションにより、ユーザー エクスペリエンスとデータ操作が向上します。 @@igComponent ページネーションは、列の追加と同様に、`igx-paginator` タグを定義することにより、グリッド ツリーに投影された個別のコンポーネントを介して構成できます。他の Angular Material テーブルと同様に、@@igComponent のページネーションはカスタム ページのテンプレートをサポートします。

## Angular ページネーションの例

次の例は、@@igComponent ページネーションを表しており、`items per page` のオプションの使用法と、ページングを有効にする方法を示しています。ユーザーは、[最後のページに移動] ボタンと [最初のページに移動] ボタンを使用して、@@igComponent ページをすばやくナビゲートすることもできます。
@@if (igxName === 'IgxGrid') {

<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-paging-sample" alt="Angular ページネーションの例">
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-paging" alt="Angular ページネーションの例">
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:580px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-paging" alt="Angular ページネーションの例">
</code-view>

<div class="divider--half"></div>
}

`igx-paginator` コンポーネントを追加すると、機能が存在するかどうかが制御されます。トグル プロパティを持つ単純な `*ngIf` を使用して、機能を有効/無効にできます。[`perPage`]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#perPage) 入力は、ページごとに表示されるレコードを制御します。以下のように @@igComponent でページングを有効にします。

```html
<@@igSelector #@@igObjectRef [data]="data" [height]="'500px'" [width]="'100%'" [displayDensity]="'cosy'">
    <igx-paginator [perPage]="10">
    </igx-paginator>
</@@igSelector>
```



例:
```html
<igx-paginator #paginator [totalRecords]='20'>
    <igx-paginator-content>
        <div id="numberPager" style="justify-content: center;">
            <button [disabled]="paginator.isFirstPage" (click)="paginator.previousPage()" igxButton="flat">
                PREV
            </button>
            <span>
               Page {{paginator.page}} of {{paginator.totalPages}}
            </span>
            <button [disabled]="paginator.isLastPage" (click)="paginator.nextPage()" igxButton="flat">
                NEXT
            </button>
        </div>
    </igx-paginator-content>
</igx-paginator>
```

@@if (igxName === 'IgxGrid') {
## グループ化によるページング
グループ行は、データ行とともにページング プロセスに関係します。それらは各ページのページ サイズにカウントされます。折りたたまれた行はページング プロセスに含まれません。
ページングとグループ化の統合については、[グループ化](groupby.md#angular-grid-ページングでグループ化)のトピックで説明しています。
}

## 使用方法

@@if (igxName === 'IgxGrid') {
以下の例では、`igx-paginator` コンポーネントが `igx-grid` コンポーネントと一緒に使用されていますが、ページング機能が必要な場合は、他のコンポーネントと一緒に使用できます。

```html
<igx-grid #grid [data]="data">
    <igx-paginator #paginator [(page)]="grid.page" [totalRecords]="grid.totalRecords" [(perPage)]="10"
            [selectOptions]="selectOptions" [displayDensity]="grid.displayDensity">
    </igx-paginator>
</igx-grid>
```
}

@@if (igxName === 'IgxTreeGrid') {
以下の例では、`igx-paginator` コンポーネントが `igx-tree-grid` コンポーネントと一緒に使用されていますが、ページング機能が必要な場合は、他のコンポーネントと一緒に使用できます。

```html
<igx-tree-grid #treeGrid [data]="data">
    <igx-paginator #paginator [(page)]="treeGrid.page" [totalRecords]="treeGrid.length" [(perPage)]="10"
            [selectOptions]="selectOptions" [displayDensity]="treeGrid.displayDensity">
    </igx-paginator>
</igx-tree-grid>
```
}

@@if (igxName === 'IgxHierarchicalGrid') {
以下の例では、`igx-paginator` コンポーネントは `igx-hierarchical-grid` コンポーネントとともに使用されますが、ページング機能が必要な場合は、他のコンポーネントとともに使用できます。

```html
<igx-hierarchical-grid>
    <igx-column *ngFor="let c of hColumns" [field]="c.field">
    </igx-column>
    <igx-row-island [key]="'childData'" [autoGenerate]="true">
        <igx-row-island [key]="'childData'" [autoGenerate]="true">
            <igx-paginator *igxPaginator></igx-paginator>
        </igx-row-island>
        <igx-paginator *igxPaginator></igx-paginator>
    </igx-row-island>
    <igx-row-island [key]="'childData2'" [autoGenerate]="true">
        <igx-paginator *igxPaginator></igx-paginator>
    </igx-row-island>

    <igx-paginator></igx-paginator>
</igx-hierarchical-grid>
```
}

@@if (igxName === 'IgxHierarchicalGrid') {
### 子グリッド内のページネーター設定

IgxHierarchicalGrid の子グリッドの実装方法および DI スコープの動作には一定の制限があるため、igx-row-island タグ内でページネーター コンポーネントを定義する場合、ページネーター自体で IgxPaginator ディレクティブを必ず使用してください。これにより、子グリッドが参照として正しいページネーター インスタンスを持つようになります。

```html
<igx-hierarchical-grid>
    ...
    <igx-row-island>
        ...
        <igx-grid-toolbar *igxPaginator>
           ...
        </igx-grid-toolbar>
    </igx-row-island>
    ...
</igx-hierarchical-grid>
```

}

### ページネーター コンポーネントのデモ

@@if (igxName === 'IgxGrid') {
<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-pager-sample" >
</code-view>
}

@@if (igxName === 'IgxTreeGrid') {
<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-reusable-paginator" >
</code-view>
}

@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-reusable-paginator" >
</code-view>
}

<div class="divider--half"></div>

## リモート ページング
リモート ページングは、データ取得を担当するサービスと、グリッドの構築とデータ サブスクリプションを担当するコンポーネントを宣言することで実現できます。詳細については、[`@@igComponent リモート データ操作`](remote-data-operations.md#リモート-ページング)トピックをご覧ください。

@@if (igxName === 'IgxGrid') {
## カスタム テンプレートのリモート ページング

独自のページング動作を定義するために、`igx-paginator-content` を使用してカスタム ロジックを追加できます。[このセクション](remote-data-operations.md#カスタム-igx-paginator-content-のリモート-ページング)では、上記を実証するために、リモート ページングの例を拡張する方法を説明します。
}

## Angular のページネーション スタイリング

ページネーターのスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
``` 

最も簡単な方法で [`igx-paginator-theme`]({environment:sassApiUrl}/index.html#function-igx-paginator-theme) を拡張し `$text-color`、`$background-color` および `$border-color` パラメータを受け入れる新しいテーマを作成します。

```scss
$dark-paginator: igx-paginator-theme(
    $text-color: #F4D45C,
    $background-color: #575757,
    $border-color: #292826
);
```

`igx-paginator-theme` はページング コンテナーの色の制御のみですが、ポケットベル UI のボタンには影響しません。これらのボタンにスタイル設定するために、新しいボタン テーマを作成しましょう。

```scss
$dark-button: igx-button-theme(
    $icon-color: #FFCD0F,
    $icon-hover-color: #292826,
    $icon-hover-background: #FFCD0F,
    $icon-focus-color: #292826,
    $icon-focus-background: #FFCD0F,
    $disabled-color: #16130C
);
```

この例では、アイコンの色と背景、ボタンの無効な色のみを変更しましたが、[`igx-button-theme`]({environment:sassApiUrl}/index.html#function-igx-button-theme) ではボタン スタイルを制御するためのパラメータを増やすことができます。

最後にそれぞれのテーマを持つコンポーネント ミックスインを**含める**ことです。

```scss
@include igx-grid-paginator($dark-grid-paginator);
.igx-grid-paginator__pager {
    @include igx-button($dark-button);
}
```

>[!NOTE]
>**igx-button** ミックスインを `.igx-paginator__pager` 内でスコープして、ページネーター ボタンのみにスタイルが設定されるようにします。そうでない場合は、グリッド内の他のボタンも影響を受けます。

 >[!NOTE]
 >コンポーネントが [`Emulated`](../themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

```scss
:host {
    ::ng-deep {
        @include igx-paginator($dark-paginator);
        .igx-paginator__pager {
            @include igx-button($dark-button);
        }
    }
}
```

### カラー パレットの定義

上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) および [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$yellow-color: #F9D342;
$black-color: #292826;

$dark-palette: igx-palette($primary: $black-color, $secondary: $yellow-color);
```

[`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取り出すことができます。

```scss
$dark-paginator: igx-paginator-theme(
    $palette: $dark-palette,
    $text-color: igx-color($dark-palette, "secondary", 400),
    $background-color: igx-color($dark-palette, "primary", 200),
    $border-color:  igx-color($dark-palette, "primary", 500)
);

$dark-button: igx-button-theme(
    $palette: $dark-palette,
    $icon-color: igx-color($dark-palette, "secondary", 700),
    $icon-hover-color: igx-color($dark-palette, "primary", 500),
    $icon-hover-background: igx-color($dark-palette, "secondary", 500),
    $icon-focus-color: igx-color($dark-palette, "primary", 500),
    $icon-focus-background: igx-color($dark-palette, "secondary", 500),
    $disabled-color: igx-color($dark-palette, "primary", 700)
);
```

>[!NOTE]
>`igx-color` および `igx-palette` は、色を生成および取得するための重要な機能です。使い方の詳細については[`パレット`](../themes/sass/palettes.md)のトピックを参照してください。

### スキーマの使用

テーマ エンジンには [**スキーマ**](../themes/sass/schemas.md)を使用できる利点があり、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用するための方法です。

すべてのコンポーネントに提供されている 2 つの定義済みスキーマ (この場合は ([`dark-pagination`]({environment:sassApiUrl}/index.html#variable-_dark-pagination) と [`dark-button`]({environment:sassApiUrl}/index.html#variable-_dark-button) スキーマ) の 1 つを拡張します。

```scss
// Extending the dark paginator schema
$dark-paginator-schema: extend($_dark-pagination,
        (
            text-color:(
                igx-color: ("secondary", 400)
            ),
            background-color:(
                igx-color: ("primary", 200)
            ),
            border-color:(
                igx-color:( "primary", 500)
            )
        )
);
// Extending the dark button schema
$dark-button-schema: extend($_dark-button,
        (
            icon-color:(
                igx-color:("secondary", 700)
            ),
            icon-hover-color:(
                igx-color:("primary", 500)
            ),
            icon-hover-background:(
                igx-color:("secondary", 500)
            ),
            icon-focus-color:(
                igx-color:("primary", 500)
            ),
            icon-focus-background:(
                igx-color:("secondary", 500)
            ),
            disabled-color:(
                igx-color:("primary", 700)
            )
        )
);
```

カスタム スキーマを適用するには、グローバル ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) または [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)) の 1 つを**拡張**する必要があります。これは基本的にカスタム スキーマでコンポーネントを指し示し、その後それぞれのコンポーネント テーマに追加する方法です。

```scss
// Extending the global dark-schema
$custom-dark-schema: extend($dark-schema,(
    igx-paginator: $dark-paginator-schema,
    igx-button: $dark-button-schema
));

// Defining igx-paginator-theme with the global dark schema
$dark-paginator: igx-paginator-theme(
  $palette: $dark-palette,
  $schema: $custom-dark-schema
);

// Defining button-theme with the global dark schema
$dark-button: igx-button-theme(
  $palette: $dark-palette,
  $schema: $custom-dark-schema
);
```

テーマを上記と同じ方法で含める必要があることに注意してください。
@@if (igxName === 'IgxGrid'){
### ページネーション スタイルの例


<code-view style="height:560px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/custom-grid-paging-style" >
</code-view>

<div class="divider--half"></div>
}

@@if (igxName === 'IgxHierarchicalGrid'){
### デモ

<code-view style="height:560px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-paging-style" >
</code-view>

}


@@if (igxName === 'IgxTreeGrid'){
### デモ

<code-view style="height:560px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-paging-style" >
</code-view>

}

## API リファレンス
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxGridPaginator スタイル]({environment:sassApiUrl}/index.html#function-igx-paginator-theme)

## その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列移動](column-moving.md)
* [列ピン固定](column-pinning.md)
* [列サイズ変更](column-resizing.md)
* [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
