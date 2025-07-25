---
title: Angular Carousel コンポーネント – Ignite UI for Angular
_description: Ignite UI for Angular Carousel コンポーネントを使用すると、スライド、カード、またはページに基づいたインターフェイスのコレクション間を移動できます。今すぐお試しください。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Carousel コンポーネント, Angular Carousel コントロール
_language: ja
---

# Angular Carousel (カルーセル) コンポーネントの概要
<p class="highlight">Ignite UI for Angular Carousel は、レスポンシブで軽量なコンポーネントであり、テキスト スライド、リンク、およびその他の html 要素を含む画像のコレクションを前後に移動するユーザーに、スライドショーのような Web エクスペリエンスを作成する最も柔軟な方法を提供します。 

Angular Carousel コンポーネントを使用すると、アニメーション、スライド トランジション、およびカスタマイズを使用できるため、インターフェイスを簡単に微調整して Angular カスタム カルーセルを構築できます。
</p>
<div class="divider"></div>

## Angular Carousel の例
以下に示す Angular Carousel のデモは、画像のみを含むスライドを示しています。ナビゲーション ボタンを有効にして、ユーザーがスライド間を簡単に移動できるようにしました。

<code-view style="height: 550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/carousel" alt="Angular Carousel の例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Carousel を使用した作業の開始
Ignite UI for Angular Carousel コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

The next step is to import the **IgxCarouselModule** in our **app.module.ts** file:

>[!NOTE]
>このコンポーネントは、**オプションで** [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) を利用できます。タッチ操作が正しく動作するために、アプリケーションのルート モジュールにインポートできます。

```typescript
// app.module.ts

import { HammerModule } from '@angular/platform-browser';
import { IgxCarouselModule } from 'igniteui-angular';
// import { IgxCarouselModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., HammerModule, IgxCarouselModule],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxCarouselComponent` をスタンドアロンの依存関係としてインポートすることも、[`IGX_CAROUSEL_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/carousel/public_api.ts) トークンを使用してコンポーネントとそのすべてのサポート コンポーネントおよびディレクティブをインポートすることもできます。

```typescript
// home.component.ts

import { HammerModule } from '@angular/platform-browser';
import { IGX_CAROUSEL_DIRECTIVES } from 'igniteui-angular';
// import { IGX_CAROUSEL_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-carousel>
        <igx-slide *ngFor="let slide of slides">
            <div class="image-container">
                <img [src]="slide.src" />
            </div>
        </igx-slide>
    </igx-carousel>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [HammerModule, IGX_CAROUSEL_DIRECTIVES]
    /* or imports: [HammerModule, IgxCarouselComponent, IgxSlideComponent] */
})
export class HomeComponent {}
```

Ignite UI for Angular Carousel モジュールまたはディレクティブをインポートしたので、`igx-carousel` コンポーネントの使用を開始できます。

## Angular Carousel コンポーネントの使用
Ignite UI for Angular Carousel コンポーネントを全画面要素またはコンポーネントの子に設定できます。また、スライドに有効な HTML コンテンツ、その他の Angular コンポーネントなども含めることができます。

このセクションでは、上記で定義した **デモ** の設定を行います。

### *ngFor を使用してスライドを追加する
<div class="divider--half"></div>

同じ種類のコンテンツを含むスライドがある場合、最も簡単な方法は *\*ngFor* を使用してテンプレートに追加する方法です。

スライドには画像のみが含まれるので、**ts** ファイルにオブジェクトの配列を作成し、それを使用して **igx-carousel** にスライドを追加します。

```typescript
@Component({...})
export class HomeComponent {
    public slides = [
        { src: '/assets/images/carousel/ignite-ui-angular-indigo-design.png' },
        { src: '/assets/images/carousel/slider-image-chart.png' },
        { src: '/assets/images/carousel/ignite-ui-angular-charts.png' }
    ];
}
```

```html
<div class="carousel-container">
    <igx-carousel #carousel>
        <igx-slide *ngFor="let slide of slides">
            <div class="image-container">
                <img [src]="slide.src" />
            </div>
        </igx-slide>
    </igx-carousel>
</div>
```
## Angular Carousel のカスタム例

### IgxCarousel の定義
<div class="divider--half"></div>

デフォルトでは、Angular のカルーセルの [`loop`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#loop) 入力プロパティは `true` に設定されています (ループは、Next 動作でナビゲートするときに最初のスライドが最後のスライドの後に来るか、Previous 動作を使用して最後のスライドが最初のスライドの後に来るときに起こります)。ループ動作を無効にするには、[`loop`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#loop) 入力の値を `false` に設定します。

```html
<igx-carousel [loop]="false">
    ...
