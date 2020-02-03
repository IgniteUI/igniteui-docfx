---
title: Time Picker コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Time Picker コンポーネントを使用すると、スピン ボタンがあるダイアログから時間を選択し、入力フィールドに値が設定されます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Time Picker コンポーネント, Angular Time Picker コントロール、Time Picker, Angular Time Picker
_language: ja
---

## Time Picker
<p class="highlight">Date Picker のデザインや機能と同様 Ignite UI for Angular Time Picker コンポーネントは、ダイアログのスピン ボタンで時間を選択して入力フィールドに値を設定します。またユーザーは、ドロップダウンで時間値の選択やマスク入力を使用した編集が可能です。</p>
<div class="divider"></div>

### Time Picker デモ
<div class="sample-container loading" style="height: 600px;">
    <iframe id="time-picker-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/scheduling/timepicker-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="time-picker-sample" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法

Time Picker コンポーネントを初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールする必要があります。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](general/getting_started.md)トピックををご覧ください。

次に、**app.module.ts** ファイルに `IgxTimePickerModule` をインポートします。注: IgxTimePicker は **BrowserAnimationsModule** に依存関係があるため、AppModule にも追加する必要があります。

```typescript
// app.module.ts

...
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxTimePickerModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., BrowserAnimationsModule, IgxTimePickerModule],
    ...
})
export class AppModule {}
```
<div class="divider--half"></div>

#### デフォルト

タイムピッカーを追加するには、ミーティング コンポーネントのテンプレートで、以下のコードを追加するとデフォルトのタイムピッカーが作成されます。

```html
<!--meeting.component.html-->
<igx-time-picker ></igx-time-picker>
```

以下は結果です。
<div class="sample-container loading" style="height:600px">
    <iframe id="timepicker-sample-1-iframe" data-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-1" width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="timepicker-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

#### 値の設定

