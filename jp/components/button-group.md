---
title: Button Group コンポーネント - MITライセンス
_description: ボタン グループの機能、さらに水平/垂直の配置、単一/複数の選択、および切り替え機能を提供します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ,  Angular ボタン グループ コンポーネント, Angular Button Group コントロール, Angular Button コンポーネント, Angular Button コントロール
_license: MIT
_language: ja
---

# Angular Button Group (ボタン グループ) コンポーネントの概要

<p class="highlight">Angular Button Group コンポーネントは、ボタンを水平/垂直配置、単一/複数選択、オン/オフ切り替えが可能なスタイルのボタン グループに組織するために使用します。</p>

## Angular Button Group の例

<code-view style="height: 85px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/button-group-sample-1/" alt="Angular Button Group の例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Button Group を使用した作業の開始

Ignite UI for Angular Button Group コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxButtonGroupModule` をインポートします。

```typescript
// app.module.ts

...
import { IgxButtonGroupModule } from 'igniteui-angular';
// import { IgxButtonGroupModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxButtonGroupModule],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxButtonGroupComponent` をスタンドアロンの依存関係としてインポートすることも、[`IGX_BUTTON_GROUP_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/buttonGroup/public_api.ts) トークンを使用してコンポーネントとそのすべてのサポート コンポーネントおよびディレクティブをインポートすることもできます。

```typescript
// home.component.ts

...
import { IGX_BUTTON_GROUP_DIRECTIVES, IgxIconComponent } from 'igniteui-angular';
// import { IGX_BUTTON_GROUP_DIRECTIVES, IgxIconComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-buttongroup>
        <button igxButton>
            <igx-icon>format_align_left</igx-icon>
        </button>
        <button igxButton>
            <igx-icon>format_align_center</igx-icon>
        </button>
        <button igxButton>
            <igx-icon>format_align_right</igx-icon>
        </button>
        <button igxButton selected>
            <igx-icon>format_align_justify</igx-icon>
        </button>
    </igx-buttongroup>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_BUTTON_GROUP_DIRECTIVES, IgxIconComponent]
    /* or imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxIconComponent] */
})
export class HomeComponent {}
```

Ignite UI for Angular Button Group モジュールまたはディレクティブをインポートしたので、`igx-buttongroup` とそのボタンの基本構成を開始できます。

## Angular Button Group コンポーネントの使用

### ボタン グループの追加

[`igx-buttongroup`]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html) セレクターを使用してボタンをラップし、ボタン グループに表示します。デフォルトでボタンを選択したい場合、`selected` プロパティを使用します。

```html
<!-- sample.component.html -->
<igx-buttongroup>
  <button igxButton>
    <igx-icon>format_align_left</igx-icon>
  </button>
  <button igxButton>
    <igx-icon>format_align_center</igx-icon>
  </button>
  <button igxButton>
    <igx-icon>format_align_right</igx-icon>
  </button>
  <button igxButton selected>
    <igx-icon>format_align_justify</igx-icon>
  </button>
</igx-buttongroup>
```

## 例

### 配置

[`alignment`]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html#alignment) プロパティを使用して、ボタン グループ内のボタンの方向を設定します。

```typescript
//sample.component.ts
import { ButtonGroupAlignment } from 'igniteui-angular';
// import { ButtonGroupAlignment } from '@infragistics/igniteui-angular'; for licensed package

...
public alignment = ButtonGroupAlignment.vertical;
...
```

```html
<!-- sample.component.html -->
<igx-buttongroup [alignment]="alignment">
  <button igxButton>Sofia</button>
  <button igxButton>London</button>
  <button igxButton selected>New York</button>
  <button igxButton>Tokyo</button>
</igx-buttongroup>
```

<code-view style="height: 220px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/button-group-sample-2/" >
</code-view>

<div class="divider--half"></div>

### 選択

`igx-buttongroup` 選択を構成するには、その [selectionMode]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html#selectionMode) プロパティを使用できます。このプロパティは、次の 3 つのモードを受け入れます:

- **single** - ボタン グループのデフォルトの選択モードです。ユーザーは単一のボタンを選択/選択解除できます。
- **singleRequired** - ラジオ グループの動作を模倣します。選択できるボタンは 1 つだけであり、最初に選択すると、ユーザーの操作を通じて選択を解除することはできません。
- **multi** - グループ内の複数のボタンを選択または選択解除できます。

