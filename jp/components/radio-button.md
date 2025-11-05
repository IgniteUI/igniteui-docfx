---
title: Radio と Radio Group
_description: Ignite UI for Angular Radio Button コントロールおよび Radio Group コントロールは、テンプレート主導およびリアクティブ フォームで選択可能なオプションのリストを表示します。
_keywords: Angular Radio Group コンポーネント, Angular Radio Group コントロール, Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, Angular UI コンポーネント, ネイティブ Angular コンポーネント ライブラリ
_language: ja
---

# Angular Radio & Radio Group (ラジオ & ラジオ グループ) コンポーネントの概要

## Radio Button (ラジオ ボタン)

<p class="highlight">Ignite UI for Angular Radio Button コンポーネントを使用すると、隣に表示されるオプションのセットから単一のオプションを選択する機能を提供します。</p>

## Angular Radio & Radio Group の例

<code-view style="height: 120px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/radio-sample-1/" alt="Angular Radio & Radio Group の例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Radio Button を使用した作業の開始

Ignite UI for Angular Radio Button コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxRadioModule` をインポートします。

```typescript
// app.module.ts

...
import { IgxRadioModule } from 'igniteui-angular';
// import { IgxRadioModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxRadioModule],
    ...
})
export class AppModule {
    public selected: any;
}
```

あるいは、`16.0.0` 以降、`IgxRadioGroupDirective` と `IgxRadioComponent` をスタンドアロンの依存関係としてインポートすることも、[`IGX_RADIO_GROUP_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/directives/radio/public_api.ts) トークンを使用してコンポーネントとそのすべてのサポート コンポーネントおよびディレクティブをインポートすることもできます。

```typescript
// home.component.ts

import { FormsModule } from '@angular/forms';
import { IGX_RADIO_GROUP_DIRECTIVES } from 'igniteui-angular';
// import { IGX_RADIO_GROUP_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
  selector: 'app-home',
  template: `
    <igx-radio-group>
      <igx-radio [(ngModel)]="selected" value="London">London</igx-radio>
      <igx-radio [(ngModel)]="selected" value="New York">New York</igx-radio>
      <igx-radio [(ngModel)]="selected" value="Tokyo">Tokyo</igx-radio>
      <igx-radio [(ngModel)]="selected" value="Sofia">Sofia</igx-radio>
    </igx-radio-group>
  `,
  styleUrls: ['home.component.scss'],
  standalone: true,
  imports: [IGX_RADIO_GROUP_DIRECTIVES, FormsModule],
  /* or imports: [IgxRadioComponent, IgxRadioGroupDirective, FormsModule] */
})
export class HomeComponent {
  public selected: any;
}
```

Ignite UI for Angular Radio Button モジュールまたはディレクティブをインポートしたので、`igx-radio-group` ディレクティブと `igx-radio` コンポーネントの使用を開始できます。

## Angular Radio Button の使用

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

<div class="sample-container loading" style="height: 120px">
    <iframe id="radio-sample-3-iframe" data-src='{environment:demosBaseUrl}/data-entries/radio-sample-3' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

### プロパティ

上記のサンプルに 4 つのラジオ ボタンを追加し、各ボタンに特定の背景色を適用します。次に含まれる div 要素の backgroundColor プロパティをコンポーネントの selectedColor プロパティにバインドします。selectedColor は `NgModel` ディレクティブによって双方向バインディングが設定されるため、ユーザーが別のラジオ ボタン (色) を選択する際に値が更新されます。

```typescript
// radiogroup.component.ts
...
public colors = [{
    hex: '#f06a2f',
    name: 'Carrot'
}, {
    hex: '#ff134a',
    name: 'Watermelon'
}, {
    hex: '#7bc96f',
    name: 'Grass'
},
{
    hex: 'transparent',
    name: 'No color'
}];

public selectedColor: string = this.colors[3].hex;
```

```html
<!--radiogroup.component.html-->
<igx-radio *ngFor="let color of colors" name="color" [value]="color.hex" [(ngModel)]="selectedColor">
  {{color.name}}
</igx-radio>

<div [style.background-color]="selectedColor">...</div>
```

双方向バインディングで `NgModel` ディレクティブを使用しない場合、`FormsModule` をインポートし、NgModule の imports リストに追加する必要があります。

結果は以下のようになります。

<code-view style="height: 550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/radio-sample-2/" >
</code-view>

## スタイル設定

最も簡単な方法は、CSS 変数を使用してラジオ ボタンの外観をカスタマイズする方法です。

