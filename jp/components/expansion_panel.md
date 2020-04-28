---
title: Angular Panel | Expandable | Ignite UI for Angular | インフラジスティックス
_description: Angular アコーディオン/マテリアル拡張パネルは、折りたたみと展開の 2 つの状態を持つ、簡単に設定できる拡張可能なコンポーネントを提供します。
_keywords: angular accordion, igniteui for angular, インフラジスティックス
_language: ja
---
## 展開パネル
<p class="highlight">
    [igx-expansion-panel]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html) は、軽量な Angular アコーディオン コンポーネントで、縮小または展開のどちらかの状態でレンダリングできます。展開パネルは、マウス クリックまたはキーボード操作によって切り替えることができます。
</p>
<div class="divider--half"></div>
### 使用方法
<div class="sample-container loading" style="height: 320px;">
    <iframe id="expansion-sample-1-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/layouts/expansion-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-1-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

はじめに、**app.module** に **IgxExpansionPanelModule** をインポートする必要があります。
```typescript
// app.module.ts
...
import { IgxExpansionPanelModule } from 'igniteui-angular';

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

以下の表は、展開パネルで使用可能なすべてのマークアップ要素を示します。
| タグ名                          | 説明                                                                                                          |
| :-------------------------------: | :--------------------------------------------------------------------------------------------------------------------: |
| `igx-expansion-panel`             | コンポーネント ホスト - ヘッダーとボディを格納します。                                                                           |
| `igx-expansion-panel-header`      | コンポーネント ヘッダーを格納します。常に表示されます。タイトル、説明、およびその他の追加のコンテンツを保存します。     |
| `igx-expansion-panel-title`       | 展開パネルのタイトルを設定します。                                                                                   |
| `igx-expansion-panel-description` | 短い概要を提供するために使用できます。説明は常にタイトルの後に表示されます (タイトルを設定した場合)。   |
| `igx-expansion-panel-icon`        | デフォルトの展開/縮小アイコンを変更します。                                                                     |
| `igx-expansion-panel-body`        | これは展開可能なコンテナーで、パネルの展開時のみ表示されます。                                     |


### プロパティ バインディングおよびイベント
ロジックをコンポーネントに追加することによりパネルの現在の状態に基づいて `igx-expansion-panel-description` の表示/非表示を切り替えることができます。 
これには、説明をコントロール [`collapsed`]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html#collapsed) プロパティへバインドします。

```typescript
// in expansion-panel.component.ts
import { IgxExpansionPanelComponent } from 'igniteui-angular';
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
<igx-expansion-panel (onExpanded)="handleExpansion($event)  (onCollapsed)="handleCollapse($event)"></igx-expansion-panel>
```

以下は結果です。
<div class="sample-container loading" style="height: 320px;">
    <iframe id="expansion-sample-2-sample" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/layouts/expansion-sample-2" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-2-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

### コンポーネントのカスタマイズ
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
このコンポーネントは、パネルの縮小時に「更に表示」を描画し、完全に展開した後に「簡易表示」を描画します。

`IgxExpansionPanel` コントロールを使用すると、あらゆる種類のコンテンツを `igx-expansion-panel-body` 内に追加できます。[`IgxGrid`](grid/grid.md)、 [`IgxCombo`](combo.md)、チャート、その他の拡張パネルもレンダリングできます。

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
<div class="sample-container loading" style="height: 460px;">
    <iframe id="expansion-sample-3-sample" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/layouts/expansion-sample-3" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-3-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>


## スタイル設定  

### デモ
<div class="sample-container loading" style="height: 440px;">
    <iframe id="expansion-styling" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/layouts/expansion-styling" class="lazyload no-theming"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-styling" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

### パレットおよび色
はじめに、後でコンポーネントに渡すカスタム パレットを作成します。
```scss
// In real life, this should be in our main sass file so we can share the palette between all components. 
// In our case, it's in the component SCSS file "expansion-styling.component.scss".

