---
title: Mask ディレクティブ - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Mask ディレクティブを使用すると、構成可能なマスク ルールに基づいてユーザー入力を制御し、表示される値を書式設定できます。入力オプションも構成できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Mask ディレクティブ, マスク, ディレクティブ, マスク エディター, Angular Mask エディター
_language: ja
---

## Mask

**テキスト入力フィールド**に [`igxMask`]({environment:angularApiUrl}/classes/igxmaskdirective.html) ディレクティブを適用し、構成可能なマスク ルールに基づいてユーザー入力を制御して表示される値を書式設定できます。入力オプションも構成できます。

### Mask デモ
<div class="sample-container loading" style="height: 330px">
    <iframe id="mask-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/data-display/mask-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="mask-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="mask-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法
[`igxMask`]({environment:angularApiUrl}/classes/igxmaskdirective.html) ディレクティブは **text** 型の入力に使用します。

Mask ディレクティブを初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールする必要があります。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](general/getting_started.md)トピックををご覧ください。

次に、**app.module.ts** ファイルに `IgxMaskModule` と `IgxInputGroupModule` をインポートします。

```typescript
// app.module.ts

...
import { IgxMaskModule, IgxInputGroupModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxInputGroupModule, IgxMaskModule]
    ...
})
export class AppModule {}
```

<div class="divider--half"></div>

#### サポートされる定義済みマスク ルール
<div class="divider--half"></div>

| マスク文字 | 説明 |
| :--- | :--- | 
| 0 | 数値が必須 (0-9) |
| 9 | 数値 (0-9) またはスペースが必須 |
| # | 数値 (0-9)、正符号 (+) 、または負符号 (-) が必須|
| L | 英文字が必須 (a-Z) |
| ? | 英文字 (a-Z) またはスペースが必須 |
| A | 英数字が必須 (0-9, a-Z) |
| a | 英数字 (0-9, a-Z) またはスペースが必須 |
| & | 任意のキーボード文字 (スペース以外) |
| C | 任意のキーボード文字 |

#### マスクを入力に適用
以下の例では、内線を含む電話番号のマスクを入力に適用します。

```html
<!--sample.component.html-->

<igx-input-group>
    <igx-prefix>
        <igx-icon>phone</igx-icon>
    </igx-prefix>
    <label igxLabel>Phone</label>
    <input igxInput type="text" [igxMask]="'(####) 00-00-00 Ext. 9999'"/>
</igx-input-group>
```

サンプルを正しく構成した場合、書式マスクが適用される入力が表示されます。

<div class="sample-container loading" style="height: 100px">
    <iframe id="mask-sample2-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-display/mask-sample-2" class="lazyload"></iframe>
</div>

<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="mask-sample2-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="mask-sample2-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>

