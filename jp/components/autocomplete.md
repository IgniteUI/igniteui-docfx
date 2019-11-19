---
title: オートコンプリート ディレクティブ
_description: igxAutocomplete ディレクティブは、候補オプションのパネルを表示することによりテキスト入力を向上する方法を提供します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Autocomplete コンポーネント, Angular Autocomplete ディレクティブ, Angular Autocomplete コントロール
_language: ja
---

## Autocomplete
<p class="highlight">

[`igxAutocomplete`]({environment:angularApiUrl}/classes/igxautocompletedirective.html) ディレクティブは [`igxDropDown`]  ({environment:angularApiUrl}/classes/igxdropdowncomponent.html) と候補オプションを表示してテキスト入力を向上する方法を提供します。候補は、テキスト入力の開始時、または `上矢印/`下矢印` キーを使用して表示します。

デフォルトで最初の項目が常にハイライトされ、キーを使用して簡単に選択できる方法を提供します。リストの項目をクリックして選択することもでき、入力値が自動的に更新されてドロップダウンが閉じられます。項目が選択されると、`onItemSelected` イベントが発生します。イベントがキャンセルされると項目は選択されずにドロップダウンも閉じません。[`igxAutocomplete`]({environment:angularApiUrl}/classes/igxautocompletedirective.html) ディレクティブは項目間を移動すると同時に入力が常にフォーカスされます。後者では入力を続行できます。`ESC` キーが使用してドロップダウン リストを閉じます。

[`igx-autocomplete`]({environment:angularApiUrl}/classes/igxautocompletedirective.html) は、使用可能なオプションのプロバイダーとして [`igx-drop-down`]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) を使用します。つまり、使用可能なグループ化、テンプレート、項目とグループの無効化を含むドロップダウン　コンポーネントの機能が使用されます。
</p>
<div class="divider"></div>

### デモ
以下のサンプルは、`igx-input` に適用される `igx-autocomplete` ディレクティブの簡単な使用方法を示します。ディレクティブは、定義したフィルタリング パイプのある `igx-drop-down` とともに提供されます。 
<div class="sample-container loading" style="height: 400px;">
    <iframe id="autocomplete-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/data-entries/autocomplete" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="autocomplete-sample" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

## 使用方法
### はじめに
[`igx-autocomplete`]({environment:angularApiUrl}/classes/igxautocompletedirective.html) を初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールする必要があります。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](general/getting_started.md)トピックををご覧ください。

次に、**app.module** に **IgxAutocompleteModule** と **IgxDropDownModule** をインポートする必要があります。[`igx-autocomplete`]({environment:angularApiUrl}/classes/igxautocompletedirective.html) を [igx-input]({environment:angularApiUrl}/classes/igxinputdirective.html) に適用した場合は、**igxInputGroupModule** も必要となります。

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

ドロップダウンの参照となる `igxAutocomplete` ディレクティブと値を追加します。

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

```typescript
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
```

### キーボード ナビゲーション

 - ドロップダウンが閉じている場合、`Arrow Down`、`Arrow Up`、`Alt` + `Arrow Down`、`Alt` + `Arrow Up` はドロップダウンを開きます。
 - ドロップダウンが閉じている場合、入力フィールドに入力するとドロップダウンが開きます。
 - `Arrow Down` - 開いている場合、次のドロップダウン項目へ移動します。
 - `Arrow Up` - 開いている場合、以前のドロップダウン項目へ移動します。
 - `Enter` は、すでに選択した項目を確定し、ドロップダウンを閉じます。
 - `Esc` はドロップダウンを閉じます。

> 注: オートコンプリートが開いたときにリストの最初の項目が自動的に選択されます。リストがフィルターされたときも同様です。

### 互換性サポート

`igxAutocomplete` ディレクティブを適用すると要素を以下の ARIA 属性で装飾します。
 - role="combobox" - ディレクティブが適用される要素のロール。
 - aria-autocomplete="list" - 入力完了の候補がリストのフォームに適用されたことを示します。
 - aria-haspopup="listbox" は、`igxAutocomplete` が値を提案するコンテナをポップアップできることを示すための属性です。
 - aria-expanded="true"/"false" - ドロップダウンの縮小状態に基づいた値。
 - aria-owns="dropDownID" - ドロップダウンの id は候補を表示するために使用されます。
 - aria-activedescendant="listItemId" - 値が現在のアクティブリスト要素の　id に設定されます。

候補に使用される `drop-down` コンポーネントは、以下の ARIA 属性を公開します。 
 - role="listbox" - `igx-drop-down` コンポーネント カレンダーに適用されます。
 - role="group" -`igx-drop-down-item-group` コンポーネント コンテナに適用されます。
 - role="オプション" - `igx-drop-down` -itemコンポーネント コンテナに適用されます。
 - `Igx-drop-down-item` に適用される aria-disabled="true"/"false」、無効な場合の `igx-drop-down-item-group` コンポーネント コンテナ。

### オートコンプリート ドロップダウンを有効/無効にします。

以下のサンプルは、[`IgxAutocompleteDisabled`]({environment:angularApiUrl}/classes/igxautocompletedirective.html#disabled) を定義し、オートコンプリート ドロップダウンの有効か無効化を許可します。

```html
<igx-input-group>
    <input igxInput name="towns" type="text"
        [igxAutocomplete]='townsPanel'
        [igxAutocompleteDisabled]="disabled"/>
    <label igxLabel for="towns">Towns</label>
