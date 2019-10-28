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
    <iframe id="progressbar-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/data-display/circular-progressbar" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="progressbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法

Circular Progress Indicator はプロセスの進行状況を表示します。

Circular Progress Indicator を初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールする必要があります。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](general/getting_started.md)トピックををご覧ください。

次に、**app.module.ts** ファイルに  **IgxProgressBarModule** をインポートします。

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

注: **igx-circular-bar** が各段階で `{currentValue: 65, previousValue: 64}` オブジェクトを出力する [`onProgressChanged`]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html#onprogresschanged) イベントを発生します。

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
        <igx-icon fontSet="material">{{changeIcon()}}</igx-icon>
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
    <iframe id="progressbar-sample-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-display/circular-progressbar" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="progressbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
>デフォルトの進行状況のアップデートは、**[`max`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#max) 値の 1%** で、[`step`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#step) 値が定義されていない場合に発生します。より速い進行の場合、[`step`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#step) 値を (**[`max`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#max) * 1%**) より大きい値に定義し、より遅い進行はデフォルト進捗状況未満にする必要があります。

> [`step`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#step) 入力に値を提供する場合、この値は [`value`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#value)入力より大きい値に定義します。それ以外の場合、**進行状況の更新に渡す値を取得する更新は一度のみとなります。
<div class="divider--half"></div>

#### 不確定の進行状態

あらかじめ設定された終了状態を提供しないプロセスをトラックしたい場合、[`indeterminate`]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html#indeterminate) 入力プロパティを `true` に設定できます。プログレスバーにこのバインドを適用すると以下のような結果になります。

<div class="sample-container loading" style="height:300px">
    <iframe id="indeterminate-progressbar-sample-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-display/circular-indeterminate-progressbar" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="indeterminate-progressbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で開く</button>
</div>
<div class="divider--half"></div>

### スタイル設定

円形のプログレスバーのスタイル設定は、すべてのテーマ関数とコンポーネント mixins が存在する `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

最も簡単な方法として、[`igx-progress-circular-theme`]({environment:sassApiUrl}/index.html#function-igx-progress-circular-theme) を拡張し、`$base-circle-color`、`$progress-circle-color` および `$text-color` パラメーターを受け取る新しいテーマを作成する方法があります。

```scss
$custom-theme: igx-progress-circular-theme(
    $base-circle-color: lightgray,
    $progress-circle-color: rgb(32, 192, 17),
    $text-color: lightgray
);
```
最後にそれぞれのテーマを持つコンポーネント mixins を**含めます**。

```scss
 @include igx-progress-circular($custom-theme);
```

>[!NOTE]
 >コンポーネントが [`Emulated`](./themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を`ペネトレーション`する必要があります。

 ```scss
:host {
  ::ng-deep {
    @include igx-progress-circular($custom-theme);
  }
}
```

#### カラーパレットの定義

上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) および [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用して色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$gray-color: lightgray;
$green-color: rgb(32, 192, 17);

$custom-palette: igx-palette($primary: $gray-color, $secondary: $green-color);
```

次に [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取得できます。

```scss
$custom-theme: igx-progress-circular-theme(
    $base-circle-color: igx-color($custom-palette, "primary", 500),
    $progress-circle-color: igx-color($custom-palette, "secondary", 500),
    $text-color: igx-color($custom-palette, "primary", 500)
);
```

>[!NOTE]
>`Igx-color` と `igx-palette` は色の生成や取得のための関数です。使い方の詳細については [`Palettes`](./themes/palette.md) のトピックを参照してください。

#### スキーマの使用

テーマ エンジンを使用して [**スキーマ**](./themes/schemas.md) の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法のことです。

すべてのコンポーネントに提供される 2 つの定義済みスキーマ ([`_light-progress-circular`]({environment:sassApiUrl}/index.html#variable-_light-progress-circular)) のいずれかを拡張します。 

```scss
// Extending the light progress circular schema
$custom-progress-schema: extend($_light-progress-circular,
    (
        base-circle-color: (igx-color:('primary', 500)),
        progress-circle-color: (igx-color:('secondary', 500)),
        text-color: (igx-color:('primary', 500))
    )
);
```

カスタム スキーマを適用するには、グローバル ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) または [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)) のいずれかを**拡張**する必要があります。この方法は、基本的にカスタム スキーマでコンポーネントをポイントし、その後それぞれのコンポーネントテーマに追加します。

```scss
// Extending the global light-schema
$my-custom-schema: extend($light-schema, 
    (
        igx-circular-bar: $custom-progress-schema
    )
);

// Defining our custom theme with the custom schema
$custom-theme: igx-progress-circular-theme(
    $palette: $custom-palette,
    $schema: $my-custom-schema
);
```

上記と同じ方法でテーマを含める必要があることに注意してください。
#### Demo

<div class="sample-container loading" style="height:350px">
    <iframe id="circular-styling-sample-iframe" src='{environment:demosBaseUrl}/data-display/circular-styling-sample' width="100%" height="100%" 
        seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="circular-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で開く</button>
</div>

### API
<div class="divider--half"></div>

* [IgxCircularProgressBarComponent]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html)
* [IgxCircularProgressBarComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-progress-circular-theme)