</igx-carousel>
```

各スライド インデックスを追跡するために、カルーセルには、デフォルトでカルーセルの `end` に配置されるインジケーターがあります。この動作を変更するには、[`indicatorsOrientation`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#indicatorsOrientation) プロパティを使用して、`start` に割り当てます。

```html
<igx-carousel indicatorsOrientation="start">
    ...
</igx-carousel>
```

デフォルトでは、[`IgxCarousel`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html) はナビゲーション ボタンとインジケーターを表示します。インジケーターを非表示にするには [`indicators`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#indicators) プロパティを使用し、ナビゲーション ボタンを非表示にするには [`navigation`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#navigation) プロパティを使用します。

```html
<igx-carousel [navigation]="false" [indicators]="false">
    ...
</igx-carousel>
```

[`IgxCarousel`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html) は垂直モードをサポートします。これを有効にするには、[`vertical`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#vertical) プロパティを使用します。

```html
<igx-carousel [vertical]="true">
    ...
</igx-carousel>
```

### カスタム インジケーター
<div class="divider--half"></div>

Angular カスタム カルーセル インジケーターを追加するには、以下のように [IgxCarouselIndicatorDirective]({environment:angularApiUrl}/classes/igxcarouselindicatordirective.html) を使用する必要があります。

```html
...
  <ng-template igxCarouselIndicator let-slide>
      <div [ngClass]="{'selected': slide.current === current}"></div>
  </ng-template>
...
```

### カスタム nav ボタン

これを実現するために、[IgxCarouselPrevButtonDirective]({environment:angularApiUrl}/classes/igxcarouselprevbuttondirective.html) と [IgxCarouselNextButtonDirective]({environment:angularApiUrl}/classes/igxcarouselnextbuttondirective.html) ディレクティブを使用します。

```html
...
    <ng-template igxCarouselNextButton let-disabled>
        <button igxButton="fab" igxRipple="white" [disabled]="disabled">
            <igx-icon fontSet="material">navigate_next</igx-icon>
        </button>
    </ng-template>

    <ng-template igxCarouselPrevButton let-disabled>
        <button igxButton="fab" igxRipple="white" [disabled]="disabled">
            <igx-icon fontSet="material">navigate_before</igx-icon>
        </button>
    </ng-template>
...
```

### 他のコンポーネントを含むスライド
<div class="divider--half"></div>

このカルーセルには、フォームと画像を含むスライドが含まれます。
```html
...
  <div class="carousel-container">
    <igx-carousel>
        <igx-slide>
            <div class="slide-content-wrapper">
                <img src="assets/images/svg/carousel/SignUp.svg">
                <form #form class="signInForm">
                    <igx-input-group>
                        <igx-prefix>
                            <igx-icon>person</igx-icon>
                        </igx-prefix>
                        <label style="display: flex;" igxLabel for="username">Username</label>
                        <input igxInput id="username" type="text" />
                    </igx-input-group>
                    <igx-input-group>
                        <igx-prefix>
                            <igx-icon>lock</igx-icon>
                        </igx-prefix>
                        <label style="display: flex;" igxLabel for="password">Password</label>
                        <input igxInput id="password" type="password" />
                    </igx-input-group>
                </form>
                <div class="btn">
                    <button igxButton="contained" type="submit" (click)="form.reset()">Sign In</button>
                </div>
            </div>
        </igx-slide>

        <igx-slide>
            <div class="slide-content-wrapper">
                <img src="assets/images/svg/carousel/Route.svg">
                <form #form2 class="searchForm">
                    <igx-input-group>
                        <igx-prefix>
                            <igx-icon>search</igx-icon>
                        </igx-prefix>
                        <label style="display: flex;" igxLabel for="username">Search</label>
                        <input igxInput id="search" type="text" />
                    </igx-input-group>
                </form>
                <div class="btn">
                    <button igxButton="contained" type="submit" (click)="form2.reset()">Search</button>
                </div>
            </div>
        </igx-slide>
    </igx-carousel>
</div>
...
```

#### デモ


<code-view style="height: 700px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/carousel-with-components-sample" >
</code-view>



## Angular Carousel のアニメーション

アニメーション化されたスライド遷移により、エンドユーザーはカルーセルを操作しているときに高いエクスペリエンスを得ることができます。

デフォルトでカルーセルは `slide` アニメーションを使用するように設定されていますが、代替アニメーションとして `fade` もサポートしています。

アニメーションは [animationType]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#animationType)入力を介して構成されます。

```html
<igx-carousel animationType="fade">
...
</igx-carousel>

