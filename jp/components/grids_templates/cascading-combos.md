---
title: Angular @@igComponent Grid でのカスケード コンボ - インフラジスティックス
_description: カスケード コンボを使用した Grid  について説明します。コンポーネントのサンプルも提供しています。
_keywords: angular grid でのカスケード コンボ, ignite ui for angular, インフラジスティックス
_language: ja
---

# カスケード コンボを使用した Angular Grid
グリッドの編集機能は、[カスケード コンボ](../simple-combo.md#カスケーディング)を使用する機会を提供します。前の[コンボ](../combo.md)で値を選択することにより、ユーザーは次のコンボ内の選択に関連するデータのみを受け取ります。

## カスケード コンボを使用した Angular Grid サンプルの概要
以下のサンプルは、`Grid` がネストされた `Cascading Combos` でどのように機能するかを示しています。

@@if (igxName === 'IgxGrid') {
<code-view style="height:500px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-cascading-combos" alt="Angular @@igComponent 一括編集とトランザクションの例">
</code-view>
}

## 設定
列の編集を有効にするには、[`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) プロパティが **true** に設定されていることを確認してください。

列の編集が有効になったら、[単一選択コンボ ボックス](../simple-combo.md)を追加します。ここで 1 つの選択のみを使用できるようにするには、igxCombo を変更する代わりに [igxSimpleCombo](../simple-combo.md) を使用する必要があることに注意してください。

[Simple ComboBox](../simple-combo.md#angular-simple-combobox-の機能) コンポーネントの使用を開始するには、最初に `IgxSimpleComboModule` を **app.module.ts** ファイルにインポートする必要があります。

```typescript
import { IgxSimpleComboModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxSimpleComboModule,
        ...
    ]
})
export class AppModule {}
```

次に、テンプレートで、[igx-simple-combo]({environment:angularApiUrl}/classes/igxsimplecombocomponent.html) をいくつかのデータにバインドする必要があります。

- `displayKey` - **オブジェクト配列に必要** - 項目のテキストに使用されるプロパティを指定します。[displayKey]({environment:angularApiUrl}/classes/IgxSimpleComboComponent.html#displayKey) に値が指定されていない場合、Simple ComboBox は指定された `valueKey` (存在する場合) を使用します。

```typescript
export class MySimpleComboComponent implements OnInit {
    public countriesData: Country[];
    public selectedCountry: Country;
    public selectedCity: City;

    public ngOnInit() {
        this.countriesData = getCountries([
            'United States',
            'Japan',
            'United Kingdom'
        ]);
    }
}
```

選択の変更を処理するには、[selectionChanging()]({environment:angularApiUrl}/classes/IgxComboComponent.html#selectionChanging) が必要です。発行されたイベント引数 [IComboSelectionChangingEventArgs]({environment:angularApiUrl}/interfaces/icomboselectionchangingeventargs.html) には、変更前の選択、現在の選択、追加または削除された項目に関する情報が含まれています。したがって、前のコンボの選択に基づいて値をフィルタリングします。

```html
<igx-combo [data]="countriesData" (selectionChanging)="countryChanging($event)"></igx-combo>
```

```typescript
public countryChanging(event: IComboSelectionChangeEventArgs) {
    if (event.added.length) {
        event.newSelection = event.added;
    }
}
```

最後に、[リニア プログレス](../linear-progress.md)を追加します。これは、データのリストをの読み込むときに必要です。
[`id`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#id) は、`id` 属性の値を設定するために必要です。

```html
 <igx-linear-bar 
    [id]="'region-progress-' + cell.row.data.ID" 
    [style.visibility]="'hidden'"
    type="info" [indeterminate]="true">
</igx-linear-bar>
```

## API まとめ
<div class="divider--half"></div>

* [IgxSimpleComboComponent]({environment:angularApiUrl}/classes/igxsimplecombocomponent.html)
* [IgxComboComponent スタイル]({environment:sassApiUrl}/index.html#function-combo-theme)
* [IgxLinearProgressBarComponent]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html)
* [IgxLinearProgressBarComponent スタイル]({environment:sassApiUrl}/index.html#function-progress-linear-theme)

## その他のリソース

* [@@igComponent 編集](editing.md)
* [単一選択コンボボックス](../simple-combo.md)
* [カスケード コンボ](../simple-combo.md#カスケーディング)
* [リニア プログレス](../linear-progress.md)