以下のサンプルは、公開された `igx-buttongroup` 選択モードを示しています。

<code-view style="height: 170px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/button-group-sample-4/" >
</code-view>

### サイズ

`--ig-size` CSS カスタム プロパティを使用して、ボタン グループのサイズを制御できます。

```scss
/* sample.component.scss */
igx-buttongroup {
  --ig-size: var(--ig-size-small);
}
```

```html
<!-- sample.component.html -->
<igx-buttongroup></igx-buttongroup>
```

<code-view style="height: 80px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/button-group-sample-5/" >
</code-view>

### カスタム トグル ボタン

[`values`]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html#values) プロパティを使用して、ボタン グループ内のカスタムボタンの配列を設定します。

```typescript
// sample.component.ts

interface IButton {
    ripple?: string;
    label?: string;
    disabled?: boolean;
    togglable?: boolean;
    selected?: boolean;
    color?: string;
    icon?: string;
}

class ToggleButton {
    private ripple: string;
    private label: string;
    private disabled: boolean;
    private togglable: boolean;
    private selected: boolean;
    private color: string;
    private icon: string;

    constructor(obj?: IButton) {
        this.ripple = obj.ripple || 'gray';
        this.label = obj.label;
        this.selected = obj.selected || false;
        this.togglable = obj.togglable || true;
        this.disabled = obj.disabled || false;
        this.color = obj.color;
        this.icon = obj.icon;
    }
}
...
public bordersButtons: ToggleButton[];

public ngOnInit() {
    this.bordersButtons = [
        new ToggleButton({
            icon: 'border_top',
            selected: true
        }),
        new ToggleButton({
            icon: 'border_right',
            selected: false
        }),
        new ToggleButton({
            icon: 'border_bottom',
            selected: false
        }),
        new ToggleButton({
            icon: 'border_left',
            selected: false
        })
    ];
}
...
```

```html
<!-- sample.component.html -->
<igx-buttongroup [selectionMode]="'multi'" [values]="bordersButtons"></igx-buttongroup>
```

<code-view style="height: 90px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/button-group-sample-3/" >
</code-view>

## スタイル設定

### Button Group テーマのプロパティ マップ

`$item-background` プロパティの値を設定すると、下の表にリストされている関連するすべての依存プロパティが自動的に更新され、視覚的な一貫性が維持されます。次の表は、プライマリ プロパティをカスタマイズしたときに影響を受けるプロパティを示しています。

<table class="collapsible-table">
  <thead>
    <tr>
      <th>プライマリ プロパティ</th>
      <th>依存プロパティ</th>
      <th>説明</th>
    </tr>
  </thead>

  <!-- group for item-background -->
  <tbody class="group">
    <tr class="primary">
      <td>
        <details><summary><strong>$item-background</strong></summary></details>
      </td>
      <td>$item-hover-background</td>
      <td>項目のホバー時の背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-selected-background</td>
      <td>選択項目の背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-focused-background</td>
      <td>フォーカス時の項目の背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-background-color</td>
      <td>無効な項目の背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-border-color</td>
      <td>項目の境界線の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-text-color</td>
      <td>項目のテキストの色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$idle-shadow-color</td>
      <td>項目のアイドル シャドウの色</td>
    </tr>
  </tbody>

  <!-- group for item-hover-background -->
  <tbody class="group">
    <tr class="primary">
      <td>
        <details><summary><strong>$item-hover-background</strong></summary></details>
      </td>
      <td>$item-selected-hover-background</td>
      <td>選択された項目のホバー時の背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-focused-hover-background</td>
      <td>フォーカス + ホバー時の背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-hover-text-color</td>
      <td>ホバー時の項目のテキストの色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-hover-icon-color</td>
      <td>ホバー時の項目のアイコンの色</td>
    </tr>
  </tbody>

  <!-- group for item-selected-background -->
  <tbody class="group">
    <tr class="primary">
      <td>
        <details><summary><strong>$item-selected-background</strong></summary></details>
      </td>
      <td>$item-selected-focus-background</td>
      <td>フォーカス時の選択項目の背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-selected-background</td>
      <td>無効な選択項目の背景の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-selected-text-color</td>
      <td>選択項目のテキストの色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-selected-icon-color</td>
      <td>選択項目のアイコンの色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-selected-hover-text-color</td>
      <td>ホバー時の選択項目のテキストの色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-selected-hover-icon-color</td>
      <td>ホバー時の選択項目のアイコンの色</td>
    </tr>
  </tbody>

  <!-- group for item-border-color -->
  <tbody class="group">
    <tr class="primary">
      <td>
        <details><summary><strong>$item-border-color</strong></summary></details>
      </td>
      <td>$item-hover-border-color</td>
      <td>ホバー時の項目の境界線の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-focused-border-color</td>
      <td>フォーカス時の項目の境界線の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-selected-border-color</td>
      <td>選択項目の境界線の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-selected-hover-border-color</td>
      <td>ホバー時の選択項目の境界線の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$item-disabled-border</td>
      <td>無効な項目の境界線の色</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-selected-border-color</td>
      <td>無効な選択項目の境界線の色</td>
    </tr>
  </tbody>
