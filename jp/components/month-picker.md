---
title: Angular Month Picker コンポーネント – Ignite UI for Angular - MITライセンス
_description: Angular Month Picker コンポーネントは、カレンダー ビューで年や月を簡単で直感的な選択できます。今すぐお試しください。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Month Picker コンポーネント, Angular Month Picker コントロール
_license: MIT
_language: ja
---

# Angular Month Picker (月ピッカー) コンポーネントの概要
<p class="highlight">Angular Month Picker コンポーネントは、カレンダー ビューで年や月を簡単で直感的な選択できます。このコンポーネントを使用すると、その値を日付オブジェクトにバインドでき、月ピッカー コンポーネント UI を通じて日付オブジェクトの月と年の部分を変更できます。ローカリゼーションもサポートします。</p>

## Angular Month Picker の例
こちらに表示されているのは、ユーザーが年と月を選択できるコンポーネントのデフォルト ビューを備えた基本的な Angular Month Picker の例です。

<code-view style="height: 620px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/monthpicker-sample-1/" alt="Angular Month Picker の例">
</code-view>

## Ignite UI for Angular Month Picker を使用した作業の開始

Ignite UI for Angular Month Picker コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

はじめに、**app.module.ts** ファイルに `IgxCalendarModule` をインポートします。 

>[!NOTE]
> [**IgxMonthPickerComponent**]({environment:angularApiUrl}/classes/igxmonthpickercomponent.html) はタッチ操作の [`BrowserAnimationsModule`](https://angular.io/api/platform-browser/animations/BrowserAnimationsModule) と [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) (**オプション**) に依存関係があり、これらも AppModule に追加する必要があります。

```typescript
// app.module.ts
...
import { HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxCalendarModule } from 'igniteui-angular';
// import { IgxCalendarModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., BrowserAnimationsModule, HammerModule, IgxCalendarModule],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxMonthPickerComponent` をスタンドアロンの依存関係としてインポートすることも、[`IGX_CALENDAR_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/calendar/public_api.ts) トークンを使用してコンポーネントとそのすべてのサポート コンポーネントおよびディレクティブをインポートすることもできます。

```typescript
// home.component.ts

import { HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxMonthPickerComponent } from 'igniteui-angular';
// import { IgxMonthPickerComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<igx-month-picker></igx-month-picker>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [BrowserAnimationsModule, HammerModule, IgxMonthPickerComponent]
    /* or imports: [BrowserAnimationsModule, HammerModule, IGX_CALENDAR_DIRECTIVES] */
})
export class HomeComponent {}
```

Ignite UI for Angular Calendar モジュールまたは Month Picker コンポーネントをインポートしたので、`igx-month-picker` コンポーネントの使用を開始できます。

> [!NOTE]
> [`IgxMonthPickerComponent`]({environment:angularApiUrl}/classes/igxmonthpickercomponent.html) が日付のローカライズおよび書式設定のために [Intl](https://developer.mozilla.org/ja-jp/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat) を使用します。
> 対象プラットフォームがその API をサポートしない場合、[適切なポリフィル](https://github.com/andyearnshaw/Intl.js/)を使用してください。

## Angular Month Picker の使用

テンプレートに Angular Month Picker を追加するには、以下のコードを使用してください。

```html
<!-- month-picker-sample.component.html -->

<igx-month-picker></igx-month-picker>
```

### 日付の設定
[`IgxMonthPickerComponent`]({environment:angularApiUrl}/classes/igxmonthpickercomponent.html) に日付を設定するには、[`value`]({environment:angularApiUrl}/classes/igxmonthpickercomponent.html#value) 入力を設定します。

```typescript
// month-picker-sample.component.ts

public date: Date = new Date();
```

```html
<!-- month-picker-sample.component.html -->

<igx-month-picker [value]="date"></igx-date-picker>
```

双方向データ バインディングを作成するには、以下のように `ngModel` を設定します。

```html
<!-- month-picker-sample.component.html -->

<igx-month-picker [(ngModel)]="date"></igx-date-picker>
```

### 書式設定
[`formatOptions`]({environment:angularApiUrl}/classes/igxmonthpickercomponent.html#formatOptions) 入力を使用してマンスピッカーの表示形式を変更します。

```html
<!-- month-picker-sample.component.html -->

<igx-month-picker [(ngModel)]="date" [formatOptions]="numericFormatOptions"></igx-month-picker>
```

```typescript
// month-picker-sample.component.ts

public date: Date = new Date();
public numericFormatOptions = {
    month: '2-digit'
};
```

### ロカリぜーション
[`locale`]({environment:angularApiUrl}/classes/igxmonthpickercomponent.html#locale) 入力を使用して、Ignite UI for Angular Month Picker ローカリゼーションをカスタマイズします。

```html
<!-- month-picker-sample.component.html -->

<igx-month-picker [(ngModel)]="date" [locale]="locale" [formatOptions]="formatOptions"></igx-month-picker>
```

```typescript
// month-picker-sample.component.ts