```css
igx-radio {
    --empty-color: #556b81;
    --label-color: #131e29;
    --fill-color: #0064d9;
    --focus-outline-color: #0032a5;
}

igx-radio:hover {
    --empty-fill-color: #e3f0ff;
    --empty-color: #0064d9;
    --hover-color: transparent;
}
```

これらの CSS 変数の値を変更することで、コンポーネントの全体的な外観を変更できます。

<div class="divider--half"></div>

ラジオ ボタンにスタイルを設定する別の方法は、**Sass** と [`radio-theme`]({environment:sassApiUrl}/index.html#function-radio-theme) 関数を使用することです。

**Sass** を使用してラジオ ボタンのスタイル設定を開始するには、まずすべてのテーマ関数とコンポーネント ミックスインを含む `index` ファイルをインポートします。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最もシンプルな方法として、[`radio-theme`]({environment:sassApiUrl}/themes#function-radio-theme) を拡張する新しいテーマを作成します。`$empty-color` と `$fill-color` の 2 つの主要パラメーターを指定することで、完全なスタイルのラジオ ボタンを生成できます。これらの値はテーマの基盤となり、指定することでホバー、選択、無効など、さまざまな状態に必要な前景色および背景色が自動的に計算されます。

```scss
$custom-radio-theme: radio-theme(
    $empty-color:  #345779,
    $fill-color: #2dabe8,
);
```

最後に、カスタム テーマをアプリケーションに**含めます**。

```scss
@include css-vars($custom-radio-theme);
```

以下のサンプルでは、カスタマイズした CSS 変数を使用したラジオ ボタンが、[`SAP UI5`](https://ui5.sap.com/#/entity/sap.m.RadioButton/sample/sap.m.sample.RadioButton) デザイン システムのラジオ ボタンに視覚的に似たデザインを実現している様子を確認できます。 

<code-view style="height: 300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/radio-styling-sample/" >
</code-view>

> [!NOTE]
> サンプルでは、[Fluent Light](themes/sass/schemas.md#predefined-schemas) スキーマを使用します。

<div class="divider--half"></div>

## Radio Group

<p class="highlight">Ignite UI for Angular Radio Group ディレクティブは、ラジオの子コンポーネントを制御できるグループ化コンテナーを提供し、テンプレート駆動型およびリアクティブ型のフォームをサポートします。</p>
<div class="divider"></div>

### デモ

<code-view style="height: 300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/radio-group-sample/" >
</code-view>

<div class="divider--half"></div>

### 使用方法

Radio Group ディレクティブが `NgModule` としてエクスポートされるため、アプリケーションで **app.module.ts** ファイルの `IgxRadioModule` をインポートする必要があります。

```typescript
// app.module.ts
...
import { IgxRadioModule } from 'igniteui-angular';
// import { IgxRadioModule } from '@infragistics/igniteui-angular'; for licensed package

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

### 配置

[`alignment`]({environment:angularApiUrl}/classes/igxradiogroupdirective.html#alignment) 入力プロパティを使用して、ラジオ グループ内の `igxRadio` コンポーネントの方向を変更します。`horizontal` および `vertical` から選択できます。ラジオ グループのデフォルト配置は horizontal (水平) です。

```typescript
//sample.component.ts
import { RadioGroupAlignment } from "igniteui-angular";
...
public alignment = RadioGroupAlignment.vertical;
...
```

```html
<!-- sample.component.html -->
<igx-radio-group [alignment]="alignment">
  <igx-radio [(ngModel)]="selected" value="London">London</igx-radio>
  <igx-radio [(ngModel)]="selected" value="New York">New York</igx-radio>
  <igx-radio [(ngModel)]="selected" value="Tokyo">Tokyo</igx-radio>
  <igx-radio [(ngModel)]="selected" value="Sofia">Sofia</igx-radio>
</igx-radio-group>
```

<code-view style="height: 300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/radio-group-vertical/" >
</code-view>

<div class="divider--half"></div>

## API リファレンス

<div class="divider--half"></div>

* [IgxRadioGroupDirective]({environment:angularApiUrl}/classes/igxradiogroupdirective.html)
* [IgxRadioComponent]({environment:angularApiUrl}/classes/igxradiocomponent.html)
* [IgxRadioComponent スタイル]({environment:sassApiUrl}/themes#function-radio-theme)

## テーマの依存関係

* [IgxRipple テーマ]({environment:sassApiUrl}/themes#function-ripple-theme)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
