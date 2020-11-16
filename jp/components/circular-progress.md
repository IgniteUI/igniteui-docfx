---
title: Circular Progress コンポーネント
_description: Ignite UI for Angular Circular Progress インジケーター コンポーネントは、丸形で進行状況を表示し、カスタマイズできるコンポーネントです。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Circular Progress コンポーネント, Angular Circular Progress コントロール
_language: ja
---

# Circular Progress
<p class="highlight">Ignite UI for Angular Circular Progress インジケーター コンポーネントは、変更でアプリケーションの進行状況を表す視覚的なインジケーターです。丸形インジケーターは状態変更で外観を更新します。<p>
<div class="divider"></div>

## Angular Circular Progress 例
<div class="sample-container loading" style="height:100px">
    <iframe id="progressbar-sample-iframe" frameborder="0" seamless="" width="100%" height="100%" src="{environment:demosBaseUrl}/data-display/circular-progressbar" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="progressbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="progressbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

## 使用方法

Circular Progress Indicator コンポーネントを使用するには、まず **IgxProgressBarModule** を **app.module.ts** ファイルにインポートします。
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

すべての動作をよりよく理解するため、デモのような簡単な例を作成します。

```html
<igx-circular-bar
[value]="100"
[animate]="true"
class="custom-size"
></igx-circular-bar>
```

その後、ブラウザ上でデモサンプルを確認することができます。

>[!NOTE]
>**igx-circular-bar** は、各ステップに `{currentValue: 65, previousValue: 64}` のようなオブジェクトを出力する [`onProgressChanged`]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html#onprogresschanged) イベントを発生します。

