---
title: Banner コンポーネント
_description: Ignite UI for Angular Banner コンポーネントは、簡単に非侵入型メッセージをオプション操作と統合できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, Native Angular コンポーネント Library, Angular Banner コンポーネント, Angular Banner コントロール
_language: ja
---
## Banner

<p class="highlight">
Ignite UI for Angular Banner コンポーネントは、スナックバーより長い時間の表示でダイアログより控えめのメッセージを簡単に表示できます。Banner にカスタム アクション ボタンやアイコンの表示を設定できます。</p>
<div class="divider"></div>

### Banner デモ

<div class="sample-container loading" style="height: 400px">
    <iframe id="banner-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/notifications/banner-sample-4" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="banner-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

## 使用方法

Banner コンポーネントを初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールする必要があります。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](general/getting_started.md)トピックををご覧ください。

次に、**app.module.ts** ファイルに `IgxBannerModule` をインポートします。

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
### ベーシック Banner

Banner コンポーネントを表示するには、[`open()`]({environment:angularApiUrl}/classes/igxbannercomponent.html#open) メソッドを呼び出してボタン クリックで呼び出します。Banner メッセージを構成するには、Banner コンテンツ内のテキストを渡します。指定した Banner 領域にテキストが表示され、表示時に Banner はデフォルト テンプレートを使用します。

```html
<!--banner.component.html-->

<igx-banner #connectionBanner>
    You are currently offline.
</igx-banner>
...
<button igxButton="raised" (click)="connectionBanner.toggle()">Toggle Banner</button>
```

Banner は、要素がページ テンプレートに挿入された場所にその他すべてのコンテンツを移動して表示されます。Banner は、閉じるための最小限のユーザー操作 (1-2 クリックなど) を要求する非侵入型コンテンツ表示します。

#### ベーシック Banner デモ

<div class="sample-container loading" style="height: 530px">
    <iframe id="banner-sample-1-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/banner-sample-1" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="banner-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

### Banner のテンプレート化

[`IgxBannerComponent`]({environment:angularApiUrl}/classes/igxbannercomponent.html) は、マテリアル デザイン Banner ガイドラインにできるかぎり準拠しながら簡単にコンテンツをテンプレート化します。

#### Banner メッセージの変更

`igx-banner` タグに渡されるコンテンツを変更して Banner に表示されるメッセージを変更できます。以下は、’Connection' Banner のコンテンツを変更してより多くの情報を提供します。

```html
    <!--banner.component.html-->
    <igx-banner #connectionBanner>
        You have lost connection to the internet. This app is offline.
    </igx-banner>
    ...
    <button igxButton="raised" (click)="connectionBanner.toggle()">Toggle Banner</button>
```

#### アイコンの追加

Banner コンテンツに [`igx-icon`](icon.md) を渡すことができ、常に Banner メッセージの最初に配置されます。

> [!NOTE]
> 複数の `igx-icon` 要素が Banner の直接の子孫として挿入される場合、Banner はそれらすべてを最初に配置しようとします。`igx-icon` は 1 つのみ、直接渡すことに注意してください。Banner メッセージのアイコンを使用する場合、`span` タグでラップしてください。

`Igx-icon` を Banner に渡す場合、`igx-banner` のコンテンツに挿入してください。

```html
    <!--banner.component.html-->
    <igx-banner #connectionBanner>
        <igx-icon>signal_wifi_off</igx-icon>
        You have lost connection to the internet. This app is offline.
    </igx-banner>
    ...
```

#### カスタム Banner ボタンの追加

`IgxBannerModule` は、Banner ボタンをテンプレート化するためのディレクティブ ([`IgxBannerActionsDirective`]({environment:angularApiUrl}/classes/igxbanneractionsdirective.html).) を公開します。このディレクティブを使用してデフォルト Banner ボタン (`Dismiss`) をオーバーライドし、ユーザー定義のカスタム操作を追加します。ほとんどのボタン インタラクションは Banner を閉じることであるため、`click` ハンドラーでBanner の `close()` メソッドを呼び出してください。

> [!NOTE]
> Google の [`マテリアル デザイン` ガイドライン](https://material.io/design/components/banners.html#anatomy) では、Banner に表示するボタンは 2 つまでです。`IgxBannerComponent` は、`igx-banner-actions` タグで 2 要素以上渡すことを明示的に制限**しません**が、マテリアル デザイン ガイドに従うことを推奨します。 

Connection Banner のテンプレート化は、`igx-banner-actions` セレクターを使用するカスタム アクション ハンドラーを渡すことができます。

```html
    <!--banner.component.html-->
    <igx-banner #connectionBanner>
        <igx-icon>signal_wifi_off</igx-icon>
        You have lost connection to the internet. This app is offline.
        <igx-banner-actions>
            <button igxButton igxRipple (click)="connectionBanner.close()">Continue Offline</button>
            <button igxButton igxRipple (click)="wifiState = true">Turn On Wifi</button>
        </igx-banner-actions>
    </igx-banner>
    ...
```

閉じるオプション (`'Continue Offline'`) は詳細なロジックを必要としないため、`connectionBanner.close()` のみの呼び出しが可能です。確認操作 (`‘Turn On Wifi’`) は追加のロジックを必要とするため、コンポーネントで定義します。


```typescript
// banner.component.ts
import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { IgxBannerComponent } from 'igniteui-angular'
...
export class MyBannerComponent implements OnInit, OnDestroy {
    @ViewChild(IgxBannerComponent) public banner: IgxBannerComponent;
    public onNetworkStateChange = new Subject(); // Emits when WiFi state is changed
    private _wifiState = false;
    public get wifiState(): boolean {
        return this._wifiState;
    }
    public set wifiState(v: boolean) {
        this._wifiState = v;
        this.onNetworkStateChange.next();
    }
    ...
    public ngOnInit() { // subscribe to the event;
        this.banner.open();
        this.onNetworkStateChange.subscribe(() => this.refreshBanner()); // call change handler
    }

    public ngOnDestroy(): void { // unsubscribe
        this.onNetworkStateChange.complete();
    }
    ...
    // Define change handler
    public refreshBanner() {
        if (!this.wifiState) {
            this.banner.open();
        } else {
            if (!this.banner.collapsed) {
                this.banner.close();
            }
        }
    }
}
```

サブスクリプションが `wifiState` に対するすべての変更を発生するため、デモ navbar のバナーが WiFi アイコンを使用して切り替えができるようになります。

以下はテンプレート化したバナーのデモです。

#### デモのテンプレート化

<div class="sample-container loading" style="height: 530px">
    <iframe id="banner-sample-2-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/banner-sample-2" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="banner-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

### カスタム アニメーションの適用

Banner コンポーネントは、[`animationSettings`]({environment:angularApiUrl}/classes/igxbannercomponent.html#animationsettings) にカスタム オープンの設定とアニメーションのクローズを許容する `Input` プロパティを公開します。カスタム アニメーションは、ユーザー定義または [`IgniteUI for Angular animation suite`]({environment:sassApiUrl}/index.html) から渡すことができます。Banner で使用されるデフォルト アニメーションは、`growVerIn` が開始、`growVerOut` が終了です。

スライドインするために Banner が使用するアニメーションを変更します。

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

#### アニメーション デモ

<div class="sample-container loading" style="height: 530px">
    <iframe id="banner-sample-3-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/banner-sample-3" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="banner-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

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


## スタイル設定
[Ignite UI for Angular テーマ](themes/index.md)を使用して、**igx-banner** の外観を変更できます。[アニメーション サンプル](#アニメーション-デモ)に基づいて構築し、`igx-banner` コンポーネントを変更して、より際立ったメッセージを作成します。`Igx-banner` には `igx-button` が含まれているため、ボタン自体のスタイリングに固有の詳細については、[igx-button スタイリング ガイド](button.md#スタイル設定)を直接参照できます。

### テーマのインポート
はじめに、テーマ エンジンによって公開されている関数を使用するために、スタイル ファイルに `index` ファイルをインポートする必要があります。 

```scss
// in styles.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

### パレットと色の定義
インデックス ファイルをインポート後、 [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用して、カスタムテーマで使用するいくつかの色変数を定義できます。コンポーネントで使用する 2 色のメイン カラーを指定できる独自のカラー[パレット](themes/palette.md)と組み合わせて、カスタム `igx-banner` スタイルにこれらを使用します。
最初にカスタム パレットを定義し、メイン カラーを渡します。
```scss
// in styles.scss
$my-primary-color:#fde71d;
$my-secondary-color: #C0C0C0;
$my-info-color: #ff0000;

$my-color-palette: igx-palette(
    $primary: $my-primary-color,
    $secondary: $my-secondary-color,
    $info: $my-info-color
);
```

カスタム パレットと適用された色を確認するには、これらをテーマ関数に渡す必要があります。
次に[`カスタム テーマを作成`](themes/component-themes.md#テーマの作成)し、定義済みの多数の `igx-banner-theme パラメーター`に色を渡します。これらの特定のパラメーターを変更してコンポーネントを希望する外観にできると仮定します。以前に作成した[パレット](themes/palette.md)を使用して、定義した色に基づいて新しい色を作成すると非常に便利です。
```scss
// in styles.scss
$custom-banner-theme: igx-banner-theme(
    $palette: $my-color-palette,
    $banner-message-color: igx-color($my-color-palette, "info"),
    $banner-illustration-color: igx-color($my-color-palette, "info"),
    $banner-background: igx-color($my-color-palette, "secondary", 200)
);
```
`igx-banner` は `igx-button` を使用するため、これらもスタイル設定できます。したがって、`igx-banner` トピック外でドロップダウン テーマの全体的なスタイルを補完するために、次のようなカラーパレットを渡すカスタムボタン テーマを作成します。 
```scss
// in styles.scss
$my-button-primary-color:#fde71d;
$my-button-secondary-color: #09f;

$my-button-color-palette: igx-palette(
    $primary: $my-button-primary-color,
    $secondary: $my-button-secondary-color
);
$custom-button-theme: igx-button-theme(
    $palette: $my-button-color-palette
);
```

### 適用
あとは新しく作成したテーマを適切にスコープするだけです。

#### グローバル
新しく作成した `igx-banner` テーマをアプリで[`グローバル`](themes/component-themes.md#テーマの作成)に適用する場合、必要なのはアプリのルート スタイル ファイルにテーマを含めるだけです。
```scss
// in styles.scss
// Pass our banner theme to the `igx-banner` mixin
    @include igx-banner($custom-banner-theme);
// Pass our button theme to the `igx-button` mixin
    @include igx-button($custom-button-theme);
```
#### スコープ
特定の `igx-banner` のスタイルをアプリ内の他のスタイルと異なるようにする必要がある場合があります。これには、`:host`、`::ng-deep` などの Angular 固有の擬似クラス セレクターを使用し、さらに、上記のすべての手順を styles.scss から component.scss ファイルへ移動してください。

 >[!NOTE]
 >コンポーネントが [`Emulated`](themes/component-themes.md#表示のカプセル化)  ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を`ペネトレーション`する必要があります。

一方、カスタム テーマが他のコンポーネントのに影響しないようにするには、`::ng-deep` の前に `:host` セレクターを含めるようにしてください。

```scss
// in component.scss
:host {
    ::ng-deep {
        // Pass our banner theme to the `igx-banner` mixin
        @include igx-banner($custom-banner-theme);
        // Pass our button theme to the `igx-button` mixin
        @include igx-button($custom-button-theme);
    }
}
```
### デモのスタイル設定

<div class="sample-container loading" style="height: 530px">
    <iframe id="banner-styling-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/banner-styling" class="lazyload no-theming"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="banner-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

<div class="divider--half"></div>

## API リファレンス

* [IgxBannerComponent]({environment:angularApiUrl}/classes/igxbannercomponent.html)
* [IgxBannerComponent スタイル]({environment:sassApiUrl}/index.html#mixin-igx-banner)