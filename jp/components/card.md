---
title: Card コンポーネント
_description: Ignite UI for Angular Card コンポーネントを使用して、詳細情報のエントリ ポイントとして、ダッシュボード、テキスト、画像、アイコン、ボタンなどを表示します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Card コンポーネント, Angular Card コントロール
_language: ja
---

## Card

<p class="highlight">Ignite UI for Angular [`IgxCardComponent`]({environment:angularApiUrl}/classes/igxcardcomponent.html) は、テキスト、画像、アイコン、およびボタンを表示します。この要素は詳細情報のエントリ ポイントになります。Card を使用してマルチメディア ダッシュボードを作成できます。Card コンポーネントは、Ignite UI for Angular Grid と同じコンポーネントを使用してページングをサポートします。ただし、カスタム コードが必要です。</p>
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

####まとめ
このトピックでは Card コンポーネントの詳細について説明しました。テキスト コンテンツのみを含むベーシックなカードを作成し、次に画像、最後に他の Ignite UI for Angular コンポーネントをカードで使用してアバター、ボタン、およびアイコンを追加して機能を改善しました。カード コンポーネントはその他のレイアウトも表示できます。詳細については、このトピックの最初の部分の Card デモを参照してください。

### API と スタイル リファレンス

カード API に関する詳細な情報は、以下のリンクのトピックを参照してください。
* [`IgxCardComponent API`]({environment:angularApiUrl}/classes/igxcardcomponent.html)

以下の定義済み CSS スタイルを使用してカード レイアウトを構成しました。

* [`IgxCardComponent Styles`]({environment:sassApiUrl}/index.html#mixin-igx-card)

使用したその他のコンポーネントとディレクティブ:

* [`IgxAvatarComponent`]({environment:angularApiUrl}/classes/igxavatarcomponent.html)
* [`IgxIconComponent`]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [`IgxButtonDirective`]({environment:angularApiUrl}/classes/igxbuttondirective.html)

<div class="divider"></div>

### その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
