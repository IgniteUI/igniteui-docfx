---
title: Radio と Radio Group
_description: Ignite UI for Angular Radio Button コントロールおよび Radio Group コントロールは、テンプレート主導およびリアクティブ フォームで選択可能なオプションのリストを表示します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Radio Button コンポーネント, Angular Radio Button コントロール, Angular Radio Group コンポーネント, Angular Radio Group コントロール
_language: ja
---

# Radio & Radio Group

## Radio Button
<p class="highlight">Ignite UI for Angular Radio Button コンポーネントを使用すると、隣に表示されるオプションのセットから単一のオプションを選択する機能を提供します。</p>

## Angular Radio & Radio Group の例
<div class="sample-container loading" style="height: 90px">
    <iframe id="form-elements-sample-iframe" src='{environment:demosBaseUrl}/data-entries/radio-sample-1' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="form-elements-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="form-elements-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法

Radio Button コンポーネントを初期化にするには、まず `IgxRadioModule` を `AppModule` ファイルにインポートします。

```typescript
// app.module.ts

...
import { IgxRadioModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxRadioModule],
    ...
})
export class AppModule {
    public selected: any;
}
```

ラジオ ボタンを表示するには、コンポーネントのテンプレートで以下のコードを追加します。

```html
<igx-radio [(ngModel)]="selected" value="option1">Option 1</igx-radio>
<igx-radio [(ngModel)]="selected" value="option2">Option 2</igx-radio>
```

### ラベル

`labelPosition` プロパティを使用して、ラジオ コンポーネントのデフォルトのラベル位置を変更できます。`before` および `after` から選択できます。設定されていない場合、ラベルはラジオ ボタンの後に配置されます。

```html
<igx-radio [(ngModel)]="selected" value="option1" labelPosition="before">Option 1</igx-radio>
<igx-radio [(ngModel)]="selected" value="option2" labelPosition="before">Option 2</igx-radio>
```

<div class="sample-container loading" style="height: 90px">
    <iframe id="radio-sample-3-iframe" data-src='{environment:demosBaseUrl}/data-entries/radio-sample-3' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

### プロパティ
上記のサンプルに 4 つのラジオ ボタンを追加し、各ボタンに特定の背景色を適用します。次に含まれる div 要素の backgroundColor プロパティをコンポーネントの selectedColor プロパティにバインドします。selectedColor は `NgModel` ディレクティブによって双方向バインディングが設定されるため、ユーザーが別のラジオ ボタン (色) を選択する際に値が更新されます。

```typescript
// radiogroup.component.ts
...
public colors = [{
    hex: "#f06a2f",
    name: "Carrot"
}, {
    hex: "#ff134a",
    name: "Watermelon"
}, {
    hex: "#7bc96f",
    name: "Grass"
},
{
    hex: "transparent",
    name: "No color"
}];

public selectedColor: string = this.colors[3].hex;
```

```html
<!--radiogroup.component.html-->
<igx-radio *ngFor="let color of colors" 
           name="color" 
           [value]="color.hex" 
           [(ngModel)]="selectedColor">
           {{color.name}}
</igx-radio>

<div [style.background-color]="selectedColor">
    ...
</div>
```

双方向バインディングで `NgModel` ディレクティブを使用しない場合、`FormsModule` をインポートし、NgModule の imports リストに追加する必要があります。

結果は以下のようになります。

<div class="sample-container loading" style="height: 450px">
    <iframe id="radio-sample-2-iframe" data-src='{environment:demosBaseUrl}/data-entries/radio-sample-2' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="radio-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="radio-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

## スタイル設定

ラジオ ボタンのスタイル設定を始めるには、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

最も簡単な方法は、[`igx-radio-theme`]({environment:sassApiUrl}/index.html#function-igx-radio-theme) を拡張する新しいテーマを作成し、デフォルト テーマのいくつかのパラメーターを受け取る方法です。


```scss
$custom-radio-theme: igx-radio-theme(
    $disabled-color: lightgray,
    $empty-color:  #345779,
    $fill-color: #2dabe8,
    $fill-color-hover: #2dabe8,
    $fill-hover-border-color: #2dabe8
);
```

### CSS 変数の使用

最後には、カスタム ラジオ テーマをアプリケーションに渡します。

```scss
@include igx-css-vars($custom-radio-theme);
```

### テーマ オーバーライドの使用

Internet Explorer 11 などの古いブラウザーのコンポーネントをスタイル設定するには、CSS 変数をサポートしていないため、別のアプローチを用いる必要があります。

コンポーネントが [`Emulated`](themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。カスタム テーマが他のコンポーネントに影響しないようにするには、`::ng-deep` の前に `:host` セレクターを含めるようにしてください。

```scss
:host {
     ::ng-deep {
        @include igx-radio($custom-radio-theme);
    }
}
```

<div class="sample-container loading" style="height: 220px">
    <iframe id="radio-styling-sample-iframe" data-src='{environment:demosBaseUrl}/data-entries/radio-styling-sample' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="radio-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="radio-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

## Radio Group
<p class="highlight">Ignite UI for Angular Radio Group ディレクティブは、ラジオの子コンポーネントを制御できるグループ化コンテナーを提供し、**テンプレート駆動型およびリアクティブ型のフォームをサポートします。**</p>
<div class="divider"></div>

### デモ
<div class="sample-container loading" style="height: 360px">
    <iframe id="radio-group-sample-iframe" data-src='{environment:demosBaseUrl}/data-entries/radio-group-sample' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="radio-group-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="radio-group-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法

Radio Group ディレクティブが `NgModule` としてエクスポートされるため、アプリケーションで **app.module.ts** ファイルの `IgxRadioModule` をインポートする必要があります。

```typescript
// app.module.ts
...
import { IgxRadioModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxRadioModule],
    ...
})
```

まず、[`igxRadioGroup`]({environment:angularApiUrl}/classes/igxradiogroupdirective.html) を作成し、いくつかの [`igxRadio`]({environment:angularApiUrl}/classes/igxradiocomponent.html) コンポーネントを追加します。

ラジオ グループの [`name`]({environment:angularApiUrl}/classes/igxradiogroupdirective.html#name) プロパティの設定は**必須**であることに注意してください。

```html
<!--radio-group.component.html-->
<igx-radio-group name="fruitsRadioGroup">
    <igx-radio *ngFor="let fruit of fruits" value="{{fruit}}">
        {{fruit}}
    </igx-radio>
</igx-radio-group>
```

```typescript
// radio-group.component.ts
public fruits = ["Apple", "Mango", "Banana", "Orange"];
```

## API リファレンス
<div class="divider--half"></div>

* [IgxRadioGroupDirective]({environment:angularApiUrl}/classes/igxradiogroupdirective.html)
* [IgxRadioComponent]({environment:angularApiUrl}/classes/igxradiocomponent.html)
* [IgxRadioComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-radio-theme)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
