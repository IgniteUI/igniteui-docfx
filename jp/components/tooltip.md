---
title: Tooltip - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Tooltip and Tooltip Target ディクティブは、ツールチップを作成する機能と要素へアタッチする機能が含まれます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular ツールチップ ディレクティブ, Angular ツールチップ コントロール, Angular ツールチップ, ツールチップ ターゲット
_language: ja
---

## ツールチップ

[`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) と [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) ディレクティブは、完全なカスタマイズが可能なツールチップをサポートし、ページのあらゆる要素にアタッチできます。
ツールチップは、[`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html)ディレクティブで使用できる場所の数が限られています。ターゲット (アンカー) と関連つけてページで任意の配置を指定でき、スクロールやカスタム アニメーションなどのその他のオーバーレイ設定をサポートします。

### デモ

<div class="sample-container loading" style="height:450px">
    <iframe id="tooltip-simple-iframe" src='{environment:demosBaseUrl}/interactions/tooltip-simple' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tooltip-simple-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### 設定

Ignite UI for Angular ツールチップ、ヒント および ツールチップ、ヒントターゲットを初期化する前に、app.module.ts ファイルに `IgxTooltipModule` をインポートします。

```typescript
// app.module.ts

...
import {
    IgxTooltipModule
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [IgxTooltipModule],
})
export class AppModule {}
```

### シンプルなツールチップ

ページの要素にシンプルなテキスト ツールチップを作成します。`IgxAvatarModule` をインポートして要素として [`IgxAvatar`](avatar.md) を使用します。

```typescript
// app.module.ts

...
import {
    IgxTooltipModule,
    IgxAvatarModule
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [IgxTooltipModule, IgxAvatarModule],
})
export class AppModule {}
```

更に要素にカスタム スタイルを定義します。


```css
/* simpleTooltip.component.css */

.wrapper {
    text-align: center;
    margin: 20px;
}

.avatar {
    display: inline-block;
}

.bottomMargin {
    margin-bottom: 50px;
}
```

#### ツールチップ ターゲット
avatar をターゲットにして、[`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) ディレクティブを設定し、ツールチップを持つ要素としてマークします。

- [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) ディレクティブは [`igxToggleAction`] ディレクティブを拡張します。
- [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) ディレクティブは、名前 **tooltipTarget** でエクスポートされます。

```html
<!--simpleTooltip.component.html-->

<igx-avatar class="avatar" #target="tooltipTarget" igxTooltipTarget
            src="assets/images/avatar/10.jpg" size="medium" [roundShape]="true">
</igx-avatar>
```

#### ツールチップ
ツールチップ要素を作成します。シンプルなテキスト ツールチップを作成するためテキストを含む標準 div 要素を定義し、ツールチップとしてマークされる [`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) ディレクティブを設定します。

- [`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) ディレクティブは [`igxToggle`] ディレクティブを拡張します。
- [`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) ディレクティブは、名前 **tooltip** でエクスポートされます。

```html
<!--simpleTooltip.component.html-->

<div #tooltipRef="tooltip" igxTooltip>
    Her name is Toola Tipa
</div>
```

#### ツールチップをターゲットにアタッチします。
ここまででターゲットとツールチップを定義しました。 ツールチップ参照を [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) セレクターに割り当てます。

```html
<!--simpleTooltip.component.html-->

<igx-avatar class="avatar" #target="tooltipTarget" [igxTooltipTarget]="tooltipRef"
            src="assets/images/avatar/10.jpg" size="medium" [roundShape]="true">
</igx-avatar>

<div #tooltipRef="tooltip" igxTooltip>
    Her name is Toola Tipa
</div>
```

