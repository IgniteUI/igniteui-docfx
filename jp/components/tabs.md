---
title: Tabs コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Tabs コンポーネントはタブを上側に配置し、複数のタブ項目がある場合にスクロールを許可します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コンポーネント, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Tabs コンポーネント, Angular Tabs コントロール, Angular Tabs
_language: ja
---

## Tabs

Ignite UI for Angular [`igx-tabs`]({environment:angularApiUrl}/classes/igxtabscomponent.html) コンポーネントは、同様なデータ セットの体系化や切り替えに使用します。[`igx-tab-item`]({environment:angularApiUrl}/classes/igxtabitemcomponent.html) および [`igx-tabs-group`]({environment:angularApiUrl}/classes/igxtabsgroupcomponent.html) のラッパーとして機能し、データのコンテナーおよびタブ ヘッダーを表します。Tabs コンポーネントは、タブを上側に配置して複数のタブ項目がある場合にスクロールを許可します。

### Tabs デモ
<div class="sample-container loading" style="height: 250px; width: 600px;">
    <iframe id="tabs-sample-0" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/layouts/tabs-sample-3" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabs-sample-0" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法

Tabs コンポーネントを初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールする必要があります。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](general/getting_started.md)トピックををご覧ください。

次に、**app.module.ts** ファイルに `IgxTabsModule` をインポートします。

```typescript
// app.module.ts

...
import { IgxTabsModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxTabsModule],
    ...
})
export class AppModule {}
```

