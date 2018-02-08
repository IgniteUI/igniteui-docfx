---
title: Carousel コンポーネント
_description: Ignite UI for Angular Carousel コンポーネントを使用すると、スライド、カード、またはページに基づいたインターフェイスのコレクション間を移動できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Carousel コンポーネント, Angular Carousel コントロール
_language: ja
---

## Carousel

<p class="highlight">The Ignite UI for Angular Carousel component is developed as a native [Angular component](https://angular.io/guide/architecture#components). Use it to browse or navigate through a collection of slides, including image galleries, cards, onboarding tutorials, or page-based interfaces.</p>
<div class="divider"></div>

### Carousel デモ

<div class="sample-container" style="height: 620px">
    <iframe seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/carousel"></iframe>
</div>

> [!WARNING]
> Ignite UI for Angular has a [peer dependency](https://nodejs.org/en/blog/npm/peer-dependencies/) on [**HammerJS**](https://hammerjs.github.io/).
> Make sure you add it to your Angular project.
> <br/> <br/>`$ npm install hammerjs @types/hammerjs`

### 使用方法

The carousel can be used as a full-screen element or situated inside another component. Also, the slides may feature any valid html content inside, including other Angular components. To get started with the **Ignite UI for Angular Carousel**, let's first import the **IgxCarouselModule** in our **app.module.ts** file:
```typescript
// app.module.ts
...
import { IgxCarouselModule } from 'igniteui-angular/main';
@NgModule({
    ...
    imports: [..., IgxCarouselModule],
    ...
})
export class AppModule {}
```
Then in the template of our carousel component we can add the following markup to add two slides and define their html content:

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

This is enough to have the carousel instantiated on our page, let's have a look at it:

<div class="sample-container" style="height: 230px">
<iframe src='{environment:demosBaseUrl}/carousel-sample-1' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>

### Displaying slides using the ngFor directive

A real world scenario would include dynamically loading the slides and not declaring via markup. To demonstrate this, first we will provide the slides via code:

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
And now we are ready to add the ngFor directive to the **igx-slide** and provide our html inside as usual. We are also adding an image to each slide:

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

The carousel that we created is functional but not really well looking. Let's add some styles to it starting from the navigation as it is the most important feature. Previous and Next arrows must be eye catching so we need to change their default color and center the carousel content:

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

Let's see what we have now, sure looks better with the arrows standing out clearly on both sides and all the content centered:

<div class="sample-container" style="height: 600px">
<iframe src='{environment:demosBaseUrl}/carousel-sample-2' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>

### Navigation

As mentioned navigation and transition are the most important carousel features. One should make sure that the transition interval, auto playing and pausing are configured as per the requirements. All those are easily managed through the exposed properties, like we are going to demonstrate now. Say we don't want to distract the users, so we will stop the automatic playing, enable pausing on interactions and enable looping (looping is when first slide comes after navigating Next from last slide):

```html
<!-- app.component.html -->
<igx-carousel #carousel [loop]="loop" [pause]="pause">
...
</igx-carousel>
```
In the above snippet we are setting values to the **loop** and **pause** element properties using [property binding](https://angular.io/guide/template-syntax#property-binding). Another optional property to set is the **transition**, which sets the amount of time in milliseconds between slides transition. We are skipping this as we do not want our carousel to transition the content by itself, but want it to be entirely controlled by the user. The component properties values are provided via code below. Notice that to disable the automatic playing we need to call the **stop()** method exposed by the carousel:

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
Having those configured this way, we empowered the user to have full control over the carousel. What we want to do now is customize the navigation further and replace the carousel indicators with a nice looking progress bar. Hooking up on the **onSlideChanged** event and using the **IgxLinearProgressBar** component we will add adittional UI indicating the progress made. First we need to import the **IgxLinearProgressBar** module:

```typescript
// app.component.ts
import { Direction, IgxCarousel, IgxLinearProgressBar } from "igniteui-angular/main";
```
Once we have the module imported, we can continue with adding the **IgxLinearProgressBar** in our template. Notice that we set the **max** property to bind to the **total** property value, which will be defined in the **app.component.ts** file. Also, we add a handler for the **onSlideChanged** event and an indicator text in adittion to the progress bar:

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

We update the **total** and **current** properties values in the **ngOnInit** and the linear bar value in the **onSlideChanged** event handler:

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
Now we have a nice progress bar that is also showing its percent value which we don't need (because we added our custom indicating text "1 out of 3"). Let's hide this percent value and the carousel original indicators, which are still visible:

```css
/* app.component.css */
span.progress-linear__value {
    display: none;
}
ul.igx-carousel__indicators {
    display: none;
}
```

Following all the steps above brings us a nice and functional carousel that the user has full control over using the navigation arrows. The linear bar provides adittional UI that acts as an indicator of the user progress:

<div class="sample-container" style="height: 550px">
    <iframe src='{environment:demosBaseUrl}/carousel-sample-3' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>

### Actions on tap/click
Our carousel now displays nicely the home page content. What it is missing is defining actions that will follow the user interactions with the slides. Once the user made a choice and clicked/tapped on the slide, it is expected that the carousel will transfer the user to a new page/view. Let's see how to do this by setting a route to navigate to - we will replace the heading with an IgxButton and  add an event handler for the button click event:

```html
<!-- app.component.html-->
<igx-slide *ngFor="let slide of slides;">
    <span igxButton="raised" igxButtonColor="white" 
        igxButtonBackground="#e41c77" (click)="goTo(carousel.current)">{{slide.heading}}</span>
    <p>{{slide.description}}</p>
    ...
</igx-slide>
```
Don't forget to add the **IgxButtonModule** to the **app.component.ts**. The **goto()** function will use the [Angular router](https://angular.io/guide/router) to navigate to another view:

```typescript
  // app.component.ts
  import { Router } from "@angular/router";
  import { Direction, IgxButtonModule, IgxCarousel, IgxLinearProgressBar } from "igniteui-angular/main";
  ...

  export class AppComponent implements OnInit {
  ...
  constructor(private router: Router) { }

  public goTo(index: number) {
    this.router.navigate(["/details", index]);
  }
```
Given this configuration, the router matches that URL to the given route path **/details:index** and displays the corresponding page:

<div class="sample-container" style="height: 620px">
    <iframe src='{environment:demosBaseUrl}/carousel-sample-4' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>

###API

<div class="divider--half"></div>

#### Carousel (igx-carousel)

<div class="divider--half"></div>

| 名前                                            |          型          | 説明                                                                                       |
| :---------------------------------------------- | :------------------: | :----------------------------------------------------------------------------------------- |
| `loop`                                          |       boolean        | カルーセルが最後のスライドから最初のスライドに移動するかどうか。デフォルトは `true` です。 |
| `pause`                                         |       boolean        | カルーセルがユーザー操作の後に再生を中止するかどうか。デフォルトは `true` です。           |
| `interval`                                      |        number        | スライド トランジション間の間隔 (ミリ秒)。                                                 |
| `navigation`                                    |       boolean        | カルーセルに左/右のナビゲーション ボタンを描画するかどうか。デフォルトは `true` です。     |
| `total`                                         |        number        | カルーセルが持つスライドの数。                                                             |
| `current`                                       |        number        | 表示しているスライドのインデックス。                                                       |
| `isPlaying`                                     |       boolean        | カルーセルが一時停止されているか、再生しているかを返します。                               |
| `isDestroyed`                                   |       boolean        | カルーセルが破棄された (`ngOnDestroy` が呼び出された) かどうか。                           |
| `onSlideChanged`                                |        event         | スライドの変更で発生します。                                                               |
| `onSlideAdded`                                  |        event         | スライドがカルーセルに追加される時に発生します。                                           |
| `onSlideRemoved`                                |        event         | スライドがカルーセルから削除される時に発生します。                                         |
| `onCarouselPaused`                              |        event         | カルーセルが一時停止されているときに発生します。                                           |
| `onCarouselPlaying`                             |        event         | カルーセルが再生されているときに発生します。                                               |
| `play()`                                        |         void         | `onCarouselPlaying` イベントを発生し、スライド間のトランジションを開始します。             |
| `stop()`                                        |         void         | `onCarouselPaused` イベントを発生し、スライド間のトランジションを中止します。              |
| `prev()`                                        |         void         | 前のスライドに移動します。`onSlideChanged` イベントを発生します。                          |
| `next()`                                        |         void         | 次のスライドに移動します。`onSlideChanged` イベントを発生します。                          |
| `add(slide: IgxSlide)`                          |         void         | カルーセルにスライドを追加します。`onSlideAdded` イベントを発生します。                    |
| `remove(slide: IgxSlide)`                       |         void         | 既存のスライドをカルーセルから削除します。`onSlideRemoved` イベントを発生します。          |
| `get(index: Number)`                            | IgxSlide または void | 所定のインデックスのスライドまたは null を返します。                                       |
| `select(slide: IgxSlide, direction: Direction)` |         void         | スライドおよびトランジション方向を選択します。`onSlideChanged` イベントを発生します。      |

#### Slide (igx-slide)

<div class="divider--half"></div>

| 名前        |    型     | 説明                                                                              |
| :---------- | :-------: | :-------------------------------------------------------------------------------- |
| `index`     |  number   | カルーセル内のスライドのインデックス。                                            |
| `direction` | Direction | スライドのトランジション方向。設定可能な値は `NONE`、`NEXT`、および `PREV` です。 |
| `active`    |  boolean  | 現在のスライドがアクティブ、つまりカルーセルに表示されているかどうか。            |
