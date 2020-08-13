---
title: Button ディレクティブ
_description: Ignite UI for Angular の Button コントロールで規格のボタンに定義済みテキスト、画像、およびその他の機能を追加します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Button コンポーネント, Angular Button コントロール
_language: ja
---

## Button
<p class="highlight">Ignite UI for Angular Button ディレクティブを任意の button、span、div、または anchor 要素に適用して高機能なボタンを構成できます。</p>

### デモ
<div class="divider--half"></div>
<div class="sample-container loading" style="height: 150px">
    <iframe id="buttons-sample-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/data-entries/buttons-sample-1" onload="onSampleIframeContentLoaded(this);">
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttons-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法

Button ディレクティブは `NgModule` としてエクスポートされるため、アプリケーションで `AppModule` に `IgxButtonModule` をインポートする必要があります。

```typescript
// app.module.ts

import { IgxButtonModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxButtonModule,
        ...
    ]
})
export class AppModule {}
```

### ボタン タイプ

#### Flat ボタン

[`igxButton`]({environment:angularApiUrl}/classes/igxbuttondirective.html) ディレクティブを使用して、シンプルなフラット ボタンをコンポーネント テンプレートに追加します。タイプを選択しない場合、デフォルト値は `flat` です。

```html
<button igxButton="flat">Flat</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-2">
</iframe></div>

#### Raised ボタン 

エンボス加工されたボタンを作成するには、`igxButton` プロパティの値を変更するだけです。

```html
<button igxButton="raised">Raised</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-5">
</iframe></div>

#### Outlined ボタン

同様に、アウトライン タイプに切り替えることができます。

```html
<button igxButton="outlined">Outlined</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-8">
</iframe></div>

#### Icon ボタン

アイコンをボタンとして使用することもできます。

```html
<button igxButton="icon">
  <igx-icon fontSet="material">favorite</igx-icon>
</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-7">
</iframe></div>

#### フローティング アクション ボタン

アイコンを使用して、フローティング アクション ボタンを作成します。

```html
<button igxButton="fab">
  <igx-icon fontSet="material">edit</igx-icon>
</button>
```

拡張 FAB を作成するには、`igx-icon` の前に任意の要素を追加できます。

```html
<button class="btn" igxButton="fab">
    <span>like</span>
    <igx-icon fontSet="material">favorite</igx-icon>
</button>
```

>[!NOTE]
>拡張 FAB テキストを適切にスタイルするには、`<span>`、`<div>` または `<p>` タグを使用します。

<div class="sample-container loading" style="height: 100px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-6">
</iframe></div>

### 例

#### ボタンの無効化

ボタンを無効にするには、`disabled` プロパティを使用します。

```html
<button igxButton="raised" [disabled]="'true'">Disabled</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-disabled-sample">
</iframe></div> 

#### Ripple

[`igxRipple`]({environment:angularApiUrl}/classes/igxrippledirective.html) ディレクティブは、ボタンまたはその他の指定した要素にリップル効果を追加します。`以下のプロパティを使用して、デフォルトのリップル色、位置、および期間を簡単に変更できます。

```html
<button igxButton="raised" igxRipple="white" [igxRippleCentered]="true" [igxRippleDuration]="2000">
    Ripple
</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-3">
</iframe></div> 

#### Span

`Span` や `div` などの要素を Ignite UI for Angular スタイルのボタンに変更するために `igxButton` ディレクティブを使用できます。デフォルトの色は `igxButtonColor` と `igxButtonBackground` プロパティでカスタマイズできます。

```html
<span igxButton="raised" igxButtonColor="white" igxButtonBackground="#72da67" igxRipple="white">
    Span
</span>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-4">
</iframe></div>

### 密度の表示

[`displayDensity`]({environment:angularApiUrl}/classes/igxbuttondirective.html#displaydensity) 入力を使用して `igxButton` の表示密度を選択できます。これを行うには、まず `IgxButtonGroupModule` をインポートし、[`igxButtonGroup`]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html) コンポーネントによってすべての密度値を表示する必要があります。これにより、選択されるたびにボタンの `displayDensity` にバインドされた独自の **density** プロパティが更新されます。

> [!NOTE] 
> `Icon` タイプのボタンは、異なる表示密度値を設定しても視覚的に変化しません。

```typescript
// app.module.ts
...
import { IgxButtonGroupModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxButtonGroupModule
        ...
    ]
})
```

```html
<!--buttons-density.component.html-->

<igx-buttongroup [values]="displayDensities" (onSelect)="selectDensity($event)"></igx-buttongroup>
...
<button igxButton="flat" [displayDensity]="density">Flat</button>
```

```typescript
// buttons-density.component.ts
public density = "comfortable";
public displayDensities;

public ngOnInit() {
    this.displayDensities = [
        { label: 'comfortable', selected: this.density === 'comfortable', togglable: true },
        { label: 'cosy', selected: this.density === 'cosy', togglable: true },
        { label: 'compact', selected: this.density === 'compact', togglable: true }
    ];
}

public selectDensity(event) {
    this.density = this.displayDensities[event.index].label;
}
```

以下は結果です。

<div class="sample-container loading" style="height: 150px">
    <iframe id="buttons-display-density-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/data-entries/buttons-display-density" onload="onSampleIframeContentLoaded(this);">
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="buttons-display-density-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttons-display-density-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### スタイル設定

ボタンのスタイル設定を始めるには、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

次に、[`igx-button-theme`]({environment:sassApiUrl}/index.html#function-igx-button-theme) を拡張し、それぞれのホバーとフォーカス パラメーターと共に `$raised-text-color` と `$raised-background` パラメーターを受け入れる新しいテーマを作成します。

```scss
$custom-button-theme: igx-button-theme(
    $raised-text-color: #fdfdfd,
    $raised-hover-text-color: #fdfdfd,
    $raised-background: #345779,
    $raised-hover-background: #2e4d6b,
    $raised-focus-text-color: #fdfdfd,
    $raised-focus-background: #2e4d6b,
    $disabled-color: #2e4d6b
);
```

カスタム テーマでは、`raised` ボタンにのみパラメーター値を提供しました。その他のタイプのボタンに実装するには、対応するパラメーターをターゲットにします。

ボタンのスタイル設定に使用できるパラメーターの完全なリストについては、[`igx-button-theme`]({environment:sassApiUrl}/index.html#function-igx-button-theme) セクションを参照してください。

#### CSS 変数の使用 

最後には、カスタム ボタン テーマをアプリケーションに渡します。 

```scss
 @include igx-css-vars($custom-button-theme);
```

#### テーマ オーバーライドの使用

Internet Explorer 11 などの古いブラウザーのコンポーネントをスタイル設定するには、CSS 変数をサポートしていないため、別のアプローチを用いる必要があります。

コンポーネントが [`Emulated`](themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。カスタム テーマが他のコンポーネントに影響しないようにするには、`::ng-deep` の前に `:host` セレクターを含めるようにしてください。

```scss
:host {
     ::ng-deep {
        @include igx-button($custom-button-theme);
    }
}
```

#### デモ

<div class="sample-container loading" style="height: 100px">
    <iframe id="buttons-style-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/data-entries/buttons-style" class="lazyload no-theming">
</iframe></div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="buttons-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttons-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### API リファレンス
<div class="divider--half"></div>

* [IgxButtonDirective]({environment:angularApiUrl}/classes/igxbuttondirective.html)
* [IgxButton スタイル]({environment:sassApiUrl}/index.html#function-igx-button-theme)
* [IgxRippleDirective]({environment:angularApiUrl}/classes/igxrippledirective.html)
* [IgxButtonGroupComponent]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html)

### その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