#### 書式設定付き/Raw 値にバインド
[`includeLiterals`]({environment:angularApiUrl}/classes/igxmaskdirective.html#includeliterals) 入力を使用して、指定したマスクが適用される場合にフォームにバインドする入力値 (書式設定付きまたは Raw) を構成します。デフォルトで [`includeLiterals`]({environment:angularApiUrl}/classes/igxmaskdirective.html#includeliterals) が *false* に設定し、Raw 値が使用されます。

```html
<!--sample.component.html-->

<igx-switch [(ngModel)]="includeLiterals" (change)="clear()">
    Include Literals
</igx-switch>

<igx-input-group>
    <label igxLabel>
        Social Security Number
    </label>
    <input #ssn name="socialSecurityNumber" type="text"
        igxInput
        [igxMask]="'###-##-####'"
        [(ngModel)]="socialSecurityNumber"
        [includeLiterals]="includeLiterals" />
</igx-input-group>

<p *ngIf="socialSecurityNumber.length > 0">Value: {{ socialSecurityNumber }}</p>
```

```typescript
// sample.component.ts

public socialSecurityNumber: string = "123-45-6789";
public includeLiterals: boolean = true;

public clear() {
    this.socialSecurityNumber = "";
}
```

<div class="sample-container loading" style="height: 160px">
    <iframe id="mask-sample3-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-display/mask-sample-3" class="lazyload"></iframe>
</div>

<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="mask-sample3-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="mask-sample3-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>

#### マスク値を検証
入力にマスクを設定し、入力した値を検証できます。以下の例は、Mask ディレクティブおよび Snack Bar コンポーネントを使用してマスクを実装し、無効なデータのための検証および通知を実装します。

```html
<!--sample.component.html-->

<form class="mask-sample" action="/" method="POST">
    <h4 class="form-title">Personal Data</h4>

    <igx-input-group>
        <label igxLabel for="name">Name</label>
        <input igxInput name="name" type="text" 
            [(ngModel)]="person.name" required />
    </igx-input-group>

    <igx-input-group>
        <label igxLabel for="email">Birthday</label>
        <input igxInput #dateInput name="birthday" type="text"
            [igxMask]="'00/00/0000'"
            [(ngModel)]="person.birthday"
            (blur)="validateDate(dateInput, snackbar)" />
    </igx-input-group>

    <igx-input-group>
        <label igxLabel for="socialSecurityNumber">Social Security Number</label>
        <input igxInput #ssn name="socialSecurityNumber" type="text"
            [igxMask]="'###-##-####'"
            [(ngModel)]="person.socialSecurityNumber"
            (blur)="validateSSN(ssn, snackbar)" />
    </igx-input-group>

    <igx-snackbar #snackbar></igx-snackbar>
</form>
```

```typescript
// sample.component.ts

public person: Person;

constructor() {
    this.person = {
        birthday: null,
        name: "John Doe",
        socialSecurityNumber: ""
    };
}

public ngOnInit() {}

public validateDate(dateInput, snackbar) {
    if (!this.isDateValid(dateInput.value)) {
        this.notify(snackbar, "Invalid Date", dateInput);
    }
}

public validateSSN(ssnInput, snackbar) {
    if (!this.isSSNValid(ssnInput.value)) {
        this.notify(snackbar, "Invalid SSN", ssnInput);
    }
}

private isDateValid(date) {
    return (new Date(date).toLocaleString() !== "Invalid Date");
}

private isSSNValid(ssn) {
    const ssnPattern = /^[0-9]{3}\-?[0-9]{2}\-?[0-9]{4}$/;
    return (ssn.match(ssnPattern));
}

private notify(snackbar, message, input) {
    snackbar.message = message;
    snackbar.show();
}
```

```typescript
// person.ts

export class Person {
    constructor(
        public name: string,
        public socialSecurityNumber: string,
        public birthday: Date
      ) {  }
}
```

#### テキスト選択
[`igxTextSelection`]({environment:angularApiUrl}/classes/igxtextselectiondirective.html) を使用して、フォーカスがあるコンポーネントにすべての入力テキストを選択させることができます。[Label および Input](label_input.md#フォーカスとテキストの選択) で `igxTextSelection` の詳細情報を参照してください。

```html
<igx-input-group>
    <input igxInput [igxMask]="'###-##-####'" [igxTextSelection]="true"/>
</igx-input-group>
```

> 注: コンポーネントが正しく動作するためには、`igxMask` ディレクティブの後に `igxTextSelection` を設定することが重要です。これは、両方のディレクティブが入力 `focus` イベントで動作するため、マスクが設定された後にテキスト選択が行われるからです。

#### focus と blur に追加の書式を適用
デフォルトの mask 動作に加え、カスタムパイプを実装して [`focusedValuePipe`]({environment:angularApiUrl}/classes/igxmaskdirective.html#focusedvaluepipe) や [`displayValuePipe`]({environment:angularApiUrl}/classes/igxmaskdirective.html#displayvaluepipe) 入力プロパティで入力がフォーカスを get または lost した場合に値を必要なアウトプットへ変換できます。基になるモデル値に影響はありません。以下はその方法です。

 表示値の最後に '%' サインを追加または削除する 2 つのパイプを実装します。
```typescript
@Pipe({ name: 'displayFormat' })
export class DisplayFormatPipe implements PipeTransform {
    transform(value: any): string {
        let val = value;
        if (val.indexOf('%') === -1) {
            val += '%';
        }
        return val;
    }
}

@Pipe({ name: 'inputFormat' })
export class InputFormatPipe implements PipeTransform {
    transform(value: any): string {
        let val = value;
        if (val.indexOf('%') !== -1) {
            val = val.replace(new RegExp('%', 'g'), '');
        }
        return val;
    }
}
```

[`focusedValuePipe`]({environment:angularApiUrl}/classes/igxmaskdirective.html#focusedvaluepipe) や [`displayValuePipe`]({environment:angularApiUrl}/classes/igxmaskdirective.html#displayvaluepipe) 入力プロパティに各パイプのインスタンスを渡します。

```typescript
value = 1230;
displayFormat = new DisplayFormatPipe();
inputFormat = new InputFormatPipe();
```
```html
<igx-input-group>
    <label igxLabel for="email">Increase</label>
    <input igxInput type="text" [(ngModel)]="value"
                                [igxMask]="'00.00'"
                                [focusedValuePipe]="inputFormat"
                                [displayValuePipe]="displayFormat"/>
</igx-input-group>
```

'%' 記号が blur の値に追加されて (ユーザーが入力以外をクリックした場合など) 入力がフォーカスを取得すると削除されます。

<div class="sample-container loading" style="height: 100px">
    <iframe id="mask-sample4-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-display/mask-sample-4" class="lazyload"></iframe>
</div>

<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="mask-sample4-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="mask-sample4-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>

#### プレースホルダーの追加
[`placeholder`]({environment:angularApiUrl}/classes/igxmaskdirective.html#placeholder) プロパティは、ネイティブ プレースホルダー属性として使用できます。[`placeholder`]({environment:angularApiUrl}/classes/igxmaskdirective.html#placeholder) に値が提供されない場合、マスクの値セットが使用されます。

```typescript
value = null;
```
```html
<igx-input-group>
    <label igxLabel>Date</label>
    <input igxInput type="text" [(ngModel)]="value"
                                [igxMask]="'00/00/0000'"
                                [placeholder]="'dd/mm/yyyy'"/>
</igx-input-group>
```

<div class="sample-container loading" style="height: 100px">
    <iframe id="mask-sample5-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-display/mask-sample-5" class="lazyload"></iframe>
</div>

<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="mask-sample5-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="mask-sample5-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>

### API リファレンス
<div class="divider--half"></div>

* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [IgxMaskDirective]({environment:angularApiUrl}/classes/igxmaskdirective.html)
* [IgxSnackbarComponent]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html)

### その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
