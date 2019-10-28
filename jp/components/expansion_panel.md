---
title: Angular Panel |Expandable |Ignite UI for Angular |Infragistics
_description: Angular アコーディオン/マテリアル拡張パネルは、折りたたみと展開の 2 つの状態を持つ、簡単に設定できる拡張可能なコンポーネントを提供します。
_keywords: angular accordion, igniteui for angular, インフラジスティックス
_language: ja
---

## 展開パネル
<p class="highlight">

[igx-expansion-panel]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html) は、Angular アコーディオンの軽量なコンポーネントで、2 つの状態 (折りたたみまたは展開) でレンダリングできます。折りたたむと、展開にはコンテンツの概要が表示されます。折りたたまれたマテリアル拡張パネルは、マウス クリックまたはキーボード操作を使用して切り替えることができ、必要な追加コンテンツを含むボディ全体を表示できます。
</p>
<div class="divider--half"></div>

### 展開パネル デモ
<div class="sample-container loading" style="height: 450px;">
    <iframe id="expansion-sample-1-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/layouts/expansion-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-1-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

## 使用方法
### 作業の開始
[`IgxExpansionPanelComponent`]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html)を使用するには、以下のコマンドを実行して Ignite UI for Angular をインストールする必要があります。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](general/getting_started.md)トピックををご覧ください。

次に、**app.module.ts** に  **IgxExpansionPanelModule** をインポートします。
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

次にマークアップで `igx-expansion-panel` を使用します。展開パネルは以下のようにシンプルな構造です。
- `igx-expansion-panel` - ヘッダーとボディを格納するコンポーネント ホスト。
    - `igx-expansion-panel-header` - コンポーネント ヘッダーを格納。常に表示されます。タイトルと説明、追加のコンテンツを保存します。
        - `igx-expansion-panel-title` - コンポーネントのタイトルを保存します。デフォルト スタイルがあります。タイトルは常に最初にヘッダー コンテンツに表示されます (`iconPosition === 'left'` の場合はアイコンの後)。Aria ラベルで使用。
        - `igx-expansion-panel-description` - コンポーネントの説明を保存します。短い概要を提供するために使用できます。説明は常にタイトルの後に表示されます (タイトルを設定した場合)。
    - `igx-expansion-panel-body` - コンポーネントのボディを保存します。コンポーネントのこの部分は、パネルの展開時のみ表示されます。

以下の例では、hummingbird についての情報を保持する縮小可能なコンポーネントを作成できます。
```html
<!-- expansible-panel.component.html -->
<igx-expansion-panel>
    <igx-expansion-panel-header>
        <igx-expansion-panel-title>
            Hummingbird
        </igx-expansion-panel-title>
        <igx-expansion-panel-description>
            One of the smallest birds
        </igx-expansion-panel-description>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body>
        <p>
            Hummingbirds are birds native to the Americas that constitute the family Trochilidae.
            They are among the smallest of birds, most species measuring 7.5â€“13 cm (3â€“5 in) in length.
            Indeed, the smallest extant bird species is a hummingbird, the 5 cm (2.0 in) bee hummingbird weighing less
            than 2.0 g (0.07 oz).
        </p>
        <a href="https://en.wikipedia.org/wiki/Hummingbird" target="_blank" rel="nofollow" title="Hummingbird">Read more</a>
    </igx-expansion-panel-body>
</igx-expansion-panel>

```

以下は結果です。
<div class="sample-container loading" style="height: 450px;">
    <iframe id="expansion-sample-1-sample" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/layouts/expansion-sample-1" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-1-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

### プロパティとイベントへバインドします。

ロジックをコンポーネントに追加してパネルの状態に基づいて説明を表示/非表示にします。これには、コントロールの [`collapsed`]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html#collapsed) プロパティに説明をバインドします。

```typescript
// in expansion-panel.component.ts
import { IgxExpansionPanelComponent } from 'igniteui-angular';
@Component({
    ...
})
export class ExpansionPanelComponent {
    @ViewChild(IgxExpansionPanelComponent, {read: IgxExpansionPanelComponent})
    public panel: IgxExpansionPanelComponent;
    public readMore: string = 'https://en.wikipedia.org/wiki/Hummingbird';
}
```
以下のコード サンプルは、コンポーネントが縮小状態の場合のみ説明を表示します。

