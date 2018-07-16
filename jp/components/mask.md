---
title: Mask ディレクティブ - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Mask ディレクティブを使用すると、構成可能なマスク ルールに基づいてユーザー入力を制御し、表示される値を書式設定できます。入力オプションも構成できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Mask ディレクティブ, マスク, ディレクティブ, マスク エディター, Angular Mask エディター
_language: ja
---

## Mask

**テキスト入力フィールド**に `igxMask` ディレクティブを適用し、構成可能なマスク ルールに基づいてユーザー入力を制御して表示される値を書式設定できます。入力オプションも構成できます。

### Mask デモ
<div class="sample-container loading" style="height: 300px">
    <iframe id="mask-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/mask-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="mask-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> Ignite UI for Angular コンポーネントをプロジェクトに追加する前に、すべての必要な依存関係を構成し、プロジェクトのセットアップが正しく完了したことを確認してください。「[**インストール**](https://jp.infragistics.com/products/ignite-ui-angular/getting-started#installation)」のトピックで手順を参照できます。

### 使用方法

`igxMask` ディレクティブは **text** 型の入力に使用します。Ignite UI for Angular Mask ディレクティブを初期化する前に、**IgxMaskModule** および **IgxInputGroupModule** を **app.module.ts** ファイルにインポートします。**igxMask** ディレクティブを任意の Angular 入力コントロールと使用できます。

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
    <iframe id="mask-sample2-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/mask-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="mask-sample2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>

#### 書式設定付き/Raw 値にバインド

`includeLiterals` 入力を使用して、指定したマスクが適用される場合にフォームにバインドする入力値 (書式設定付きまたは Raw) を構成します。デフォルトで `includeLiterals` が *false* に設定し、Raw 値が使用されます。

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
    <iframe id="mask-sample3-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/mask-sample-3" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="mask-sample3-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>

#### マスク値を検証

入力にマスクを設定し、入力した値を検証できます。以下の例は、Mask ディレクティブおよび Snack Bar コンポーネントを使用してマスクを実装し、無効なデータのための検証および通知を実装します。

```html
<!--sample.component.html-->

<form class="mask-sample" action="/" method="POST">
    <h4 class="form-title">Personal Data</h4>

    <igx-input-group>
        <label igxLabel for="name">Name</label>
        <input igxInput name="name" type="text" required 
        [(ngModel)]="person.name" />
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

### API まとめ

以下の表は便利な **igxMask** ディレクティブの入力および出力を説明します。

<div class="divider--half"></div>

#### 入力

以下の入力は **igxMask** ディレクティブで利用できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `igxMask` | string | 現在の入力マスクを指定します。 |
| `promptChar` | string | マスクで入力可能な文字を表すキャラクターを指定します。デフォルトでプロンプト文字は "_" です。 |
| `includeLiterals` | boolean | バインドされた値が書式設定記号を含むかどうかを指定します。  |

<div class="divider--half"></div>

#### 出力

以下の出力は **igxMask** ディレクティブで利用できます。

| 名前 | 説明 |
| :--- | :--- |
| `onValueChange`  | 値が変更されたときにイベントを発生します。イベント パラメーターは `rawValue` および `formattedValue` プロパティを提供します。 |


### 追加のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
