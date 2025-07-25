---
title: Linear Progress コンポーネント
_description: Ignite UI for Angular Linear Progress Bar コンポーネントを使用すると、プログレス バーを表示し、色またはストライプなどの外観をカスタマイズします。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, Angular UI コンポーネント, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Linear Progress コンポーネント, Angular Linear Progress コントロール
_language: ja
---

# Angular Linear Progress (リニア プログレス) コンポーネントの概要

<p class="highlight">Ignite UI for Angular Linear Progress インジケーター コンポーネントは、変更でアプリケーションの進行状況を表す視覚的なインジケーターです。インジケーターは状態変更で外観を更新します。インジケーターがストライプまたは実線色でスタイル設定できます。</p>

## Angular Linear Progress の例

<code-view style="height:50px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/linear-progressbar" alt="Angular Linear Progress の例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Linear Progress を使用した作業の開始

Ignite UI for Angular Linear Progress コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

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

あるいは、`16.0.0` 以降、`IgxLinearProgressBarComponent` をスタンドアロンの依存関係としてインポートすることも、[`IGX_LINEAR_PROGRESS_BAR_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/progressbar/public_api.ts) トークンを使用してコンポーネントとそのすべてのサポート コンポーネントおよびディレクティブをインポートすることもできます。

```typescript
// home.component.ts

import { IGX_LINEAR_PROGRESS_BAR_DIRECTIVES } from 'igniteui-angular';
// import { IGX_LINEAR_PROGRESS_BAR_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
  selector: 'app-home',
  template: '<igx-linear-bar [value]="progress"></igx-linear-bar>',
  styleUrls: ['home.component.scss'],
  standalone: true,
  imports: [IGX_LINEAR_PROGRESS_BAR_DIRECTIVES],
  /* or imports: [IgxLinearProgressBarComponent] */
})
export class HomeComponent {
  public progress = 50;
}
```

Ignite UI for Angular Progress Bar モジュールまたはディレクティブをインポートしたので、`igx-linear-bar` コンポーネントの使用を開始できます。

## Angular Linear Progress の使用

すべてがどのように動作することを確認できるために、デモのような簡単な例を作成します。

```html
<igx-linear-bar [value]="100"></igx-linear-bar>
```

その後、ブラウザ上でデモサンプルを確認することができます。

### プログレス タイプ

[`type`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#type) 属性を使用してバーのタイプを設定できます。リニア プログレス バーには、`default`、`error`、`success`、`info`、および `warning` の 5 つのタイプがあります。

### ストライプ プログレス

バーをストライプ スタイルにするには、[`striped`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#type) プロパティを使用して `true` に設定します。

プログレス バーの様々なタイプを作成する方法を例で紹介します。

```html
<div class="linear-container">
  <igx-linear-bar [value]="100" type="default"></igx-linear-bar>
  <igx-linear-bar [value]="100" type="success" [striped]="true"></igx-linear-bar>
  <igx-linear-bar [value]="100" type="error"></igx-linear-bar>
  <igx-linear-bar [value]="100" type="info" [striped]="true"></igx-linear-bar>
  <igx-linear-bar [value]="100" type="warning"></igx-linear-bar>