public date: Date = new Date();
public locale: 'fr';
public formatOptions = {
    month: 'long'
};
```

Month Picker コンポーネントのローカライズとスタイル設定の例:

<code-view style="height: 680px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/monthpicker-sample-3/" >
</code-view>


## キーボード ナビゲーション
- **igxMonthPicker** コンポーネントがフォーカスを持つ場合:
    - <kbd>PageUp</kbd> キーは前の年に移動します。
    - <kbd>PageDown</kbd> キーは次の年に移動します。
    - <kbd>Home</kbd> キーは現在の年の最初の月にフォーカスします。
    - <kbd>End</kbd> キーは現在の年の最初の月にフォーカスします。
    - <kbd>Tab</kbd> キーはサブヘッダー ボタン間を移動します。

- サブヘッダーで `<` (前) または `>` (次) の年ボタンのフォーカス時:
    - <kbd>Space</kbd> または <kbd>Enter</kbd> キーは次または前の年のビューへスクロールします。

- サブヘッダーの年ボタンのフォーカス時: 
    - <kbd>Space</kbd> または <kbd>Enter</kbd> キーは年ビューを開きます。
    - <kbd>右矢印</kbd> または <kbd>左矢印</kbd> は前の年または次の年のビューへスクロールします。

- 月ビュー内の月のフォーカス時: 
    - 矢印キーで月を移動します。
    - <kbd>Home</kbd> キーは月ビューの最初の月にフォーカスします。
    - <kbd>End</kbd> キーは月ビューの最後の月にフォーカスします。
    - <kbd>Enter</kbd> キーは現在フォーカスされた月を選択してビューを閉じ
    - <kbd>Tab</kbd> キーは月を移動します。

### スタイル設定
Month Picker のスタイル設定を始めるには、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

月ピッカーはカレンダーのテーマを使用するため、[`calendar-theme`]({environment:sassApiUrl}/themes#function-calendar-theme) を拡張した新しいテーマを作成する必要があります。月ピッカーの項目にスタイルを設定するには、`$content-background` パラメーターを設定します。オプションで、残りのプロパティをオーバーライドする場合は、`$header-background` を設定することもできます。
これら 2 つのパラメーターはテーマの基礎となり、ホバー、選択、アクティブなどすべての状態に応じた適切な背景の色および前景の色を自動的に生成します。

```scss
$my-calendar-theme: calendar-theme(
  $border-radius: 15px,
  $content-background: #57a5cd,
);
```

次にコンポーネントのテーマをアプリケーションに**含めます**。

```scss
@include css-vars($my-calendar-theme);
```

すべて設定できると、結果は以下のようになります。

### デモ

<code-view style="height: 350px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/monthpicker-styling/" >
</code-view>

### Tailwind によるスタイル設定

カスタム Tailwind ユーティリティ クラスを使用して、`month picker` のスタイルを設定できます。まず [Tailwind を設定して](themes/misc/tailwind-classes.md)ください。

グローバル スタイルシートに Tailwind をインポートした上で、以下のように必要なテーマ ユーティリティを適用します:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

ユーティリティ ファイルには、`light` テーマと `dark` テーマの両方のバリエーションが含まれています。 月ピッカーはカレンダー テーマでスタイルされるため、カレンダーのユーティリティ クラスを使用する必要があります。
- `light-*` クラスはライト テーマ用です。
- `dark-*` クラスはダーク テーマ用です。
- プレフィックスの後にコンポーネント名を追加します (例: `light-calendar`、`dark-calendar`)。

これらのクラスを適用すると、動的なテーマの計算が可能になります。そこから、`任意のプロパティ`を使用して、生成された CSS 変数をオーバーライドできます。コロンの後に、有効な CSS カラー形式 (HEX、CSS 変数、RGB など) を指定します。

プロパティの完全なリストは、[calendar-theme]({environment:sassApiUrl}/themes#function-calendar-theme) で確認できます。構文は次のとおりです:

```html
<igx-month-picker
class="!light-calendar
![--header-background:#4F6A5A]
![--content-background:#A3C7B2]">
</igx-month-picker>
```

>[!NOTE]
>ユーティリティ クラスが優先されるようにするには、感嘆符 (`!`) が必要です。Tailwind はスタイルをレイヤーに適用しますが、これらのスタイルを重要としてマークしないと、コンポーネントのデフォルトのテーマによってオーバーライドしてしまいます。

最終的に、month picker は次のようになります:

<div class="sample-container loading" style="height:400px">
    <iframe id="month-picker-tailwind-style-iframe" data-src='{environment:demosBaseUrl}/scheduling/monthpicker-tailwind-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>


## API リファレンス
<div class="divider--half"></div>

* [IgxMonthPickerComponent]({environment:angularApiUrl}/classes/igxmonthpickercomponent.html)
* [IgxCalendarComponent]({environment:angularApiUrl}/classes/igxcalendarcomponent.html)
* [IgxCalendarComponent スタイル]({environment:sassApiUrl}/themes#function-calendar-theme)


## テーマの依存関係
<div class="divider--half"></div>

* [IgxCalendar テーマ]({environment:sassApiUrl}/themes#function-calendar-theme)
* [IgxIcon テーマ]({environment:sassApiUrl}/themes#function-icon-theme)

## その他のリソース
<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
