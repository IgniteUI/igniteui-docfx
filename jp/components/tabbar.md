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

<div class="sample-container loading" style="height: 600px; width: 400px; border: 1px solid gray;">
    <iframe id="tabbar-sample-iframe" src='{environment:demosBaseUrl}/layouts/tabbar' width="100%" height="100%" seamless
        frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabbar-sample-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

<div class="divider--half"></div>

#### 使用方法

Bottom Navigation コンポーネントを初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールします。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](general/getting_started.md)トピックををご覧ください。

次に、**app.module.ts** ファイルに `IgxBottomNavModule` をインポートします。

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

以下は結果です:

<div class="sample-container loading" style="height: 200px; width: 300px; border: 1px solid gray;">
    <iframe id="tabbar-sample-1-iframe" data-src='{environment:demosBaseUrl}/layouts/tabbar-sample-1' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabbar-sample-1-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

<div class="divider"></div>

### タブのカスタマイズ

タブにアイコンを追加します。Bottom Navigation コントロールがマテリアル デザイン [**アイコン**](https://material.io/icons/)と互換性があるため、アプリケーションにアイコンを簡単に追加できます。 

最初に Material+Icons をメイン アプリケーション フォルダーの 'styles.css' ファイルにインポートします。

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
```

Bottom Navigation は以下のようになります。

<div class="sample-container loading" style="height: 350px; width: 300px; border: 1px solid gray;">
    <iframe id="tabbar-sample-2-iframe" data-src='{environment:demosBaseUrl}/layouts/tabbar-sample-2' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabbar-sample-2-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

<div class="divider--half"></div>

タブのラベルおよびアイコンの変更を拡張する場合、各タブでカスタム テンプレートを作成することもできます。以下はその例です。

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

#### その他の Igx コントロールの使用

その他 Ignite UI for Angular コンポーネントを Bottom Navigation と使用し、より高度なアプリケーションを実装できます。
たとえば、Bottom Navigation のパネルの連絡先リストの作成には [`IgxListComponent`]({environment:angularApiUrl}/classes/igxlistcomponent.html)、各連絡先の可視化は、[`IgxAvatarComponent`]({environment:angularApiUrl}/classes/igxavatarcomponent.html) や [`IgxIconComponent`]({environment:angularApiUrl}/classes/igxiconcomponent.html) を使用できます。

`IgxBottomNavModule` および `IgxListModule` コンポーネントを "app.module.ts" ファイルにインポートします。

```typescript
// app.module.ts

...
import { IgxAvatarModule } from 'igniteui-angular';
import { IgxIconModule } from 'igniteui-angular';
import { IgxListModule } from 'igniteui-angular';
import { IgxBottomNavModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxAvatarModule, IgxIconModule, IgxListModule, IgxBottomNavModule],
    ...
})
export class AppModule {}
```

コンポーネントの typescript ファイルに連絡先のデータ ソースを作成します。

```typescript
...
public contactsList: object[] = [{
        avatar: "assets/images/avatar/1.jpg",
        favorite: true,
        key: "1",
        link: "#",
        phone: "770-504-2217",
        text: "Terrance Orta"
    }, {
        avatar: "assets/images/avatar/2.jpg",
        favorite: false,
        key: "2",
        link: "#",
        phone: "423-676-2869",
        text: "Richard Mahoney"
    }, {
        avatar: "assets/images/avatar/3.jpg",
        favorite: false,
        key: "3",
        link: "#",
        phone: "859-496-2817",
        text: "Donna Price"
    }, {
        avatar: "assets/images/avatar/4.jpg",
        favorite: false,
        key: "4",
        link: "#",
        phone: "901-747-3428",
        text: "Lisa Landers"
    }, {
        avatar: "assets/images/avatar/12.jpg",
        favorite: true,
        key: "5",
        link: "#",
        phone: "573-394-9254",
        text: "Dorothy H. Spencer"
    }, {
        avatar: "assets/images/avatar/13.jpg",
        favorite: false,
        key: "6",
        link: "#",
        phone: "323-668-1482",
        text: "Stephanie May"
    }, {
        avatar: "assets/images/avatar/14.jpg",
        favorite: false,
        key: "7",
        link: "#",
        phone: "401-661-3742",
        text: "Marianne Taylor"
    }];
