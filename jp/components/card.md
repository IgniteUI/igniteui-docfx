---
title: Angular Card コンポーネント – Ignite UI for Angular
_description: Angular Card コンポーネントを使用して、詳細情報のエントリ ポイントとして、ダッシュボード、テキスト、画像、アイコン、ボタンなどを表示します。今すぐお試しください。
_keywords: Angular Card コンポーネント, Angular Card コントロール, Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, Angular UI コンポーネント, ネイティブ Angular コンポーネント ライブラリ
_language: ja
---

# Angular Card (カード) コンポーネントの概要
<p class="highlight">
Angular Card は、タイトル テキスト、説明、画像スタイル、CTA (行動喚起) ボタン、リンクなどのさまざまな要素を持つ柔軟なコンテナーを表します。特定のシナリオ/コンテンツを可能な限り最適な方法で表現するために、さまざまな表示オプション、ヘッダー、フッター、背景色、アニメーションなどを提供します。  

この軽量の Angular Card コンポーネントは、あらゆる種類のカードの作成に使用されます。その中には、名刺、マテリアル フリッピング カード、スタック カードなどがあります。
</p>

## Angular Card の例
以下に、画像、タイトル、サブタイトル、主要なカード コンテンツ、ボタンのコンテナなどの主要なカード セクションを備えた、巧妙に作成された Ignite UI for Angular Card の基本的なサンプルを示します。

<code-view style="height: 500px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/card-sample-0" alt="Angular Card の例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Card を使用した作業の開始

Ignite UI for Angular Card コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxCardModule` をインポートします。

```typescript
// app.module.ts
...
import { IgxCardModule } from 'igniteui-angular';
// import { IgxCardModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxCardModule],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxCardComponent` をスタンドアロンの依存関係としてインポートすることも、[`IGX_CARD_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/card/public_api.ts) トークンを使用してコンポーネントとそのすべてのサポート コンポーネントおよびディレクティブをインポートすることもできます。

```typescript
// home.component.ts

import { IGX_CARD_DIRECTIVES } from 'igniteui-angular';
// import { IGX_CARD_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-card>
        <igx-card-media height="196px">
            <img [src]="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=50">
        </igx-card-media>

        <igx-card-header>
            <h3 igxCardHeaderTitle>New York</h3>
            <h5 igxCardHeaderSubtitle>City in New York</h5>
        </igx-card-header>

        <igx-card-content>
            <p>New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers.</p>
        </igx-card-content>

        <igx-card-actions>
            <button igxButton igxRipple>Read More</button>
            <button igxIconButton="flat" igxRipple igxRippleCentered="true">
                <igx-icon>favorite</igx-icon>
            </button>
            <button igxIconButton="flat" igxRipple igxRippleCentered="true">
                <igx-icon>share</igx-icon>
            </button>
        </igx-card-actions>
    </igx-card>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_CARD_DIRECTIVES]
    /* or imports: [IgxCardComponent,
        IgxCardHeaderComponent,
        IgxCardMediaDirective,
        IgxCardContentDirective,
        IgxCardActionsComponent,
        IgxCardFooterDirective,
        IgxCardHeaderTitleDirective,
        IgxCardHeaderSubtitleDirective,
        IgxCardThumbnailDirective,
        IgxButtonDirective,
        IgxRippleDirective] */
})
export class HomeComponent {}
```

Ignite UI for Angular Card モジュールまたはディレクティブをインポートしたので、`igx-card` コンポーネントの使用を開始できます。

## Angular Card コンポーネントの使用
次に、デモのカード テンプレートを表すために、以下のコードを追加します。

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
        <p>New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers.</p>
    </igx-card-content>

    <igx-card-actions>
        <button igxButton igxRipple>Read More</button>
        <button igxIconButton="flat" igxRipple igxRippleCentered="true">
            <igx-icon>favorite</igx-icon>
        </button>
        <button igxIconButton="flat" igxRipple igxRippleCentered="true">
            <igx-icon>share</igx-icon>
        </button>
    </igx-card-actions>
