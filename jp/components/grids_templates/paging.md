@@if(igxName === 'IgxGrid') {
---
title: Angular Grid ページング | Angular 改ページ テーブル | インフラジスティックス
_description: Angular 改ページを構成して Ignite UI の Angular マテリアル テーブルにカスタム ページを作成し、さまざまな Angular イベントで要求されたページのデータを取得します。
_keywords: angular 改ページ, igniteui for angular, インフラジスティックス
_language: ja
---
}
@@if(igxName !== 'IgxGrid') {
---
title: Angular Grid ページング | Angular 改ページ テーブル | インフラジスティックス
_description: Angular 改ページを構成して Ignite UI の Angular マテリアル テーブルにカスタム ページを作成し、さまざまな Angular イベントで要求されたページのデータを取得します。
_keywords: angular 改ページ, igniteui for angular, インフラジスティックス
_canonicalLink: grid/paging
_language: ja
---
}

# Angular @@igComponent 改ページ
改ページは、大量のデータセットを類似したコンテンツを持つ一連のページに分割するために使用されます。Angular テーブルの改ページにより、ユーザー エクスペリエンスとデータ操作が向上します。@@igComponent 改ページは、[`paging`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#paging) および [` perPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#perpage) 入力で設定できます。他の Angular Material テーブルと同様に、@@igComponent の改ページはカスタム ページのテンプレートをサポートします。

## Angular 改ページの例

次の例は、@@igComponent 改ページを表しており、`items per page` のオプションの使用法と、ページングを有効にする方法を示しています。ユーザーは、[最後のページに移動] ボタンと [最初のページに移動] ボタンを使用して、@@igComponent ページをすばやくナビゲートすることもできます。

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-paging-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-paging-sample' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://jp.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="treegrid-paging-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-paging' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://jp.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:580px">
    <iframe id="hierarchical-grid-paging-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-paging' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://jp.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-paging-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}

[`paging`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#paging) は機能が有効かどうかを制御する Boolean プロパティです。[`perPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#perpage) プロパティはページごとに表示レコードを制御します。以下のように @@igComponent でページングを有効にします。

```html
<@@igSelector #@@igObjectRef [data]="data" [paging]="true" [perPage]="10" height="500px" width="100%" displayDensity="cosy">
</@@igSelector>
```

## Angular 改ページのテンプレート
ページング領域でテンプレート化がサポートされますが、初期化でテンプレート参照を @@igComponent に渡す必要があります。以下は、ページングが入力によって制御されるテンプレートの例です。

```html
<ng-template #myTemplate let-grid>
    Current page: {{ @@igObjectRef.page }}
    <input type="number" [(ngModel)]="grid.page" />
    Total pages: {{ @@igObjectRef.totalPages }}
</ng-template>

<@@igSelector [paging]="true" [paginationTemplate]="myTemplate">
    ...
</@@igSelector>
```

ページングは、@@igComponent API によって [`paginate`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#paginate)、[`previousPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#previouspage)、[`nextPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#nextpage) メソッドおよび [`page`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#page)、[`perPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#perpage) と [`totalRecords`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#totalrecords) 入力を使用してプログラムで実行することもできます。ここで page は現在のページを設定できます。perPage は 1 ページに表示される項目の数を設定できます。totalRecords はグリッドにあるレコードの数を設定できます。`TotalRecords` プロパティは、リモート データのページングがあり、リモート レコードの合計数に基づいてページの数を変更する場合に役に立ちます。ページングを使用しており、すべてのデータがグリッドに渡される場合、totalRecords プロパティの値は提供されたデータソースの長さにデフォルトで設定されることに注意してください。totalRecords が設定されている場合、データソースに基づいてデフォルトの長さよりも優先されます。

```typescript
// Go to page 6
this.@@igObjectRef.paginate(5);

// Go to previous/next page
this.@@igObjectRef.previousPage();
this.@@igObjectRef.nextPage();

// Check for first/last page
this.@@igObjectRef.isFirstPage;
this.@@igObjectRef.isLastPage;

// Get the number of pages
this.@@igObjectRef.totalPages;

// Change the number of records per page
this.@@igObjectRef.perPage = 25;

// Enables/disables paging
this.@@igObjectRef.paging = false;

//  Set the total number of records that are in the grid. Default value is the length of the provided data.
this.@@igObjectRef.totalRecords = 30;
```

@@if (igxName === 'IgxGrid') {
## グループ化によるページング
グループ行は、データ行とともにページング プロセスに関係します。それらは各ページのページ サイズにカウントされます。折りたたまれた行はページング プロセスに含まれません。
ページングとグループ化の統合については、[グループ化](groupby.html#ページングによるグループ化)のトピックで説明しています。
}

## Angular の再利用可能なページネータ コンポーネント
8.1.0 リリースでは、新しいコンポーネント `igx-paginator` が導入されました。このコンポーネントは、現在のページャーを置き換え、スタンドアロン コンポーネントとしても使用できます。
`igx-paginator` は、ページングを詳細なカスタマイズが可能な入力および出力プロパティを公開します。

| 入力           |      説明                           |
|-----------------|:------------------------------------------:|
| displayDensity  | 改ページの表示密度を設定します。 |
| dropdownEnabled | 有効状態をドロップダウンに設定します。 |
| dropdownHidden  | 非表示状態をドロップダウンに設定します。 |
| page            | 現在のページを設定します。 |
| pagerEnabled    | 有効状態をページャーに設定します。 |
| pagerHidden     | 非表示状態をページャーに設定します。 |
| perPage         | ページごとに表示される項目数を設定します。 |
| selectOptions   | ページごとの項目のカスタム オプションを設定します。 |
| totalRecords    | 合計レコード数を設定します。 |
| resourceStrings | リソース文字列を設定します。デフォルトで EN リソースを使用します。 |


| 出力          |      説明                           |
|-----------------|:------------------------------------------:|
| pageChange      |  イベントは、現在のページが変更されたときに発生されます。 |
| perPageChange   |  イベントは、ページごとの項目数が変更されたときに発生されます。 |

### 使用方法
以下の例では、`igx-paginator` コンポーネントは `igx-grid` コンポーネントとともに使用されますが、ページング機能が必要な場合は、他のコンポーネントとともに使用できます。

```html
<igx-grid #grid [data]="data" [paging]="true" [perPage]="10" [paginationTemplate]="pager">
...
</igx-grid>

<ng-template #pager>
    <igx-paginator #paginator [(page)]="grid.page" [totalRecords]="grid.totalRecords" [(perPage)]="grid.perPage"
            [dropdownHidden]="isDropdownHidden" [pagerHidden]="isPagerHidden"
            [selectOptions]="selectOptions" [displayDensity]="grid.displayDensity">
    </igx-paginator>
</ng-template>
```

### ページネータ コンポネント デモ
<div class="sample-container loading" style="height:600px">
    <iframe id="grid-pager-sample-iframe" class="lazyload" src='{environment:demosBaseUrl}/grid/grid-pager-sample' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-pager-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-pager-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

<div class="divider--half"></div>

## リモート ページング
リモート ページングは、データ取得を担当するサービスと、グリッドの構築とデータ サブスクリプションを担当するコンポーネントを宣言することで実現できます。詳細については、[@@igComponent リモート データ操作](remote-data-operations.md#remote-paging)トピックをご覧ください。


@@if (igxName === 'IgxGrid') {
## カスタム テンプレートのリモート ページング

独自のページング動作を定義するために、ページング テンプレートを使用してカスタム ロジックを追加できます。[このセクション](remote-data-operations.md#カスタム-テンプレートのリモート-ページング)では、上記を実証するために、リモート ページングの例を拡張する方法を説明します。
}

## ローカライズ
最小限のコードで、ページング コンポーネントのすべての文字列を簡単にローカライズできます。特定のページング インスタンスをローカライズするには、入力プロパティ [resourceStrings]({environment:angularApiUrl}/classes/@@igTypeDoc.html#resourceStrings) を使用します。次の手順に従います。 

**手順 1** - `IPaginatorResourceStrings`  インターフェースと [changei18n]({environment:angularApiUrl}/#changei18n) 関数をインポートします:

```ts
import { IPaginatorResourceStrings, changei18n } from "igniteui-angular";
```

**手順 2** - ページング リソース文字列を定義します:

```ts
private paginatorResourceStrings: IPaginatorResourceStrings = {
    igx_paginator_label: "Records per page:",
    igx_paginator_first_page_button_text: "Custom first page text",
    igx_paginator_last_page_button_text: "Custom last page text",
    igx_paginator_next_page_button_text: "Custom next page text",
    igx_paginator_previous_page_button_text: "Custom previous page text",
    igx_paginator_pager_text: "out of"
};
```


**手順 3** - app.module レベルでコンポーネントのグローバル i18n を変更するために、オブジェクトをパラメーターとして [changei18n]({environment:angularApiUrl}/#changei18n) 関数に渡します。これにより、アプリケーションのすべてのページング コンポーネントのリソース文字列が変更されます:

```ts
public ngOnInit(): void {
    changei18n(this.paginatorResourceStrings as any);
}
```

リソース文字列を特定のページング コンポーネントに変更するには、@ ViewChild を使用して、ページが再描画される前に呼び出されるコールバックを使用して、`requestAnimationFrame` メソッド内で目的の [resourceStrings]({environment:angularApiUrl}/classes/@@igTypeDoc.html#resourceStrings) を設定します。新しくインスタンス化されたオブジェクトを [resourceStrings]({environment:angularApiUrl}/classes/@@igTypeDoc.html#resourceStrings) プロパティに設定すると、指定されたコンポーネントのインスタンスのみがローカライズされます。

```ts
@ViewChild("paginator", { read: IgxPaginatorComponent, static: false }) public paginator: IgxPaginatorComponent;
...

public ngOnInit(): void {
    requestAnimationFrame(() => {
        this.paginator.resourceStrings = this.paginatorResourceStrings;
    });
}
```

<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-pager-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Codesandbox デモ</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-pager-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz デモ</button>
</div>

## Angular の改ページ スタイリング

ページネータのスタイル設定を始めるには、すべてのテーマ関数とコンポーネントミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
// custom-grid-paging-style.component.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

最も簡単な方法で [`igx-grid-paginator-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-paginator-theme) を拡張し `$text-color`、`$background-color` および `$border-color` パラメータを受け入れる新しいテーマを作成します。

```scss
$dark-grid-paginator: igx-grid-paginator-theme(
    $text-color: #F4D45C,
    $background-color: #575757,
    $border-color: #292826
);
```

`igx-grid-paginator-theme` はページング コンテナの色の制御のみですが、ポケットベル UI のボタンには影響しません。これらのボタンにスタイル設定するために、新しいボタン テーマを作成しましょう。

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

最後の手順は、それぞれのテーマを持つコンポーネント mixin を**含める**ことです。

```scss
@include igx-grid-paginator($dark-grid-paginator);
.igx-grid-paginator__pager {
    @include igx-button($dark-button);
}
```

>[!NOTE]
>igx-button mixin を `.igx-grid-paginator__pager` 内でスコープして、ページネータ ボタンのみにスタイルが設定されるようにします。そうでない場合は、グリッド内の他のボタンも影響を受けます。

 >[!NOTE]
 >コンポーネントが [`Emulated`](../themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

```scss
:host {
    ::ng-deep {
        @include igx-grid-paginator($dark-grid-paginator);
        .igx-grid-paginator__pager {
            @include igx-button($dark-button);
        }
    }
}
```

### カラーパレットの定義

上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) および [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$yellow-color: #F9D342;
$black-color: #292826;

$dark-palette: igx-palette($primary: $black-color, $secondary: $yellow-color);
```

[`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取り出すことができます。

```scss
$dark-grid-paginator: igx-grid-paginator-theme(
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
>`igx-color` および `igx-palette` は、色を生成および取得するための重要な機能です。使い方の詳細については[`パレット`](../themes/palette.md)のトピックを参照してください。

### スキーマの使用

テーマ エンジンには [**スキーマ**](../themes/schemas.md)を使用できる利点があり、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用するための方法です。

すべてのコンポーネントに提供されている 2 つの定義済みスキーマ (この場合は ([`dark-grid-pagination`]({environment:sassApiUrl}/index.html#variable-_dark-grid-pagination) と [`dark-button`]({environment:sassApiUrl}/index.html#variable-_dark-button) スキーマ) の 1 つを拡張します。

```scss
// Extending the dark paginator schema
$dark-grid-paginator-schema: extend($_dark-grid-pagination,
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
    igx-grid-paginator: $dark-grid-paginator-schema,
    igx-button: $dark-button-schema
));

// Defining grid-paginator-theme with the global dark schema
$dark-grid-paginator: igx-grid-paginator-theme(
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
### 改ページ スタイルの例

<div class="sample-container loading" style="height:560px">
    <iframe id="custom-grid-paging-style-iframe" data-src='{environment:demosBaseUrl}/grid/custom-grid-paging-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="custom-grid-paging-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="custom-grid-paging-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>
}

@@if (igxName === 'IgxHierarchicalGrid'){
### デモ
<div class="sample-container loading" style="height:560px">
    <iframe id="custom-hGrid-paging-style-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-paging-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" class="codesandbox-btn" data-iframe-id="custom-hGrid-paging-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示
    </button>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="custom-hGrid-paging-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示
    </button>
</div>
}


@@if (igxName === 'IgxTreeGrid'){
### デモ
<div class="sample-container loading" style="height:560px">
    <iframe id="custom-treegrid-paging-style-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-paging-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" class="codesandbox-btn" data-iframe-id="custom-treegrid-paging-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示
    </button>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="custom-treegrid-paging-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示
    </button>
</div>
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

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
