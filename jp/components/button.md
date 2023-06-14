---
title: Angular Button コンポーネント – Ignite UI for Angular
_description: Ignite UI for Angular Button コンポーネントで規格のボタンに定義済みテキスト、画像、およびその他の機能を追加します。今すぐお試しください。
_keywords: Angular Button コンポーネント, Angular Button コントロール, Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, Angular UI コンポーネント
_language: ja
---

# Angular Button (ボタン) の概要
<p class="highlight">Angular Button ディレクティブは、アクション可能なボタンを作成して Web ページ/アプリケーションに追加するために使用されます。簡単にカスタマイズでき、いくつかの組み込み機能を含むさまざまな Angular Button タイプがあります。デフォルトでは、AngularMaterial はネイティブの `<button>` および `<a>` 要素を使用して、アクセス可能なエクスペリエンスを提供します。 

Ignite UI for Angular Button ディレクティブを任意の button、span、div、または anchor 要素に適用して高機能なボタンを構成できます。Flat ボタン、Raised ボタン、Outlined ボタン、Icon ボタン、FAB (フローティング アクション ボタン) の Angular ボタン タイプを使用できます。カスタマイズ可能な色、テーマを作成して Angular ボタン スタイルを変更するオプション、ユーザーがボタンの表示密度を選択できるようにするオプションなどを提供します。</p>

## Angular Button の例
以下の Angular Button の例を作成して、さまざまなボタン タイプが境界線でスタイル設定されている場合、または透明な背景が適用されている場合にどのように表示されるかを示します。

<div class="divider--half"></div>

<code-view style="height: 150px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/buttons-sample-1" alt="Angular Button の例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Button を使用した作業の開始

Ignite UI for Angular Button ディレクティブを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxButtonModule` をインポートします。

```typescript
// app.module.ts

import { IgxButtonModule } from 'igniteui-angular';
// import { IgxButtonModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    imports: [
        ...
        IgxButtonModule,
        ...
    ]
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxButtonDirective` をスタンドアロンの依存関係としてインポートできます。

```typescript
// home.component.ts

...
import { IgxButtonDirective } from 'igniteui-angular';
// import { IgxButtonDirective } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<button igxButton="flat">Flat</button>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxButtonDirective]
})
export class HomeComponent {}
```

Ignite UI for Angular Button モジュールまたはディレクティブをインポートしたので、要素で `igxButton` ディレクティブの使用を開始できます。

## Angular ボタン タイプ

### Flat ボタン

[`igxButton`]({environment:angularApiUrl}/classes/igxbuttondirective.html) ディレクティブを使用して、シンプルなフラット ボタンをコンポーネント テンプレートに追加します。タイプを選択しない場合、デフォルト値は `flat` です。

```html
<button igxButton="flat">Flat</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-2"></iframe>
</div>

### Raised ボタン 

エンボス加工されたボタンを作成するには、`igxButton` プロパティの値を変更するだけです。

```html
<button igxButton="raised">Raised</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-5">
</iframe></div>

### Outlined ボタン

同様に、アウトライン タイプに切り替えることができます。

```html
<button igxButton="outlined">Outlined</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-8">
</iframe></div>

### Icon ボタン

アイコンをボタンとして使用することもできます。

```html
<button igxButton="icon">
  <igx-icon fontSet="material">favorite</igx-icon>
</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-7">
</iframe></div>

### FAB (フローティング アクション ボタン)

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
>拡張 FAB テキストを適切にスタイルするには、`<span>` または `<div>` タグを使用します。

<div class="sample-container loading" style="height: 100px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-6">
</iframe></div>

## 例

### Angular ボタンの無効化

ボタンを無効にするには、`disabled` プロパティを使用します。

```html
<button igxButton="raised" [disabled]="'true'">Disabled</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-disabled-sample">
</iframe></div> 

### Ripple

