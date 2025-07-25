---
title: Angular Banner コンポーネント
_description: Ignite UI for Angular Banner コンポーネントは、簡単に非侵入型メッセージをオプション操作と統合できます。
_keywords: Angular Banner コンポーネント, Angular Banner コントロール, Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, Angular UI コンポーネント
_language: ja
---
# Angular Banner (バナー) コンポーネントの概要
<p class="highlight">Angular Banner コンポーネントは、スナックバーより長い時間の表示でダイアログより控えめのメッセージを簡単に表示できます。Banner にカスタム動作ボタンやアイコンの表示を設定できます。</p>

## Angular Banner の例

<code-view style="height: 530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/notifications/banner-sample-1" alt="Angular Banner の例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Banner を使用した作業の開始

Ignite UI for Angular Banner コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxBannerModule` をインポートします。

```typescript
// app.module.ts

...
import { IgxBannerModule } from 'igniteui-angular';
// import { IgxBannerModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxBannerModule],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxBannerComponent` をスタンドアロンの依存関係としてインポートすることも、[`IGX_BANNER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/banner/public_api.ts) トークンを使用してコンポーネントとそのすべてのサポート コンポーネントおよびディレクティブをインポートすることもできます。

```typescript
// home.component.ts

...
import { IGX_BANNER_DIRECTIVES } from 'igniteui-angular';
// import { IGX_BANNER_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-banner>
        You are currently offline.
    </igx-banner>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_BANNER_DIRECTIVES]
    /* or imports: [IgxBannerComponent] */
})
export class HomeComponent {}
```

Ignite UI for Angular Banner モジュールまたはディレクティブをインポートしたので、`igx-banner` コンポーネントの基本構成を開始できます。

## Angular Banner コンポーネントの使用

### Banner の表示

