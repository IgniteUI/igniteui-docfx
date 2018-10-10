---
title: 展開パネル
_description: 2 つのステート (縮小と展開) をサポートする簡単に構成できるコンポーネントです。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ,, Angular 縮小可能なコンポーネント, IgxExpansionPanel, Ignite UI  展開パネル
_language: ja
---

## 展開パネル
<p class="highlight">
[`IgxExpansionPanel`]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html) は軽量なコンポーネントで 2 つのステート (縮小と展開) で描画できます。縮小時はパネルでコンテンツの短い概要を表示します。縮小パネルはマウスクリックで切り替えできます。またはキーボード インタラクションで必要なコンテンツを含むボディを完全に表示します。
</p>
<div class="divider--half"></div>

## 使用方法
### はじめに
`IgxExpansionPanelComponent`]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html) を使用する場合、[**IgxExpansionPanelModule**]({environment:angularApiUrl}/classes/igxexpansionpanelmodule.html) を **app.module** にインポートする必要があります。 
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

次にマークアップの `Igx-expansion-panel` を使用します。展開パネルは以下のようにシンプルな構造です。
- `Igx-expansion-panel` - ヘッダーとボディを格納するコンポーネント ホスト。
    - `igx-expansion-panel-header` - コンポーネントヘッダーを格納。常に表示されます。タイトルと説明、追加のコンテンツを保存します。
        - `igx-expansion-panel-title` - コンポーネントのタイトルを保存します。デフォルトスタイルを持つ。タイトルは常に最初にヘッダー コンテンツに表示されます (`iconPosition === 'left'` の場合はアイコンの後)。Aria ラベルで使用。
        - `igx-expansion-panel-description` - コンポーネントの概要を保存します。短い概要を提供するために使用できます。説明は常にタイトルの後に表示されます (タイトルを設定した場合)。
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
            They are among the smallest of birds, most species measuring 7.5–13 cm (3–5 in) in length.
            Indeed, the smallest extant bird species is a hummingbird, the 5 cm (2.0 in) bee hummingbird weighing less
            than 2.0 g (0.07 oz).
        </p>
        <a href="https://en.wikipedia.org/wiki/Hummingbird" target="_blank">Read more</a>
    </igx-expansion-panel-body>
</igx-expansion-panel>

```
[`IgxExpansionPanelComponent`]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html)  は、コンポーネントにスタイル設定できる [`.igx-expansion-panel`]({environment:sassApiUrl}/index.html#mixin-igx-expansion-panel) クラスを公開します。

```css
<!-- expansion-panel.component.css -->

.igx-expansion-panel {
    font-family: Verdana;
    margin: 24px;
    width: 420px;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, .26), 0 2px 2px 0 rgba(0, 0, 0, .12), 0 3px 1px -2px rgba(0, 0, 0, .08);
}

.igx-expansion-panel__header--expanded {
    border-bottom: 1px dashed rgba(0, 0, 0, .74);
}

.igx-expansion-panel__body > * {
    padding: 8px 16px;
}
```

css クラスの `.igx-expansion-panel__ ヘッダーと `.igx-expansion-panel__body` は、ヘッダーとボディのスタイル設定を公開します。

以下は結果です。 
<div class="sample-container loading" style="height: 400px;">
    <iframe id="expansion-sample-1-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/expansion-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-1-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### プロパティとイベントへバインドします。

ロジックをコンポーネントに追加してパネルの状態に基づいて説明を表示/非表示にします。これには、説明をコントロール [`collapsed`]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html#collapsed) へバインドします。

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
    <iframe id="expansion-sample-2-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/expansion-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-2-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### ヘッダーのスタイル設定
[`IgxExpansionPanelComponent`]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html) は、簡単にカスタマイズできます。
コントロールのトグル状態のデフォルト アイコンをテンプレート化できます。このアイコンの位置は、ヘッダーの開始または終了に設定可能です。非表示にすることもできます。

ヘッダー アイコンの位置設定は、[`iconPosition`]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html#iconposition) input on the `igx-expansion-panel-header` でできます。アイコンの配置に使用可能なオプションは、**left**、**right**、**none** です。次のコード サンプルは、コンポーネントのボタンを右側に設定する方法です。

```html
<!-- in expansion-component.component.html -->
    <igx-expansion-panel>
    ...
        <igx-expansion-panel-header [iconPosition]="'right'">
        </igx-expansion-panel-header>
    </igx-expansion-panel>
```
> [`iconPosition`]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html#iconposition) プロパティは、`RTL` で使用できます。たとえば、**right**に表示するよう設定したアイコンは、RTL 設定時にヘッダーの左端に表示されます。

