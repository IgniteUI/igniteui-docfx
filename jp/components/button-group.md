---
title: Button Group コンポーネント
_description: ボタン グループの機能、さらに水平/垂直の配置、単一/複数の選択、および切り替え機能を提供します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ,  Angular ボタン グループ コンポーネント, Angular Button Group コントロール, Angular Button コンポーネント, Angular Button コントロール
_language: ja
---

# Button Group
<p class="highlight">Ignite UI for Angular Button Group コンポーネントは、ボタンを水平/垂直配置、単一/複数選択、オン/オフ切り替えが可能なスタイルのボタン グループに組織するために使用します。</p>

## Angular Button Group の例

<code-view style="height: 85px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/button-group-sample-1" alt="Angular Button Group の例">
</code-view>

<div class="divider--half"></div>

## 使用方法

### はじめに

Button Group が `NgModule` としてエクスポートされるため、アプリケーションで `AppModule` に `IgxButtonGroupModule` をインポートする必要があります。

```typescript
// app.module.ts

import { IgxButtonGroupModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxButtonGroupModule,
        ...
    ]
})
export class AppModule {}
```

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
    <button igxButton [selected]="true">
        <igx-icon>format_align_justify</igx-icon>
    </button>
</igx-buttongroup>
```

## 例

### 配置
[`alignment`]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html#alignment) プロパティを使用して、ボタン グループ内のボタンの方向を設定します。

```typescript
//sample.component.ts
import { ButtonGroupAlignment } from "igniteui-angular";
...
public alignment = ButtonGroupAlignment.vertical;
...
```

```html
<!-- sample.component.html -->
<igx-buttongroup [alignment]="alignment">
    <button igxButton>Sofia</button>
    <button igxButton>London</button>
    <button igxButton [selected]="true">New York</button>
    <button igxButton>Tokyo</button>
</igx-buttongroup>
```


<code-view style="height: 220px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/button-group-sample-2" >
</code-view>

<div class="divider--half"></div>

### 複数選択
[`multiSelection`]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html#multiselection) プロパティを使用して、ボタン グループ内のボタンの複数選択を有効/無効化します。

```html
<!-- sample.component.html -->
<igx-buttongroup [multiSelection]="true">
    <button igxButton>
        <igx-icon>format_bold</igx-icon>
    </button>
    <button igxButton>
        <igx-icon>format_italic</igx-icon>
    </button>
    <button igxButton>
        <igx-icon>format_underlined</igx-icon>
    </button>
</igx-buttongroup>
```


<code-view style="height: 80px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/button-group-sample-4" >
</code-view>


### 表示密度
[`displayDensity`]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html#displaydensity) プロパティを使用して、ボタン グループの表示密度を制御します。これにより、グループ内のボタンのスタイルが、最大、最小、または標準 (デフォルト値) に設定されます。

> [!NOTE] 
> ボタン グループ内のボタンの表示密度は、明示的に指定されている場合は変更されません。

```typescript
// sample.component.ts
...
public displayDensity = "comfortable";
public displayDensities;

public ngOnInit() {
    this.displayDensities = [
        { label: "compact", selected: this.displayDensity === "compact", togglable: true },
        { label: "cosy", selected: this.displayDensity === "cosy", togglable: true },
        { label: "comfortable", selected: this.displayDensity === "comfortable", togglable: true }
    ];
}

public selectDensity(event) {
    this.displayDensity = this.displayDensities[event.index].label;
}
...
```

```html
<!-- sample.component.html -->
<igx-buttongroup [values]="displayDensities" 
                 [displayDensity]="displayDensity"
                 (selected)="selectDensity($event)">
</igx-buttongroup>
```


<code-view style="height: 80px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/button-group-sample-5" >
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
        this.ripple = obj.ripple || "gray";
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
            icon: "border_top",
            selected: true
        }),
        new ToggleButton({
            icon: "border_right",
            selected: false
        }),
        new ToggleButton({
            icon: "border_bottom",
            selected: false
        }),
        new ToggleButton({
            icon: "border_left",
            selected: false
        })
    ];
}
...
```

```html
<!-- sample.component.html -->
<igx-buttongroup [multiSelection]="true" [values]="bordersButtons"></igx-buttongroup>
```


<code-view style="height: 90px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/button-group-sample-3" >
</code-view>


## スタイル設定

ボタン グループ のスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

最も簡単な方法は、[`igx-button-group-theme`]({environment:sassApiUrl}/index.html#function-igx-button-group-theme) を拡張し、さまざまな状態のボタン グループの項目をスタイルするパラメーターを受け取る新しいテーマを作成する方法です。

```scss
$custom-button-group: igx-button-group-theme(
    $item-text-color: #fdfdfd,
    $item-background: #2f4d6a,
    $item-hover-text-color: #fdfdfd,
    $item-hover-background: #1f3347,
    $item-selected-text-color: #fdfdfd,
    $item-selected-background: #1f3347,
    $item-selected-hover-background: #1f3347,
    $disabled-text-color: gray,
    $disabled-background-color: lightgray
);
```

ご覧のとおり、`igx-button-group-theme` は、項目の基本的なスタイル設定に役立ついくつかのパラメーターを公開しています。ボタン固有のパラメーターを変更する場合は、`igx-button-theme` を拡張する新しいテーマを作成し、それぞれのボタン グループのクラスの下でスコープできます。

### CSS 変数の使用

最後にコンポーネントのテーマを含めます。

```scss
@include igx-css-vars($custom-button-group);
```

### テーマ オーバーライドの使用

Internet Explorer 11 などの古いブラウザーのコンポーネントをスタイル設定するには、CSS 変数をサポートしていないため、別のアプローチを用いる必要があります。 

コンポーネントが [`Emulated`](themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。カスタム テーマが他のコンポーネントに影響しないようにするには、`::ng-deep` の前に `:host` セレクターを含めるようにしてください。

```scss
:host {
    ::ng-deep {
        @include igx-button-group($custom-button-group);
    }
}
```

### デモ


<code-view style="height: 200px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/button-group-style" >
</code-view>


## API リファレンス
<div class="divider--half"></div>

* [IgxButtonGroupComponent]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html)
* [IgxButtonGroup スタイル]({environment:sassApiUrl}/index.html#function-igx-button-group-theme)
* [IgxButtonDirective]({environment:angularApiUrl}/classes/igxbuttondirective.html)
* [IgxButton スタイル]({environment:sassApiUrl}/index.html#function-igx-button-theme)

## Theming Dependencies
* [IgxIcon Theme]({environment:sassApiUrl}/index.html#function-igx-icon-theme)
* [IgxButton Theme]({environment:sassApiUrl}/index.html#function-igx-button-theme)
* [IgxRipple Theme]({environment:sassApiUrl}/index.html#function-igx-ripple-theme)


## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
