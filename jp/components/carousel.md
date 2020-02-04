---
title: Carousel コンポーネント
_description: Ignite UI for Angular Carousel コンポーネントを使用すると、スライド、カード、またはページに基づいたインターフェイスのコレクション間を移動できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Carousel コンポーネント, Angular Carousel コントロール
_language: ja
---

## Carousel

<p class="highlight">Ignite UI for Angular Carousel コンポーネントは、ネイティブ [Angular コンポーネント](https://angular.io/guide/architecture#components)です。画像ギャラリー、カード、チュートリアル、またはページごとのインターフェイスでスライド コレクションをブラウズ、移動できます。</p>
<div class="divider"></div>

### デモ
<div class="sample-container loading" style="height: 550px">
    <iframe id="carousel-base-sample-iframe" seamless="" width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/layouts/carousel-base-sample" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="carousel-base-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">                Stackblitz で表示
    </button>
</div>

### 作業の開始

Carousel を全画面要素またはコンポーネントの子に設定できます。また、スライドに有効な HTML コンテンツ、その他の Angular コンポーネントなども含めることができます。

#### はじめに
<div class="divider--half"></div>

>[!NOTE]
>**This component requires [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) to be imported in the root module of the application in order for touch interactions to work as expected.**.

Carousel コンポーネントを初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールします。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](general/getting_started.md)トピックををご覧ください。

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

このセクションでは、上記で定義した **onboarding デモ**の設定を行います。

#### IgxCarousel の定義
<div class="divider--half"></div>

