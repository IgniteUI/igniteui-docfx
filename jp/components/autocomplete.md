---
title: オートコンプリート ディレクティブ
_description: igxAutocomplete ディレクティブは、候補オプションのパネルを表示することによりテキスト入力を向上する方法を提供します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Autocomplete コンポーネント, Angular Autocomplete ディレクティブ, Angular Autocomplete コントロール
_language: ja
---

# Autocomplete
<p class="highlight">[`igxAutocomplete`]({environment:angularApiUrl}/classes/igxautocompletedirective.html) ディレクティブは [`igxDropDown`]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) と候補オプションを表示してテキスト入力を向上する方法を提供します。候補は、テキスト入力の開始時、または `上矢印`/`下矢印` キーを使用して表示します。</p>
<div class="divider"></div>

## Angular Autocomplete の例

<code-view style="height: 400px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/autocomplete" alt="Angular Autocomplete の例">
</code-view>

<div class="divider--half"></div>

## 使用方法
はじめに、**app.module** で **IgxAutocompleteModule** と **IgxDropDownModule** をインポートします。[`igxAutocomplete`]({environment:angularApiUrl}/classes/igxautocompletedirective.html) を [igx-input]({environment:angularApiUrl}/classes/igxinputdirective.html) に適用した場合は、**igxInputGroupModule** も必要となります。

```typescript
// app.module.ts

...
import { 
    IgxAutocompleteModule,
    IgxDropDownModule, 
    IgxInputGroupModule 
} from 'igniteui-angular';

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

次に、ドロップダウンを参照する `igxAutocomplete` ディレクティブを追加します。

```html
<igx-input-group>
    <input igxInput name="towns" type="text"
        [igxAutocomplete]='townsPanel'/>
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
import { Component, Pipe, PipeTransform } from "@angular/core";

@Component({
    selector: 'app-autocomplete-sample',
    styleUrls: ['autocomplete.sample.css'],
    templateUrl: `autocomplete.sample.html`
})
export class AutocompleteSampleComponent {
    constructor() {
        this.towns = [ "New York", "Washington, D.C.", "London", "Berlin", "Sofia", "Rome", "Kiev",
            "Copenhagen", "Paris", "Barcelona", "Vienna", "Athens", "Dublin", "Yerevan",
            "Oslo", "Helsinki", "Stockholm", "Prague", "Istanbul", "El Paso", "Florence", "Moscow" ];
    }
}

@Pipe({ name: "startsWith" })
export class AutocompletePipeStartsWith implements PipeTransform {
    public transform(collection: any[], term = "") {
        return collection.filter((item) => item.toString().toLowerCase().startsWith(term.toString().toLowerCase()));
    }
}
```

>[!NOTE]
>[`igxAutocomplete`]({environment:angularApiUrl}/classes/igxautocompletedirective.html) は、利用可能なオプションのプロバイダーとして [`igxDropDown`]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) を使用します。これはドロップダウン コンポーネントのすべての機能をオートコンプリートで使用できることを意味します。

### Autocomplete の無効化
Autocomplete を無効にするには、[`IgxAutocompleteDisabled`]({environment:angularApiUrl}/classes/igxautocompletedirective.html#disabled) 入力を使用します。

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

以下の例では、ドロップダウンを入力の上に配置し、開始と終了のアニメーションを無効にします。`ConnectedPositioningStrategy` を使用します。

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
          name: "New York",
          cinemas: [
            "Regal Cinemas",
            "Village East Cinema",
            "Roxy Cinema",
            "The Paris Theatre"
        ]},
        {
            name: "Los Angeles",
            cinemas: [
                "Arc Light",
                "Pacific Cinerama Dome",
                "New Beverly Cinema",
                "Downtown Independent"
        ]},
        {
            name: "Seattle",
            cinemas: [
                "Central Cinema",
                "Grand Illusion Cinema",
                "Ark Lodge Cinemas",
                "Skyway Outdoor Cinema"
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
>オートコンプリートが開いた際にリストの最初の項目が自動的に選択されます。リストがフィルターされたときも同様です。

## 互換性サポート
`igxAutocomplete` ディレクティブを適用すると要素を以下の ARIA 属性で装飾します。
 - role="combobox" - ディレクティブが適用される要素のロール。
 - aria-autocomplete="list" - 入力完了の候補がリストのフォームに適用されたことを示します。
 - aria-haspopup="listbox" `igxAutocomplete` が値を提案するコンテナをポップアップできることを示すための属性です。
 - aria-expanded="true"/"false" - ドロップダウンの縮小状態に基づいた値。
 - aria-owns="dropDownID" - ドロップダウンの id は候補を表示するために使用される ID。
 - aria-activedescendant="listItemId" - 値が現在のアクティブリスト要素の id に設定されます。

候補に使用される `drop-down` コンポーネントは、以下の ARIA 属性を公開します。
 - role="listbox" - `igx-drop-down` コンポーネント カレンダーに適用されます。
 - role="group" - `igx-drop-down-item-group` コンポーネント コンテナに適用されます。
 - role="option" - `igx-drop-down-item` コンポーネント コンテナに適用されます。
 - aria-disabled="true"/"false" - `igx-drop-down-item` に適用されます。無効な場合の `igx-drop-down-item-group` コンポーネント コンテナに適用されます。


## スタイル設定
各コンポーネントには独自のテーマがあります。

`igxAutocomplete` のスタイルを設定するには、それに含まれるコンポーネントのスタイルを設定します。この場合、[igx-input-group-theme]({environment:sassApiUrl}/index.html#function-igx-input-group-theme) と [igx-drop-down-theme]({environment:sassApiUrl}/index.html#function-igx-drop-down-theme) の両方を使用する必要があります。 

これら 2 つのコンポーネントのスタイル設定については、[`igxInputGroup`](input-group.md#スタイル設定) および [`igxDropdown`](drop-down.md#スタイル設定) のスタイル設定セクションを参照してください。

## API リファレンス
<div class="divider--half"></div>

* [IgxAutocompleteDirective]({environment:angularApiUrl}/classes/igxautocompletedirective.html)
* [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html)
* [IgxDropDownComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-drop-down-theme)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [IgxInputGroupComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-input-group-theme)

## その他のリソース
<div class="divider--half"></div>

* [IgxDropDown](drop-down.md)
* [IgxInputGroup](input-group.md)
* [テンプレート駆動フォームの統合](input-group.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
