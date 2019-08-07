---
title: Button Group コンポーネント
_description: ボタン グループの機能、さらに水平/垂直の配置、単一/複数の選択、および切り替え機能を提供します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ,  Angular ボタン グループ コンポーネント, Angular Button Group コントロール, Angular Button コンポーネント, Angular Button コントロール
_language: ja
---

## Button Group
Ignite UI for Angular [**igx-buttongroup**]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html) コンポーネントは、ボタン グループの機能、さらに水平/垂直の配置、単一/複数の選択、および切り替え機能を提供します。igx-ButtonGroup コンポーネントは、[igxButton ディレクティブ](button.md)を使用します。

### Button Group デモ
<div class="sample-container loading" style="height: 450px">
    <iframe id="buttonGroup-sample-1-iframe" seamless="" width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/data-entries/button-group-sample-1" onload="onSampleIframeContentLoaded(this);">
</iframe></div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttonGroup-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 依存関係
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
### 使用方法
[`igx-buttongroup`]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html) を使用して、ボタンを Angular スタイルのボタン グループに配置します。

#### 整列
[`alignment`]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html#alignment) 入力を使用して、ボタン グループ内のボタンの方向を設定します。

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

```scss
// sample.component.scss

igx-buttongroup{
    display: inline-block;
    width: 200px;
}
```
<div class="sample-container loading" style="height: 164px">
    <iframe id="buttonGroup-sample-2-iframe" seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/button-group-sample-2" class="lazyload">
</iframe></div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttonGroup-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

#### 複数選択
ボタン グループの複数選択を有効にするには、[`multiSelection`]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html#multiselection) 入力を使用します。


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
<div class="sample-container loading" style="height: 60px">
    <iframe id="buttonGroup-sample-4-iframe" seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/button-group-sample-4" class="lazyload">
</iframe></div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttonGroup-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>

#### 表示密度
[`displayDensity`]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html#displaydensity) 入力を使用して、ボタン グループの表示密度を設定します。これにより、グループ内のボタンのスタイルが、cosy、compact、または comfortable (デフォルト値) に設定されます。

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

<article class="sample-column">
    <igx-buttongroup [multiSelection]="false" [values]="displayDensities" (onSelect)="selectDensity($event)"
        [displayDensity]="displayDensity">
    </igx-buttongroup>
</article>
```
<div class="sample-container loading" style="height: 60px">
    <iframe id="buttonGroup-sample-5-iframe" seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/button-group-sample-5" class="lazyload">
</iframe></div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttonGroup-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>

#### カスタム トグル ボタン
[`values`]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html#values) 入力を使用して、ボタン グループ内のカスタマイズされたボタンの配列を設定します。

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

<igx-buttongroup [multiSelection]="true" [values]="borders"></igx-buttongroup>
```

<div class="sample-container loading" style="height: 60px">
    <iframe id="buttonGroup-sample-3-iframe" seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/button-group-sample-3" class="lazyload">
</iframe></div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttonGroup-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>

@@if (false) { <!-- remove after translation -->
### Styling

To get started with styling the button group, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`igx-button-group-theme`]({environment:sassApiUrl}/index.html#function-igx-button-group-theme) and accepts some parameters that style the button group's items in their different states.

```scss
$dark-button-group: igx-button-group-theme(
    $item-text-color: #FFCD0F,
    $item-background: #292826,
    $item-hover-text-color: #292826,
    $item-hover-background: #FFCD0F,
    $item-selected-text-color: #292826,
    $item-selected-background: #FFCD0F,
    $disabled-text-color: gray,
    $disabled-background-color: lightgray
);
```

As seen, the `igx-button-group-theme` exposes some useful parameters for basic styling of its items. Additionally, if we want to drill deeper and change some button specific parameters, we will have to create a new theme that extends the `igx-button-theme` and scope it under the respective button group's class.

The last step is to **include** the component's theme.

```scss
@include igx-button-group($dark-button-group);
```

>[!NOTE]
>If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

```scss
:host {
     ::ng-deep {
        @include igx-button-group($dark-button-group);
    }
}
```

#### Defining a color palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$yellow-color: #FFCD0F;
$black-color: #292826;

$dark-palette: igx-palette($primary: $black-color, $secondary: $yellow-color);
```

And then with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette. 

```scss
$dark-button-group: igx-button-group-theme(
    $palette: $dark-palette,
    $item-text-color: igx-color($dark-palette, "secondary", 500),
    $item-background: igx-color($dark-palette, "primary", 500),
    $item-hover-text-color: igx-color($dark-palette, "primary", 500),
    $item-hover-background: igx-color($dark-palette, "secondary", 500),
    $item-selected-text-color: igx-color($dark-palette, "primary", 500),
    $item-selected-background: igx-color($dark-palette, "secondary", 500),
    $disabled-text-color: gray,
    $disabled-background-color: lightgray
);
```

>[!NOTE]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [`Palettes`](../themes/palette.md) topic for detailed guidance on how to use them.

#### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](../themes/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - the [`dark-button-group`]({environment:sassApiUrl}/index.html#variable-_dark-button-group) schema:

```scss
// Extending the dark button group schema
$dark-button-group-schema: extend($_dark-button-group,
    (
        item-text-color:(
            igx-color:("secondary", 500)
        ),
        item-background:(
            igx-color:("primary", 500)
        ),
        item-hover-text-color:(
            igx-color:("primary", 500)
        ),
        item-hover-background:(
            igx-color:("secondary", 500)
        ),
        item-selected-text-color:(
            igx-color:("primary", 500)
        ),
        item-selected-background:(
            igx-color:("secondary", 500)
        ),
        disabled-text-color: gray,
        disabled-background-color: lightgray
    )
);
```

In order to apply our custom schemas we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
// Extending the global dark-schema
$custom-dark-schema: extend($dark-schema,(
    igx-button-group: $dark-button-group-schema
));

// Defining dark-button-group-theme with the global dark schema
$dark-button-group: igx-button-group-theme(
  $palette: $dark-palette,
  $schema: $custom-dark-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

#### Demo

<div class="sample-container loading" style="height: 300px">
    <iframe id="buttonGroup-style-iframe" seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/button-group-style" class="lazyload no-theming">
</iframe></div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttonGroup-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
} <!-- remove after translation -->

### API リファレンス
<div class="divider--half"></div>

* [IgxButtonDirective]({environment:angularApiUrl}/classes/igxbuttondirective.html)
* [IgxButtonGroupComponent]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html)
* [IgxButtonGroup Styles]({environment:sassApiUrl}/index.html#function-igx-button-group-theme)

### その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)

