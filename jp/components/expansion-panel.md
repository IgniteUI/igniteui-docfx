---
title: Angular Expansion Panel – Ignite UI for Angular
_description: Use our Angular expansion panel which provides an easily configurable expandable component with two states - collapsed and expanded. Try it now.
_keywords: angular accordion, igniteui for angular, インフラジスティックス
_language: ja
---
# Angular Expansion Panel Overview

Angular Material provides developers with one of the most useful and easy-to-use layout components - Angular Expansion Panel. This feature-rich component is used to create an expandable/collapsible detailed summary view. The content can include Angular Expansion Panel animation, text, icons, header, action bar, and other elements. 

<p class="highlight">
    Ignite UI Expansion Panel [igx-expansion-panel]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html) is a lightweight Angular accordion component which can be rendered in two states - collapsed or expanded. The Expansion Panel in Angular can be toggled using mouse click, or keyboard interactions. You can also combine multiple Angular Expansion Panels into Angular accordion.
</p>
<div class="divider--half"></div>

## Angular Expansion Panel Example

We've created this simple Angular Expansion Panel Example using Ignite UI Angular. See how the sample works. 

<code-view style="height: 320px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/expansion-sample-1" >
</code-view>


はじめに、**app.module** に **IgxExpansionPanelModule** をインポートする必要があります。
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

次に、コンポーネントのマークアップを追加します。
```html
<!-- expansible-panel.component.html -->
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
```

The table below shows all the available markup parts for the Angular Expansion Panel.
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

@Component({
    ...
})
export class ExpansionPanelComponent {
    @ViewChild(IgxExpansionPanelComponent, {read: IgxExpansionPanelComponent})
    public panel: IgxExpansionPanelComponent;
}
```

```html
<!-- in expansion-component.component.html -->
...
    <igx-expansion-panel-header>
        Golden Retriever
        <igx-expansion-panel-description *ngIf="panel.collapsed">
            Medium-large gun dog
        </igx-expansion-panel-description>
    </igx-expansion-panel-header>
    ...
```

以下のサンプル コードは、コンポーネントが縮小状態の場合のみ短い説明文を表示する場合の例です。
コンポーネントの状態に応じてより複雑な機能を追加する場合、イベント エミッターにバインドすることもできます。
```typescript
// in expansion-panel.component.ts

export class ExpansionPanelComponent {
    ...
    public handleExpansion(args: {event: Event}): void {
        ... // Some functionality
    }
}
```
```html
<!-- in expansion-component.component.html -->
<igx-expansion-panel (onExpanded)="handleExpansion($event)  (contentCollapsed)="handleCollapse($event)"></igx-expansion-panel>
```

以下は結果です。

<code-view style="height: 320px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/expansion-sample-2" >
</code-view>


## コンポーネントのカスタマイズ
[`IgxExpansionPanelComponent`]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html) によって[ヘッダー]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html)を簡単にカスタマイズできます。
ヘッダー アイコンの位置は、`igx-expansion-panel-header` の [`iconPosition`]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html#iconposition) 入力で設定します。アイコンの位置の可能なオプションは、**left**、**right**、**none** です。次のコードサンプルは、コンポーネントのボタンが右側に移動するように構成する方法を示しています。

```html
<!-- in expansion-component.component.html -->
<igx-expansion-panel>
    <igx-expansion-panel-header [iconPosition]="'right'"></igx-expansion-panel-header>
    ...
</igx-expansion-panel>
```
> [`iconPosition`]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html#iconposition) プロパティは、`RTL` で使用できます。たとえば、**right** に表示するよう設定したアイコンは、RTL 設定時にヘッダーの左端に表示されます。

コントロールのトグル状態のデフォルト アイコンをテンプレート化できます。
`igx-expansion-panel-icon` タグでコンテンツを渡します。
```html
<!-- in expansion-component.component.html -->
    <igx-expansion-panel>
    ...
        <igx-expansion-panel-header [iconPosition]="'right'">
        ...
        <igx-expansion-panel-icon>
            <span class="example-icon" *ngIf="panel.collapsed">Show More</span>
            <span class="example-icon" *ngIf="!panel.collapsed">Show Less</span>
        </igx-expansion-panel-icon>
        </igx-expansion-panel-header>
    </igx-expansion-panel>