Banner コンポーネントを表示するには、ボタン クリックで [`open()`]({environment:angularApiUrl}/classes/igxbannercomponent.html#open) 呼び出します。バナーは、要素がページ テンプレートに挿入された場所にその他すべてのコンテンツを移動して表示されます。通常、閉じるためのユーザー操作をほとんど必要としない非侵入型コンテンツを表示します。 

```html
<!--banner.component.html-->

<igx-icon (click)="connectionBanner.open()">refresh</igx-icon>
...
<igx-banner #connectionBanner>
    You are currently offline.
</igx-banner>

```

> [!NOTE]
> `IgxBannerModule` には、バナーを閉じるデフォルトの `Dismiss` バナーボタンが含まれています。

## 例

[`IgxBannerComponent`]({environment:angularApiUrl}/classes/igxbannercomponent.html) は、マテリアル デザイン バナー ガイドラインにできるかぎり準拠しながらコンテンツをテンプレート化します。

### Banner メッセージの変更

`igx-banner` タグに渡されるコンテンツを変更することによりバナーに表示されるメッセージを設定できます。指定したバナー領域にテキストが表示され、表示時にバナーはデフォルト テンプレートを使用します。以下は、サンプル バナーのコンテンツを変更してより多くの情報を提供します。

```html
<!--banner.component.html-->
<igx-banner #connectionBanner>
    You have lost connection to the internet. This app is offline.
</igx-banner>
```

### アイコンの追加

[`igx-icon`](icon.md) は、バナーのコンテンツに渡すことでバナーに表示できます。Icon は常にバナー メッセージの最初に配置されます。

> [!NOTE]
> 複数の `igx-icon` 要素がバナーの直接の子孫として挿入される場合、バナーはそれらすべてを最初に配置しようとします。`igx-icon` は 1 つのみ、直接渡すことに注意してください。

`igx-icon` をバナーに渡すには、それをバナーのコンテンツに挿入します。

```html
<!--banner.component.html-->
<igx-banner #connectionBanner>
    <igx-icon>signal_wifi_off</igx-icon>
    You have lost connection to the internet. This app is offline.
</igx-banner>
```

バナー メッセージで `igx-icon` を使用する場合、`span` タグでラップしてください。

```html
<!--banner.component.html-->
<igx-banner #connectionBanner>
    You have lost connection to the internet. This app is offline.
    <span>
        <igx-icon>signal_wifi_off</igx-icon>
    </span>
</igx-banner>
```

### バナー ボタンの変更

`IgxBannerModule` は、バナー ボタンをテンプレート化するための [`IgxBannerActionsDirective`]({environment:angularApiUrl}/classes/igxbanneractionsdirective.html) ディレクティブを公開します。このディレクティブはデフォルト バナー ボタン (`Dismiss`) をオーバーライドし、ユーザー定義のカスタム操作を追加します。

```html
<!--banner.component.html-->
<igx-banner #connectionBanner>
    <igx-icon>signal_wifi_off</igx-icon>
    You have lost connection to the internet. This app is offline.
    <igx-banner-actions>
        <button igxButton igxRipple (click)="connectionBanner.toggle()">Toggle Banner</button>
    </igx-banner-actions>
</igx-banner>
```


<code-view style="height: 530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/notifications/banner-sample-2" >
</code-view>


### カスタム アニメーションの適用

Banner コンポーネントには、アニメーションのオープンとクローズのカスタム設定を適用できる [`animationSettings`]({environment:angularApiUrl}/classes/igxbannercomponent.html#animationSettings) プロパティがあります。開発者は、自分で定義したアニメーションと、[`アニメーション スイート`]({environment:sassApiUrl}/animations)のアニメーションから選択できます。バナーで使用されるデフォルト アニメーションは、`growVerIn` が開始、`growVerOut` が終了です。 

スライドインまたはスライドアウトするためにバナーが使用するアニメーションを変更します。

```html
<!--banner.component.html-->
<igx-banner #connectionBanner [animationSettings]="animationSettings">
    ...
</igx-banner>
```

```typescript
// banner.component.ts
import { IgxBannerComponent, slideInLeft, slideOutRight } from 'igniteui-angular'
// import { IgxBannerComponent, slideInLeft, slideOutRight } from '@infragistics/igniteui-angular'; for licensed package
...
export class MyBannerComponent {
    ...
    public animationSettings = {
        openAnimation: slideInLeft,
        closeAnimation: slideOutRight
    }
    ...
}
```


<code-view style="height: 530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/notifications/banner-sample-3" >
</code-view>


### イベントにバインド
Banner コンポーネントは状態の変更時にイベントを発生します。[`opening`]({environment:angularApiUrl}/classes/igxbannercomponent.html#opening) と [`opened`]({environment:angularApiUrl}/classes/igxbannercomponent.html#opened) が Banner が表示される (前と後に) ときに呼び出されます。一方、[`closing`]({environment:angularApiUrl}/classes/igxbannercomponent.html#closing) と [`closed`]({environment:angularApiUrl}/classes/igxbannercomponent.html#closed) は Banner が閉じるときにエミットされます。*ing* イベント (`opening`、`closing`) はキャンセル可能です。`ICancelEventArgs` インターフェイスを使用してオブジェクトは `cancel` プロパティを持ちます。`cancel` プロパティを true に設定します。対応するエンド操作とイベントはトリガーされません。たとえば、`opening` をキャンセルした場合、Banner の `open` メソッドは完了せずに Banner が表示されません。

発生したオブジェクトへバインドしたイベントをキャンセルするために `cancel` プロパティに `true` に設定します。

```html
<!--banner.component.html-->
    <igx-banner #connectionBanner (opening)="handleOpen($event)">
        ...
    </igx-banner>
```
```typescript
// banner.component.ts
...
export class MyBannerComponent {
    ...
    public handleOpen(event) {
        event.cancel = true;
    }
}
```
> [!NOTE]
> 上記が適用されるとオープニング イベントが常にキャンセルされるため、Banner が開くことはありません。

## 高度な例

2 つのカスタムボタンのバナーを作成しましょう。1 つは通知を閉じるためのボタンで、もう 1 つは接続をオンにするためのボタンです。`igx-banner-actions` セレクターを使用してカスタム動作ハンドラーを渡すことができます。

```html
<!--banner.component.html-->
<igx-banner class="offline-banner" #connectionBanner [animationSettings]="animationSettings">
    <igx-icon>signal_wifi_off</igx-icon>
        You have lost connection to the internet. This app is offline.
    <igx-banner-actions>
        <button igxButton igxRipple (click)="connectionBanner.close()">Continue Offline</button>
        <button igxButton igxRipple (click)="wifiState = true">Turn On Wifi</button>
    </igx-banner-actions>
</igx-banner>
```

> [!NOTE]
> Google の [`マテリアル デザイン`](https://material.io/design/components/banners.html#anatomy) ガイドラインでは、バナーに表示するボタンは 2 つまでです。`IgxBannerComponent` は、`igx-banner-actions` タグの要素数を明示的に制限しませんが、マテリアル デザイン ガイドに従う場合は、最大 2 つの要素を使用することを強くお勧めします。

閉じるオプション (`'Continue Offline'`) は詳細なロジックを必要としないため、`close()` のみの呼び出しが可能です。しかし、確認操作 (`'Turn On Wifi'`) は追加のロジックを必要とするため、コンポーネントで定義する必要があります。次に、`onNetworkStateChange` 監視可能な値を作成してサブスクライブします。最後に、変更するたびに `refreshBanner` メソッドを呼び出します。これにより、`wifiState` に基づいてバナーを切り替えます。

バナーのナビゲーション バーに WiFi アイコンが表示されます。`wifiState` が変更されるとサブスクリプションが発生するため、アイコンはバナーを切り替えるだけでなく、接続の状態に基づいて変化します。

```html
<!--banner.component.html-->
<igx-navbar title="Gallery">
    <igx-icon (click)="wifiState = !wifiState">
        {{ wifiState ? 'signal_wifi_4_bar' : 'signal_wifi_off' }}
    </igx-icon>
</igx-navbar>
```

最後に、WiFi の状態に関するメッセージを表示する `toast` を追加します。以下はテンプレート化したバナーのデモです。


<code-view style="height: 530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/notifications/banner-advanced-sample" >
</code-view>


## スタイル設定

はじめに、テーマ エンジンによって公開されている関数を使用するために、スタイル ファイルに index ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最もシンプルな方法として、[`banner-theme`]({environment:sassApiUrl}/themes#function-banner-theme) を拡張し、`$banner-background` のみを指定して新しいテーマを作成します。指定された値に基づき、`$banner-message-color` および `$banner-illustration-color` は背景とのコントラストが高い黒または白に自動的に設定されます。

```scss
$custom-banner-theme: banner-theme(
  $banner-background: #011627,
);
```

>[!NOTE]
>上記のようにカラーの値をハードコーディングする代わりに、[`palette`]({environment:sassApiUrl}/palettes#function-palette) および [`color`]({environment:sassApiUrl}/palettes#function-color) 関数を使用してカラーに関してより高い柔軟性を実現することができます。使い方の詳細については[`パレット`](themes/sass/palettes.md)のトピックをご覧ください。

最後にバナーのカスタム テーマを渡します。

```scss
@include css-vars($custom-banner-theme);
```

<code-view style="height: 530px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/notifications/banner-styling" >
</code-view>


<div class="divider--half"></div>

## API リファレンス
<div class="divider--half"></div>

* [IgxBannerComponent]({environment:angularApiUrl}/classes/igxbannercomponent.html)
* [IgxBannerActionsDirective]({environment:angularApiUrl}/classes/igxbanneractionsdirective.html)
* [IgxBannerComponent スタイル]({environment:sassApiUrl}/themes#function-banner-theme)

その他のコンポーネントおよびディレクティブ (またはそのいずれか) で使用した API:

* [IgxCardComponent]({environment:angularApiUrl}/classes/igxcardcomponent.html)
* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxNavbarComponent]({environment:angularApiUrl}/classes/igxnavbarcomponent.html)
* [IgxToastComponent]({environment:angularApiUrl}/classes/igxtoastcomponent.html)

## テーマの依存関係
* [IgxIcon テーマ]({environment:sassApiUrl}/themes#function-icon-theme)
* [IgxButton テーマ]({environment:sassApiUrl}/themes#function-button-theme)
* [IgxRipple テーマ]({environment:sassApiUrl}/themes#function-ripple-theme)
* [IgxExpansionPanel テーマ]({environment:sassApiUrl}/themes#function-expansion-panel-theme)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)