---
title: Angular Icon Service – Ignite UI for Angular | インフラジスティックス | MITライセンス
_description: Ignite UI for Angular Icon Service を使用して、様々なアイコンおよびフォント セットを統合して交互に使用し、カスタム色を定義できます。 
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Icon コンポーネント, Angular Icon コントロール, Angular Icon サービス
_license: MIT
_language: ja
---

# Angular Icon Service (アイコン サービス) の概要

<p class="highlight">Ignite UI for Angular アイコン サービスを使用すると、開発者はさまざまなソースから新しいアイコンを UI に追加できます。</p>

## 概要

Ignite UI for Angular アイコン サービスには、ユーザーがアイコン ファミリを作成および管理できるようにするいくつかのメソッドが用意されています。

アイコン サービスは、Ignite UI for Angular パッケージから直接インポートできます。

```ts
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxIconService } from 'igniteui-angular/core';


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ IgxIconComponent ]
})
export class AppComponent implements OnInit {
    constructor(public iconService: IgxIconService) {}
}
```

<code-view style="height: 180px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-display/icon-service/" alt="Icon Service の例">
</code-view>

### アイコン ファミリの追加

デフォルトでは、アイコン サービスはデフォルトのファミリを `material` に設定します。

新しいアイコン ファミリを追加するには、アイコン サービスの `setFamily` メソッドを使用します。これは、`igx-icon` コンポーネントに描画するアイコンを指示するメタデータを含むファミリ エントリを作成します。

`setFamily` メソッドの動作を説明するために、実際の例を使用しましょう。

```ts
/** 
* The icon service associates a given family name (provided by the user) 
* with a specific CSS class (as documented in the providing icon font) 
* and corresponding icon name (documented in the icon font).
* NOTE: Material is already the default family.
*/ 
iconService.setFamily('material', { className: 'material-icons', type: 'liga' });
iconService.setFamily('fa-solid', { className: 'fas', type: 'font', prefix: 'fa' });
```