// Import theming engine functionality.
@import '~igniteui-angular/lib/core/styles/themes/index';

// Add your brand colors.
$my-primary-color:#353a4b;
$my-secondary-color: #ffd351;

// Create custom palette.
$my-color-palette: igx-palette(
    $primary: $my-primary-color,
    $secondary: $my-secondary-color
);
```

### コンポーネント テーマの作成
コンポーネント テーマを作成し、上記のスニペットから `$my-color-palette` パレットを渡します。
```scss
// In expansion-styling.component.scss
// Create expansion panel theme.
$custom-panel-theme: igx-expansion-panel-theme(
    // pass `$my-color-palette` palette.
    $palette: $my-color-palette,

    // Styling parameters.
    $header-background: igx-color($my-color-palette, "primary", 700),
    $header-focus-background: igx-color($my-color-palette, "primary", 700),
    $header-title-color: igx-color($my-color-palette, "secondary"),
    $header-icon-color: igx-color($my-color-palette, "secondary"),
    $body-background: igx-color($my-color-palette, "primary", 700),
    $body-color: igx-color($my-color-palette, "secondary" 100),
    $border-radius: .5
);
```
>[!NOTE]
> [`テーマ化`](themes/component-themes.md)エンジンを介したスタイル設定に使用可能なすべてのパラメーターを確認するには、[`API ヘルプ`]({environment:sassApiUrl}/index.html#function-igx-expansion-panel-theme) を参照してください。

### コンポーネント テーマの適用
コンポーネント テーマを適用するには、 `igx-css-vars` mixin をインクルードし、 `$custom-panel-theme` マップを渡します。 
```scss
// In expansion-styling.component.scss
// Pass our custom-panel-theme to `igx-expansion-panel` mixin.
// The `:host` here makes sure that all the theming will affect only this component.
:host {
  @include igx-css-vars($custom-panel-theme);
}
```

 >[!NOTE]
 > Internet Explorer 11 をサポートする場合は、`igm-css-vars` の代わりにコンポーネント mixin の `igx-expansion-panel` を使用する必要があります。コンポーネントの ViewEncapsulation が [`Emulated`](themes/component-themes.md#表示のカプセル化)であるため、` :: ng-deep` を使用してペネトレーションする必要があります。
 > カスタム テーマが他のコンポーネントに影響しないようにするには、`::ng-deep` の前に `:host` セレクターを含める必要があります。

```scss
// In expansion-styling.component.scss
// The `:host` here makes sure that all the theming will affect only this component after the ViewEncapsulation Penetration.
:host {
    // Penetrate the ViewEncapsulation.
    ::ng-deep {
        @include igx-expansion-panel($custom-panel-theme);
    }
}
```

Ignite UI テーマ エンジンの使用方法の詳細については、[`こちらをクリックしてください`](themes/component-themes.md)

## アニメーションの使用
### 特定のアニメーションの使用
コンポーネントの展開や縮小時にデフォルトのアニメーション以外を使用することも可能です。
上記のように igxExpansionPanel がすでに `app.module.ts` にインポートされていると仮定した場合、カスタム アニメーション設定オブジェクトを作成して igxExpansionPanel で使用するために設定します。[`useAnimation`](https://angular.io/api/animations/useAnimation) メソッドと特定のアニメーションが必要でアニメーションの設定をインポートして次のようなアニメーションの設定を定義します。

```typescript
// expansion-panel.component.ts 内
import { useAnimation } from "@angular/animations";
import { IgxExpansionPanelComponent, slideInLeft, slideOutRight } from 'igniteui-angular';
@Component({
    ...
})
export class ExpansionPanelComponent {
    @ViewChild(IgxExpansionPanelComponent, {read: IgxExpansionPanelComponent})
    public panel: IgxExpansionPanelComponent;

