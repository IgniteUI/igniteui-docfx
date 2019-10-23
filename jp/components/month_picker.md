---
title: Month Picker コンポーネント
_description: Angular Month Picker コンポーネントは、カレンダー ビューで年や月を簡単で直感的な選択できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Month Picker コンポーネント, Angular Month Picker コントロール
_language: ja
---

## Month Picker
<p class="highlight">Angular Month Picker コンポーネントは、カレンダー ビューで年や月を簡単で直感的な選択できます。コンポーネントは、単一選択、表示形式のカスタマイズ、ローカライゼーションをサポートします。</p>

### Month Picker デモ
<div class="sample-container loading" style="height: 620px">
    <iframe id="monthpicker-sample-1-iframe" src='{environment:demosBaseUrl}/scheduling/monthpicker-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="monthpicker-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

> [!NOTE]
> Ignite UI for Angular コンポーネント、をプロジェクトに追加する前に、必要なすべての依存関係を構成し、プロジェクトのセットアップが正しく完了したことを確認してください。[**インストール**](https://jp.infragistics.com/products/ignite-ui-angular/getting-started#installation)のトピックで手順を確認できます。

### 使用方法
**Ignite UI for Angular Month Picker** を初期化する前に、`IgxCalendarModule` をアプリケーションの AppModule (**app.module.ts** ファイル) にインポートします。注: [**IgxCalendar**]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) に [**IgxCalendar**]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) の依存関係があるため、AppModule にも追加する必要があります。

```typescript
// app.module.ts
...
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxCalendarModule } from 'igniteui-angular';
@NgModule({
    ...
    imports: [..., BrowserAnimationsModule, IgxCalendarModule],
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
[`IgxMonthPickerComponent`]({environment:angularApiUrl}/classes/igxmonthpickercomponent.html) に日付を設定するには、[`value`]({environment:angularApiUrl}/classes/igxcalendarbase.html#value) 入力を設定します。

```typescript
// month-picker-sample.component.ts

public date: Date = new Date(Date.now());
```

```html
<!-- month-picker-sample.component.html -->

<igx-month-picker [value]="date"></igx-date-picker>
```

Two-way データ バインディングを作成するには、以下のように `ngModel` を設定します。

```html
<!-- month-picker-sample.component.html -->

<igx-month-picker [(ngModel)]="date"></igx-date-picker>
```

#### 書式設定
`formatViews` と [`formatOptions`]({environment:angularApiUrl}/classes/igxcalendarbase.html#formatoptions) 入力を使用してマンスピッカーの表示形式を変更します。

```html
<!-- month-picker-sample.component.html -->

<igx-month-picker [(ngModel)]="date" [formatOptions]="numericFormatOptions"></igx-month-picker>
```

```typescript
// month-picker-sample.component.ts

public date: Date = new Date(Date.now());
public numericFormatOptions = {
        month: "2-digit",
        year: "numeric"
};
```

以下は、マンスピッカーのデフォルトの書式オプションを変更する例です。
<div class="sample-container loading" style="height: 600px">
    <iframe id="monthpicker-sample-2-iframe" data-src='{environment:demosBaseUrl}/scheduling/monthpicker-sample-2' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="monthpicker-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

#### ローカライズ
[`locale`]({environment:angularApiUrl}/classes/igxcalendarbase.html#locale) 入力を使用してマンスピッカーのローカライズをカスタマイズします。

```html
<!-- month-picker-sample.component.html -->

<igx-month-picker [(ngModel)]="date" [locale]="locale" [formatOptions]="formatOptions"></igx-month-picker>
```

```typescript
// month-picker-sample.component.ts

public date: Date = new Date(Date.now());
public locale: "fr";
public formatOptions = {
        month: "long",
        year: "numeric"
};
```

マンスピッカー コンポーネントのローカライズの例:
<div class="sample-container loading" style="height: 620px">
    <iframe id="monthpicker-sample-3-iframe" data-src='{environment:demosBaseUrl}/scheduling/monthpicker-sample-3' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
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
    - <kbd>Tab</kbd> key to navigate through the months.

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
