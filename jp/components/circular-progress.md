---
title: Angular Circular Progress コンポーネント
_description: Ignite UI for Angular Circular Progress インジケーター コンポーネントは、丸形で進行状況を表示し、カスタマイズできるコンポーネントです。
_keywords: Angular Circular Progress コンポーネント, Angular Circular Progress コントロール, Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, Angular UI コンポーネント
_language: ja
---

# Angular Circular Progress (円形プログレス) コンポーネントの概要
<p class="highlight">Ignite UI for Angular Circular Progress インジケーター コンポーネントは、変更でアプリケーションの進行状況を表す視覚的なインジケーターです。丸形インジケーターは状態変更で外観を更新します。<p>
<div class="divider"></div>

## Angular Circular Progress の例

<code-view style="height:100px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/circular-progressbar" alt="Angular Circular Progress の例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Circular Progress を使用した作業の開始

Ignite UI for Angular Circular Progress コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxProgressBarModule` をインポートします。

```typescript
// app.module.ts

...
import { IgxProgressBarModule } from 'igniteui-angular';
// import { IgxProgressBarModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxProgressBarModule],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxCircularProgressBarComponent` をスタンドアロンの依存関係としてインポートすることも、[`IGX_CIRCULAR_PROGRESS_BAR_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/progressbar/public_api.ts) トークンを使用してコンポーネントとそのすべてのサポート コンポーネントおよびディレクティブをインポートすることもできます。

```typescript
// home.component.ts

import { IGX_CIRCULAR_PROGRESS_BAR_DIRECTIVES } from 'igniteui-angular';
// import { IGX_CIRCULAR_PROGRESS_BAR_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-circular-bar
        [value]="100"
        [animate]="true"
        class="custom-size"
    ></igx-circular-bar>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_CIRCULAR_PROGRESS_BAR_DIRECTIVES]
    /* or imports: [IgxCircularProgressBarComponent] */
})
export class HomeComponent {}
```

Ignite UI for Angular Progress Bar モジュールまたはディレクティブをインポートしたので、`igx-circular-bar` コンポーネントの使用を開始できます。

## Angular Circular Progress の使用

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
>**igx-circular-bar** は、各ステップに `{currentValue: 65, previousValue: 64}` のようなオブジェクトを出力する [`onProgressChanged`]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html#onProgressChanged) イベントを発生します。

> [!NOTE]
> [`step`]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html#step) 値が定義されていない場合、デフォルトの進行のインクリメントの値は、**[`max`]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html#max) 値の 1%** です。更新レートを変更するには、[`step`]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html#step) 値を定義する必要があります。


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
>円形のプログレスバーのテキストを非表示にするには、[`textVisibility`]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html#textVisibility) プロパティを `false` に設定します。

結果は以下のようになります。


<code-view style="height:100px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/circular-indeterminate-progressbar" >
</code-view>

<div class="divider--half"></div>

### ダイナミック プログレス

ボタンなどの外部コントロールを使用して進行の値を動的に変更できます。これを実現するには、値をクラス プロパティにバインドします。

```html
<div class="sample-content">
    <igx-circular-bar
        [value]="currentValue"
        [max]="100"
        [animate]="true"
        class="custom-size">
    </igx-circular-bar>
    <div class="button-container">
        <button igxIconButton="flat" (click)="decrementProgress()">
            <igx-icon fontSet="material">remove</igx-icon>
        </button>
        <button igxIconButton="flat" (click)="incrementProgress()">
            <igx-icon fontSet="material">add</igx-icon>
        </button>
    </div>
</div>
```

値を増減するメソッドを追加します。

```typescript
@Component({...})
export class HomeComponent {
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

$custom-theme: progress-circular-theme(
    $progress-circle-color: $colors
    
);
```

円形のプログレス バーのスタイル設定については、[`スタイル設定セクション`](#スタイル設定) を参照してください。

3つ以上の色経由点を持つグラデーションを提供するには、`igx-circular-bar` の `ng-template` でディレクティブを使用する必要があります。

```html
<div class="sample-content">
  <igx-circular-bar
    [value]="currentValue"
    [max]="100"
    [animate]="true"
    class="custom-size">
      <ng-template igxProgressBarGradient let-id>
          <svg:linearGradient [id]="id" gradientTransform="rotate(90)">
              <stop offset="0%"   stop-color="#ff9a40"/>
              <stop offset="50%" stop-color="#1eccd4"/>
              <stop offset="100%" stop-color="#ff0079"/>
          </svg:linearGradient>
      </ng-template>
  </igx-circular-bar>

  <div class="button-container">
      <button igxIconButton="flat" (click)="removeProgress()">
          <igx-icon fontSet="material">remove</igx-icon>
      </button>
      <button igxIconButton="flat" (click)="addProgress()">
          <igx-icon fontSet="material">add</igx-icon>
      </button>
  </div>
</div>
```

上記の手順を再現した後、以下のようになります。


<code-view style="height:200px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/circular-dynamic-sample" >
</code-view>

<div class="divider--half"></div>

## スタイル設定

円形のプログレスバーのスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最も簡単な方法として、[`progress-circular-theme`]({environment:sassApiUrl}/index.html#function-progress-circular-theme) を拡張し、`$base-circle-color` および `$progress-circle-color` パラメーターを受け取る新しいテーマを作成する方法があります。

```scss
$custom-theme: progress-circular-theme(
    $base-circle-color: lightgray,
    $progress-circle-color: rgb(32, 192, 17)
);
```

### テーマを含む

<div class="divider"></div>

最後にコンポーネントのテーマをアプリケーションに含めます。

`$legacy-support` が `true` に設定されている場合、**コンポーネントのテーマ**を以下のように含めます。

```scss
 @include progress-circular($custom-theme);
```
>[!NOTE]
>コンポーネントが [`Emulated`](themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

```scss
:host {
     ::ng-deep {
        @include progress-circular($custom-theme);
    }
}
```

<div class="divider"></div>

`$legacy-support` が `false` (デフォルト) に設定されている場合、**css 変数** を以下のように含めます。

```scss
@include css-vars($custom-theme);
```

>[!NOTE]
>コンポーネントが [`Emulated`](themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合においても、変数をオーバーライドするにはグローバル セレクターが必要なため、`:host` を使用する必要があります。

```scss
:host {
    @include css-vars($custom-theme);
}
```

### デモ
<div class="divider--half"></div>

<code-view style="height:100px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/circular-styling-sample" >
</code-view>


## API
<div class="divider--half"></div>

* [IgxCircularProgressBarComponent]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html)
* [IgxCircularProgressBarComponent スタイル]({environment:sassApiUrl}/index.html#function-progress-circular-theme)