[`label`]({environment:angularApiUrl}/classes/igxtabsgroupcomponent.html#label) およびコンテンツを持つ複数のタブ グループを指定します。

```html
<igx-tabs>
  <igx-tabs-group label="Tab 1">This is Tab 1 content.</igx-tabs-group>
  <igx-tabs-group label="Tab 2">This is Tab 2 content.</igx-tabs-group>
  <igx-tabs-group label="Tab 3">This is Tab 3 content.</igx-tabs-group>
  <igx-tabs-group label="Tab 4">This is Tab 4 content.</igx-tabs-group>
  <igx-tabs-group label="Tab 5">This is Tab 5 content.</igx-tabs-group>
</igx-tabs>
```

サンプルを構成した後、結果は以下のようになります。

<div class="sample-container loading" style="height: 200px; width: 600px; border: 1px solid gray;">
    <iframe id="tabs-sample-1-iframe" data-src='{environment:demosBaseUrl}/layouts/tabs-sample-1' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabs-sample-1-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

<div class="divider"></div>

### Tabs タイプ
2 種類のタブがあります。[`fixed`]({environment:angularApiUrl}/enums/tabstype.html#fixed) または [`contentfit`]({environment:angularApiUrl}/enums/tabstype.html#contentfit) タブを選択するには、[`tabsType`]({environment:angularApiUrl}/classes/igxtabscomponent.html#tabstype) 入力を設定します。
- **contentfit タブ** (デフォルト): タブ ヘッダーの幅はコンテンツ (ラベル、アイコン、両方) に基づいて決定され、すべてのタブのパディングが等しくなります。
選択したタブのタイプに関係なく、タブ ヘッダーの幅は指定した最小幅および最大幅によって制限されます。
- **fixed タブ**: すべてのタブ ヘッダーは同じ幅を持ち、Tabs コンテナーに一致します。提供されたスペースが足りない場合、スクロール ボタンが表示されます。

```html
<div class="items-wrapper__item items-wrapper__item-small items-wrapper__item--blue">
  <h4 class="sample-title">CONTENT-FIT TABS</h4>
  <igx-navbar title="Contacts" actionButtonIcon="menu">
    <igx-icon>search</igx-icon>
    <igx-icon>more_vert</igx-icon>
  </igx-navbar>
  <igx-tabs>
    <igx-tabs-group label="HOME">Home content.</igx-tabs-group>
    <igx-tabs-group label="RECENT CONTACTS">Recent contacts list.</igx-tabs-group>
    <igx-tabs-group label="MORE INFORMATION ABOUT SELECTED CONTACT">More detailed contact information.</igx-tabs-group>
  </igx-tabs>
</div>

<div class="items-wrapper__item items-wrapper__item-small items-wrapper__item--blue">
  <h4 class="sample-title">FIXED TABS</h4>
  <igx-navbar title="Contacts" actionButtonIcon="menu">
    <igx-icon>search</igx-icon>
    <igx-icon>more_vert</igx-icon>
  </igx-navbar>
  <igx-tabs tabsType="fixed">
    <igx-tabs-group label="HOME">Home content.</igx-tabs-group>
    <igx-tabs-group label="RECENT CONTACTS">Recent contacts list.</igx-tabs-group>
    <igx-tabs-group label="MORE INFORMATION ABOUT SELECTED CONTACT">More detailed contact information.</igx-tabs-group>
  </igx-tabs>
</div>
```

<div class="sample-container loading" style="height: 450px; width: 800px;">
    <iframe id="tabs-sample-2-iframe" data-src='{environment:demosBaseUrl}/layouts/tabs-sample-2' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabs-sample-2-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

<div class="divider"></div>

### タブのカスタマイズ

タブにアイコンを追加します。Tabs コントロールはマテリアル デザイン [**アイコン**](https://material.io/icons/)と互換性があるため、アプリケーションにアイコンを簡単に追加できます。

はじめに Material+Icons をメイン アプリケーション フォルダーの 'styles.css' ファイルにインポートします。

```css
// styles.css

...
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
...
```

```html
<igx-tabs>
  <igx-tabs-group label="MY ALBUMS" icon="library_music">
    <div style="margin: 15px">
      <igx-card>
        <igx-card-header class="compact">
          <igx-avatar src="assets/images/card/avatars/alicia_keys.jpg" roundShape="true"></igx-avatar>
          <div class="igx-card-header__tgroup">
            <h3 class="igx-card-header__title--small">HERE</h3>
            <h5 class="igx-card-header__subtitle">by Alicia Keys</h5>
          </div>
        </igx-card-header>
        <igx-card-actions>
          <div class="igx-card-actions__bgroup">
            <button igxButton igxRipple>PLAY</button>
          </div>
        </igx-card-actions>
      </igx-card>
    </div>
  </igx-tabs-group>
  <igx-tabs-group label="FAVOURITES" icon="favorite">
    <div style="margin: 15px">
      <h5 class="igx-card-header__subtitle">Add your favourite songs here.</h5>
    </div>
  </igx-tabs-group>
  <igx-tabs-group label="INFO" icon="info">
    <div style="margin: 15px">
      <h5 class="igx-card-header__subtitle">"Here" is the sixth studio album by American singer and songwriter Alicia Keys.</h5>
    </div>
  </igx-tabs-group>
</igx-tabs>
```

サンプルを正しく構成した場合、タブは以下の例のようになります。

<div class="sample-container loading" style="height: 250px; width: 600px;">
    <iframe id="tabs-sample-3-iframe" data-src='{environment:demosBaseUrl}/layouts/tabs-sample-3' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabs-sample-3-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

<div class="divider--half"></div>

タブのラベルおよびアイコンの変更を拡張する場合、各タブ ヘッダーでカスタム テンプレートを作成することもできます。

```html
<igx-tabs>
    <igx-tabs-group>
        <ng-template igxTab>
            <div>
                <!-- your custom tab content goes here -->
            </div>
        </ng-template>
        <h1>Tab content</h1>
    </igx-tabs-group>
</igx-tabs>
```


### スタイル設定

タブのスタイル設定は、すべてのテーマ関数とコンポーネント mixins が存在する `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

次に、[`igx-tabs-theme`]({environment:sassApiUrl}/index.html#function-igx-tabs-theme) を拡張する新しいテーマを作成し、タブグループのスタイルを設定できるさまざまなパラメーターを受け取ります。

```scss
$dark-tabs: igx-tabs-theme(
    $item-text-color: #F4D45C,
    $item-background: #292826,
    $item-hover-background: #F4D45C,
    $item-hover-color: #292826,
    $item-active-color: #F4D45C,
    $item-active-icon-color: #F4D45C,
    $indicator-color: #F4D45C,
    $tab-ripple-color: #F4D45C
);
```

[`igx-tabs-theme`]({environment:sassApiUrl}/index.html#function-igx-tabs-theme) は、tabs コンポーネントのスタイル設定で多くのパラメーターが利用できます。

> [!NOTE]
> タブ グループのコンテンツの一部として使用される追加コンポーネントをスタイルするには、それぞれのコンポーネントに固有の追加テーマを作成する必要があります。

最後にコンポーネントのテーマを**含めます**。

```scss
@include igx-tabs($dark-tabs);
```

>[!NOTE]
>コンポーネントが [`Emulated`](./themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を`ペネトレーション`する必要があります。

```scss
:host {
     ::ng-deep {
        @include igx-tabs($dark-tabs);
    }
}
```


#### カラーパレットの定義

上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) と [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$yellow-color: #F4D45C;
$black-color: #292826;
$dark-palette: igx-palette($primary: $black-color, $secondary: $yellow-color);
```

次に [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取得できます。 

```scss
$dark-tabs: igx-tabs-theme(
    $palette: $dark-palette,
    $item-text-color: igx-color($dark-palette, "secondary", 400),
    $item-background: igx-color($dark-palette, "primary", 400),
    $item-hover-background: igx-color($dark-palette, "secondary", 400),
    $item-hover-color: igx-color($dark-palette, "primary", 400),
    $item-active-color: igx-color($dark-palette, "secondary", 400),
    $item-active-icon-color: igx-color($dark-palette, "secondary", 400),
    $indicator-color: igx-color($dark-palette, "secondary", 400),
    $tab-ripple-color: igx-color($dark-palette, "secondary", 400)
);
```

#### スキーマの使用

テーマ エンジンを使用して [スキーマ](themes/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

すべてのコンポーネントに提供されている2つの定義済みスキーマの 1 つを拡張します。この場合 - [`dark-tabs`]({environment:sassApiUrl}/index.html#variable-_dark-tabs) スキーマ。

```scss
// Extending the dark tabs schema
$dark-tabs-schema: extend($_dark-tabs,
    (
        item-text-color: (
            igx-color: ("secondary", 400)
        ),
        item-background: (
            igx-color: ("primary", 400)
        ),
        item-hover-background: (
            igx-color: ("secondary", 400)
        ),
        item-hover-color: (
            igx-color: ("primary", 400)
        ),
        item-active-color: (
            igx-color: ("secondary", 400)
        ),
        item-active-icon-color: (
            igx-color: ("secondary", 400)
        ),
        indicator-color: (
            igx-color: ("secondary", 400)
        ), 
        tab-ripple-color: (
            igx-color: ("secondary", 400)
        )
    )
);
```

カスタム スキーマを適用するには、グローバル ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) または [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)) の 1 つを拡張する必要があります。これは基本的にカスタム スキーマでコンポーネントをポイントし、その後それぞれのコンポーネントテーマに追加するものです。

```scss
// Extending the global dark-schema
$custom-dark-schema: extend($dark-schema,(
    igx-tabs: $dark-tabs-schema
));

// Defining tabs-theme with the global dark schema
$dark-tabs: igx-tabs-theme(
  $palette: $dark-palette,
  $schema: $custom-dark-schema
);
```

上記と同じ方法でテーマを含める必要があることに注意してください。

#### デモ

<div class="sample-container loading" style="height: 400px; width: 600px;">
    <iframe id="tabs-style-iframe" data-src='{environment:demosBaseUrl}/layouts/tabs-style' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabs-style-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>

<div class="divider--half"></div>

### API リファレンス
<div class="divider"></div>

* [IgxAvatarComponent]({environment:angularApiUrl}/classes/igxavatarcomponent.html)
* [IgxCardComponent]({environment:angularApiUrl}/classes/igxcardcomponent.html)
* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxNavbarComponent]({environment:angularApiUrl}/classes/igxnavbarcomponent.html)
* [IgxTabsComponent]({environment:angularApiUrl}/classes/igxtabscomponent.html)
* [IgxTabsComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-tabs-theme)
* [IgxTabsGroupComponent]({environment:angularApiUrl}/classes/igxtabsgroupcomponent.html)
* [IgxTabItemComponent]({environment:angularApiUrl}/classes/igxtabitemcomponent.html)

### その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
