---
title: Calendar コンポーネント
_description: Ignite UI for Angular の Calendar コンポーネントを使用して、アプリケーションで日付情報の表示および日付の入力を可能なカレンダーを作成します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Calendar コンポーネント, Angular Calendar コントロール
_language: ja
---

## Calendar
<p class="highlight">The Ignite UI for Angular Calendar component is developed as a native [Angular component](https://angular.io/guide/architecture#components). Use it to provide your application with three easy and intuitive ways to display date information. Users can select a single date, multiple dates or pick a range of dates.</p>

### Calendar Demo
<div class="sample-container loading" style="height: 500px">
    <iframe id="calendar-sample-5-iframe" src='{environment:demosBaseUrl}/calendar-sample-5' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="calendar-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

> [!WARNING]
> Ignite UI for Angular has a [peer dependency](https://nodejs.org/en/blog/npm/peer-dependencies/) on [**HammerJS**](https://hammerjs.github.io/).
> Make sure you add it to your Angular project.
> <br/> <br/>`$ npm install hammerjs @types/hammerjs`

### Usage
To get started with the **Ignite UI for Angular Calendar**, let's first import the **IgxCalendarModule** in the application's AppModule, typically this is the **app.module.ts** file. Note that the **IgxCalendarComponent** is also dependent on the **BrowserAnimationsModule**, so it needs to be added to the AppModule as well:

```typescript
// app.module.ts
...
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxCalendarModule } from 'igniteui-angular/main';
@NgModule({
    ...
    imports: [..., BrowserAnimationsModule, IgxCalendarModule],
    ...
})
export class AppModule {}
```
You will usually also import the **IgxCalendarComponent** in the AppComponent file (or your editor will auto-import them for you) when declaring types that are part of the calendar API:

```typescript
import { IgxCalendarComponent } from 'igniteui-angular/main';
...

@ViewChild('calendar', { read: IgxCalendarComponent }) public calendar: IgxCalendarComponent;
```

> [!WARNING]
> Note that the **igxCaledarComponent** uses the [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat) WebAPI for localization and formatting of dates. 
> Consider using the [appropriate polyfills](https://github.com/andyearnshaw/Intl.js/) if your target platform does not support them.

### Selection
Instantiating the **IgxCalendarComponent** is as easy as placing its selector element in the template. This will leave the calendar display the current month by default and run in single selection mode. We switch to any of the other selection modes - `multi` and `range`, by setting the `selection` property:
```html
<!-- app.component.html -->
<!-- Single selection mode -->
<igx-calendar></igx-calendar>
<!-- Multi selection mode -->
<igx-calendar selection="multi"></igx-calendar>
<!-- Range selection mode -->
<igx-calendar selection="range"></igx-calendar>
```
Notice that the calendar header is not rendered when the selection is either `multi` or `range`:
<div class="sample-container" style="height: 500px">
    <iframe id="calendar-sample-1-iframe" src='{environment:demosBaseUrl}/calendar-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="calendar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

###Localization and formatting

Due to their very nature, localization and formatting are essential to any calendar. In the **IgxCalendarComponent** those are controlled and customized through the following properties - `locale`, `formatOptions`, `formatViews`:

| Name | Description |
|:--:|:---|:---|
| `locale` | Controls the locale used for formatting and displaying the dates in the calendar. The expected string value should be a [BCP 47 language tag](https://tools.ietf.org/html/rfc5646) and if not set defaults to "en". |
| `formatOptions` | Controls the date-time components to use in formatted output, and their desired representations ([Аdditional information](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat)). The default values are { day: 'numeric', month: 'short', weekday: 'short', year: 'numeric' }. |
| `formatViews` | Controls whether the date parts in the different calendar views should be formatted according to the provided locale and formatOptions. defaults are { day: false, month: true, year: false }. For the properties set to false, the views will display the corresponding `Date.getFullYear()` \ `Date.getDate()` \  `Date.getMonth()` value. |
<br>
Let's go ahead and try those along with other customizations from the **IgxCalendarComponent** API. Say we are having visitors on our page coming from countries from EFTA (European Free Trade Association) countries, so we need to display the calendar in the corresponding culture. First thing we need to set is the `weekstart`, which controls the starting day of the week. It defaults to 0, which corresponds to Sunday, so we set a value of 1.

In the markup below we are also binding the `formatOptions` and `formatViews` properties to customize the display formatting. Finally we are binding the `locale` property to a value, based on user's location choice:

```html
<!-- app.component.html -->
<igx-calendar #calendar
    weekstart="1"
    [locale]="locale"
    [formatOptions]="formatOptions"
    [formatViews]="formatViews">
</igx-calendar>
<select id="locations" (change)="changeLocale($event)">...</select>
```
All property values are set in the AppCоmponent file:

```typescript
// app.component.ts
@ViewChild('calendar', { read: IgxCalendarComponent }) public calendar: IgxCalendarComponent;

public formatOptions: any;
public formatViews: any;
public locale: string;
public select: HTMLSelectElement;

public ngOnInit() {
    this.select = document.getElementById("locations") as HTMLSelectElement;
    this.locale = this.select.value;
    this.formatOptions = { day: "2-digit", month: "long", weekday: "long", year: "numeric" };
    this.formatViews = { day: true, month: true, year: true };
}

// change the calendar locale
public changeLocale(event) {
    this.locale = event.target.value;
}
```

Great, we should now have a calendar with customized dates display that also changes the locale representation based on the user location. Let's have a look at it:

<div class="sample-container" style="height: 500px">
    <iframe id="calendar-sample-2-iframe" src='{environment:demosBaseUrl}/calendar-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="calendar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Events
Lets build on top of that sample a bit. We will require the user to enter a date range that does not exceed 5 days. We need to change the `selection` mode of the calendar to "range" and prompt the user to correct the selection, if the range is not valid. To do this we will use the `onSelection` event:

```html
<!-- app.component.html -->
<igx-calendar #calendar
    ...
    selection="range"
    (onSelection)="verifyRange($event)">
</igx-calendar>
```

The value passed in the `onSelection` event is the collection of dates selected, so we can read its length to base our logic upon it. If we alert the user for the invalid selection, we also reset the selection to contain only the first date from the range using the `selectDate` method:

```typescript
// app.component.ts
...
public verifyRange(dates: Date[]) {
    if (dates.length > 5) {
        this.calendar.selectDate(dates[0]);
        this.dialog.open();
    }
}
```

Let's try this out by playing around with selecting ranges:
<div class="sample-container" style="height: 460px">
    <iframe id="calendar-sample-3-iframe" src='{environment:demosBaseUrl}/calendar-sample-3' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="calendar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Templating

We have seen how to make use of the **IgxCalendarComponents** API (properties, events, methods) so that we configure the calendar per our requirements and interact with it programatically. Now we want to go further and customize its look, benefiting from the header and subheader templating capabilities.

To do that we need to decorate a ng-template inside the calendar with **igxCalendarHeader** or **igxCalendarSubheader** directive and use the context returned to customize the way the date is displayed.
The template decorated with the **igxCalendarHeader** directive is rendered only when the calendar selection is set to single. The **igxCalendarSubheader** is available in all selection modes.

In our example we slightly modify the default template and will make the header display the full date and modify the subheader to include the weekday:

```html
<!-- app.component.html-->
<igx-calendar>
    <!-- Modify the header to display the month (in titlecase), day and weekday -->
    <ng-template igxCalendarHeader let-parts>
        {{ parts.month.combined | titlecase }} {{parts.day.combined }} {{ parts.weekday.combined }}
    </ng-template>
    <ng-template igxCalendarSubheader let-parts>
        <span class="date__el" (click)="parts.monthView()">{{ parts.month.combined }}</span>            
        <span class="date__el" (click)="parts.yearView()">{{ parts.year.combined }}</span>
    </ng-template>
</igx-calendar>  
```
For more detailed explanation of what **parts** are the template context, please refer to the [TemplateContext](#template-context) section. Let's see what the templated calendar looks like:

<div class="sample-container" style="height: 500px">
    <iframe id="calendar-sample-4-iframe" src='{environment:demosBaseUrl}/calendar-sample-4' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="calendar-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### キーボード ナビゲーション

**IgxCalendarComponent** コンポーネントがフォーカスを持つ場合:

* `PageUp` は前の月へ移動します。
* `PageDown` は次の月へ移動します。
* `Shift + PageUp` は前の年へ移動します。
* `Shift + PageDown` は次の年へ移動します。
* `Home` は表示されている現在月の最初日にフォーカスします。
* `End` は表示されている現在月の最後日にフォーカスします。

現在月の日がフォーカスされる場合:

* 矢印キーは日を移動します。
* `Enter` はフォーカスされている日を選択します。
<div class="divider--half"></div>

### API

#### 入力

<div class="divider--half"></div>

|      名前       | 型                         | 説明                                                                                                                                                                                                           |
| :-------------: | :------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   `weekStart`   | `Number` または `WEEKDAYS` | 週の最初の日を設定します。                                                                                                                                                                                     |
|    `locale`     | `string`                   | カレンダーで日付の書式および表示のためのロケールを設定します。有効な書式の詳細については、[この](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl)ページを参照してください。 |
|   `selection`   | `string`                   | カレンダーの選択タイプを設定します。有効な値は `single` (デフォルト)、`multi`、および `range` です。                                                                                                           |
|   `viewDate`    | `Date`                     | カレンダーを描画するときにデフォルト ビューで表示される年と月を設定します。デフォルト値は現在の年と月です。                                                                                                    |
|     `value`     | `Date` または `Date[]`     | カレンダー ウィジェットの現在値を取得または設定します。複数選択および範囲選択は選択日付の配列を返します。                                                                                                      |
| `formatOptions` | `Object` | The format options passed along with the `locale` property used for formatting the dates. Defaults are { day: 'numeric', month: 'short', weekday: 'short', year: 'numeric' }. |
|`formatViews`| `Object`| Controls whether the date parts in the different calendar views should be formatted according to the provided locale and formatOptions. defaults are { day: false, month: true, year: false }. |
| `vertical` | `boolean` | Controls the layout of the calendar component. When vertical is set to true the calendar header will be rendered to the side of the calendar body.|

#### 出力

<div class="divider--half"></div>

|     名前      | 戻り値の型             | 説明                                                                                                             |
| :-----------: | :--------------------- | :--------------------------------------------------------------------------------------------------------------- |
| `onSelection` | `Date` または `Date[]` | カレンダーで選択が実行されるときに発生します。イベントは、コンポーネントの選択タイプに基づいた選択値を含みます。 |

#### メソッド
<div class="divider--half"></div>

|     名前     | 引数                         | 戻り値の型 | 説明                                                                                          |
| :----------: | :--------------------------- | :--------- | :-------------------------------------------------------------------------------------------- |
| `selectDate` | `date: Date` または `Date[]` | `void`     | カレンダーの選択を変更します。このメソッドの呼び出しは `onSelection` イベントを発生させます。 |

<div class="divider--half"></div>
#### Template Context
<div class="divider--half"></div>

| Name | Return Type | Description |
|:--:|:---|:---|
| `date` | `Date` | The date object in the context of the template. See * below for details. |
| `full` | `string` | The full date representation returned after applying the formatOptions. |
| `monthView` | `function` | A function which when called puts the calendar in month view. |
| `yearView` | `function` | A function which when called puts the calendar in year view. |
| `era` | `object` | The era date component (if applicable) formatted to the supplied locale. |
| `year` | `object` | The year date component (if applicable) formatted to the supplied locale. |
| `month` | `object` | The month date component (if applicable) formatted to the supplied locale. |
| `day` | `object` | The day date component (if applicable) formatted to the supplied locale. |
| `weekday` | `object` | The weekday date component (if applicable) formatted to the supplied locale. |
<div class="divider--half"></div>