> [!NOTE]
> [`step`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#step) 値が定義されていない場合、デフォルトの進行のインクリメントの値は、**[`max`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#max) 値の 1%** です。更新レートを変更するには、[`step`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#step) 値を定義する必要があります。


### 不確定のプログレス

正確に決定していないプロセスをトラックしたい場合、[`indeterminate`]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html#indeterminate) プロパティを `true` に設定できます。

```html
<igx-circular-bar
[animate]="false"
[indeterminate]="true"
[textVisibility]="false"
></igx-circular-bar>
```

>[!NOTE]
>円形のプログレスバーのテキストを非表示にするには、[`textVisibility`]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html#textvisibility) プロパティを ` false` に設定します。

結果は以下のようになります。

<div class="sample-container loading" style="height:100px">
    <iframe id="indeterminate-progressbar-sample-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-display/circular-indeterminate-progressbar" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="indeterminate-progressbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="indeterminate-progressbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

### ダイナミック プログレス

ボタンなどの外部コントロールを使用して進行の値を動的に変更できます。これを実現するには、値をクラス プロパティにバインドします。

```html
<div class="sample-content">
    <igx-circular-bar
    [value]="currentValue"
    [max]="100"
    [animate]="true"
    class="custom-size"
    >
    <div class="button-container">
        <button igxButton="icon" (click)="decrementProgress()">
            <igx-icon fontSet="material">remove</igx-icon>
        </button>
        <button igxButton="icon" (click)="incrementProgress()">
            <igx-icon fontSet="material">add</igx-icon>
        </button>
    </div>
</div>
```

値を増減するメソッドを追加します。

```typescript
public currentValue: number;

public ngOnInit() {
    this.currentValue = 0;
}

public incrementProgress() {
    this.currentValue += 10;
    if (this.currentValue > 100) {
        this.currentValue = 100;
    }
}

public decrementProgress() {
    this.currentValue -= 10;
    if (this.currentValue < 0) {
        this.currentValue = 0;
    }
}
```

スタイルを追加します。

```scss
.custom-size {
  width: 100px;
  height: 100px;
}

.sample-content {
  width: 300px;
  display: flex;
  align-items: center;
  margin-top: 30px;
}
```

### グラデーション プログレス

プログレス バーをカスタマイズする方法の 1 つとして、単色の代わりにカラー グラデーションを使用する方法があります。
これは、[`IgxProgressBarGradientDirective`]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html#gradienttemplate) ディレクティブを使用する、もしくは、カスタムテーマを実装 することにより実行できます (カスタム テーマは 2 つまでの色経由点 (color stop) をサポートします)。

２つの色経由点のみでグラデーションを作成する場合、カスタム テーマを使用できます。色のリストを作成し、それを `$progress-circle-color` テーマ パラメーターに渡します。

```scss
$colors: #695cf9, #ef017c;

$custom-theme: igx-progress-circular-theme(
    $progress-circle-color: $colors
    
);
```

円形のプログレス バーのスタイル設定については、[`スタイル設定セクション`](./circular-progress.html#スタイル設定) を参照してください。

3つ以上の色経由点を持つグラデーションを提供するには、`igx-circular-bar` の `ng-template` でディレクティブを使用する必要があります。

```html
<div class="sample-content">
  <igx-circular-bar
  [value]="currentValue"
  [max]="100"
  [animate]="true"
  class="custom-size"
  >
      <ng-template igxProgressBarGradient let-id>
          <svg:linearGradient [id]="id" gradientTransform="rotate(90)">
              <stop offset="0%"   stop-color="#ff9a40"/>
              <stop offset="50%" stop-color="#1eccd4"/>
              <stop offset="100%" stop-color="#ff0079"/>
          </svg:linearGradient>
      </ng-template>
  </igx-circular-bar>

  <div class="button-container">
      <button igxButton="icon" (click)="removeProgress()">
          <igx-icon fontSet="material">remove</igx-icon>
      </button>
      <button igxButton="icon" (click)="addProgress()">
          <igx-icon fontSet="material">add</igx-icon>
      </button>
  </div>
</div>
```

上記の手順を再現した後、以下のようになります。

<div class="sample-container loading" style="height:200px">
    <iframe id="circular-dynamic-sample-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-display/circular-dynamic-sample" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="circular-dynamic-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="circular-dynamic-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

## スタイル設定

円形のプログレスバーのスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

最も簡単な方法として、[`igx-progress-circular-theme`]({environment:sassApiUrl}/index.html#function-igx-progress-circular-theme) を拡張し、`$base-circle-color` および `$progress-circle-color` パラメーターを受け取る新しいテーマを作成する方法があります。

```scss
$custom-theme: igx-progress-circular-theme(
    $base-circle-color: lightgray,
    $progress-circle-color: rgb(32, 192, 17)
);
```

### テーマを含む

<div class="divider"></div>

最後にコンポーネントのテーマをアプリケーションに含めます。

`$legacy-support` が `true` に設定されている場合、**コンポーネントのテーマ**を以下のように含めます。

```scss
 @include igx-progress-circular($custom-theme);
```
>[!NOTE]
>コンポーネントが [`Emulated`](themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

```scss
:host {
     ::ng-deep {
        @include igx-progress-circular($custom-theme);
    }
}
```

<div class="divider"></div>

`$legacy-support` が `false` (デフォルト) に設定されている場合、**css 変数** を以下のように含めます。

```scss
@include igx-css-vars($custom-theme);
```

>[!NOTE]
>コンポーネントが [`Emulated`](themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合においても、変数をオーバーライドするにはグローバル セレクターが必要なため、`:host` を使用する必要があります。

```scss
:host {
    @include igx-css-vars($custom-theme);
}
```

### デモ
<div class="divider--half"></div>
<div class="sample-container loading" style="height:100px">
    <iframe id="circular-styling-sample-iframe" src='{environment:demosBaseUrl}/data-display/circular-styling-sample' width="100%" height="100%" 
        seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="circular-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="circular-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

## API
<div class="divider--half"></div>

* [IgxCircularProgressBarComponent]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html)
* [IgxCircularProgressBarComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-progress-circular-theme)
