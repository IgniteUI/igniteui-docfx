---
title: Mask ディレクティブ - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Mask ディレクティブを使用すると、構成可能なマスク ルールに基づいてユーザー入力を制御し、表示される値を書式設定できます。入力オプションも構成できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Mask ディレクティブ, マスク, ディレクティブ, マスク エディター, Angular Mask エディター
_language: ja
---

# Mask

**テキスト入力フィールド**に [`igxMask`]({environment:angularApiUrl}/classes/igxmaskdirective.html) ディレクティブを適用し、構成可能なマスク ルールに基づいてユーザー入力を制御して表示される値を書式設定できます。入力オプションも構成できます。

## Angular Mask の例

<code-view style="height: 100px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/mask-sample-2" alt="Angular Mask の例">
</code-view>

<div class="divider--half"></div>

## 使用方法
[`igxMask`]({environment:angularApiUrl}/classes/igxmaskdirective.html) ディレクティブは **text** 型の入力に使用します。

はじめに、**app.module.ts** ファイルに `IgxMaskModule` と `IgxInputGroupModule` をインポートします。

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

### サポートされる定義済みマスク ルール
<div class="divider--half"></div>

| マスク文字 | 説明 |
| :--- | :--- | 
| 0 | 数値が必須 (0-9) |
| 9 | 数値 (0-9) またはスペースが必須 |
| # | 数値 (0-9)、正符号 (+)、または負符号 (-) が必須|
| L | 英文字が必須 (a-Z) |
| ? | 英文字 (a-Z) またはスペースが必須 |
| A | 英数字が必須 (0-9、a-Z) |
| a | 英数字 (0-9、a-Z) またはスペースが必須 |
| & | 任意のキーボード文字 (スペース以外) |
| C | 任意のキーボード文字 |

### マスクを入力に適用
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

正しく構成されていれば、ブラウザ上でデモサンプルを確認することができます。

### 書式設定付き/Raw 値にバインド
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
    if (this.includeLiterals === false){
        this.socialSecurityNumber = "123-45-6789";
    } else {
        this.socialSecurityNumber = "";
    }
}
```


<code-view style="height: 160px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/mask-sample-3" >
</code-view>


### マスク値を検証
入力にマスクを設定し、入力した値を検証できます。以下の例は、Mask ディレクティブおよび Snack Bar コンポーネントを使用してマスクを実装し、無効なデータのための検証および通知を実装します。

```html
<!--sample.component.html-->

<igx-input-group>
    <label igxLabel for="birthday">Birthday</label>
    <input igxInput #dateInput [igxMask]="'00/00/0000'" [igxTextSelection]="true" name="birthday" type="text"
        (blur)="validateDate(dateInput, snackbar)" />
</igx-input-group>

<igx-snackbar #snackbar></igx-snackbar>
```

```typescript
// sample.component.ts

public validateDate(dateInput, snackbar) {
    if (!this.isDateValid(dateInput.value)) {
        this.notify(snackbar, "Invalid Date", dateInput);
    }
}

private isDateValid(date) {
    return (new Date(date).toLocaleString() !== "Invalid Date");
}

private notify(snackbar, message, input) {
    snackbar.message = message;
    snackbar.show();
}
```


<code-view style="height: 120px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/mask-sample-1" >
</code-view>

<div class="divider--half"></div>

### テキスト選択
[`igxTextSelection`]({environment:angularApiUrl}/classes/igxtextselectiondirective.html) を使用して、フォーカスがあるコンポーネントにすべての入力テキストを選択させることができます。[Label および Input](label-input.md#フォーカスとテキストの選択) で `igxTextSelection` の詳細情報を参照してください。

**app.module.ts** ファイルに  `IgxToastModule` をインポートします:

```typescript
...
import { ..., IgxTextSelectionModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxTextSelectionModule]
    ...
})
export class AppModule {}
```

次に、以下をテンプレートに追加します:

```html
<igx-input-group>
    <input igxInput [igxMask]="'###-##-####'" [igxTextSelection]="true"/>
</igx-input-group>
```

これが前のサンプルでどのように機能するかを確認できます。

>[!NOTE]
>コンポーネントが正しく動作するためには、`igxMask` ディレクティブの後に `igxTextSelection` を設定することが重要です。これは、両方のディレクティブが入力 `focus` イベントで動作するため、マスクが設定された後にテキスト選択が行われるからです。

### focus と blur に追加の書式を適用
デフォルトの mask 動作に加え、カスタムパイプを実装して [`focusedValuePipe`]({environment:angularApiUrl}/classes/igxmaskdirective.html#focusedvaluepipe) や [`displayValuePipe`]({environment:angularApiUrl}/classes/igxmaskdirective.html#displayvaluepipe) 入力プロパティで入力がフォーカスを get または lost した場合に値を必要なアウトプットへ変換できます。基になるモデル値に影響はありません。以下はその方法です。

 表示値の最後に '%' サインを追加または削除する 2 つのパイプを実装します。
```typescript
@Pipe({ name: "displayFormat" })
export class DisplayFormatPipe implements PipeTransform {
    public transform(value: any): string {
        return value + " %";
    }
}

@Pipe({ name: "inputFormat" })
export class InputFormatPipe implements PipeTransform {
    public transform(value: any): string {
        return value;
    }
}
```

[`focusedValuePipe`]({environment:angularApiUrl}/classes/igxmaskdirective.html#focusedvaluepipe) や [`displayValuePipe`]({environment:angularApiUrl}/classes/igxmaskdirective.html#displayvaluepipe) 入力プロパティに各パイプのインスタンスを渡します。

```typescript
public value = 100;
public displayFormat = new DisplayFormatPipe();
public inputFormat = new InputFormatPipe();
```
```html
<igx-input-group>
    <label igxLabel for="email">Increase</label>
    <input igxInput
    type="text"
    [(ngModel)]="value"
    [igxMask]="'000'"
    [igxTextSelection]="true"
    [focusedValuePipe]="inputFormat"
    [displayValuePipe]="displayFormat"/>
</igx-input-group>
```

'%' 記号が blur の値に追加されて (ユーザーが入力以外をクリックした場合など) 入力がフォーカスを取得すると削除されます。


<code-view style="height: 100px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/mask-sample-4" >
</code-view>


### プレースホルダーの追加
[`placeholder`]({environment:angularApiUrl}/classes/igxmaskdirective.html#placeholder) プロパティは、ネイティブ プレースホルダー属性として使用できます。[`placeholder`]({environment:angularApiUrl}/classes/igxmaskdirective.html#placeholder) に値が提供されない場合、マスクの値セットが使用されます。

```typescript
value = null;
```
```html
<igx-input-group>
    <label igxLabel>Date</label>
    <input igxInput
    type="text"
    [(ngModel)]="value"
    [igxMask]="'00/00/0000'"
    [placeholder]="'dd/mm/yyyy'"/>
</igx-input-group>
```


<code-view style="height: 100px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/mask-sample-5" >
</code-view>


## API リファレンス
<div class="divider--half"></div>

* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [IgxMaskDirective]({environment:angularApiUrl}/classes/igxmaskdirective.html)
* [IgxSnackbarComponent]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