</igx-input-group>
<igx-drop-down #townsPanel>
    <igx-drop-down-item *ngFor="let town of towns">
        {{town}}
    </igx-drop-down-item>
</igx-drop-down>
<igx-switch name="toggle" [(ngModel)]="!disabled"></igx-switch>
```

```typescript
@Component({
    selector: 'app-autocomplete-sample',
    styleUrls: ['autocomplete.sample.css'],
    templateUrl: `autocomplete.sample.html`
})
export class AutocompleteSampleComponent {
    disabled;
    constructor() {
        this.towns = [ "New York", "Washington, D.C.", "London", "Berlin", "Sofia", "Rome", "Kiev",
            "Copenhagen", "Paris", "Barcelona", "Vienna", "Athens", "Dublin", "Yerevan",
            "Oslo", "Helsinki", "Stockholm", "Prague", "Istanbul", "El Paso", "Florence", "Moscow" ];
    }
}
```

### ドロップダウンの設定
`igx-autocomplete` ドロップダウンの配置、スクロール ストラテジとアウトレットは、[`IgxAutocompleteSettings`]({environment:angularApiUrl}/classes/igxautocompletedirective.html#autocompletesettings) オプションを使用して設定できます。タイプ [`AutocompleteOverlaySettings`]({environment:angularApiUrl}/interfaces/autocompleteoverlaysettings.html) からの値を許可します。

以下の例は、ディレクティブが適用される入力の上部に設定可能なドロップダウンの位置を表示します。更に開く、閉じるのアニメーションを無効にします。`ConnectedPositioningStrategy` が使用されます。

```html
<igx-input-group #inputGroup>
    <input igxInput name="towns" type="text"
        [igxAutocomplete]='townsPanel'
        [igxAutocompleteSettings]='settings'/>
    <label igxLabel for="towns">Towns</label>
</igx-input-group>
<igx-drop-down #townsPanel>
    <igx-drop-down-item *ngFor="let town of towns">
        {{town}}
    </igx-drop-down-item>
</igx-drop-down>
```

```typescript
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
    @ViewChild('inputGroup', { read: IgxInputGroupComponent }) inputGroup: IgxInputGroupComponent;

    this.settings = {
        positionStrategy: new ConnectedPositioningStrategy({
            closeAnimation: null,
            openAnimation: null,
            verticalDirection: VerticalAlignment.Top,
            verticalStartPoint: VerticalAlignment.Top
        })
    };
}
```

> 注: デフォルトの配置ストラテジは、空きスペースに基づいて `AutoPositionStrategy` とドロップダウンが開きます。

## アプリケーション シナリオ
### Reactive From 内でグループ化した igxAutocomplete 

以下のサンプルは、オートコンプリートで映画が city でグループ化されている cinema の選択が可能なリストです。インプットの入力または `Arrow Down` キーを使用してリストを開き、cinema を選択します。次に movie と日付を選択します。

<div class="sample-container loading" style="height: 650px;">
    <iframe id="autocomplete-movie" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-entries/movie" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="autocomplete-movie" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

<div class="divider--half"></div>

上記サンプルのようにグループで `igxAutocomplete` を使用するには、以下の方法でデータを定義する必要があります。

```html
<igx-input-group>
    <input igxInput #cinema name="cinema" formControlName="cinema" [igxAutocomplete]='cinemaPanel'/>
    <label igxLabel for="cinema">City & Cinema</label>
    <igx-suffix igxRipple><igx-icon fontSet="material">place</igx-icon> </igx-suffix>
</igx-input-group>
<igx-drop-down #cinemaPanel maxHeight="350px">
    <igx-drop-down-item-group *ngFor="let town of towns" [label]="town.name">
        <igx-drop-down-item *ngFor="let cinema of town.cinemas" [value]="cinema">
            {{cinema}}
        </igx-drop-down-item>
    </igx-drop-down-item-group>
</igx-drop-down>
```

### オートコンプリートをリモートデータにバインド
以下は、リモートサービスにバインドされたドロップダウンと `igxAutocomplete` のサンプルです。サービスへのリクエストを制限してパフォーマンスを向上させるために、RxJS `debounce` を使用し、入力が終わった `250ms` 後にリクエストします。

サンプルでドロップダウンの代わりにカスタムの読み込みテンプレートを適用しているため、表示時にデータの読み込みで遅延が発生します。

<div class="sample-container loading" style="height: 400px;">
    <iframe id="autocomplete-remote-sample" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-entries/autocomplete-remote" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="autocomplete-remote-sample" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

## API
<div class="divider--half"></div>

* [IgxAutocompleteDirective]({environment:angularApiUrl}/classes/igxautocompletedirective.html)
* [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html)
* [IgxInputGroup]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)

### その他のリソース
<div class="divider--half"></div>

* [IgxDropDownComponent](drop_down.md)
* [IgxInputGroup](input_group.md)
* [テンプレート駆動フォームの統合](input_group.md)
* [Reactive Forms インテグレーション](input_group_reactive_forms.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)