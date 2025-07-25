---
title: Angular Expansion Panel – Ignite UI for Angular
_description: Angular 展開パネルは、縮小と展開の 2 つの状態を持つ、簡単に設定できる拡張可能なコンポーネントを提供します。今すぐお試しください。
_keywords: angular expansion panel, angular expansion panel コンポーネント, angular UI コンポーネント, igniteui for angular, インフラジスティックス
_language: ja
---
# Angular Expansion Panel (展開パネル) コンポーネントの概要

Ignite UI for Angular は、最も便利で使いやすいレイアウト コンポーネントの 1 つである Angular Expansion Panel を提供します。この機能豊富なコンポーネントは、展開/縮小可能な詳細な概要ビューを作成するために使用されます。コンテンツには、Angular Expansion Panel のアニメーション、テキスト、アイコン、ヘッダー、操作バー、およびその他の要素を含めることができます。
<p class="highlight">

Ignite UI Expansion Panel [igx-expansion-panel]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html) は、軽量な Angular アコーディオン コンポーネントで、縮小または展開のどちらかの状態でレンダリングできます。Angular の Expansion Panel は、マウス クリックまたはキーボード操作によって切り替えることができます。複数の Angular 展開パネルを組み合わせて Angular アコーディオンにすることもできます。
</p>

## Angular Expansion Panel の例

Ignite UI Angular を使用して、この単純な Angular Expansion Panel の例を作成しました。以下にサンプルの動作を確認できます。

<code-view style="height: 320px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/expansion-sample-1" >
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Expansion Panel を使用した作業の開始

Ignite UI for Angular Expansion Panel コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxExpansionPanelModule` をインポートします。

```typescript
// app.module.ts
...
import { IgxExpansionPanelModule } from 'igniteui-angular';
// import { IgxExpansionPanelModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxExpansionPanelModule],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxExpansionPanelComponent` をスタンドアロンの依存関係としてインポートすることも、[`IGX_EXPANSION_PANEL_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/expansion-panel/public_api.ts) トークンを使用してコンポーネントとそのすべてのサポート コンポーネントおよびディレクティブをインポートすることもできます。

```typescript
// home.component.ts

import { IGX_EXPANSION_PANEL_DIRECTIVES } from 'igniteui-angular';
// import { IGX_EXPANSION_PANEL_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-expansion-panel>
        <igx-expansion-panel-header>
            <igx-expansion-panel-title>
            Golden Retriever
            </igx-expansion-panel-title>
            <igx-expansion-panel-description>
            Medium-large gun dog
            </igx-expansion-panel-description>
        </igx-expansion-panel-header>
        <igx-expansion-panel-body>
            The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, 
            such as ducks and upland game birds, during hunting and shooting parties. 
            The name "retriever" refers to the breed's ability to retrieve shot game undamaged due to their soft mouth. 
            Golden retrievers have an instinctive love of water, and are easy to train to basic or advanced obedience standards.
        </igx-expansion-panel-body>
    </igx-expansion-panel>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_EXPANSION_PANEL_DIRECTIVES]
    /* or imports: [IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelBodyComponent] */
})
export class HomeComponent {}
```

Ignite UI for Angular Expansion Panel モジュールまたはディレクティブをインポートしたので、`igx-expansion-panel` コンポーネントの使用を開始できます。

## Angular Expansion Panel の使用

以下の表は、Angular Expansion Panel で使用可能なすべてのマークアップ要素を示します。

| タグ名                          | 説明                                                                                                          |
| :-------------------------------: | :--------------------------------------------------------------------------------------------------------------------: |
| `igx-expansion-panel`             | コンポーネント ホスト - ヘッダーとボディを格納します。                                                                           |
| `igx-expansion-panel-header`      | コンポーネント ヘッダーを格納します。常に表示されます。タイトル、説明、およびその他の追加のコンテンツを保存します。     |
| `igx-expansion-panel-title`       | 展開パネルのタイトルを設定します。                                                                                   |
| `igx-expansion-panel-description` | 短い概要を提供するために使用できます。説明は常にタイトルの後に表示されます (タイトルを設定した場合)。   |
| `igx-expansion-panel-icon`        | デフォルトの展開/縮小アイコンを変更します。                                                                     |
| `igx-expansion-panel-body`        | これは展開可能なコンテナーで、パネルの展開時のみ表示されます。                                     |


## プロパティ バインディングおよびイベント
ロジックをコンポーネントに追加することによりパネルの現在の状態に基づいて `igx-expansion-panel-description` の表示/非表示を切り替えることができます。 
これには、説明をコントロール [`collapsed`]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html#collapsed) プロパティへバインドします。

```typescript
// in expansion-panel.component.ts
import { IgxExpansionPanelComponent } from 'igniteui-angular';
// import { IgxExpansionPanelComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({...})
export class ExpansionPanelComponent {
    @ViewChild(IgxExpansionPanelComponent, {read: IgxExpansionPanelComponent})
    public panel: IgxExpansionPanelComponent;
}
```

