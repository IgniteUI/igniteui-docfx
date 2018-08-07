---
title: Circular Progress コンポーネント
_description: Ignite UI for Angular Circular Progress インジケーター コンポーネントは、丸形で進行状況を表示し、カスタマイズできるコンポーネントです。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Circular Progress コンポーネント, Angular Circular Progress コントロール
_language: ja
---

##Circular Progress
<p class="highlight">Ignite UI for Angular Circular Progress インジケーター コンポーネントは、変更でアプリケーションの進行状況を表す視覚的なインジケーターです。丸形インジケーターは状態変更で外観を更新します。<p>
<div class="divider"></div>

### Circular Progress デモ
<div class="sample-container loading" style="height:400px">
    <iframe id="progressbar-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/circular-progressbar" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="progressbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法

Circular Progress Indicator はプロセスの進行状況を表示します。

Ignite UI for Angular Circular Progress を初期化する前に、**IgxProgressBarModule** を **app.module.ts** ファイルにインポートします。

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

ボタン クリックでトリガーされるプロセスの進行状況をシミュレートする実例を作成します。更に追加のモジュールを **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts
import {
    ..., IgxButtonModule, IgxIconModule, IgxRippleModule
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxButtonModule, IgxIconModule, IgxRippleModule],
})
export class AppModule {}
```

注: **igx-circular-bar** が各段階で `{currentValue: 65, previousValue: 64}` オブジェクトを出力する `onProgressChanged` イベントを発生します。

```html
<section class="sample-content">
    <article class="sample-column">
      <h5>Text is hidden</h5>
      <div class="circular-container">
        <igx-circular-bar [value]="currentValue" [max]="100" [animate]="true" [textVisibility]="false" (onProgressChanged)="progresChanged($event)"></igx-circular-bar>
      </div>
    </article>
    <article class="sample-column">
      <h5>Text is displayed</h5>
      <div class="circular-container">
        <igx-circular-bar [value]="currentValue" [max]="100" [animate]="true" [textVisibility]="true" (onProgressChanged)="progresChanged($event)"></igx-circular-bar>
      </div>
     </article>
</section>
<div class="button-container">
    <p>Press the button to start updating the bar</p>
    <button igxButton="fab" igxButtonBackground="#333" igxRipple="white" (click)="tick()">
        <igx-icon fontSet="material" [name]="changeIcon()"></igx-icon>
    </button>
</div>
```

```typescript
...
  public currentValue: number;
  public interval: any;
  @ViewChild(IgxCircularProgressBarComponent) public circularBar: IgxCircularProgressBarComponent;
  public ngOnInit() {
    this.currentValue = 0;
  }
  public changeIcon() {
    return this.interval ? "pause" : "play_arrow";
  }
  public tick() {
    if (this.interval) {
        this.interval = clearInterval(this.interval);
        return;
    }
    this.interval = setInterval(this.updateValue.bind(this), 60);
  }
  public updateValue() {
     this.circularBar.updateProgressSmoothly(this.currentValue += this.randomIntFromInterval(1, 3), 1);
     if (this.circularBar.value > this.circularBar.max + 3) {
       this.interval = clearInterval(this.interval);
     }
  }
  public progresChanged(progress) { ... }
  private randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
```

すべてが正しく設定されるとブラウザーで以下のように表示されます。

<div class="sample-container loading" style="height:400px">
    <iframe id="progressbar-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/circular-progressbar" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="progressbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### API
| 名前   |       型      |  説明 |
|:----------|:-------------:|:------|
| `max` |  number | 渡すことができる最大値を設定します。デフォルト `max` 値は 100 です。 |
| `value` |  number | 完了した位置を示す値を設定します。 |
| `animate` |  boolean | 進行状況バーにアニメーションがあるかどうか。 |
| `textVisibility` | boolean | テキストを表示するかどうかを設定します。デフォルトで `true` に設定されます。 |
| `text` | string | Sets the text to displayed inside the circular bar. Defaults to percentage representation of the value if not set. |
<div class="divider--half"></div>

### メソッド
| 名前   |  説明 |
|:----------|:------|
| `getValue()` | 最小値 (0) および最大値の間の進行状況バーに渡された値を返します。 |
| `getPercentValue()` | 渡された値に基づいてパーセンテージを計算します。 |
| `onProgressChanged` | 進行状況の変更をトラックするために処理可能な公開イベント。 |
<div class="divider--half"></div>