</div>
```

すべてが正しく構成されると、ブラウザーで以下が表示されます。

<code-view style="height:200px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/linear-progressbar-sample-1" >
</code-view>

<div class="divider--half"></div>

### 不確定のプログレス

正確に決定していないプロセスをトラックしたい場合、[`indeterminate`]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html#indeterminate) プロパティを `true` に設定できます。

### アニメーション期間

[`animationDuration`]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html#animationDuration) 入力プロパティは、アニメーション サイクルにかかる時間を指定するために使用されます。

次の例では、アニメーションの継続時間を 5 秒に設定しています。

```html
<igx-linear-bar [striped]="false" [value]="100" [animationDuration]="5000"></igx-linear-bar>
```

### Text プロパティ

[`textAlign`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#textAlign) プロパティを使用してテキストを配置できます。指定できる値は `left`、`center`、`right` です。

テキストを非表示にするには、[`textVisibility`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#textVisibility)プロパティを使用して値を `false` に設定します。

[`textTop`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#textTop)プロパティを `true` に設定してバーの上にテキストを移動します。

[`text`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#text) プロパティを使用してテキスト自体の値をカスタマイズできます。

前述のテキスト プロパティを使用して以前のサンプルを更新します。不確定のプログレス バーも追加します。

```html
<div class="linear-container">
  <igx-linear-bar type="default" [value]="100"></igx-linear-bar>
  <igx-linear-bar
    type="success"
    [value]="100"
    class="indeterminate"
    [indeterminate]="true"
    [striped]="true"
  ></igx-linear-bar>
  <igx-linear-bar
    type="error"
    [value]="100"
    [textAlign]="positionEnd"
    [text]="'Custom text'"
  ></igx-linear-bar>
  <igx-linear-bar
    type="info"
    [value]="100"
    [textVisibility]="false"
    [striped]="true"
  ></igx-linear-bar>
  <igx-linear-bar
    type="warning"
    [value]="100"
    [textTop]="true"
  ></igx-linear-bar>
</div>
```

`textAlign` プロパティを使用している場合、コンポーネントの [`IgxTextAlign`]({environment:angularApiUrl}/enums/igxtextalign.html) 列挙子をインポートする必要があります。

```typescript
import { ..., IgxTextAlign } from 'igniteui-angular';
// import { ..., IgxTextAlign } from '@infragistics/igniteui-angular'; for licensed package
...

public positionCenter: IgxTextAlign = IgxTextAlign.CENTER;
public positionEnd: IgxTextAlign = IgxTextAlign.END;
```

以下は結果です。

<code-view style="height:200px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/linear-progressbar-sample-2" >
</code-view>

<div class="divider--half"></div>

> [!NOTE]
> [`step`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#step) 入力値が定義されていない場合、更新は **[`max`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#max) 値の 1%**。進行を速くしたい場合、[`step`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#step) 値を (**[`max`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#max) * 1%**) より大きい値にし、より遅い進行は[`step`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#step) をデフォルト進捗状況未満にする必要があります。

> [!NOTE]
> [`step`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#step) を [`value`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#value) 入力より大きい値に定義した場合、**進行状況の更新に渡す値**を取得する更新は一つのみとなります。  
<div class="divider--half"></div>

### ダイナミック プログレス

ボタンなどの外部コントロールを使用してプログレス バーの値を動的に変更できます。これを実現するには、値をクラス プロパティにバインドします。

```html
<div class="linear-container">
  <igx-linear-bar [value]="currentValue" [max]="100"></igx-linear-bar>

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

値を増減するメソッドを作成します。

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

上記の手順が完了した後、プログレス バーは以下のようになります。

<code-view style="height:200px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/linear-dynamic-sample" >
</code-view>

<div class="divider--half"></div>

## スタイル設定

リニア プログレスバーのスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最もシンプルな方法として、[`progress-linear-theme`]({environment:sassApiUrl}/themes#function-progress-linear-theme) を拡張し、`$fill-color-default` と `$text-color` のパラメーターのみをオーバーライドするテーマを作成します。

```scss
$custom-theme: progress-linear-theme(
  $fill-color-default: #ecaa53,
  $text-color: #ecaa53,
);
```

### テーマを含む

最後にコンポーネントのテーマをアプリケーションに**含めます**。

```scss
@include css-vars($custom-theme);
```

### デモ

<code-view style="height:50px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/linear-progressbar-styling" >
</code-view>

## API

<div class="divider--half"></div>

* [IgxLinearProgressBarComponent]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html)
* [IgxLinearProgressBarComponent スタイル]({environment:sassApiUrl}/themes#function-progress-linear-theme)
* [IgxTextAlign]({environment:angularApiUrl}/enums/igxtextalign.html)
