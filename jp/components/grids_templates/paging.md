@@if(igxName === 'IgxGrid') {
---
title: Angular Grid ページング | Angular ページネーション テーブル | インフラジスティックス
_description: Angular ページネーションを構成して Ignite UI の Angular テーブルにカスタム ページを作成し、さまざまな Angular イベントで要求されたページのデータを取得します。
_keywords: angular ページネーション, igniteui for angular, インフラジスティックス
_language: ja
---
}
@@if(igxName !== 'IgxGrid') {
---
title: Angular Grid ページング | Angular ページネーション テーブル | インフラジスティックス
_description: Angular ページネーションを構成して Ignite UI の Angular テーブルにカスタム ページを作成し、さまざまな Angular イベントで要求されたページのデータを取得します。
_keywords: angular ページネーション, igniteui for angular, インフラジスティックス
_canonicalLink: grid/paging
_language: ja
---
}

# Angular @@igComponent ページネーション
ページネーションは、大量のデータセットを類似したコンテンツを持つ一連のページに分割するために使用されます。Angular テーブルのページネーションにより、ユーザー エクスペリエンスとデータ操作が向上します。@@igComponent ページネーションは、列の追加と同様に、`igx-paginator` タグを定義することにより、グリッド ツリーに投影された個別のコンポーネントを介して構成できます。他の Angular テーブルと同様に、@@igComponent のページネーションはカスタム ページのテンプレートをサポートします。

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

[`igx-paginator`](../paginator.md) コンポーネントを追加すると、機能が存在するかどうかが制御されます。トグル プロパティを持つ単純な `*ngIf` を使用して、機能を有効/無効にできます。[`perPage`]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#perPage) 入力は、ページごとに表示されるレコードを制御します。以下のように @@igComponent でページングを有効にします。

```html
<@@igSelector #@@igObjectRef [data]="data" [height]="'500px'" [width]="'100%'">
    <igx-paginator [perPage]="10">
    </igx-paginator>
</@@igSelector>
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
            [selectOptions]="selectOptions">
    </igx-paginator>
</igx-grid>
```
}

@@if (igxName === 'IgxTreeGrid') {
以下の例では、`igx-paginator` コンポーネントが `igx-tree-grid` コンポーネントと一緒に使用されていますが、ページング機能が必要な場合は、他のコンポーネントと一緒に使用できます。

```html
<igx-tree-grid #treeGrid [data]="data">
    <igx-paginator #paginator [(page)]="treeGrid.page" [totalRecords]="treeGrid.length" [(perPage)]="10"
            [selectOptions]="selectOptions">
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
$dark-button: icon-button-theme(
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
@include css-vars($dark-paginator);

.igx-grid-paginator__pager {
  @include css-vars($dark-button);
}
```

>[!NOTE]
>作成した **icon-button-theme** を `.igx-paginator__pager` 内に含めて、ページネーター ボタンのみにスタイルを設定します。そうでない場合は、グリッド内の他のアイコン ボタンも影響を受けます。

>[!NOTE]
>コンポーネントが [`Emulated`](../themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、ボタンのようにページング コンテナー内にあるコンポーネントのスタイルを設定するには、`::ng-deep` を使用してこのカプセル化を`解除する`必要があります。

```scss
@include css-vars($dark-paginator);

:host {
  igx-paginator {
    ::ng-deep {
      @include css-vars($dark-button);
    }
  }
}
```

@@if (igxName === 'IgxGrid'){
### ページネーション スタイルの例


<code-view style="height:560px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/custom-grid-paging-style" >
</code-view>

<div class="divider--half"></div>
}

@@if (igxName === 'IgxHierarchicalGrid'){
### デモ

<code-view style="height:560px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-paging-style" >
</code-view>

}


@@if (igxName === 'IgxTreeGrid'){
### デモ

<code-view style="height:560px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-paging-style" >
</code-view>

}

## API リファレンス
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/themes#function-grid-theme)
* [IgxGridPaginator スタイル]({environment:sassApiUrl}/themes#function-paginator-theme)

## その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [Paginator](../paginator.md)
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