```html
<!-- in expansion-component.component.html -->
...
    <igx-expansion-panel-header>
        ...
        <igx-expansion-panel-description *ngIf="panel.collapsed">
            One of the smallest birds
        </igx-expansion-panel-description>
    </igx-expansion-panel-header>
```

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
    <igx-expansion-panel (onExpanded)="handleExpansion($event)">

    </igx-expansion-panel>
```

以下は結果です。
<div class="sample-container loading" style="height: 400px;">
    <iframe id="expansion-sample-2-sample" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/layouts/expansion-sample-2" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-2-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

### コンテキストの追加

コンポーネントの[`igx-expansion-panel-body`]({environment:angularApiUrl}/classes/igxexpansionpanelbodycomponent.html) タグはすべてのマークアップを受け取り、`ng-content` プロジェクションですべてを描画します。[`IgxAvatar`](avatar.md) を使用して展開パネルのインナー コンテンツを更新できます。
はじめに、**app.module.ts** に `IgxAvatarModule` をインポートする必要があります。
```typescript
// in app.module.ts
import { IgxExpansionPanelModule, IgxAvatarModule } from 'igniteui-angular';

NgModule({
    imports: [
        ...
        IgxAvatarModule
        ...
    ],
    ...
})
```
インポート後、マークアップでアバターを使用できます。

```html
<!-- in expansion-panel.component.html -->
...
<igx-expansion-panel-body>
    <div>
            <igx-avatar [src]="imgSource" roundShape="true" size="large">
            </igx-avatar>
        </div>
        <p>
            Hummingbirds are birds native to the Americas that constitute the family Trochilidae. They are among
            the smallest of birds,
            most species measuring 7.5â€“13 cm (3â€“5 in) in length. Indeed, the smallest extant bird species is a
            hummingbird,
            the 5 cm (2.0 in) bee hummingbird weighing less than 2.0 g (0.07 oz).
        </p>
        <a [href]="readMore" target="_blank" rel="nofollow" title="Hummingbird">Read more</a>
</igx-expansion-panel-body>
...
```
コンポーネント定義に画像ソースを追加するだけで、簡単に変更できます。
```typescript
// in expansion-panel.component.html
export class ExpansionPanelComponent {
    ...
    public imgSource = 'https://upload.wikimedia.org/wikipedia/commons/4/46/Purple-throated_carib_hummingbird_feeding.jpg';
}
```
### 概要
以下は、すべての変更を初期コンポーネントに適用後の最終的な結果です。
<div class="sample-container loading" style="height: 550px;">
    <iframe id="expansion-sample-3-sample" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/layouts/expansion-sample-3" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-3-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

`IgxExpansionPanel` コントロールを使用すると、あらゆる種類のコンテンツを `igx-expansion-panel-body` 内に追加できます。[`IgxGrid`](grid/grid.md)、[`IgxCombo`](combo.md)、チャート、その他の拡張パネルもレンダリングできます。

## スタイル設定
拡張パネルには、本文のコンテンツに特定の境界線やパディングが定義されていません。拡張パネル本体要素のパディングを手動で設定するか、拡張パネル本体を `igxCard` でラップすることができます。後者については、[Weather Forecast (天気予報) サンプル](#天気予報のサンプル)をご覧ください。

### ヘッダーのスタイル設定
[`IgxExpansionPanelComponent`]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html) を使用すると、[ヘッダー]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html)を簡単にカスタマイズできます。
コントロールのトグル状態のデフォルト アイコンをテンプレート化できます。このアイコンの位置は、ヘッダーの開始または終了に設定可能です。非表示にすることもできます。

ヘッダーアイコンの位置を構成するには、は、`igx-expansion-panel-header` の [`iconPosition`]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html#iconposition) 入力を使​​用します。アイコンの位置の可能なオプションは、**left**、**right**、**none** です。次のコードサンプルは、コンポーネントのボタンが右側に移動するように構成する方法を示しています。

```html
<!-- in expansion-component.component.html -->
    <igx-expansion-panel>
    ...
        <igx-expansion-panel-header [iconPosition]="'right'">
        </igx-expansion-panel-header>
    </igx-expansion-panel>