</igx-card>
```

上記を確認することができます。最初に `h3` 見出しのように要素をヘッダータイトルとしてタグ付けしたい場合は、`igx-card-header` タグの間に配置し、`igxCardHeaderTitle` ディレクティブを要素に添付します。逆に、別の見出し要素を `subtitle` にしたい場合は、`igxCardHeaderSubtitle` をその要素に添付します。

Angular Card に表示する画像や動画は、`igx-card-media` タグで囲みます。`igx-card-media` を使用すると、`width` や `height` 属性を使用して内側に配置されているコンテンツのサイズを変更できます。上の例では、`height` のみ指定し、幅を `auto` にすることにより、設定された高さを維持しながら画像をカードの表面全体に広げることが可能になります。

`igx-card-content` タグ内には何でも配置できます。通常テキストが配置されます。

最後に `igx-card-actions` は、ボタンのようなアクション可能なアイテムを配置する場所です。要素に `igxButton` ディレクティブを使用すると、その領域内の材料設計仕様に従って自動的に正しく配置されます。

### メディア、サムネイル、アバター
タイトルや字幕の横のカード ヘッダーに画像やアイコンを表示したい場合は、`igxCardThumbnail` ディレクティブを使用してそれを実行できます。

上記のカードを例にとると、`igx-card-header` の内容を編集して、アイコンを保持する `igxCardThumbnail` コンテナーを追加できます。

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

以下も可能です。

```html
<igx-card-header>
    <igx-card-media width="40px" height="40px">
        <img src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=50">
    </igx-card-media>

    <h3 igxCardHeaderTitle>Title</h3>
    <h5 igxCardHeaderSubtitle>Subtitle</h5>
</igx-card-header>
```

### カードのアウトライン
カードには `type` 属性があり、`default` (省略した場合は自動的に設定) または `outlined` に設定できます。`outlined` タイプは、細い境界線と置き換えてカードと背景を区別してカードからすべてのシャドウを削除します。

### Angular Card の水平レイアウト

デフォルトでは、カードのすべてのセクション (ヘッダー、コンテンツ、メディア、アクション) は縦にレイアウトされています。垂直方向のスペースが多くある場合に便利です。カードのすべてのセクションを水平に配置する場合、カードの `horizontal` 属性を使用してレイアウトを設定できます。

以下はアウトラインのある水平カードの例です。

```html
<igx-card type="outlined" [horizontal]="horizontal">
    <div class="h-sample-column">
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
        <button *ngFor="let icon of card.icons;" igxIconButton="flat" igxRipple igxRippleCentered="true">
            <igx-icon>{{icon}}</igx-icon>
        </button>
    </igx-card-actions>
</igx-card>
```

`.h-sample-column` クラスを使用して、`igx-card-header` と `igx-card-content` をまとめてバンドルし、垂直に揃え、カード内の他のセクションを水平に揃えています。 

以下は、`.h-sample-column` クラスが適用されるスタイルです。

```scss
.h-sample-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 1 0%;

  igx-card-header {
      padding-bottom: 0;
  }
}
```

`igx-card-actions` のボタンが `vertical` のレイアウトに切り替わりました。`igx-card-actions` は、その親と `inverse` のレイアウトになります。そのため、カードの `horizontal` 属性が `true` に設定されているときはいつでもアクションの `vertical` プロパティが `true` に設定され、その逆も同様です。

アクション領域の `vertical` 属性を明示的に設定して、デフォルトの動作を上書きすることができます。

```html
<igx-card-actions layout="justify" [vertical]="false">
    <button *ngFor="let icon of card.icons;" igxIconButton="flat" igxRipple igxRippleCentered="true">
        <igx-icon>{{icon}}</igx-icon>
    </button>
