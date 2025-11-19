---
title: Tooltip - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Tooltip and Tooltip Target ディクティブは、ツールチップを作成する機能と要素へアタッチする機能が含まれます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular ツールチップ ディレクティブ, Angular ツールチップ コントロール, Angular ツールチップ, ツールチップ ターゲット
_license: MIT
_language: ja
---

# Angular Tooltip (ツールチップ) ディレクティブの概要

[`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) と [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) ディレクティブは、完全なカスタマイズが可能なツールチップをサポートし、ページのあらゆる要素にアタッチできます。
ツールチップは、[`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html)ディレクティブで使用できる場所の数が限られています。ターゲット (アンカー) と関連つけてページで任意の配置を指定でき、スクロールやカスタム アニメーションなどのその他のオーバーレイ設定をサポートします。

## Angular Tooltip の例

<code-view style="height:150px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/tooltip-simple/" alt="Angular Tooltip の例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Tooltip を使用した作業の開始

Ignite UI for Angular Tooltip ディレクティブを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxTooltipModule` をインポートします。

```typescript
// app.module.ts

...
import { IgxTooltipModule } from 'igniteui-angular';
// import { IgxTooltipModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [IgxTooltipModule],
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxTooltipDirective` をスタンドアロンの依存関係としてインポートすることも、[`IGX_TOOLTIP_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/directives/tooltip/public_api.ts) トークンを使用してコンポーネントとそのすべてのサポート コンポーネントおよびディレクティブをインポートすることもできます。

```typescript
// home.component.ts

import { IGX_TOOLTIP_DIRECTIVES, IgxAvatarComponent } from 'igniteui-angular';
// import { IGX_TOOLTIP_DIRECTIVES, IgxAvatarComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
  selector: 'app-home',
  template: `
    <igx-avatar
      class="avatar"
      #target="tooltipTarget"
      [igxTooltipTarget]="tooltipRef"
      src="assets/images/avatar/10.jpg"
      size="medium"
      shape="circle"
    >
    </igx-avatar>

    <div #tooltipRef="tooltip" igxTooltip>Her name is Madelyn James</div>
  `,
  styleUrls: ['home.component.scss'],
  standalone: true,
  imports: [IGX_TOOLTIP_DIRECTIVES, IgxAvatarComponent],
  /* or imports: [IgxTooltipDirective, IgxTooltipTargetDirective, IgxAvatarComponent] */
})
export class HomeComponent {}
```

Ignite UI for Angular Tooltip モジュールまたはディレクティブをインポートしたので、`igxTooltip` ディレクティブの使用を開始できます。

## Angular Tooltip の使用

上記のようにシンプルなテキスト ツールチップを作成します。`IgxAvatarModule` をインポートして要素として [`IgxAvatar`](avatar.md) を使用します。

```typescript
// app.module.ts

import { IgxTooltipModule, IgxAvatarModule } from 'igniteui-angular';
// import { IgxTooltipModule, IgxAvatarModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [IgxTooltipModule, IgxAvatarModule],
})
export class AppModule {}
```

### ツールチップ ターゲット

avatar をターゲットにして、[`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) ディレクティブを設定し、ツールチップを持つ要素としてマークします。

- [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) ディレクティブは [`igxToggleAction`]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html) ディレクティブを拡張します。
- [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) ディレクティブは、名前 **tooltipTarget** でエクスポートされます。

```html
<!--simpleTooltip.component.html-->

<igx-avatar
  class="avatar"
  #target="tooltipTarget"
  igxTooltipTarget
  src="assets/images/avatar/10.jpg"
  size="medium"
  shape="circle">
</igx-avatar>
```

### ツールチップ

ツールチップ要素を作成します。シンプルなテキスト ツールチップを作成するためテキストを含む標準 div 要素を定義し、ツールチップとしてマークされる [`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) ディレクティブを設定します。

