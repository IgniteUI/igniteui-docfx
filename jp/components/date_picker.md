---
title: Date Picker コンポーネント
_description: Ignite UI for Angular Date Picker コントロールを使用して web アプリケーションにカレンダーから日付を選択する機能を追加できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Date Picker コンポーネント, Angular Date Picker コントロール
_language: ja
---

## Date Picker
<p class="highlight">The Ignite UI for Angular Date Picker component displays a month-view calendar or a pop-up calendar that lets users pick a single date. It supports locales and custom date formatting. The component can display a today and cancel buttons.</p>
<div class="divider"></div>

### Date Picker Demo
<div class="sample-container loading" style="height: 540px;">
    <iframe id="date-picker-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/datepicker-sample-4" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="date-picker-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

> [!WARNING]
> To start using Ignite UI for Angular components in your own projects, make sure you have configured all necessary dependencies and have performed the proper setup of your project. You can learn how to do this in the [**installation**](https://www.infragistics.com/products/ignite-ui-angular/getting-started#installation) topic.

### Usage
The `IgxDatePickerComponent` allows you to pick a date from a calendar. The picker uses the `IgxCalendarComponent` internally as a calendar. To get started with the Ignite UI for Angular Date Picker, let's first import the **IgxDatePickerModule** in our **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxDatePickerModule } from 'igniteui-angular/main';

@NgModule({
    ...
    imports: [..., IgxDatePickerModule],
    ...
})
export class AppModule {}
```

Then in our template we place the date picker:

```html
<igx-datePicker></igx-datePicker>
```

The result is as follows:
<div class="sample-container loading" style="height: 540px;">
    <iframe id="date-picker-sample-1" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/datepicker-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="date-picker-sample-1" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Setting date
We could set a date to our `IgxDatePickerComponent` using the `value` input. Just add a date:

```typescript
public date: Date = new Date(Date.now());
```

Then use the `value` input in the template:

```html
<igx-datePicker [value]="date"></igx-datePicker>
```

And there we have it:
<div class="sample-container loading" style="height: 540px;">
    <iframe id="date-picker-sample-2" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/datepicker-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="date-picker-sample-2" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

If we want to use a two-way data-binding, we could just use `ngModule` like this:

```html
<igx-datePicker [(ngModel)]="date"></igx-datePicker>
```

#### Adding buttons
The `IgxDatePickerComponent` supports a today button which selects the current day from the calendar. Cancel button could be enabled too. Here is how we can enable the buttons in our template:

```html
<igx-datePicker cancelButtonLabel="cancel" todayButtonLabel="today" [(ngModel)]="date"></igx-datePicker>
```

Here you can see the buttons:
<div class="sample-container loading" style="height: 580px;">
    <iframe id="date-picker-sample-3" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/datepicker-sample-3" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="date-picker-sample-3" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Custom formatting
By default our date will be formatted based on the `locale` we set. We could use our own formatter though. To achieve this add a formatter function:

```typescript
public date: Date = new Date(Date.now());

private dayFormatter = new Intl.DateTimeFormat("en", { weekday: "long" });
private monthFormatter = new Intl.DateTimeFormat("en", { month: "long" });

public formatter = (date: Date) => {
  return `You selected ${this.dayFormatter.format(date)}, ${date.getDate()} ${this.monthFormatter.format(date)}, ${date.getFullYear()}`;
}
```

And then use the `formatter` input of the `IgxDatePickerComponent`:

```html
<igx-datePicker [value]="date" [formatter]="formatter"></igx-datePicker>
```

Here is the formatted date:
<div class="sample-container loading" style="height: 540px;">
    <iframe id="date-picker-sample-4" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/datepicker-sample-4" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="date-picker-sample-4" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Internationalization
The `IgxDatePickerComponent` supports locales. You can set them using the `locale` input. Using the `IgxCalendarComponent` templates for header (`igxCalendarHeader`) and subheader (`igxCalendarSubheader`), you can specify the look of your header and subheader. More information on how to use these templates you can find in the `IgxCalendarComponent` [documentation](calendar.md). Here is how a date picker with Japanese locale definition would look like:

```html
<igx-datePicker locale="ja-JP" [value]="date">
  <ng-template igxCalendarHeader let-format>
    {{ format.month.combined | titlecase }}{{format.day.combined }}{{ format.weekday.combined }}
  </ng-template>
  <ng-template igxCalendarSubheader let-format>
    <span class="date__el" (click)="format.yearView()">{{ format.year.combined }}</span>
    <span class="date__el" (click)="format.monthView()">{{ format.month.combined | titlecase }}</span>
  </ng-template>
</igx-datePicker>
```

The result is as follows:
<div class="sample-container loading" style="height: 580px;">
    <iframe id="date-picker-sample-5" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/datepicker-sample-5" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="date-picker-sample-5" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### API

#### 入力

<div class="divider--half"></div>

| 名前                |             型             | 説明                                                                                                                                                                                                              |
| :------------------ | :------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value` | `Date` | Sets the selected date. |
| `todayBottonLabel`  |          `string`          | [今日] ボタンをカスタム名で描画します。ボタンはカレンダーで今日の日付を選択し、datePicker フィールドに入力します。                                                                                                |
| `cancelButtonLabel` |          `string`          | [キャンセル] ボタンをカスタム名で描画します。ボタンはカレンダーを閉じます。                                                                                                                                       |
| `formatter`         |         `function`         | 選択した日付または渡した日付にカスタム書式を適用します。                                                                                                                                                          |
| `isDisabled`        |         `boolean`          | datePicker を無効にします。                                                                                                                                                                                       |
| `weekStart`         | `Number` または `WEEKDAYS` | 週の最初の曜日を設定します。                                                                                                                                                                                      |
| `locale`            |          `string`          | カレンダーで日付の書式および表示のためのロケールを設定します。有効な書式の詳細については、[このページ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)を参照してください。 |
| `formatOptions`     |          `Object`          | 日付を書式設定するために使用される `locale` プロパティと渡される書式オプション。                                                                                                                                  |
| `formatViews` | `Object` | The format views passed along with the `locale` property used for formatting dates. |

#### 出力

<div class="divider--half"></div>

|     名前      | 戻り値の型   | 説明                                                                                                             |
| :-----------: | :----------- | :--------------------------------------------------------------------------------------------------------------- |
| `onSelection` | `Date`       | カレンダーで選択が実行されるときに発生します。イベントは、コンポーネントの選択タイプに基づいた選択値を含みます。 |
|   `onOpen`    | `datePicker` | datePicker カレンダーが開いているときに発生します。                                                              |

#### メソッド

<div class="divider--half"></div>

|     名前     | 引数         | 戻り値の型 | 説明                                                                                          |
| :----------: | :----------- | :--------- | :-------------------------------------------------------------------------------------------- |
| `selectDate` | `date: Date` | `void`     | カレンダーの選択を変更します。このメソッドの呼び出しは `onSelection` イベントを発生させます。 |

<div class="divider--half"></div>

### Additional Resources
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)