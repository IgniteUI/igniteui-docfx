---
title: Bottom Navigation コンポーネント
_description: タブ付きのユーザー インターフェイスでタブを表示します。この UI コントロールはタブの外観および動作を管理します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Bottom Nav コンポーネント, Angular Bottom Navigation コントロール
_language: ja
---

## Bottom Navigation

<p class="highlight">Ignite UI for Angular Bottom Navigation コンポーネントは、単一ビューで表示される複数のコンテンツ パネル間での移動を可能にします。パネルの間のナビゲーションは下部にあるタブ ボタンで実行されます。</p>
<div class="divider"></div>

> [!NOTE]
> `igx-tab-bar` セレクターは非推奨です。代わりに [`igx-bottom-nav`]({environment:angularApiUrl}/classes/igxbottomnavcomponent.html) を使用してください。`IgxTabBarComponent` クラスは [`IgxBottomNavComponent`]({environment:angularApiUrl}/classes/igxbottomnavcomponent.html) に名前変更しました。`IgxTabBarModule` は `IgxBottomNavModule` に名前変更しました。

### Bottom Navigation デモ

<div class="divider--half"></div>

<div class="sample-container loading" style="height: 200px; width: 400px; border: 1px solid #D4D4D4;" >
    <iframe id="tabbar-sample-1-iframe" src='{environment:demosBaseUrl}/layouts/tabbar-sample-1' width="100%" height="100%" seamless
        frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabbar-sample-1-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">StackbBlitz で表示</button>
</div>

<div class="divider--half"></div>

#### 使用方法

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

次にコンポーネントのテンプレートを Bottom Navigation に追加し、3 つのパネルを追加します。

```html
<igx-bottom-nav>
  <igx-tab-panel label="Tab 1">This is Tab 1 content.</igx-tab-panel>
  <igx-tab-panel label="Tab 2">This is Tab 2 content.</igx-tab-panel>
  <igx-tab-panel label="Tab 3">This is Tab 3 content.</igx-tab-panel>
</igx-bottom-nav>
```
すべて適切に設定できると、ブラウザ上でデモサンプルを確認することができます。

<div class="divider--half"></div>

### Bottom Navigation のカスタマイズ

