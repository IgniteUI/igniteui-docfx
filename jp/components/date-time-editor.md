---
title: 日時エディター ディレクティブ - ネイティブ Angular | Ignite UI for Angular 
_description: Ignite UI for Angular Date Time Editor ディレクティブでは、Date オブジェクトによって日付と時刻を処理できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Date Time Editor ディレクティブAngular Date Time ディレクティブ コントロール, Date Time Editor, Angular Date Time ディレクティブ
_language: ja
---

# Date Time Editor ディレクティブ
<p class="highlight">Ignite UI for Angular Date Time Editor ディレクティブでは、選択された入力要素で日付と時刻を設定および編集できます。ユーザーは、編集可能なマスク入力によって日付または時間部分を編集できます。さらに、検証に最小値と最大値だけでなく、希望の表示形式および入力形式の設定を指定できます。</p>
<div class="divider"></div>

## Angular Date Time Editor の例

<code-view style="height:100px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/datetime-basic" alt="Angular Date Time Editor 例">
</code-view>

<div class="divider--half"></div>


## 使用方法
Ignite UI for Angular Date Time ディレクティブを使用するにはまず初めに `IgxDateTimeEditorModule` を **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import { IgxDateTimeEditorModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxDateTimeEditorModule ],
    ...
})
export class AppModule {}
```

input 要素を日時エディターとして使用するには、igxDateTimeEditor ディレクティブと有効なdateオブジェクトを値として設定します。エディターの外観を完全にするには、入力要素を[入力グループ](input-group.md)にラップします。これにより、[`igxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html)、[`igxLabel`]({environment:angularApiUrl}/classes/igxlabeldirective.html)、[`igxPrefix`](input-group.md#prefix-および-suffix)、[`igxSuffix`](input-group.md#prefix-および-suffix)、[`igx-hint`]({environment:angularApiUrl}/classes/igxhintdirective.html) ディレクティブを利用できるだけでなく、フォーム入力を扱うときの一般的なシナリオに対処できます。

### バインディング 
以下は、Date オブジェクトを [`value`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#value) として設定する基本的な構成シナリオです。
```typescript
public date = new Date();
```

```html
<igx-input-group>
    <input type="text" igxInput igxDateTimeEditor [value]="date" />
</igx-input-group>
```

双方向のデータバインディングを作成するには、`ngModel` を設定します。
```html
<igx-input-group>
    <input type="text" igxInput igxDateTimeEditor [(ngModel)]="date"/>
</igx-input-group>
```
<div class="divider--half"></div>

#### <a name="iso">Binding to ISO strings</a>
The `IgxDateTimeEditorDirective` accepts an [`ISO 8601`](https://tc39.es/ecma262/#sec-date-time-string-format) strings.

The string can be a full `ISO` string, in the format `YYYY-MM-DDTHH:mm:ss.sssZ` or it could be separated into date-only and time-only portions.

##### Date-only
If a date-only string is bound to the directive, it needs to follow the format - `YYYY-MM-DD`. This applies only when binding a string value to the directive, the [`inputFormat`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#inputformat) is still used when typing values in the editor and it does not have to be in the same format. Additionally, when binding a date-only string, the directive will prevent time shifts by coercing the time to be `T00:00:00`.

##### Time-only
Time-only strings are normally not defined in the `ECMA` specification, however to allow the directive to be integrated in scenarios which require time-only solutions, it supports the 24 hour format - `HH:mm:ss`. The 12 hour format is not supported. Please also note that this applies for _bound values only_.

##### Full ISO string
If a full `ISO` string is bound, the directive will parse it only if all elements required by [`Date.parse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#date_time_string_format) are provided.

All falsy values, including `InvalidDate` will be parsed as `null`. Incomplete date-only, time-only, or full `ISO` strings will be parsed as `InvalidDate`.

### キーボード ナビゲーション
Date Time Editor ディレクティブには直感的なキーボード ナビゲーション機能があり、マウス操作なしでさまざまな DatePart を移動、インクリメント、デクリメントなどができます。

- <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>左矢印</kbd> / <kbd>右矢印</kbd> - 日付セクション間を移動します。<kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>右矢印</kbd>でセクションの最後に移動します。既に最後にある場合、次のセクション (存在する場合) の最後に移動します。反対方向も同様です。

- <kbd>上矢印</kbd> / <kbd>下矢印</kbd> - 日付部分を増減します。関連する [`isSpinLoop`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#isspinloop) を参照してください。

- <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>;</kbd> - エディターの現在の日時を設定します。

## 例

#### 表示および入力形式
[`IgxDateTimeEditor`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html) は、さまざまな表示および入力の形式をサポートします。

It uses Angular's [`DatePipe`](https://angular.io/api/common/DatePipe), which allows it to support predefined format options, such as `shortDate` and `longDate`. It can also accept a constructed format string using characters supported by the `DatePipe`, e.g. `EE/MM/yyyy`. Notice that formats like `shortDate`, `longDate`, etc., can be used as [`displayFormat`]([`minValue`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#displayformat)) only. Also, if no [`displayFormat`]([`minValue`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#displayformat)) is provided, the editor will use the [`inputFormat`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#inputformat) as its [`displayFormat`]([`minValue`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#displayformat)).

To set a specific input format, pass it as a string to the IgxDateTimeEditor directive. This will set both the expected user input format and the [mask](mask.md) for the editor. Additionally, the [`inputFormat`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#inputformat) is locale based, so if none is provided, the editor will default to the one used by the browser.

```html
<igx-input-group>
    <input type="text" igxInput [displayFormat]="'shortDate'" [igxDateTimeEditor]="'dd/MM/yyyy'" [(ngModel)]="date"/>
</igx-input-group>
```

The table bellow shows formats that are supported by the directive's [`inputFormat`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#inputformat):
| 形式 | 説明 |
|:-------:|:-----------|
| `d` | Date, will be coerced with a leading zero while editing. |
| `dd` | Date with an explicitly set leading zero. |
| `M` | Month, will be coerced with a leading zero while editing. |
| `MM` | Month with an explicitly set leading zero. |
| `yy` | Short year format. |
| `yyyy` | Full year format. |
| `h` | Hours in 12-hour format, will be coerced with a leading zero while editing. |
| `hh` | Hours in 12-hour format with an explicitly set leading zero. |
| `H` | Hours in 24-hour format, will be coerced with a leading zero while editing. |
| `HH` | Hours in 24-hour format, with an explicitly set leading zero. |
| `m` | Minutes, will be coerced with a leading zero while editing. |
| `mm` | Minutes with an explicitly set leading zero. |
| `tt` | AM/PM section for 12-hour format. |
### 最小値と最大値
[`minValue`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#minvalue) および [`maxValue`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#maxvalue) プロパティを指定して、ngModel の入力を制限し、有効性を制御できます。
```typescript
public minDate = new Date(2020, 1, 15);
public maxDate = new Date(2020, 11, 1);
``` 

```html
<igx-input-group>
    <input type="text" igxInput igxDateTimeEditor [minValue]="minDate" [maxValue]="maxDate" [(ngModel)]="date"/>
</igx-input-group>

```
The [`minValue`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#minvalue) and [`minValue`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#maxvalue) inputs can also be of type `string`, see [Binding to ISO strings](#iso).

### <a name="increment-decrement">Increment and decrement </a>
[`igxDateTimeEditor`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html) directive exposes public [`increment`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#increment) and [`decrement`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#decrement) methods. They increment or decrement a specific [`DatePart`]({environment:angularApiUrl}/classes/datepart.html) of the currently set date and time and can be used in a couple of ways.

In the first scenario, if no specific [`DatePart`]({environment:angularApiUrl}/classes/datepart.html) is passed to the method, a default [`DatePart`]({environment:angularApiUrl}/classes/datepart.html) will increment or decrement, based on the specified [`inputFormat`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#inputformat) and the internal directive implementation. In the second scenario, you can explicitly specify what [`DatePart`]({environment:angularApiUrl}/classes/datepart.html) to manipulate as it may suite different requirements.
Also, both methods accept an optional `delta` parameter of type `number` which can be used to set the increment/decrement step.

You may compare both in the following sample:
<code-view style="height:150px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/datetime-advanced" >
</code-view>

<div class="divider--half"></div>

Additionally, `spinDelta` is an input property of type [`DatePartDeltas`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html) and it can be used to apply a different delta to each date time segment. It will be applied when spinning with the keyboard, as well as when spinning with the [`increment`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#increment) and [`decrement`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#decrement) methods, as long as they don't have the `delta` parameter provided since it will take precedence over `spinDelta`.

### Angular フォーム
Date Time Editor ディレクティブは、コア FormsModule [NgModel](https://angular.io/api/forms/NgModel) と [ReactiveFormsModule](https://angular.io/api/forms/ReactiveFormsModule) (FormControl、FormGroup など) のすべてのフォーム ディレクティブをサポートします。これには、[フォーム バリデーター](https://angular.io/api/forms/Validators)機能も含まれます。次の例は、テンプレート駆動型フォームで `required` バリデーターを使用する方法を示しています。

> 注: 必要に応じて、`validationFailed` イベントを処理し、利用可能な引数の `newValue` プロパティを変更して有効な状態に戻すことができます。  

テンプレート駆動フォームの例:
```html
<form>
    <igx-input-group>
        <input igxInput type="text" [(ngModel)]="date" name="form" required
            (valueChanged)="onValueChanged($event)" (validationFailed)="onValidationFailed($event)"
            [igxDateTimeEditor]="'dd/MM/yyyy'" [minValue]="minDate" [maxValue]="maxDate" [isSpinLoop]="false" />
    </igx-input-group>
</form>
<div class="divider--half"></div>
```

### テキスト選択
[`igxTextSelection`]({environment:angularApiUrl}/classes/igxtextselectiondirective.html) を使用して、フォーカスがあるコンポーネントにすべての入力テキストを選択させることができます。[Label および Input](label-input.md#フォーカスとテキストの選択) で [`igxTextSelection`]({environment:angularApiUrl}/classes/igxtextselectiondirective.html) の詳細情報を参照してください。

```html
<igx-input-group>
    <input igxInput [igxDateTimeEditor]="'dd/MM/yyyy'" [igxTextSelection]="true"/>
</igx-input-group>
```

> 注: コンポーネントが正しく動作するためには、[`igxDateTimeEditor`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html) ディレクティブの後に [`igxTextSelection`]({environment:angularApiUrl}/classes/igxtextselectiondirective.html) を設定することが重要です。これは、両方のディレクティブが入力 `focus` イベントで動作するため、マスクが設定された後にテキスト選択が行われるからです。

## スタイル設定 
詳細については、[`Input Group スタイル ガイド`](input-group.md#スタイル設定)を参照してください。
<div class="divider--half"></div>

## API リファレンス
* [IgxDateTimeEditorDirective]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html)
* [IgxHintDirective]({environment:angularApiUrl}/classes/igxhintdirective.html)
* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [IgxInputGroupComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-input-group-theme)

<div class="divider--half"></div>


## その他のリソース
関連トピック:
* [Mask](mask.md)
* [Label および Input](label-input.md)
* [リアクティブ フォームの統合](input-group-reactive-forms.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)