---
title: Switch コンポーネント
_description: Ignite UI for Angular Switch コンポーネントはアプリケーションにバイナリ有効/無効または true/false のデータ入力関数を追加します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Switch コンポーネント, Angular Switch コントロール
_language: ja
---

# Switch
<p class="highlight">Ignite UI for Angular Switch コンポーネントは iOS の switch コンポーネントと同様に動作するバイナリ選択コンポーネントです。</p>
<div class="divider"></div>

## Angular Switch の例

<code-view style="height:200px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/switch-sample-1" alt="Angular Switch の例">
</code-view>

<div class="divider--half"></div>

## 使用方法

中核となるスイッチ コンポーネントはオン/オフ状態の切り替えが可能です。デフォルトのスタイル設定はマテリアル デザイン ガイドラインの選択コントロールの仕様に基づきます。

はじめに、**app.module.ts** ファイルに `IgxSwitchModule` をインポートします。

```typescript
// app.module.ts

...
import { IgxSwitchModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxSwitchModule],
    ...
})
export class AppModule {}
```

デモのようにシンプルなスイッチを作成するには、コンポーネントのテンプレートに以下のコードを追加します。

```html
<igx-switch [checked]="true">
    Simple switch
</igx-switch>
```

### Switch プロパティ

上記のコードを拡張するには、スイッチ プロパティをデータにバインドします。`name` および `state` の 2 つのプロパティを持つ設定オブジェクトの配列があるとしましょう。スイッチ コンポーネントの [`checked`]({environment:angularApiUrl}/classes/igxswitchcomponent.html#checked) プロパティを基礎となるオブジェクトの state プロパティにバインドします。同じように、value プロパティを name にバインドします。

```typescript
// toggle.component.ts
...
  public settings = [
    { name: 'WiFi', state: false},
    { name: 'Bluetooth', state: true},
    { name: 'Device visibility', state: false}
  ];

```
コンポーネント テンプレートに各設定のためのスイッチを追加し、相対するプロパティにバインドします。

```html
<!--toggle.component.html-->

<igx-switch *ngFor="let setting of settings" [checked]="setting.state">
    {{ setting.name }}
</igx-switch>
```

スタイルを追加します。

```scss
:host {
    display: flex;
    flex-flow: column nowrap;
    padding: 16px;
}

igx-switch {
    margin-top: 24px;
}
```

結果は以下のようになります。


<code-view style="height: 200px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/switch-sample-2" >
</code-view>


### ラベル位置

スイッチの [`labelPosition`]({environment:angularApiUrl}/classes/igxswitchcomponent.html#labelposition) プロパティを使用してラベルを配置できます。

```html
<igx-switch labelPosition="before"></igx-switch>
```

`labelPosition` が設定されていない場合、ラベルはスイッチの後に配置されます。

## スタイル設定

スイッチのスタイル設定を始めるには、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

次に、[`igx-switch-theme`]({environment:sassApiUrl}/index.html#function-igx-switch-theme) を拡張する新しいテーマを作成し、そのパラメーターを使用してスイッチの項目をスタイル設定します。

```scss
// in styles.scss
$custom-switch-theme: igx-switch-theme(
    $thumb-on-color: #ECAA53,
    $track-on-color: #F0CB9C
);
```

### テーマを含む

<div class="divider"></div>

最後にコンポーネントのテーマをアプリケーションに含めます。

`$legacy-support` が `true` に設定されている場合、**コンポーネントのテーマ**を以下のように含めます。

```scss
 @include igx-switch($custom-switch-theme);
```
>[!NOTE]
>コンポーネントが [`Emulated`](themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

```scss
:host {
    ::ng-deep {
        @include igx-switch($custom-switch-theme);
    }
}
```

<div class="divider"></div>

`$legacy-support` が `false` (デフォルト) に設定されている場合、**css 変数** を以下のように含めます。

```scss
@include igx-css-vars($custom-switch-theme);
```

>[!NOTE]
>コンポーネントが [`Emulated`](themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合においても、変数をオーバーライドするにはグローバル セレクターが必要なため、`:host` を使用する必要があります。

```scss
:host {
    @include igx-css-vars($custom-switch-theme);
}
```
### デモ


<code-view style="height: 200px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/switch-styling" >
</code-view>


<div class="divider--half"></div>

## API リファレンス
<div class="divider--half"></div>

* [IgxSwitchComponent]({environment:angularApiUrl}/classes/igxswitchcomponent.html)
* [IgxSwitchComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-switch-theme)

## テーマの依存関係
* [IgxRipple Theme]({environment:sassApiUrl}/index.html#function-igx-ripple-theme)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
