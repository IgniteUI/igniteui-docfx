---
title: Tooltip - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Tooltip and Tooltip Target ディクティブは、ツールチップを作成する機能と要素へアタッチする機能が含まれます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular ツールチップ ディレクティブ, Angular ツールチップ コントロール, Angular ツールチップ, ツールチップ ターゲット
_language: ja
---

# Angular Tooltip (ツールチップ) ディレクティブの概要

[`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) と [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) ディレクティブは、完全なカスタマイズが可能なツールチップをサポートし、ページのあらゆる要素にアタッチできます。
ツールチップは、[`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html)ディレクティブで使用できる場所の数が限られています。ターゲット (アンカー) と関連つけてページで任意の配置を指定でき、スクロールやカスタム アニメーションなどのその他のオーバーレイ設定をサポートします。

## Angular Tooltip の例

<code-view style="height:150px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/tooltip-simple" alt="Angular Tooltip の例">
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

### 設定の表示/非表示
ツールチップを表示または非表示にするまでの時間を制御する場合は、[`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) ディレクティブの [`showDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#showDelay) と [`hideDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#hideDelay) プロパティを使用します。両プロパティは型 **number** でミリセカンドでタイムスパンを取得できます。

> [!NOTE]
> ビルトイン UI インタラクションの動作と [`IgxTooltipTargetDirective`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) および [`showDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#showDelay) と [`hideDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#hideDelay) プロパティ値を考慮します。[`IgxTooltipDirective`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) の API によるツールチップを表示および非表示は、[`showDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#showDelay) and [`hideDelay`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#hideDelay) プロパティ値を考慮しません。必要な場合、ロジックはアプリケーションの仕様を手動で実装する必要があります。

## 高機能なツールチップ

コンテンツのカスタマイズやスタイル設定が [`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) ディレクティブで簡単にできます。ツールチップはマークアップの標準要素であるため、必要な要素を追加してコンテンツを改善や状況に応じたスタイル設定が可能です。

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

マップを作成しましょう。マップの背景画像がある単純な div を使用します。更に場所の位置を示すアイコンを追加します。場所の詳細を提供するためにアイコンがツールチップのターゲットになります。

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
           iframe-src="{environment:demosBaseUrl}/interactions/tooltip-rich" >
</code-view>

<div class="divider--half"></div>

## オーバーレイ構成

[`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) および [`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) ディレクティブは、[`IgxOverlayService`](overlay.md) を使用して各ツールチップ要素を開くか閉じるかします。

[`igxTooltipTarget`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html) ディレクティブは、[`overlaySettings`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#overlaySettings) プロパティ ([`igxToggleAction`]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html) から継承します。) を公開し、ツールチップ アニメーション、UI 状の配置などのカスタマイズが可能です。プロパティを設定しない場合は、デフォルト オーバーレイ設定が使用されます。

> [!NOTE]
> [`overlaySettings`]({environment:angularApiUrl}/classes/igxtooltiptargetdirective.html#overlaySettings) で設定したプロパティは、デフォルト オーバーレイ設定の同じプロパティをオーバーライドし、ツールチップに直接影響があります。

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
           iframe-src="{environment:demosBaseUrl}/interactions/tooltip-style" >
</code-view>

<div class="divider--half"></div>

## ユーザー補助

[`igxTooltip`]({environment:angularApiUrl}/classes/igxtooltipdirective.html) ディレクティブを持つ要素には、自動生成された [`id`]({environment:angularApiUrl}/classes/igxtooltipdirective.html#id) プロパティ (開発者によって設定されていない場合)、ツールチップ [`role`]({environment:angularApiUrl}/classes/igxtooltipdirective.html#role)、およびツールチップが表示されているかどうかに応じて自動的に更新される **aria-hidden** 属性があります。ターゲットの **aria-describedby** 属性をそれぞれのツールチップの [`id`]({environment:angularApiUrl}/classes/igxtooltipdirective.html#id) に設定することにより、ツールチップ要素への参照が提供されます。エンドユーザーがツールチップへアクセスしたときにツールチップのコンテンツにアクセスするために必要な情報であるスクリーン リーダーを提供します。

以下の状況では十分な注意が必要です。

- ツールチップのコンテンツは非常に複雑なため自動翻訳できません。
- ツールチップは、ビルトインではなく手動で実装された動作とともに使用されます (手動による表示/非表示など)。
- ターゲット要素はフォーカスできません。

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