```
> [`iconPosition`]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html#iconposition) プロパティは、`RTL` で使用できます。たとえば、**right** に表示するよう設定したアイコンは、RTL 設定時にヘッダーの左端に表示されます。

コンテンツを渡してコントロールで使用するデフォルト アイコンは、`igx-expansion-panel-icon` タグでをオーバーライドできます。
```html
<!-- in expansion-component.component.html -->
    <igx-expansion-panel>
    ...
        <igx-expansion-panel-header [iconPosition]="'right'">
        ...
            <igx-expansion-panel-icon>
                <span class="example-icon" *ngIf="panel.collapsed">Show more</span>
                <span class="example-icon" *ngIf="!panel.collapsed">Collapse</span>
            </igx-expansion-panel-icon>
        </igx-expansion-panel-header>
    </igx-expansion-panel>
```
```css
<!-- in expansion-component.component.scss -->
.example-icon {
    font-size: 12px;
    font-weight: 600px;
}
```
このコンポーネントは、パネルの縮小時と完全に展開した後に「更に表示」を描画します。

### テーマのインポート
[Ignite UI for Angular テーマ](themes/index.md)を使用して、**igx-expansion-panel** の外観を変更できます。次に、より安定する方法でカスタマイズします。

はじめに、テーマ エンジンによって公開されている関数を使用するために、スタイル ファイルに `index` ファイルをインポートする必要があります。 

```scss
// in styles.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