```
Our Angular Expansion Panel will now render "Show More" when the panel is collapsed and "Show Less" once it's fully expanded.

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

### Angular Expansion Panel Demo

<code-view style="height: 440px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/expansion-styling" >
</code-view>


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

// Create custom palette.
$my-color-palette: palette(
    $primary: $my-primary-color,
    $secondary: $my-secondary-color
);
```

### コンポーネント テーマの作成
コンポーネント テーマを作成し、上記のスニペットから `$my-color-palette` パレットを渡します。
```scss
// In expansion-styling.component.scss
// Create expansion panel theme.
$custom-panel-theme: expansion-panel-theme(
    // pass `$my-color-palette` palette.
    $palette: $my-color-palette,

    // Styling parameters.
    $header-background: color($my-color-palette, "primary", 700),
    $header-focus-background: color($my-color-palette, "primary", 700),
    $header-title-color: color($my-color-palette, "secondary"),
    $header-icon-color: color($my-color-palette, "secondary"),
    $body-background: color($my-color-palette, "primary", 700),
    $body-color: color($my-color-palette, "secondary" 100),
    $border-radius: .5
);
```
>[!NOTE]
> [`テーマ`](themes/sass/component-themes.md)エンジンを介したスタイル設定に使用可能なすべてのパラメーターを確認するには、[`API ヘルプ`]({environment:sassApiUrl}/index.html#function-expansion-panel-theme) を参照してください。

### コンポーネント テーマの適用
コンポーネント テーマを適用するには、`css-vars` ミックスインをインクルードし、`$custom-panel-theme` マップを渡します。 
```scss
// In expansion-styling.component.scss
// Pass our custom-panel-theme to `igx-expansion-panel` mixin.
// The `:host` here makes sure that all the theming will affect only this component.
:host {
  @include css-vars($custom-panel-theme);
}
```

 >[!NOTE]
 > Internet Explorer 11 をサポートする場合は、`igm-css-vars` の代わりにコンポーネント mixin の `igx-expansion-panel` を使用する必要があります。コンポーネントの ViewEncapsulation が [`Emulated`](themes/sass/component-themes.md#表示のカプセル化)であるため、`:: ng-deep` を使用してカプセル化を解除する必要があります。
 > カスタム テーマが他のコンポーネントに影響しないようにするには、`::ng-deep` の前に `:host` セレクターを含める必要があります。

```scss
// In expansion-styling.component.scss
// The `:host` here makes sure that all the theming will affect only this component after the ViewEncapsulation Penetration.
:host {
    // Penetrate the ViewEncapsulation.
    ::ng-deep {
        @include expansion-panel($custom-panel-theme);
    }
}
```

Ignite UI テーマ エンジンの使用方法の詳細については、[`こちらをクリックしてください`](themes/sass/component-themes.md)

## Angular Expansion Panel Animations 
### 特定のアニメーションの使用
It is possible to use other than default animation when expanding and collapsing the component.
Assuming the igxExpansionPanel is already imported in `app.module.ts` as previously described, you can create a custom animation setting object and set it to be used in the Ignite UI for Agular Expansion Panel. The approach requires the [`useAnimation`](https://angular.io/api/animations/useAnimation) method and the specific animations to be used so we start importing these and defining the animation settings like:

```typescript
// expansion-panel.component.ts 内
import { useAnimation } from '@angular/animations';
import { IgxExpansionPanelComponent, slideInLeft, slideOutRight } from 'igniteui-angular';
// import { IgxExpansionPanelComponent, slideInLeft, slideOutRight } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    ...
})
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
[**ビルトイン アニメーション スイート**]({environment:sassApiUrl}/index.html#animations) の [`slideInLeft`]({environment:sassApiUrl}/index.html#mixin-slide-in-left) アニメーションと [`slideOutRight`]({environment:sassApiUrl}/index.html#mixin-slide-out-right) アニメーションを使用して、コンテンツを折りたたむとコンポーネントのコンテンツが左側からより動的に表示され、右側から消えるようにします。既存のパラメーターを使用したい特定のパラメーターでオーバーライドします。

サンプルは、ユーザー情報とキー ポイントをここに表示してアニメーション設定をコンポーネントに渡します。
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
* [IgxExpansionPanel スタイル]({environment:sassApiUrl}/index.html#mixin-igx-expansion-panel)

## テーマの依存関係
* [IgxExpansionPanel テーマ]({environment:sassApiUrl}/index.html#function-expansion-panel-theme)
* [IgxIcon テーマ]({environment:sassApiUrl}/index.html#function-icon-theme)