上記の例では、2 つのアイコン ファミリを作成します: 'material' と 'fa-solid'。タイプが異なり、`material` ファミリは `liga` として登録され、`fa-solid` ファミリは `font` として登録されています。
2 つの違いは、`igx-icon` コンポーネントがそれらを描画する方法です。通常、[Font Awesome](https://fontawesome.com/) は、クラス名を使用して **font** ファミリのコード ポイントを指定するため、そのタイプを `font` に設定します。アイコンを描画するためにコード ポイントに依存する必要がある場合は、常にタイプを `font` に設定する必要があります。[Material Icons](https://material.io/icons) ファミリは依然としてフォント ファミリですが、アイコンを表示する標準的な方法は、特定のコード ポイントを指すクラス名ではなく、`ligature` 名を提供することです。そのため、タイプを `liga` に設定する必要があります。3 番目のファミリ タイプである `svg` は、アイコン サービスを通じて登録される SVG で構成されるアイコン ファミリ用に予約されています。

上記の 2 つのフォント ファミリを登録したら、`igx-icon` コンポーネントを介して標準化された方法でアイコンを使用できるようになりました。

```html
<igx-icon family="material" name="home"></igx-icon>
<igx-icon family="fa-solid" name="car"></igx-icon>
```

`material` ファミリの場合は、名前として合字 `name` を使用し、`fa-solid` ファミリの場合は、名前として `className` (`fa-car`) を指定していることに気付いたかもしれません。ただし、前の手順でアイコン ファミリを登録したときに指定した `fa-` プレフィックスは削除します。

### SVG アイコンの追加

Ignite UI for Angular アイコン サービスを使用すると、SVG  画像をファミリに関連付けて名前を付けることができるため、フォントベースのアイコンと同じように `igx-icon` コンポーネントを介して含めることができます。SVG は、文字列または SVG アセットへの絶対 URI を介して解決する必要があります。

```ts
// Add a new 'material' icon called 'my-icon' from an SVG file
iconService.addSvgIcon('my-icon', 'my-icon.svg', 'material');

// Add a new 'fa-solid' icon called 'my-icon' from string 
iconService.addSvgIconFromText('my-icon', '<svg>...</svg>', 'fa-solid');
```

マークアップ:

```html
<igx-icon family="material" name="my-icon"></igx-icon>
<igx-icon family="fa-solid" name="my-icon"></igx-icon>
```

カスタム SVG アイコンを `liga` および `font` タイプのファミリに追加していることに注意してください。これが可能なのは、`addSvgIcon` メソッドと `addSvgIconFromText` メソッドがアイコンを `svg` タイプとして暗黙的に登録し、`igx-icon` コンポーネントが SVG を正しく描画できるようにするためです。

## メタ ファミリ

Ignite UI for Angular アイコン サービスを使用すると、フォント アイコンのファミリを設定するか、共通の傘の下に SVG を追加して追加されたアイコンを組み合わせた疑似ファミリ マップを作成し、簡単に参照できるようにすることができます。

```ts
// The `setIconRef` sets an icon reference in the icon map,
// assuming material and fa-solid have been added as families,
iconService.setIconRef('home', 'my-family', { family: 'material', name: 'home' });
iconService.setIconRef('home-alt', 'my-family', { family: 'fa-solid', name: 'home' });
iconService.setIconRef('car', 'my-family', { family: 'fa-solid', name: 'car' });
```

マークアップ:

```html
<igx-icon family="my-family" name="home"></igx-icon>
<igx-icon family="my-family" name="home-alt"></igx-icon>
<igx-icon family="my-family" name="car"></igx-icon>
```

## アイコンの取得

元のアイコン `type`、`name`、`family`、および `className` を読み取るために、特定の `family` とアイコン `name` のアイコンを取得できます。

```ts
const { family, className, name, type } = iconService.getIcon('my-family', 'car');

console.log(family); // -> 'fa-solid'
console.log(className); // -> 'fas'
console.log(name); // -> 'fa-car'
console.log(type); // -> 'font'
```

## 内部使用

Ignite UI for Angular バージョン 18.1.0 以降では、新しい `setFamily` メソッドが追加されました。これにより、アイコン サービスで新しいアイコン ファミリを作成し、それらを CSS クラス、タイプ、さらにはプレフィックスに関連付けることができます。さらに、内部で使用されるアイコンはすべて、エイリアス名を持つ新しい `default` ファミリで参照によって宣言されるようになりました (下の表を参照)。

| エイリアス                            | ターゲット アイコン           | ターゲット ファミリ |
|----------------------------------|-----------------------|---------------|
| **add**                          | add                   | material      |
| **add_child**                    | add-child             | imx-icons     |
| **add_row**                      | add-row               | imx-icons     |
| **arrow_back**                   | arrow_back            | material      |
| **arrow_drop_down**              | arrow_drop_up         | material      |
| **arrow_forward**                | arrow_forward         | material      |
| **arrow_next**                   | chevron_right         | material      |
| **arrow_prev**                   | chevron_left          | material      |
| **case_sensitive**               | case-sensitive        | imx-icons     |
| **carousel_next**                | arrow_forward         | material      |
| **carousel_prev**                | arrow_back            | material      |
| **chevron_left**                 | chevron_left          | material      |
| **chevron_right**                | chevron_right         | material      |
| **clock**                        | access_time           | material      |
| **close**                        | close                 | material      |
| **collapse**                     | expand_less           | material      |
| **confirm**                      | check                 | material      |
| **date_range**                   | date_range            | material      |
| **delete**                       | delete                | material      |
| **drag_indicator**               | drag_indicator        | material      |
| **edit**                         | edit                  | material      |
| **error**                        | error                 | material      |
| **expand**                       | expand_more           | material      |
| **expand_more**                  | expand_more           | material      |
| **file_download**                | file_download         | material      |
| **filter_all**                   | select-all            | imx-icons     |
| **filter_before**                | is-before             | imx-icons     |
| **filter_contains**              | contains              | imx-icons     |
| **filter_does_not_contain**      | does-not-contain      | imx-icons     |
| **filter_empty**                 | is-empty              | imx-icons     |
| **filter_equal**                 | equals                | imx-icons     |
| **filter_false**                 | is-false              | imx-icons     |
| **filter_greater_than**          | greater-than          | imx-icons     |
| **filter_greater_than_or_equal** | greater-than-or-equal | imx-icons     |
| **filter_in**                    | is-in                 | imx-icons     |
| **filter_last_month**            | last-month            | imx-icons     |
| **filter_last_year**             | last-year             | imx-icons     |
| **filter_less_than**             | less-than             | imx-icons     |
| **filter_less_than_or_equal**    | less-than-or-equal    | imx-icons     |
| **filter_next_month**            | next-month            | imx-icons     |
| **filter_next_year**             | next-year             | imx-icons     |
| **filter_not_empty**             | not-empty             | imx-icons     |
| **filter_not_equal**             | not-equal             | imx-icons     |
| **filter_not_null**              | is-not-null           | imx-icons     |
| **filter_null**                  | is-null               | imx-icons     |
| **filter_starts_with**           | starts-with           | imx-icons     |
| **filter_this_month**            | this-month            | imx-icons     |
| **filter_this_year**             | this-year             | imx-icons     |
| **filter_today**                 | today                 | imx-icons     |
| **filter_true**                  | is-true               | imx-icons     |
| **filter_yesterday**             | yesterday             | imx-icons     |
| **first_page**                   | first_page            | material      |
| **group_work**                   | group_work            | material      |
| **hide**                         | visibility_off        | material      |
| **import_export**                | import_export         | material      |
| **input_collapse**               | arrow_drop_up         | material      |
| **input_clear**                  | clear                 | material      |
| **input_expand**                 | arrow_drop_down       | material      |
| **jump_down**                    | jump-down             | imx-icons     |
| **jump_up**                      | jump-up               | imx-icons     |
| **last_page**                    | last_page             | material      |
| **more_vert**                    | more_vert             | material      |
| **next**                         | navigate_next         | material      |
| **pin**                          | pin-left              | imx-icons     |
| **prev**                         | navigate_before       | material      |
| **refresh**                      | refresh               | material      |
| **remove**                       | cancel                | material      |
| **search**                       | search                | material      |
| **selected**                     | done                  | material      |
| **show**                         | visibility            | material      |
| **sort_asc**                     | arrow_upward          | material      |
| **sort_desc**                    | arrow_downward        | material      |
| **functions**                    | functions             | material      |
| **table_rows**                   | table_rows            | material      |
| **today**                        | calendar_today        | material      |
| **tree_collapse**                | expand_more           | material      |
| **tree_expand**                  | chevron_right         | material      |
| **unfold_less**                  | unfold_less           | material      |
| **unfold_more**                  | unfold_more           | material      |
| **unpin**                        | unpin-left            | imx-icons     |
| **view_column**                  | view_column           | material      |

カスタム テンプレートを作成するのではなく、参照によって内部アイコンを変更する利点を活用するには、コンボ コンポーネントと選択コンポーネントの展開/縮小アイコンを置き換えるために次の操作を実行します:

```ts
iconService.setIconRef('input_expand', 'default', {
    name: 'arrow_downward',
    family: 'material',
});

iconService.setIconRef('input_collapse', 'default', {
    name: 'arrow_upward',
    family: 'material',
});
```

これにより、すべてのコンボ コンポーネントと選択コンポーネントの展開アイコンと縮小アイコンが、それぞれ `material` フォント ファミリの `arrow_downward` 合字と `arrow_upward` 合字に設定されます。

各コンポーネントで使用されるすべてのアイコンの内訳は以下のとおりです。

<style>
.table-responsive tbody tr td:first-of-type {
    width: 25%;
    min-width: fit-content;
}
</style>

#### Action Strip

| アイコン          | 説明              |
| ------------- | ------------------------ |
| **add_child** | ポップアップ メニューで使用されます。  |
| **add_row**   | ポップアップ メニューで使用されます。  |
| **more_vert** | ポップアップ メニューで使用されます。  |

#### Calendar

| アイコン           | 説明                                             |
| -------------- | ------------------------------------------------------- |
| **arrow_prev** | ヘッダーで月/年の間を移動するために使用されます。 |
| **arrow_next** | ヘッダーで月/年の間を移動するために使用されます。 |

#### Carousel

| アイコン              | 説明                         |
| ----------------- | ----------------------------------- |
| **carousel_prev** | スライド間の移動に使用されます。 |
| **carousel_next** | スライド間の移動に使用されます。 |

#### Chip

| アイコン         | 説明                               |
| ------------ | ----------------------------------------- |
| **selected** | チップが選択されていることを示すために使用されます。 |
| **remove**   | [削除] ボタンに使用されます。               |

#### Combo (Simple Combo を含む)

| アイコン               | 説明                                                  |
| ------------------ | ------------------------------------------------------------ |
| **case_sensitive** | 大文字と小文字を区別するフィルタリングを指定および切り替えのために使用されます。        |
| **input_clear**    | [クリア] ボタンに使用されます。                                   |
| **input_expand**   | コンボ メニューが縮小されているときのトグル ボタンに使用されます。 |
| **input_collapse** | コンボ メニューが展開されているときのトグル ボタンに使用されます。  |

#### Date Picker

| アイコン            | 説明                                          |
| --------------- | ---------------------------------------------------- |
| **today**       | ピッカーをトリガーするトグル ボタンに使用されます。 |
| **input_clear** | [クリア] ボタンに使用されます。                           |

#### Date Range Picker

| アイコン           | 説明                                          |
| -------------- | ---------------------------------------------------- |
| **date_range** | ピッカーをトリガーするトグル ボタンに使用されます。 |

#### Expansion Panel

| アイコン         | 説明                                                   |
|------------- | ------------------------------------------------------------- |
| **expand**   | 展開状態をトリガーするトグル ボタンに使用されます。  |
| **collapse** | 縮小状態をトリガーするトグル ボタンに使用されます。 |

#### Grid

| アイコン                 | 説明                                                                    |
| -------------------- | ------------------------------------------------------------------------------ |
| **add**              | フィルター エントリを追加するために Excel フィルター メニューで使用されます。                                 |
| **arrow_back**       | 列を後方に移動するためにさまざまな UI 要素で使用されます。                     |
| **arrow_drop_down**  | トグル可能なメニューを示すためにさまざまなボタンで使用されます。                           |
| **arrow_forward**    | 列を前方に移動するためにさまざまな UI 要素で使用されます。                      |
| **cancel**           | 操作をキャンセルするためにさまざまな UI 要素で使用されます。                          |
| **chevron_right**    | Excel スタイルのフィルタリングのように、展開可能なメニューを示すために使用されます。          |
| **close**            | 展開されたメニューを閉じるときに使用します。                                                |
| **confirm**          | 操作を確認するときに使用されます。                                                  |
| **drag_indicator**   | 項目をドラッグできることを示すハンドルを表示するために使用されます。                      |
| **error**            | 編集可能なセルで、誤ったデータ入力を示すために使用されます。                       |
| **expand_more**      | Excel フィルタリング メニューで使用され、フィルターの追加を示します。     |
| **file_dowload**     | Excel フィルター エクスポーターによって使用されます。                                             |
| **filter_***         | さまざまなフィルタリング オペランドに使用されます。                                           |
| **group_work**       | グループ化ドロップ領域で使用されます。                                                |
| **hide**             | さまざまな UI 要素によって列を非表示にするために使用されます。                                |
| **import_export**    | ピボット データ セレクターが移動する際に使用されます。                                    |
| **input_clear**      | 入力フィールドで入力データをクリアするために使用されます。                                  |
| **next**             | フィルタリング行メニューでチップ間を移動するために使用されます。                      |
| **pin**              | 列のピン固定のためにさまざまな UI 要素によって使用されます。                                |
| **prev**             | フィルタリング行メニューでチップ間を移動するために使用されます。                      |
| **remove**           | さまざまな UI 要素によって削除インジケーターとして使用されます。                            |
| **refresh**          | フィルター行メニューでフィルターを再読み込みするために使用されます。                          |
| **selected**         | アクティブな選択を示すためにさまざまな UI 要素によって使用されます。                     |
| **show**             | 列を表示するためにさまざまな UI 要素によって使用されます。                               |
| **sort_asc**         | ソート方向を示すためにさまざまな UI 要素によって使用されます。                     |
| **sort_desc**        | ソート方向を示すためにさまざまな UI 要素によって使用されます。                     |
| **functions**        | ピボット グリッドとデータ セレクターによって使用されます。                                     |
| **table_rows**       | ピボット グリッド データ セレクターによって使用されます。                                          |
| **tree_collapse**    | ツリーのような構造で、表示する情報を少なくするために使用されます。                              |
| **tree_expand**      | ツリーのような構造で、詳細を表示するために使用します。                              |
| **unpin**            | 列のピン固定のためにさまざまな UI 要素によって使用されます。                                |
| **unfold_less**      | 階層グリッドですべての行を縮小するために使用されます。                            |
| **unfold_more**      | 階層グリッドですべての行を展開するために使用されます。                              |
| **view_column**      | ピボット データ セレクターによって使用されます。                                               |

#### Input Group

| アイコン            | 説明                                          |
| --------------- | ---------------------------------------------------- |
| **input_clear** | [クリア] ボタンに使用されます。                           |

#### Paginator

| アイコン           | 説明                                                  |
| -------------- | ------------------------------------------------------------ |
| **first_page** | 最初のページに移動するためのボタンで使用されます。    |
| **last_page**  | 最後のページに移動するためのボタンで使用されます。     |
| **prev**       | 前のページに移動するためのボタンで使用されます。 |
| **next**       | 次のページに移動するためのボタンで使用されます。     |

#### Query Builder

| アイコン         | 説明                                                  |
| ------------ | ------------------------------------------------------------ |
| **add**      | 新しいフィルター エントリを追加するためのボタンで使用されます。            |
| **close**    | コンテキスト メニューを閉じるボタンで使用されます。          |
| **edit**     | フィルター エントリを編集するためのボタンによって使用されます。               |
| **confirm**  | 新しいフィルター エントリの追加を確認するボタンで使用されます。     |
| **ungroup**  | フィルター エントリをグループ解除するボタンで使用されます。                |
| **delete**   | フィルター エントリを削除するボタンで使用されます。                 |
| **filter_*** | さまざまなフィルタリング オペランドに使用されます。                         |


#### Select

| アイコン               | 説明                                                   |
| ------------------ | -----------------------------------------------------------   |
| **input_expand**   | 選択メニューが縮小されているときのトグル ボタンに使用されます。 |
| **input_collapse** | 選択メニューが展開されているときのトグル ボタンに使用されます。  |

#### Tabs

| アイコン         | 説明                                                 |
| ------------ | ----------------------------------------------------------- |
| **prev**     | 前のタブに移動するためのボタンで使用されます。 |
| **next**     | 次のタブに移動するためのボタンで使用されます。     |


#### Time Picker

| アイコン         | 説明                                          |
| ------------ | ---------------------------------------------------- |
| **clock**    | ピッカーをトリガーするトグル ボタンに使用されます。 |

#### Tree

| アイコン              | 説明                                          |
| ----------------- | ---------------------------------------------------- |
| **tree_expand**   | ピッカーをトリガーするトグル ボタンに使用されます。 |
| **tree_collapse** | ピッカーをトリガーするトグル ボタンに使用されます。 |

## API

以下では、Ignite UI for Angular Icon Service で利用できるすべての方法を簡単にまとめます。

### ファミリの追加

```ts
setFamily(name: string, meta: IconFamilyMeta): IgxIconService;
```

### アイコン参照

アイコン マップがまだ存在しない場合にのみ設定します:

```ts
addIconRef(name: string, family: string, icon: IconMeta): void;
```

アイコン マップにアイコン参照を設定します (すでに存在する場合はオーバーライドされます):

```ts
setIconRef(name: string, family: string, icon: IconMeta): void;
```

アイコン参照の取得

```ts
getIconRef(family: string, name: string): IconReference;
```

### SVG アイコン

URI から:

```ts
addSvgIcon(name: string, url: string, family: string, stripMeta = false): void;
```

文字列から:

```ts
addSvgIconFromText(name: string, iconText: string, family: string, stripMeta = false): void;
```

## API リファレンス

<div class="divider--half"></div>

- [IgxIconService]({environment:angularApiUrl}/classes/igxiconservice.html)

## その他のリソース

<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
