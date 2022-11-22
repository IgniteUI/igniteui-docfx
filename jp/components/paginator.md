---
title: Angular Paginator Example – Ignite UI for Angular
_description: Configure Angular pagination and create custom pages in the Angular Material table by Ignite UI, get data for the requested pages with variety of angular events.
_keywords: ページネーター, igniteui for angular, インフラジスティックス
_language: ja
---

# Angular Paginator Overview
Pagination in Angular is one of the most useful features that the platform offers to developers when working with huge data sets. The purpose of Angular Paginator is to split and distribute a high volume of data collection into several pages, thus, delivering better UX whilst displaying paged information and items in an easier to compare and understand way.  

Usually, the Angular Paginator component shows page-number or total-records. 

Ignite UI for Angular Pagination allows us to divide a set of data into a number of similar pages. This method of pagination is particularly well-suited for large data-sets and "infinite" scrolling user interfaces, that is why the paginator is typically used with a list of items or data table. The Pagination in Angular enables the user to select a specific page from a range of pages and to determine how many records should see on each page.

## Angular Paginator の例

The following Angular Pagination example shows a Paginator template demonstrating how users can navigate through 4 pages with different items and select the number of items to be displayed from a drop-down menu. 

<code-view style="height: 600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/pagination/main-pagination" alt="Angular Paginator の例">
</code-view>

<div class="divider--half"></div>

## How To Use Angular Paginator With Ignite UI

各ページネーター インスタンスには以下が必要です。

- ページごとの項目数 (デフォルト値は 15 です)。
- ページングされている項目の合計数

Also by default the current page is set to 0 when the Angular paginator component is initialized but this can be changed through **page** property.

```html
<igx-paginator #paginator [totalRecords]="120" [perPage]="25">
</igx-paginator>
```

## Angular ページネーションのテンプレート

デフォルトのページネーション テンプレートは 2 つの主要部分で構成されます。1 つ目はドロップダウンで各ページに表示される項目の数を定義できます。2 つ目はナビゲーション ボタンでページ間を簡単に移動できます。

また、`igx-paginator-content` 参照が `igx-paginator` 内で定義されている場合、ページング領域はユーザーによるカスタム テンプレートの追加をサポートします。

```html
<igx-paginator #paginator>
    <igx-paginator-content>
        ...
    </igx-paginator-content>
</igx-paginator>
```

さらに、[`IgxPageSizeSelectorComponent`]({environment:angularApiUrl}/classes/IgxPageSizeSelectorComponent.html) と [`IgxPageNavigationComponent`]({environment:angularApiUrl}/classes/IgxPageNavigationComponent.html) が導入され、ページネーター コンポーネントでカスタム コンテンツを定義できるようになりました。以下に例を示します。前者はページ サイズに対応するドロップダウン要素とラベルを追加し、後者はすべてのアクション ボタンでページ ナビゲーションを処理します。

```html
<igx-paginator #paginator>
	<igx-paginator-content>
		<igx-page-size></igx-page-size>
		<igx-page-nav></igx-page-nav>
	</igx-paginator-content>
</igx-paginator>
```

