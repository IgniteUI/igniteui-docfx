---
title: Date Picker コンポーネント
_description: Ignite UI for Angular Date Picker コントロールを使用して web アプリケーションにカレンダーから日付を選択する機能を追加できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Date Picker コンポーネント, Angular Date Picker コントロール
_language: ja
---

## Date Picker

<p class="highlight">Ignite UI for Angular Date Picker コンポーネントは、単一の日付選択を可能にする月表示カレンダーまたはポップアップ カレンダーを表示します。コントロールは現在の日付にフォーカスでき、[キャンセル] ボタンがあります。</p>
<div class="divider"></div>

### Date Picker デモ

<div class="sample-container loading" style="height: 720px">
    <iframe id="date-picker-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/datepicker" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="date-picker-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### 使用方法

```typescript
import { IgxDatePickerComponent } from 'igniteui-angular';
```

#### 基本的な初期化

<div class="divider--half"></div>

```html
<igx-datePicker></igx-datePicker>
```

渡された最初日付およびロケールを持つカスタム書式関数。

```html
<igx-datePicker [formatter]="customFormatter" [value]="dateValue" [locale]="'en-US'"></igx-datePicker>
```

#### ボタンの追加

<div class="divider--half"></div>

```html
<igx-datePicker [cancelButtonLabel]="'閉じる'"[todayButtonLabel]="'今日'"></igx-datePicker>
```

#### 無効な状態

datePicker を無効にすることもできます。

```html
<igx-datePicker [isDisabled]="false"></igx-datePicker>
```

#### 設定

最初の曜日が月曜日に設定され、選択の完了でイベント ハンドラーがある DatePicker。

```html
<igx-datePicker [weekStart]="1" (onSelection)="eventHandler($event)"></igx-datePicker>
```

#### バインディング

DatePicker は、両方向のデータ バインディングが必要な場合、`ngModel` でのバインディングをサポートします。

```html
<igx-datePicker [(ngModel)]="myDateValue"></igx-datePicker>
```

<div class="divider"></div>

### API

#### 入力

<div class="divider--half"></div>

| 名前                |             型             | 説明                                                                                                                                                                                                              |
| :------------------ | :------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `todayBottonLabel`  |          `string`          | [今日] ボタンをカスタム名で描画します。ボタンはカレンダーで今日の日付を選択し、datePicker フィールドに入力します。                                                                                                |
| `cancelButtonLabel` |          `string`          | [キャンセル] ボタンをカスタム名で描画します。ボタンはカレンダーを閉じます。                                                                                                                                       |
| `formatter`         |         `function`         | 選択した日付または渡した日付にカスタム書式を適用します。                                                                                                                                                          |
| `isDisabled`        |         `boolean`          | datePicker を無効にします。                                                                                                                                                                                       |
| `weekStart`         | `Number` または `WEEKDAYS` | 週の最初の曜日を設定します。                                                                                                                                                                                      |
| `locale`            |          `string`          | カレンダーで日付の書式および表示のためのロケールを設定します。有効な書式の詳細については、[このページ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)を参照してください。 |
| `formatOptions`     |          `Object`          | 日付を書式設定するために使用される `locale` プロパティと渡される書式オプション。                                                                                                                                  |

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
