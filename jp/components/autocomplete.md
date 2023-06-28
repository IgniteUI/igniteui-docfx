---
title: オートコンプリート ディレクティブ
_description: Angular Autocomplete ディレクティブは、候補オプションのパネルを表示することにより、テキスト入力を向上する方法を提供します。今すぐお試しください。
_keywords: Angular Autocomplete コンポーネント, Angular Autocomplete ディレクティブ, Angular Autocomplete コントロール, Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, Angular UI コンポーネント, ネイティブ Angular コンポーネント ライブラリ
_language: ja
---

# Angular Autocomplete (オートコンプリート) ディレクティブ の概要
Angular Autocomplete は、入力中に候補のリストから項目を簡単に検索、フィルタリング、および選択できるようにする検索ボックス ディレクティブです。機能が豊富で、シームレスなデータ バインディング、フィルタリング、グループ化、UI カスタマイズ オプション、およびその他の組み込み機能をサポートしているため、直感的なオートコンプリート検索エクスペリエンスを作成できます。

<p class="highlight">

[`igxAutocomplete`]({environment:angularApiUrl}/classes/igxautocompletedirective.html) ディレクティブは [`igxDropDown`]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) と候補オプションを表示してテキスト入力を向上する方法を提供します。候補は、テキスト入力の開始時、または `上矢印`/`下矢印` キーを使用して表示します。
</p>
<div class="divider"></div>

## Angular Autocomplete の例

以下の Angular Autocomplete の例では、ユーザーが入力テキスト ボックスに町の名前を入力し始めると、ドロップダウンの候補リストが生成されます。

<code-view style="height: 400px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/autocomplete" alt="Angular Autocomplete の例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Autocomplete を使用した作業の開始

Ignite UI for Angular Autocomplete ディレクティブを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

はじめに、**app.module** で **IgxAutocompleteModule** と **IgxDropDownModule** をインポートします。[`igxAutocomplete`]({environment:angularApiUrl}/classes/igxautocompletedirective.html) が [igxInput]({environment:angularApiUrl}/classes/igxinputdirective.html) に適用される場合、**igxInputGroupModule** も必要です。

```typescript
// app.module.ts

...
import { 
    IgxAutocompleteModule,
    IgxDropDownModule, 
    IgxInputGroupModule 
} from 'igniteui-angular';
// import { IgxAutocompleteModule, IgxDropDownModule, IgxInputGroupModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [
        ..., 
        IgxAutocompleteModule,
        IgxDropDownModule,
        IgxInputGroupModule,
        ....
    ],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxAutocompleteDirective` をスタンドアロンのディレクティブとしてインポートできます。

```typescript
// home.component.ts

...
import { IgxAutocompleteDirective, IGX_INPUT_GROUP_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES } from 'igniteui-angular';
// import { IgxAutocompleteDirective, IGX_INPUT_GROUP_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-input-group>
        <input igxInput name="towns" type="text" [igxAutocomplete]="townsPanel" />
        <label igxLabel for="towns">Towns</label>
    </igx-input-group>
    <igx-drop-down #townsPanel>
        <igx-drop-down-item *ngFor="let town of towns">
            {{town}}
        </igx-drop-down-item>
    </igx-drop-down>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxAutocompleteDirective, IGX_INPUT_GROUP_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES]
})
export class HomeComponent {}
```

Ignite UI for Angular Action Strip モジュールまたはディレクティブをインポートしたので、`igxAutocomplete` コンポーネントの基本構成を開始できます。

## Angular Autocomplete の使用
オートコンプリート機能を入力に適用するには、ドロップダウンを参照して `igxAutocomplete` ディレクティブを追加します。

```html
<igx-input-group>
    <input igxInput name="towns" type="text" [igxAutocomplete]="townsPanel" />
    <label igxLabel for="towns">Towns</label>
</igx-input-group>
<igx-drop-down #townsPanel>
    <igx-drop-down-item *ngFor="let town of towns">
        {{town}}
    </igx-drop-down-item>
</igx-drop-down>
```

ドロップダウンに表示されるリストを追加します。入力する際にリストをフィルターするには、**PipeTransform** インターフェイスを使用します。

```typescript
import { Component, Pipe, PipeTransform } from '@angular/core';

@Component({
    selector: 'app-autocomplete-sample',
    styleUrls: ['autocomplete.sample.css'],
    templateUrl: `autocomplete.sample.html`
})
export class AutocompleteSampleComponent {
    constructor() {
        this.towns = [ 'New York', 'Washington, D.C.', 'London', 'Berlin', 'Sofia', 'Rome', 'Kiev',
            'Copenhagen', 'Paris', 'Barcelona', 'Vienna', 'Athens', 'Dublin', 'Yerevan',
            'Oslo', 'Helsinki', 'Stockholm', 'Prague', 'Istanbul', 'El Paso', 'Florence', 'Moscow' ];
    }
}

@Pipe({ name: 'startsWith' })
export class AutocompletePipeStartsWith implements PipeTransform {
    public transform(collection: any[], term = '') {
        return collection.filter((item) => item.toString().toLowerCase().startsWith(term.toString().toLowerCase()));
    }
}
```

>[!NOTE]
>[`igxAutocomplete`]({environment:angularApiUrl}/classes/igxautocompletedirective.html) は、利用可能なオプションのプロバイダーとして [`igxDropDown`]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) を使用します。これはドロップダウン コンポーネントのすべての機能をオートコンプリートで使用できることを意味します。

