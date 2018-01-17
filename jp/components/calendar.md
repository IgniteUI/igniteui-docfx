---
title: Calendar コンポーネント
_description: Ignite UI for Angular の Calendar コンポーネントを使用して、アプリケーションで日付情報の表示および日付の入力を可能なカレンダーを作成します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Calendar コンポーネント, Angular Calendar コントロール
---

## Calendar
<p class="highlight">Ignite UI for Angular の Calendar コンポーネントは日付情報を表示する 3 つの方法を提供します。ユーザーが日付を入力するか、単一の日付を選択するか、日付の範囲を選択できます。</p>
<div class="divider"></div>

### Calendar デモ
<div class="sample-container" style="height:1728px">
    <iframe src='https://{environment:demosBaseUrl}/calendar' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<div class="divider--half"></div>

### 使用方法
```typescript
import { IgxCalendarComponent } from "igniteui-angular";
```

基本的な初期化
```html
<igx-calendar></igx-calendar>
```

範囲選択カレンダー。最初の曜日は月曜日に設定し、選択の完了でイベント ハンドラーがあります。
```html
<igx-calendar weekStart="1" selection="range" (onSelection)="eventHandler($event)"></igx-calendar>
```

カレンダーは、両方向のデータ バインディングが必要な場合、`ngModel` でのバインディングをサポートします。
```html
<igx-calendar [(ngModel)]="myDateValue"></igx-calendar>
```
<div class="divider--half"></div>

### キーボード ナビゲーション
**igxCalendar** コンポーネントがフォーカスを持つ場合:
- `PageUp` は前の月へ移動します。
- `PageDown` は次の月へ移動します。
- `Shift + PageUp` は前の年へ移動します。
- `Shift + PageDown` は次の年へ移動します。
- `Home` は表示されている現在月の最初日にフォーカスします。
- `End` は表示されている現在月の最後日にフォーカスします。

現在月の日がフォーカスされる場合:
- 矢印キーは日を移動します。
- `Enter` はフォーカスされている日を選択します。
<div class="divider--half"></div>

### API

#### 入力
<div class="divider--half"></div>

| 名前       |      型      |  説明 |
|:----------:|:-------------|:------|
| `weekStart`| `Number | WEEKDAYS` | 週の最初の日を設定します。 |
| `locale` | `string` | カレンダーで日付の書式および表示のためのロケールを設定します。有効な書式の詳細については、[この](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl)ページを参照してください。 |
| `selection` | `string` | カレンダーの選択タイプを設定します。有効な値は `single` (デフォルト)、`multi`、および `range` です。|
| `viewDate` | `Date` | カレンダーを描画するときにデフォルト ビューで表示される年と月を設定します。デフォルト値は現在の年と月です。   |
| `value` | `Date | Date[]` | カレンダー ウィジェットの現在値を取得または設定します。複数選択および範囲選択は選択日付の配列を返します。 |
| `formatOptions` | `Object` | 日付を書式設定するために使用される `locale` プロパティと渡される書式オプション。 |

#### 出力
<div class="divider--half"></div>

| 名前 | 戻り値の型 | 説明 |
|:--:|:---|:---|
| `onSelection` | `Date | Date[]` | カレンダーで選択が実行されるときに発生します。イベントは、コンポーネントの選択タイプに基づいた選択値を含みます。 |

#### メソッド
<div class="divider--half"></div>

| 名前   | 引数 | 戻り値の型 | 説明 |
|:----------:|:------|:------|:------|
| `selectDate` | `date: Date | Date[]` | `void` | カレンダーの選択を変更します。このメソッドの呼び出しは `onSelection` イベントを発生させます。 |
<div class="divider--half"></div>
