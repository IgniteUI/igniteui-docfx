---
title: 日時エディター ディレクティブ - ネイティブ Angular | Ignite UI for Angular 
_description: Ignite UI for Angular Date Time Editor ディレクティブでは、Date オブジェクトによって日付と時刻を処理できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Date Time Editor ディレクティブAngular Date Time ディレクティブ コントロール, Date Time Editor, Angular Date Time ディレクティブ
_language: ja
---


## Date Time Editor ディレクティブ
<p class="highlight">Ignite UI for Angular Date Time Editor ディレクティブでは、選択された入力要素で日付と時刻を設定および編集できます。ユーザーは、編集可能なマスク入力によって日付または時間部分を編集できます。さらに、検証に最小値と最大値だけでなく、希望の表示形式および入力形式の設定を指定できます。</p>
<div class="divider"></div>

<div class="sample-container loading" style="height:100px">
    <iframe id="datetime-basic-iframe" src="{environment:demosBaseUrl}/scheduling/datetime-basic" width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="datetime-basic-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>


### 使用方法
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


input 要素を日時エディターとして使用するには、igxDateTimeEditor ディレクティブと有効なdateオブジェクトを値として設定します。エディターの外観を完全にするには、入力要素を[入力グループ](input_group.md)にラップします。これにより、[`igxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html)、[`igxLabel`]({environment:angularApiUrl}/classes/igxlabeldirective.html)、`igx-prefix`、`igx-suffix`、[`igx-hint`]({environment:angularApiUrl}/classes/igxhintdirective.html) ディレクティブを利用できるだけでなく、フォーム入力を扱うときの一般的なシナリオに対処できます。

#### バインディング 
以下は、Date オブジェクトを [`value`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#value) として設定する基本的な構成シナリオです。
```typescript
public date = new Date();
```

```html
<igx-input-group>
    <input type="text" igxInput igxDateTimeEditor [value]="date" />
</igx-input-group>
```

双方向のデータバインディングを作成するには、ngModel を設定します。
```html
<igx-input-group>
    <input type="text" igxInput igxDateTimeEditor [(ngModel)]="date"/>
</igx-input-group>
```
<div class="divider--half"></div>


#### キーボード ナビゲーション
Date Time Editor ディレクティブには直感的なキーボード ナビゲーション機能があり、マウス操作なしでさまざまな DatePart を移動、インクリメント、デクリメントなどができます。

- <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>左矢印</kbd> / <kbd>右矢印</kbd>  -日付セクション間を移動します。<kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>右矢印</kbd>でセクションの最後に移動します。既に最後にある場合、次のセクション (存在する場合) の最後に移動します。反対方向も同様です。

- <kbd>上矢印</kbd> / <kbd>下矢印</kbd> -日付部分を増減します。関連する [`isSpinLoop`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#isspinloop) を参照してください。

- <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>;</kbd> - エディターの現在の日時を設定します。


### 例

#### 表示および入力形式
IgxDateTimeEditor は、さまざまな表示および入力の形式をサポートします。

表示には、Angular の [DatePipe](https://angular.io/api/common/DatePipe) を使用します。これにより、`shortDate` や `longDate` などの定義済みの形式オプションをサポートできます。DatePipe でサポートされる文字 (`EE/MM/yyyy` など) を使用して構成された書式文字列を受け入れることもできます。注: shortDate、longDate などの形式は `displayFormat` としてのみ使用できます。

特定の入力形式を設定するには、文字列として IgxDateTimeEditor ディレクティブに渡します。これにより、予期されるユーザー入力形式とエディターの[マスク](mask.md)の両方が設定されます。 


```html
<igx-input-group>
    <input type="text" igxInput [displayFormat]="'shortDate'" [igxDateTimeEditor]="'dd/MM/yyyy'" [(ngModel)]="date"/>
</igx-input-group>
```

#### 最小値と最大値
[`minValue`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#minvalue) および [`maxValue`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#maxvalue) プロパティを指定して、ngModel の入力を制限し、有効性を制御できます。
```typescript
public minDate = new Date(2020, 1, 15);
public maxDate = new Date(2020, 12, 1);
``` 

```html
<igx-input-group>
    <input type="text" igxInput igxDateTimeEditor [minValue]="minDate" [maxValue]="maxDate" [(ngModel)]="date"/>
</igx-input-group>

```

#### 増加および減少
`igxDateTimeEditor` ディレクティブはパブリックの`増加`および `減少`メソッドを公開します。現在設定されている日付と時刻の特定の `DatePart` を増減し、いくつかの方法で使用できます。

最初のシナリオでは、特定の DatePart がメソッドに渡されない場合、指定した `inputFormat` および内部ディレクティブの実装に基づいてデフォルトの DatePart が増減します。
2 番目のシナリオでは、さまざまな要件を満たすために操作する DatePart を明示的に指定できます。
以下のサンプルで両方を比較できます。
<div class="sample-container loading" style="height:150px">
    <iframe id="datetime-advanced-iframe" data-src="{environment:demosBaseUrl}/scheduling/datetime-advanced" width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="datetime-advanced-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>


#### Angular フォーム
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

#### テキスト選択
[`igxTextSelection`]({environment:angularApiUrl}/classes/igxtextselectiondirective.html) を使用して、フォーカスがあるコンポーネントにすべての入力テキストを選択させることができます。[Label および Input](label_input.md#フォーカスとテキストの選択) で `igxTextSelection` の詳細情報を参照してください。

```html
<igx-input-group>
    <input igxInput [igxDateTimeEditor]="'dd/MM/yyyy'" [igxTextSelection]="true"/>
</igx-input-group>
```

> 注: コンポーネントが正しく動作するためには、`igxDateTimeEditor` ディレクティブの後に `igxTextSelection` を設定することが重要です。これは、両方のディレクティブが入力 `focus` イベントで動作するため、マスクが設定された後にテキスト選択が行われるからです。

### スタイル設定 
詳細については、[`Input Group スタイル ガイド`](input_group.md#スタイル設定)を参照してください。
<div class="divider--half"></div>

### API リファレンス
* [IgxDateTimeEditorDirective]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html)
* [IgxHintDirective]({environment:angularApiUrl}/classes/igxhintdirective.html)
* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [IgxInputGroupComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-input-group-theme)

<div class="divider--half"></div>


### その他のリソース
関連トピック:
* [Mask](mask.md)
* [Label および Input](label_input.md)
* [リアクティブ フォームの統合](input_group_reactive_forms.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)