```html
<!-- in expansion-component.component.html -->
<igx-expansion-panel>
    <igx-expansion-panel-header>
        Golden Retriever
        <igx-expansion-panel-description *ngIf="panel.collapsed">
            Medium-large gun dog
        </igx-expansion-panel-description>
    </igx-expansion-panel-header>
    ...
</igx-expansion-panel>
```

以下のサンプル コードは、コンポーネントが縮小状態の場合のみ短い説明文を表示する場合の例です。
コンポーネントの状態に応じてより複雑な機能を追加する場合、イベント エミッターにバインドすることもできます。
```typescript
// in expansion-panel.component.ts

@Component({...})
export class ExpansionPanelComponent {
    ...
    public handleExpansion(args: {event: Event}): void {
        ... // Some functionality
    }
}
```
```html
<!-- in expansion-component.component.html -->
<igx-expansion-panel (onExpanded)="handleExpansion($event)" (contentCollapsed)="handleCollapse($event)"></igx-expansion-panel>
```

以下は結果です。

<code-view style="height: 320px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/expansion-sample-2" >
</code-view>


## コンポーネントのカスタマイズ
[`IgxExpansionPanelComponent`]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html) によって[ヘッダー]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html)を簡単にカスタマイズできます。
ヘッダー アイコンの位置は、`igx-expansion-panel-header` の [`iconPosition`]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html#iconPosition) 入力で設定します。アイコンの位置の可能なオプションは、**left**、**right**、**none** です。次のコードサンプルは、コンポーネントのボタンが右側に移動するように構成する方法を示しています。

```html
<!-- in expansion-component.component.html -->
<igx-expansion-panel>
    <igx-expansion-panel-header [iconPosition]="'right'"></igx-expansion-panel-header>
    ...
</igx-expansion-panel>
```
>[!NOTE]
>[`iconPosition`]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html#iconPosition) プロパティは、`RTL` で使用できます。たとえば、**right** に表示するよう設定したアイコンは、RTL 設定時にヘッダーの左端に表示されます。

コントロールのトグル状態のデフォルト アイコンをテンプレート化できます。
`igx-expansion-panel-icon` タグでコンテンツを渡します。
```html
<!-- in expansion-component.component.html -->
<igx-expansion-panel>
    <igx-expansion-panel-header [iconPosition]="'right'">
        ...
        <igx-expansion-panel-icon>
            <span class="example-icon" *ngIf="panel.collapsed">Show More</span>
            <span class="example-icon" *ngIf="!panel.collapsed">Show Less</span>
        </igx-expansion-panel-icon>
    </igx-expansion-panel-header>   
    ...
</igx-expansion-panel>
```
Angular Expansion Panel は、パネルの縮小時に「更に表示」を描画し、完全に展開した後に「簡易表示」を描画します。

`IgxExpansionPanel` コントロールを使用すると、あらゆる種類のコンテンツを `igx-expansion-panel-body` 内に追加できます。[`IgxGrid`](grid/grid.md)、[`IgxCombo`](combo.md)、チャート、その他の展開パネルもレンダリングできます。

展開パネルの本体にいくつかの基本的なマークアップを追加します。
```html
<!-- in expansion-panel.component.html -->
...
<igx-expansion-panel-body>
    <div class="example-content">
        <img [src]="imgSource" alt="dog-image">
        The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties. The name "retriever" refers to the breed's ability to retrieve shot game undamaged due to their soft mouth. Golden retrievers have an instinctive love of water, and are easy to train to basic or advanced obedience standards.
        <a igxButton="outlined" target="_blank" [href]="readMore">Read more</a>
    </div>
</igx-expansion-panel-body>
...
```

以下は上記の変更の結果です。

<code-view style="height: 460px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/expansion-sample-3" >
</code-view>



## スタイル設定  

### パレットおよび色
はじめに、後でコンポーネントに渡すカスタム パレットを作成します。
```scss
// In real life, this should be in our main sass file so we can share the palette between all components. 
// In our case, it's in the component SCSS file "expansion-styling.component.scss".

@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';

// Add your brand colors.
$my-primary-color:#353a4b;
$my-secondary-color: #ffd351;
$my-surface-color: #efefef;

// Create custom palette.
$my-color-palette: palette(
  $primary: $my-primary-color,
  $secondary: $my-secondary-color,
  $surface: $my-surface-color
);
```

### コンポーネント テーマの作成

コンポーネント テーマを作成し、上記のスニペットから `$my-color-palette` パレットを渡します。

```scss
// In expansion-styling.component.scss
// Create expansion panel theme.
$custom-panel-theme: expansion-panel-theme(
  // Styling parameters.
  $header-background: color($my-color-palette, "primary", 700),
  $header-focus-background: color($my-color-palette, "primary", 700),
  $header-title-color: color($my-color-palette, "secondary"),
  $header-icon-color: color($my-color-palette, "secondary"),
  $body-background: color($my-color-palette, "primary", 700),
  $body-color: color($my-color-palette, "secondary", 100),
  $border-radius: .5
);
```