    public animationSettingsCustom = {
        closeAnimation: useAnimation(slideOutRight, {
            params: {
                duration: "100ms",
                toPosition: "translateX(25px)"
            }
        }),
        openAnimation: useAnimation(slideInLeft, {
            params: {
                duration: "500ms",
                fromPosition: "translateX(-15px)",
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
    <igx-expansion-panel-body class="example-content">
        Angular (commonly referred to as "Angular 2+" or "Angular v2 and above") is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.
    </igx-expansion-panel-body>
</igx-expansion-panel>
...
```

以下は結果です。
<div class="sample-container loading" style="height: 380px;">
    <iframe id="expansion-sample-5-sample" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/layouts/expansion-sample-5" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-5-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

### 複数パネルの場合
以下の例は、アプリのようなシナリオを実装します。ユーザーの詳細を表示または要求するような特定のワークフローに従います。このサンプルでは、​​ビルトイン アニメーション スイートのデフォルトの `growVerIn` と `growVerOut` アニメーションが使用されるため、特定のアニメーション設定を渡したり、アニメーションをインポートしたりする必要はありません。複数の `igxExpansionPanel` は一度に展開して [`onInteraction`]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html#oninteraction) イベントを処理することはできません。

```typescript
// expansion-panel.component.ts 内
import { Component, QueryList, ViewChildren } from "@angular/core";
import { IgxExpansionPanelComponent } from "igniteui-angular";

@Component({
    ...
})
export class ExpansionPanelComponent {
    @ViewChildren(IgxExpansionPanelComponent)
    public accordion: QueryList<IgxExpansionPanelComponent>;

    public collapsed(index: number) {
         if (!this.accordion) {
            return true;
         }
         return this.accordion.toArray()[index] && this.accordion.toArray()[index].collapsed;
     }

    public onInteraction(event) {
        const expandedPanels = this.accordion.filter((panel) => !panel.collapsed);
        expandedPanels.forEach((expandedPanel) => {
            if (expandedPanel.elementRef !==  event.event.currentTarget) {
                expandedPanel.collapse();
            }
        });
    }
}
```

```html
<!-- in expansion-panel.component.html -->
<igx-expansion-panel class="my-expansion-panel">
    <igx-expansion-panel-header (onInteraction)="onInteraction($event)" [disabled]="false">
        <igx-expansion-panel-title class="sample-title">HTML5</igx-expansion-panel-title>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body>
        <div class="example-content">
            HTML5 is a software solution stack that defines the properties and behaviors of web page content by implementing a markup-based pattern to it.            
    </div>
    </igx-expansion-panel-body>
</igx-expansion-panel>
<igx-expansion-panel class="my-expansion-panel">
    <igx-expansion-panel-header (onInteraction)="onInteraction($event)" [disabled]="false">
        <igx-expansion-panel-title class="sample-title">CSS3</igx-expansion-panel-title>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body>
        <div class="example-content">
            Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML            
        </div>
    </igx-expansion-panel-body>
</igx-expansion-panel>
<igx-expansion-panel class="my-expansion-panel">
    <igx-expansion-panel-header (onInteraction)="onInteraction($event)" [disabled]="false">
        <igx-expansion-panel-title class="sample-title">SASS/SCSS</igx-expansion-panel-title>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body>
        <div class="example-content">
            Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). 
        </div>
    </igx-expansion-panel-body>
</igx-expansion-panel>
```
以下は結果です。
<div class="sample-container loading" style="height: 480px;">
    <iframe id="expansion-sample-4-sample" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/layouts/expansion-sample-4" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-4-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

## API リファレンス
* [IgxExpansionPanel API]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html)
* [IgxExpansionPanelHeader API]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html)
* [IgxExpansionPanelBody API]({environment:angularApiUrl}/classes/igxexpansionpanelbodycomponent.html)
* [IgxExpansionPanel スタイル]({environment:sassApiUrl}/index.html#mixin-igx-expansion-panel)
