---
title: Switch コンポーネント
_description: Ignite UI for Angular Switch コンポーネントはアプリケーションにバイナリ有効/無効または true/false のデータ入力関数を追加します。
_keywords: Angular Switch コンポーネント, Angular Switch コントロール, Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, Angular UI コンポーネント, ネイティブ Angular コンポーネント ライブラリ
_language: ja
---

# Angular Switch (スイッチ) コンポーネントの概要

<p class="highlight">Ignite UI for Angular Switch コンポーネントは iOS の switch コンポーネントと同様に動作するバイナリ選択コンポーネントです。</p>
<div class="divider"></div>

## Angular Switch の例

<code-view style="height:200px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/switch-sample-1" alt="Angular Switch の例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Switch を使用した作業の開始

Ignite UI for Angular Switch コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxSwitchModule` をインポートします。

```typescript
// app.module.ts

...
import { IgxSwitchModule } from 'igniteui-angular';
// import { IgxSwitchModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxSwitchModule],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxSwitchComponent` をスタンドアロンの依存関係としてインポートできます。

```typescript
// home.component.ts

import { IgxSwitchComponent } from 'igniteui-angular';
// import { IgxSwitchComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
  selector: 'app-home',
  template: ` <igx-switch [checked]="true"> Simple switch </igx-switch> `,
  styleUrls: ['home.component.scss'],
  standalone: true,
  imports: [IgxSwitchComponent],
})
export class HomeComponent {}
```

Ignite UI for Angular Switch モジュールまたはコンポーネントをインポートしたので、`igx-switch` コンポーネントの使用を開始できます。

## Angular Switch の使用

中核となるスイッチ コンポーネントはオン/オフ状態の切り替えが可能です。デフォルトのスタイル設定はマテリアル デザイン ガイドラインの選択コントロールの仕様に基づきます。

デモのようにシンプルなスイッチを作成するには、コンポーネントのテンプレートに以下のコードを追加します。

```html
<igx-switch [checked]="true"> Simple switch </igx-switch>
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

スイッチの [`labelPosition`]({environment:angularApiUrl}/classes/igxswitchcomponent.html#labelPosition) プロパティを使用してラベルを配置できます。

```html
<igx-switch labelPosition="before"></igx-switch>
```

`labelPosition` が設定されていない場合、ラベルはスイッチの後に配置されます。

## スタイル設定

スイッチのスタイル設定を始めるには、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

次に、[`switch-theme`]({environment:sassApiUrl}/themes#function-switch-theme) を拡張して新しいテーマを作成します。`$thumb-off-color` と `$thumb-on-color` の 2 つのパラメーターを指定するだけで、完全なスタイルのスイッチが生成されます。その他のパラメーターをオーバーライドして、外観をさらにカスタマイズすることも可能です。

```scss
$custom-switch-theme: switch-theme(
  $thumb-off-color: #7cadd5,
  $thumb-on-color: #ecaa53,
);
```

最後にコンポーネントのテーマをアプリケーションに**含めます**。

```scss
@include css-vars($custom-switch-theme);
```

### デモ

<code-view style="height: 200px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/switch-styling" >
</code-view>

<div class="divider--half"></div>

## API リファレンス

<div class="divider--half"></div>

* [IgxSwitchComponent]({environment:angularApiUrl}/classes/igxswitchcomponent.html)
* [IgxSwitchComponent スタイル]({environment:sassApiUrl}/themes#function-switch-theme)

## テーマの依存関係

* [IgxRipple テーマ]({environment:sassApiUrl}/themes#function-ripple-theme)

## その他のリソース

<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