</table>

ボタン グループ のスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最もシンプルな方法として、[`button-group-theme`]({environment:sassApiUrl}/themes#function-button-group-theme) を拡張し、`$item-background` のみを指定して新しいテーマを作成します。これにより、インタラクション状態の色、前景の色、境界線の色が自動的に算出されます。必要に応じて任意のテーマ パラメーターをオーバーライドすることも可能です。

```scss
$custom-button-group: button-group-theme(
  $item-background: #57a5cd,
);
```

ご覧のとおり、`button-group-theme` は、項目の基本的なスタイル設定に役立ついくつかのパラメーターを公開しています。ボタン固有のパラメーターを変更する場合は、`button-theme` を拡張する新しいテーマを作成し、それぞれのボタン グループのクラスの下でスコープできます。

最後にコンポーネントのテーマを含めます。

```scss
@include css-vars($custom-button-group);
```

### デモ

<code-view style="height: 200px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/button-group-style/" >
</code-view>

### Tailwind によるスタイル設定

カスタム Tailwind ユーティリティ クラスを使用して `button-group` をスタイル設定できます。まず [Tailwind を設定して](themes/misc/tailwind-classes.md)ください。

グローバル スタイルシートに Tailwind をインポートした上で、以下のように必要なテーマ ユーティリティを適用します:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

ユーティリティ ファイルには、`light` テーマと `dark` テーマの両方のバリエーションが含まれています。
- `light-*` クラスはライト テーマ用です。
- `dark-*` クラスはダーク テーマ用です。
- プレフィックスの後にコンポーネント名を追加します (例: `light-button-group`、`dark-button-group`)。

これらのクラスを適用すると、動的なテーマの計算が可能になります。そこから、`任意のプロパティ`を使用して、生成された CSS 変数をオーバーライドできます。コロンの後に、有効な CSS カラー形式 (HEX、CSS 変数、RGB など) を指定します。

プロパティの完全なリストは、[button-group-theme]({environment:sassApiUrl}/themes#function-button-group-theme) で確認できます。構文は次のとおりです:

```html
<igx-button-group
class="!light-button-group ![--item-background:#7B9E89]"
>
...
</igx-button-group>
```

>[!NOTE]
>ユーティリティ クラスが優先されるようにするには、感嘆符 (`!`) が必要です。Tailwind はスタイルをレイヤーに適用しますが、これらのスタイルを重要としてマークしないと、コンポーネントのデフォルトのテーマによってオーバーライドしてしまいます。

最終的に、button group は次のようになります:

<div class="sample-container loading" style="height:100px">
    <iframe id="button-group-tailwind-styling-iframe" data-src='{environment:demosBaseUrl}/data-entries/button-group-tailwind-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

## API リファレンス

<div class="divider--half"></div>

* [IgxButtonGroupComponent]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html)
* [IgxButtonGroup スタイル]({environment:sassApiUrl}/themes#function-button-group-theme)
* [IgxButtonDirective]({environment:angularApiUrl}/classes/igxbuttondirective.html)
* [IgxButton スタイル]({environment:sassApiUrl}/themes#function-button-theme)

## テーマの依存関係

* [IgxIcon テーマ]({environment:sassApiUrl}/themes#function-icon-theme)
* [IgxButton テーマ]({environment:sassApiUrl}/themes#function-button-theme)
* [IgxRipple テーマ]({environment:sassApiUrl}/themes#function-ripple-theme)

## その他のリソース

<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