- [`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) ディレクティブは [`igxToggle`]({environment:angularApiUrl}/classes/igxtoggledirective.html) ディレクティブを拡張します。
- [`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) ディレクティブは、名前 **tooltip** でエクスポートされます。

```html
<!--simpleTooltip.component.html-->

<div #tooltipRef="tooltip" igxTooltip>Her name is Madelyn James</div>
```

### ツールチップをターゲットにアタッチ

ここまででターゲットとツールチップを定義しました。ツールチップ参照を [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) セレクターに割り当てます。

```html
<!--simpleTooltip.component.html-->

<igx-avatar
  class="avatar"
  #target="tooltipTarget"
  [igxTooltipTarget]="tooltipRef"
  src="assets/images/avatar/10.jpg"
  size="medium"
  shape="circle">
</igx-avatar>

<div #tooltipRef="tooltip" igxTooltip>Her name is Madelyn James</div>
```

すべて適切に設定できると、[Tooltip デモ](#angular-tooltip-の例) セクションで示されるデモサンプルを確認することができます。

### 高機能なツールチップ

ツールチップのコンテンツは単なるテキスト以上のものになります。ツールチップはマークアップ内の通常の要素であるため、必要な要素を追加し、それに応じてスタイルを設定することで、そのコンテンツを強化できます。

[`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) を活用し、マップの特定の場所について詳細な情報を提供します。単純な div を使用してマップを表示し、ツールチップのロゴに [`IgxAvatar`](avatar.md)、マップの場所アイコンに [`IgxIcon`](icon.md) を使用します。この目的のためには、各モジュールを取得する必要があります。  

```typescript
// app.module.ts

import { IgxTooltipModule, IgxAvatarModule, IgxIconModule } from 'igniteui-angular';
// import { IgxTooltipModule, IgxAvatarModule, IgxIconModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [IgxTooltipModule, IgxAvatarModule, IgxIconModule],
})
export class AppModule {}
```

アプリケーションには以下のスタイルを使用します。

```css
/* richTooltip.component.css */

.location:hover {
  cursor: pointer;
}

.map {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 252px;
  background-image: url(assets/images/card/media/infragisticsMap.png);
  border: 1px solid #d4d4d4;
}

.locationTooltip {
  width: 310px;
  background-color: var(--igx-grays-700);
  padding: 3px;
  font-size: 13px;
}

.locationTooltipContent {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  margin-right: 10px;
  min-width: 25px;
  width: 45px;
  height: 45px;
}
```

マップを作成しましょう。マップの背景画像がある単純な div を使用します。更に場所の配置を示すアイコンを追加します。場所の詳細を提供するためにアイコンがツールチップのターゲットになります。

```html
<!--richTooltip.component.html-->

<div class="map">
  <igx-icon
    class="location"
    [style.color]="'blue'"
    fontSet="material"
    [igxTooltipTarget]="locationTooltip"
    >location_on</igx-icon>
  ...
</div>
```

次にツールチップを作成します。コンテンツは、テキスト情報要素とアバターで構成されるコンテナーを作成します。ツールチップをターゲットにアタッチして CSS スタイルを使用します。

```html
<!--richTooltip.component.html-->

<div class="wrapper">
  <div class="map">
    <igx-icon
      class="location"
      [style.color]="'blue'"
      fontSet="material"
      [igxTooltipTarget]="locationTooltip"
      >location_on</igx-icon>

    <div class="locationTooltip" #locationTooltip="tooltip" igxTooltip>
      <div class="locationTooltipContent">
        <igx-avatar
          class="logo"
          src="assets/images/card/avatars/igLogo.png"
          size="medium"
          shape="square">
        </igx-avatar>
        <div>
          <div>Infragistics Inc. HQ</div>
          <div>2 Commerce Dr, Cranbury, NJ 08512, USA</div>
        </div>
      </div>
    </div>
  </div>
