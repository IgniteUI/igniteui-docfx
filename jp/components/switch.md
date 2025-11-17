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
           iframe-src="{environment:demosBaseUrl}/data-entries/switch-sample-1/" alt="Angular Switch の例">
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
           iframe-src="{environment:demosBaseUrl}/data-entries/switch-sample-2/" >
</code-view>

### ラベル位置

スイッチの [`labelPosition`]({environment:angularApiUrl}/classes/igxswitchcomponent.html#labelPosition) プロパティを使用してラベルを配置できます。

```html
<igx-switch labelPosition="before"></igx-switch>
```

`labelPosition` が設定されていない場合、ラベルはスイッチの後に配置されます。

## スタイル設定

### Switch テーマのプロパティ マップ

プライマリ プロパティを変更すると、関連するすべての依存プロパティが自動的に更新され、変更が反映されます。

<div class="theme-switcher-wrapper">
  <!-- Theme Switcher Radios and Labels -->
  <input type="radio" name="theme" id="material" checked>
  <label for="material" class="switch-label">Material</label>
  <input type="radio" name="theme" id="fluent">
  <label for="fluent" class="switch-label">Fluent</label>
  <input type="radio" name="theme" id="bootstrap">
  <label for="bootstrap" class="switch-label">Bootstrap</label>
  <input type="radio" name="theme" id="indigo">
  <label for="indigo" class="switch-label">Indigo</label>

  <div class="tables">
    <!-- Material Theme Table -->
    <div class="theme-table material">
      <table class="collapsible-table">
        <thead>
          <tr>
            <th>プライマリ プロパティ</th>
            <th>依存プロパティ</th>
            <th>説明</th>
          </tr>
        </thead>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$track-off-color</strong></summary></details></td>
            <td>$thumb-off-color</td>
            <td>スイッチがオフの時のつまみの色</td>
          </tr>
          <tr class="dependent"><td></td><td>$track-disabled-color</td><td>スイッチが無効の時のトラックの色</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$thumb-off-color</strong></summary></details></td>
            <td>$track-off-color</td>
            <td>スイッチがオフの時のトラックの色</td>
          </tr>
          <tr class="dependent"><td></td><td>$thumb-disabled-color</td><td>スイッチが無効の時のつまみの色</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$track-on-color</strong></summary></details></td>
            <td>$thumb-on-color</td>
            <td>スイッチがオンの時のつまみの色</td>
          </tr>
          <tr class="dependent"><td></td><td>$track-on-hover-color</td><td>ホバー時のスイッチのオンの時のトラックの色</td></tr>
          <tr class="dependent"><td></td><td>$track-on-disabled-color</td><td>スイッチがオンおよび無効の時のトラックの色</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$thumb-on-color</strong></summary></details></td>
            <td>$track-on-color</td>
            <td>スイッチがオンの時のトラックの色</td>
          </tr>
          <tr class="dependent"><td></td><td>$thumb-on-disabled-color</td><td>スイッチがオンかつ無効の時のつまみの色</td></tr>
        </tbody>
      </table>
    </div>
    <!-- Fluent Theme Table -->
    <div class="theme-table fluent">
      <table class="collapsible-table">
        <thead>
          <tr>
            <th>プライマリ プロパティ</th>
            <th>依存プロパティ</th>
            <th>説明</th>
          </tr>
        </thead>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$thumb-off-color</strong></summary></details></td>
            <td>$border-color</td>
            <td>つまみのオフ色に由来する境界線の色</td>
          </tr>
          <tr class="dependent"><td></td><td>$thumb-off-hover-color</td><td>ホバー時のスイッチのつまみの色</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$border-color</strong></summary></details></td>
            <td>$thumb-off-color</td>
            <td>境界線の色に由来するつまみのオフ色</td>
          </tr>
          <tr class="dependent"><td></td><td>$border-hover-color</td><td>ホバー時のスイッチの境界線の色</td></tr>
          <tr class="dependent"><td></td><td>$border-disabled-color</td><td>無効なスイッチの境界線の色</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$track-off-color</strong></summary></details></td>
            <td>$thumb-off-color</td>
            <td>トラックのオフ色に由来するつまみのオフ色</td>
          </tr>
          <tr class="dependent"><td></td><td>$border-hover-color</td><td>ホバー時のスイッチの境界線の色</td></tr>
          <tr class="dependent"><td></td><td>$track-disabled-color</td><td>無効なスイッチのトラックの色</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$track-on-color</strong></summary></details></td>
            <td>$thumb-on-color</td>
            <td>スイッチがオンの時のつまみの色</td>
          </tr>
          <tr class="dependent"><td></td><td>$thumb-on-disabled-color</td><td>無効なスイッチのオンの時のつまみの色</td></tr>
          <tr class="dependent"><td></td><td>$border-on-color</td><td>スイッチがオンの時の境界線の色</td></tr>
          <tr class="dependent"><td></td><td>$border-on-hover-color</td><td>ホバー時のスイッチのオンの時の境界線の色</td></tr>
          <tr class="dependent"><td></td><td>$track-on-hover-color</td><td>ホバー時のスイッチのオンの時のトラックの色</td></tr>
          <tr class="dependent"><td></td><td>$track-on-disabled-color</td><td>オンかつ無効の時のトラックの色</td></tr>
        </tbody>
      </table>
    </div>
    <div class="theme-table bootstrap">
      <table class="collapsible-table">
        <thead>
          <tr>
            <th>プライマリ プロパティ</th>
            <th>依存プロパティ</th>
            <th>説明</th>
          </tr>
        </thead>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$thumb-off-color</strong></summary></details></td>
            <td>$border-color</td>
            <td>つまみのオフ色に由来する境界線の色</td>
          </tr>
          <tr class="dependent"><td></td><td>$thumb-off-hover-color</td><td>ホバー時のスイッチのつまみの色</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$border-color</strong></summary></details></td>
            <td>$thumb-off-color</td>
            <td>境界線の色に由来するつまみのオフ色</td>
          </tr>
          <tr class="dependent"><td></td><td>$border-hover-color</td><td>ホバー時のスイッチの境界線の色</td></tr>
          <tr class="dependent"><td></td><td>$border-disabled-color</td><td>無効なスイッチの境界線の色</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$track-off-color</strong></summary></details></td>
            <td>$thumb-off-color</td>
            <td>トラックのオフ色に由来するつまみのオフ色</td>
          </tr>
          <tr class="dependent"><td></td><td>$border-hover-color</td><td>ホバー時のスイッチの境界線の色</td></tr>
          <tr class="dependent"><td></td><td>$track-disabled-color</td><td>無効なスイッチのトラックの色</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$track-on-color</strong></summary></details></td>
            <td>$thumb-on-color</td>
            <td>スイッチがオンの時のつまみの色</td>
          </tr>
          <tr class="dependent"><td></td><td>$thumb-on-disabled-color</td><td>無効なスイッチのオンの時のつまみの色</td></tr>
          <tr class="dependent"><td></td><td>$border-on-color</td><td>スイッチがオンの時の境界線の色</td></tr>
          <tr class="dependent"><td></td><td>$border-on-hover-color</td><td>ホバー時のスイッチのオンの時の境界線の色</td></tr>
          <tr class="dependent"><td></td><td>$track-on-hover-color</td><td>ホバー時のスイッチのオンの時のトラックの色</td></tr>
          <tr class="dependent"><td></td><td>$track-on-disabled-color</td><td>オンかつ無効の時のトラックの色</td></tr>
          <tr class="dependent"><td></td><td>$focus-fill-color</td><td>フォーカス時のスイッチの塗りつぶし色</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$focus-fill-color</strong></summary></details></td>
            <td>$focus-outline-color</td>
            <td>フォーカス時の塗りつぶし色に由来するアウトラインの色</td>
          </tr>
          <tr class="dependent"><td></td><td>$focus-fill-hover-color</td><td>ホバー時のスイッチのフォーカス時の塗りつぶし色</td></tr>
        </tbody>
      </table>
    </div>
    <div class="theme-table indigo">
      <table class="collapsible-table">
        <thead>
          <tr>
            <th>プライマリ プロパティ</th>
            <th>依存プロパティ</th>
            <th>説明</th>
          </tr>
        </thead>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$thumb-off-color</strong></summary></details></td>
            <td>$border-color</td>
            <td>つまみのオフ色に由来する境界線の色</td>
          </tr>
          <tr class="dependent"><td></td><td>$thumb-off-hover-color</td><td>ホバー時のスイッチのつまみの色</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$border-color</strong></summary></details></td>
            <td>$thumb-off-color</td>
            <td>境界線の色に由来するつまみのオフ色</td>
          </tr>
          <tr class="dependent"><td></td><td>$border-hover-color</td><td>ホバー時のスイッチの境界線の色</td></tr>
          <tr class="dependent"><td></td><td>$border-disabled-color</td><td>無効なスイッチの境界線の色</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$track-off-color</strong></summary></details></td>
            <td>$thumb-off-color</td>
            <td>トラックのオフ色に由来するつまみのオフ色</td>
          </tr>
          <tr class="dependent"><td></td><td>$border-hover-color</td><td>ホバー時のスイッチの境界線の色</td></tr>
          <tr class="dependent"><td></td><td>$track-disabled-color</td><td>無効なスイッチのトラックの色</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$track-on-color</strong></summary></details></td>
            <td>$thumb-on-color</td>
            <td>スイッチがオンの時のつまみの色</td>
          </tr>
          <tr class="dependent"><td></td><td>$thumb-on-disabled-color</td><td>無効なスイッチのオンの時のつまみの色</td></tr>
          <tr class="dependent"><td></td><td>$border-on-color</td><td>スイッチがオンの時の境界線の色</td></tr>
          <tr class="dependent"><td></td><td>$track-on-hover-color</td><td>ホバー時のスイッチのオンの時のトラックの色</td></tr>
          <tr class="dependent"><td></td><td>$track-on-disabled-color</td><td>オンかつ無効の時のトラックの色</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$border-on-color</strong></summary></details></td>
            <td>$border-on-hover-color</td>
            <td>ホバー時のスイッチのオンの時の境界線の色</td>
          </tr>
          <tr class="dependent">
            <td></td><td>$focus-outlined-color-focused</td><td>フォーカス時のスイッチのフォーカスアウトラインの色</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>


スイッチのスタイル設定を始めるには、すべてのテーマ関数とコンポーネント mixins が存在する `index` ファイルをインポートする必要があります。

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

最後に、カスタム テーマをアプリケーションに**含めます**。

```scss
@include css-vars($custom-switch-theme);
```

以下のサンプルでは、カスタマイズした CSS 変数を使用したスイッチ コンポーネントが、[`SAP UI5`](https://ui5.sap.com/#/entity/sap.m.Switch/sample/sap.m.sample.Switch) デザイン システムのスイッチに視覚的に似たデザインを実現している様子を確認できます。

<code-view style="height: 200px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/switch-styling/" >
</code-view>

### Tailwind によるスタイル設定

カスタム Tailwind ユーティリティ クラスを使用して switch をスタイル設定できます。まず [Tailwind を設定して](themes/misc/tailwind-classes.md)ください。

グローバル スタイルシートに Tailwind をインポートした上で、以下のように必要なテーマ ユーティリティを適用します:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

ユーティリティ ファイルには、`light` テーマと `dark` テーマの両方のバリエーションが含まれています。

- `light-*` クラスはライト テーマ用です。
- `dark-*` クラスはダーク テーマ用です。
- プレフィックスの後にコンポーネント名を追加します (例: `light-switch`、`dark-switch`)。

これらのクラスを適用すると、動的なテーマの計算が可能になります。そこから、`任意のプロパティ`を使用して、生成された CSS 変数をオーバーライドできます。コロンの後に、有効な CSS カラー形式 (HEX、CSS 変数、RGB など) を指定します。

プロパティの完全なリストは、[IgxSwitch テーマ]({environment:sassApiUrl}/themes#function-switch-theme) で確認できます。構文は次のとおりです:

```html
<igx-switch
  class="!light-switch ![--thumb-on-color:#FF4E00]"
  [checked]="true">
  ...
</igx-switch>
```

>[!NOTE]
>ユーティリティ クラスが優先されるようにするには、感嘆符 (`!`) が必要です。Tailwind はスタイルをレイヤーに適用しますが、これらのスタイルを重要としてマークしないと、コンポーネントのデフォルトのテーマによってオーバーライドしてしまいます。

最終的に、switch は次のようになります:

<div class="sample-container loading" style="height:200px">
    <iframe id="switch-tailwind-styling-iframe" data-src='{environment:demosBaseUrl}/data-entries/switch-tailwind-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

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