#### 設定の表示/非表示
ツールチップを表示または非表示にするまでの時間を制御する場合は、[`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) ディレクティブの [`showDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#showdelay) と [`hideDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#hidedelay) プロパティを使用します。両プロパティは型 **number** でミリセカンドでタイムスパンを取得できます。

次に [`IgxSlider`](slider.md) 要素をいくつか [`showDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#showdelay) と [`hideDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#hidedelay) に追加します。更にターゲットの [`tooltipDisabled`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#tooltipdisabled) プロパティを使用してツールチップ ターゲットでユーザー インタラクションを有効/無効にする [`IgxSwitch`](switch.md) を使用します。

`IgxSliderModule` と `IgxSwitchModule` を取得します。
```typescript
// app.module.ts

...
import {
    IgxTooltipModule,
    IgxAvatarModule,
    IgxSliderModule,
    IgxSwitchModule
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [IgxTooltipModule, IgxAvatarModule, IgxSliderModule, IgxSwitchModule],
})
export class AppModule {}
```

Slider と Switch コントロールをコンポーネントのテンプレートに定義できます。[`showDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#showdelay) と [`hideDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#hidedelay) プロパティを **ngModels** としてそれぞれ 2 つのスライダーにバインドし、同様に [`tooltipDisabled`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#tooltipdisabled) を Switch コントロールにバインドします。

```html
<!--simpleTooltip.component.html-->

...
<div>
    <div class="bottomMargin">
        <igx-switch [(ngModel)]="target.tooltipDisabled">Disable tooltip</igx-switch>
    </div>
    <div class="bottomMargin">
        <span>Show Delay: {{target.showDelay}} ms</span>
        <igx-slider minValue="0" maxValue="3000" [step]="100" [(ngModel)]="target.showDelay"></igx-slider>                
    </div>
    <div>
        <span>Hide Delay: {{target.hideDelay}} ms</span>
        <igx-slider minValue="0" maxValue="3000" [step]="100" [(ngModel)]="target.hideDelay"></igx-slider>                
    </div>
</div>
```

このトピックのはじめにあるコードの結果は「ツールチップ、ヒント表示デモ」で確認できます。

> [!NOTE]
> ビルトイン UI インタラクションの動作と [`IgxTooltipTargetDirective`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) および [`showDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#showdelay) と [`hideDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#hidedelay) プロパティ値を考慮します。[`IgxTooltipDirective`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) の API によるツールチップを表示および非表示は、[`showDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#showdelay) and [`hideDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#hidedelay) プロパティ値を考慮しません。必要な場合、ロジックはアプリケーションの仕様を手動で実装する必要があります。

### 高機能なツールチップ

コンテンツのカスタマイズやスタイル設定が [`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) ディレクティブで簡単にできます。
ツールチップはマークアップの標準要素であるため、必要な要素を追加してコンテンツを改善や状況に応じたスタイル設定が可能です。

[`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) の使用を拡張し、マップの特定の場所について詳細な情報を提供します。アプリケーションの UI を更にきれいにするために[`IgxCard`](card.md)を使用してマップを表示し、ツールチップのロゴに [`IgxAvatar`](avatar.md)、マップの場所アイコンに[`IgxIcon`](icon.md)、カード動作に[`IgxButton`](button.md) を使用します。これには各モジュールを取得する必要があります。

```typescript
// app.module.ts

...
import {
    IgxTooltipModule,
    IgxCardModule,
    IgxAvatarModule,
    IgxIconModule,
    IgxButtonModule
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [IgxTooltipModule, IgxCardModule, IgxAvatarModule, IgxIconModule, IgxButtonModule],
})
export class AppModule {}
```

アプリケーションには以下のスタイルを使用します。

```css
/* richTooltip.component.css */

.wrapper { 
    margin: 20px;
}

.cursorHover:hover {
    cursor: pointer;
}

.card-wrapper {
    max-width: 200px;
    min-width: 120px;
}

.location {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 252px;
    background-image: url(../../../assets/images/card/media/infragisticsMap.png);
}

.locationTooltip {
    width: 310px;
    background-color: rgba(128, 128, 128, 0.7);
    padding: 3px;
    font-size: 13px;
}

.locationTooltipContent {
    display: flex;
    justify-content: center;
    align-items: center;
}

.locationIcon {
    width: 45px;
    height: 45px;
}
```

カードを作成してコンテンツをマップの背景画像のある要素にすることから始めます。更に場所の位置を示すアイコンを追加します。場所の詳細を提供するためにアイコンがツールチップのターゲットになります。

```html
<!--richTooltip.component.html-->

<igx-card>
    <igx-card-content style="padding: 0px;">
        <div class="location">
            <igx-icon class="cursorHover" color="blue" fontSet="material" igxTooltipTarget>location_on</igx-icon>
        </div>
    </igx-card-content>
</igx-card>
```

次にツールチップを作成します。コンテンツは、テキスト情報要素とアバターで構成されるコンテナを作成します。ツールチップをターゲットにアタッチして CSS スタイルを使用します。

```html
<!--richTooltip.component.html-->

<igx-card>
    <igx-card-content style="padding: 0px;">
        <div class="location">
            <igx-icon class="cursorHover" color="blue" fontSet="material" [igxTooltipTarget]="locationTooltip">location_on</igx-icon>

            <div class="locationTooltip" #locationTooltip="tooltip" igxTooltip>
                <div class="locationTooltipContent">
                    <igx-avatar class="locationIcon" src="../../../assets/images/card/avatars/igLogo.png" size="medium"
                        [roundShape]="false"></igx-avatar>
                    <div>
                        <div>Infragistics Inc. HQ</div>
                        <div>2 Commerce Dr, Cranbury, NJ 08512, USA</div>
                    </div>
                </div>
            </div>
        </div>
    </igx-card-content>
</igx-card>
```

最後にボタンアイコンをカード アクションとして追加します。

```html
<!--richTooltip.component.html-->

<igx-card>
    <igx-card-content style="padding: 0px;">
        ...
    </igx-card-content>
    <igx-card-actions>
        <div class="igx-card-actions__igroup--start">
            <span igxButton="icon">
                <igx-icon fontSet="material">favorite</igx-icon>
            </span>
            <span igxButton="icon">
                <igx-icon fontSet="material">share</igx-icon>
            </span>
        </div>
    </igx-card-actions>
</igx-card>
```

上記をすべて完了すると場所とツールチップは以下のようになります。

<div class="sample-container loading" style="height:400px">
    <iframe id="tooltip-rich-iframe" data-src='{environment:demosBaseUrl}/interactions/tooltip-rich' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tooltip-rich-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### オーバーレイ構成
[`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) および [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) ディレクティブは、[`IgxOverlayService`](overlay_main.md) を使用して各ツールチップ要素を開くか閉じるかします。

[`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) ディレクティブは、[`overlaySettings`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#overlaysettings) プロパティ (inherited from the [`igxToggleAction`]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html)) を公開し、ツールチップ アニメーション、UI 状の配置などのカスタマイズが可能です。プロパティを設定しない場合は、デフォルト オーバーレイ設定が使用されます。

> [!NOTE]
> [`overlaySettings`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#overlaysettings) で設定したプロパティは、デフォルト オーバーレイ設定の同じプロパティをオーバーライドし、ツールチップに直接影響があります。

### Styles

To get started with styling the tooltip, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`igx-tooltip-theme`]({environment:sassApiUrl}/index.html#function-igx-tooltip-theme) and accepts the `$text-color`, `$background` and the `$border-radius` parameters.

```scss
$dark-tooltip: igx-tooltip-theme($text-color: #F4D45C, $background: rgb(65,65,65), $border-radius: 10px);
```

> [!NOTE]
> In order to style any additional components that are used as part of the tooltip's content (such as [`IgxButton`](button.md), [`IgxSwitch`](switch.md), etc.), an additional theme should be created that is specific to the respective component and placed under the tooltip's scope only (so it does not affect the rest of the application).

Since the tooltip uses the [`IgxOverlayService`](overlay_main.md), in order for our custom theme to reach down the tooltip that we want to style, we will provide a specific outlet where the tooltip will be placed in the DOM when it is visible.

```html
<igx-avatar #target="tooltipTarget" [igxTooltipTarget]="tooltipRef"
            [igxToggleOutlet]="outlet">
</igx-avatar>

<div #outlet="overlay-outlet" igxOverlayOutlet>
    <div #tooltipRef="tooltip" igxTooltip>
        Her name is Toola Tipa
    </div>
</div>
```

> [!NOTE]
> In order to learn more about various options for providing themes to elements that are shown by using the [`IgxOverlayService`](overlay_main.md), you can take a look at this [link](overlay_main.md#styling).

The last step is to **include** the component theme in our application.

```scss
@include igx-tooltip($dark-tooltip);
```

>[!NOTE]
>If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

```scss
:host {
    ::ng-deep {
        @include igx-tooltip($dark-tooltip);
    }
}
```

#### Defining a color palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$yellow-color: #F4D45C;
$black-color: rgb(65,65,65);
$dark-palette: igx-palette($primary: $black-color, $secondary: $yellow-color);
```

And then with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette. 

```scss
$dark-tooltip: igx-tooltip-theme(
    $palette: $dark-palette,
    $text-color: igx-color($dark-palette, "secondary", 400),
    $background: igx-color($dark-palette, "primary", 400),
    $border-radius: 10px
);
```

#### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](../themes/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [`dark-tooltip`]({environment:sassApiUrl}/index.html#variable-_dark-tooltip) schema:

```scss
// Extending the dark tooltip schema
$dark-tooltip-schema: extend($_dark-tooltip,
    (
        text-color:(
            igx-color: ("secondary", 400)
        ),
        background: (
            igx-color: ("primary", 400)
        ),
        border-radius: 10px
    )
);
```

In order to apply our custom schemas we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
// Extending the global dark-schema
$custom-dark-schema: extend($dark-schema,(
    igx-tooltip: $dark-tooltip-schema
));

// Defining tooltip-theme with the global dark schema
$dark-tooltip: igx-tooltip-theme(
  $palette: $dark-palette,
  $schema: $custom-dark-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

#### Demo

<div class="sample-container loading" style="height:200px">
    <iframe id="tooltip-style-iframe" data-src='{environment:demosBaseUrl}/interactions/tooltip-style' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tooltip-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### ユーザー補助

[`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) ディレクティブの要素には、ツールチップの表示状態に基づいて自動的に更新、自動生成された [`id`]({environment:angularApiUrl}/classes/igxtooltipdirective.html#id)  プロパティ (開発者が設定しない場合)、ツールチップ [`role`]({environment:angularApiUrl}/classes/igxtooltipdirective.html#role)、**aria-hidden** 属性が含まれます。ターゲットの **aria-describedby** 属性を各ツールチップの[`id`]({environment:angularApiUrl}/classes/igxtooltipdirective.html#id) に設定すると、参照がツールチップ要素に提供されます。エンドユーザーがツールチップへアクセスしたときにツールチップのコンテンツにアクセスするために必要な情報であるスクリーン リーダーを提供します。 

以下の状況では十分な注意が必要です。
- ツールチップのコンテンツは非常に複雑なため自動翻訳できません。
- ツールチップは、ビルトインではなく手動で実装された動作とともに使用されます (手動による表示/非表示など)。
- ターゲット要素はフォーカスできません。

### API リファレンス

このトピックでは、ページ要素にツールチップを作成する方法について説明しました。また、アプリケーションのデザインには icons、avatars、cards などの Ignite UI for Angular コンポーネントも追加で使用しました。以下は、各 API です。

* [IgxTooltipDirective]({environment:angularApiUrl}/classes/igxtooltipdirective.html)
* [IgxTooltipTargetDirective]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html)

使用したその他のコンポーネントとディレクティブ:

* [IgxAvatarComponent]({environment:angularApiUrl}/classes/igxavatarcomponent.html)
* [IgxButtonDirective]({environment:angularApiUrl}/classes/igxbuttondirective.html)
* [IgxCardComponent]({environment:angularApiUrl}/classes/igxcardcomponent.html)
* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxSliderComponent]({environment:angularApiUrl}/classes/igxslidercomponent.html)
* [IgxSwitchComponent]({environment:angularApiUrl}/classes/igxswitchcomponent.html)
* [IgxToggleDirective]({environment:angularApiUrl}/classes/igxtoggledirective.html)
* [IgxToggleActionDirective]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html)

スタイル:

* [IgxTooltipDirective Styles]({environment:sassApiUrl}/index.html#function-igx-tooltip-theme)
* [IgxAvatarComponent Styles]({environment:sassApiUrl}/index.html#function-igx-avatar-theme)
* [IgxButtonDirective Styles]({environment:sassApiUrl}/index.html#function-igx-button-theme)
* [IgxCardComponent Styles]({environment:sassApiUrl}/index.html#function-igx-card-theme)
* [IgxIconComponent Styles]({environment:sassApiUrl}/index.html#function-igx-icon-theme)
* [IgxSliderComponent Styles]({environment:sassApiUrl}/index.html#function-igx-slider-theme)
* [IgxSwitchComponent Styles]({environment:sassApiUrl}/index.html#function-igx-switch-theme)

<div class="divider"></div>

### その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