...
```

コンポーネントのテンプレート マークアップに最初のパネルにある [`IgxListComponent`]({environment:angularApiUrl}/classes/igxlistcomponent.html) を含む Bottom Navigation を追加して編集します。

```html
...
<igx-bottom-nav>
    <igx-tab-panel icon="phone">
        <igx-list [allowRightPanning]="true" [allowLeftPanning]="true">
            <igx-list-item [isHeader]="true">History</igx-list-item>
            <igx-list-item igxRipple="pink" igxRippleTarget=".igx-list__item"
              *ngFor="let contact of contactsList">
                <div class="item">
                    <igx-avatar [src]="contact.avatar" roundShape="true"></igx-avatar>
                    <div class="person">
                        <p class="name">{{contact.text}}</p>
                        <span class="phone">{{contact.phone}}</span>
                    </div>
                    <igx-icon>phone</igx-icon>
                </div>
            </igx-list-item>
        </igx-list>
    </igx-tab-panel>
    <igx-tab-panel icon="supervisor_account">
        <div class="tab-content">
            <h3>Tab 2 Content</h3>
        </div>
    </igx-tab-panel>
    <igx-tab-panel icon="format_list_bulleted">
        <div class="tab-content">
            <h3>Tab 3 Content</h3>
        </div>
    </igx-tab-panel>
</igx-bottom-nav>
...
```

アプリケーションのスタイルを設定するために CSS 定義も含める必要があります。

```css
.tab-content {
    padding: 16px;
}