</div>
```

上記をすべて完了すると場所とツールチップは以下のようになります。

<code-view style="height:300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/tooltip-rich/" >
</code-view>

<div class="divider--half"></div>

### 高度な例

ツールチップは他のコンポーネントとシームレスに統合され、内部にコンポーネントを含む高度なツールチップを作成できます。次の例では、[`IgxList`]({environment:angularApiUrl}/classes/igxlistcomponent.html)、[`IgxAvatar`]({environment:angularApiUrl}/classes/igxavatarcomponent.html)、[`IgxIcon`]({environment:angularApiUrl}/classes/igxiconcomponent.html)、[`IgxBadge`]({environment:angularApiUrl}/classes/igxbadgecomponent.html)、[`IgxButton`]({environment:angularApiUrl}/classes/igxbuttondirective.html)、[`IgxCard`]({environment:angularApiUrl}/classes/igxcardcomponent.html) および [`IgxCategoryChart`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) コンポーネントを使用して説明的なツールチップを作成する方法を示しています。

<code-view style="height:640px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/tooltip-advanced/" >
</code-view>

<div class="divider--half"></div>

### 遅延の表示/非表示の設定

ツールチップを表示または非表示にするまでの時間を制御する場合は、[`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) ディレクティブの [`showDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#showDelay) と [`hideDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#hideDelay) プロパティを使用します。両プロパティは型 **number** でミリセカンドでタイムスパンを取得できます。

> [!NOTE]
> [`IgxTooltipTargetDirective`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) の組み込み UI インタラクションは、[`showDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#showDelay) および [`hideDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#hideDelay) プロパティの値を考慮して動作します。一方で、API からツールチップを表示または非表示にする場合や [`IgxTooltipDirective`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) の API を使用する場合、[`showDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#showDelay) や [`hideDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#hideDelay) は考慮されません。必要な場合、ロジックはアプリケーションの仕様を手動で実装する必要があります。

### オーバーレイ構成

[`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) と [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) の両ディレクティブは、内部的に [`IgxOverlayService`](overlay.md) を使用してツールチップ要素を開閉します。

[`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) ディレクティブは [`positionSettings`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#positionSettings) プロパティを公開しており、ツールチップのアニメーション、UI 上での配置などをカスタマイズできます。未設定の場合はデフォルトの配置設定が適用されます。

さらに詳細なカスタマイズには、[`igxToggleAction`]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html) から継承された [`overlaySettings`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#overlaysettings) プロパティを使用します。

```html
<igx-icon [igxTooltipTarget]="tooltipRef" [positionSettings]="positionSettings" [overlaySettings]="overlaySettings">
  info
</igx-icon>

<div #tooltipRef="tooltip" igxTooltip>Her name is Madelyn James</div>
```
```ts
public positionSettings: PositionSettings = {
  horizontalDirection: HorizontalAlignment.Left,
  horizontalStartPoint: HorizontalAlignment.Left,
  verticalDirection: VerticalAlignment.Top,
  verticalStartPoint: VerticalAlignment.Bottom,
  openAnimation: useAnimation(slideInTop, { params: { duration: '2000ms' } }),
  closeAnimation: useAnimation(slideOutBottom, { params: { duration: '2000ms'} }),
  offset: 10
}

public overlaySettings: OverlaySettings = {
  closeOnEscape: false,
};
```

> [!NOTE]
> [`positionSettings`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#positionsettings) または [`overlaySettings`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#overlaysettings) で設定したプロパティは、デフォルト設定の同じプロパティをオーバーライドし、ツールチップの動作に直接影響します。

### 追加のプロパティ

これまでに説明したプロパティの他に、[`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) ではツールチップの動作や外観をさらに構成できるさまざまな追加プロパティが用意されています。

[`sticky`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#sticky) プロパティを有効にするとツールチップが「固定」され、閉じるボタンが表示されます。ユーザーが閉じるボタンをクリックするか `Esc` キーを押すまでツールチップは表示されたままになります。この動作はデフォルトのホバー挙動をオーバーライドし、ターゲット要素からカーソルを外してもツールチップが消えなくなります。

```html
<igx-icon [igxTooltipTarget]="tooltipRef" [sticky]="true">
  info
</igx-icon>

<div #tooltipRef="tooltip" igxTooltip>Her name is Madelyn James</div>
```

デフォルトの閉じるボタンをカスタマイズするには、[`closeButtonTemplate`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#closebuttontemplate) プロパティを使用します。

```html

<igx-icon [igxTooltipTarget]="tooltipRef" [sticky]="true" [closeButtonTemplate]="customTemplate">
  info
</igx-icon>

<ng-template #customTemplate>
  <igx-icon>cancel</igx-icon>
</ng-template>

<div #tooltipRef="tooltip" igxTooltip>Her name is Madelyn James</div>
```

> [!NOTE]
> `closeButtonTemplate` で追加したカスタム コンテンツは、sticky モードのときのみレンダリングされます。

[`hasArrow`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#hasarrow) プロパティを使用すると、ツールチップに矢印を追加できます。

```html
<igx-icon [igxTooltipTarget]="tooltipRef" [hasArrow]="true">
  info
</igx-icon>

<div #tooltipRef="tooltip" igxTooltip>Her name is Madelyn James</div>
```

矢印要素は、指定された配置設定に基づいて配置されます。方向や開始点が[定義済みの配置値](#定義済みの配置値)に一致しない場合、矢印はツールチップの上部中央側に配置されます (デフォルトのツールチップの配置は `bottom`)。

#### 定義済みの配置値

| 配置     | 水平方向          | 水平開始点         | 垂直方向            | 垂直開始点           |
|--------------|-------------------------------|--------------------------------|-------------------------------|--------------------------------|
| top          | HorizontalAlignment.Center    | HorizontalAlignment.Center     | VerticalAlignment.Top         | VerticalAlignment.Top          |
| top-start    | HorizontalAlignment.Right     | HorizontalAlignment.Left       | VerticalAlignment.Top         | VerticalAlignment.Top          |
| top-end      | HorizontalAlignment.Left      | HorizontalAlignment.Right      | VerticalAlignment.Top         | VerticalAlignment.Top          |
| bottom       | HorizontalAlignment.Center    | HorizontalAlignment.Center     | VerticalAlignment.Bottom      | VerticalAlignment.Bottom       |
| bottom-start | HorizontalAlignment.Right     | HorizontalAlignment.Left       | VerticalAlignment.Bottom      | VerticalAlignment.Bottom       |
| bottom-end   | HorizontalAlignment.Left      | HorizontalAlignment.Right      | VerticalAlignment.Bottom      | VerticalAlignment.Bottom       |
| right        | HorizontalAlignment.Right     | HorizontalAlignment.Right      | VerticalAlignment.Middle      | VerticalAlignment.Middle       |
| right-start  | HorizontalAlignment.Right     | HorizontalAlignment.Right      | VerticalAlignment.Bottom      | VerticalAlignment.Top          |
| right-end    | HorizontalAlignment.Right     | HorizontalAlignment.Right      | VerticalAlignment.Top         | VerticalAlignment.Bottom       |
| left         | HorizontalAlignment.Left      | HorizontalAlignment.Left       | VerticalAlignment.Middle      | VerticalAlignment.Middle       |
| left-start   | HorizontalAlignment.Left      | HorizontalAlignment.Left       | VerticalAlignment.Bottom      | VerticalAlignment.Top          |
| left-end     | HorizontalAlignment.Left      | HorizontalAlignment.Left       | VerticalAlignment.Top         | VerticalAlignment.Bottom       |


次の例では、すべての配置オプションと矢印の配置動作の実際のデモを見ることができます。

<code-view style="height:220px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/tooltip-placement/" >
</code-view>

<div class="divider--half"></div>

#### 矢印の配置をカスタマイズする

矢印の配置をカスタマイズするには、`positionArrow(arrow: HTMLElement, arrowFit: ArrowFit)` メソッドをオーバーライドできます。

例:

```ts
export class CustomStrategy extends TooltipPositioningStrategy {
  constructor(settings?: PositionSettings) {
    super(settings);
  }

  public override positionArrow(arrow: HTMLElement, arrowFit: ArrowFit): void {
    Object.assign(arrow.style, {
      left: '-0.25rem',
      transform: 'rotate(-45deg)',
      [arrowFit.direction]: '-0.25rem',
    });
  }
}

public overlaySettings: OverlaySettings = {
  positionStrategy: new CustomStrategy({
    horizontalDirection: HorizontalAlignment.Right,
    horizontalStartPoint: HorizontalAlignment.Right,
    verticalDirection: VerticalAlignment.Bottom,
    verticalStartPoint: VerticalAlignment.Bottom,
  })
};
```

```html
<igx-icon [igxTooltipTarget]="tooltipRef" [hasArrow]="true" [overlaySettings]="overlaySettings">
  info
</igx-icon>

<div #tooltipRef="tooltip" igxTooltip>Her name is Madelyn James</div>
```

## スタイル設定

ツールチップのスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最もシンプルな方法として、[`tooltip-theme`]({environment:sassApiUrl}/themes#function-tooltip-theme) を拡張する新しいテーマを作成し、`$text-color`、`$background`、`$border-radius` パラメーターを指定します。

```scss
$dark-tooltip: tooltip-theme(
  $text-color: #ecaa53,
  $background: #011627,
  $border-radius: 6px,
);
```

> [!NOTE]
> ダイアログ ウィンドウのコンテンツの一部として使用される追加コンポーネント ([`IgxButton`](button.md)、[`IgxSwitch`](switch.md) など) をスタイルするには、それぞれのコンポーネントに固有の追加テーマを作成し、ツールチップのスコープ内のみに配置する必要があります (残りのアプリケーションの影響を受けません)。

ツールチップは [`IgxOverlayService`](overlay.md) を使用するため、スタイル設定するツールチップにカスタム テーマが適用されるよう、ダイアログ ウィンドウが表示されたときに DOM に配置される特定のアウトレットを提供します。

```html
<igx-avatar
  #target="tooltipTarget"
  [igxTooltipTarget]="tooltipRef"
  [igxToggleOutlet]="outlet"
>
</igx-avatar>

<div #outlet="overlay-outlet" igxOverlayOutlet>
  <div #tooltipRef="tooltip" igxTooltip>Her name is Madelyn James</div>
</div>
```

最後にコンポーネントのテーマをアプリケーションに**含めます**。

```scss
@include css-vars($dark-tooltip);
```

スタイル設定されたツールチップは以下のようになります。

### デモ

<code-view style="height:200px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/tooltip-style/" >
</code-view>

### Tailwind によるスタイル設定

カスタム Tailwind ユーティリティ クラスを使用して tooltip をスタイル設定できます。まず [Tailwind を設定して](themes/misc/tailwind-classes.md)ください。

グローバル スタイルシートに Tailwind をインポートした上で、以下のように必要なテーマ ユーティリティを適用します:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

ユーティリティ ファイルには、`light` テーマと `dark` テーマの両方のバリエーションが含まれています。
- `light-*` クラスはライト テーマ用です。
- `dark-*` クラスはダーク テーマ用です。
- プレフィックスの後にコンポーネント名を追加します (例: `light-tooltip`、`dark-tooltip`)。

これらのクラスを適用すると、動的なテーマの計算が可能になります。 `任意のプロパティ`を使用して、生成された CSS 変数をオーバーライドできます。 コロンの後に、有効な CSS カラー形式 (HEX、CSS 変数、RGB など) を指定します。

プロパティの完全なリストは、[IgxTooltip テーマ]({environment:sassApiUrl}/themes#function-tooltip-theme) で確認できます。構文は次のとおりです:

```html
<div
  class="!light-tooltip ![--background:#90B69F]"
  #tooltipRef="tooltip"
  igxTooltip>
  Her name is Madelyn James
</div>
```

>[!NOTE]
>ユーティリティ クラスが優先されるようにするには、感嘆符 (`!`) が必要です。Tailwind はスタイルをレイヤーに適用しますが、これらのスタイルを重要としてマークしないと、コンポーネントのデフォルトのテーマによってオーバーライドしてしまいます。

最終的に、tooltip は次のようになります:

<div class="sample-container loading" style="height:100px">
    <iframe id="tooltip-tailwind-styling-iframe" data-src='{environment:demosBaseUrl}/interactions/tooltip-tailwind-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

<div class="divider--half"></div>

## ユーザー補助

[`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) はアクセシビリティを考慮して構築されており、以下のプロパティや ARIA 属性が含まれています。

- [`id`]({environment:angularApiUrl}/classes/igxtooltipdirective.html#id) プロパティ - 開発者が設定しない場合、自動生成されます。
- [`role`]({environment:angularApiUrl}/classes/igxtooltipdirective.html#role) - ツールチップがデフォルトの動作になっている場合、`role="tooltip"` が適用されます。[`sticky`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#sticky) プロパティが有効な場合、ロールは `status` に変更されます。
- `aria-hidden` - ツールチップが表示されているかどうかに応じて自動的に更新されます。

ターゲットの **aria-describedby** 属性をそれぞれのツールチップの [`id`]({environment:angularApiUrl}/classes/igxtooltipdirective.html#id) に設定することにより、ツールチップ要素への参照が提供されます。エンドユーザーがツールチップへアクセスしたときにツールチップのコンテンツにアクセスするために必要な情報であるスクリーン リーダーを提供します。

以下の状況では十分な注意が必要です。

- ツールチップのコンテンツは非常に複雑なため自動翻訳できません。
- ツールチップは、ビルトインではなく手動で実装された動作とともに使用されます (手動による表示/非表示など)。
- ターゲット要素はフォーカスできません。

## 注意と制限

| 制限                          | 説明|
| ----------------------------------- | ---------- |
| カスタム配置ストラテジと矢印 | [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) ディレクティブは `TooltipPositionStrategy` を使用してツールチップと矢印を配置します。カスタムの [`positionStrategy`]({environment:angularApiUrl}/interfaces/overlaysettings.html#positioningStrategy) を使用する場合、かつ [`hasArrow`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#hasarrow) を `true` に設定する場合、そのカスタム ストラテジは `TooltipPositionStrategy` を継承している必要があります。そうでない場合、矢印は表示されません。|

## API リファレンス

このトピックでは、ページ要素にツールチップを作成する方法について学習しました。アプリケーションのデザインを改善するために、アイコンやアバターなどその他の Ignite UI for Angular コンポーネントも使用しました。各 API は以下の通りです。

* [IgxTooltipDirective]({environment:angularApiUrl}/classes/igxtooltipdirective.html)
* [IgxTooltipTargetDirective]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html)

使用したその他のコンポーネントとディレクティブ:

* [IgxAvatarComponent]({environment:angularApiUrl}/classes/igxavatarcomponent.html)
* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxToggleDirective]({environment:angularApiUrl}/classes/igxtoggledirective.html)
* [IgxToggleActionDirective]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html)

スタイル:

* [IgxTooltipDirective スタイル]({environment:sassApiUrl}/themes#function-tooltip-theme)
* [IgxAvatarComponent スタイル]({environment:sassApiUrl}/themes#function-avatar-theme)
* [IgxIconComponent スタイル]({environment:sassApiUrl}/themes#function-icon-theme)

<div class="divider"></div>

## その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
