---
title: Card コンポーネント
_description: Ignite UI for Angular Card コンポーネントを使用して、詳細情報のエントリ ポイントとして、ダッシュボード、テキスト、画像、アイコン、ボタンなどを表示します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Card コンポーネント, Angular Card コントロール
_language: ja
---

##Card
<p class="highlight">Ignite UI for Angular [`IgxCardComponent`]({environment:angularApiUrl}/classes/igxcardcomponent.html) は、テキスト、画像、アイコン、およびボタンを表示します。この要素は詳細情報のエントリ ポイントになります。Card を使用してマルチメディア ダッシュボードを作成できます。Card コンポーネントは、Ignite UI for Angular Grid と同じコンポーネントを使用してページングをサポートします。ただし、カスタム コードが必要です。</p>
<div class="divider"></div>

###Card デモ
<div class="sample-container loading" style="height: 690px">
    <iframe id="card-sample-4-iframe" data-src='{environment:demosBaseUrl}/layouts/card-sample-4' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="card-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

###使用方法
Card コンポーネントは、様々なオブジェクト タイプ、サイズやサポートされるアクションが異なる同様のオブジェクトから成るコンテンツを表示できます。

####作業の開始
Ignite UI for Angular Card の初期化前に `IgxCardModule` を **app.module.ts** ファイルにインポートします:

```typescript
// app.module.ts
...
import { IgxCardModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxCardModule],
    ...
})
export class AppModule {}
```

次に、最初のカード コンポーネントのテンプレートに、メディア画像、ヘッダー、コンテンツ、およびアクション領域を含むカードを表示するための次のコードを追加します。 

```html
<!--card.component.html>-->

<igx-card>
    <igx-card-media height="196px">
        <img [src]="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=50">
    </igx-card-media>

    <igx-card-header>
        <h3 igxCardHeaderTitle>New York</h3>
        <h5 igxCardHeaderSubtitle>City in New York</h5>
    </igx-card-header>

    <igx-card-content>
        <p>New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough thatâ€™s among the worldâ€™s major commercial, financial and cultural centers.</p>
    </igx-card-content>

    <igx-card-actions>
        <button igxButton igxRipple>Read More</button>
        <button igxButton="icon" igxRipple igxRippleCentered="true">
            <igx-icon>favorite</igx-icon>
        </button>
        <button igxButton="icon" igxRipple igxRippleCentered="true">
            <igx-icon>share</igx-icon>
        </button>
    </igx-card-actions>
</igx-card>
```

以下は結果です。

<div class="sample-container loading" style="height: 486px">
    <iframe id="card-sample-0-iframe" data-src='{environment:demosBaseUrl}/layouts/card-sample-0' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="card-sample-0-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

上記が確認できます。最初に `h3` 見出しのように要素をヘッダータイトルとしてタグしたい場合は、`igx-car-header` タグの間に配置し、`igxCardHeaderTitle` ディレクティブを要素に添付します。逆に、別の見出し要素を`サブタイトル`にしたい場合は、`igxCardHeaderSubtitle` をそれに添付します。

カードに表示する画像やビデオはすべて、`igx-card-media` タグで囲みます。`igx-card-media` を使用すると、`width` や `height` 属性を使用して内側に配置されているコンテンツのサイズを変更できます。上の例では、`高さ`のみ指定し、幅を `自動` にすることにより、設定された高さを維持しながら画像をカードの表面全体に広げることが可能になります。

`igx-card-content` タグ内には何でも配置できます。通常テキストが配置されます。

最後に `igx-card-actions` は、ボタンのようなアクション可能なアイテムを配置する場所です。要素に `igxButton` ディレクティブを使用すると、その領域内の材料設計仕様に従って自動的に正しく配置されます。

#### メディア、サムネイル、アバター
タイトルや字幕の横のカード ヘッダーに画像やアイコンを表示したい場合は、`igxCardThumbnail` ディレクティブを使用してそれを実行できます。

上記のカードを例にとると、`igx-card-header` の内容を編集して、アイコンを保持する `igxCardThumbnail` コンテナを追加できます。

```html
<igx-card-header>
    <div igxCardThumbnail>
        <igx-icon>place</igx-icon>
    </div>
    
    <h3 igxCardHeaderTitle>Title</h3>
    <h5 igxCardHeaderSubtitle>Subtitle</h5>
</igx-card-header>
```

上記の例では、カード ヘッダーのタイトルと字幕の横にアイコンが表示されます。

カード ヘッダーに置かれた `igx-avatar` または `igx-card-media` の存在も自動的に検出され、カードのサムネイルのように表示されますので次のことができます:

```html
<igx-card-header>
    <igx-avatar>
        <igx-icon>place</igx-icon>
    </igx-avatar>

    <h3 igxCardHeaderTitle>Title</h3>
    <h5 igxCardHeaderSubtitle>Subtitle</h5>
</igx-card-header>
```

また、これもできます:

```html
<igx-card-header>
    <igx-card-media width="40px" height="40px">
        <img src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=50">
    </igx-card-media>

    <h3 igxCardHeaderTitle>Title</h3>
    <h5 igxCardHeaderSubtitle>Subtitle</h5>
</igx-card-header>
```

#### Outlined cards
カードには `type` 属性があり、`デフォルト` (省略した場合は自動的に設定) または`アウトライン`に設定できます。`outlined` タイプは、細い境界線と置き換えてカードと背景を区別してカードからすべてのシャドウを削除します。

以下はアウトラインのあるカードの例です。

```html
<!--outlined-card.component.html>-->
<igx-card type="outlined">
    <igx-card-header>
        <igx-card-media width="64px" height="64px">
            <img [src]="card.imageUrl">
        </igx-card-media>

        <h5 igxCardHeaderTitle>{{card.title}}</h5>
        <h5 igxCardHeaderSubtitle>{{card.subtitle}}</h5>
    </igx-card-header>

    <igx-divider></igx-divider>

    <igx-card-actions layout="justify">
        <button *ngFor="let icon of card.icons;" igxButton="icon" igxRipple igxRippleCentered="true">
            <igx-icon>{{icon}}</igx-icon>
        </button>
    </igx-card-actions>
</igx-card>
```

この時点でカードは以下のようになります。
<div class="sample-container loading" style="height: 168px">
    <iframe id="card-sample-1-iframe" data-src='{environment:demosBaseUrl}/layouts/card-sample-1' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="card-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

#### 水平レイアウト

デフォルトでは、カードのすべてのセクション (ヘッダー、コンテンツ、メディア、アクション) は縦にレイアウトされています。垂直方向のスペースが多くある場合に便利です。カードのすべてのセクションを水平に配置する場合、カードの `horizontal` 属性を使用してレイアウトを設定できます。

以下の例を参照してください。

```html
<igx-card type="outlined" [horizontal]="horizontal">
    <div igxLayout igxLayoutDir="column" igxFlex igxFlexGrow="1">
        <igx-card-header>
            <h5 igxCardHeaderTitle>{{card.title}}</h5>
            <h5 igxCardHeaderSubtitle>{{card.subtitle}}</h5>
            <igx-card-media width="64px" height="64px">
                <img [src]="card.imageUrl">
            </igx-card-media>
        </igx-card-header>

        <igx-card-content>
            <p>{{card.content}}</p>
        </igx-card-content>
    </div>

    <igx-divider [vertical]="horizontal"></igx-divider>

    <igx-card-actions layout="justify">
        <button *ngFor="let icon of card.icons;" igxButton="icon" igxRipple igxRippleCentered="true">
            <igx-icon>{{icon}}</igx-icon>
        </button>
    </igx-card-actions>
</igx-card>
```

`igxLayout` と `igxFlex` のサポートディレクティブを使用して、`igx-card-header` と `igx-card-content` を縦に並べ、カード内の他のセクションは横に並べます。 

`igx-card-actions` のボタンが`垂直`のレイアウトに切り替わりました。`igx-card-actions` は、その親と`逆`のレイアウトになります。そのため、カードの `horizontal` 属性が `true` に設定されているときはいつでもアクションの `vertical` プロパティが `true` に設定され、その逆も同様です。

アクション領域の `vertical` 属性を明示的に設定して、デフォルトの動作を上書きすることができます。 

```html
<igx-card-actions layout="justify" [vertical]="false">
    <button *ngFor="let icon of card.icons;" igxButton="icon" igxRipple igxRippleCentered="true">
        <igx-icon>{{icon}}</igx-icon>
    </button>
</igx-card-actions>
```

以下は横向きのカードです。

<div class="sample-container loading" style="height: 202px">
    <iframe id="card-sample-2-iframe" data-src='{environment:demosBaseUrl}/layouts/card-sample-2' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="card-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

#### その他のレイアウト

`igx-card` カードはさまざまなレイアウトが可能です。

以下は、`igx-card-media` がカードの垂直部分と並んで表示されている状態で、カードのすべての部分を垂直方向にレイアウトし、半横向きのカードを作成する方法を示した例です。

```html
<igx-card [horizontal]="horizontal">
    <div igxLayout igxLayoutDir="column" igxFlex igxFlexGrow="1">
        <igx-card-header>
            <igx-avatar [src]="card.avatarUrl"></igx-avatar>
            <h5 igxCardHeaderTitle>{{card.title}}</h5>
            <h5 igxCardHeaderSubtitle>{{card.subtitle}}</h5>
        </igx-card-header>

        <igx-card-content>
            <p>{{card.content}}</p>
        </igx-card-content>

        <igx-card-actions [vertical]="false">
            <button *ngFor="let button of card.buttons;" igxButton="flat" igxRipple>
                {{button}}
            </button>
        </igx-card-actions>
    </div>

    <igx-card-media width="96px">
        <img [src]="card.imageUrl">
    </igx-card-media>
</igx-card>
```

<div class="sample-container loading" style="height: 252px">
    <iframe id="card-sample-3-iframe" data-src='{environment:demosBaseUrl}/layouts/card-sample-3' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="card-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

