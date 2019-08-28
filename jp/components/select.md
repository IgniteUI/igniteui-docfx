---
title: IgxSelect - ネイティブ Angular | Ignite UI for Angular
_description: igxSelect は、単一項目の選択ができるドロップダウン リストの入力を提供します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コンポーネント, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular IgxSelect コンポーネント, IgxSelect
_language: ja
---

## 選択
`IgxSelectComponent` は、マウスやキーボードを使用してすばやく項目間を移動し、ドロップダウン リストから単一項目を選択できます。`Igx-select` は、特定の文字や複数の文字を入力して項目の選択を循環できます。

## シンプルな選択のデモ
<div class="sample-container loading" style="height: 430px;">
    <iframe id="select-sample-1-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/data-entries/select-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="select-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>

>[!WARNING]
>Ignite UI for Angular コンポーネント、をプロジェクトに追加する前に、必要なすべての依存関係を構成し、プロジェクトのセットアップが正しく完了したことを確認してください。 手順については、[はじめに](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/general/getting_started.html)トピックをご確認ください。


## 使用方法
`Igx-select` の使用は、はじめに `IgxSelectModule` をインポートする必要があります。
```ts
// app.module.ts

...
import { IgxSelectModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxSelectModule],
    ...
})
export class AppModule {}
```

ドロップダウンを開いたときに表示したい項目のコレクションをクラスに含む必要があります。
```ts
public items: string[] = ["Orange", "Apple", "Banana", "Mango"];
```

