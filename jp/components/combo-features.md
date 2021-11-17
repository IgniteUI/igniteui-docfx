---
title: ComboBox 機能
_description: Combo コントロールは、データと値のバインディング、カスタム値、フィルタリング、グループ化など複数の機能を公開します。
_keywords: Ignite UI for Angular, UI コントロール, Angular widgets, web ウィジェット, UI ウィジェット, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Combo コンポーネント, Angular 機能, Angular Combo 機能, Angular Combo データ バインディング, Angular Combo 値バインディング, Angular Combo データ フィルタリング, Angular Combo グループ化, Angular Combo カスタム値
_language: ja
---

# ComboBox (コンボボックス) 機能
<p class="highlight">
Ignite UI for Angular ComboBox コントロールは、データと値のバインディング、カスタム値、フィルタリング、グループ化など複数の機能を公開します。
</p>

## Angular ComboBox 機能の例
以下のデモは、ランタイムで有効または無効にできるいくつかのコンボボックス機能を示します。


<code-view style="height: 440px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/combo-features" alt="Angular コンボボックス機能の例">
</code-view>

<div class="divider--half"></div>

## 使用方法

### はじめに
コンボボックス コンポーネントを初期化にするには、まず `IgxComboModule` を **app.module.ts**  ファイルにインポートします。サンプルは[ igx-switch]({environment:angularApiUrl}/classes/igxswitchcomponent.html) コンポーネントを使用してコンボボックスのプロパティの値をトグルしているため、`IgxSwitchModule` も必要です。

```typescript
import { IgxComboModule, IgxSwitchModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxComboModule,
        IgxSwitchModule,
        ...
    ]
})
export class AppModule {}
```

### テンプレートの構成

```html
<div class="combo-container">
    <igx-combo #combo [data]="lData" displayKey="field" valueKey="field"
        [allowCustomValues]="customValues"
        [filterable]="filterable"
        [showSearchCaseIcon]="showSearchCaseIcon"
        [disabled]="disabled">
    </igx-combo>
</div>
<div class="switch-container">
    <igx-switch [(ngModel)]="customValues">Allow Custom Values</igx-switch>
    <igx-switch (change)="enableGroups($event)">Enable Grouping</igx-switch>
    <igx-switch [(ngModel)]="disabled">Disable Combo</igx-switch>
    <igx-switch [(ngModel)]="filterable">Enable Filtering</igx-switch>
    <igx-switch *ngIf="filterable" [(ngModel)]="showSearchCaseIcon">Show Case-sensitive Icon</igx-switch>
</div>
```

