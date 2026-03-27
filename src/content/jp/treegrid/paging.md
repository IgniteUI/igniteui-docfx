---
title: Angular Grid ページング | Angular ページネーション テーブル | インフラジスティックス
_description: Angular ページネーションを構成して Ignite UI の Angular テーブルにカスタム ページを作成し、さまざまな Angular イベントで要求されたページのデータを取得します。
_keywords: angular ページネーション, igniteui for angular, インフラジスティックス
_license: commercial
_canonicalLink: grid/paging
_language: ja
---



# Angular Tree Grid ページネーション

ページネーションは、大量のデータセットを類似したコンテンツを持つ一連のページに分割するために使用されます。Angular テーブルのページネーションにより、ユーザー エクスペリエンスとデータ操作が向上します。Tree Grid ページネーションは、列の追加と同様に、`igx-paginator` タグを定義することにより、グリッド ツリーに投影された個別のコンポーネントを介して構成できます。他の Angular テーブルと同様に、Tree Grid のページネーションはカスタム ページのテンプレートをサポートします。

## Angular ページネーションの例

次の例は、Tree Grid ページネーションを表しており、`items per page` のオプションの使用法と、ページングを有効にする方法を示しています。ユーザーは、[最後のページに移動] ボタンと [最初のページに移動] ボタンを使用して、Tree Grid ページをすばやくナビゲートすることもできます。



<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-paging/" alt="Angular ページネーションの例">
</code-view>




[`igx-paginator`](../paginator.md) コンポーネントを追加すると、機能が存在するかどうかが制御されます。トグル プロパティを持つ単純な `*ngIf` を使用して、機能を有効/無効にできます。[`perPage`]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#perPage) 入力は、ページごとに表示されるレコードを制御します。以下のように Tree Grid でページングを有効にします。

```html
<igx-tree-grid #treeGrid [data]="data" [height]="'500px'" [width]="'100%'">
    <igx-paginator [perPage]="10">
    </igx-paginator>
</igx-tree-grid>
```


例:

```html
<igx-paginator #paginator [totalRecords]="20">
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



## 使用方法




以下の例では、`igx-paginator` コンポーネントが `igx-tree-grid` コンポーネントと一緒に使用されていますが、ページング機能が必要な場合は、他のコンポーネントと一緒に使用できます。

```html
<igx-tree-grid #treeGrid [data]="data">
    <igx-paginator #paginator [(page)]="treeGrid.page" [totalRecords]="treeGrid.length" [(perPage)]="10"
            [selectOptions]="selectOptions">
    </igx-paginator>
</igx-tree-grid>
```







### ページネーター コンポーネントのデモ




<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-reusable-paginator/" >
</code-view>




<div class="divider--half"></div>

## リモート ページング

リモート ページングは、データ取得を担当するサービスと、グリッドの構築とデータ サブスクリプションを担当するコンポーネントを宣言することで実現できます。詳細については、[`Tree Grid リモート データ操作`](remote-data-operations.md#リモート-ページング)トピックをご覧ください。



## スタイル設定

ページネーターのスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最も簡単な方法で [`paginator-theme`]({environment:sassApiUrl}/themes#function-paginator-theme) を拡張し `$text-color`、`$background-color` および `$border-color` パラメータを受け入れる新しいテーマを作成します。

```scss
$dark-paginator: paginator-theme(
  $text-color: #d0ab23;,
  $background-color: #231c2c,
  $border-color: #d0ab23;
);
```

`paginator-theme` はページング コンテナーの色の制御のみですが、ポケットベル UI のボタンには影響しません。これらのボタンにスタイル設定するために、新しいアイコン ボタン テーマを作成しましょう。

```scss
$dark-button: flat-icon-button-theme(
  $foreground: #d0ab23,
  $hover-foreground: #231c2c,
  $hover-background: #d0ab23,
  $focus-foreground: #231c2c,
  $focus-background: #d0ab23,
  $disabled-foreground: #9b7829
);
```

>[!NOTE]
>上記のようにカラーの値をハードコーディングする代わりに、[`palette`]({environment:sassApiUrl}/palettes#function-palette) および [`color`]({environment:sassApiUrl}/palettes#function-color) 関数を使用してカラーに関してより高い柔軟性を実現することができます。使い方の詳細については[`パレット`](../themes/sass/palettes.md)のトピックをご覧ください。

最後にそれぞれのテーマを持つコンポーネント ミックスインを**含める**ことです。

```scss
:host {
    @include tokens($dark-paginator);

    .igx-grid-paginator__pager {
        @include tokens($dark-button);
    }
}
```

>[!NOTE]
>作成した **icon-button-theme** を `.igx-paginator__pager` 内に含めて、ページネーター ボタンのみにスタイルを設定します。そうでない場合は、グリッド内の他のアイコン ボタンも影響を受けます。

>[!NOTE]
>コンポーネントが [`Emulated`](../themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、ボタンのようにページング コンテナー内にあるコンポーネントのスタイルを設定するには、`::ng-deep` を使用してこのカプセル化を`解除する`必要があります。

```scss
:host {
  @include tokens($dark-paginator);

  igx-paginator {
    ::ng-deep {
      @include tokens($dark-button);
    }
  }
}
```








### デモ

<code-view style="height:560px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-paging-style/" >
</code-view>



## API リファレンス

- [IgxTreeGridComponent API]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
- [IgxTreeGridComponent スタイル]({environment:sassApiUrl}/themes#function-grid-theme)
- [IgxGridPaginator スタイル]({environment:sassApiUrl}/themes#function-paginator-theme)

## その他のリソース

<div class="divider--half"></div>

- [Tree Grid 概要](tree-grid.md)
- [Paginator](../paginator.md)
- [仮想化とパフォーマンス](virtualization.md)
- [フィルタリング](filtering.md)
- [ソート](sorting.md)
- [集計](summaries.md)
- [列移動](column-moving.md)
- [列ピン固定](column-pinning.md)
- [列サイズ変更](column-resizing.md)
- [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