```
`animationType` 入力に `none` を設定すると、カルーセルのアニメーションが無効になります。


### デモ

以下のデモは、カルーセルがサポートするさまざまなタイプのアニメーションを示しています。


<code-view style="height: 700px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/carousel-animations-sample" >
</code-view>



## ナビゲーション
<div class="divider--half"></div>

トランジションとナビゲーションは、最も重要なカルーセル機能です。

カルーセル内のナビゲーションは、モバイル デバイスでのナビゲーション ボタン、キーボード ナビゲーション、パン操作を通じてユーザーが処理できます。

### パン ジェスチャ
<div class="divider--half"></div>

デフォルトでカルーセルはあらゆるタッチ対応デバイスに使用できます。これはオプションであり、[gesturesSupport]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#gesturesSupport) プロパティを `false` に設定して変更できます。

Carousel [アニメーション](carousel.md#angular-carousel-のアニメーション)はタッチ デバイスで完全にサポートされているため、プラットホームに合わせてプログレッシブ Web アプリケーション ([PWA](https://developer.mozilla.org/ja/docs/Web/Progressive_web_apps)) を構築するための完璧なツールです。

### キーボード ナビゲーション
<div class="divider--half"></div>

* ナビゲーション ボタン
    * `Space`/`Enter` キー - 次のスライド/前のスライドに移動します。
* インジケーター
    * `左矢印` キー - 前のスライド (右から左モードでは次) に移動します。
    * `右矢印` キー - 次のスライド  (右から左モードでは前へ) に移動します。
    * `Home` キー - 最初のスライド (右から左モードでは最後) に移動します。
    * `End` キー - 最後のスライド (右から左モードでは最初) に移動します。

### 自動的なトランジション
<div class="divider--half"></div>

**IgxCarousel** は、ユーザーの操作なしでスライドを自動的に変更するように簡単に構成できます。この方法では、トランジション間隔を [interval]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#interval) プロパティに設定するだけで、スライドショーを作成できます。このプロパティは、スライド トランジション間の間隔 (ミリ秒)を決定します。

>[!NOTE]
>自動的なスライド トランジションは、デフォルトでユーザーに完全に依存しているわけではありません。スライドの上にマウス ポインターを置くと、マウス ポインターがスライド領域から出るまで、現在のスライド トランジションが中断されます。これは、[pause]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#pause) プロパティを `false` に設定することで防止できます。

## 高度な例
<div class="divider--half"></div>

ループを有効にして完全に自動化されたカルーセルを作成しましょう。各スライドは、リスト内の[リスト項目]({environment:angularApiUrl}/classes/igxlistitemcomponent.html) と同期されます。リスト項目をクリックすると、スライドの変更がトリガーされます。


これを実現するには、カルーセルを以下のように構成する必要があります。
 - `gesturesSupport` を無効にします。
 - `navigation` ボタンを無効にします。
 - カルーセル `indicator` を無効にします。
 - ユーザーがスライドを操作すると `pause` を無効にします。
 - トランジション `interval` を追加します。

カルーセル テンプレートは以下のようになります。

```html
...
<div class="carousel-wrapper">
    <igx-carousel [navigation]="false" [indicators]="false" [pause]="false" animationType="fade" [interval]="2000" [gesturesSupport]="false">
        <igx-slide *ngFor="let item of slides">
            <!-- Slides content goes here -->
        </igx-slide>
    </igx-carousel>
</div>
...
```
カルーセル構成の準備ができました。次に、[リスト](list.md) コンポーネントを追加して、両方のコンポーネントを同期します。

[IgxList]({environment:angularApiUrl}/classes/igxlistcomponent.html) の追加:
```html
...
<div class="list-wrapper">
    <igx-list>
      <!-- Adding disabled classes when the list item index does not match the current slide index-->
        <igx-list-item *ngFor="let item of slides; let i=index" [ngClass]="{'disabled': i !== currentIndex }" >
      <!-- List item content goes here -->
        </igx-list-item>
    </igx-list>