タブにアイコンを追加します。Bottom Navigation コントロールがマテリアル デザイン [**アイコン**](https://material.io/icons/)と互換性があるため、アプリケーションにアイコンを簡単に追加できます。 

最初にマテリアル アイコンをメイン アプリケーション フォルダーの 'styles.css' ファイルにインポートします。

```css
// styles.css

...
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
...
```

コンポーネントの typescript ファイルにデータ ソースのオブジェクト配列を定義します。

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

コンポーネントのテンプレート マークアップに新しいタブのラベル、マテリアル デザイン アイコンのライブラリからのアイコン名、およびデータ コンテンツを表示するための DIV および SPAN 要素を追加します。

```html
<igx-bottom-nav>

  <igx-tab-panel label="Songs" icon="library_music">
    <div class="item" *ngFor="let song of songsList">
      <span class="item-line1">{{song.title}}</span><br/>
      <span class="item-line2">{{song.artist}}</span>
    </div>
  </igx-tab-panel>

  <igx-tab-panel label="Movies" icon="video_library">
    <div class="item" *ngFor="let movie of moviesList">
      <span class="item-line1">{{movie.title}}</span><br/>
      <span class="item-line2">{{movie.genre}}</span>
    </div>
  </igx-tab-panel>

  <igx-tab-panel label="Books" icon="library_books">
    <div class="item" *ngFor="let book of booksList">
      <span class="item-line1">{{book.title}}</span><br/>
      <span class="item-line2">{{book.author}}</span>
    </div>
  </igx-tab-panel>

</igx-bottom-nav>
```

最後に、テンプレートの DIV および SPAN 要素に使用される CSS クラスをコンポーネントの CSS ファイルに追加します。

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

igx-tab-panel {
    padding: 10px;
}
```

Bottom Navigation は以下のようになります。

<div class="sample-container loading" style="height: 350px; width: 300px; border: 1px solid #D4D4D4;">
    <iframe id="tabbar-sample-2-iframe" data-src='{environment:demosBaseUrl}/layouts/tabbar-sample-2' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabbar-sample-2-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

<div class="divider--half"></div>

タブのラベルおよびアイコンの変更を拡張する場合、各タブでカスタム テンプレートを作成することもできます。
以下はその例です。

```html
<igx-bottom-nav>
    <igx-tab-panel>

        <ng-template igxTab>
            <div>
                <!-- your custom tab content goes here -->
            </div>
        </ng-template>

        <h1>Tab content</h1>
    </igx-tab-panel>
</igx-bottom-nav>
```

<div class="divider"></div>

### ルーター アウトレット コンテナとの統合

Bottom Navigation コンポーネントの主な用途はコンテンツを含むパネルの定義ですが、タブ項目のみを定義する必要がある場合があります。

> [!NOTE]
> タブ項目定義モードはタブのコンテンツをサポートしていないことに注意してください。コンポーネントはタブ項目のストリップのみをレンダリングします。また、このコンポーネントでタブ項目定義とパネル定義を混合することはサポートされません。

タブ項目を定義する際にディレクティブを適用することができます。たとえば、この機能を使用して、Angular Router を使用してビュー間のナビゲーションを実現できます。次の例は、Bottom Navigation コンポーネントを構成して、単一のルーターアウトレットで 3 つのコンポーネントを切り替える方法を示しています。

まず、Bottom Navigation コンポーネントをホストするメインコンポーネントと、デモ用のコンテンツを含む 3 つのビュー コンポーネントが必要です。コードスニペットを簡素化するために、ビューコンポーネントに短いテンプレートがありますが、必要に応じてそれらをより識別しやすくしてください。また、これらのビューコンポーネントを `app.module.ts` ファイルにインポートします。

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

<igx-bottom-nav>
    <igx-tab
    label="Item 1"
    routerLink="tabbar-view1"
    routerLinkActive
    #rla1="routerLinkActive"
    [isSelected]="rla1.isActive"
    ></igx-tab>

    <igx-tab
    label="Item 2"
    routerLink="tabbar-view2"
    routerLinkActive
    #rla2="routerLinkActive"
    [isSelected]="rla2.isActive"
    ></igx-tab>

    <igx-tab
    label="Item 3"
    routerLink="tabbar-view3"
    routerLinkActive
    #rla3="routerLinkActive"
    [isSelected]="rla3.isActive"
    ></igx-tab>
</igx-bottom-nav>
```

上記のコードは、3 つのタブ項目を持つ BottomNavigation コンポーネントを作成します。すべてのタブ項目には、ナビゲーションに使用されるルーティング リンクを指定するために使用される `RouterLink` ディレクティブが適用されています。これらのリンクのいずれかがアクティブになると、RouterLinkActive ディレクティブの isActive プロパティにバインドされるため、対応するタブ項目の isSelected プロパティが設定されます。このようにして、選択したタブ項目は常に現在のブラウザーのアドレスと同期したままになります。

上記のアプローチは、BottomNavigation コンポーネントを使用したルーティングを示すために、次のサンプルで使用されています。

<div class="sample-container loading" style="height: 250px; width: 500px; border: 1px solid #D4D4D4;">
    <iframe id="tabbar-sample-3-iframe" data-src='{environment:demosBaseUrl}/layouts/tabbar-sample-3' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabbar-sample-3-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

### スタイル設定

タブのスタイル設定は、すべてのテーマ関数とコンポーネント mixins が存在する `index` ファイルをインポートする必要があります。

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
> タブ パネルのコンテンツの一部として使用される追加コンポーネントをスタイルするには、それぞれのコンポーネントに固有の追加テーマを作成する必要があります。

#### テーマを含む

<div class="divider"></div>

最後にコンポーネントのテーマを**含めます**。

`$legacy-support` が `true` に設定されている場合、**コンポーネントのテーマ**を以下のように含めます。

```scss
@include igx-bottom-nav($dark-bottom-nav);
```

>[!NOTE]
>コンポーネントが [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化に`ペネトレーション`する必要があります。

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
>コンポーネントが [`Emulated`](themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、変数をオーバーライドするにはグローバル セレクターが必要なため、`:host` を使用する必要があります。

```scss
:host {
    @include igx-css-vars($dark-bottom-nav);
}
```
#### カラーパレットの定義

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

#### スキーマの使用

テーマ エンジンを使用して [**スキーマ**](themes/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

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

#### デモ

<div class="sample-container loading" style="height: 350px; width: 300px; border: 1px solid #D4D4D4;" >
    <iframe id="tabbar-style-iframe" src='{environment:demosBaseUrl}/layouts/tabbar-style' width="100%" height="100%" seamless
        frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabbar-style-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
<div class="divider--half"></div>

### API リファレンス
<div class="divider--half"></div>

* [IgxAvatarComponent]({environment:angularApiUrl}/classes/igxavatarcomponent.html)
* [IgxBottomNavComponent]({environment:angularApiUrl}/classes/igxbottomnavcomponent.html)
* [IgxBottomNavComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-bottom-nav-theme)
* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxListComponent]({environment:angularApiUrl}/classes/igxlistcomponent.html)
* [IgxListItemComponent]({environment:angularApiUrl}/classes/igxlistitemcomponent.html)
* [IgxTabComponent]({environment:angularApiUrl}/classes/igxtabcomponent.html)
* [IgxTabPanelComponent]({environment:angularApiUrl}/classes/igxtabpanelcomponent.html)

### その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