#### カード アクション

カードのアクション領域では、すでに説明したコンテンツに追加の設定を加えることができます。

`reverse` 属性を使用して、フラットボタンとボタンアイコンの順序を逆にすることができます。

```html
<igx-card-actions [reverse]="true">
    <button igxButton>Button</button>

    <button igxButton="icon">
        <igx-icon>star</igx-icon>
    </button>
</igx-card-actions>
```

アイコン ボタンはフラットスタイルのテキスト ボタンの前に表示されます。

ボタンは、両端ではなく軸全体に配置されるように配置することもできるため、以下のように、`layout` 属性を使用して値を `justify` に設定します。

```html
<igx-card-actions layout="justify">
    <button igxButton>Button</button>

    <button igxButton="icon">
        <igx-icon>star</igx-icon>
    </button>
</igx-card-actions>
```

### Styling
To get started with styling the card, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 
Following the simplest approach, we create a new theme that extends the [`igx-card-theme`]({environment:sassApiUrl}/index.html#function-igx-card-theme) and accepts some parameters that style the card's items:

```scss
$colorful-card: igx-card-theme(
    $background: #FD6BD93A,
    $header-text-color: #F2F607,
    $subtitle-text-color: #FA2509,
    $content-text-color: #0A41F7
);
```
As seen, the `igx-card-theme` exposes some useful parameters for basic styling of its items. 

The last step is to **include** the component's theme.

```scss
 @include igx-card($colorful-card);
```
>[!NOTE]
>If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

```scss
:host {
     ::ng-deep {
        @include igx-card($colorful-card);
    }
}
```
#### Defining a color palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$yellow-color: #E7EB0B;
$red-color: #F00B1E;
$colorful-palette: igx-palette($primary: $red-color, $secondary: $yellow-color);
```

And then with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette. 

```scss
$colorful-card: igx-card-theme(
    $palette: $colorful-palette,
    $background: igx-color($colorful-palette, "secondary", 100),
    $header-text-color: igx-color($colorful-palette, "primary", 200),
    $subtitle-text-color: igx-color($colorful-palette, "primary", 500),
    $content-text-color: igx-color($colorful-palette, "primary", 700)
);
```

>[!NOTE]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [`Palettes`](themes/palette.md) topic for detailed guidance on how to use them.

#### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](themes/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - the [`dark-card`]({environment:sassApiUrl}/index.html#variable-_dark-card) schema:

```scss
// Extending the dark-card schema
$dark-card-schema: extend($_dark-card,
    (
        background:(
            igx-color:("secondary", 100)
        ),
        header-text-color:(
            igx-color:("primary", 500)
        ),
        subtitle-text-color:(
            igx-color:("primary", 500)
        ),
        content-text-color:(
            igx-color:("primary", 700)
        )
    )
);
```

In order to apply our custom schemas we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
// Extending the global dark-schema
$custom-dark-schema: extend($dark-schema,(
    igx-card: $dark-card-schema
));

// Defining the dark-card theme with the global dark schema
$dark-card: igx-card-theme(
  $palette: $dark-palette,
  $schema: $custom-dark-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

#### Demo

<div class="sample-container loading" style="height: 486px">
    <iframe id="card-style-iframe" seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/layouts/card-styling-sample" class="lazyload no-theming">
</iframe></div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="card-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Summary
In this article we covered a lot of ground with the card component. First, we created a very simple card with text content only. Then added some images to make the card a bit more appealing. We used some additional Ignite UI for Angular components inside our card, like avatars, buttons and icons, to enrich the experience and add some functionality. And finally, we changed the card's theme by setting some exposed theme colors, creating custom palettes and extending schemas. 
The card component is capable of displaying more different layouts worth exploring in the Card Demo in the beginning of this article.

### API と スタイル リファレンス

カード API に関する詳細な情報は、以下のリンクのトピックを参照してください。
* [`IgxCardComponent API`]({environment:angularApiUrl}/classes/igxcardcomponent.html)

以下の定義済み CSS スタイルを使用してカード レイアウトを構成しました。

* [`IgxCardComponent スタイル`]({environment:sassApiUrl}/index.html#function-igx-card-theme)

使用したその他のコンポーネントとディレクティブ

* [`IgxAvatarComponent`]({environment:angularApiUrl}/classes/igxavatarcomponent.html)
* [`IgxIconComponent`]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [`IgxButtonDirective`]({environment:angularApiUrl}/classes/igxbuttondirective.html)
* [`IgxDividerDirective`]({environment:angularApiUrl}/classes/igxdividerdirective.html)

スタイル:

* [`IgxAvatarComponent スタイル`]({environment:sassApiUrl}/index.html#function-igx-avatar-theme)
* [`IgxIconComponent スタイル`]({environment:sassApiUrl}/index.html#function-igx-icon-theme)
* [`IgxButtonDirective スタイル`]({environment:sassApiUrl}/index.html#function-igx-button-theme)

<div class="divider"></div>

###その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
