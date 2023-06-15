---
title: 単一選択 ComboBox コンポーネント
_description: Ignite UI for Angular ComboBox は、基本的な HTML 入力、選択、フィルタリング、およびカスタム ドロップダウン リストの機能を組み合わせた強力な入力を提供します。無料でお試しください。
_keywords: angular 単一選択 combobox, angular combobox コンポーネント, angular 単一選択 combobox コンポーネント, angular combo, angular ui コンポーネント, ignite ui for angular, インフラジスティックス
_language: ja
---

# Angular Single Select ComboBox (単一選択のコンボボックス) コンポーネントの概要

Angular Single Select ComboBox コンポーネントは、単一の選択を可能にする [ComboBox コンポーネント](combo.md)の変更です。これを「シンプルなコンボ」と呼びます。元の ComboBox コンポーネントの単一選択モードに対する需要が高かったため、ユーザーが事前定義された項目リストからオプションを選択し、カスタム値を入力できるようにする編集可能な検索入力を提供する拡張コンポーネントを作成しました。

## Angular Simple ComboBox の例

この Angular Simple ComboBox の例では、ユーザーがチャートのトレンドライン タイプを選択する方法を確認できます。さらに、Simple ComboBox は、キーボード ナビゲーションとカスタム スタイル設定機能を公開します。

<div class="divider--half"></div>

<code-view style="height: 500px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/simple-combo-main" alt="Angular Simple ComboBox の例">
</code-view>

<div class="divider--half"></div>

## Angular Simple ComboBox の機能

Simple ComboBox コントロールは、次の機能を公開します:
    - データ バインディング - ローカル データおよびリモート データ
    - 値バインディング
    - フィルタリング
    - グループ化
    - カスタム値
    - テンプレート
    - テンプレート駆動フォームおよびリアクティブ フォームとの統合

## Ignite UI for Angular Simple ComboBox を使用した作業の開始

Ignite UI for Angular Simple ComboBox コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxSimpleComboModule` をインポートします。

```typescript
import { IgxSimpleComboModule } from 'igniteui-angular';
// import { IgxSimpleComboModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    imports: [
        ...
        IgxSimpleComboModule,
        ...
    ]
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxSimpleComboComponent` をスタンドアロンの依存関係としてインポートすることも、[`IGX_SIMPLE_COMBO_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/simple-combo/public_api.ts) トークンを使用してコンポーネントとそのすべてのサポート コンポーネントおよびディレクティブをインポートすることもできます。

```typescript
// home.component.ts

import { IGX_SIMPLE_COMBO_DIRECTIVES } from 'igniteui-angular';
// import { IGX_SIMPLE_COMBO_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<igx-simple-combo></igx-simple-combo>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_SIMPLE_COMBO_DIRECTIVES]
    /* or imports: [IgxSimpleComboComponent] */
})
export class HomeComponent {}
```

Ignite UI for Angular Simple ComboBox モジュールまたはディレクティブをインポートしたので、`igx-simple-combo` コンポーネントの使用を開始できます。

## Angular Simple ComboBox の使用

通常のコンボボックスと同様に、[igx-simple-combo]({environment:angularApiUrl}/classes/igxsimplecombocomponent.html) をデータにバインドできます。

```typescript
export class MySimpleComboComponent implements OnInit {
    public cities: City[];

    public ngOnInit() {
        this.cities = getCitiesByPopulation(10000000);
    }
}
```

```html
<igx-simple-combo [data]="cities"></igx-simple-combo>
```

これで、Simple ComboBox が cities の配列にバインドされました。

### データ値と表示プロパティ