ページングは、[`paginate`]({environment:angularApiUrl}/classes/igxpaginatorcomponent.html#paginate)、[`previousPage`]({environment:angularApiUrl}/classes/igxpaginatorcomponent.html#previouspage)、[`nextPage`]({environment:angularApiUrl}/classes/igxpaginatorcomponent.html#nextpage) メソッドおよび [`page`]({environment:angularApiUrl}/classes/igxpaginatorcomponent.html#page)、[`perPage`]({environment:angularApiUrl}/classes/igxpaginatorcomponent.html#perpage)、[`totalRecords`]({environment:angularApiUrl}/classes/igxpaginatorcomponent.html#totalrecords) 入力を使用して、Paging API (以下のセクションで詳細に説明されています) を介してプログラムで実行することもできます。ここで *page* は現在のページを設定できます。*perPage* は 1 ページに表示される項目の数を設定できます。*totalRecords* はグリッドにあるレコードの数を設定できます。`TotalRecords` プロパティは、リモート データのページングがあり、リモート レコードの合計数に基づいてページの数を変更する場合に役に立ちます。ページングを使用しており、すべてのデータがグリッドに渡される場合、`totalRecords` プロパティの値は提供されたデータソースの長さにデフォルトで設定されることに注意してください。`totalRecords` が設定されている場合、データソースに基づいてデフォルトの長さよりも優先されます。

## ページング API
| 入力           |      説明                           |
|-----------------|:------------------------------------------:|
| displayDensity  | ページネーションの表示密度を取得または設定します。 |
| page            | 現在のページをを取得または設定します。 |
| perPage         | ページごとに表示される項目数を取得または設定します。 |
| selectOptions   | パジネーターの Select 要素でカスタム オプションを取得または設定します。デフォルトの選択値 [5、10、15、25、50、100、500] |
| totalRecords    | 合計レコード数を取得または設定します。 |
| totalPages      | 合計ページ数を取得または設定します。 |
| resourceStrings | リソース文字列を取得または設定します。デフォルトで EN リソースを使用します。 |
| overlaySettings | カスタム OverlaySettings を取得/設定します。 |

| 出力          |      説明                           |
|-----------------|:------------------------------------------:|
| perPageChange   | ページネーターの `perPage` プロパティ値が変更されたときに発生します。 |
| pageChange      | 現在のページが変更されたときに発生されます。 |
| paging          | ページングが実行さる前に発生されます。キャンセル可能。|
| pagingDone      | ページングが実行された後に発生されます。 |


## Angular Paginator Localization
最小限のコードで、ページング コンポーネントのすべての文字列を簡単にローカライズできます。特定のページング インスタンスをローカライズするには、[resourceStrings]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#resourceStrings) 入力プロパティを使用します。

**手順 1** - `IPaginatorResourceStrings` インターフェースと [changei18n]({environment:angularApiUrl}/#changei18n) 関数をインポートします:

```ts
import { IPaginatorResourceStrings, changei18n } from "igniteui-angular";
```

**手順 2** - ページング リソース文字列を定義します。

```ts
private paginatorResourceStrings: IPaginatorResourceStrings = {
    igx_paginator_label: 'Records per page:',
    igx_paginator_first_page_button_text: 'Custom first page text',
    igx_paginator_last_page_button_text: 'Custom last page text',
    igx_paginator_next_page_button_text: 'Custom next page text',
    igx_paginator_previous_page_button_text: 'Custom previous page text',
    igx_paginator_pager_text: 'out of'
};
```


**手順 3** - app.module レベルでコンポーネントのグローバル i18n を変更するために、オブジェクトをパラメーターとして [changei18n]({environment:angularApiUrl}/#changei18n) 関数に渡します。これにより、アプリケーションのすべてのページング コンポーネントのリソース文字列が変更されます。

```ts
public ngOnInit(): void {
    changei18n(this.paginatorResourceStrings as any);
}
```

リソース文字列を特定のページング コンポーネントに変更するには、@ViewChild を使用して、ページが再描画される前に呼び出されるコールバックを使用して、`requestAnimationFrame` メソッド内で目的の [resourceStrings]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#resourceStrings) を設定します。新しくインスタンス化されたオブジェクトを [resourceStrings]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#resourceStrings) プロパティに設定すると、指定されたコンポーネントのインスタンスのみがローカライズされます。

```ts
@ViewChild('paginator', { read: IgxPaginatorComponent, static: false }) public paginator: IgxPaginatorComponent;
...

public ngOnInit(): void {
    requestAnimationFrame(() => {
        this.paginator.resourceStrings = this.paginatorResourceStrings;
    });
}
```


## API リファレンス
* [IgxPaginator API]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html)
* [IgxPaginator スタイル]({environment:sassApiUrl}/index.html#function-paginator-theme)

## その他のリソース
<div class="divider--half"></div>

* [グリッド](grid/grid.md)
* [仮想化とパフォーマンス](grid/virtualization.md)
* [フィルタリング](grid/filtering.md)
* [ソート](grid/sorting.md)
* [集計](grid/summaries.md)


<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