次にテンプレートでバインドします。
```html
<igx-select>
    <label igxLabel>Simple Select</label>
    <igx-select-item *ngFor="let item of items" [value]="item">
        {{item}}
    </igx-select-item>
</igx-select>
```
`IgxSelectItemComponent` を使用して `igx-select` を実行する項目を表示することに注意してください。`IgxSelectItemComponent` は、`igx-select-item` に固有な追加機能で [IgxDropDownItemComponent](https://jp.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/igxdropdownitemcomponent.html) を拡張します。

## 機能
### IgxSelect アクション
#### 開く
キーボードで `Igx-select` にフォーカスしても開きません。
フォーカスを `Igx-select` に設定し、 `Space`、`Enter`、`ALT + 上矢印/下矢印` キーで開きます。
- `Igx-select` はマウスを左クリック、またはドロップダウンボタンを左クリックで開きます。

#### 閉じる
`Igx-drop-down` が開いている場合、以下のいずれかで閉じることができます。
- ドロップダウン リストから項目を選択
- `ALT + 上矢印/下矢印` キーの押下
- `Enter`、`Space`、`Esc`、`Tab` キーのいずれかを押下
- ドロップダウン ボタン上でマウスを左クリック、またはドロップダウン以外を左クリックしてドロップダウンを閉じることもできます (input blur)。

### キーボード ナビゲーション
`igx-select`には直感的なキーボードナビゲーションがあり、マウスを使わずに簡単に項目を選択できます。

- ドロップダウン リストが開いているときの移動先に残っている項目がある場合は、`上矢印/下矢印`で項目を移動できます。更に `Home` または `End` を押すとリストの最初と最後の項目に移動します。 
- ドロップダウン リストが開いたときに対応するキーを押して特定の文字で始まる各項目に移動できます。大文字小文字を区別して一致するすべての項目間をフォーカスします。
- ドロップダウン リストを開いたときに、必要な項目の最初の数文字を入力してすばやく特定の項目に移動できます。
    - 入力スピードが関係することに注意してください。
- ドロップダウン リストが開いているときは、`Home` と `End` のキーを使用して項目を移動できます。
- ドロップダウン リストが開いている場合、`上矢印/下矢印`キーによる移動は選択した項目から開始されます。そうでない場合は、リストの最初の項目から開始します。
- ドロップダウン リストがクローズいているときは、`上矢印/下矢印`のキーで項目間を循環できます。
- ドロップダウン リストが閉じたときに、特定の項目で始まるすべての項目へ移動することもできます。ドロップダウン リストが開いている場合も同様に動作します。
- ドロップダウン リストを閉じたときに、最初の数文字を入力してすばやく特定の項目に移動できます。ドロップダウンが開いたときと動作は同じです。
- ドロップダウンが閉じたときに文字キーの移動でも大文字と小文字を区別しません。
- ドロップダウンが閉じている場合、一致する項目のない文字の押下時は文字キー ナビゲーションは選択を変更しません。

### 項目の選択
ドロップダウン リストから項目を選択する方法:
- 左マウス クリック
- 各項目がフォーカスされたときの `Enter` キー。
- 各項目がフォーカスされたときの `Space` キー。
- コードで値 value プロパティを設定。
- 項目の `selected` プロパティの設定。 
- ドロップダウン リストの最初に有効な項目がフォーカスされます。
- 選択した項目の値と入力ボックスが生成されます。
- 選択した項目を変更したときに入力ボックスのテキストが更新されます。
- 入力ボックスは、フォーカスされていても選択されてない項目のテキストでは生成されません。
- 項目は選択されていても値が設定されていない、または一致する項目がない場合、入力ボックスにテキストは追加されません。
- 値プロパティを存在しない項目に設定時に選択がクリアされます。
- 無効な項目は選択できません。
- 選択オプションが削除されると選択も削除されます。
- 重複する値を持つ項目がある場合、最初の項目が選択されます。

>[!NOTE]
> `Igx-select` は項目のみの単一選択をサポートします。

### イベントの発生
`Igx-select` が `igx-drop-down` を拡張するため、以下を含むイベントも使用できます。

#### Opened イベント
- 現在ドロップ ダウンが展開されているかどうかを指定します。

`onOpened` イベントを使用できます。
```html
<igx-select (onOpened)="handleOpened($event)">
    <igx-select-item [value]="Apple">Apple</igx-select-item>
</igx-select>
```

#### 始値/終値のイベント
- エミット先:
    - 入力クリック
    - 拡張/縮小ボタン クリックの選択 (アプリのシナリオ)
- トリガー先:
    - キー インタラクションでトリガーされます。

 `onOpening` と `onClosing` イベントがアニメーションの再生が完了する前に発生されます。つまり、ドロップダウンが完全に**開く**または**閉じる**前になります。イベント ハンドラー関数で `cancel` プロパティを `true` に設定してキャンセルできます。

```html
<igx-select (onOpening)="handleOpening($event)" (onClosing)="handleClosing($event)">
    <igx-select-item [value]="Apple">Apple</igx-select-item>
</igx-select>
```

#### 選択イベント
- 項目の選択が変更されているときにエミットされます (新しい項目を選択しようとしたとき)。項目が選択される前など、選択が完了する前にエミットされます。 
-  マウスクリックで項目が選択されたときにエミットされます。
-  `Enter`、`Space` キーで項目が選択されたときにエミットされます。
-  値プロパティの設定時にエミットされます。
-  項目の `selected` プロパティの設定時にエミットされます。

```html
<igx-select (onSelection)="handleSelection($event)">
    <igx-select-item [value]="Apple">Apple</igx-select-item>
    <igx-select-item [value]="Pear">Pear</igx-select-item>
</igx-select>
```

#### Closed イベント
- ドロップダウンが完全に閉じたときにコンポーネントの外側をクリックしてエミットされます。

`onOpened` イベントを使用できます。
```html
<igx-select (onClosed)="handleClosed($event)">
    <igx-select-item [value]="Apple">Apple</igx-select-item>
</igx-select>
```

class 内にすべての handler 関数を置きます。
```ts
export class MyClass {
    /* --- */
    private handleOpening(event: CancelableEventArgs): void {
        // do something
    }
    /* --- */
    private handleSelection(event: ISelectionEventArgs): void {
        // do something
    }
    /* --- */
    private handleClosed(event: any): any {
        // do something
        // return something
    }
    /* --- */
    private handleClosing(event: CancelableEventArgs): void {
        // cancel the closing event
        event.cancel = true;
    }
    /* --- */
}
```
- 上記の例はデモのみを目的としており、いかなるコードの基準に従うものではありません。

### ポジション ストラテジ
`Igx-select` は、それ自体に `SelectPositioningStrategy` と呼ばれるポジション ストラテジがあります。
[ConnectedPositioningStrategy](https://jp.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/connectedpositioningstrategy.html) を拡張し、`igx-select` を入力フィールドに応じてさまざまな方法でドロップダウンリストに配置します。つまり、ドロップダウンは常にそれ自体を配置するため、入力テキストが選択した項目のテキストと一致します。

以下の例は、`SelectPositioningStrategy` を使用してカスタム オーバーレイ設定を定義するため、はじめに [OverlaySettings](https://jp.infragistics.com/products/ignite-ui-angular/docs/typescript/interfaces/overlaysettings.html) と一緒にインポートする必要があります。
```ts
import { SelectPositioningStrategy, OverlaySettings } from 'igniteui-angular';
```

[OverlaySettings](https://jp.infragistics.com/products/ignite-ui-angular/docs/typescript/interfaces/overlaysettings.html) オブジェクトを初期化して `SelectPositioningStrategy` に渡す必要があります。最後にポジション ストラテジのコンストラクタは、テンプレートから `IgxSelectComponent` を参照する [ViewChild](https://angular.io/api/core/ViewChild) に渡します。

以下のようになります。
```ts
@ViewChild(IgxSelectComponent)
public igxSelect: IgxSelectComponent;

public customOverlaySettings: OverlaySettings = {
    positionStrategy: new SelectPositioningStrategy(
        this.igxSelect
    ),
    scrollStrategy: new AbsoluteScrollStrategy()
};
```
上記のように `customOverlaySettings` オブジェクトにある `scrollStrategy` プロパティもあります。これにより、ドロップダウンのスクロール機能が正しく動作します。このスクロールは、リストのすべての項目の合計の高さがドロップダウンの高さを超えるたびに表示されます。

その他の重要な点は `igx-select` がデフォルトで `SelectPositioningStrategy` を使用する点です。 
> さまざまなポジション ストラテジを *positionStrategy* プロパティへ渡します。[ここ](https://jp.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ipositionstrategy.html)をご覧ください。 

### グループで選択
<div class="sample-container loading" style="height: 450px;">
    <iframe id="select-sample-2-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-entries/select-sample-2" class="lazyload"></iframe>
</div>

<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="select-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>

`Igx-select` が `igx-drop-down` に拡張し、groups のビルトイン サポートがあります。 

この機能を活用するには、`igx-select` に渡すデータを変更する必要があり、この場合は以下のようになります。
```ts
public items: any[] = [
    { type: "Fruits", fruits: [ "Apple", "Orange", "Banana" ] },
    { type: "Vegetables", vegetables: [ "Cucumber", "Potato", "Pepper" ] }
];
```

`type` や `fruits` など特定のプロパティを持つオブジェクトを渡します。`IgxSelectItemComponent` にドロップダウン リスト内の特定のスタイルを受け取りを許容する機能があるためです。この機能は、[IgxDropDownItemComponent](https://jp.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/igxdropdownitemcomponent.html) から継承されます。

次にテンプレート ファイルでこれらのオブジェクトを反復してプロパティへ適切にアクセスします。
```html
<igx-select>
    <igx-select-item-group *ngFor="let item of items" [label]="item.type">
        <igx-select-item *ngFor="let fruit of item.fruits" 
        [value]="fruit">
            {{fruit}}
        </igx-select-item>

        <igx-select-item *ngFor="let vegetable of item.vegetables" 
        [value]="vegetable">
            {{vegetable}}
        </igx-select-item>
    </igx-select-item-group>
</igx-select>
```

### フォームの選択
<div class="sample-container loading" style="height: 450px;">
    <iframe id="select-sample-3-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-entries/select-sample-3" class="lazyload"></iframe>
</div>

<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="select-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>

`igx-select` は `form` 要素の内側に配置できますが、はじめにコントロールのテンプレートを作成して表示する項目を追加する必要があります。

```html
<igx-select [(ngModel)]="selected">
    <igx-select-item value="Orange">Orange</igx-select-item>
    <igx-select-item value="Apple">Apple</igx-select-item>
    <igx-select-item value="Banana">Banana</igx-select-item>
</igx-select>
```

その他の方法に [ngForOf](https://angular.io/api/common/NgForOf) ディレクティブに表示したい項目のコレクションへ渡す方法があります。
```html
<igx-select [(ngModel)]="selected">
    <igx-select-item *ngFor="let item of items" [value]="item">
        {{item}}
    </igx-select-item>
</igx-select>
```

TwoWay バインディングを使用するため、クラスは以下のようになります。
```ts
export class MyClass {
  public selected: string = "Apple";
}
```

上記のサンプルで入力フィールドに prefix がありますが、これは `igx-select` がプレフィックスとサフィックスの両方をサポートするためです。詳細については、[こちら](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/input_group.html)をご覧ください。
- 項目のリスト デフォルト拡張パネルの矢印は、`IgxSuffix` を使用し、ユーザーによって変更可能です。
- `IgxSuffix` が使用されると、拡張矢印が常に最後に表示されます。

### カスタム オーバーレイ設定の選択
`Igx-select` では[OverlaySettings](https://jp.infragistics.com/products/ignite-ui-angular/docs/typescript/interfaces/overlaysettings.html)のいずれにもバインドしませんが、カスタムな設定を作成して渡すことができます。

<div class="sample-container loading" style="height: 260px;">
    <iframe id="select-sample-4-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-entries/select-sample-4" class="lazyload"></iframe>
</div>

<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="select-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>

テンプレートを以下のように定義します。
```html
<igx-select [overlaySettings]="customOverlaySettings">
    <igx-select-item *ngFor="let item of items">
        {{item}}
    </igx-select-item>
</igx-select>
```
- `overlaySettings` プロパティがカスタム設定にバインドされます。

クラスの内側に以下のようなコードがあります。
```ts
export class MyClass implements OnInit {
    @ViewChild(IgxSelectComponent)
    public igxSelect: IgxSelectComponent;
    public items: string[] = ["Orange", "Apple", "Banana", "Mango", "Tomato"];
    public customOverlaySettings: OverlaySettings;

    public ngOnInit(): void {
        const positionSettings: PositionSettings = {
            closeAnimation: scaleOutBottom,
            horizontalDirection: HorizontalAlignment.Right,
            horizontalStartPoint: HorizontalAlignment.Left,
            openAnimation: scaleInTop,
            target: this.igxSelect.inputGroup.element.nativeElement,
            verticalDirection: VerticalAlignment.Bottom,
            verticalStartPoint: VerticalAlignment.Bottom
        };
        this.customOverlaySettings = {
            positionStrategy: new ConnectedPositioningStrategy(
                positionSettings
            ),
            scrollStrategy: new AbsoluteScrollStrategy()
        };
    }
}
```
[ConnectedPositioningStrategy](https://jp.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/connectedpositioningstrategy.html) に直接渡す [PositionSettings](https://jp.infragistics.com/products/ignite-ui-angular/docs/typescript/interfaces/positionsettings.html) オブジェクトを作成しましたが必須ではありません。ただし、カスタム ポジショニングを定義するためにストラテジのデフォルト設定をオーバーライドします。

- [ngOnInit](https://angular.io/api/core/OnInit) フックの内側にすべて設定できます。コンポーネントの生成時にテンプレートに自動的に反映します。

> [OverlaySettings](https://jp.infragistics.com/products/ignite-ui-angular/docs/typescript/interfaces/overlaysettings.html) オブジェクトを `igx-select`  のオープン関数に渡せることにも注意してください。   

テンプレートは以下のようになります。
```html
<igx-select>
    <igx-select-item *ngFor="let item of items">
        {{item}}
    </igx-select-item>
</igx-select>

<button (click)="onClick($event)"></button>
```
クラスは以下のようになります。
```ts
export class MyClass implements OnInit {
    /* -- */
    private otherCustomOverlaySettings: OverlaySettings = {
        positionStrategy: new GlobalPositionStrategy(),
        scrollStrategy: new AbsoluteScrollStrategy()
    }
    onClick(event: MouseEvent): void {
        this.igxSelect.open(this.otherCustomOverlaySettings)
    }
    /* -- */
}
```
- `open` 関数で引数として、同様にテンプレートへカスタム設定を渡した場合、`open` 関数の引数を使用します。ただし、`onOpening` または `onOpened` などのインターナル イベントにバインドした場合は、`igx-select` はテンプレートの設定を使用します。

## スタイル設定
[Ignite UI for Angular Theming](themes/index.md) は、** igx-select ** の外観を変更できます。`igx-select` は `igx-drop-down` を拡張するため、既存の `igx-drop-down` スタイル設定を活用できます。詳細については [igx-drop-down スタイリング ガイド](drop_down.md#styling)をご覧ください。さらに、`igx-select` には `IgxInputGroup` も含まれているため、入力グループのスタイル設定は `igx-select` コンポーネントに影響します。詳細については、[igx-input-group スタイル ガイド](input_group.md#styling) をご覧ください。

### コード スニペット
以下を使用します。
```scss
// in component.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
$my-primary-color:#FFC314;
$my-secondary-color: #7344df;
$my-info-color: #ffffff;

$my-color-palette: igx-palette(
    $primary: $my-primary-color,
    $secondary: $my-secondary-color,
    $info: $my-info-color
);

$custom-select-theme: igx-drop-down-theme(
    $background-color: igx-color($my-color-palette, "secondary", 100),
    $header-text-color: igx-color($my-color-palette, "secondary", 600),
    $item-text-color: igx-color($my-info-color, "info"),

    $selected-item-background: igx-color($my-color-palette, "secondary", 400),
    $selected-item-text-color: igx-color($my-color-palette, "info"),
    $selected-hover-item-background: igx-color($my-color-palette, "secondary", 400),
    $selected-hover-item-text-color: igx-color($my-color-palette, "info"),
    $selected-focus-item-background: igx-color($my-color-palette, "secondary", 400),
    $selected-focus-item-text-color: igx-color($my-color-palette, "info"),

    $focused-item-background: igx-color($my-color-palette, "secondary", 300),
    $focused-item-text-color: igx-color($my-color-palette, "info"),

    $hover-item-background: igx-color($my-color-palette, "info"),
    $hover-item-text-color: igx-color($my-color-palette, "secondary", 600)
);

// Pass our custom-select-theme to the `igx-drop-down` mixin
    @include igx-drop-down($custom-select-theme);
```

> [!NOTE]
> [**IgxSelect**]({environment:angularApiUrl}/classes/igxselectcomponent.html) コンポーネントは、[IgxOverlay](overlay_main.md) を使用して、`igx-select-items` リスト コンテナを保持および表示します。スタイルを適切にスコープするには、[OverlaySetting.outlet]({environment:angularApiUrl}/interfaces/overlaysettings.html#outlet) を使用してください。詳細については、[`IgxOverlay スタイリング ガイド`](overlay_styling.md)を確認してください。

### デモ
<div class="sample-container loading" style="height:450px">
    <iframe id="select-styling-iframe" src='{environment:demosBaseUrl}/data-entries/select-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="select-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で開く</button>
</div>

<div class="divider--half"></div>

## API リファレンス
[**IgxSelectComponent**](https://jp.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/igxselectcomponent.html)  
[**IgxSelectItemComponent**](https://jp.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/igxselectitemcomponent.html)  
[**IgxDropDownComponent**](https://jp.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/igxdropdowncomponent.html)  
[**IgxDropDownItemComponent**](https://jp.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/igxdropdownitemcomponent.html)  
[**OverlaySettings**](https://jp.infragistics.com/products/ignite-ui-angular/docs/typescript/interfaces/overlaysettings.html)  
[**ConnectedPositioningStrategy**](https://jp.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/connectedpositioningstrategy.html)  
[**GlobalPositionStrategy**](https://jp.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/globalpositionstrategy.html#constructor)  
[**AbsoluteScrollStrategy**](https://jp.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/absolutescrollstrategy.html)  
[**PositionSettings**](https://jp.infragistics.com/products/ignite-ui-angular/docs/typescript/interfaces/positionsettings.html)

## その他のリソース
[**NgModel**](https://angular.io/api/forms/NgModel)  
[**ViewChild**](https://angular.io/api/core/ViewChild)  
[**ngForOf**](https://angular.io/api/common/NgForOf)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