Simple ComboBox は複雑なデータ (つまりオブジェクト) の配列にバインドされているため、選択した項目を処理するためにコントロールが使用するプロパティを指定する必要があります。このコントロールは、[valueKey]({environment:angularApiUrl}/classes/IgxSimpleComboComponent.html#valueKey) と [displayKey]({environment:angularApiUrl}/classes/IgxSimpleComboComponent.html#displayKey) の 2 つの `@Input` プロパティを公開します:

 - `valueKey` - **オプション、オブジェクト配列に推奨** - Simple ComboBox の選択のためにデータ エントリのどのプロパティを保存するかを指定します。`valueKey` を省略すると、Simple ComboBox 値はデータ エントリへの参照を使用します (つまり、選択は `igxSimpleCombo.data` からのエントリの配列になります)。
 - `displayKey` - **オブジェクト配列に必要** - 項目のテキストに使用されるプロパティを指定します。`displayKey` に値が指定されていない場合、Simple ComboBox は指定された `valueKey` (存在する場合) を使用します。

この場合、Simple ComboBox に各都市の `name` を表示し、Simple ComboBox の値に各都市の `id` を保存する必要があります。したがって、これらのプロパティを Simple ComboBox の `displayKey` と `valueKey` にそれぞれ提供します。

```html
<igx-simple-combo [data]="cities" [displayKey]="'name'" [valueKey]="'id'"></igx-simple-combo>
```

> [!Note]
> データ ソースが単純なタイプ (`string[]`、`number[]` など）で構成されている場合、`valueKey` と `displayKey` を**指定しないでください**。

### 双方向バインディング

Simple ComboBox コンポーネントは、`[(ngModel)]` を使用した双方向のデータ バインディングと、[テンプレート駆動型](https://angular.io/guide/forms)および[リアクティブ フォーム](https://angular.io/guide/reactive-forms)での使用を完全にサポートします。Simple ComboBox の選択には、双方向バインディングまたは[選択 API](#選択-api) を介してアクセスできます。(`valueKey` に基づいて) Simple ComboBox の選択にあるものと同じタイプの項目を渡すことができ、一方が変更されるたびに、もう一方もそれに応じて更新されます。

次の例では、提供されたデータの最初の都市が最初に選択されます。Simple ComboBox の選択をさらに変更すると、`selectedCities` に反映されます。

```html
<igx-simple-combo [data]="cities" [(ngModel)]="selectedCity" [displayKey]="'name'" [valueKey]="'id'"></igx-simple-combo>
```

```typescript
export class MySimpleComboComponent implements OnInit {
    public cities: City[];
    public selectedCity: number;

    public ngOnInit(): void {
        this.cities = getCitiesByPopulation(10000000);
        this.selectedCity = this.cities[0].id;
    }
}
```


<code-view style="height: 480px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/simple-combo-usage" >
</code-view>


`valueKey` を指定しない場合も双方向バインディングを設定できます。たとえば、`valueKey` を省略すると、バインドされたモデルは次のようになります。

```typescript
export class MySimpleComboComponent {
    public cities: City[] = [
                   { name: 'Sofia', id: '1' }, { name: 'London', id: '2' }, ...];
    public selectedCity: City = this.cities[0];
}
```


### 選択 API

Simple ComboBox コンポーネントは、コントロールの現在の選択状態を取得および操作できるようにする API を公開します。

Simple ComboBox の選択を取得する 1 つの方法は、[selection]({environment:angularApiUrl}/classes/igxsimplecombocomponent.html#selection) プロパティを使用することです。指定された [valueKey](#データ値と表示プロパティ) (存在する場合) に応じて、選択された項目に対応する値を返します。

この例では、`selection` は選択された都市の `id` を返します:

```typescript
export class MySimpleComboComponent {
    ...
    public selection: string = this.simpleCombo.selection;
}
```

選択 API を使用すると、ユーザーがコントロールを操作せずに、Simple ComboBox の選択された項目を変更することもできます (ボタンのクリックを介して、Observable の変更への応答としてなどです)。たとえば、[select]({environment:angularApiUrl}/classes/igxsimplecombocomponent.html#select) メソッドを使用して、都市を選択するボタンを実装できます。

```html
<igx-simple-combo [data]="cities" [displayKey]="'name'" [valueKey]="'id'"></igx-simple-combo>
<button igxButton (click)="selectFavorite()">Select Favorite</button>
```

ボタンをクリックすると、London の都市が Simple ComboBox の選択に追加されます。

```typescript
export class MySimpleComboComponent {
    @ViewChild(IgxSimpleComboComponent, { read: IgxSimpleComboComponent, static: true })
    public simpleCombo: IgxSimpleComboComponent;
    ...
    selectFavorites(): void {
        this.simpleCombo.select('2');
    }
}
```

Simple ComboBox は、選択が変更されるたびに [selectionChanging]({environment:angularApiUrl}/classes/IgxSimpleComboComponent.html#selectionChanging) イベントを発生させます。発行されたイベント引数 [ISimpleComboSelectionChangingEventArgs]({environment:angularApiUrl}/interfaces/isimplecomboselectionchangingeventargs.html) には、変更前の選択、現在の選択、および表示された項目に関する情報が含まれています。イベントをキャンセルして、新しい項目による選択の更新を防ぐこともできます。

イベントへのバインドは、`igx-simple-combo` タグの適切な `@Output` プロパティを介して行うことができます。

```html
<igx-simple-combo [data]="cities" [displayKey]="'name'" [valueKey]="'id'"
           (selectionChanging)="handleCityChange($event)">
</igx-simple-combo>
```

<div class="divider--half"></div>

## キーボード ナビゲーション

Simple ComboBox を閉じてフォーカスを合わせると、次のようになります:
- `ArrowDown` または `Alt + ArrowDown` は、Simple ComboBox のドロップダウンを開きます。

> [!NOTE]
> その他のキー ストロークはすべて入力によって処理されます。

Simple ComboBox が開かれ、リスト項目がフォーカスされている場合:
- `下矢印` は次のリスト項目に移動します。アクティブな項目がリストの最後の項目で、カスタム値が有効な場合、フォーカスは [項目の追加] ボタンに移動します。

- `上矢印` は前のリスト項目に移動します。アクティブな項目がリストの最初の項目である場合、フォーカスは検索入力に戻り、入力内のすべてのテキストも選択されます。

- `End` は最後のリスト項目に移動します。

- `Home` は最初のリスト項目に移動します。

- `Space` キーはアクティブなリスト項目を選択/選択解除します。

- `Enter` を押すと、アクティブなリスト項目が選択/選択解除され、リストが閉じます。

- `Esc` はリストを閉じます。

コンボボックスを開くと、カスタム値が有効になり、項目の追加ボタンがフォーカスされます。

- `Enter` キーは、検索入力のテキストと等しい `valueKey` と `displayKey` を持つ新しい項目を追加し、その項目を選択します。

- `上矢印` はフォーカスを最後のリスト項目に戻すか、あるいはリストが空の場合はフォーカスを入力に移動します。

## カスケーディング

次のサンプルは、[igx-simple-combo]({environment:angularApiUrl}/classes/igxsimplecombocomponent.html) が使用されるシナリオを示しています。


<code-view style="height: 620px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/simple-combo-cascading" alt="Angular カスケーディングの例">
</code-view>


[カスケード コンボを使用した Angular Grid のサンプル](../components/grid/cascading-combos.md)を参照してください。

<div class="divider--half"></div>

### テンプレートの構成
Simple ComboBox の API を使用して、あるコンポーネントから選択した項目を取得し、次のコンポーネントのデータ ソースを読み込んで、必要に応じて選択とデータ ソースをクリアします。

```html
<igx-simple-combo #country
    [data]="countriesData"
    (selectionChanging)="countryChanging($event)"
    placeholder="Choose Country..."
    [(ngModel)]="selectedCountry"
    [displayKey]="'name'">
</igx-simple-combo>
<igx-simple-combo #region
    [data]="regionData"
    (selectionChanging)="regionChanging($event)"
    placeholder="Choose Region..."
    [(ngModel)]="selectedRegion"
    [displayKey]="'name'"
    [disabled]="regionData.length === 0">
</igx-simple-combo>
<igx-simple-combo #city
    [data]="citiesData"
    placeholder="Choose City..."
    [(ngModel)]="selectedCity"
    [displayKey]="'name'"
    [disabled]="citiesData.length === 0">
</igx-simple-combo>
```

### コンポーネント定義
```typescript
export class SimpleComboCascadingComponent implements OnInit {
    public selectedCountry: Country;
    public selectedRegion: Region;
    public selectedCity: City;
    public countriesData: Country[];
    public regionData: Region[] = [];
    public citiesData: City[] = [];
    public ngOnInit(): void {
        this.countriesData = getCountries(['United States', 'Japan', 'United Kingdom']);
    }

    public countryChanging(e: ISimpleComboSelectionChangingEventArgs) {
        this.selectedCountry = e.newSelection as Country;
        this.regionData = getCitiesByCountry([this.selectedCountry?.name])
            .map(c => ({name: c.region, country: c.country}))
            .filter((v, i, a) => a.findIndex(r => r.name === v.name) === i);
        this.selectedRegion = null;
        this.selectedCity = null;
        this.citiesData = [];
    }

    public regionChanging(e: ISimpleComboSelectionChangingEventArgs) {
        this.selectedRegion = e.newSelection as Region;
        this.citiesData = getCitiesByCountry([this.selectedCountry?.name])
            .filter(c => c.region === this.selectedRegion?.name);
        this.selectedCity = null;
    }
}
```

## Angular Simple ComboBox リモート バインディング

Ignite UI for Angular Simple ComboBox コンポーネントは、コンボボックスをリモート サービスにバインドし、要求に応じてデータを取得できる API を公開します。

### デモ
以下のサンプルは、[dataPreLoad]({environment:angularApiUrl}/classes/IgxSimpleComboComponent.html#dataPreLoad) プロパティを使用してリモート データの新しいチャンクをロードし、[ComboBox リモート バインディング](combo-remote.md)で説明されている手順に従うリモート バインディングを示しています。

<code-view style="height: 400px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/simple-combo-remote" alt="Angular Simple Combo リモート バインディングの例">
</code-view>

## Angular Simple ComboBox のスタイル設定

[Ignite UI for Angular Theming](themes/index.md) を使用すると、Simple ComboBox の外観を大幅に変更できます。はじめに、テーマ エンジンによって公開されている関数を使用するために、スタイル ファイルに `index` ファイルをインポートする必要があります。

```scss
@use 'igniteui-angular/theming' as *;
```

最も単純なアプローチに従って、[combo-theme]({environment:sassApiUrl}/index.html#function-combo-theme) を拡張し、`$empty-list-background` パラメーターを受け入れる新しいテーマを作成します。
```scss
$custom-simple-combo-theme: combo-theme(
    $empty-list-background: #1a5214
);
```

[IgxSimpleComboComponent]({environment:angularApiUrl}/classes/igxsimplecombocomponent.html) は、[IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) を項目コンテナーとして内部的に使用します。[IgxInputGroup]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html) コンポーネントも含まれています。これらのコンポーネントのテーマを拡張する新しいテーマを作成し、それぞれのクラスの下でそれらをスコープすると、Simple ComboBox のスタイルを変更できます。

```scss
$custom-drop-down-theme: drop-down-theme(
    $background-color: #d9f5d6,
    $header-text-color: #1a5214,
    $item-text-color: #1a5214,

    $focused-item-background: #72da67,
    $focused-item-text-color: #1a5214,
    $hover-item-background: #a0e698,
    $hover-item-text-color: #1a5214,

    $selected-item-background: #a0e698,
    $selected-item-text-color: #1a5214,
    $selected-hover-item-background: #72da67,
    $selected-hover-item-text-color: #1a5214,
    $selected-focus-item-background: #72da67,
    $selected-focus-item-text-color: #1a5214,
);
```

最後にコンポーネントのテーマを含めます。

```scss
:host ::ng-deep {
    @include css-vars($custom-combo-theme);
    @include css-vars($custom-drop-down-theme);
}
```

> [!NOTE]
> [IgxSimpleCombo]({environment:angularApiUrl}/classes/igxsimplecombocomponent.html) コンポーネントは、[IgxOverlay](overlay.md) サービスを使用して、Simple ComboBox 項目リスト コンテナーを保持および表示します。スタイルを適切にスコープするには、[OverlaySetting.outlet]({environment:angularApiUrl}/interfaces/overlaysettings.html#outlet) を使用してください。詳細については、[IgxOverlay スタイル ガイド](overlay-styling.md)を確認してください。

> [!Note]
> `IgxSimpleCombo` のデフォルトの`タイプ`は、`line` である [IgxSelect](select.md) とは異なり `box` です。

### サンプル

<code-view style="height:500px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/simple-combo-styling" >
</code-view>


<div class="divider--half"></div>

## 既知の問題

- Simple ComboBox には、高さのサイズを設定するための入力がありません。将来、[IgxInputGroup]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html) コンポーネントは、カスタムのサイズ変更オプションを公開し、[IgxSimpleCombo]({environment:angularApiUrl}/classes/igxsimplecombocomponent.html) は適切なスタイル設定と外観の統一に同じ機能を使用します。
- シンプルなコンボボックスが `undefined` (例: `[ undefined, ...]`) を含むプリミティブ データの配列にバインドされる場合、`undefined` はドロップダウンに表示されません。複合データ (オブジェクトなど) の配列にバインドされ、`valueKey` に使用される値が `undefined` の場合、項目はドロップダウンに表示されますが、選択はできません。
- シンプルなコンボボックスが `ngModel` でバインドされ、`required` とマークされている場合、`null`、`undefined`、`''` の値は選択できません。
- シンプルなコンボボックスがリモート サービスにバインドされ、定義済みの選択がある場合、要求されたデータが読み込まれるまでその入力は空白のままになります。

> [!NOTE]
> Simple ComboBox は内部で `igxForOf` ディレクティブを使用するため、すべての `igxForOf` 制限は Simple ComboBox に対して有効です。詳細については、[igxForOf 既知の制限](for-of.md#既知の制限) の既知の問題のセクションを参照してください。

## API まとめ
<div class="divider--half"></div>

* [IgxSimpleComboComponent]({environment:angularApiUrl}/classes/igxsimplecombocomponent.html)
* [IgxComboComponent Styles]({environment:sassApiUrl}/index.html#function-combo-theme)

その他のコンポーネントおよびディレクティブ (またはそのいずれか) で使用した API:

* [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)

## テーマの依存関係
* [IgxDropDown Theme]({environment:sassApiUrl}/index.html#function-drop-down-theme)
* [IgxIcon Theme]({environment:sassApiUrl}/index.html#function-icon-theme)
* [IgxOverlay Theme]({environment:sassApiUrl}/index.html#function-overlay-theme)

## その他のリソース
<div class="divider--half"></div>

* [コンボボックス コンポーネント](combo-features.md)
* [コンボボックス リモート バインディング](combo-remote.md)
* [コンボボックス テンプレート](combo-templates.md)
* [テンプレート駆動フォームの統合](input-group.md)
* [リアクティブ フォームの統合](angular-reactive-form-validation.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
