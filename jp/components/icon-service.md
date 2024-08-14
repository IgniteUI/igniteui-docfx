---
title: Angular Icon Service – Ignite UI for Angular | インフラジスティックス
_description: Ignite UI for Angular Icon Service を使用して、様々なアイコンおよびフォント セットを統合して交互に使用し、カスタム色を定義できます。 
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Icon コンポーネント, Angular Icon コントロール, Angular Icon サービス
_language: ja
---

# Angular Icon Service (アイコン サービス) の概要
<p class="highlight">Ignite UI for Angular アイコン サービスを使用すると、開発者はさまざまなソースから新しいアイコンを UI に追加できます。</p>

## 概要

Ignite UI for Angular アイコン サービスには、ユーザーがアイコン ファミリを作成および管理できるようにするいくつかのメソッドが用意されています。

アイコン サービスは、Ignite UI for Angular パッケージから直接インポートできます。

```ts
import { IgxIconComponent, IgxIconService } from 'igniteui-angular';


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
           iframe-src="{environment:demosBaseUrl}/data-display/icon-service" alt="Icon Service の例">
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
2 つの違いは、`igx-icon` コンポーネントがそれらを描画する方法です。通常、[Font Awesome](https://fontawesome.com/) は、クラス名を使用して __font__ ファミリのコード ポイントを指定するため、そのタイプを `font` に設定します。アイコンを描画するためにコード ポイントに依存する必要がある場合は、常にタイプを `font` に設定する必要があります。[Material Icons](https://material.io/icons) ファミリは依然としてフォント ファミリですが、アイコンを表示する標準的な方法は、特定のコード ポイントを指すクラス名ではなく、`ligature` 名を提供することです。そのため、タイプを `liga` に設定する必要があります。3 番目のファミリ タイプである `svg` は、アイコン サービスを通じて登録される SVG で構成されるアイコン ファミリ用に予約されています。

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

| アイコン名         | ターゲット ファミリ | ターゲット名              | ターゲット名                                              | テーマ                       |
|----------------|------------|----------------------|------------------------------------------------------|---------------------------|
| add            | material   | add                  | Grid、Query Builder、Excel Style Filtering             | すべて                       |
| arrow_next     | material   | keyboard_arrow_right | Month Picker、Calendar                                | すべて                       |
| arrow_prev     | material   | keyboard_arrow_left  | Month Picker、Calendar                                | すべて                       |
| arrow_back     | material   | arrow_back           | Grid、Excel Style Filtering                           | すべて                       |
| arrow_forward  | material   | arrow_forward        | Grid、Excel Style Filtering                           | すべて                       |
| arrow_upward   | material   | arrow_upward         | Grid、Excel Style Filtering                           | すべて                       |
| arrow_downward | material   | arrow_downward       | Grid、Excel Style Filtering                           | すべて                       |
| case_sensitive | imx-icons  | case-sensitive       | Combo、Simple Combo                                   | すべて                       |
| carousel_next  | material   | keyboard_arrow_right | Carousel                                             | Indigo                    |
| carousel_prev  | material   | keyboard_arrow_left  | Carousel                                             | Indigo                    |
| carousel_next  | material   | arrow_forward        | Carousel                                             | Material、Bootstrap、Fluent |
| carousel_prev  | material   | arrow_back           | Carousel                                             | Material、Bootstrap、Fluent |
| chevron_left   | material   | chevron_left         | Grid、Paginator、Excel Style Filtering                 | すべて                       |
| chevron_right  | material   | chevron_right        | Grid、Paginator、Excel Style Filtering、TreeNode        | すべて                       |
| check          | material   | check                | Grid、Query Builder                                   | すべて                       |
| close          | material   | close                | Grid、Query Builder、Filtering Row                     | すべて                       |
| clear          | material   | clear                | Grid、Input Group、Excel Style Filtering、Filtering Row | すべて                       |
| clock          | material   | access_time          | Time Picker                                          | すべて                       |
| collapse       | material   | expand_less          | Grid、Expansion Panel                                 | すべて                       |
| date_range     | material   | date_range           | Date Range Picker                                    | すべて                       |
| delete         | material   | delete               | Grid、Query Builder                                   | すべて                       |
| edit           | material   | edit                 | Grid、Query Builder                                   | すべて                       |
| expand         | material   | expand_more          | Grid、Expansion Panel、Filtering Row、TreeNode          | すべて                       |
| filter_list    | material   | filter_list          | Grid、Filtering Cell、Excel Style Filtering            | すべて                       |
| first_page     | material   | first_page           | Grid、Paginator                                       | すべて                       |
| functions      | material   | functions            | Grid、Pivot Data Selector                             | すべて                       |
| import_export  | material   | import_export        | Grid                                                 | すべて                       |
| input_clear    | material   | cancel               | Combo、Simple Combo、Time Picker、Date Picker           | Material                  |
| input_clear    | material   | clear                | Combo、Simple Combo、Time Picker、Date Picker           | Indigo、Fluent、Bootstrap   |
| input_expand   | material   | expand_more          | Combo、Simple Combo、Select                            | Material                  |
| input_collapse | material   | expand_less          | Combo、Simple Combo、Select                            | Material                  |
| input_expand   | material   | arrow_drop_down      | Combo、Simple Combo、Select                            | Indigo、Fluent、Bootstrap   |
| input_collapse | material   | arrow_drop_up        | Combo、Simple Combo、Select                            | Indigo、Fluent、Bootstrap   |
| last_page      | material   | last_page            | Grid、Paginator                                       | すべて                       |
| more_vert      | material   | more_vert            | Action Strip、Grid                                    | すべて                       |
| next           | material   | navigate_next        | Grid、Tabs、Filtering Row                              | すべて                       |
| prev           | material   | navigate_before      | Grid、Tabs、Filtering Row                              | すべて                       |
| remove         | material   | cancel               | Grid、Chip                                            | すべて                       |
| refresh        | material   | refresh              | Grid、Filtering Row                                   | すべて                       |
| selected       | material   | done                 | Grid、Chip、Filtering Row                              | すべて                       |
| table_rows     | material   | table_rows           | Grid                                                 | すべて                       |
| today          | material   | today                | Date Picker                                          | すべて                       |
| view_column    | material   | view_column          | Grid                                                 | すべて                       |
| visibility     | material   | visibility           | Grid、Excel Style Filtering                           | すべて                       |
| visibility_off | material   | visibility_off       | Grid、Excel Style Filtering                           | すべて                       |

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

* [IgxIconService]({environment:angularApiUrl}/classes/igxiconservice.html)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