パレットを作成する代わりに、引数としてカラーを直接 expansion-panel-theme 関数に割り当てることもできます。`title-color` や `icon-color`、その他の前景プロパティを明示的に指定していない場合でも、テーマは背景とのコントラストを考慮し、黒または白を自動的に割り当てます。

```scss
$custom-panel-theme: expansion-panel-theme(
  $header-background: #353a4b,
  $header-focus-background: #353a4b,
  $header-title-color: #ffd351,
  $header-icon-color: #ffd351,
  ...
);
```

>[!NOTE]
>[`テーマ`](themes/sass/component-themes.md) エンジンを介したスタイル設定に使用可能なすべてのパラメーターを確認するには、[`API ヘルプ`]({environment:sassApiUrl}/themes#function-expansion-panel-theme)を参照してください。

### コンポーネント テーマの適用
コンポーネント テーマを適用するには、`css-vars` ミックスインをインクルードし、`$custom-panel-theme` マップを渡します。

```scss
// In expansion-styling.component.scss
@include css-vars($custom-panel-theme);
```

Ignite UI テーマ エンジンの使用方法の詳細については、[`こちらをクリックしてください`](themes/sass/component-themes.md)。

### デモ

<code-view style="height: 440px;" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/expansion-styling" >
</code-view>

## Angular Expansion Panel のアニメーション
### 特定のアニメーションの使用
コンポーネントの展開や縮小時にデフォルトのアニメーション以外を使用することも可能です。
上記のように igxExpansionPanel がすでに `app.module.ts` にインポートされていると仮定した場合、カスタム アニメーション設定オブジェクトを作成して Ignite UI for Angular Expansion Panel で使用するために設定します。[`useAnimation`](https://angular.io/api/animations/useAnimation) メソッドと特定のアニメーションが必要でアニメーションの設定をインポートして次のようなアニメーションの設定を定義します。

```typescript
// expansion-panel.component.ts 内
import { useAnimation } from '@angular/animations';
import { IgxExpansionPanelComponent, slideInLeft, slideOutRight } from 'igniteui-angular';
// import { IgxExpansionPanelComponent, slideInLeft, slideOutRight } from '@infragistics/igniteui-angular'; for licensed package

@Component({...})
export class ExpansionPanelComponent {
    @ViewChild(IgxExpansionPanelComponent, {read: IgxExpansionPanelComponent})
    public panel: IgxExpansionPanelComponent;

    public animationSettingsCustom = {
        closeAnimation: useAnimation(slideOutRight, {
            params: {
                duration: '100ms',
                toPosition: 'translateX(25px)'
            }
        }),
        openAnimation: useAnimation(slideInLeft, {
            params: {
                duration: '500ms',
                fromPosition: 'translateX(-15px)',
                startOpacity: 0.1
            }
        })
    };

    public collapsed() {
        return this.panel && this.panel.collapsed;
    }
}
```
[**ビルトイン アニメーション スイート**]({environment:sassApiUrl}/animations) の [`slideInLeft`]({environment:sassApiUrl}/animations#mixin-slide-in-left) アニメーションと [`slideOutRight`]({environment:sassApiUrl}/animations#mixin-slide-out-right) アニメーションを使用して、コンテンツを折りたたむとコンポーネントのコンテンツが左側からより動的に表示され、右側から消えるようにします。既存のパラメーターを使用したい特定のパラメーターでオーバーライドします。

サンプルは、ユーザー情報とキー ポイントをここに表示してアニメーション設定をコンポーネントに渡します:
`[animationSettings] = "animationSettingsCustom"`

```html
<!-- in expansion-panel.component.html -->
...
<igx-expansion-panel [animationSettings] = "animationSettingsCustom" class="my-expansion-panel">
    <igx-expansion-panel-header>
        <igx-expansion-panel-title class="sample-title">Angular</igx-expansion-panel-title>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body>
        Angular (commonly referred to as "Angular 2+" or "Angular v2 and above") is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.
    </igx-expansion-panel-body>
</igx-expansion-panel>
...
```

以下は結果です。

<code-view style="height: 380px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/expansion-sample-5" >
</code-view>


## 複数パネルの場合

[igxAccordion トピック](accordion.md)を参照してください。

## API リファレンス
* [IgxExpansionPanel API]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html)
* [IgxExpansionPanelHeader API]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html)
* [IgxExpansionPanelBody API]({environment:angularApiUrl}/classes/igxexpansionpanelbodycomponent.html)
* [IgxExpansionPanel スタイル]({environment:sassApiUrl}/themes#mixin-igx-expansion-panel)

## テーマの依存関係
* [IgxExpansionPanel テーマ]({environment:sassApiUrl}/themes#function-expansion-panel-theme)
* [IgxIcon テーマ]({environment:sassApiUrl}/themes#function-icon-theme)
