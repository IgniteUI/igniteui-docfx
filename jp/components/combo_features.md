---
title: Combo 機能
_description: Combo コントロールは、データと値のバインディング、カスタム値、フィルタリング、グループ化など複数の機能を公開します。 
_keywords: Ignite UI for Angular, UI コントロール, Angular widgets, web ウィジェット, UI ウィジェット, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Combo コンポーネント, Angular 機能, Angular Combo 機能, Angular Combo データ バインディング, Angular Combo 値バインディング, Angular Combo データ フィルタリング, Angular Combo グループ化, Angular Combo カスタム値
_language: ja
---

## コンボ機能
<p class="highlight">
Combo コントロールは、データと値のバインディング、カスタム値、フィルタリング、グループ化など複数の機能を公開します。 
</p>
<div class="divider"></div>

### デモ
以下のデモは、ランタイムで有効または無効にできるいくつかのコンボ機能を確認できます。

<div class="sample-container loading" style="height: 440px;">
    <iframe id="combo-features-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/lists/combo-features" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-features-sample" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で開く</button>
</div>
<div class="divider--half"></div>

### 使用方法
Ignite UI for Angular Combo を使用する前に `IgxComboModule` を **app.module.ts** ファイルにインポートします。以下のサンプルは [igx-switch](switch.md) を使用していますが、追加で `IgxSwitchModule` も必要です。

```typescript
// app.module.ts

...
import { IgxComboModule, IgxSwitchModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxComboModule, IgxSwitchModule],
    ...
})
export class AppModule {}
```

 デモでは、[igx-switch]({environment:angularApiUrl}/classes/igxswitchcomponent.html) コンポーネントを使用して [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) プロパティ値を切り替えます。グループ化は、[groupKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#groupkey) を対応するデータソース エンティティに設定、または空文字列に設定して有効または無効にできます。
```html
<div class="combo-container">
    <igx-combo #combo [data]="lData" [displayKey]="'field'" [valueKey]="'field'"
        [allowCustomValues]="customValues"
        [filterable]="filterable"
        [disabled]="disabled">
    </igx-combo>
</div>
<div class="switch-container">
    <igx-switch [(ngModel)]="filterable">Enable Filtering</igx-switch><br />
    <igx-switch [(ngModel)]="customValues">Allow Custom Values</igx-switch><br />
    <igx-switch (change)="enableGroups($event)">Enable Grouping</igx-switch><br />
    <igx-switch [(ngModel)]="disabled">Disabled</igx-switch>
</div>
```

```typescript
    @ViewChild("combo", { read: IgxComboComponent }) public combo: IgxComboComponent;

    public filterable = true;
    public customValues = true;
    public disabled = false;

    public enableGroups(event) {
        this.combo.groupKey = event.checked ? "region" : "";
    }
```

## データ バインディング

ローカル データソースへバインドする [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) の基本的な使用は、[valueKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#valuekey) と [displayKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#displaykey) を定義します。

```html
<igx-combo [data]="lData" [valueKey]="'ProductID'" [displayKey]="'ProductName'"></igx-combo>
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

> 注: [displayKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#displaykey) が省略された場合、[valueKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#valuekey) エンティティが項目テキストとして使用されます。


詳細については、[igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) をリモートデータにバインド](combo_remote.md)を参照してください。

## 値バインディング

双方データ バインディングは、以下のように `ngModel` を使用します。 

```html
<igx-combo #combo [data]="data" [(ngModel)]="values"></igx-combo>
```

```typescript
export class MyExampleComponent {
    ...
    public data: ExampleType[] = ...;
    ...
    public values: ExampleType[] = ...;
}
```

<div class="divider--half"></div>

@@if (false) { <!-- remove after translation -->
## Custom Overlay Settings
The Combo allows users to change the way the list of items is shown. This can be done by defining custom [`OverlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) and passing them to the Combo's [`overlaySettings`]({environment:angularApiUrl}/classes/igxcombocomponent.html#overlaysettings) Input:

```typescript
// custom.component.ts
export class CustomOverlayCombo {
    ...
    public customSettings: OverlaySettings = {
        positionStrategy: new GlobalPositionStrategy({ openAnimation: scaleInCenter, closeAnimation: scaleOutCenter }),
        modal: true,
        closeOnOutsideClick: true,
    };
}
```

```html
<!-- custom.component.html -->
<igx-combo [data]="items" [overlaySettings]="customSettings"></igx-combo>
```

For example, with the above settings, the Combo's list will display centered, using [GlobalPositionStrategy](overlay_position.md#global):

<div class="sample-container loading" style="height: 440px;">
    <iframe id="combo-overlay-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/lists/combo-overlay" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-overlay-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>
} <!-- remove after translation -->

## フィルタリング
コンボのフィルタリングがデフォルトで有効になります。以下のコードで無効にできます。

```html
<igx-combo [filterable]="false"></igx-combo>
```

<div class="divider--half"></div>

<div class="divider--half"></div>

## カスタム値
カスタム値が有効な場合、コンボ UI で項目を追加できます。

```html
<igx-combo [allowCustomValues]="true"></igx-combo>
```

<div class="divider--half"></div>

## 無効
以下のコードでコンボを無効にできます。

```html
<igx-combo [disabled]="true"></igx-combo>
```

<div class="divider--half"></div>

## グループ化
コンボの groupKey オプションを定義すると、キーに基づいて項目をグループ化します。

```html
<igx-combo [groupKey]="'primaryKey'"></igx-combo>
```

<div class="divider--half"></div>

## API
<div class="divider--half"></div>

* IgxComboComponent [**API 参照**]({environment:angularApiUrl}/classes/igxcombocomponent.html) と
[**テーマの参照**]({environment:sassApiUrl}/index.html#themes-mixin-igx-combo)。

## その他のリソース
<div class="divider--half"></div>

* [コンボ リモート バインディング](combo_remote.md)
* [コンボ テンプレート](combo_templates.md)
* [テンプレート駆動フォームの統合](input_group.md)
* [リアクティブ フォームの統合](input_group_reactive_forms.md)
* [カスケーディング](combo_cascading.md)
* [IgxSwitch](switch.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