デフォルトでは、カルーセルの **[`loop`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#loop)** 動作は true に設定されています (ループ - 最初のスライドが最後のスライドから Next に移動した後に来る場合、または最後のスライドが最初のスライドから Previous に移動した後に来る場合)。

各スライド インデックスを追跡するために、カルーセルにはインジケーターがあります。デフォルトでは、インジケーターの位置はカルーセルの下部にあります。それを変更するには、`top` を割り当てて [indicatorsOrientation]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#indicatorsorientation) プロパティを使用する必要があります。

ここまでで、カルーセル テンプレートは以下のようになります。

```html
<div class="carousel-container">
    <igx-carousel #carousel [loop]="false" indicatorsOrientation="top">
      ...
    </igx-carousel>
</div>
```

#### *ngFor を使用してスライドを追加する
<div class="divider--half"></div>

同じ種類のコンテンツを含むスライドがある場合、ngFor を使用してテンプレートに追加する方が簡単です。

最初の 3 つのスライドには画像のみが含まれるので、**ts** ファイルにオブジェクトの配列を作成し、それを使用して **igx-carousel** にスライドを追加します。

```typescript
...
public slides = 
  [
      {
        src: "assets/images/svg/carousel/Onboarding1.svg"
      },
      {
        src: "assets/images/svg/carousel/Onboarding2.svg"
      },
      {
        src: "assets/images/svg/carousel/Onboarding3.svg"
      }
  ];
...
```

```html
...
  <igx-slide  *ngFor="let slide of slides;">
      <div class="image-container">
          <img style="width: 80%" [src]="slide.src">
      </div>
  </igx-slide>
...
```

#### 他のコンポーネントを含むスライド
<div class="divider--half"></div>

最後のスライドには、画像、サインアップ フォーム、およびルーティング用のボタンが含まれるため、個別に定義します。
```html
...
  <igx-slide>
      <div class="slide-content-wrapper">

          <div style="margin: 20px auto; width: 60%">
              <img style="width: 80%" src="assets/images/svg/carousel/SignUp.svg">
              <button igxButton="icon" (click)="goTo()">
                  <igx-icon class="icon" fontSet="material">info</igx-icon>
              </button>
          </div>

          <form #form class="signInForm" >
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
          <button igxButton="raised" type="submit" (click)="form.reset()">Sign Up</button>
      </div>
  </igx-slide>
...
```

#### カスタム インジケーター
<div class="divider--half"></div>

カスタム カルーセル インジケーターを追加するには、以下のように [IgxCarouselIndicatorDirective]({environment:angularApiUrl}/classes/igxcarouselindicatordirective.html) を使用する必要があります。

```html
...
  <ng-template igxCarouselIndicator let-slide>
      <div [ngClass]="{'selected': slide.current === current}" class="indicator"></div>
  </ng-template>
...
```

#### カスタム nav ボタン

最後の手順では、ナビゲーション ボタンをカスタマイズします。

これを実現するために、次のアプローチで [IgxCarouselPrevButtonDirective]({environment:angularApiUrl}/classes/igxcarouselprevbuttondirective.html) と [IgxCarouselNextButtonDirective]({environment:angularApiUrl}/classes/igxcarouselnextbuttondirective.html) を使用します。

```html
...
  <ng-template igxCarouselNextButton let-disabled>
          <button igxButton="fab" igxRipple="white" [disabled]="disabled">
                  <igx-icon fontSet="material">add</igx-icon>
          </button>
  </ng-template>

  <ng-template igxCarouselPrevButton let-disabled>
          <button igxButton="fab" igxRipple="white" [disabled]="disabled">
                  <igx-icon fontSet="material">remove</igx-icon>
          </button>
  </ng-template>
...
```

### アニメーション

アニメーション化されたスライドの移行により、エンドユーザーはカルーセルとのインタラクティブで高いエクスペリエンスを得ることができます。

#### アニメーション
カルーセルは、デフォルトで**スライド**アニメーションの移行が設定されており、**フェード**アニメーションもサポートしています。

アニメーションは [animationType]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#animationtype)入力を介して構成されます。

```html

<igx-carousel animationType="fade">
...
</igx-carousel>

```
`animationType` 入力に `none` を設定すると、カルーセルのアニメーションが無効になります。


#### デモ

以下のデモは、カルーセルがサポートするさまざまなタイプのアニメーションを示しています。

<div class="sample-container loading" style="height: 700px">
    <iframe id="carousel-animations-sample-iframe" data-src='{environment:demosBaseUrl}/layouts/carousel-animations-sample' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="carousel-animations-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">                Stackblitz で表示
    </button>
</div>


### ナビゲーション
<div class="divider--half"></div>

トランジションとナビゲーションは、最も重要なカルーセル機能です。

カルーセル内のナビゲーションは、モバイル デバイスでのナビゲーション ボタン、キーボード ナビゲーション、パン操作を通じてユーザーが処理できます。

#### パン ジェスチャ
<div class="divider--half"></div>

デフォルトでは、カルーセルはあらゆる種類のタッチ デバイスに使用できます。 これはオプションであり、[gesturesSupport]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#gesturessupport) プロパティに `false` を設定して変更できます。

カルーセル [アニメーション](carousel.md#アニメーション)はタッチ デバイスで完全にサポートされているため、プラットホームにに合わせてプログレッシブウェブアプリ ([PWA](https://developer.mozilla.org/ja/docs/Web/Progressive_web_apps)) を構築するための完璧なツールです。

#### キーボード ナビゲーション
<div class="divider--half"></div>

* **次へ**/**前へ**のスライドに移動するには、丁寧に使用する必要があります。
    * `右矢印`キー - 次のスライド
    * `左矢印`キー - 前のスライド
*  **最後**/**最初**のスライドに移動するには丁寧に使用する必要があります。
    * `End` キー - 最後のスライド
    * `Home` キー - 最初のスライド
 
#### 自動的なトランジション
<div class="divider--half"></div>

**IgxCarousel** は、ユーザーの操作なしでスライドを自動的に変更するように簡単に構成できます。この方法では、トランジション間隔を [interval]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#interval) プロパティに設定するだけで、スライドショーを作成できます。このプロパティは、スライド トランジション間の間隔 (ミリ秒)を決定します。

>[!NOTE]
>自動的なスライド トランジションは、デフォルトでユーザーに完全に依存しているわけではありません。スライドの上にマウス ポインターを置くと、マウス ポインターがスライド領域から出るまで、現在のスライド トランジションが中断されます。これは、[pause]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#pause) プロパティを `false` に設定することで防止できます。

#### デモ
<div class="divider--half"></div>

[リスト項目]({environment:angularApiUrl}/classes/igxlistitemcomponent.html)と同期されたループを有効にして完全に自律的なカルーセルを作成します。スライドの選択は、ユーザーが`リスト項目`でのみ制御します。


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
カルーセルの [`onSlideChanged`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#onslidechanged) およびリストの [onItemClicked]({environment:angularApiUrl}/classes/igxlistcomponent.html#onitemclicked) イベントを処理し、コンポーネントを同期する方法: 

```typescript
  public ngOnInit() {
    ...
    this.list.onItemClicked.subscribe((args: IListItemClickEventArgs) => {
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
<iframe id="carousel-no-navigation-sample-iframe" data-src='{environment:demosBaseUrl}/layouts/carousel-no-navigation-sample' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="carousel-no-navigation-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">                Stackblitz で表示
    </button>
</div>


`

### API リファレンス
<div class="divider--half"></div>

* [IgxCarouselComponent]({environment:angularApiUrl}/classes/igxcarouselcomponent.html)
* [IgxCarouselComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-carousel-theme)
* [IgxSlideComponent]({environment:angularApiUrl}/classes/igxslidecomponent.html)
* [IgxListComponent]({environment:angularApiUrl}/classes/igxlistcomponent.html)
* [IgxListItemComponent]({environment:angularApiUrl}/classes/igxlistitemcomponent.html)