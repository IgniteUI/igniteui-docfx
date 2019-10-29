---
title: Linear Progress コンポーネント
_description: Ignite UI for Angular Linear Progress Bar コンポーネントを使用すると、プログレス バーを表示し、色またはストライプなどの外観をカスタマイズします。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Linear Progress コンポーネント, Angular Linear Progress コントロール
_language: ja
---

## Linear Progress
<p class="highlight">Ignite UI for Angular Linear Progress インジケーター コンポーネントは、変更でアプリケーションの進行状況を表す視覚的なインジケーターです。インジケーターは状態変更で外観を更新します。インジケーターがストライプまたは実線色でスタイル設定できます。</p>
<div class="divider"></div>

### Linear Progress デモ
<div class="sample-container loading" style="height:550px">
    <iframe id="progressbar-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/data-display/linear-progressbar-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="progressbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法
Linear Progress Bar インジケーター コンポーネントを初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールする必要があります。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](general/getting_started.md)トピックををご覧ください。

次に、**app.module.ts** ファイルに **IgxProgressBarModule** をインポートします。

```typescript
// app.module.ts

...
import { IgxProgressBarModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxProgressBarModule],
    ...
})
export class AppModule {}
```

ボタン クリックでトリガーされる連続プロセスをシミュレートする実例を作成します。また、読み込むスピードは `igx-linear-bar` に設定される [`max`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#max) 属性に基づきます。最初の場合、[`max`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#max) 値が 200 に設定されるため、100 (デフォルト値) に設定される第 2 の場合より遅く読み込みます。コードは以下です。

```html
...
<section class="sample-content">
    <h4 class="sample-title">Linear progress bar</h4>
    <div class="linear-container">
        <h5>Max value: 200</h5>
        <igx-linear-bar [striped]="false" [max]="200" [value]="0"></igx-linear-bar>
    </div>
    <div class="linear-container">
        <h5>Max value: 100</h5>
        <igx-linear-bar [striped]="false" [max]="100" [value]="0" type="danger" ></igx-linear-bar>
    </div>
</section>
....
<div class="button-container">
    <p>Press the button to start updating the bars</p>
    <button igxButton="fab" igxButtonBackground="#333" igxRipple="white" (click)="tick()">
        <igx-icon fontSet="material">{{changeIcon()}}</igx-icon>
    </button>
</div>
...
```

```typescript
  @ViewChildren(IgxLinearProgressBarComponent, { read: IgxLinearProgressBarComponent })
  public linearBars: QueryList<IgxLinearProgressBarComponent>;

  public interval: any;

  public updateValue() {
      this.linearBars.map((bar) => bar.value += this.randomIntFromInterval(1, 3));
      const shouldStop = this.linearBars.toArray().every((bar) => bar.value >= bar.max);
      if (shouldStop) {
        this.interval = clearInterval(this.interval);
      }
  }

  public tick() {
      if (this.interval) {
          this.interval = clearInterval(this.interval);
          return;
      }
      this.interval = setInterval(this.updateValue.bind(this), 60);
  }

  private randomIntFromInterval(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }
```

以下は結果です。

<div class="sample-container loading" style="height:500px">
    <iframe id="linear-progressbar-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-display/linear-progressbar" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="linear-progressbar-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

背景が縞模様など、読み込みバーの様々なタイプを作成する方法を例で紹介します。

```html
...
<section class="sample-content">
    <h4 class="sample-title">Linear progress bar</h4>
    <div class="linear-container">
        <igx-linear-bar type="default"></igx-linear-bar>
        <igx-linear-bar type="info" [striped]="true"></igx-linear-bar>
        <igx-linear-bar type="success"></igx-linear-bar>
        <igx-linear-bar type="warning" [striped]="true"></igx-linear-bar>
        <igx-linear-bar type="danger"></igx-linear-bar>
    </div>
</section>
<div class="button-container">
    <p>Press the button to start updating the bars</p>
    <button igxButton="fab" igxButtonBackground="#333" igxRipple="white" (click)="tick()">
        <igx-icon fontSet="material">{{changeIcon()}}</igx-icon>
    </button>
</div>
<div class="button-container">
    <p>Press the button to reset the bars</p>
    <button igxButton="fab" igxButtonBackground="#333" igxRipple="white" (click)="reset()" [disabled]="disable">
        <igx-icon color="white" isActive="true">{{replay}}</igx-icon>
    </button>
</div>
...
```

```typescript
  @ViewChildren(IgxLinearProgressBarComponent, { read: IgxLinearProgressBarComponent })
  public linearBars: QueryList<IgxLinearProgressBarComponent>;

  public disable = false;
  public interval: any;

  public updateValue() {
    this.disable = true;
    this.linearBars.map((bar) => bar.value += this.randomIntFromInterval(1, 3));
    const shouldStop = this.linearBars.toArray().every((bar) => bar.value >= bar.max);
    if (shouldStop) {
    this.disable = false;
    this.interval = clearInterval(this.interval);
    }
  }

  public tick() {
    if (this.interval) {
        this.interval = clearInterval(this.interval);
        this.disable = false;
        return;
    }
    this.interval = setInterval(this.updateValue.bind(this), 60);
  }

  public reset() {
    this.linearBars.toArray().forEach((bar) => bar.value = 0);
  }

  private randomIntFromInterval(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }
```

以下は、正しく構成した場合の結果です。

<div class="sample-container loading" style="height:550px">
    <iframe id="linear-sample-1-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-display/linear-progressbar-sample-1" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="linear-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

最後に、[`textAlign`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#textalign)、[`textVisibility`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#textvisibility)、[`textTop`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#texttop)、および [`text`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#text) の属性を設定します。以下はコード例です。

```html
...
<section class="sample-content">
    <h4 class="sample-title">Linear progress bar</h4>
        <div class="linear-container">
        <h5>This is the default appearance of IgxLinearProgressBarComponent</h5>
        <igx-linear-bar type="default"></igx-linear-bar>
        <h5>Text is aligned CENTER</h5>
        <igx-linear-bar type="info" [textTop]="false" [textAlign]="positionCenter" [striped]="true"></igx-linear-bar>
        <h5>Text is aligned END</h5>
        <igx-linear-bar type="success" [textTop]="false" [textAlign]="positionEnd"></igx-linear-bar>
        <h5> Set your custom text</h5>
        <igx-linear-bar type="warning" [text]="'Custom text'" [textAlign]="positionCenter" [striped]="true"></igx-linear-bar>
        <h5>Text is set above the line</h5>
        <igx-linear-bar type="danger" [textTop]="true"></igx-linear-bar>
        <h5>Without text</h5>
        <igx-linear-bar type="default" [textVisibility]="false"></igx-linear-bar>
        </div>
</section>
<div class="button-container">
    <p>Press the button to start updating the bars</p>
    <button igxButton="fab" igxButtonBackground="#333" igxRipple="white" (click)="tick()">
        <igx-icon fontSet="material">{{changeIcon()}}</igx-icon>
    </button>
</div>
<div class="button-container">
    <p>Press the button to reset the bars</p>
    <button igxButton="fab" igxButtonBackground="#333" igxRipple="white" (click)="reset()" [disabled]="disable">
        <igx-icon color="white" isActive="true" >{{replay}}</igx-icon>
    </button>
</div>
...
```

最初に [`IgxTextAlign`]({environment:angularApiUrl}/enums/igxtextalign.html) をコンポーネントにインポートする必要があります。

```typescript
import { ..., IgxTextAlign } from 'igniteui-angular';
.....
export class LinearProgressbarSample2Component implements OnInit {
  @ViewChildren(IgxLinearProgressBarComponent, { read: IgxLinearProgressBarComponent })
  public linearBars: QueryList<IgxLinearProgressBarComponent>;

  public disable = false;
  public interval: any;
  public positionCenter: IgxTextAlign;
  public positionEnd: IgxTextAlign;

  public ngOnInit() {
    this.positionCenter = IgxTextAlign.CENTER;
    this.positionEnd = IgxTextAlign.END;
  }

  public updateValue() {
    this.disable = true;
    this.linearBars.map((bar) => bar.value += this.randomIntFromInterval(1, 3));
    const shouldStop = this.linearBars.toArray().every((bar) => bar.value >= bar.max);
    if (shouldStop) {
    this.disable = false;
    this.interval = clearInterval(this.interval);
    }
  }

  public tick() {
    if (this.interval) {
        this.interval = clearInterval(this.interval);
        this.disable = false;
        return;
    }
    this.interval = setInterval(this.updateValue.bind(this), 60);
  }

  public reset() {
    this.linearBars.toArray().forEach((bar) => bar.value = 0);
  }

  private randomIntFromInterval(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
```

以下は結果です。

<div class="sample-container loading" style="height:700px">
    <iframe id="linear-sample-2-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-display/linear-progressbar-sample-2" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="linear-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> [`step`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#step) 入力値が定義されていない場合、更新は **[`max`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#max) 値の 1%**。進行を速くしたい場合、[`step`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#step) 値を (**[`max`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#max) * 1%**) より大きい値にし、より遅い進行は[`step`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#step) をデフォルト進捗状況未満にする必要があります。

> [`step`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#step) を [`value`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#value) 入力より大きい値に定義した場合、更新は 1 つのみで、**進行状況の更新に渡される値**を取得します。
<div class="divider--half"></div>

### スタイル設定

円形のプログレスバーのスタイル設定は、すべてのテーマ関数とコンポーネント mixins が存在する `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

最も簡単な方法は、[`igx-progress-linear-theme`]({environment:sassApiUrl}/index.html#function-igx-progress-linear-theme) を拡張する新しいテーマを作成し、`$track-color`、`$fill-color-default`、`$fill-color-danger`、`$stripes-color`、`$text-color` パラメーターを受け取る方法です。

```scss
$custom-theme: igx-progress-linear-theme(
    $track-color: lightgray,
    $fill-color-default:  rgb(22, 187, 238),
    $fill-color-danger: rgb(22, 187, 238),
    $stripes-color: rgba(0, 0, 0, 0.26),
    $text-color: rgb(22, 187, 238)
);
```
最後にそれぞれのテーマを持つコンポーネント mixins を**含めます**。 

```scss
 @include igx-progress-linear($custom-theme);
```

>[!NOTE]
>コンポーネントが[`Emulated`](./themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を`ペネトレーション`する必要があります。

 ```scss
:host {
  ::ng-deep {
    @include igx-progress-linear($custom-theme);
  }
}
```

#### カラーパレットの定義

上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) および [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$gray-color: lightgray;
$blue-color: rgb(22, 187, 238);

$custom-palette: igx-palette($primary: $gray-color, $secondary: $blue-color);
```

また [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取り出すことができます。

```scss
$custom-theme: igx-progress-linear-theme(
    $track-color: igx-color($custom-palette, "primary", 500),
    $fill-color-default: igx-color($custom-palette, "secondary", 500),
    $fill-color-danger: igx-color($custom-palette, "secondary", 500),
    $stripes-color: igx-color($custom-palette, "grays", 400),
    $text-color: igx-color($custom-palette, "secondary", 500)
);
```

>[!NOTE]
>`igx-color` および `igx-palette` は、色を生成および取得するための重要な機能です。使い方の詳細については[`パレット`](./themes/palette.md)のトピックを参照してください。

#### スキーマの使用

テーマ エンジンを使用して [**スキーマ**](./themes/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法のことです。

すべてのコンポーネントに提供されている 2 つの定義済みスキーマ (ここでは [`_light-progress-linear`]({environment:sassApiUrl}/index.html#variable-_light-progress-linear)) の 1 つを拡張します。:  

```scss
// Extending the light progress linear schema
$custom-progress-schema: extend($_light-progress-linear,
    (
        track-color: (igx-color:('primary', 500)),
        fill-color-default: (igx-color:('secondary', 500)),
        fill-color-danger: (igx-color:('secondary', 500)),
        stripes-color: (igx-color:('grays', 400)),
        text-color: (igx-color:('secondary', 500))
    )
);
```

カスタム スキーマを適用するには、グローバル [`light`]({environment:sassApiUrl}/index.html#variable-light-schema) または [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema) の 1 つを**拡張**する必要があります。これは基本的にカスタム スキーマでコンポーネントを指し示し、その後それぞれのコンポーネント テーマに追加するものです。

```scss
// Extending the global light-schema
$my-custom-schema: extend($light-schema, 
    (
        igx-linear-bar: $custom-progress-schema
    )
);

// Defining our custom theme with the custom schema
$custom-theme: igx-progress-linear-theme(
    $palette: $custom-palette,
    $schema: $my-custom-schema
);
```

上記と同じ方法でテーマを含める必要があることに注意してください。

#### デモ

<div class="sample-container loading" style="height:450px">
    <iframe id="linear-progressbar-styling-iframe" src='{environment:demosBaseUrl}/data-display/linear-progressbar-styling' width="100%" height="100%" 
        seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="linear-progressbar-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

### API
<div class="divider--half"></div>

* [IgxLinearProgressBarComponent]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html)
* [IgxLinearProgressBarComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-progress-linear-theme)
* [IgxTextAlign]({environment:angularApiUrl}/enums/igxtextalign.html)
