---
title: Month Picker コンポーネント
_description: Angular Month Picker コンポーネントは、カレンダー ビューで年や月を簡単で直感的な選択できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Month Picker コンポーネント, Angular Month Picker コントロール
_language: ja
---

## Month Picker
<p class="highlight">
    Angular Month Picker コンポーネントは、カレンダー ビューで年や月を簡単で直感的な選択できます。コンポーネントは、単一選択、表示形式のカスタマイズ、ローカライゼーションをサポートします。
</p>

### Month Picker デモ
<div class="sample-container loading" style="height: 620px">
    <iframe id="monthpicker-sample-1-iframe" src='{environment:demosBaseUrl}/scheduling/monthpicker-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="monthpicker-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="monthpicker-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

### 使用方法

はじめに、**app.module.ts** ファイルに  `IgxCalendarModule` をインポートします。注: タッチ操作のために、[`IgxCalendar`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) は **BrowserAnimationsModule** と **HammerModule** に依存関係があり、これらも AppModule に追加する必要があります。

```typescript
// app.module.ts
...
import { HammerModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxCalendarModule } from 'igniteui-angular';
@NgModule({
    ...
    imports: [..., BrowserAnimationsModule, HammerModule, IgxCalendarModule],
    ...
})
export class AppModule {}
```

カレンダー API の型を宣言する前に [`IgxMonthPickerComponent`]({environment:angularApiUrl}/classes/igxmonthpickercomponent.html) を AppComponent ファイルにインポートします。エディターが自動的にインポートすることが可能です。

```typescript
import { IgxMonthPickerComponent } from "igniteui-angular";
...

@ViewChild('monthPicker', { read: IgxMonthPickerComponent }) public monthPicker: IgxMonthPickerComponent;
```

> [!NOTE]
> [`IgxMonthPickerComponent`]({environment:angularApiUrl}/classes/igxmonthpickercomponent.html) が日付のローカライズおよび書式設定のために [Intl](https://developer.mozilla.org/ja-jp/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat) を使用します。
> 対象プラットフォームがその API をサポートしない場合、[適切なポリフィル](https://github.com/andyearnshaw/Intl.js/)を使用してください。

マンスピッカーの追加は、以下のコードを使用してください。

```html
<!-- month-picker-sample.component.html -->

<igx-month-picker></igx-month-picker>
```

#### 日付の設定
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

#### 書式設定
[`formatOptions`]({environment:angularApiUrl}/classes/igxmonthpickercomponent.html#formatoptions) 入力を使用してマンスピッカーの表示形式を変更します。

```html
<!-- month-picker-sample.component.html -->

<igx-month-picker [(ngModel)]="date" [formatOptions]="numericFormatOptions"></igx-month-picker>
```

```typescript
// month-picker-sample.component.ts

public date: Date = new Date();
public numericFormatOptions = {
        month: "2-digit"
};
```

#### ローカライズ
[`locale`]({environment:angularApiUrl}/classes/igxmonthpickercomponent.html#locale) 入力を使用してマンスピッカーのローカライズをカスタマイズします。

```html
<!-- month-picker-sample.component.html -->

<igx-month-picker [(ngModel)]="date" [locale]="locale" [formatOptions]="formatOptions"></igx-month-picker>
```

```typescript
// month-picker-sample.component.ts

public date: Date = new Date();
public locale: "fr";
public formatOptions = {
        month: "long"
};
```

Month Picker コンポーネントのローカライズとスタイル設定の例:
<div class="sample-container loading" style="height: 680px">
    <iframe id="monthpicker-sample-3-iframe" data-src='{environment:demosBaseUrl}/scheduling/monthpicker-sample-3' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="monthpicker-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="monthpicker-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

### キーボード ナビゲーション
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
    - <kbd>Right</kbd> または <kbd>Left</kbd> は前の年または次の年のビューへスクロールします。

- 月ビュー内の月のフォーカス時: 
    - 矢印キーで月を移動します。
    - <kbd>Home</kbd> キーは月ビューの最初の月にフォーカスします。
    - <kbd>End</kbd> キーは月ビューの最後の月にフォーカスします。
    - <kbd>Enter</kbd> キーは現在フォーカスされた月を選択してビューを閉じ
    - <kbd>Tab</kbd> キーは月を移動します。

### スタイル設定
Month Picker のスタイル設定を始めるには、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 
Month Picker はカレンダーのテーマを使用するため、[`igx-calendar-theme`]({environment:sassApiUrl}/index.html#function-igx-calendar-theme) を拡張する新しいテーマを作成し、そのパラメーターを使用して Month Picker の項目をスタイル設定します。

```scss
$my-calendar-theme: igx-calendar-theme(
  $border-radius: 15px,
  $content-background: #011627,
  $picker-background-color: #011627,
  $month-current-text-color: #ECAA53,
  $month-hover-background: #ECAA53,
  $year-current-text-color: #ECAA53,
  $year-hover-text-color: #D37B08,
  $picker-arrow-color: #ECAA53,
  $picker-text-hover-color: #D37B08,
  $picker-arrow-hover-color: #D37B08,
  $picker-text-color: #ECAA53
);
```

#### テーマを含む

<div class="divider"></div>

次にコンポーネントのテーマをアプリケーションに含めます。

`$legacy-support` が `true` に設定されている場合、**コンポーネントのテーマ**を以下のように含めます。

```scss
 @include igx-calendar($my-calendar-theme);
```
>[!NOTE]
>コンポーネントが [`Emulated`](./themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

```scss
:host {
     ::ng-deep {
        @include igx-calendar($my-calendar-theme);
    }
}
```

<div class="divider"></div>

`$legacy-support` が `false` (デフォルト) に設定されている場合、**css 変数** を以下のように含めます。

```scss
@include igx-css-vars($my-calendar-theme);
```

>[!NOTE]
>コンポーネントが [`Emulated`](./themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合においても、変数をオーバーライドするにはグローバル セレクターが必要なため、`:host` を使用する必要があります。

```scss
:host {
    @include igx-css-vars($my-calendar-theme);
}
```

すべて設定できると、結果は以下のようになります。

#### デモ

<div class="sample-container loading" style="height: 600px">
    <iframe id="monthpicker-styling-iframe" data-src='{environment:demosBaseUrl}/scheduling/monthpicker-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="monthpicker-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="monthpicker-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

### API リファレンス
<div class="divider--half"></div>

* [IgxMonthPickerComponent]({environment:angularApiUrl}/classes/igxmonthpickercomponent.html)
* [IgxCalendarComponent]({environment:angularApiUrl}/classes/igxcalendarcomponent.html)
* [IgxCalendarComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-calendar-theme)

<div class="divider--half"></div>

### その他のリソース
<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