[`igxRipple`]({environment:angularApiUrl}/classes/igxrippledirective.html) ディレクティブは、ボタンまたはその他の指定した要素にリップル効果を追加します。`以下のプロパティを使用して、デフォルトのリップル色、位置、および期間を簡単に変更できます。

```html
<button igxButton="raised" igxRipple="white" [igxRippleCentered]="true" [igxRippleDuration]="2000">
    Ripple
</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-3">
</iframe></div>

### Span

`span` や `div` などの要素を Ignite UI for Angular スタイルのボタンに変更するために `igxButton` ディレクティブを使用できます。デフォルトの色は `igxButtonColor` と `igxButtonBackground` プロパティでカスタマイズできます。

```html
<span igxButton="raised" igxButtonColor="white" igxButtonBackground="#72da67" igxRipple="white">
    Span
</span>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-4">
</iframe></div>

## 密度の表示

[`displayDensity`]({environment:angularApiUrl}/classes/igxbuttondirective.html#displayDensity) 入力を使用して `igxButton` の表示密度を選択できます。これを行うには、まず `IgxButtonGroupModule` をインポートし、[`igxButtonGroup`]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html) コンポーネントによってすべての密度値を表示する必要があります。これにより、選択されるたびに Angular ボタンの `displayDensity` にバインドされた独自の **density** プロパティが更新されます。

> [!NOTE]
> `icon` タイプのボタンは、異なる表示密度値を設定しても視覚的に変化しません。

```typescript
// app.module.ts
...
import { IgxButtonGroupModule } from 'igniteui-angular';
// import { IgxButtonGroupModule } from '@infragistics/igniteui-angular'; for licensed package
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
<igx-buttongroup [values]="displayDensities" (selected)="selectDensity($event)"></igx-buttongroup>
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

<code-view style="height: 150px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/buttons-display-density" alt="Angular Button の例">
</code-view>
<div class="divider--half"></div>

## Angular ボタンのスタイル設定

ボタンのスタイル設定を始めるには、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;
// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

次に、[`button-theme`]({environment:sassApiUrl}/index.html#function-button-theme) を拡張し、それぞれのホバーとフォーカス パラメーターと共に `$foreground` と `$background` パラメーターを受け入れる新しいテーマを作成します。

次のマークアップを前提として:

```html
<div class="my-raised-btn">
    <button igxButton="raised">Raised button</button>
</div>
```

テーマを作成する必要があります:

```scss
$custom-button-theme: button-theme(
    $foreground: #fdfdfd,
    $hover-foreground: #fdfdfd,
    $focus-foreground: #fdfdfd,
    $background: #345779,
    $hover-background: #2e4d6b,
    $focus-background: #2e4d6b,
    $disabled-foreground: #2e4d6b
);
```

ボタンのスタイル設定に使用できるパラメーターの完全なリストについては、[`button-theme`]({environment:sassApiUrl}/index.html#function-button-theme) セクションを参照してください。

### CSS 変数の使用 

最後には、カスタム ボタン テーマをアプリケーションに渡します。 

```scss
.my-raised-btn {
    @include css-vars($custom-button-theme);
}
```

### テーマ オーバーライドの使用

Internet Explorer 11 などの古いブラウザーのコンポーネントをスタイル設定するには、CSS 変数をサポートしていないため、別のアプローチを用いる必要があります。
コンポーネントが [`Emulated`](themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。カスタム テーマが他のコンポーネントに影響しないようにするには、`::ng-deep` の前に `:host` セレクターを含めるようにしてください。

```scss
:host {
     ::ng-deep {
        .my-raised-btn {
            @include button($custom-button-theme);
        }
    }
}
```

### デモ
<code-view style="height: 100px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/buttons-style" >
</code-view>
<div class="divider--half"></div>

## API リファレンス
<div class="divider--half"></div>

* [IgxButtonDirective]({environment:angularApiUrl}/classes/igxbuttondirective.html)
* [IgxButton スタイル]({environment:sassApiUrl}/index.html#function-button-theme)
* [IgxRippleDirective]({environment:angularApiUrl}/classes/igxrippledirective.html)
* [IgxButtonGroupComponent]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)