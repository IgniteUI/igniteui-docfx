---
title: Tooltip - ネイティブ Angular |Ignite UI for Angular
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
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tooltip-simple-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
<div class="divider--half"></div>

### 設定

Tooltip と Tooltip Target を初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールする必要があります。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](general/getting_started.md)トピックををご覧ください。

次に、app.module.ts ファイルに `IgxTooltipModule` をインポートします。

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

- [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) ディレクティブは [`igxToggleAction`]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html) ディレクティブを拡張します。
- [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) ディレクティブは、名前 **tooltipTarget** でエクスポートされます。

```html
<!--simpleTooltip.component.html-->

<igx-avatar class="avatar" #target="tooltipTarget" igxTooltipTarget
            src="assets/images/avatar/10.jpg" size="medium" [roundShape]="true">
</igx-avatar>
```

#### ツールチップ
ツールチップ要素を作成します。シンプルなテキスト ツールチップを作成するためテキストを含む標準 div 要素を定義し、ツールチップとしてマークされる [`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) ディレクティブを設定します。

- [`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) ディレクティブは [`igxToggle`]({environment:angularApiUrl}/classes/igxtoggledirective.html) ディレクティブを拡張します。
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
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tooltip-rich-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz　で表示</button>
</div>
<div class="divider--half"></div>

### オーバーレイ構成
[`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) および [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) ディレクティブは、[`IgxOverlayService`](overlay_main.md) を使用して各ツールチップ要素を開くか閉じるかします。

[`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) ディレクティブは、[`overlaySettings`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#overlaysettings) プロパティ (inherited from the [`igxToggleAction`]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html)) を公開し、ツールチップ アニメーション、UI 状の配置などのカスタマイズが可能です。プロパティを設定しない場合は、デフォルト オーバーレイ設定が使用されます。

> [!NOTE]
> [`overlaySettings`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#overlaysettings) で設定したプロパティは、デフォルト オーバーレイ設定の同じプロパティをオーバーライドし、ツールチップに直接影響があります。

### スタイル設定

ツールチップのスタイル設定は、すべてのテーマ関数とコンポーネント mixins が存在する `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

最も簡単な方法は、[`igx-tooltip-theme`]({environment:sassApiUrl}/index.html#function-igx-tooltip-theme) を拡張する新しいテーマを作成し、`$text-color`、`$background`、`$border-radius` パラメーターを受け取る方法です。

```scss
$dark-tooltip: igx-tooltip-theme($text-color: #F4D45C, $background: rgb(65,65,65), $border-radius: 10px);
```

> [!NOTE]
> ダイアログ ウィンドウのコンテンツの一部として使用される追加コンポーネント ([`IgxButton`](button.md)、[`IgxSwitch`](switch.md) など) をスタイルするには、それぞれのコンポーネントに固有の追加テーマを作成し、ツールチップのスコープ内のみに配置する必要があります (残りのアプリケーションの影響を受けません)。

ツールチップは [`IgxOverlayService`](overlay_main.md) を使用するため、スタイル設定するツールチップにカスタム テーマが適用されるよう、ダイアログ ウィンドウが表示されたときに DOM に配置される特定のアウトレットを提供します。

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
> [`IgxOverlayService`](overlay_main.md) を使用して表示される要素にテーマを提供するためのさまざまなオプションの詳細については、この[リンク](overlay_main.md#スタイル設定)をご覧ください。

最後にコンポーネントのテーマを**含めます**。

```scss
@include igx-tooltip($dark-tooltip);
```

>[!NOTE]
>コンポーネントが [`Emulated`](themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化に`ペネトレーション`する必要があります。

```scss
:host {
    ::ng-deep {
        @include igx-tooltip($dark-tooltip);
    }
}
```

#### カラーパレットの定義

上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) および [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$yellow-color: #F4D45C;
$black-color: rgb(65,65,65);
$dark-palette: igx-palette($primary: $black-color, $secondary: $yellow-color);
```

また [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取り出すことができます。 

```scss
$dark-tooltip: igx-tooltip-theme(
    $palette: $dark-palette,
    $text-color: igx-color($dark-palette, "secondary", 400),
    $background: igx-color($dark-palette, "primary", 400),
    $border-radius: 10px
);
```

#### スキーマの使用

テーマ エンジンを使用して [**スキーマ**](themes/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

すべてのコンポーネントに提供されている 2 つの定義済みスキーマ (ここでは [`dark-tooltip`]({environment:sassApiUrl}/index.html#variable-_dark-tooltip) の 1 つを拡張します。

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

カスタム スキーマを適用するには、グローバル ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) または [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema) の 1 つを**拡張**する必要があります。これは基本的にカスタム スキーマでコンポーネントを指し示し、その後それぞれのコンポーネント テーマに追加するものです。

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

上記と同じ方法でテーマを含める必要があることに注意してください。

#### デモ

<div class="sample-container loading" style="height:200px">
    <iframe id="tooltip-style-iframe" data-src='{environment:demosBaseUrl}/interactions/tooltip-style' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tooltip-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### ユーザー補助

[`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) ディレクティブを持つ要素には、自動生成された [`id`]({environment:angularApiUrl}/classes/igxtooltipdirective.html#id) プロパティ (開発者によって設定されていない場合)、ツールチップ [`role`]({environment:angularApiUrl}/classes/igxtooltipdirective.html#role)、およびツールチップが表示されているかどうかに応じて自動的に更新される **aria-hidden** 属性があります。ターゲットの **aria-describedby** 属性をそれぞれのツールチップの [`id`]({environment:angularApiUrl}/classes/igxtooltipdirective.html#id) に設定することにより、ツールチップ要素への参照が提供されます。エンドユーザーがツールチップへアクセスしたときにツールチップのコンテンツにアクセスするために必要な情報であるスクリーン リーダーを提供します。

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

* [IgxTooltipDirective スタイル]({environment:sassApiUrl}/index.html#function-igx-tooltip-theme)
* [IgxAvatarComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-avatar-theme)
* [IgxButtonDirective スタイル]({environment:sassApiUrl}/index.html#function-igx-button-theme)
* [IgxCardComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-card-theme)
* [IgxIconComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-icon-theme)
* [IgxSliderComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-slider-theme)
* [IgxSwitchComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-switch-theme)

<div class="divider"></div>

### その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
