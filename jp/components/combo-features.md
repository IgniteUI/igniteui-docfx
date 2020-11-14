---
title: Combo 機能
_description: Combo コントロールは、データと値のバインディング、カスタム値、フィルタリング、グループ化など複数の機能を公開します。
_keywords: Ignite UI for Angular, UI コントロール, Angular widgets, web ウィジェット, UI ウィジェット, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Combo コンポーネント, Angular 機能, Angular Combo 機能, Angular Combo データ バインディング, Angular Combo 値バインディング, Angular Combo データ フィルタリング, Angular Combo グループ化, Angular Combo カスタム値
_language: ja
---

# コンボ機能
<p class="highlight">
Ignite UI for Angular Combo コントロールは、データと値のバインディング、カスタム値、フィルタリング、グループ化など複数の機能を公開します。 
</p>

## デモ
以下のデモは、ランタイムで有効または無効にできるいくつかの igx-combo 機能を示します。

<div class="sample-container loading" style="height: 440px;">
    <iframe id="combo-features-sample" frameborder="0" seamless="" width="100%" height="100%" src="{environment:demosBaseUrl}/lists/combo-features" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="combo-features-sample" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-features-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

## 使用方法

### はじめに
Combo コンポーネントを初期化にするには、まず `IgxComboModule` を **app.module.ts**  ファイルにインポートします。サンプルは[ igx-switch]({environment:angularApiUrl}/classes/igxswitchcomponent.html) コンポーネントを使用してコンボのプロパティの値をトグルしているため、`IgxSwitchModule` も必要です。

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
    @ViewChild("combo", { read: IgxComboComponent }) public combo: IgxComboComponent;

    public filterable = true;
    public showSearchCaseIcon = true;
    public customValues = true;
    public disabled = false;

    public enableGroups(event) {
        this.combo.groupKey = event.checked ? "region" : "";
    }
```

## 機能

### データ バインディング
以下のコード スニペットは、ローカル データソースにバインドされた [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) の基本的な使用方法を示しています。[valueKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#valuekey) は、コンボの選択に保存されるデータ エントリのプロパティを指定し、[displayKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#displaykey) は、コンボ テキストに使用されるプロパティを指定します。

```html
<igx-combo [data]="lData" valueKey="ProductID" displayKey="ProductName"></igx-combo>
```

```typescript
import { localData } from "./local-data";

export class ComboDemo implements OnInit {
    public lData: any[];

    public ngOnInit() {
        this.lData = localData;
    }
}
```

> [!Note]
> `displayKey` プロパティが省略された場合、`valueKey` エンティティが項目テキストとして使用されます。

Combo コンポーネントをリモート データにバインドする方法の詳細は、[コンボ リモート バインディングのトピック](combo-remote.md)を参照してください。

### カスタム オーバーレイ設定
Combo コンポーネントでは、ユーザーが項目リストの表示方法を変更できます。これを行うには、カスタム [OverlaySettings]({environment:angularApiUrl}/interfaces/overlaysettings.html) を定義し、それらを Combo の [overlaySettings]({environment:angularApiUrl}/classes/igxcombocomponent.html#overlaysettings) 入力に渡します。

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

すべてが適切に設定されると、[GlobalPositionStrategy](overlay-position.md#グローバル) を使用してコンボのリストが中央に表示されます。

<div class="sample-container loading" style="height: 440px;">
    <iframe id="combo-overlay-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/lists/combo-overlay" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="combo-overlay-sample" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-overlay-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

<div class="divider--half"></div>

> [!Note]
> igx-combo コンポーネントは、デフォルトの配置ストラテジとして [AutoPositionStrategy]({environment:angularApiUrl}/classes/autopositionstrategy.html) を使用します。

### フィルタリング
コンボのフィルタリングがデフォルトで有効になります。無効にするには、[filterable]({environment:angularApiUrl}/classes/igxcombocomponent.html#filterable) プロパティを false に設定します。

フィルタリング オプションは、検索の大文字と小文字の区別を有効にすることでさらに拡張できます。大文字と小文字を区別するアイコンを検索入力に表示するには、[showSearchCaseIcon]({environment:angularApiUrl}/classes/igxcombocomponent.html#showsearchcaseicon) プロパティを true に設定します。

```html
<igx-combo [filterable]="false" [showSearchCaseIcon]="true"></igx-combo>
```

<div class="divider--half"></div>

### カスタム値
[allowCustomValues]({environment:angularApiUrl}/classes/igxcombocomponent.html#allowcustomvalues) プロパティは、カスタム値をコレクションに追加できるかどうかを制御します。有効な場合、コンボ UI で項目を追加できます。

```html
<igx-combo [allowCustomValues]="true"></igx-combo>
```

<div class="divider--half"></div>

### 検索入力のフォーカス
Combo の [autoFocusSearch]({environment:angularApiUrl}/classes/igxcombocomponent.html#autofocussearch) プロパティはコンボが開いたときに検索入力がフォーカスを受け取るかどうかを制御します。デフォルトで、 このプロパティは `true` に設定されます。`false` に設定すると、フォーカスはコンボの項目コンテナーに移動します。モバイル デバイスでは、コンボを開くときにソフトウェア キーボードがポップアップしないようにするために使用できます。

```html
<igx-combo [autoFocusSearch]="false"></igx-combo>
```

<div class="divider--half"></div>

### コンボの無効化
以下のコードでコンボを無効にできます。

```html
<igx-combo [disabled]="true"></igx-combo>
```

<div class="divider--half"></div>

### グループ化
コンボの `groupKey` オプションを定義すると、キーに基づいて項目をグループ化します。

```html
<igx-combo [groupKey]="'primaryKey'"></igx-combo>
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

* [コンボ コンポーネント](combo.md)
* [コンボ リモート バインディング](combo-remote.md)
* [コンボ テンプレート](combo-templates.md)
* [テンプレート駆動フォームの統合](input-group.md)
* [リアクティブ フォームの統合](input-group-reactive-forms.md)
* [カスケーディング](combo-cascading.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