</igx-card-actions>
```
すべて適切に設定できると、結果は以下のようになります。 


<code-view style="height: 220px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/card-sample-2" >
</code-view>


### その他のレイアウト

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


<code-view style="height: 270px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/card-sample-3" >
</code-view>


### Angular Card の操作

Angular Card の操作領域では、すでに説明したコンテンツに追加の設定を加えることができます。

`igxStart` または `igxEnd` ディレクティブを使用して、カードのアクション領域内の要素を先頭または末尾に配置できます。

```html
<igx-card-actions>
    <button igxIconButton="flat" igxStart>
        <igx-icon>drag_indicator</igx-icon>
    </button>
    <button igxIconButton="flat" igxEnd>
        <igx-icon>favorite</igx-icon>
    </button>
</igx-card-actions>
```

ボタンは、両端ではなく軸全体に配置されるように配置することができます。そのためには、以下のように `layout` 属性を使用してその値を `justify` に設定します。

```html
<igx-card-actions layout="justify">
    <button igxButton>Button</button>

    <button igxIconButton="flat">
        <igx-icon>star</igx-icon>
    </button>
</igx-card-actions>
```

## スタイル設定
Card のスタイル設定を始めるには、すべてのテーマ関数とコンポーネントミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最もシンプルな方法として、[`card-theme`]({environment:sassApiUrl}/themes#function-card-theme) を拡張し、少数のスタイル パラメーターのみを指定して新しいテーマを作成します。`$background` パラメーターのみを指定した場合でも、適切な前景色 (黒または白) が自動的に選ばれて割り当てられます。

```scss
$colorful-card: card-theme(
  $background: #011627,
  $subtitle-text-color: #ecaa53,
);
```

ご覧のとおり、`card-theme` は、アイテムの基本的なスタイル設定に役立ついくつかのパラメーターを公開しています。

最後の手順は、コンポーネントのテーマを**含める**ことです。

```scss
@include css-vars($colorful-card);
```

### Angular Card のデモ


<code-view style="height: 486px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/card-styling-sample" >
</code-view>


### まとめ
このトピックでは Card コンポーネントの詳細について説明しました。最初にテキスト コンテンツのみを含むベーシックなカードを作成しました。次に画像を追加しました。他の Ignite UI for Angular コンポーネントをカードで使用して、アバター、ボタン、およびアイコンを追加して機能性を向上しました。最後に公開されたテーマの色を設定してカスタムパレットを作成、スキーマを拡張してカードのテーマを変更しました。
カード コンポーネントはその他のレイアウトも表示できます。詳細については、このトピックの最初の部分の Card デモを参照してください。

## API と スタイル リファレンス

カード API に関する詳細な情報は、以下のリンクのトピックを参照してください。
* [`IgxCardComponent API`]({environment:angularApiUrl}/classes/igxcardcomponent.html)

以下の定義済み CSS スタイルを使用してカード レイアウトを構成しました。

* [`IgxCardComponent スタイル`]({environment:sassApiUrl}/themes#function-card-theme)

使用したその他のコンポーネントとディレクティブ

* [`IgxAvatarComponent`]({environment:angularApiUrl}/classes/igxavatarcomponent.html)
* [`IgxIconComponent`]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [`IgxButtonDirective`]({environment:angularApiUrl}/classes/igxbuttondirective.html)
* [`IgxDividerDirective`]({environment:angularApiUrl}/classes/igxdividerdirective.html)

スタイル:

* [`IgxAvatarComponent スタイル`]({environment:sassApiUrl}/themes#function-avatar-theme)
* [`IgxIconComponent スタイル`]({environment:sassApiUrl}/themes#function-icon-theme)
* [`IgxButtonDirective スタイル`]({environment:sassApiUrl}/themes#function-button-theme)

<div class="divider"></div>

## テーマの依存関係
* [IgxButton テーマ]({environment:sassApiUrl}/themes#function-button-theme)
* [IgxAvatar テーマ]({environment:sassApiUrl}/themes#function-avatar-theme)
* [IgxIconTheme]({environment:sassApiUrl}/themes#function-icon-theme)

## その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