コンテンツを渡してコントロールで使用するデフォルト アイコンは、[`igx-expansion-panel-icon`]({environment:angularApiUrl}/classes/igxexpansionpanelicondirective.html) タグでをオーバーライドできます。
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
### コンテキストの追加

コンポーネントの [`igx-expansion-panel-body`](({environment:angularApiUrl}/classes/igxexpansionpanelbodycomponent.htm タグはすべてのマークアップを受け取り、`ng-content` プロジェクションですべてを描画します。[`IgxAvatar`]({environment:angularApiUrl}/classes/igxavatarcomponent.html) を使用して展開パネルのインナー コンテンツを更新できます。
はじめに [`IgxAvatarModule`]({environment:angularApiUrl}/classes/igxavatarmodule.html) を **app.module.ts** にインポートします。
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
            most species measuring 7.5–13 cm (3–5 in) in length. Indeed, the smallest extant bird species is a
            hummingbird,
            the 5 cm (2.0 in) bee hummingbird weighing less than 2.0 g (0.07 oz).
        </p>
        <a [href]="readMore" target="_blank">Read more</a>
</igx-expansion-panel-body>
...
```
画像ソースを追加する必要があります。
```typescript
// in expansion-panel.component.html
export class ExpansionPanelComponent {
    ...
    public imgSource = 'https://upload.wikimedia.org/wikipedia/commons/4/46/Purple-throated_carib_hummingbird_feeding.jpg';
}
```
### まとめ
以下は、すべての変更を初期コンポーネントに適用後の最終的な結果です。
<div class="sample-container loading" style="height: 500px;">
    <iframe id="expansion-sample-3-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/expansion-sample-3" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-3-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

`IgxExpansionPanel` コントロールは、すべてのコンテンツの並べ替え[`IgxGrid`]({environment:angularApiUrl}/classes/igxcombocomponent.html)、[`IgxCombo`]({environment:angularApiUrl}/classes/igxcombocomponent.html)、チャート、更に他の展開パネルも描画できます。

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
[**inbuilt suite of animations**]({environment:sassApiUrl}/index.html#animations) の [`slideInLeft`]({environment:sassApiUrl}/index.html#mixin-slide-in-left) と [`slideOutRight`]({environment:sassApiUrl}/index.html#mixin-slide-out-right) アニメーションを使用し、コンポーネントのコンテンツを左側から動的に表示してコンテンツを縮小したときに右側で消えるようにします。既存のパラメーターを使用したい特定のパラメーターでオーバーライドします。

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
    <iframe id="expansion-sample-6-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/expansion-sample-6" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-6-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### 複数パネルの場合
以下の例は、アプリのようなシナリオを実装します。ユーザーの詳細を表示または要求するような特定のワークフローに従います。このサンプルは、インビルト アニメーションのデフォルトの [`growVerIn`]({environment:sassApiUrl}/index.html#mixin-grow-ver-in) と [`growVerOut`]({environment:sassApiUrl}/index.html#mixin-grow-ver-out) アニメーションを使用するため、特定のアニメーション設定を渡したり、アニメーションをインポートしたりする必要はありません。複数の `igxExpansionPanel` は一度に展開して[`onInteraction`]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html#oninteraction) イベントを処理することはできません。

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
    <iframe id="expansion-sample-5-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/expansion-sample-5" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-5-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

## Weather Forecast Sample

The following is an illustration of using the [`IgxExpansionPanelComponent`]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html) in combination with several other components like [`IgxCard`]({environment:angularApiUrl}/classes/igxcardcomponent.html) and [`IgxIcon`]({environment:angularApiUrl}/classes/igxiconcomponent.html) to achieve a particular task. In this case - creating a weather component capable of showing both current day temperature and conditions as well as forecast details. If needed, the user can expand more and see the upcoming days weather conditions.

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
          <div>{{data.today.tempMax}}°<sup>C</sup></div>
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
                {{day.tempMin}}°/{{day.tempMax}}°
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
    <iframe id="expansion-sample-7-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/expansion-sample-7" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-7-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

## API リファレンス
* [IgxExpansionPanel API]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html)
* [IgxExpansionPanelHeader API]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html)
* [IgxExpansionPanelBody API]({environment:angularApiUrl}/classes/igxexpansionpanelbodycomponent.html)
* [IgxExpansionPanel スタイル]({environment:sassApiUrl}/index.html#mixin-igx-expansion-panel)

