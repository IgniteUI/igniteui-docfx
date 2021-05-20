---
title: Bottom Navigation コンポーネント
_description: タブ付きのユーザー インターフェイスでタブを表示します。この UI コントロールはタブの外観および動作を管理します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Bottom Nav コンポーネント, Angular Bottom Navigation コントロール
_language: ja
---

# Bottom Navigation

<p class="highlight">Ignite UI for Angular Bottom Navigation コンポーネントは、単一ビューで表示される複数のコンテンツ パネル間での移動を可能にします。パネルの間のナビゲーションは下部にあるタブ ボタンで実行されます。</p>

> [!NOTE]
> `igx-tab-bar` セレクターは非推奨です。代わりに [`igx-bottom-nav`]({environment:angularApiUrl}/classes/igxbottomnavcomponent.html) を使用してください。`IgxTabBarComponent` クラスは [`IgxBottomNavComponent`]({environment:angularApiUrl}/classes/igxbottomnavcomponent.html) に名前変更しました。`IgxTabBarModule` は `IgxBottomNavModule` に名前変更しました。

## Angular Bottom Navigation の例

<div class="divider--half"></div>


<code-view style="height: 200px; width: 400px; border: 1px solid #D4D4D4;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/tabbar-sample-1" alt="Angular Bottom Navigation の例">
</code-view>


<div class="divider--half"></div>

## 使用方法

はじめに、**app.module.ts** ファイルに `IgxBottomNavModule` をインポートします。

```typescript
// app.module.ts

...
import { IgxBottomNavModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxBottomNavModule],
    ...
})
export class AppModule {}
```

