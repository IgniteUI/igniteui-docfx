---
title: Banner コンポーネント
_description: Ignite UI for Angular Banner コンポーネントは、簡単に非侵入型メッセージをオプション操作と統合できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, Native Angular コンポーネント Library, Angular Banner コンポーネント, Angular Banner コントロール
_language: ja
---
# Banner
<p class="highlight">
Ignite UI for Angular Banner コンポーネントは、スナックバーより長い時間の表示でダイアログより控えめのメッセージを簡単に表示できます。Banner にカスタム アクション ボタンやアイコンの表示を設定できます。</p>

## Angular Banner の例


<code-view style="height: 530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/notifications/banner-sample-1" alt="Angular Banner の例">
</code-view>

<div class="divider--half"></div>

## 使用方法

### はじめに

Banner コンポーネントを初期化にするには、まず `IgxBannerModule` を **app.module.ts** ファイルにインポートします。 

```typescript
// app.module.ts

...
import { IgxBannerModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxBannerModule],
    ...
})
export class AppModule {}
```

### Banner の表示

Banner コンポーネントを表示するには、ボタン クリックで [`open()`]({environment:angularApiUrl}/classes/igxbannercomponent.html#open) 呼び出します。バナーは、要素がページ テンプレートに挿入された場所にその他すべてのコンテンツを移動して表示されます。通常、閉じるためのユーザー操作をほとんど必要としない非侵入型コンテンツを表示します。 

```html
<!--banner.component.html-->

<igx-icon (click)="connectionBanner.open()">Refresh</igx-icon>
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

[`Igx-icon`](icon.md) は、バナーのコンテンツに渡すことでバナーに表示できます。Icon は常にバナー メッセージの最初に配置されます。

> [!NOTE]
> 複数の `igx-icon` 要素がバナーの直接の子孫として挿入される場合、バナーはそれらすべてを最初に配置しようとします。`igx-icon` は 1 つのみ、直接渡すことに注意してください。

`igx-icon` をバナーに渡すには、それをバナーのコンテンツに挿入します。

```html
    <!--banner.component.html-->
    <igx-banner #connectionBanner>
        <igx-icon>signal_wifi_off</igx-icon>
        You have lost connection to the internet. This app is offline.
    </igx-banner>
    ...
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
    ...
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

Banner コンポーネントには、アニメーションのオープンとクローズのカスタム設定を適用できる [`animationSettings`]({environment:angularApiUrl}/classes/igxbannercomponent.html#animationsettings) プロパティがあります。開発者は、自分で定義したアニメーションと、[`アニメーションスイート`]({environment:sassApiUrl}/index.html)のアニメーションから選択できます。バナーで使用されるデフォルト アニメーションは、`growVerIn` が開始、`growVerOut` が終了です。 

スライドインまたはスライドアウトするためにバナーが使用するアニメーションを変更します。

```html
<!--banner.component.html-->
    <igx-banner #connectionBanner [animationSettings]="animationSettings">
        ...
    </igx-banner>
    ...
```

```typescript
// banner.component.ts
import { IgxBannerComponent, slideInLeft, slideOutRight } from 'igniteui-angular'
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
Banner コンポーネントは状態の変更時にイベントを発生します。[`onOpening`]({environment:angularApiUrl}/classes/igxbannercomponent.html#onopening) と [`onOpened`]({environment:angularApiUrl}/classes/igxbannercomponent.html#onopened) が Banner が表示される (前と後に) ときに呼び出されます。一方、[`onClosing`]({environment:angularApiUrl}/classes/igxbannercomponent.html#onclosing) と [`onClosed`]({environment:angularApiUrl}/classes/igxbannercomponent.html#onclosed) は Banner が閉じるときにエミットされます。*Ing* イベント (`onOpening`, `onClosing`) はキャンセル可能です。 `ICancelEventArgs` インターフェイスを使用してオブジェクトは `cancel` プロパティを持ちます。`cancel` プロパティを true に設定します。対応するエンド操作とイベントはトリガーされません。たとえば、`onOpening` をキャンセルした場合、Banner の `open` メソッドは完了せずに Banner が表示されません。

発生したオブジェクトへバインドしたイベントをキャンセルするために `cancel` プロパティに `true` に設定します。

```html
<!--banner.component.html-->
    <igx-banner #connectionBanner (onOpening)="handleOpen($event)">
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

2 つのカスタムボタンのバナーを作成しましょう。1 つは通知を閉じるためのボタンで、もう 1 つは接続をオンにするためのボタンです。`igx-banner-actions` セレクターを使用してカスタム アクション ハンドラーを渡すことができます。

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
// in styles.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

最も簡単な方法は、[`igx-banner-theme`]({environment:sassApiUrl}/index.html#function-igx-banner-theme) を拡張する新しいテーマを作成し、`$banner-message-color`、`$banner-background` と `$banner-illustration-color` パラメーターを受け取る方法です。

```scss
$custom-banner-theme: igx-banner-theme(
    $banner-message-color: #151515,
    $banner-background: #dedede,
    $banner-illustration-color: #666666
);
```

### CSS 変数の使用 

最後にバナーのカスタム テーマを渡します。

```scss
@include igx-css-vars($custom-banner-theme);
```

### ミックスインの使用

Internet Explorer 11 などの古いブラウザーのコンポーネントをスタイル設定するには、CSS 変数をサポートしていないため、別のアプローチを用いる必要があります。

コンポーネントが [`Emulated`](./themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。カスタム テーマが他のコンポーネントに影響しないようにするには、`::ng-deep` の前に `:host` セレクターを含めるようにしてください。

```scss
:host {
    ::ng-deep {
        // Pass the custom banner theme to the `igx-banner` mixin
        @include igx-banner($custom-banner-theme);
    }
}
```

### カラー パレットの使用

上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) および [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用して色に関してより高い柔軟性を実現することができます。

`igx-palette` 関数は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$white-color: #dedede;
$black-color: #151515;

$light-banner-palette: igx-palette($primary: $white-color, $secondary: $black-color);
```

次に [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取得できます。 

```scss
$custom-banner-theme: igx-banner-theme(
    $banner-message-color: igx-color($light-banner-palette, "secondary", 400),
    $banner-background: igx-color($light-banner-palette, "primary", 400),
    $banner-illustration-color: igx-color($light-banner-palette, "secondary", 100)
);
```

>[!NOTE]
>`igx-color` と `igx-palette` は色の生成や取得のための関数です。使い方の詳細については [`パレット`](./themes/palette.md) のトピックをご覧ください。

### スキーマの使用

テーマ エンジンを使用して[`スキーマ`](./themes/sass/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。
すべてのコンポーネントに提供されている 2 つの定義済みスキーマ (ここでは [`light-banner`]({environment:sassApiUrl}/index.html#variable-_light-banner)) の 1 つを拡張します。

```scss
//  Extending the banner schema
$light-toast-schema: extend($_light-toast,
    (
        banner-message-color: (
            igx-color: ("secondary", 400)
        ),
        banner-background: (
            igx-color: ("primary", 400)
        ),
        banner-illustration-color: (
            igx-color: ("secondary", 100)
        )
    )
);

// Defining banner with the global light schema
$custom-banner-theme: igx-banner-theme(
  $palette: $light-banner-palette,
  $schema: $light-toast-schema
);
```

上記と同じ方法でテーマを含める必要があることに注意してください。


<code-view style="height: 530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/notifications/banner-styling" >
</code-view>


<div class="divider--half"></div>

## API リファレンス
<div class="divider--half"></div>

* [IgxBannerComponent]({environment:angularApiUrl}/classes/igxbannercomponent.html)
* [IgxBannerActionsDirective]({environment:angularApiUrl}/classes/igxbanneractionsdirective.html)
* [IgxBannerComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-banner-theme)

その他のコンポーネントおよびディレクティブ (またはそのいずれか) で使用した API:

* [IgxCardComponent]({environment:angularApiUrl}/classes/igxcardcomponent.html)
* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxNavbarComponent]({environment:angularApiUrl}/classes/igxnavbarcomponent.html)
* [IgxToastComponent]({environment:angularApiUrl}/classes/igxtoastcomponent.html)

## テーマの依存関係
* [IgxIcon テーマ]({environment:sassApiUrl}/index.html#function-igx-icon-theme)
* [IgxButton テーマ]({environment:sassApiUrl}/index.html#function-igx-button-theme)
* [IgxRipple テーマ]({environment:sassApiUrl}/index.html#function-igx-ripple-theme)
* [IgxExpansionPanel テーマ]({environment:sassApiUrl}/index.html#function-igx-expansion-panel-theme)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)