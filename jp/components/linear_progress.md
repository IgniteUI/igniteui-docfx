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
    <iframe id="progressbar-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/linear-progressbar-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="progressbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法

Ignite UI for Angular Linear Progress を初期化する前に、**IgxProgressBarModule** を **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import { IgxProgressBarModule } from 'igniteui-angular/main';

@NgModule({
    ...
    imports: [..., IgxProgressBarModule],
    ...
})
export class AppModule {}
```

ボタン クリックでトリガーされる連続プロセスをシミュレートする実例を作成します。また、読み込むスピードは `igx-linear-bar` に設定される `max` 属性に基づきます。最初の場合、`max` 値が 200 に設定されるため、100 (デフォルト値) に設定される第 2 の場合より遅く読み込みます。コードは以下です。

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
        <igx-icon fontSet="material" [name]="changeIcon()"></igx-icon>
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
    <iframe id="linear-progressbar-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/linear-progressbar" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="linear-progressbar-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
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
        <igx-icon fontSet="material" [name]="changeIcon()"></igx-icon>
    </button>
</div>
<div class="button-container">
    <p>Press the button to reset the bars</p>
    <button igxButton="fab" igxButtonBackground="#333" igxRipple="white" (click)="reset()" [disabled]="disable">
        <igx-icon name="replay" color="white" isActive="true" ></igx-icon>
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
    <iframe id="linear-sample-1-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/linear-progressbar-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="linear-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

最後に、`textAlign`、`textVisibility`、`textTop`、および `text` の属性を設定します。以下はコード例です。

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
        <igx-icon fontSet="material" [name]="changeIcon()"></igx-icon>
    </button>
</div>
<div class="button-container">
    <p>Press the button to reset the bars</p>
    <button igxButton="fab" igxButtonBackground="#333" igxRipple="white" (click)="reset()" [disabled]="disable">
        <igx-icon name="replay" color="white" isActive="true" ></igx-icon>
    </button>
</div>
...
```

最初に `IgxTextAlign` をコンポーネントにインポートする必要があります。

```typescript
import { ..., IgxTextAlign } from "igniteui-angular/main";
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
    <iframe id="linear-sample-2-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/linear-progressbar-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="linear-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### API
| 名前   |       型      |  説明 |
|:----------|:-------------:|:------|
| `max` |  number | 渡すことができる最大値を設定します。デフォルトで 100 に設定されます。 |
| `type` |  string | リニア棒のタイプを設定します。オプションは `default`、`success`、`info`、`warning`、または `danger` です。|
| `value` |  number | 完了した位置を示す値を設定します。 |
| `striped` |  boolean | 棒をストライプ スタイルに設定します。 |
| `animate` |  boolean | 進行状況バーにアニメーションがあるかどうか。 |
| `textAlign` | enum | テキスト配置を定義する位置を設定します。オプションは `IgxTextAlign.START` (デフォルト値)、`IgxTextAlign.CENTER`、および `IgxTextAlign.END` です。 |
| `textVisibility` | boolean | テキストを表示するかどうかを設定します。デフォルトで `true` に設定されます。 |
| `textTop` | boolean | テキストをイナズマ線の上に配置するかどうかを定義する位置を設定します。デフォルトで `false` に設定されます。 |
| `text` | string | 定義された位置に基づいて表示されるカスタム テキストを設定します。 |
<div class="divider--half"></div>

### メソッド
| 名前   |  説明 |
|:----------|:------|
| `getValue()` | 最小値 (0) および最大値の間の進行状況バーに渡された値を返します。|
| `getPercentValue()` | 渡された値に基づいてパーセンテージを計算します。 |
| `onProgressChanged` | 進行状況の変更をトラックするための公開イベント。 |
<div class="divider--half"></div>