値を設定するには、[`value`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#value) 入力を使用します。日付を追加します。

```typescript
public date: Date = new Date(Date.now());
```

テンプレートで [`value`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#value) 入力を使用します。

```html
<igx-time-picker [value]="date"></igx-time-picker>
```

以下は結果です。
<div class="sample-container loading" style="height: 600px;">
    <iframe id="time-picker-sample-2" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-2" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="time-picker-sample-2" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

双方向データ バインディングを使用するには、`ngModel` を以下のように使用します。

```html
<igx-time-picker [(ngModel)]="date"></igx-time-picker>
```

#### 書式の設定
時間の書式を設定するには、[`IgxTimePickerComponent`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html) [`format`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#format) オプションを使用します。

以下の表は、使用可能な時間表示書式です。

| 書式 | 説明 |
|:-------:|:-----------|
| `h` | 先行ゼロのない 12 時間形式 (1..12)　で時間フィールドを書式設定します。 | 
| `hh` | 先行ゼロのある 12 時間形式 (01..12) で時間フィールドを書式設定します。 | 
| `H` | 先行ゼロがない 24 時間形式 (0..23) で時間フィールドを書式設定します。 | 
| `HH` | 先行ゼロがある 24 時間形式 (00..23) の時フィールドを書式設定します。 | 
| `m` | 先行ゼロがない分フィールド (0..59) を書式設定します。 |
| `mm` | 先行ゼロのある分フィールド (00..59) を書式設定します。 |
| `tt` | AM/PM フィールドを表します。 |


以下は結果です。
<div class="sample-container loading" style="height: 580px;">
    <iframe id="time-picker-sample-8" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-8" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="time-picker-sample-8" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

#### デルタおよびスピン モードの変更

項目のデルタを変更するには、[`itemsDelta`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#itemsdelta) を設定します。スピン モードを変更するには、[`isSpinLoop`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#isspinloop) を使用します。

```html
<igx-time-picker [isSpinLoop]="false" [itemsDelta]="{hours:1, minutes:5}"></igx-time-picker>
```

以下は結果です。
<div class="sample-container loading" style="height: 600px;">
    <iframe id="time-picker-sample-3" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-3" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="time-picker-sample-3" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

#### 検証

ユーザー入力を制限するために [`minValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#minvalue) および [`maxValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#maxvalue) を設定できます。[`onValidationFailed`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#onvalidationfailed) を処理して、無効な時間が選択された場合にユーザーを通知できます。

>注: 最小値/最大値が [`format`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#format) と一致する必要があります。

```typescript
// app.module.ts

...
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxTimePickerModule, IgxToastModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., BrowserAnimationsModule, IgxTimePickerModule, IgxToastModule],
    ...
})
export class AppModule {}

// app.component.ts

public min: string = "09:00";
public max: string = "18:00";

@ViewChild("toast")
private toast: ElementRef;    

public show(toast) {
    toast.show();
}

public onValidationFailed(timepicker){
    this.show(this.toast);
}
```

```html
<igx-time-picker format="HH:mm" [vertical]="true" [minValue]="min" [maxValue]="max" (onValidationFailed)="onValidationFailed($event)"></igx-time-picker>
<igx-toast #toast message="Value must be between 09:00 and 18:00"></igx-toast>
```

以下は結果です。
<div class="sample-container loading" style="height: 540px;">
    <iframe id="time-picker-sample-4" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-4" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="time-picker-sample-4" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

#### ドロップダウン モード

タイムピッカーをプロジェクトに追加する際にデフォルト (ダイアログ) モードに設定します。編集可能なモードに変更するには、[`mode`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#mode) 入力を [`dropdown`]({environment:angularApiUrl}/enums/interactionmode.html#dropdown) に設定します。

```typescript
// timePickerDropdown.component.ts

import { InteractionMode } from 'igniteui-angular';
...
public mode = InteractionMode.DropDown;
```

```html
<!--timePickerDropdown.component.html-->
<igx-time-picker [mode]="mode"></igx-time-picker>
```

または、タイムピッカーで [`モード`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#mode) を以下のように変更します。

```html
<!--timePickerDropdown.component.html-->
<igx-time-picker mode="dropdown"></igx-time-picker>
```

ユーザーは、12 時間と 24 時間形式で時間値を入力、編集、削除できます。 

**キーボード ナビゲーションのドロップダウン モード**

マウス キャレットは、時、分、AM/PM プレースホルダーに配置できます。<kbd>Up</kbd> の押下またはマウス ホイールアップした後に時または分が増加します。<kbd>Down</kbd> または `マウスホイール ダウン`は反転操作に使用できます。

>注* タイムピッカーの [`minValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#minvalue) または [`maxValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#maxvalue) を設定して [`isSpinLoop`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#isspinloop) を無効にし、時間スクローリングが指定した時間または分の値でブレークします。追加でユーザーは以下の操作も実行できます。

**キーボード操作**

* ドロップダウンを`開く`には、*クロック アイコン* をクリックし、<kbd>Space</kbd> または <kbd>Alt</kbd> + <kbd>Down</kbd> キーの組み合わせを押します。
* ドロップダウンを`Accept` や `Close` する場合、<kbd>Escape</kbd> または <kbd>Enter</kbd> キーを押します。
* マウスでタイムピッカー以外をクリックして入力した値を `Accept` してドロップダウンを `Close` します。
* ドロップダウンが開いて新しい値が `Accept` にタイプされた場合、タイムピッカーの外側をクリックまたは <kbd>Tab</kbd> を押してフォーカスを移動します。

以下は結果です。
<div class="sample-container loading" style="height:540px">
    <iframe id="timepicker-dropdown-iframe" data-src='{environment:demosBaseUrl}/scheduling/timepicker-dropdown' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="timepicker-dropdown-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

#### 入力グループのテンプレート化

API (プロパティ、イベント、メソッド) を使用して要件によってタイムピッカーを構成し、コードで操作する方法を説明しました。次に入力グループの外観をカスタマイズします。

タイムピッカー内にネストした ng-template を IgxTimePickerTemplate ディレクティブでデコレートする必要があります。ng-template コンテキストは、次のメンバーを公開します。[`openDialog`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#opendialog) メソッドはタイムピッカーダイアログに使用できます。[`displayTime`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#displaytime) プロパティは書式設定の値を含みます。 [`value`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#value) は実際の値を含みます。ng-template 要素で変数を宣言して使用することができます。

以下の例では、デフォルトのラベル "Time" を変更して 2 つ目のアイコンをサフィックスとして追加します。ラベルを使用して実際のタイムピッカーの値を表示する入力グループです。

```html
<igx-time-picker [value]="date">
    <ng-template igxTimePickerTemplate let-openDialog="openDialog" let-value="value" let-displayTime="displayTime">
        <igx-input-group (click)="openDialog()">
            <igx-prefix>
                <igx-icon>home</igx-icon>
            </igx-prefix>
            <label igxLabel>Home Time </label>
            <input igxInput [value]="displayTime" />
            <igx-suffix>
                <igx-icon>access_alarm</igx-icon>
            </igx-suffix>
        </igx-input-group>
        <label>{{value}}</label>
    </ng-template>
</igx-time-picker>
```
```typescript
public date: Date = new Date(Date.now());
```

以下は結果です。
<div class="sample-container loading" style="height: 600px;">
    <iframe id="time-picker-sample-5" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-5" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="time-picker-sample-5" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

#### 入力グループのテンプレート - ドロップダウン モード

<a href="#入力グループのテンプレート化"> テンプレート入力グループ</a>セクションに記載されているすべての情報は、ドロップダウン モードのタイムピッカーを再テンプレート設定する際に適用できます。唯一の要件は、HTML 要素が `openDialog(target)` に渡されて、その要素が生成されているドロップダウンの配置ターゲットとして使用されることです。

```html
<igx-time-picker #picker [value]="today" format="HH:mm" mode="dropdown">
    <ng-template igxTimePickerTemplate let-openDialog="openDialog" let-value="value" let-displayTime="displayTime">
        <igx-input-group>
            <input #dropDownTarget igxInput [value]="displayTime" (blur)="onBlur(dropDownTarget.value, value, picker)"/>
            <igx-suffix>
                <igx-icon (click)="openDialog(dropDownTarget)">access_time</igx-icon>
            </igx-suffix>
        </igx-input-group>
    </ng-template>
</igx-time-picker>
```
```typescript
public today: Date = new Date(Date.now());
```

テンプレート コンテキストで公開されている `displayTime` プロパティは**読み取り専用**です。上記の例では、双方向バインディングを実現するために、入力要素の  **blur** イベントと組み合わせて使用​​されています。

```typescript
public today: Date = new Date(Date.now());

public onBlur(inputValue: string, value: Date, picker: IgxTimePickerComponent) {
    const parts = inputValue.split(/[\s:]+/);

    const hour = parseInt(parts[0], 10);
    const minutes = parseInt(parts[1], 10);

    if (picker.validHourEntries.indexOf(hour) !== -1 && picker.validMinuteEntries.indexOf(minutes) !== -1) {
        value.setHours(hour, minutes);
    } else {
        throw new Error("This is not a valid hour.");
    }
}
```

ドロップダウンと双方向バインディングをサポートする、再テンプレート化されたタイムピッカーです。
<div class="sample-container loading" style="height: 600px;">
    <iframe id="time-picker-sample-6" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-6" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="time-picker-sample-6" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

#### カスタム ボタン アクション
[`IgxTimePickerComponent`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html) は、カスタム アクション ボタンをサポートします。これを実現するには、`igxTimePickerActions` ディレクティブセレクタでマークされた `ng-template` でボタンをラップします。

以下の例では、'CANCEL'、'OK'、'NOW' 操作用のカスタム操作ボタンが追加されています。

```html
<!-- sample.component.html -->

<igx-time-picker #picker format="HH:mm" mode="dropdown">
    <ng-template igxTimePickerActions>
        <div class="container action-buttons">
            <button igxButton="flat" (click)="picker.cancelButtonClick()">cancel</button>
            <button igxButton="flat" (click)="picker.okButtonClick()">ok</button>
            <button igxButton="flat" (click)="selectNow(picker)">now</button>
        </div>
    </ng-template>
</igx-time-picker>
```

```typescript
// sample.component.ts
...
public selectNow(timePicker: IgxTimePickerComponent) {
    timePicker.value = new Date(Date.now());
    timePicker.close();
}
...
```

以下は結果です。
<div class="sample-container loading" style="height: 580px;">
    <iframe id="time-picker-sample-7" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-7" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="time-picker-sample-7" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

### Known Limitations

>[!WARNING]
>**As of version 9.0.0 this component requires `HammerModule` to be imported in the root module of the application in order for user interactions to work as expected.**.

### API リファレンス
<div class="divider--half"></div>

* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [IgxTimePickerComponent]({environment:angularApiUrl}/classes/igxtimepickercomponent.html)
* [IgxTimePickerComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-time-picker-theme)
* [IgxOverlayService]({environment:angularApiUrl}/classes/igxoverlayservice.html)
* [IgxOverlay スタイル]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)

### その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)