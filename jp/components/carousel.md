---
title: Carousel コンポーネント
_description: Ignite UI for Angular Carousel コンポーネントを使用すると、スライド、カード、またはページに基づいたインターフェイスのコレクション間を移動できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Carousel コンポーネント, Angular Carousel コントロール
_language: ja
---

# Carousel
<p class="highlight">Ignite UI for Angular Carousel コンポーネントは、ネイティブ [Angular コンポーネント](https://angular.io/guide/architecture#components)です。画像ギャラリー、カード、チュートリアル、またはページごとのインターフェイスでスライド コレクションをブラウズ、移動できます。</p>
<div class="divider"></div>

## Angular Carousel の例
<div class="sample-container loading" style="height: 550px">
    <iframe id="carousel-iframe" seamless="" width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/layouts/carousel" onload="onSampleIframeContentLoaded(this);" alt="Angular Carousel の例"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://jp.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="carousel-iframe" data-demos-base-url="{environment:demosBaseUrl}">                codesandbox で表示
    </button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="carousel-iframe" data-demos-base-url="{environment:demosBaseUrl}">                Stackblitz で表示
    </button>
</div>


## 使用方法
Carousel を全画面要素またはコンポーネントの子に設定できます。また、スライドに有効な HTML コンテンツ、その他の Angular コンポーネントなども含めることができます。

### はじめに
<div class="divider--half"></div>

>[!NOTE]
>このコンポーネントでは、タッチ操作が正しく動作するために、アプリケーションのルート モジュールに [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) をインポートする必要があります。

次に、**app.module.ts** ファイルに **IgxCarouselModule** をインポートします。
```typescript
// app.module.ts

...
import { IgxCarouselModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxCarouselModule],
    ...
})
export class AppModule {}
```

このセクションでは、上記で定義した **デモ** の設定を行います。

### *ngFor を使用してスライドを追加する
<div class="divider--half"></div>

同じ種類のコンテンツを含むスライドがある場合、最も簡単な方法は *\*ngFor* を使用してテンプレートに追加する方法です。

スライドには画像のみが含まれるので、**ts** ファイルにオブジェクトの配列を作成し、それを使用して **igx-carousel** にスライドを追加します。

```typescript
...
public slides = [
      {
        src: "/assets/images/carousel/ignite-ui-angular-indigo-design.png"
      },
      {
        src: "/assets/images/carousel/slider-image-chart.png"
      },
      {
        src: "/assets/images/carousel/ignite-ui-angular-charts.png"
      }
  ];
...
```

```html
...
<div class="carousel-container">
    <igx-carousel #carousel>
            <igx-slide  *ngFor="let slide of slides;">
                <div class="image-container">
                    <img [src]="slide.src">
                </div>
             </igx-slide>
    </igx-carousel>
</div>
...
```
## 例

### IgxCarousel の定義
<div class="divider--half"></div>

デフォルトでは、カルーセルの **[`loop`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#loop)** 入力プロパティは `true` に設定されています (ループは、Next 動作でナビゲートするときに最初のスライドが最後のスライドの後に来るか、Previous 動作を使用して最後のスライドが最初のスライドの後に来るときに起こります)。ループ動作を無効にするには、`loop` 入力の値を `false` に設定します。

各スライド インデックスを追跡するために、カルーセルには、デフォルトでカルーセルの `下部` に配置されるインジケーターがあります。この動作を変更するには、[indicatorsOrientation]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#indicatorsorientation) プロパティを使用して、`top` に割り当てる必要があります。空のテンプレートを追加すると、インジケーターを無効にできます。

カルーセル テンプレートは以下のようになります。

```html
<div class="carousel-container">
    <igx-carousel #carousel [loop]="false">
      ...
        <!-- Adding an empty template to disable carousel's indicators -->
        <ng-template igxCarouselIndicator></ng-template>
    </igx-carousel>
</div>
```

### カスタム インジケーター
<div class="divider--half"></div>

カスタム カルーセル インジケーターを追加するには、以下のように [IgxCarouselIndicatorDirective]({environment:angularApiUrl}/classes/igxcarouselindicatordirective.html) を使用する必要があります。

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
                    <button igxButton="raised" type="submit" (click)="form.reset()">Sign In</button>
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
                    <button igxButton="raised" type="submit" (click)="form2.reset()">Search</button>
                </div>
            </div>
        </igx-slide>
    </igx-carousel>
</div>
...
```

#### デモ

<div class="sample-container loading" style="height: 700px">
    <iframe id="carousel-with-components-sample-iframe" data-src='{environment:demosBaseUrl}/layouts/carousel-with-components-sample' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="carousel-with-components-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">                codesandbox で表示
    </button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="carousel-with-components-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">                StackBlitz で表示
    </button>
</div>


## アニメーション

アニメーション化されたスライド遷移により、エンドユーザーはカルーセルを操作しているときに高いエクスペリエンスを得ることができます。

デフォルトでカルーセルは `slide` アニメーションを使用するように設定されていますが、代替アニメーションとして `fade` もサポートしています。

アニメーションは [animationType]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#animationtype)入力を介して構成されます。

```html
<igx-carousel animationType="fade">
...
</igx-carousel>

```
`animationType` 入力に `none` を設定すると、カルーセルのアニメーションが無効になります。


### デモ

以下のデモは、カルーセルがサポートするさまざまなタイプのアニメーションを示しています。

<div class="sample-container loading" style="height: 700px">
    <iframe id="carousel-animations-sample-iframe" data-src='{environment:demosBaseUrl}/layouts/carousel-animations-sample' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="carousel-animations-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">                codesandbox で表示
    </button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="carousel-animations-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">                StackBlitz で表示
    </button>
</div>


## ナビゲーション
<div class="divider--half"></div>

トランジションとナビゲーションは、最も重要なカルーセル機能です。

カルーセル内のナビゲーションは、モバイル デバイスでのナビゲーション ボタン、キーボード ナビゲーション、パン操作を通じてユーザーが処理できます。

### パン ジェスチャ
<div class="divider--half"></div>

デフォルトでカルーセルはあらゆるタッチ対応デバイスに使用できます。これはオプションであり、[gesturesSupport]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#gesturessupport) プロパティを `false` に設定して変更できます。

カルーセル [アニメーション](carousel.md#アニメーション)はタッチ デバイスで完全にサポートされているため、プラットホームに合わせてプログレッシブ Web アプリケーション ([PWA](https://developer.mozilla.org/ja/docs/Web/Progressive_web_apps)) を構築するための完璧なツールです。

### キーボード ナビゲーション
<div class="divider--half"></div>

*   **次へ**/**前へ**のスライドに移動するには、それぞれ以下を使用する必要があります。
    * `右矢印`キー - 次のスライド
    * `左矢印`キー - 前のスライド
*   **最後**/**最初**のスライドに移動するには、それぞれ以下を使用する必要があります。
    * `End` キー - 最後のスライド
    * `Home` キー - 最初のスライド
 
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
 - `ナビゲーション` ボタンを無効にします。
 - カルーセルの`インジケーター`を無効にします。
 - ユーザーがスライドを操作すると `pause` を無効にします。
 - トランジション`間隔`を追加します。

カルーセル テンプレートは以下のようになります。

```html
...
<div class="carousel-wrapper">
    <igx-carousel [navigation]="false" [pause]="false" animationType="fade" [interval]="2000" [gesturesSupport]="false">
        <div class="slides-wrapper">
            <igx-slide *ngFor="let item of slides">
                  <!-- Slides content goes here -->
             </igx-slide>
        </div>
        <!-- Adding an empty template to disable carousel's indicators -->
        <ng-template igxCarouselIndicator></ng-template>
    </igx-carousel>
</div>
...
```
カルーセル構成の準備ができました。次に、[リスト](list.md) コンポーネントを追加して、両方のコンポーネントを同期します。

[IgxList]({environment:angularApiUrl}/classes/igxlistcomponent.html) の追加:
```html
...
<div class="list-wrapper">
    <igx-list displayDensity="compact">
      <!-- Adding disabled classes when the list item index does not match the current slide index-->
        <igx-list-item *ngFor="let item of slides; let i=index" [ngClass]="{'disabled': i !== currentIndex }" >
      <!-- List item content goes here -->
        </igx-list-item>
    </igx-list>
</div>
...
```
カルーセルの [`onSlideChanged`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#onslidechanged) およびリストの [itemClicked]({environment:angularApiUrl}/classes/igxlistcomponent.html#itemclicked) イベントを処理し、コンポーネントを同期する方法: 

```typescript
  public ngOnInit() {
    ...
    this.list.itemClicked.subscribe((args: IListItemClickEventArgs) => {
        this.currentIndex = args.item.index;
        this.carousel.select(this.carousel.get(this.currentIndex));
    });

    this.carousel.onSlideChanged.subscribe((args: ISlideEventArgs) => {
        this.currentIndex = args.slide.index;
    });
  }
```
これらの構成の結果は以下のようになります。
<div class="sample-container loading" style="height: 700px">
<iframe id="carousel-no-navigation-sample-iframe" data-src='{environment:demosBaseUrl}/layouts/carousel-no-navigation-sample' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="carousel-no-navigation-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">                codesandbox で表示
    </button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="carousel-no-navigation-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">                Stackblitz で表示
    </button>
</div>


## ユーザー補助
### WAI-ARIA の役割、状態、およびプロパティ
 * Carousel の基本要素の役割は [`region`](https://www.w3.org/TR/wai-aria-1.1/#region) です。これは、ユーザーが簡単にナビゲートできるようにしたい特定の目的に関連するコンテンツを含むセクションです。
 * Carousel インジケーターの役割は [`tab`](https://www.w3.org/TR/wai-aria-1.1/#tab) です。これは、ユーザーに描画されるタブ コンテンツを選択するためのメカニズムを提供するグループ化ラベルです。
 * タブのセット (カルーセル インジケーター) 役割のコンテナーとして機能する要素は、[`tablist`](https://www.w3.org/TR/wai-aria-1.1/#tab) に設定されます。
 * 各スライド要素には、[`tabpanel`](https://www.w3.org/TR/wai-aria-1.1/#tabpanel) の役割が設定されています。
 * igx-slides のセットのコンテナとして機能する要素は、[aria-live](https://www.w3.org/TR/wai-aria-1.1/#aria-live)="polite" で設定されます。どちらのオプションも
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
 * [attr.role="tabpanel"](https://www.w3.org/TR/wai-aria-1.1/#tabpanel) - タブに関連付けられたリソースのコンテナ。各タブはタブ リストに含まれています。

##### **属性**:
 * Id - パターン "panel-${this.index}" に従います。
 * [aria-labelledby](https://www.w3.org/TR/wai-aria/#aria-labelledby) は、"tab-${this.index}-${this.total}" のパターンに従います。
 * [aria-selected](https://www.w3.org/TR/wai-aria-1.1/#aria-selected) は、**アクティブ** スライドを設定します。特定のスライド要素の現在の**選択された**状態を示します。

## API リファレンス
<div class="divider--half"></div>

* [IgxCarouselComponent]({environment:angularApiUrl}/classes/igxcarouselcomponent.html)
* [IgxCarouselComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-carousel-theme)
* [IgxSlideComponent]({environment:angularApiUrl}/classes/igxslidecomponent.html)
* [IgxListComponent]({environment:angularApiUrl}/classes/igxlistcomponent.html)
* [IgxListItemComponent]({environment:angularApiUrl}/classes/igxlistitemcomponent.html)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
