---
title: 日付/時刻エディター ディレクティブ - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Date Time Editor ディレクティブでは、Date オブジェクトによって日付と時刻を処理できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Date Time Editor ディレクティブAngular Date Time ディレクティブ コントロール, Date Time Editor, Angular Date Time ディレクティブ
_language: ja
---

# Angular Date Time Editor (日付/時刻エディター) ディレクティブ
<p class="highlight">Ignite UI for Angular Date Time Editor ディレクティブでは、選択された入力要素で日付と時刻を設定および編集できます。ユーザーは、編集可能なマスク入力によって日付または時間部分を編集できます。さらに、検証に最小値と最大値だけでなく、希望の表示形式および入力形式の設定を指定できます。</p>

## Angular Date Time Editor の例

<code-view style="height:100px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/datetime-basic" alt="Angular Date Time Editor 例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Date Time Editor ディレクティブを使用した作業の開始
Ignite UI for Angular Date Time Editor ディレクティブを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxDateTimeEditorModule` をインポートします。

```typescript
// app.module.ts

...
import { IgxDateTimeEditorModule } from 'igniteui-angular';
// import { IgxDateTimeEditorModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxDateTimeEditorModule],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxDateTimeEditorDirective` をスタンドアロンの依存関係としてインポートできます。

```typescript
// home.component.ts

import { IgxDateTimeEditorDirective, IGX_INPUT_GROUP_DIRECTIVES } from 'igniteui-angular';
// import { IgxDateTimeEditorDirective, IGX_INPUT_GROUP_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-input-group>
        <input type="text" igxInput igxDateTimeEditor [value]="date" />
    </igx-input-group>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxDateTimeEditorDirective, IGX_INPUT_GROUP_DIRECTIVES]
})
export class HomeComponent {
    public date = new Date();
}
```

Ignite UI for Angular Date Time Editor モジュールまたはディレクティブをインポートしたので、`igxDateTimeEditor` ディレクティブの使用を開始できます。

## Ignite UI for Angular Date Time Editor ディレクティブの使用

