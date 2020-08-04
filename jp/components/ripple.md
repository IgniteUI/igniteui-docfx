---
title: Ripple ディレクティブ
_description: Ignite UI for Angular Ripple ディレクティブは、リップル アニメーション エフェクトが適用されている領域を定義できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Ripple コンポーネント, Angular Ripple コントロール
_language: ja
---

## Ripple

<p class="highlight">Ignite UI for Angular Ripple ディレクティブを使用すると、入力の受け取りが構成されていない領域にクリックまたはタッチした場合にリップル アニメーション エフェクトのフィードバックを作成できます。タッチまたはマウス クリックの応答としてアニメーションを再生する相対的な位置を持つ要素にこのディレクティブを設定します。</p>
<div class="divider"></div>

### Ripple デモ

<div class="sample-container loading" style="height: 558px">
    <iframe id="ripple-sample-1-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/interactions/ripple-sample-1" onload="onSampleIframeContentLoaded(this);">
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="ripple-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 依存関係
Ripple ディレクティブを初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールする必要があります。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](general/getting_started.md)トピックををご覧ください。

Ripple ディレクティブが `NgModule` としてエクスポートされるため、アプリケーションで `AppModule` に `IgxRippleModule` をインポートする必要があります。

```typescript
// app.module.ts

import { IgxRippleModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxRippleModule,
        ...
    ]
})
export class AppModule {}
```
> [!WARNING]
> [`igxRipple`]({environment:angularApiUrl}/classes/igxrippledirective.html) は Web Animation API を使用し、[サポートされるブラウザー](http://caniuse.com/#feat=web-animation)でネイティブに実行します。その他のブラウザーでは `web-animations.min.js` [ポリフィル](https://github.com/web-animations/web-animations-js)を使用します。

### 使用方法
#### リップル エフェクトの追加

[`igxRipple`]({environment:angularApiUrl}/classes/igxrippledirective.html) を使用して指定した要素にリップル効果を追加します。デフォルト色のリップル エフェクトを追加します。

```html
<button igxButton="raised" igxRipple>Click Me</button>
```

<div class="sample-container loading" style="height: 68px">
    <iframe seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/interactions/ripple-sample-5" class="lazyload">
</iframe></div>

#### カスタム色

[`igxRipple`]({environment:angularApiUrl}/classes/igxrippledirective.html) でリップル色を設定できます。このサンプルでは、リップルに白色を設定します。

```html
<button igxButton="raised" igxRipple="white">White</button>
```

<div class="sample-container loading" style="height: 68px">
    <iframe seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/interactions/ripple-sample-6" class="lazyload">
</iframe></div>

#### 中央揃えのリップル エフェクト

リップル エフェクトはクリック イベントの位置から開始します。この動作で要素の中点を原点に変更するには、[`igxRippleCentered`]({environment:angularApiUrl}/classes/igxrippledirective.html#centered) を使用できます。

```html
<button igxButton="raised" igxRipple="white" igxRippleCentered="true">Centered</button>
```

<div class="sample-container loading" style="height: 68px">
    <iframe seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/interactions/ripple-sample-3" class="lazyload">
</iframe></div>

#### リップルの対象要素

[`igxRippleTarget`]({environment:angularApiUrl}/classes/igxrippledirective.html#rippletarget) を使用して親要素内の特定の要素にリップル エフェクトをアタッチします。

```html
<div class="parent-div" igxRipple="blue" igxRippleTarget=".child-div" igxRippleCentered="true">
  Parent Div
  <div class="child-div">
    Child Div
  </div>
</div>
```

親 div または子 div をクリックすると、リップル エフェクトは子 div 内のみに表示されます。子 div の要素を **relative** に設定する必要があります。

<div class="sample-container loading" style="height: 168px">
    <iframe seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/interactions/ripple-sample-2" class="lazyload">
</iframe></div>

#### リップルの期間

[`igxRippleDuration`]({environment:angularApiUrl}/classes/igxrippledirective.html#rippleduration) を使用するとリップル アニメーションの期間を変更できます。デフォルト値は 600 ミリ秒です。このサンプルで [`igxRippleDuration`]({environment:angularApiUrl}/classes/igxrippledirective.html#rippleduration) は 2000 ミリ秒に設定されます。

```html
<div class="ripple-sample dark" [igxRippleDuration]=2000 igxRipple="white">
  <p style="margin-bottom:0">Long Ripple Animation</p>
</div>
```

<div class="sample-container loading" style="height: 148px">
    <iframe seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/interactions/ripple-sample-4" class="lazyload">
</iframe></div>

> [!NOTE]
> リップル アニメーションで相対的な位置を持つ要素を使用します。また、[`igxRippleTarget`]({environment:angularApiUrl}/classes/igxrippledirective.html#rippletarget) を使用して子要素を対象にすることもできます。

### スタイル設定
igxRipple を使用すると、[Ignite UI for Angular Theme ライブラリ](./themes/component-themes.md) でスタイルを設定できます。リップルの [テーマ]({environment:sassApiUrl}/index.html#function-igx-ripple-theme) は、エフェクトの色をカスタマイズできるプロパティを公開します。        

#### グローバル テーマのインポート
事前定義されたリップルカラーのスタイリングを開始するには、すべてのスタイリング機能とミックスインが配置されている `index` ファイルをインポートする必要があります。  
```scss
@import '~igniteui-angular/lib/core/styles/themes/index'
```   

#### カスタム テーマの定義
次に、[`igx-ripple-theme`]({environment:sassApiUrl}/index.html#function-igx-ripple-theme) を拡張し、必要に応じてリップルをカスタマイズするために必要なパラメーターを受け入れる新しいテーマを作成します。

```scss
$custom-theme: igx-ripple-theme(
  $color: #FFCD0F
);
```   

#### カスタム カラー パレットの定義
上記の方法では、色の値はハードコードされていました。または、柔軟性を高めるために [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette)、[`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することもできます。   
`Igx-palette` は指定した一次色と二次色に基づいてカラーパレットを生成します。

```scss
$black-color: #494949;
$yellow-color: #ffcd0f;

$custom-palette: igx-palette(
    $primary: $black-color,
    $secondary: $yellow-color
);
```   

カスタム パレットが生成された後、`igx-color` 関数を使用して、さまざまな種類の原色と二次色を取得できます。   

```scss
$custom-theme: igx-ripple-theme(
    $color: igx-color($custom-palette, "secondary", 500)
);
```

#### カスタム スキーマの定義
[**スキーマ**](./themes/schemas.md) のすべての利点を備えた柔軟な構造を構築できます。**スキーマ** はテーマを作成させるための方法です。   
すべてのコンポーネントに提供される 2 つの事前定義されたスキーマのいずれかを拡張します。この場合、`$_dark_ripple` を使用します。   

```scss
$custom-ripple-schema: extend($_dark-ripple, (
    color: (igx-color("secondary", 500))
));
```   
カスタム スキーマを適用するには、`light` グローバルまたは `dark` グローバルを拡張する必要があります。プロセス全体が実際にコンポーネントにカスタム スキーマを提供し、その後、それぞれのコンポーネントテーマに追加します。   

```scss
$my-custom-schema: extend($dark-schema, (
    igx-ripple: $custom-ripple-schema
));

$custom-theme: igx-ripple-theme(
    $palette: $custom-palette,
    $schema: $my-custom-schema
);
```

#### カスタム テーマの適用
テーマを適用する最も簡単な方法は、グローバル スタイル ファイルに `sass` `@include` ステートメントを使用することです。
```scss
@include igx-ripple($custom-theme);
```

#### スコープ コンポーネント テーマ

カスタム テーマが特定のコンポーネントのみに影響するように、定義したすべてのスタイルをグローバル スタイル ファイルからカスタム コンポーネントのスタイルファイルに移動できます (`index` ファイルのインポートを含む)。

このように、Angular の [ViewEncapsulation](https://angular.io/api/core/Component#encapsulation) により、スタイルはカスタム コンポーネントにのみ適用されます。

 >[!NOTE]
 >コンポーネントが [`Emulated`](./themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を`ペネトレーション`する必要があります。
 >[!NOTE]
 >ステートメントがコンポーネントの外にある要素に影響を与えないよう、ステートメントを `:host` セレクター内にラップします。

```scss
:host {
    ::ng-deep {
        @include igx-ripple($custom-theme);
    }
}
```    

>[!NOTE]
  > `igxRiple` ディレクティブを使用して設定される色は、カスタム テーマ内で設定される色よりも優先されます。  

#### デモ
<div class="sample-container loading" style="height:700px">
    <iframe id="ripple-styling-sample-iframe" data-src='{environment:demosBaseUrl}/interactions/ripple-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="ripple-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="ripple-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>

### API リファレンス
<div class="divider--half"></div>

* [IgxRippleDirective]({environment:angularApiUrl}/classes/igxrippledirective.html)
* [IgxRipple スタイル]({environment:sassApiUrl}/index.html#function-igx-ripple-theme)

### その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)