.item {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.item > [igxLabel],
.item > .person {
    position: absolute;
    margin-left: 72px;
}

.person .name {
    padding: 0;
    margin: 0;
}

.person .phone {
    font-size: 12px;
    color: gray;
}

.item igx-icon {
    color: lightgray;
}

.item igx-icon.favorite {
    color: orange;
}
```

このトピックの [Bottom Navigation デモ](#bottom-navigation-デモ) セクションで結果を確認できます。


#### ルーター アウトレット コンテナとの統合

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
export class BottomNavRoutingComponent {
    constructor() { }
}

@Component({
    template: "<h3>Tab 1 Content</h3>"
})
export class BottomNavRoutingView1Component {
}

@Component({
    template: "<h3>Tab 2 Content</h3>"
})
export class BottomNavRoutingView2Component {
}

@Component({
    template: "<h3>Tab 3 Content</h3>"
})
export class BottomNavRoutingView3Component {
}
```

次のステップでは、`app-routing.module.ts` ファイルに適切なナビゲーション マッピングを作成します。

```typescript
// app-routing.module.ts
import {
    BottomNavRoutingComponent,
    BottomNavRoutingView1Component,
    BottomNavRoutingView2Component,
    BottomNavRoutingView3Component } from './bottomnav-routing.component';

...

const appRoutes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/bottomnav-routing'
    },
    {
        path: 'bottomnav-routing',
        component: BottomNavRoutingComponent,
        children: [
            { path: 'view1', component: BottomNavRoutingView1Component },
            { path: 'view2', component: BottomNavRoutingView2Component },
            { path: 'view3', component: BottomNavRoutingView3Component },
        ]
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(appRoutes)]
})
export class AppRoutingModule { }
```

すべてのナビゲーション ルートがセットアップされたので、BottomNavigation コンポーネントを宣言し、ルーティング用に構成する必要があります。
また、ビュー コンポーネントの出力をレンダリングするためのルーター アウトレットを必ず追加してください。

```html
<!-- bottomnav-routing.component.html -->
<router-outlet></router-outlet>

<igx-bottom-nav>
  <igx-tab label="Tab 1" icon="dashboard"
    routerLink="view1"
    routerLinkActive #rla1="routerLinkActive"
    [isSelected]="rla1.isActive">
  </igx-tab>

  <igx-tab label="Tab 2" icon="check_circle_outline"
    routerLink="view2"
    routerLinkActive #rla2="routerLinkActive"
    [isSelected]="rla2.isActive">
  </igx-tab>

  <igx-tab label="Tab 3" icon="radio_button_checked"
    routerLink="view3"
    routerLinkActive #rla3="routerLinkActive"
    [isSelected]="rla3.isActive">
  </igx-tab>
</igx-bottom-nav>
```

上記のコードは、3 つのタブ項目を持つ BottomNavigation コンポーネントを作成します。すべてのタブ項目には、ナビゲーションに使用されるルーティング リンクを指定するために使用される `RouterLink` ディレクティブが適用されています。これらのリンクのいずれかがアクティブになると、RouterLinkActive ディレクティブの isActive プロパティにバインドされるため、対応するタブ項目の isSelected プロパティが設定されます。このようにして、選択したタブ項目は常に現在のブラウザーのアドレスと同期したままになります。

上記のアプローチは、BottomNavigation コンポーネントを使用したルーティングを示すために、次のサンプルで使用されています。

<div class="sample-container loading" style="height: 500px; width: 500px; border: 1px solid gray;">
    <iframe id="tabbar-sample-3-iframe" data-src='{environment:demosBaseUrl}/layouts/tabbar-sample-3' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabbar-sample-3-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">stackblitz で開く</button>
</div>

### Styles

To get started with styling the tabs, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`igx-bottom-nav-theme`]({environment:sassApiUrl}/index.html#function-igx-bottom-nav-theme) and accepts various parameters that allow us to style the tab groups.

```scss
$dark-bottom-nav: igx-bottom-nav-theme(
    $background: #292826,
    $active-item-color: #F4D45C
);
```

If we take a look at the [`igx-bottom-nav-theme`]({environment:sassApiUrl}/index.html#function-igx-bottom-nav-theme), we will notice that there are even more parameters available to us in order to style our bottom navigation component!

> [!NOTE]
> In order to style any additional components that are used as part of a tab panel's content, an additional theme should be created that is specific to the respective component.

The last step is to **include** the component theme in our application.

```scss
@include igx-bottom-nav($dark-bottom-nav);
```

>[!NOTE]
>If the component is using an [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

```scss
:host {
     ::ng-deep {
        @include igx-bottom-nav($dark-bottom-nav);
    }
}
```

#### Defining a color palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$yellow-color: #F4D45C;
$black-color: #292826;
$dark-palette: igx-palette($primary: $black-color, $secondary: $yellow-color);
```

And then with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette. 

```scss
$dark-bottom-nav: igx-bottom-nav-theme(
    $background: igx-color($dark-palette, "primary", 400),
    $active-item-color: igx-color($dark-palette, "secondary", 400)
);
```

#### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](themes/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [`dark-bottom-nav`]({environment:sassApiUrl}/index.html#variable-_dark-bottom-nav) schema:

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

In order to apply our custom schemas we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

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

Don't forget to include the themes in the same way as it was demonstrated above.

#### Demo

<div class="sample-container loading" style="height: 600px; width: 400px; border: 1px solid gray;" >
    <iframe id="tabbar-style-iframe" src='{environment:demosBaseUrl}/layouts/tabbar-style' width="100%" height="100%" seamless
        frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabbar-style-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### API リファレンス
<div class="divider--half"></div>

* [IgxAvatarComponent]({environment:angularApiUrl}/classes/igxavatarcomponent.html)
* [IgxBottomNavComponent]({environment:angularApiUrl}/classes/igxbottomnavcomponent.html)
* [IgxBottomNavComponent Styles]({environment:sassApiUrl}/index.html#function-igx-bottom-nav-theme)
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
