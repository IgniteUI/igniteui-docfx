---
title: Linear Progress コンポーネント
_description: Ignite UI for Angular Linear Progress Bar コンポーネントを使用すると、プログレス バーを表示し、色またはストライプなどの外観をカスタマイズします。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Linear Progress コンポーネント, Angular Linear Progress コントロール
_language: ja
---

## Linear Progress
<p class="highlight">Ignite UI for Angular Linear Progress インジケーター コンポーネントは、変更でアプリケーションの進行状況を表す視覚的なインジケーターです。インジケーターは状態変更で外観を更新します。インジケーターがストライプまたは実線色でスタイル設定できます。</p>
<div class="divider--half"></div>

#### デモ
<div class="sample-container loading" style="height:50px">
    <iframe id="linear-progressbar-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/data-display/linear-progressbar" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="linear-progressbar-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="linear-progressbar-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法
Linear Progress Bar Indicator コンポーネントを初期化するには、**IgxProgressBarModule** を **app.module.ts** ファイルにインポートします。
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

すべてがどのように動作することを確認できるために、デモのような簡単な例を作成します。

```html
<igx-linear-bar [value]="100"></igx-linear-bar>
```

その後、ブラウザ上でデモサンプルを確認することができます。

#### プログレス タイプ

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
<div class="sample-container loading" style="height:200px">
    <iframe id="linear-sample-1-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-display/linear-progressbar-sample-1" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="linear-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="linear-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
<div class="divider--half"></div>

#### 不確定のプログレス
正確に決定していないプロセスをトラックしたい場合、[`indeterminate`]({environment:angularApiUrl}/classes/igxcircularprogressbarcomponent.html#indeterminate) プロパティを `true` に設定できます。

#### Text プロパティ

[`textAlign`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#textalign) プロパティを使用してテキストを配置できます。指定できる値は `left`、`center`、`right` です。

テキストを非表示にするには、[`textVisibility`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#textvisibility)プロパティを使用して値を `false` に設定します。

[`textTop`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#texttop)プロパティを `true` に設定してバーの上にテキストを移動します。

[`text`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#text) プロパティを使用してテキスト自体の値をカスタマイズできます。

前述のテキスト プロパティを使用して以前のサンプルを更新します。不確定のプログレス バーも追加します。

```html
<div class="linear-container">
    <igx-linear-bar
        type="default"
        [value]="100"
    ></igx-linear-bar>
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
...

public positionCenter: IgxTextAlign = IgxTextAlign.CENTER;
public positionEnd: IgxTextAlign = IgxTextAlign.END;
```

以下は結果です。

<div class="sample-container loading" style="height:200px">
    <iframe id="linear-sample-2-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-display/linear-progressbar-sample-2" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="linear-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="linear-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> [`step`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#step) 入力値が定義されていない場合、更新は **[`max`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#max) 値の 1%**。進行を速くしたい場合、[`step`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#step) 値を (**[`max`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#max) * 1%**) より大きい値にし、より遅い進行は[`step`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#step) をデフォルト進捗状況未満にする必要があります。

> [`step`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#step) を [`value`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#value) 入力より大きい値に定義した場合、**進行状況の更新に渡す値**を取得する更新は一つのみとなります。  
<div class="divider--half"></div>

#### ダイナミック プログレス

ボタンなどの外部コントロールを使用してプログレス バーの値を動的に変更できます。これを実現するには、値をクラス プロパティにバインドします。

```html
<div class="linear-container">
    <igx-linear-bar
        [value]="currentValue"
        [max]="100"
    ></igx-linear-bar>

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

<div class="sample-container loading" style="height:200px">
    <iframe id="linear-dynamic-sample-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-display/linear-dynamic-sample" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="linear-dynamic-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="linear-dynamic-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
<div class="divider--half"></div>

### スタイル設定

リニア プログレスバーのスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

最も簡単な方法として、[`igx-progress-linear-theme`]({environment:sassApiUrl}/index.html#function-igx-progress-linear-theme) を拡張し、`$track-color`、`$fill-color-default` および `$text-color パラメーターを受け取る新しいテーマを作成する方法があります。

```scss
$custom-theme: igx-progress-linear-theme(
    $track-color: #D3D3D3,
    $fill-color-default: #ECAA53,
    $text-color: #ECAA53
);
```

#### テーマを含む

<div class="divider"></div>

最後にコンポーネントのテーマをアプリケーションに含めます。

`$legacy-support` が `true` に設定されている場合、**コンポーネントのテーマ**を以下のように含めます。

```scss
 @include igx-progress-linear($custom-theme);
```

>[!NOTE]
>コンポーネントが [`Emulated`](themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

```scss
:host {
     ::ng-deep {
        @include igx-progress-linear($custom-theme);
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

#### デモ

<div class="sample-container loading" style="height:50px">
    <iframe id="linear-progressbar-styling-iframe" src='{environment:demosBaseUrl}/data-display/linear-progressbar-styling' width="100%" height="100%" 
        seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="linear-progressbar-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="linear-progressbar-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>

### API
<div class="divider--half"></div>

* [IgxLinearProgressBarComponent]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html)
* [IgxLinearProgressBarComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-progress-linear-theme)
* [IgxTextAlign]({environment:angularApiUrl}/enums/igxtextalign.html)