次にコンポーネントのテンプレートを Bottom Navigation に追加し、3 つの項目を追加します。各項目は、データのヘッダーとコンテナをそれぞれ表す  `igx-bottom-nav-header` コンポーネントと `igx-bottom-nav-content` コンポーネントをラップします。ヘッダーは通常、アイコンとオプションのテキスト ラベルで構成されます。Bottom Navigation コントロールはマテリアル デザイン[**アイコン**](https://material.io/icons/)と互換性があるため、アプリケーションに採用するには、メイン アプリケーション フォルダーの 'styles.css' ファイルに Material+Icons インポートを追加するだけです。

> [!NOTE]
> これまでアプリケーションで `igx-icon` を使用したことがない場合は、続行する前に必ず **app.module.ts** の `IgxIconModule` をインポートしてください。

```css
// styles.css

...
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
...
```

```html
<igx-bottom-nav>
    <igx-bottom-nav-item>
        <igx-bottom-nav-header>
            <igx-icon>library_music</igx-icon>
        </igx-bottom-nav-header>
        <igx-bottom-nav-content>This is Item 1 content.</igx-bottom-nav-content>
    </igx-bottom-nav-item>
    <igx-bottom-nav-item>
        <igx-bottom-nav-header>
            <igx-icon>video_library</igx-icon>
        </igx-bottom-nav-header>
        <igx-bottom-nav-content>This is Item 2 content.</igx-bottom-nav-content>
    </igx-bottom-nav-item>
    <igx-bottom-nav-item>
        <igx-bottom-nav-header>
            <igx-icon>library_books</igx-icon>
        </igx-bottom-nav-header>
        <igx-bottom-nav-content>This is Item 3 content.</igx-bottom-nav-content>
    </igx-bottom-nav-item>
</igx-bottom-nav>
```

すべて適切に設定できると、ブラウザ上でデモサンプルを確認することができます。

<div class="divider--half"></div>

## Bottom Navigation のカスタマイズ

アイコンの横にラベルを追加してタブを変更し、ヘッダーのスタイルが適切であることを確認しましょう。

まず、コンポーネントの typescript ファイルにデータ ソースのオブジェクト配列を定義します。

```typescript
...
public songsList: object[] = [
  { title: "Havana", artist: "Camila Cabello" },
  { title: "Meant To Be", artist: "Bebe Rexha & Florida Georgia Line" },
  { title: "New Rules", artist: "Dua Lipa" },
  { title: "Wolves", artist: "Selena Gomez & Marshmello" }
];

public moviesList: object[] = [
  { title: "Logan", genre: "Action, Drama, Sci-Fi" },
  { title: "Wonder Woman", genre: "Action, Adventure, Fantasy" },
  { title: "Guardians of the Galaxy Vol. 2", genre: "Action, Adventure, Sci-Fi" },
  { title: "Star Wars: The Last Jedi", genre: "Action, Adventure, Fantasy" }
];

public booksList: object[] = [
  { title: "Wonder", author: "R. J. Palacio" },
  { title: "Milk and Honey", author: "Rupi Kaur" },
  { title: "Giraffes Can't Dance", author: "Jeff Kinne" },
  { title: "The Getaway", author: "Selena Gomez & Marshmello" }
];
...
```

次に、コンポーネントのテンプレート マークアップを次のように更新します。

```html
<igx-bottom-nav>
    <igx-bottom-nav-item>
        <igx-bottom-nav-header>
            <igx-icon igxBottomNavHeaderIcon>library_music</igx-icon>
            <span igxBottomNavHeaderLabel>Songs</span>
        </igx-bottom-nav-header>
        <igx-bottom-nav-content>
            <div class="item" *ngFor="let song of songsList">
                <span class="item-line1">{{song.title}}</span><br/>
                <span class="item-line2">{{song.artist}}</span>
            </div>
        </igx-bottom-nav-content>
    </igx-bottom-nav-item>
    <igx-bottom-nav-item>
        <igx-bottom-nav-header>
            <igx-icon igxBottomNavHeaderIcon>video_library</igx-icon>
            <span igxBottomNavHeaderLabel>Movies</span>
        </igx-bottom-nav-header>
        <igx-bottom-nav-content>
            <div class="item" *ngFor="let movie of moviesList">
                <span class="item-line1">{{movie.title}}</span><br/>
                <span class="item-line2">{{movie.genre}}</span>
            </div>
        </igx-bottom-nav-content>
    </igx-bottom-nav-item>
    <igx-bottom-nav-item>
        <igx-bottom-nav-header>
            <igx-icon igxBottomNavHeaderIcon>library_books</igx-icon>
            <span igxBottomNavHeaderLabel>Books</span>
        </igx-bottom-nav-header>
        <igx-bottom-nav-content>
            <div class="item" *ngFor="let book of booksList">
                <span class="item-line1">{{book.title}}</span><br/>
                <span class="item-line2">{{book.author}}</span>
            </div>
        </igx-bottom-nav-content>
    </igx-bottom-nav-item>
</igx-bottom-nav>
```
項目のヘッダー タグの間にアイコンとラベル付きのスパンを配置することに加えて、`igxBottomNavHeaderIcon` および `igxBottomNavHeaderLabel` ディレクティブもそれらに添付していることに気付いたと思います。これらのディレクティブはそれぞれの要素を示し、適切なスタイルを適用します。

最後に、コンテンツのテンプレートの DIV および SPAN 要素に使用される CSS クラスをコンポーネントの CSS ファイルに追加します。

```css
.item {
    margin-bottom: 5px;
}

.item-line1 {
    font-size: 14px;
    color: gray;
}

.item-line2 {
    font-size: 12px;
    color: darkgray;
}

igx-bottom-nav-content {
    padding: 10px;
}
```

Bottom Navigation は以下のようになります。

<code-view style="height: 350px; width: 300px; border: 1px solid #D4D4D4;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/tabbar-sample-2" >
</code-view>


<div class="divider--half"></div>

ヘッダーにラベルとアイコンを含めるだけでは不十分な場合は、ヘッダー タグの間にカスタム コンテンツを追加するだけです。
以下はその例です。

```html
<igx-bottom-nav>
    <igx-bottom-nav-item>
        <igx-bottom-nav-header>
            <igx-icon igxBottomNavHeaderIcon>video_library</igx-icon>
            <span igxBottomNavHeaderLabel>Movies</span>
            <div>
                <!-- your custom tab header content goes here -->
            </div>
        </igx-bottom-nav-header>
        <igx-bottom-nav-content>
            <h1>Tab content</h1>
        </igx-bottom-nav-content>
    </igx-bottom-nav-item>
</igx-bottom-nav>
```

<div class="divider"></div>

## ルーター アウトレット コンテナとの統合

Bottom Navigation コンポーネントの主な用途はコンテンツを含むタブ項目を定義することですが、ヘッダーのみを使用してタブ項目を定義する必要がある場合があります。おそらく、そのような使用法の主なシナリオは、Angular Router を使用したビュー間のナビゲーションです。次の例は、Bottom Navigation コンポーネントを構成して、単一のルーターアウトレットで 3 つのコンポーネントを切り替える方法を示しています。

まず、Bottom Navigation コンポーネントをホストするメインコンポーネントと、デモ用のコンテンツを含む 3 つのビュー コンポーネントが必要です。コード スニペットを簡素化するために、ビュー コンポーネントに短いテンプレートがありますが、必要に応じてそれらをより識別しやすくしてください。また、これらのビューコンポーネントを `app.module.ts` ファイルにインポートします。

```typescript
// bottomnav-routing.component.ts
import { Component } from "@angular/core";

@Component({
    selector: "app-bottomnav-routing",
    styleUrls: ["bottomnav-routing.component.scss"],
    templateUrl: "bottomnav-routing.component.html"
})
export class BottomNavRoutingComponent { }

@Component({
    template: "<p>Item 1 Content</p>"
})
export class BottomNavRoutingView1Component { }

@Component({
    template: "<p>Item 2 Content</p>"
})
export class BottomNavRoutingView2Component { }

@Component({
    template: "<p>Item 3 Content</p>"
})
export class BottomNavRoutingView3Component { }
```

次のステップでは、`app-routing.module.ts` ファイルに適切なナビゲーション マッピングを作成します。

```typescript
import { RouterModule, Routes } from "@angular/router";

import {
    TabbarRoutingComponent,
    TabbarRoutingView1Component,
    TabbarRoutingView2Component,
    TabbarRoutingView3Component,
} from './tabbar-routing.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/tabbar-routing'
    },
    {
        path: "tabbar-routing",
        component: TabbarRoutingComponent,
        children: [
            { path: "tabbar-view1", component: TabbarView1Component },
            { path: "tabbar-view2", component: TabbarView2Component },
            { path: "tabbar-view3", component: TabbarView3Component }
        ]
    }
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forChild(routes) ]
})
export class TabbarRoutingModule { }
```

すべてのナビゲーション ルートがセットアップされたので、BottomNavigation コンポーネントを宣言し、ルーティング用に構成する必要があります。
また、ビュー コンポーネントの出力をレンダリングするためのルーター アウトレットを必ず追加してください。

```html
<!-- bottomnav-routing.component.html -->
<router-outlet></router-outlet>

<igx-bottom-nav #tabs1>
    <igx-bottom-nav-item
        routerLinkActive
        #rla1="routerLinkActive"
        [selected]="rla1.isActive"
        >
        <igx-bottom-nav-header routerLink="tabbar-view1">
            <igx-icon igxBottomNavHeaderIcon>phone</igx-icon>
        </igx-bottom-nav-header>
    </igx-bottom-nav-item>
    <igx-bottom-nav-item
        routerLinkActive
        #rla2="routerLinkActive"
        [selected]="rla2.isActive"
    >
        <igx-bottom-nav-header routerLink="tabbar-view2">
            <igx-icon igxBottomNavHeaderIcon>supervisor_account</igx-icon>
        </igx-bottom-nav-header>
    </igx-bottom-nav-item>
    <igx-bottom-nav-item
        routerLinkActive
        #rla3="routerLinkActive"
        [selected]="rla3.isActive"
    >
        <igx-bottom-nav-header routerLink="tabbar-view3">
            <igx-icon igxBottomNavHeaderIcon>format_list_bulleted</igx-icon>
        </igx-bottom-nav-header>
    </igx-bottom-nav-item>
</igx-bottom-nav>
```

上記のコードは、3 つのタブ項目を持つ BottomNavigation コンポーネントを作成します。すべてのタブ項目には、リンクされたルートが現在アクティブであるかどうかを追跡する `RouterLinkActive` ディレクティブが適用されています。`RouterLink` ディレクティブは、タブ項目ではなく、ヘッダー要素自体に適用されることに注意してください。これらのリンクのいずれかがアクティブになると、`RouterLinkActive` ディレクティブの `isActive` プロパティにバインドされるため、対応するタブ項目の `selected` プロパティが設定されます。このようにして、選択したタブ項目は常に現在のブラウザーのアドレスと同期したままになります。

上記のアプローチは、BottomNavigation コンポーネントを使用したルーティングを示すために、次のサンプルで使用されています。


<code-view style="height: 250px; width: 500px; border: 1px solid #D4D4D4;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/tabbar-sample-3" >
</code-view>


## スタイル設定

タブのスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

次に、[`igx-bottom-nav-theme`]({environment:sassApiUrl}/index.html#function-igx-bottom-nav-theme) を拡張する新しいテーマを作成し、タブグループのスタイルを設定できるさまざまなパラメーターを受け取ります。

```scss
$dark-bottom-nav: igx-bottom-nav-theme(
    $background: #292826,
    $active-item-color: #F4D45C
);
```

[`igx-bottom-nav-theme`]({environment:sassApiUrl}/index.html#function-igx-bottom-nav-theme) は、tabs コンポーネントのスタイル設定で多くのパラメーターが利用できます。

> [!NOTE]
> 項目のコンテンツの一部として使用される追加コンポーネントをスタイルするには、それぞれのコンポーネントに固有の追加テーマを作成する必要があります。

### テーマを含む

<div class="divider"></div>

最後にコンポーネントのテーマを**含めます**。

`$legacy-support` が `true` に設定されている場合、**コンポーネントのテーマ**を以下のように含めます。

```scss
@include igx-bottom-nav($dark-bottom-nav);
```

>[!NOTE]
>コンポーネントが [`Emulated`](./themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

```scss
:host {
     ::ng-deep {
        @include igx-bottom-nav($dark-bottom-nav);
    }
}
```

<div class="divider"></div>

`$legacy-support` が `false` (デフォルト) に設定されている場合、**css 変数** を以下のように含めます。

```scss
@include igx-css-vars($dark-bottom-nav);
```

>[!NOTE]
>コンポーネントが [`Emulated`](./themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、変数をオーバーライドするにはグローバル セレクターが必要なため、`:host` を使用する必要があります。

```scss
:host {
    @include igx-css-vars($dark-bottom-nav);
}
```
### カラーパレットの定義

上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) および [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$yellow-color: #F4D45C;
$black-color: #292826;
$dark-palette: igx-palette($primary: $black-color, $secondary: $yellow-color);
```

また [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取り出すことができます。

```scss
$dark-bottom-nav: igx-bottom-nav-theme(
    $background: igx-color($dark-palette, "primary", 400),
    $active-item-color: igx-color($dark-palette, "secondary", 400)
);
```

### スキーマの使用

テーマ エンジンを使用して[**スキーマ**](themes/sass/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

すべてのコンポーネントに提供されている 2 つの定義済みスキーマ (ここでは [`dark-bottom-nav`]({environment:sassApiUrl}/index.html#variable-_dark-bottom-nav) の 1 つを拡張します。

```scss
// Extending the dark bottom nav schema
$dark-bottom-nav-schema: extend($_dark-bottom-nav,
    (
        background: (
            igx-color: ("primary", 400)
        ),
        active-item-color: (
            igx-color: ("secondary", 400)
        )
    )
);
```

カスタム スキーマを適用するには、グローバル ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) または [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)) の 1 つを**拡張**する必要があります。これは基本的にカスタム スキーマでコンポーネントを指し示し、その後それぞれのコンポーネント テーマに追加するものです。

```scss
// Extending the global dark-schema
$custom-dark-schema: extend($dark-schema,(
    igx-bottom-nav: $dark-bottom-nav-schema
));

// Defining bottom-nav-theme with the global dark schema
$dark-bottom-nav: igx-bottom-nav-theme(
  $palette: $dark-palette,
  $schema: $custom-dark-schema
);
```

上記と同じ方法でテーマを含める必要があることに注意してください。

### デモ


<code-view style="height: 350px; width: 300px; border: 1px solid #D4D4D4;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/tabbar-style" >
</code-view>

<div class="divider--half"></div>

## API リファレンス
<div class="divider--half"></div>

* [IgxBottomNavComponent]({environment:angularApiUrl}/classes/igxbottomnavcomponent.html)
* [IgxBottomNavComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-bottom-nav-theme)
* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)

## Theming Dependencies
* [IgxIcon Theme]({environment:sassApiUrl}/index.html#function-igx-icon-theme)
* [IgxRipple Theme]({environment:sassApiUrl}/index.html#function-igx-ripple-theme)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
