---
title: Time Picker コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Time Picker コンポーネントを使用すると、スピン ボタンがあるダイアログから時間を選択し、入力フィールドに値が設定されます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Time Picker コンポーネント, Angular Time Picker コントロール、Time Picker, Angular Time Picker
_language: ja
---

## Time Picker
<p class="highlight">Date Picker のデザインや機能と同様 Ignite UI for Angular Time Picker コンポーネントは、ダイアログのスピン ボタンで時間を選択して入力フィールドに値を設定します。In addition the user can select also or edit a time value, using an editable masked input with a dropdown.</p>
<div class="divider"></div>

### Time Picker デモ
<div class="sample-container loading" style="height: 600px;">
    <iframe id="time-picker-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/scheduling/timepicker-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="time-picker-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

### 使用方法

Ignite UI for Angular Time Picker を初期化する前に、[`IgxTimePickerModule`]({environment:angularApiUrl}/classes/igxtimepickermodule.html) を **app.module.ts** ファイルにインポートします。注: IgxTimePicker に **BrowserAnimationsModule** の依存関係があるため、AppModule にも追加する必要があります。

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
    <iframe id="timepicker-sample-1-iframe" src="{environment:demosBaseUrl}/scheduling/timepicker-sample-1" width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="timepicker-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

#### 値の設定

値を設定するには、value 入力を使用します。日付を追加します。

```typescript
public date: Date = new Date(Date.now());
```

テンプレートで [`value`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#value) 入力を使用します。

```html
<igx-time-picker [value]="date"></igx-time-picker>
```

以下は結果です。

<div class="sample-container loading" style="height: 600px;">
    <iframe id="time-picker-sample-2" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/scheduling/timepicker-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="time-picker-sample-2" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

TwoWay データ バインディングを使用するには、`ngModel` を以下のように使用します。

```html
<igx-time-picker [(ngModel)]="date"></igx-time-picker>
```

#### デルタおよびスピン モードの変更

項目のデルタを変更するには、[`itemsDelta`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#itemsdelta) を設定します。スピン モードを変更するには、[`isSpinLoop`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#isspinloop) を使用します。

```html
<igx-time-picker [isSpinLoop]="false" [itemsDelta]="{hours:1, minutes:5}"></igx-time-picker>
```

以下は結果です。

<div class="sample-container loading" style="height: 600px;">
    <iframe id="time-picker-sample-3" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/scheduling/timepicker-sample-3" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="time-picker-sample-3" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

#### 検証

ユーザー入力を制限するために [`minValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#minvalue) および [`maxValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#maxvalue) を設定できます。[`onValidationFailed`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#onvalidationfailed) を処理して、無効な時間が選択された場合にユーザーを通知できます。注: 最小値/最大値が [`format`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#format) と一致する必要があります。

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
    <iframe id="time-picker-sample-4" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/scheduling/timepicker-sample-4" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="time-picker-sample-4" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

#### ドロップダウン モード

タイムピッカーをプロジェクトに追加する際にデフォルト (ダイアログ) モードに設定します。ドロップダウン モードをアクティベイトするために enum [`TimePickerInteractionMode`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#TimePickerInteractionMode) を含む必要がありなす。

```typescript
// timePickerDropdown.component.ts

import { TimePickerInteractionMode } from 'igniteui-angular';
...

public mode: TimePickerInteractionMode = TimePickerInteractionMode.dropdown;
```

```html
<!--timePickerDropdown.component.html-->

<igx-time-picker [mode]="mode"></igx-time-picker>
```
ユーザーは、12 時間と 24 時間形式で時間値を入力、編集、削除できます。 

**キーボード ナビゲーションのドロップダウン モード**

マウス キャレットは、時、分、AM/PM プレースホルダーに配置できます。<kbd>Up</kbd> の押下またはマウス ホイールアップした後に時または分が増加します。<kbd>Down</kbd> または `マウスホイール ダウン`は反転操作に使用できます。注* タイムピッカーの [`minValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#minvalue) または [`maxValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#maxvalue) を設定して [`isSpinLoop`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#isspinloop) を無効にし、時間スクローリングが指定した時間または分の値でブレークします。追加でユーザーは以下の操作も実行できます。

* ドロップダウンを`開く`には、*クロック アイコン* をクリックし、<kbd>Space</kbd> または <kbd>Alt</kbd> + <kbd>Down</kbd> キーの組み合わせを押します。
* ドロップダウンを`Accept` や `Close` する場合、<kbd>Escape</kbd> または <kbd>Enter</kbd> キーを押します。
* マウスでタイムピッカー以外をクリックして入力した値を `Accept` してドロップダウンを `Close` します。
* ドロップダウンが開いて新しい値が `Accept` にタイプされた場合、タイムピッカーの外側をクリックまたは <kbd>Tab</kbd> を押してフォーカスを移動します。

以下は結果です。
<div class="sample-container loading" style="height:540px">
    <iframe id="timepicker-dropdown-iframe" src='{environment:demosBaseUrl}/scheduling/timepicker-dropdown' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="timepicker-dropdown-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
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
    <iframe id="time-picker-sample-5" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/scheduling/timepicker-sample-5" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="time-picker-sample-5" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で開く</button>
</div>

### API リファレンス
<div class="divider--half"></div>

* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [IgxTimePickerComponent]({environment:angularApiUrl}/classes/igxtimepickercomponent.html)
* [IgxTimePickerComponent Styles]({environment:sassApiUrl}/index.html#function-igx-time-picker-theme)
* [IgxOverlayService]({environment:angularApiUrl}/classes/igxoverlayservice.html)
* [IgxOverlay Styles]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)

### その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)