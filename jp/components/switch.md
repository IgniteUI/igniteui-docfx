---
title: Switch コンポーネント
_description: Ignite UI for Angular Switch コンポーネントはアプリケーションにバイナリ有効/無効または true/false のデータ入力関数を追加します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Switch コンポーネント, Angular Switch コントロール
_language: ja
---

## Switch

<p class="highlight">Ignite UI for Angular Switch コンポーネントは iOS の switch コンポーネントと同様に動作するバイナリ選択コンポーネントです。</p>
<div class="divider"></div>

### Switch デモ

<div class="sample-container loading" style="height:200px">
    <iframe id="form-elements-sample-iframe" src='{environment:demosBaseUrl}/data-entries/switch-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="form-elements-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法

中核となるスイッチ コンポーネントはオン/オフ状態の切り替えが可能です。デフォルト スタイル設定はマテリアル デザイン ガイドラインの選択コントロールの仕様に基づきます。

Ignite UI for Angular Switch を初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールする必要があります。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](general/getting_started.md)トピックををご覧ください。

次に、**app.module.ts** ファイルに `IgxSwitchModule` をインポートします。

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

シンプルなスイッチを作成するには、コンポーネントのテンプレートで以下のコードを追加します。

```html
<igx-switch [checked]="true">
    Simple switch
</igx-switch>
```

以下は結果です。

<div class="sample-container loading" style="height: 150px">
<iframe data-src='{environment:demosBaseUrl}/data-entries/switch-sample-1' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>

#### Switch プロパティ

上記のコードを拡張するには、スイッチ プロパティをデータにバインドします。name および state の 2 つのプロパティを持つ設定オブジェクトの配列があるとしましょう。スイッチ コンポーネントの [`checked`]({environment:angularApiUrl}/classes/igxswitchcomponent.html#checked) プロパティを基本の設定オブジェクトの state プロパティにバインドします。同じように、value プロパティを name にバインドします。

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

結果は以下のようになります。

<div class="sample-container loading" style="height: 200px">
　　　　<iframe data-src='{environment:demosBaseUrl}/data-entries/switch-sample-2' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>

### API リファレンス
<div class="divider--half"></div>

* [IgxSwitchComponent]({environment:angularApiUrl}/classes/igxswitchcomponent.html)
* [IgxSwitchComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-switch-theme)

### その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