### パレットと色の定義
`index` ファイルをインポート後、[`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用して、カスタムテーマで使用するいくつかの色変数を定義できます。コンポーネントで使用するメイン カラーを指定できる独自のカラー[パレット](themes/palette.md)と組み合わせて、`igx-expansion-panel` スタイルにこれらを使用します。
はじめにカスタム パレットを定義し、メイン カラーを渡します。
```scss
// in styles.scss
$my-primary-color:#72da67;
$my-secondary-color: #7344df81;
$my-info-color:rgba(0, 0, 0, 0.54)

$my-color-palette: igx-palette(
    $primary: $my-primary-color,
    $secondary: $my-secondary-color,
    $info: $my-info-color
);
```

カスタム パレットと適用された色を確認するには、これらをテーマ関数に渡す必要があります。
次に[`カスタム テーマを作成`](themes/component-themes.md#テーマの作成)し、定義済みの `igx-expansion-panel-theme` パラメーターに色を渡します。これらの特定のパラメーターを変更してコンポーネントを希望する外観にできると仮定します。以前に作成した[パレット](themes/palette.md)を使用して、定義した色に基づいて新しい色を作成すると非常に便利です。
```scss
// in styles.scss
$custom-panel-theme: igx-expansion-panel-theme(
    $palette: $my-color-palette,
    $header-background: igx-color($my-color-palette, "primary", 200),
    $header-focus-background: igx-color($my-color-palette, "primary", 300),
    $header-title-color: igx-color($my-color-palette, "info"),
    $header-icon-color: igx-color($my-color-palette, "info"),
    $body-background: igx-color($my-color-palette, "secondary", 100),
    $border-radius: 0.35em
);
```

### 適用
あとは新しく作成したテーマを適切にスコープするだけです。

#### グローバル
この新しく作成された `igx-expansion-panel テーマ`をアプリに [`グローバル`](themes/component-themes.md#テーマの作成) に適用する場合、必要なのは、アプリのルート スタイル ファイルにテーマを含め、[igx-expansion-panel mixin]({environment:sassApiUrl}/index.html#mixin-igx-expansion-panel) に渡すだけです。
```scss
// in styles.scss
// Pass our custom-panel-theme to `igx-expansion-panel` mixin.
@include igx-expansion-panel($custom-panel-theme);
```
#### スコープ
特定の `igx-expansion-panel` をアプリ内で異なるスタイルにしたい場合、`:host`、`::ng-deep` などの Angular 固有の擬似クラス セレクターを使用する必要があります。さらに、上記のすべての手順を `styles.scss` から `component.scss` ファイルに移動する必要があります。 

 >[!NOTE]
 >コンポーネントが[`Emulated`](themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を`ペネトレーション`する必要があります。
 一方、カスタム テーマが他のコンポーネントのに影響しないようにするには、`::ng-deep` の前に `:host` セレクターを含めるようにしてください。

```scss
// in component.scss
:host {
    ::ng-deep {
        // Pass our custom-panel-theme to `igx-expansion-panel` mixin.
        @include igx-expansion-panel($custom-panel-theme);
    }
}
```
### デモのスタイル設定

以下のサンプルで結果を確認できます。
<div class="sample-container loading" style="height: 300px;">
    <iframe id="expansion-styling" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/layouts/expansion-styling" class="lazyload no-theming"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-styling" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

## アニメーションの使用
### 特定のアニメーションの使用
コンポーネントの展開や縮小時にデフォルトのアニメーション以外を使用することも可能です。
上記のように igxExpansionPanel がすでに `app.module.ts` にインポートされていると仮定した場合、カスタム アニメーション設定オブジェクトを作成して igxExpansionPanel で使用するために設定します。[`useAnimation`](https://angular.io/api/animations/useAnimation) メソッドと特定のアニメーションが必要でアニメーションの設定をインポートして次のようなアニメーションの設定を定義します。

```typescript
// in expansion-panel.component.ts
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

    public user = {
        email: "",
        fullName: "",
        phone: ""
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
<igx-expansion-panel [animationSettings] = "animationSettingsCustom" class="content__collapsible">
    <igx-expansion-panel-header [disabled]="false">
        <igx-expansion-panel-title class="sample-title">Personal Information</igx-expansion-panel-title>
        <igx-expansion-panel-icon>
            <igx-icon fontSet="material">{{collapsed() ? 'expand_more':'expand_less'}}</igx-icon>
        </igx-expansion-panel-icon>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body class="body">
        <igx-input-group class="group">
            <input igxInput name="fullName" type="text" [(ngModel)]="user.fullName"/>
            <label igxLabel for="fullName">Full Name</label>
            <igx-suffix>
                <igx-icon>person</igx-icon>
            </igx-suffix>
        </igx-input-group>
        <igx-input-group class="group">
            <igx-prefix>+359</igx-prefix>
            <label igxLabel for="phone">Phone</label>
            <input igxInput name="phone" type="text" [(ngModel)]="user.phone" />
            <igx-suffix>
                <igx-icon>phone</igx-icon>
            </igx-suffix>
            <igx-hint position="start">Ex.: +359 555 123 456</igx-hint>
        </igx-input-group>
        <igx-input-group class="group">
            <label igxLabel for="email">Email address</label>
            <input igxInput name="email" type="email" [(ngModel)]="user.email"/>
            <igx-suffix>
                <igx-icon>email</igx-icon>
            </igx-suffix>
        </igx-input-group>
    </igx-expansion-panel-body>
</igx-expansion-panel>
...
```

以下は結果です。
<div class="sample-container loading" style="height: 350px;">
    <iframe id="expansion-sample-6-sample" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/layouts/expansion-sample-6" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-6-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

### 複数パネルの場合
以下の例は、アプリのようなシナリオを実装します。ユーザーの詳細を表示または要求するような特定のワークフローに従います。このサンプルでは、​​ビルトイン アニメーション スイートのデフォルトの `growVerIn` と `growVerOut` アニメーションが使用されるため、特定のアニメーション設定を渡したり、アニメーションをインポートしたりする必要はありません。複数の `igxExpansionPanel` は一度に展開して [`onInteraction`]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html#oninteraction) イベントを処理することはできません。

```typescript
// in expansion-panel.component.ts
import { Component, QueryList, ViewChildren } from "@angular/core";
import { IgxExpansionPanelComponent } from "igniteui-angular";

@Component({
    ...
})
export class ExpansionPanelComponent {
    @ViewChildren(IgxExpansionPanelComponent)
    public accordion: QueryList<IgxExpansionPanelComponent>;

    public user = {
        email: "",
        fullName: "",
        phone: ""
    };

    public billingAddress = {
        address: "",
        city: "",
        state: "",
        zipCode: ""
    };

    public shippingAddress = {
        address: "",
        city: "",
        state: "",
        zipCode: ""
    };

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
...
<igx-expansion-panel class="content__collapsible">
    <igx-expansion-panel-header (onInteraction)="onInteraction($event)" [disabled]="false">
        <igx-expansion-panel-title class="sample-title">Personal Information</igx-expansion-panel-title>
        <igx-expansion-panel-icon>
            <igx-icon fontSet="material">{{collapsed(0) ? 'expand_more':'expand_less'}}</igx-icon>
        </igx-expansion-panel-icon>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body class="body">
        <igx-input-group class="group">
            <input igxInput name="fullName" type="text" [(ngModel)]="user.fullName"/>
            <label igxLabel for="fullName">Full Name</label>
            <igx-suffix>
                <igx-icon>person</igx-icon>
            </igx-suffix>
        </igx-input-group>
        <igx-input-group class="group">
            <igx-prefix>+359</igx-prefix>
            <label igxLabel for="phone">Phone</label>
            <input igxInput name="phone" type="text" [(ngModel)]="user.phone" />
            <igx-suffix>
                <igx-icon>phone</igx-icon>
            </igx-suffix>
            <igx-hint position="start">Ex.: +359 555 123 456</igx-hint>
        </igx-input-group>
        <igx-input-group class="group">
            <label igxLabel for="email">Email address</label>
            <input igxInput name="email" type="email" [(ngModel)]="user.email"/>
            <igx-suffix>
                <igx-icon>email</igx-icon>
            </igx-suffix>
        </igx-input-group>
    </igx-expansion-panel-body>
</igx-expansion-panel>

<igx-expansion-panel class="content__collapsible">
    <igx-expansion-panel-header (onInteraction)="onInteraction($event)" [disabled]="false">
        <igx-expansion-panel-title class="sample-title">Billing Address</igx-expansion-panel-title>
        <igx-expansion-panel-icon>
            <igx-icon fontSet="material">{{collapsed(1) ? 'expand_more':'expand_less'}}</igx-icon>
        </igx-expansion-panel-icon>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body class="body">
        <igx-input-group class="group">
            <input igxInput name="address" type="text" [(ngModel)]="shippingAddress.address"/>
            <label igxLabel for="address">Billing Address:</label>
            <igx-suffix>
                <igx-icon>add_location</igx-icon>
            </igx-suffix>
        </igx-input-group>
        <igx-input-group class="group">
            <label igxLabel for="city">City:</label>
            <input igxInput name="city" type="text" [(ngModel)]="shippingAddress.city"/>
            <igx-suffix>
                <igx-icon>location_city</igx-icon>
            </igx-suffix>
        </igx-input-group>
        <igx-input-group class="group">
            <label igxLabel for="state">State:</label>
            <input igxInput name="state" type="text" [(ngModel)]="shippingAddress.state"/>
            <igx-suffix>
                <igx-icon>terrain</igx-icon>
            </igx-suffix>
        </igx-input-group>
        <igx-input-group class="group">
            <label igxLabel for="zipCode">Zip Code:</label>
            <input igxInput name="zipCode" type="text" [(ngModel)]="shippingAddress.zipCode">
            <igx-suffix>
                <igx-icon>mail_outline</igx-icon>
            </igx-suffix>
        </igx-input-group>
    </igx-expansion-panel-body>
</igx-expansion-panel>

<igx-expansion-panel class="content__collapsible">
    <igx-expansion-panel-header (onInteraction)="onInteraction($event)" [disabled]="false">
        <igx-expansion-panel-title class="sample-title">Shipping Address</igx-expansion-panel-title>
        <igx-expansion-panel-icon>
            <igx-icon fontSet="material">{{collapsed(2) ? 'expand_more':'expand_less'}}</igx-icon>
        </igx-expansion-panel-icon>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body class="body">
        <igx-input-group class="group">
            <input igxInput name="address" type="text" [(ngModel)]="billingAddress.address"/>
            <label igxLabel for="address">Shipping Address:</label>
            <igx-suffix>
                <igx-icon>add_location</igx-icon>
            </igx-suffix>
        </igx-input-group>
        <igx-input-group class="group">
            <label igxLabel for="city">City:</label>
            <input igxInput name="city" type="text" [(ngModel)]="billingAddress.city"/>
            <igx-suffix>
                <igx-icon>location_city</igx-icon>
            </igx-suffix>
        </igx-input-group>
        <igx-input-group class="group">
            <label igxLabel for="state">State:</label>
            <input igxInput name="state" type="text" [(ngModel)]="billingAddress.state"/>
            <igx-suffix>
                <igx-icon>terrain</igx-icon>
            </igx-suffix>
        </igx-input-group>
        <igx-input-group class="group">
            <label igxLabel for="zipCode">Zip Code:</label>
            <input igxInput name="zipCode" type="text" [(ngModel)]="billingAddress.zipCode">
            <igx-suffix>
                <igx-icon>mail_outline</igx-icon>
            </igx-suffix>
        </igx-input-group>
    </igx-expansion-panel-body>
</igx-expansion-panel>
...
```
以下は結果です。
<div class="sample-container loading" style="height: 550px;">
    <iframe id="expansion-sample-5-sample" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/layouts/expansion-sample-5" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-5-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

## 天気予報のサンプル
以下は、[`IgxExpansionPanelComponent`]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html) を [`IgxCard`](card.md) や [`IgxIcon`](icon.md) などの他のいくつかのコンポーネントと組み合わせて使用​​して、特定のタスクを実現することを示しています。ここでは、今日の気温や天気の状態、更に予報の詳細を表示する天気のコンポーネントを作成します。必要に応じてユーザーが更に展開でき、次の数日間の天気を表示できます。

```typescript
// in weather-forecast.component.ts
import { Component, ViewChild } from "@angular/core";
import { IgxExpansionPanelComponent } from "igniteui-angular";
import { data as weatherData } from "./weather-data";

@Component({
    ...
})
export class WeatherForecast {

    @ViewChild(IgxExpansionPanelComponent)
    public panel: IgxExpansionPanelComponent;
    public data = weatherData;

    public toggleDetails() {
        this.panel.toggle();
    }
}
```

```html
<!-- in weather-forecast.component.html -->
<div class="sample-wrapper">
  <igx-card>
    <igx-card-header>
      <h3 class="igx-card-header__title">{{data.city}}</h3>
      <h5 class="igx-card-header__subtitle">{{data.dateTime}}, {{data.today.description}}</h5>
    </igx-card-header>
    <igx-card-content>
      <div class="weather__main" *ngIf=data>
        <div class="weather__main-temp">
          <div>{{data.today.tempMax}}Â°<sup>C</sup></div>
          <div class="right"><igx-icon color="orange" fontSet="fas" name="fa-sun"></igx-icon></div>
        </div>
        <div class="weather__main-hum">
          <div><igx-icon color="blue" fontSet="fas" name="fa-umbrella"></igx-icon>{{data.precipitation}} Precipitation </div>
          <div class="right"><igx-icon color="aqua-blue" fontSet="fas" name="fa-tint"></igx-icon>{{data.humidity}} Humidity </div>
        </div>
      </div>
      <button igxButton igxRipple (click)="toggleDetails()">Forecast Details</button>
      <igx-expansion-panel>
        <igx-expansion-panel-body>
          <div class="forecast__container" *ngIf=data>
            <div *ngFor="let day of data.daysOfWeek" class="forecast__day">
              <div>{{day.name}}</div>
              <div class="right">
                <igx-icon [color]="day.iconColor" fontSet="fas" [name]="day.iconName" font-size="1em"></igx-icon>
                {{day.tempMin}}Â°/{{day.tempMax}}Â°
              </div>
            </div>
          </div>
        </igx-expansion-panel-body>
      </igx-expansion-panel>
    </igx-card-content>
  </igx-card>
</div>
```

```typescript
// in weather-data.ts
export const data = {
  city: "Sofia",
  humidity: "44%",
  precipitation: "5%",
  windSpeed: 279,
  dateTime: "10/7/2018, 14:35:00 PM",
  today: {
    name: "Sunday",
    tempMax: 25,
    tempMin: 15,
    description: "Sunday",
    iconColor: "gray",
    iconName: "fa-cloud"
  },
  daysOfWeek: [
    {
      name: "Monday",
      tempMax: 22,
      tempMin: 15,
      description: "Sunny",
      iconColor: "orange",
      iconName: "fa-sun"
    },
    //...
  ]
};
```

以下は結果です。
<div class="sample-container loading" style="height: 600px;">
    <iframe id="expansion-sample-7-sample" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/layouts/expansion-sample-7" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-7-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

## API リファレンス
* [IgxExpansionPanel API]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html)
* [IgxExpansionPanelHeader API]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html)
* [IgxExpansionPanelBody API]({environment:angularApiUrl}/classes/igxexpansionpanelbodycomponent.html)
* [IgxExpansionPanel スタイル]({environment:sassApiUrl}/index.html#mixin-igx-expansion-panel)
