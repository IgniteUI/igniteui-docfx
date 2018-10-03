---
title: Card コンポーネント
_description: Ignite UI for Angular Card コンポーネントを使用して、詳細情報のエントリ ポイントとして、ダッシュボード、テキスト、画像、アイコン、ボタンなどを表示します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Card コンポーネント, Angular Card コントロール
_language: ja
---

## Card

<p class="highlight">The Ignite UI for Angular [`IgxCardComponent`]({environment:angularApiUrl}/classes/igxcardcomponent.html) displays text, images, icons, and buttons in a visually rich presentation that can serve as an entry point to more detailed information. Cards can be used to create a multimedia dashboard. The Card component supports pagination using the same component as the Ignite UI for Angular Grid, with some custom coding required.</p>
<div class="divider"></div>

### Card デモ
<div class="sample-container loading" style="height: 930px">
    <iframe id="card-sample-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/card" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="card-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法
Card コンポーネントは、様々なオブジェクト タイプ、サイズやサポートされる操作が異なる同様のオブジェクトから成るコンテンツを表示できます。

#### はじめに
Ignite UI for Angular Card を初期化する前に、[`IgxCardModule`]({environment:angularApiUrl}/classes/igxcardmodule.html) を **app.module.ts** ファイルにインポートします:

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

以下のコードは、Card コンポーネントのテンプレートでヘッダー領域および短いテキスト コンテンツを含むベーシックなカードを表示します。

```html
<!--infocard.component.html>-->

<igx-card>
  <igx-card-header>
    <h3 class="igx-card-header__title">Brad Stanley</h3>
    <h5 class="igx-card-header__subtitle">Audi AG</h5>
  </igx-card-header>
  <igx-card-content>
    <p class="igx-card-content__text">Brad Stanley (born 17 March 1963 in Titting, Germany) is a German business executive and chairman of the Vorstand (CEO) of Audi AG.</p>
  </igx-card-content>
</igx-card>
```

以下は結果です。
<div class="sample-container" style="height: 300px">
    <iframe id="card-sample-1-iframe" src='{environment:demosBaseUrl}/card-sample-1' width="100%" height="100%" seamless frameBorder="0"  onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="card-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

#### アバターおよび画像の追加

ルーパート スタドラーは人気がありますが、カードをもう少し魅力的に変えてみます。名前の左に画像のアバターを表示し、より大きい Audi TT 画像を追加できます。要素を追加するには、[**IgxAvatar**](avatar.md) モジュールを **app.module.ts** ファイルにインポートします。
```typescript
// app.module.ts

...
import {
    IgxCardModule,
    IgxAvatarModule
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxAvatarModule],
})
export class AppModule {}
```

次に丸いアバター図形および実際の車を表示するためにカードのテンプレートを変更します。

```html
<!--infocard.component.html>-->

<igx-card>
    <igx-card-header class="compact">
        <igx-avatar src="assets/images/card/avatars/brad_stanley.jpg" roundShape="true"></igx-avatar>
        <div class="igx-card-header__tgroup">
            <h3 class="igx-card-header__title--small">Brad Stanley</h3>
            <h5 class="igx-card-header__subtitle">Audi AG</h5>
        </div>
    </igx-card-header>
    <div style="overflow: hidden">
        <img width="100%" height="100%" src="assets/images/card/media/audi_tt.jpg">
    </div>
    <igx-card-content>
      <p class="igx-card-content__text">Brad Stanley (born 17 March 1963 in Titting, Germany) is a German business executive and chairman of the Vorstand (CEO) of Audi AG.</p>
    </igx-card-content>
</igx-card>
```

この時点でカードは以下のような外観になります。
<div class="sample-container" style="height: 480px">
    <iframe id="card-sample-2-iframe" src='{environment:demosBaseUrl}/card-sample-2' width="100%" height="100%" seamless frameBorder="0"  onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="card-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

#### アクションの追加

カードに多くの情報が含まれるようになりました。更に他の機能も追加します。その他のコンポーネントを使用してエクスペリエンスを向上し、機能を追加します。
カードからソーシャル メディアにアクセスするオプションを追加します。要素を追加するには、[**IgxButton**](button.md) および [**IgxIcon**](icon.md) モジュールを取得して **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import {
    IgxCardModule,
    IgxAvatarModule,
    IgxIconModule,
    IgxButtonModule
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxIconModule, IgxButtonModule],
})
export class AppModule {}
```

次にこのアクション ボタンを表示するためにカードのテンプレートを変更します。

```html
<!--infocard.component.html>-->

<igx-card>
    <igx-card-header class="compact">
        <igx-avatar src="assets/images/card/avatars/brad_stanley.jpg" roundShape="true"></igx-avatar>
        <div class="igx-card-header__tgroup">
            <h3 class="igx-card-header__title--small">Brad Stanley</h3>
            <h5 class="igx-card-header__subtitle">Audi AG</h5>
        </div>
    </igx-card-header>
    <div style="overflow: hidden">
        <img width="100%" height="100%" src="assets/images/card/media/audi_tt.jpg">
    </div>
    <igx-card-actions >
        <div class="igx-card-actions__igroup--start">
            <span igxButton="icon" igxRipple igxRippleCentered="true" *ngFor="let icon of icons">
                <igx-icon fontSet="material" [name]="icon"></igx-icon>
            </span>
        </div>
        <button igxButton igxRipple >Follow</button>
    </igx-card-actions>
</igx-card>
```

**igx-icon** コンポーネントの fontSet プロパティを "material" に設定し、[**マテリアル アイコン セット**](https://material.io/icons/)の 2 つのアイコンを追加しました。このアイコンのリストは **infocard.component.ts** ファイルで定義されます。

```typescript
// infocard.comoponent.ts

public icons = ['add', 'star'];
```

簡単に機能を追加できました。ブラウザーで結果を確認します。
<div class="sample-container" style="height: 400px">
    <iframe id="card-sample-3-iframe" src='{environment:demosBaseUrl}/card-sample-3' width="100%" height="100%" seamless frameBorder="0"  onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="card-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

<div class="divider--half"></div>

####Summary
In this article we covered a lot of ground with the card component. First, we created a very simple card with text content only. Then added some images to make the card a bit more appealing. Finally, we used some additional Ignite UI for Angular components inside our card, like avatars, buttons and icons, to enrich the experience and add some functionality. The card component is capable of displaying more different layouts worth exploring in the Card Demo in the beginning of this article.

### API and Style References

For more detailed information regarding the card's API, refer to the following links:
* [`IgxCardComponent API`]({environment:angularApiUrl}/classes/igxcardcomponent.html)

The following built-in CSS styles helped us achieve this card layout:

* [`IgxCardComponent Styles`]({environment:sassApiUrl}/index.html#mixin-igx-card)

Additional components and/or directives that were used:

* [`IgxAvatarComponent`]({environment:angularApiUrl}/classes/igxavatarcomponent.html)
* [`IgxIconComponent`]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [`IgxButtonDirective`]({environment:angularApiUrl}/classes/igxbuttondirective.html)

<div class="divider"></div>

### 追加のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
