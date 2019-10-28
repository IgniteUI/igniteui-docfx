---
title: Carousel コンポーネント
_description: Ignite UI for Angular Carousel コンポーネントを使用すると、スライド、カード、またはページに基づいたインターフェイスのコレクション間を移動できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Carousel コンポーネント, Angular Carousel コントロール
_language: ja
---

## Carousel

<p class="highlight">Ignite UI for Angular Carousel コンポーネントは、ネイティブ [Angular コンポーネント](https://angular.io/guide/architecture#components)です。画像ギャラリー、カード、チュートリアル、またはページごとのインターフェイスでスライド コレクションをブラウズ、移動できます。</p>
<div class="divider"></div>

### Carousel デモ

<div class="sample-container loading" style="height: 620px">
    <iframe seamless="" width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/layouts/carousel" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

### 使用方法

Carousel を全画面要素またはコンポーネントの子に設定できます。また、スライドに有効な HTML コンテンツ、その他の Angular コンポーネントなども含めることができます。

Carousel コンポーネントを初期化する前に、以下のコマンドを実行して Ignite UI for Angular をインストールします。

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

次に、カルーセル コンポーネントのテンプレートに以下のマークアップを追加し、2 つのスライドとその HTML コンテンツを定義します。

```html
<!-- app.component.html -->
<igx-carousel>
    <igx-slide>
        <h3>Ignite UI for Angular</h3>
        <p>30+ Material-based Angular components to code speedy web apps faster.</p>
    </igx-slide>
    <igx-slide>
        <h3>Ignite UI for Javascript</h3>
        <p>A complete JavaScript UI component library giving you the ability to build data-rich responsive web apps.</p>
    </igx-slide>
</igx-carousel>
```

このコードはカルーセルをページでインスタンス化します。

<div class="sample-container loading" style="height: 230px">
    <iframe id="carousel-sample-1-iframe" data-src='{environment:demosBaseUrl}/layouts/carousel-sample-1' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="carousel-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">                StackBlitz で表示
    </button>
</div>

### ngFor ディレクティブを使用したスライドの表示

実環境シナリオでスライドをマークアップに宣言する代わりに動的に読み込みます。この方法を説明するためにコードでスライドを提供します。

```typescript
  // app.component.ts
  public slides: any[] = [];
  constructor() { }

  public ngOnInit() {
     this.addNewSlide();
  }

  public addNewSlide() {
      this.slides.push(
        { description: "30+ Material-based Angular components to code speedy web apps faster.",
          heading: "Ignite UI for Angular",
          image: "assets/images/carousel/slide1-angular.png"},
        { description: "A complete JavaScript UI library empowering you to build data-rich responsive web apps.",
          heading: "Ignite UI for Javascript",
          image: "assets/images/carousel/slide2-ignite.png"}
      );
  }
```

次に [`igx-slide`]({environment:angularApiUrl}/classes/igxslidecomponent.html) に ngFor ディレクティブを追加して HTML コンテンツを提供します。各スライドに画像も追加します。

```html
<!-- app.component.html -->
<igx-carousel #carousel>
    <igx-slide *ngFor="let slide of slides;">
        <h3>{{slide.heading}}}</h3>
        <p>{{slide.description}}}</p>
        <img [src]="slide.image">
    </igx-slide>
</igx-carousel>
```

ここまででカルーセルは動作しますが、更に外観を変更してみます。最も重要なナビゲーション機能にスタイルを追加するために [前へ] および [次へ] 矢印のデフォルト色を変更し、カルーセル コンテンツを中央揃えにします。

```css
/* app.component.css */
.igx-carousel__inner {
    width: 100%;
    text-align: center; 
}
a > igx-icon > span{
    color: #e41c77;
}
```

スタイルの適用後、矢印が強調表示され、コンテンツが中央揃えになります。
<div class="sample-container loading" style="height: 600px">
<iframe id="carousel-sample-2-iframe" data-src='{environment:demosBaseUrl}/layouts/carousel-sample-2' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="carousel-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">                StackBlitz で表示
    </button>
</div>

### ナビゲーション

ナビゲーションおよびトランジションは最も重要なカルーセル機能です。トランジション期間、自動再生、および停止機能を要件に応じて構成できます。この機能は、公開されたプロパティによって管理できます。ユーザーの注意をそらさないよう自動再生を無効にし、操作によって停止を有効にして、ループ化 (最初のスライドが最後のスライドの後になること) を有効にします。

```html
<!-- app.component.html -->
<igx-carousel #carousel [loop]="loop" [pause]="pause">
...
</igx-carousel>
```

上記のスニペットで、[プロパティ バインディング](https://angular.io/guide/template-syntax#property-binding)を使用して [`loop`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#loop) および [`pause`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#pause) 要素プロパティに値を設定します。オプションのプロパティには、スライド変更の間隔をミリ秒単位で設定する [`interval`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#interval) があります。コンテンツがカルーセルに自動的に変更される代わりに、ユーザーの操作によって変更されるために、このプロパティを設定しません。コンポーネントのプロパティ値が以下のコードによって設定されます。注: 自動再生を無効にするには、カルーセルの [`stop`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#stop) メソッドを呼び出します。

```typescript
  // app.component.ts
  public loop = true;
  public pause = true;

  constructor() { }

  public ngOnInit() {
     this.addNewSlide();
     // stops the auto playing
     this.carousel.stop();
  }
```

プロパティを構成した後、ユーザーはカルーセルのコンテンツを変更できます。次にナビゲーションをカスタマイズし、カルーセルのインジケーターをプログレス バーと置き換えます。[`onSlideChanged`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#onslidechanged) イベントを処理し、[**IgxLinearProgressBar**]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html) コンポーネントを使用して進行状況を示す UI を追加します。最初、**IgxLinearProgressBar** モジュールをインポートします。

```typescript
// app.component.ts
import { Direction, IgxCarousel, IgxLinearProgressBar } from 'igniteui-angular';
```

モジュールをインポートした後、[**IgxLinearProgressBar**]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html) をテンプレートに追加します。[`max`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#max) プロパティを **app.component.ts** ファイルで定義される [`total`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#total) プロパティの値に設定します。[`onSlideChanged`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#onslidechanged) イベントのハンドラーを追加し、進行状況のテキストを追加します。

```html
<!-- app.component.html -->
<igx-carousel #carousel [loop]="loop" pause="false" (onSlideChanged)="onSlideChanged(carousel)">
    <igx-slide *ngFor="let slide of slides;">
        <h3>{{slide.heading}}</h3>
        <p>{{slide.description}}</p>
        <img [src]="slide.image">
    </igx-slide>
    <igx-linear-bar #linearbar [max]="total"></igx-linear-bar>
    <span>{{current}} out of {{total}}</span>
</igx-carousel>
```

[`total`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#total) および [`current`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#current) プロパティの値を **ngOnInit** で更新し、リニア バーの値を [`onSlideChanged`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#onslidechanged) イベント ハンドラーで更新します。

```typescript
// app.component.ts
  @ViewChild("carousel") public carousel: IgxCarousel;
  @ViewChild("linearbar") public linearbar: IgxLinearProgressBar;

  public total: number;
  public current: number;

  constructor() { }

  public ngOnInit() {
     this.addNewSlide();
     this.carousel.stop();
     this.total = this.slides.total;
     this.current = this.carousel.current;
  }

  public onSlideChanged(carousel: IgxCarousel) {
    this.current = carousel.current + 1;
    this.linearbar.value = carousel.current + 1;
  }
```

プログレス バーがパーセンテージ値を表示しますが、カスタム インジケーター テキストを追加したため、このパーセンテージ値を表示する必要がありません。このパーセンテージ値およびカルーセルの元のインジケーターを非表示にします。

```css
/* app.component.css */
span.progress-linear__value {
    display: none;
}
ul.igx-carousel__indicators {
    display: none;
}
```

すべての手順を実行すると、ナビゲーション矢印を使用してユーザーが管理するカルーセルになります。リニア バーが進行状況のインジケーターになります。

<div class="sample-container loading" style="height: 550px">
    <iframe id="carousel-sample-3-iframe" data-src='{environment:demosBaseUrl}/layouts/carousel-sample-3' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="carousel-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">                StackBlitz で表示
    </button>
</div>

### タップ / クリックでのアクション
カルーセルがホーム ページ コンテンツを表示しています。ただし、スライドとのユーザー インタラクション ハンドラーを実装する必要があります。ユーザーがスライドにクリック/タップしたとき、カルーセルが新しいページまたはビューに移動することが予期されます。これには、移動するルートを設定します。ヘッダーを [`IgxButton`]({environment:angularApiUrl}/classes/igxbuttondirective.html) と置き換え、ボタンのクリック イベントにイベント ハンドラーを追加します。

```html
<!-- app.component.html-->
<igx-slide *ngFor="let slide of slides;">
    <span igxButton="raised" igxButtonColor="white" 
        igxButtonBackground="#e41c77" (click)="goTo(carousel.current)">{{slide.heading}}</span>
    <p>{{slide.description}}</p>
    ...
</igx-slide>
```

**IgxButtonModule** を **app.component.ts** に追加します。`goto()` 関数は [Angular ルーター](https://angular.io/guide/router)を使用してその他のビューに移動します。

```typescript
  // app.component.ts
  import { Router } from "@angular/router";
  import { Direction, IgxButtonModule, IgxCarousel, IgxLinearProgressBar } from 'igniteui-angular';
  ...

  export class AppComponent implements OnInit {
  ...
  constructor(private router: Router) { }

  public goTo(index: number) {
    this.router.navigate(["/details", index]);
  }
```

これを構成した後、ルーターが URL を指定した **/details:index** ルート パスと一致させ、相対するページを表示します。

<div class="sample-container loading" style="height: 620px">
    <iframe data-src='{environment:demosBaseUrl}/layouts/carousel-sample-4' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>

###API
<div class="divider--half"></div>

* [IgxCarouselComponent]({environment:angularApiUrl}/classes/igxcarouselcomponent.html)
* [IgxCarouselComponent Styles]({environment:sassApiUrl}/index.html#function-igx-carousel-theme)
* [IgxSlideComponent]({environment:angularApiUrl}/classes/igxslidecomponent.html)
* [IgxLinearProgressBarComponent]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html)
* [IgxLinearProgressBarComponent Styles]({environment:sassApiUrl}/index.html#function-igx-progress-linear-theme)
* [IgxButtonDirective]({environment:angularApiUrl}/classes/igxbuttondirective.html)
* [IgxButton Styles]({environment:sassApiUrl}/index.html#function-igx-button-theme)