</div>
...
```
カルーセルの [`slideChanged`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#slideChanged) およびリストの [itemClicked]({environment:angularApiUrl}/classes/igxlistcomponent.html#itemClicked) イベントを処理し、コンポーネントを同期する方法:

>[!NOTE]
>v15.1.0 以降、`onSlideChanged` の名前が `slideChanged` に変更されました。`ng update` を使用すると、新しいイベント名を使用する前にコードが自動的に移行されます。

```typescript
  public ngOnInit() {
    this.list.itemClicked.subscribe((args: IListItemClickEventArgs) => {
        this.currentIndex = args.item.index;
        this.carousel.select(this.carousel.get(this.currentIndex));
    });

    this.carousel.slideChanged.subscribe((args: ISlideEventArgs) => {
        this.currentIndex = args.slide.index;
    });
  }
```
これらの構成の結果は以下のようになります。

<code-view style="height: 700px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/carousel-no-navigation-sample" >
</code-view>



## ユーザー補助
### WAI-ARIA の役割、状態、およびプロパティ
 * Carousel の基本要素の役割は [`region`](https://www.w3.org/TR/wai-aria-1.1/#region) です。これは、ユーザーが簡単にナビゲートできるようにしたい特定の目的に関連するコンテンツを含むセクションです。
 * Carousel インジケーターの役割は [`tab`](https://www.w3.org/TR/wai-aria-1.1/#tab) です。これは、ユーザーに描画されるタブ コンテンツを選択するためのメカニズムを提供するグループ化ラベルです。
 * タブのセット (カルーセル インジケーター) 役割のコンテナーとして機能する要素は、[`tablist`](https://www.w3.org/TR/wai-aria-1.1/#tab) に設定されます。
 * 各スライド要素には、[`tabpanel`](https://www.w3.org/TR/wai-aria-1.1/#tabpanel) の役割が設定されています。
 * igx-slides のセットのコンテナーとして機能する要素は、[aria-live](https://www.w3.org/TR/wai-aria-1.1/#aria-live)="polite" で設定されます。どちらのオプションも
   - カルーセルが自動的に回転している場合、**off** になります。
   - カルーセルが自動的に回転しない場合、**polite** になります。

### ARIA のサポート
#### **Carousel コンポーネント**

##### **属性**:
 * [aria-roledescription](https://www.w3.org/TR/wai-aria-1.1/#aria-roledescription) を 'carousel' に設定します。
 * [aria-selected](https://www.w3.org/TR/wai-aria/states_and_properties#aria-selected) - アクティブなスライドに基づいて *true* または *false* に設定します。
 * [aria-controls](https://www.w3.org/TR/wai-aria-1.1/#aria-controls) - コンテンツが現在の要素によって制御されるスライド インデックスを設定します。
 * [aria-live](https://www.w3.org/TR/wai-aria-1.1/#aria-live) - スクリーン リーダーがライブ リージョンの更新を処理する優先度を設定するために使用されます。可能な設定は **off** および **polite** です。デフォルト設定は **polite** です。[interval]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#interval) オプションが設定されている場合、**aria-live** 属性は  **off** に設定されます。
 * スライドに基づく [aria-label](https://www.w3.org/TR/wai-aria/states_and_properties#aria-label)。
 * aria-label (ボタン)
   - aria-label - 前のスライド用。
   - aria-label - 次のスライド用。

#### **Slide コンポーネント**
##### **役割**:
 * [attr.role="tabpanel"](https://www.w3.org/TR/wai-aria-1.1/#tabpanel) - タブに関連付けられたリソースのコンテナー。各タブはタブ リストに含まれています。

##### **属性**:
 * id - パターン "panel-${this.index}" に従います。
 * [aria-labelledby](https://www.w3.org/TR/wai-aria/#aria-labelledby) は、"tab-${this.index}-${this.total}" のパターンに従います。
 * [aria-selected](https://www.w3.org/TR/wai-aria-1.1/#aria-selected) は、**アクティブ** スライドを設定します。特定のスライド要素の現在の**選択された**状態を示します。

## API リファレンス
<div class="divider--half"></div>

* [IgxCarouselComponent]({environment:angularApiUrl}/classes/igxcarouselcomponent.html)
* [IgxCarouselComponent スタイル]({environment:sassApiUrl}/themes#function-carousel-theme)
* [IgxSlideComponent]({environment:angularApiUrl}/classes/igxslidecomponent.html)
* [IgxListComponent]({environment:angularApiUrl}/classes/igxlistcomponent.html)
* [IgxListItemComponent]({environment:angularApiUrl}/classes/igxlistitemcomponent.html)

## テーマの依存関係
* [IgxIcon テーマ]({environment:sassApiUrl}/themes#function-icon-theme)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