input 要素を日付/時刻エディターとして使用するには、igxDateTimeEditor ディレクティブと有効なdateオブジェクトを値として設定します。エディターの外観を完全にするには、入力要素を [igx-input-group](input-group.md) にラップします。これにより、[`igxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html)、[`igxLabel`](label-input.md)、[`igx-prefix`](input-group.md#prefix-および-suffix)、[`igx-suffix`](input-group.md#prefix-および-suffix)、[`igx-hint`](input-group.md#hint) ディレクティブを利用できるだけでなく、フォーム入力を扱うときの一般的なシナリオに対処できます。

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

#### <a name="iso">ISO 文字列へのバインド</a>
`IgxDateTimeEditorDirective` は、[`ISO 8601`](https://tc39.es/ecma262/#sec-date-time-string-format) 文字列を受け入れます。

文字列は、`YYYY-MM-DDTHH:mm:ss.sssZ` の形式の完全な `ISO` 文字列にすることも、日付のみと時刻のみの部分に分割することもできます。

##### 日付のみ
日付のみの文字列がディレクティブにバインドされている場合は、`YYYY-MM-DD` の形式に従う必要があります。これは、文字列値をディレクティブにバインドする場合にのみ適用されます。[`inputFormat`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#inputFormat) は、エディターで値を入力するときに引き続き使用され、同じ形式である必要はありません。さらに、日付のみの文字列をバインドする場合、ディレクティブは時刻を `T00:00:00` に強制することにより、時刻のずれを防ぎます。

##### 時刻のみ
時刻のみの文字列は通常、`ECMA` 仕様では定義されていませんが、時刻のみのソリューションを必要とするシナリオにディレクティブを統合できるようにするために、24 時間形式 (`HH:mm:ss`) をサポートしています。12 時間形式はサポートされていません。これはバインドされた値のみに適用されることにも注意してください。

##### 完全な ISO 文字列
完全な `ISO` 文字列がバインドされている場合、ディレクティブは [`Date.parse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#date_time_string_format) に必要なすべての要素が指定されている場合にのみそれを解析します。

`InvalidDate` を含むすべての false 値は `null` として解析されます。不完全な日付のみ、時刻のみ、または完全な `ISO` 文字列は `InvalidDate` として解析されます。

### キーボード ナビゲーション
Date Time Editor ディレクティブには直感的なキーボード ナビゲーション機能があり、マウス操作なしでさまざまな DatePart を移動、インクリメント、デクリメントなどができます。

- <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>左矢印</kbd> / <kbd>右矢印</kbd> - 日付セクション間を移動します。<kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>右矢印</kbd>でセクションの最後に移動します。既に最後にある場合、次のセクション (存在する場合) の最後に移動します。反対方向も同様です。

- <kbd>上矢印</kbd> / <kbd>下矢印</kbd> - 日付部分を増減します。関連する [`spinLoop`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#spinLoop) を参照してください。

- <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>;</kbd> - エディターの現在の日付/時刻を設定します。

## 例

### 表示および入力形式
[`IgxDateTimeEditor`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html) は、さまざまな表示および入力の形式をサポートします。

Angular の [`DatePipe`](https://angular.io/api/common/DatePipe) を使用しており、`shortDate` や `longDate` などの事前定義された形式オプションをサポートできます。また、`DatePipe` でサポートされている文字を使用して構築されたフォーマット文字列を受け入れることもできます。例えば、`EE/MM/yyyy` です。`shortDate`、`longDate` などの形式は、[`displayFormat`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#displayFormat) としてのみ使用できることに注意してください。また、[`displayFormat`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#displayFormat) が指定されていない場合、エディターは [`inputFormat`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#inputFormat) を [`displayFormat`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#displayFormat) として使用します。
あるいは、[`inputFormat`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#inputFormat) プロパティが設定されていない場合、入力形式は [`displayFormat`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#displayFormat) から数値の日付と時刻の部分のみを含む形式として解析できる場合に推測されます。

特定の入力形式を設定するには、文字列として IgxDateTimeEditor ディレクティブに渡します。これにより、予期されるユーザー入力形式とエディターの[マスク](mask.md)の両方が設定されます。さらに、[`inputFormat`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#inputFormat) はロケール ベースであるため、何も指定されていない場合、ピッカーはデフォルトでブラウザーで使用されるものになります。

```html
<igx-input-group>
    <input type="text" igxInput [displayFormat]="'shortDate'" [igxDateTimeEditor]="'dd/MM/yyyy'" [(ngModel)]="date"/>
</igx-input-group>
```

次の表は、ディレクティブの [`inputFormat`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#inputFormat) でサポートされている形式を示しています:

| 形式 | 説明 |
| -------- | ----------- |
| `d` | 日付。編集中は先行ゼロで強制されます。 |
| `dd` | 先行ゼロが明示的に設定された日付。 |
| `M` | 月。編集中は先行ゼロで強制されます。 |
| `MM` | 先行ゼロが明示的に設定されている月。 |
| `yy` | 短い年形式。 |
| `yyyy` | 完全な年形式。 |
| `h` | 12 時間形式の時間。編集中は先行ゼロで強制されます。 |
| `hh` | 明示的に先行ゼロが設定された 12 時間形式の時間。 |
| `H` | 24 時間形式の時間。編集中は先行ゼロで強制されます。 |
| `HH` | 明示的に先行ゼロが設定された 24 時間形式の時間。 |
| `m` | 分。編集中に先行ゼロで強制されます。 |
| `mm` | 先行ゼロが明示的に設定された分。 |
| `tt` | 12 時間形式の AM/PM セクション。 |

> [!NOTE]
> `IgxDateTimeEditorDirective` が IME 入力をサポートします。アジア言語の入力を入力すると、コントロールは入力メソッドの構成と候補リストをコントロールの編集領域に直接表示し、構成が終了するとすぐに周囲のテキストを再フローします。

### 最小値と最大値
[`minValue`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#minValue) および [`maxValue`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#maxValue) プロパティを指定して、ngModel の入力を制限し、有効性を制御できます。
```typescript
public minDate = new Date(2020, 1, 15);
public maxDate = new Date(2020, 11, 1);
```

```html
<igx-input-group>
    <input type="text" igxInput igxDateTimeEditor [minValue]="minDate" [maxValue]="maxDate" [(ngModel)]="date"/>
</igx-input-group>

```
[`minValue`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#minValue) および [`minValue`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#minValue) 入力は、タイプ `string` にすることもできます。 [ISO 文字列へのバインド](#iso)を参照してください。

### 増加および減少 <a name="increment-decrement"></a>
[`igxDateTimeEditor`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html) ディレクティブは、公開 [`increment`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#increment) および [`decrement`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#decrement) メソッドを公開します。これらは、現在設定されている日付/時刻の特定の [`DatePart`]({environment:angularApiUrl}/enums/datepart.html) を増加または減少し、いくつかの方法で使用できます。

最初のシナリオでは、特定の [`DatePart`]({environment:angularApiUrl}/enums/datepart.html) がメソッドに渡されない場合、デフォルトの [`DatePart`]({environment:angularApiUrl}/enums/datepart.html) は指定された [`inputFormat`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#inputFormat) と内部ディレクティブの実装に基づいて増加または減少します。2 番目のシナリオでは、さまざまな要件に適合する可能性があるため、操作する [`DatePart`]({environment:angularApiUrl}/enums/datepart.html) を明示的に指定できます。
また、どちらのメソッドも、増加/減少手順を設定するために使用できるタイプ `number` のオプションの `delta` パラメーターを受け入れます。

以下のサンプルで両方を比較できます。
<code-view style="height:150px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/datetime-advanced" >
</code-view>

<div class="divider--half"></div>

さらに、`spinDelta` はタイプ [`DatePartDeltas`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html) の入力プロパティであり、各日付/時刻セグメントに異なるデルタを適用するために使用できます。これは、キーボードで回転するとき、および [`increment`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#increment) メソッドと [`decrement`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#decrement) メソッドで回転するときに適用されます。ただし、`spinDelta` よりも優先されるため `delta` パラメーターが指定されていない場合に限ります。

### Angular フォーム
Date Time Editor ディレクティブは、コア FormsModule [`NgModel`](https://angular.io/api/forms/NgModel) と [`ReactiveFormsModule`](https://angular.io/api/forms/ReactiveFormsModule) (FormControl、FormGroup など) のすべてのフォーム ディレクティブをサポートします。これには、[フォーム `Validators`](https://angular.io/api/forms/Validators)機能も含まれます。次の例は、テンプレート駆動型フォームで `required` バリデータを使用する方法を示しています。

> [!NOTE]
> 必要に応じて、`validationFailed` イベントを処理し、利用可能な引数の `newValue` プロパティを変更して有効な状態に戻すことができます。

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

> [!NOTE]
> コンポーネントが正しく動作するためには、[`igxDateTimeEditor`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html) ディレクティブの後に [`igxTextSelection`]({environment:angularApiUrl}/classes/igxtextselectiondirective.html) を設定することが重要です。これは、両方のディレクティブが入力 `focus` イベントで動作するため、マスクが設定された後にテキスト選択が行われるからです。

## スタイル設定
詳細については、[`Input Group スタイル ガイド`](input-group.md#スタイル設定)を参照してください。
<div class="divider--half"></div>

## API リファレンス
* [IgxDateTimeEditorDirective]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html)
* [IgxHintDirective]({environment:angularApiUrl}/classes/igxhintdirective.html)
* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [IgxInputGroupComponent スタイル]({environment:sassApiUrl}/themes#function-input-group-theme)

<div class="divider--half"></div>


## その他のリソース
関連トピック:
* [Mask](mask.md)
* [Label および Input](label-input.md)
* [リアクティブ フォームの統合](angular-reactive-form-validation.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