### Angular Autocomplete の無効化
Angular Autocomplete を無効にするには、[`IgxAutocompleteDisabled`]({environment:angularApiUrl}/classes/igxautocompletedirective.html#disabled) 入力を使用します。

```html
<igx-input-group>
    <input igxInput name="towns" type="text"
        [igxAutocomplete]='townsPanel'
        [igxAutocompleteDisabled]="disabled"/>
    <label igxLabel for="towns">Towns</label>
</igx-input-group>
```

### Autocomplete の設定
`igx-autocomplete` ドロップダウンの配置、スクロール ストラテジとアウトレットは、[`IgxAutocompleteSettings`]({environment:angularApiUrl}/classes/igxautocompletedirective.html#autocompletesettings) を使用して設定できます。

以下の Angular Autocomplete 例では、ドロップダウンを入力の上に配置し、開始と終了のアニメーションを無効にします。`ConnectedPositioningStrategy` を使用します。

```html
<igx-input-group class="autocomplete">
    <label igxLabel for="cinema">Cinema</label>
    <input igxInput name="cinema" type="text"
    [igxAutocomplete]="townsPanel"
    [igxAutocompleteSettings]="settings"/>
</igx-input-group>
<igx-drop-down #townsPanel maxHeight="300px">
    <igx-drop-down-item-group *ngFor="let town of towns" [label]="town.name">
        <igx-drop-down-item *ngFor="let cinema of town.cinemas" [value]="cinema">
            {{cinema}}
        </igx-drop-down-item>
    </igx-drop-down-item-group>
</igx-drop-down>
```

```typescript
export class AutocompleteComponent {
    public settings = {
        positionStrategy: new ConnectedPositioningStrategy({
            closeAnimation: null,
            openAnimation: null,
            verticalDirection: VerticalAlignment.Top,
            verticalStartPoint: VerticalAlignment.Top
        })
    };

    public towns = [
        {
          name: 'New York',
          cinemas: [
            'Regal Cinemas',
            'Village East Cinema',
            'Roxy Cinema',
            'The Paris Theatre'
        ]},
        {
            name: 'Los Angeles',
            cinemas: [
                'Arc Light',
                'Pacific Cinerama Dome',
                'New Beverly Cinema',
                'Downtown Independent'
        ]},
        {
            name: 'Seattle',
            cinemas: [
                'Central Cinema',
                'Grand Illusion Cinema',
                'Ark Lodge Cinemas',
                'Skyway Outdoor Cinema'
        ]}
    ];
}
```

>[!NOTE]
>デフォルトの配置ストラテジは、`AutoPositionStrategy` で、空きスペースに基づいてドロップダウンが開きます。

すべて適切に設定できると、ブラウザーで以下が表示されます。


<code-view style="height: 500px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/movie" >
</code-view>


<div class="divider--half"></div>

## キーボード ナビゲーション
<div class="divider--half"></div>

 - 閉じていた場合、<kbd>上矢印</kbd> / <kbd>下矢印</kbd> または入力を開始すると、ドロップダウンを開きます。
 - <kbd>下矢印</kbd> - 次のドロップダウン項目へ移動します。
 - <kbd>上矢印</kbd> - 前のドロップダウン項目へ移動します。
 - <kbd>ENTER</kbd> - すでに選択した項目を確定し、ドロップダウンを閉じます。
 - <kbd>ESC</kbd> - ドロップダウンを閉じます。

>[!NOTE]
>Angular Autocomplete が開いた際にリストの最初の項目が自動的に選択されます。リストがフィルターされたときも同様です。

## 互換性サポート
`igxAutocomplete` ディレクティブを適用すると要素を以下の ARIA 属性で装飾します。
 - role="combobox" - ディレクティブが適用される要素のロール。
 - aria-autocomplete="list" - 入力完了の候補がリストのフォームに適用されたことを示します。
 - aria-haspopup="listbox" `igxAutocomplete` が値を提案するコンテナーをポップアップできることを示すための属性です。
 - aria-expanded="true"/"false" - ドロップダウンの縮小状態に基づいた値。
 - aria-owns="dropDownID" - ドロップダウンの id は候補を表示するために使用される ID。
 - aria-activedescendant="listItemId" - 値が現在のアクティブリスト要素の id に設定されます。

候補に使用される `drop-down` コンポーネントは、以下の ARIA 属性を公開します。
 - role="listbox" - `igx-drop-down` コンポーネント カレンダーに適用されます。
 - role="group" - `igx-drop-down-item-group` コンポーネント コンテナーに適用されます。
 - role="option" - `igx-drop-down-item` コンポーネント コンテナーに適用されます。
 - aria-disabled="true"/"false" - `igx-drop-down-item` に適用されます。無効な場合の `igx-drop-down-item-group` コンポーネント コンテナーに適用されます。


## スタイル設定
各コンポーネントには独自のテーマがあります。

`igxAutocomplete` のスタイルを設定するには、それに含まれるコンポーネントのスタイルを設定します。この場合、[input-group-theme]({environment:sassApiUrl}/index.html#function-input-group-theme) と [drop-down-theme]({environment:sassApiUrl}/index.html#function-drop-down-theme) の両方を使用する必要があります。 

これら 2 つのコンポーネントのスタイル設定については、[`igxInputGroup`](input-group.md#スタイル設定) および [`igxDropdown`](drop-down.md#スタイル設定) のスタイル設定セクションを参照してください。

## API リファレンス
<div class="divider--half"></div>

* [IgxAutocompleteDirective]({environment:angularApiUrl}/classes/igxautocompletedirective.html)
* [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)


## テーマの依存関係
* [IgxDropDown テーマ]({environment:sassApiUrl}/index.html#function-drop-down-theme)
* [IgxInputGroup テーマ]({environment:sassApiUrl}/index.html#function-input-group-theme)

## その他のリソース
<div class="divider--half"></div>

* [IgxDropDown](drop-down.md)
* [IgxInputGroup](input-group.md)
* [テンプレート駆動フォームの統合](input-group.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
