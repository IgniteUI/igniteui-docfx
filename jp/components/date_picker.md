---
title: Date Picker コンポーネント
_description: Ignite UI for Angular Date Picker コントロールを使用して web アプリケーションにカレンダーから日付を選択する機能を追加できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Date Picker コンポーネント, Angular Date Picker コントロール
_language: ja
---

## Date Picker
<p class="highlight">Ignite UI for Angular Date Picker コンポーネントは、単一の日付選択が可能な月表示カレンダーまたはポップアップ カレンダーを表示します。ロケールおよびカスタム日付書式設定のサポートやコンポーネントに [今日] および [キャンセル] ボタンも表示できます。</p>
<div class="divider"></div>

### Date Picker デモ
<div class="sample-container loading" style="height: 540px;">
    <iframe id="date-picker-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/datepicker-sample-4" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

> [!WARNING]
> Ignite UI for Angular コンポーネントをプロジェクトに追加する前に、すべての必要な依存関係を構成し、プロジェクトのセットアップが正しく完了したことを確認してください。「[**インストール**](https://jp.infragistics.com/products/ignite-ui-angular/getting-started#installation)」のトピックで手順を参照できます。

### 使用方法
[`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) を使用してカレンダーから日付を選択できます。ピッカーは内部で [`IgxCalendarComponent`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) をカレンダーとして使用します。Ignite UI for Angular Date Picker を初期化する前に、**IgxDatePickerModule** を **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import { IgxDatePickerModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxDatePickerModule],
    ...
})
export class AppModule {}
```

テンプレートに日付ピッカーを追加します。

```html
<igx-date-picker></igx-date-picker>
```

以下は結果です。

<div class="sample-container loading" style="height: 540px;">
    <iframe id="date-picker-sample-1" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/datepicker-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-sample-1" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

#### 日付の設定

[`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) に日付を設定するには、[`value`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#value) 入力を設定します。日付を追加します。

```typescript
public date: Date = new Date(Date.now());
```

テンプレートで [`value`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#value) 入力を使用します。

```html
<igx-date-picker [value]="date"></igx-date-picker>
```

以下は結果です。

<div class="sample-container loading" style="height: 540px;">
    <iframe id="date-picker-sample-2" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/datepicker-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-sample-2" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

TwoWay データ バインディングを使用するには、`ngModule` を以下のように使用します。

```html
<igx-date-picker [(ngModel)]="date"></igx-date-picker>
```

#### ボタンの追加

[`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) は、カレンダーからの現在の日を選択する [今日] ボタンをサポートします。[キャンセル] ボタンも有効にできます。テンプレートでボタンを有効にするには、以下のコードを使用します。

```html
<igx-date-picker cancelButtonLabel="cancel" todayButtonLabel="today" [(ngModel)]="date"></igx-date-picker>
```

ボタンが表示されるサンプル:

<div class="sample-container loading" style="height: 580px;">
    <iframe id="date-picker-sample-3" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/datepicker-sample-3" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-sample-3" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

#### カスタム書式設定

デフォルトで日付は設定した [`locale`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#locale) に基づいて書式設定され、カスタム フォーマッタも使用できます。フォーマッタ関数の追加:

```typescript
public date: Date = new Date(Date.now());

private dayFormatter = new Intl.DateTimeFormat("en", { weekday: "long" });
private monthFormatter = new Intl.DateTimeFormat("en", { month: "long" });

public formatter = (date: Date) => {
  return `You selected ${this.dayFormatter.format(date)}, ${date.getDate()} ${this.monthFormatter.format(date)}, ${date.getFullYear()}`;
}
```

次に [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) の [`formatter`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#formatter) 入力を使用します。

```html
<igx-date-picker [value]="date" [formatter]="formatter"></igx-date-picker>
```

書式設定した日付を表示するサンプル:

<div class="sample-container loading" style="height: 540px;">
    <iframe id="date-picker-sample-4" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/datepicker-sample-4" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-sample-4" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

#### 入力グループのテンプレート化

Date Picker の入力グループをカスタマイズできます。デートピッカー内にネストした ng-template を `IgxDatePickerTemplate`ディレクティブでデコレートする必要があります。ng-template コンテキストは、次のメンバーを公開します。`openDialog` メソッドはデートピッカーダイアログに使用できます。[`displayData`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#displaydata)プロパティは書式設定の値を含みます。[`value`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#value) は実際の値を含みます。ng-template 要素で変数を宣言して使用することができます。

以下の例では、デフォルトのラベル "Date" を変更して 2 つ目のアイコンをサフィックスとして追加します。ラベルを使用して実際のデートピッカーの値を表示する入力グループです。

```html
<igx-date-picker [value]="date">
    <ng-template igxDatePickerTemplate let-openDialog="openDialog" let-value="value" let-displayData="displayData">
        <igx-input-group (click)="openDialog()">
            <igx-prefix>
                <igx-icon>favorite</igx-icon>
            </igx-prefix>
            <label igxLabel>My Custom Date<</label>
            <input igxInput [value]="displayData" />
            <igx-suffix>
                <igx-icon>today</igx-icon>
            </igx-suffix>
        </igx-input-group>
        <label>{{value}}</label>
    </ng-template>
</igx-date-picker>
```
```typescript
public date: Date = new Date(Date.now());
```

再テンプレートした入力グループ:
<div class="sample-container loading" style="height: 540px;">
    <iframe id="date-picker-sample-6" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/datepicker-sample-6" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="date-picker-sample-6" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で開く</button>
</div>
<div class="divider--half"></div>

### インターナショナリゼーション

[`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) はロケールをサポートします。[`locale`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#locale) 入力を使用して設定できます。ヘッダー (`igxCalendarHeader`) およびサブヘッダー (`igxCalendarSubheader`) の  [`IgxCalendarComponent`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) テンプレートを使用してヘッダーおよびサブヘッダーの外観を設定できます。このテンプレートを使用する方法の詳細については、`IgxCalendarComponent` [ヘルプ](calendar.md)を参照してください。以下は日本ロケール定義を持つ日付ピッカーです。

```html
<igx-date-picker locale="ja-JP" [value]="date">
  <ng-template igxCalendarHeader let-format>
    {{ format.month.combined | titlecase }}{{format.day.combined }}{{ format.weekday.combined }}
  </ng-template>
  <ng-template igxCalendarSubheader let-format>
    <span class="date__el" (click)="format.yearView()">{{ format.year.combined }}</span>
    <span class="date__el" (click)="format.monthView()">{{ format.month.combined | titlecase }}</span>
  </ng-template>
</igx-date-picker>
```

> [!NOTE]
> Internet Explorer および Edge ブラウザーの場合、両方のブラウザーがこの機能を提供する Intl API を実装しないため、日付部分は空の文字列です。 ([formatToParts](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts) を参照)

このブラウザーをサポートするには、[ngIf](https://angular.io/api/common/NgIf#using-non-inlined-then-template) ディレクティブを使用する代わりのテンプレートを使用します。

```html
<!-- app.component.html-->
<igx-date-picker id="date-picker" locale="ja-JP" [value]="date" #component>
    <div *ngIf="formatParts; else parseTemplate">
        <ng-template igxCalendarHeader let-format>
            {{ format.month.combined | titlecase }} {{ format.day.combined }} {{ format.weekday.combined }}
        </ng-template>
        <ng-template igxCalendarSubheader let-format>
            <span class="date__el" (click)="format.yearView()">{{ format.year.combined }}</span>
            <span class="date__el" (click)="format.monthView()">{{ format.month.combined | titlecase }}</span>
        </ng-template>
    </div>

    <!-- Parse template for browsers not supporting Intl-->
    <ng-template #parseTemplate>
        <ng-template igxCalendarHeader let-format>
            {{ getDatePart(format, component, 'month') | titlecase }} {{ getDatePart(format, component, 'day') }} {{ getDatePart(format, component, 'weekday') }}
        </ng-template>
        <ng-template igxCalendarSubheader let-format>
            <span class="date__el" (click)="format.yearView()">{{ getDatePart(format, component, 'year') }}</span>
            <span class="date__el" (click)="format.monthView()">{{ getDatePart(format, component, 'month') }}</span>
        </ng-template>
    </ng-template>
</igx-date-picker>
```

**ngIf** は、使用するテンプレートを制御するために **formatParts** 式の値を評価します。代わりの **#parseTemplate** テンプレートを参照します。{} にある式は評価された値を返す **getDatePart** メソッドを起動します。この場合、書式設定された日付部分 (年、曜日、月など) を返します。**getDatePart** に渡されたパラメーターは、書式設定が [**IgxDatePickerComponent**]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) の locale および format オプションに基づいて設定されるために必要です。

```typescript
// app.component.ts
public intlDateTimeFormat = new Intl.DateTimeFormat() as any;
public formatParts: boolean = this.intlDateTimeFormat.formatToParts;

public getDatePart(val: any, component: any, datePart: string) {
    const date = val.date as Date;
    const locale = component.locale;
    const formatOptions: Intl.DateTimeFormatOptions = {};
    formatOptions[datePart] = component.formatOptions[datePart];

    return date.toLocaleString(locale, formatOptions);

    // instead of toLocaleString we can use Intl.DateTimeFormat.format as well:
    // const partFormatter = new Intl.DateTimeFormat(locale, formatOptions);
    // return partFormatter.format(date);
}
```


以下は結果です。

<div class="sample-container loading" style="height: 580px;">
    <iframe id="date-picker-sample-5" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/datepicker-sample-5" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-sample-5" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### API
<div class="divider--half"></div>

* [IgxDatePickerComponent]({environment:angularApiUrl}/classes/igxdatepickercomponent.html)
* [IgxDatePickerComponent Styles]({environment:sassApiUrl}/index.html#function-igx-date-picker-theme)
* [IgxCalendarComponent]({environment:angularApiUrl}/classes/igxcalendarcomponent.html)
* [IgxCalendarComponent Styles]({environment:sassApiUrl}/index.html#function-igx-calendar-theme)

<div class="divider--half"></div>

### 追加のリソース
<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