### コンポーネント定義
グループ化は、[groupKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#groupkey) プロパティを対応するデータソース エンティティに設定、または空文字列に設定して有効または無効にできます。

```typescript
    @ViewChild('combo', { read: IgxComboComponent }) public combo: IgxComboComponent;

    public filterable = true;
    public showSearchCaseIcon = true;
    public customValues = true;
    public disabled = false;

    public enableGroups(event) {
        this.combo.groupKey = event.checked ? 'region' : '';
    }
```

## 機能

### データ バインディング
以下のコード スニペットは、ローカル データ ソースにバインドされた [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) の基本的な使用方法を示しています。[valueKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#valuekey) は、コンボボックスの選択に保存されるデータ エントリのプロパティを指定し、[displayKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#displaykey) は、コンボボックス テキストに使用されるプロパティを指定します。

```html
<igx-combo [data]="lData" valueKey="ProductID" displayKey="ProductName"></igx-combo>
```

```typescript
import { localData } from './local-data';

export class ComboDemo implements OnInit {
    public lData: any[];

    public ngOnInit() {
        this.lData = localData;
    }
}
```

> [!Note]
> `displayKey` プロパティが省略された場合、`valueKey` エンティティが項目テキストとして使用されます。

コンボボックス コンポーネントをリモート データにバインドする方法の詳細は、[コンボボックス リモート バインディング](combo-remote.md)を参照してください。

### カスタム オーバーレイ設定
コンボボックス コンポーネントでは、ユーザーが項目リストの表示方法を変更できます。これを行うには、カスタム [OverlaySettings]({environment:angularApiUrl}/interfaces/overlaysettings.html) を定義し、それらを ComboBox の [overlaySettings]({environment:angularApiUrl}/classes/igxcombocomponent.html#overlaysettings) 入力に渡します。

```typescript
export class CustomOverlayCombo {
    ...
    public customSettings: OverlaySettings = {
        positionStrategy: new GlobalPositionStrategy(
            {
                openAnimation: scaleInCenter,
                closeAnimation: scaleOutCenter
            }),
        modal: true,
        closeOnOutsideClick: true,
    };
}
```

```html
<igx-combo [data]="items" [overlaySettings]="customSettings"></igx-combo>
```

すべてが適切に設定されると、[GlobalPositionStrategy](overlay-position.md#グローバル) を使用してコンボボックスのリストが中央に表示されます。


<code-view style="height: 440px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/combo-overlay" >
</code-view>


<div class="divider--half"></div>

> [!Note]
> コンボボックス コンポーネントは、デフォルトの配置ストラテジとして [AutoPositionStrategy]({environment:angularApiUrl}/classes/autopositionstrategy.html) を使用します。

### フィルタリング
コンボボックスのフィルタリングがデフォルトで有効になります。無効にするには、[filterable]({environment:angularApiUrl}/classes/igxcombocomponent.html#filterable) プロパティを false に設定します。

フィルタリング オプションは、検索の大文字と小文字の区別を有効にすることでさらに拡張できます。大文字と小文字を区別するアイコンを検索入力に表示するには、[showSearchCaseIcon]({environment:angularApiUrl}/classes/igxcombocomponent.html#showsearchcaseicon) プロパティを true に設定します。

```html
<igx-combo [filterable]="false" [showSearchCaseIcon]="true"></igx-combo>
```

<div class="divider--half"></div>

### カスタム値
[allowCustomValues]({environment:angularApiUrl}/classes/igxcombocomponent.html#allowcustomvalues) プロパティは、カスタム値をコレクションに追加できるかどうかを制御します。有効な場合、コンボボックス UI で項目を追加できます。

```html
<igx-combo [allowCustomValues]="true"></igx-combo>
```

<div class="divider--half"></div>

### 検索入力のフォーカス
コンボボックスの [autoFocusSearch]({environment:angularApiUrl}/classes/igxcombocomponent.html#autofocussearch) プロパティは、コンボボックスのドロップダウン リストが開いたときに検索入力がフォーカスを受け取るかどうかを制御します。デフォルトで、このプロパティは `true` に設定されます。`false` に設定すると、フォーカスはコンボボックスの項目コンテナーに移動します。モバイル デバイスでは、コンボボックスのドロップダウン リストを開くときにソフトウェア キーボードがポップアップしないようにするために使用できます。

```html
<igx-combo [autoFocusSearch]="false"></igx-combo>
```

<div class="divider--half"></div>

### ComboBox の無効化
以下のコードでコンボボックスを無効にできます。

```html
<igx-combo [disabled]="true"></igx-combo>
```

<div class="divider--half"></div>

### グループ化
コンボボックスの `groupKey` オプションを定義すると、キーに基づいて項目をグループ化します。

```html
<igx-combo [groupKey]="'primaryKey'"></igx-combo>
```

グループを昇順または降順のどちらでソートするかを設定できます。デフォルトでは、ソート順序は、昇順に設定されています。

```html
<igx-combo [groupSortingDirection]="groupSortingDirection"></igx-combo>
```

```typescript
...
import { SortingDirection } from 'igniteui-angular'

export class ComboDemo {
    ...
    public groupSortingDirection: SortingDirection = SortingDirection.Asc;
}
```

<div class="divider--half"></div>

## API まとめ
<div class="divider--half"></div>

* [IgxComboComponent]({environment:angularApiUrl}/classes/igxcombocomponent.html)
* [IgxComboComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-combo-theme)

その他のコンポーネントおよびディレクティブ (またはそのいずれか) で使用した API:
* [IgxSwitchComponent]({environment:angularApiUrl}/classes/igxswitchcomponent.html)

## その他のリソース
<div class="divider--half"></div>

* [コンボボックス コンポーネント](combo.md)
* [コンボボックス リモート バインディング](combo-remote.md)
* [コンボボックス テンプレート](combo-templates.md)
* [テンプレート駆動フォームの統合](input-group.md)
* [リアクティブ フォームの統合](angular-reactive-form-validation.md)
* [単一選コンボボックス](simple-combo.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
