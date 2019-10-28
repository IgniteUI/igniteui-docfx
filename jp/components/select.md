---
title: Angular Select |Material Select |IgniteUI for Angular |Infragistics
_description: Angular Select の設定方法。マテリアル選択は、Angular ドロップダウン リストを備えた入力を提供し、Angular コンボボックスの単一項目選択を可能にします。
_keywords:  angular select, igniteui for angular, インフラジスティックス
_language: ja
---

## 選択
Ignite UI for Angular Select コンポーネントは、特殊な配置が可能な項目ドロップダウンリストから単一のアイテムを選択できます。このマテリアルベースのフォームコントロールは、単一または複数の文字の一致に基づく選択を含む、迅速な項目リスト ナビゲーションを提供します。

## 選択のデモ
<div class="sample-container loading" style="height: 430px;">
    <iframe id="select-sample-1-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/data-entries/select-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="select-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>

## 使用方法
[IgxSelectComponent]({environment:angularApiUrl}/classes/igxselectcomponent.html) を初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールする必要があります。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](general/getting_started.md)トピックををご覧ください。

次に `IgxSelectModule` をインポートする必要があります。
```typescript
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

次に `<igx-select>` といくつかのアイテムを定義します。[`IgxSelectItemComponent`]({environment:angularApiUrl}/classes/igxselectitemcomponent.html) を使用して `igx-select` を実行する項目を表示することに注意してください。
```html
<!-- define items declaratively -->
<igx-select>
    <label igxLabel>Simple Select</label>
    <igx-select-item value="Orange">Orange</igx-select-item>
    <igx-select-item value="Apple">Apple</igx-select-item>
    <igx-select-item value="Banana">Banana</igx-select-item>
    <igx-select-item value="Mango">Mango</igx-select-item>
</igx-select>
```

その他 [ngForOf](https://angular.io/api/common/NgForOf) ディレクティブに表示したい項目のコレクションを使用する方法があります。

```typescript
public items: string[] = ["Orange", "Apple", "Banana", "Mango"];
```

```html
<igx-select [(ngModel)]="selected">
    <label igxLabel>Simple Select</label>
    <igx-select-item *ngFor="let item of items" [value]="item">
        {{item}}
    </igx-select-item>
</igx-select>
```
さらに、上記のサンプルは、`ngModel` を介した双方向のデータ バインディングを示しています。さらに、[`Angular Forms`](#angular-フォームの選択) の Select コンポーネントを使用できます。



### ラベル、プレフィックス、サフィックス
Select は、[入力グループ](input_group.md)に適用可能な次のディレクティブをサポートしています。

- `igxLabel` - Select 入力とのリンクは `aria-labelledby` を介して自動的に処理されるため、`for` プロパティを設定する必要はありません。
- `igx-prefix`/`igxPrefix`
- `igx-suffix`/`igxSuffix` - 組み込みのトグル ボタンサフィックスが常に最後に表示されることに注意してください。

```html
<igx-select [(ngModel)]="selected">
    <label igxLabel>Pick a fruit</label>
    <igx-prefix>
        <span class="bio-prefix">BIO</span>
    </igx-prefix>
    <igx-suffix *ngIf="selected">
        <igx-icon (click)="clearSelection($event)">clear</igx-icon>
    </igx-suffix>
    <igx-select-item *ngFor="let item of items" [value]="item">
        {{item}}
    </igx-select-item>
</igx-select>
```

<div class="sample-container loading" style="height: 350px;">
    <iframe id="select-input-directives-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/data-entries/select-input-directives" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="select-input-directives-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>

> [!NOTE]
Selectコンポーネントに[`プレースホルダー`]({environment:angularApiUrl}/classes/igxselectcomponent.html#placeholder)が指定されておらず、選択も行われていない場合、`igxLabel` は遷移し、プレースホルダーが適切な場所に表示されます。

### Toggle ボタンのテンプレート
デフォルトの矢印は、`igxSelectToggleIcon` ディレクティブでマークされたネスト形式のテンプレートに置き換え、または `TemplateRef` を [`toggleIconTemplate`]({environment:angularApiUrl}/classes/igxselectcomponent.html#toggleicontemplate) プロパティに設定できます。
```html
<igx-select #select>
    ...
    <ng-template igxSelectToggleIcon let-collapsed>
        <igx-icon>{{ collapsed ? 'add_circle' : 'add_circle_outline'}}</igx-icon>
    </ng-template>
    ...
<igx-select>
```

## 機能
### アクションの選択
#### 開く
キーボードで `igx-select` にフォーカスしても開きません。
フォーカスを `igx-select` に設定し、 `Space`, `Enter` または `ALT + 上矢印/下矢印` キーで開きます。
- `igx-select` はマウスを左クリック、またはドロップダウン ボタンを左クリックで開きます。

#### 閉じる
`igx-drop-down` が開いている場合、以下のいずれかで閉じることができます。
- ドロップダウン リストから項目を選択
- `ALT + 上矢印/下矢印` キーの押下
- `Enter`、`Space`、`Esc`、`Tab` のいずれかを押下
- ドロップダウン ボタン上でマウスを左クリック、またはドロップダウン以外を左クリックしてドロップダウンを閉じることもできます。

### キーボード ナビゲーション
`igx-select` には直感的なキーボード ナビゲーションがあり、マウスを使用せずに簡単に項目を選択できます。

- ドロップダウン リストが開いているときの移動先に残っている項目がある場合は、`上矢印/下矢印`キーで項目を移動できます。更に `Home` または `End` を押すとリストの最初と最後の項目に移動します。
- ドロップダウン リストが開いたときに対応するキーを押して特定の文字で始まる各項目に移動できます。大文字小文字を区別して一致するすべての項目間をフォーカスします￥。
- ドロップダウン リストを開いたときに、必要な項目の最初の数文字を入力してすばやく特定の項目に移動できます。
    - *入力スピードが関係することに注意してください。*
- ドロップダウン リストが開いているときは、`Home` と `End` のキーを使用して項目を移動できます。
- ドロップダウン リストが開いている場合、`上矢印/下矢印` キーによる移動は選択した項目から開始されます。そうでない場合は、リストの最初の項目から開始します。
- ドロップダウンリストがクローズいているときは、`上矢印/下矢印`キーで項目間を循環できます。
- ドロップダウン リストが閉じたときに、特定の項目で始まるすべての項目へ移動することもできます。ドロップダウン リストが開いている場合も同様に動作します。
- ドロップダウン リストを閉じたときに、最初の数文字を入力してすばやく特定の項目に移動できます。ドロップダウンが開いたときと動作は同じです。
- ドロップダウンが閉じたときに文字キーの移動は、大文字と小文字を区別しません。
- ドロップダウンが閉じている場合、一致する項目のない文字の押下時は文字キー ナビゲーションは選択を変更しません。

### 項目の選択
ドロップダウン リストから項目を選択する方法:
- 左マウス クリック
- 各項目がフォーカスされたときの`Enter` キー。
- 各項目がフォーカスされたときの `Space` キー。
- コードで値 value プロパティを設定。
- 項目の `selected` プロパティの設定。
- ドロップダウン リストの最初に有効な項目がフォーカスされます。
- 入力ボックスに選択したアイテムの値が入力されます。
- 選択した項目を変更したときに入力ボックスのテキストが更新されます。
- 入力ボックスは、フォーカスされていても選択されてない項目のテキストでは生成されません。
- 項目は選択されていても値が設定されていない、または一致する項目がない場合、入力ボックスにテキストは追加されません。
- 値プロパティを存在しない項目に設定時に選択がクリアされます。
- 無効な項目は選択できません。
- 選択オプションが削除されると選択も削除されます。
- 重複する値を持つ項目がある場合、最初の項目が選択されます。

>[!NOTE]
> `igx-select` は、アイテムの単一選択のみをサポートします。

### イベント発生
`igx-select` が `igx-drop-down` を拡張するため、以下を含むイベントも使用できます。

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
    - トグル ボタン クリックの選択 (アプリのシナリオ)
- キー操作でトリガー

 `onOpening` と `onClosing` イベントがアニメーションの再生が完了する前 (ドロップダウンが完全に**開く**または**閉じる**前) に発生されます。イベント ハンドラー関数で `cancel` プロパティを `true` に設定してキャンセルできます。

```html
<igx-select (onOpening)="handleOpening($event)" (onClosing)="handleClosing($event)">
    <igx-select-item [value]="Apple">Apple</igx-select-item>
</igx-select>
```

#### 選択イベント
- 項目の選択が変更されたとき (新しいアイテムを選択しようとしたとき) に生成されます。選択が完了する前、つまり新しいアイテムが選択される前に発行されます。
- マウスクリックで項目が選択されたときにエミットされます。
- `Enter`、`Space` キーで項目が選択されたときにエミットされます。
- 値プロパティの設定時にエミットされます。
- 項目の `selected` プロパティの設定時にエミットされます。

```html
<igx-select (onSelection)="handleSelection($event)">
    <igx-select-item [value]="Apple">Apple</igx-select-item>
    <igx-select-item [value]="Pear">Pear</igx-select-item>
</igx-select>
```

#### Closed イベント
- ドロップダウンが完全に閉じたときにコンポーネントの外側をクリックしてエミットされます。

`onClosed` イベントを使用できます。
```html
<igx-select (onClosed)="handleClosed($event)">
    <igx-select-item [value]="Apple">Apple</igx-select-item>
</igx-select>
```

class 内にすべての handler 関数を置きます。
```typescript
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
`igx-select` には、` SelectPositioningStrategy` と呼ばれる独自の配置ストラテジがあります。
[*ConnectedPositioningStrategy*]({environment:angularApiUrl}/classes/connectedpositioningstrategy.html) を拡張し、`igx-select` を入力フィールドに応じてさまざまな方法でドロップダウンリストに配置します。つまり、ドロップダウンは常にそれ自体を配置するため、入力テキストが選択した項目のテキストと一致します。

以下の例は、`SelectPositioningStrategy` を使用してカスタム オーバーレイ設定を定義するため、はじめに [*OverlaySettings*]({environment:angularApiUrl}/interfaces/overlaysettings.html) と一緒にインポートする必要があります。
```typescript
import { SelectPositioningStrategy, OverlaySettings } from 'igniteui-angular';
```

[*OverlaySettings*]({environment:angularApiUrl}/interfaces/overlaysettings.html) オブジェクトを初期化して [*OverlaySettings*]({environment:angularApiUrl}/interfaces/overlaysettings.html) に渡す必要があります。最後にポジション ストラテジのコンストラクタは、テンプレートから `IgxSelectComponent` を参照する [*ViewChild*](https://angular.io/api/core/ViewChild) に渡します。

以下のようになります。
```typescript
@ViewChild(IgxSelectComponent)
public select: IgxSelectComponent;

public customOverlaySettings: OverlaySettings = {
    positionStrategy: new SelectPositioningStrategy(
        this.select
    ),
    scrollStrategy: new AbsoluteScrollStrategy()
};
```
上記のように `customOverlaySettings` オブジェクトにある `scrollStrategy` プロパティもあります。これにより、ドロップダウンのスクロール機能が正しく動作します。このスクロールは、リストのすべての項目の合計の高さがドロップダウンの高さを超えるたびに表示されます。

その他の重要な点は `igx-select` がデフォルトで `SelectPositioningStrategy` を使用する点です。
> [さまざまな配置ストラテジ]({environment:angularApiUrl}/interfaces/ipositionstrategy.html)を `positionStrategy` プロパティに渡すことができます。

### グループ選択
<div class="sample-container loading" style="height: 470px;">
    <iframe id="select-sample-2-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-entries/select-sample-2" class="lazyload"></iframe>
</div>

<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="select-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>

`igx-select` が `igx-drop-down` に拡張し、groups のビルトイン サポートがあります。 

この機能を活用するには、`igx-select` に渡すデータを変更する必要があり、この場合は以下のようになります。
```typescript
public greengrocery: any[] = [
    { label: "Fruits", items: [ "Apple", "Orange", "Banana" ] },
    { label: "Vegetables", items: [ "Cucumber", "Potato", "Pepper" ] }
];
```

`type` や `fruits` など特定のプロパティを持つオブジェクトを渡します。`IgxSelectItemComponent` にドロップダウン リスト内の特定のスタイルを受け取りを許容する機能があるためです。この機能は、[*IgxDropDownItemComponent*]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html) から継承されます。

次にテンプレート ファイルでこれらのオブジェクトを反復してプロパティへ適切にアクセスします。
```html
<igx-select>
    <igx-select-item-group *ngFor="let group of greengrocery" [label]="group.label">
        <igx-select-item *ngFor="let item of group.items" [value]="item">
            {{item}}
        </igx-select-item>
    </igx-select-item-group>
</igx-select>
```
### Angular フォームの選択
`Select` コンポーネントは、コア FormsModule [NgModel](https://angular.io/api/forms/NgModel) と [ReactiveFormsModule](https://angular.io/api/forms/ReactiveFormsModule) (FormControl, FormGroup など) からのすべてのフォーム ディレクティブをサポートします。これには、[フォーム バリデーター](https://angular.io/api/forms/Validators)機能も含まれます。次の例は、テンプレート駆動型フォームで`必要な`バリデーターを使用する方法を示しています。

テンプレート駆動フォームの例:
```html
<form>
    <igx-select [(ngModel)]="selected" required>
        <label igxLabel>Pick a fruit</label>
        <igx-select-item *ngFor="let fruit of fruits" [value]="fruit">
            {{item}}
        </igx-select-item>
    </igx-select>
</form>
```

TwoWay バインディングを使用するため、クラスは以下のようになります。
```typescript
export class MyClass {
    public fruits: string[] = ["Orange", "Apple", "Banana", "Mango"];
    public selected: string = "Apple";
}
```

<div class="sample-container loading" style="height: 400px;">
    <iframe id="select-form-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-entries/select-form" class="lazyload"></iframe>
</div>

<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="select-form-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>

> [!NOTE]
`必要`なアスタリスク`*`も表示する場合は、ラベルセットが必要です。

### カスタム オーバーレイ設定の選択
`igx-select` では [*OverlaySettings*]({environment:angularApiUrl}/interfaces/overlaysettings.html) のいずれにもバインドしませんが、カスタムな設定を作成して渡すことができます。

<div class="sample-container loading" style="height: 260px;">
    <iframe id="select-sample-4-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-entries/select-sample-4" class="lazyload"></iframe>
</div>

<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="select-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>

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
```typescript
export class MyClass implements OnInit {
    @ViewChild(IgxSelectComponent)
    public select: IgxSelectComponent;
    public items: string[] = ["Orange", "Apple", "Banana", "Mango", "Tomato"];
    public customOverlaySettings: OverlaySettings;

    public ngOnInit(): void {
        const positionSettings: PositionSettings = {
            closeAnimation: scaleOutBottom,
            horizontalDirection: HorizontalAlignment.Right,
            horizontalStartPoint: HorizontalAlignment.Left,
            openAnimation: scaleInTop,
            target: this.select.inputGroup.element.nativeElement,
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
[*ConnectedPositioningStrategy*]({environment:angularApiUrl}/classes/connectedpositioningstrategy.html) に直接渡す [*PositionSettings*]({environment:angularApiUrl}/interfaces/positionsettings.html) オブジェクトを作成しましたが必須ではありません。ただし、カスタム ポジショニングを定義するためにストラテジのデフォルト設定をオーバーライドします。

- [*ngOnInit*](https://angular.io/api/core/OnInit) フックの内側にすべて設定できます。コンポーネントの生成時にテンプレートに自動的に反映します。

> [OverlaySettings]({environment:angularApiUrl}/interfaces/overlaysettings.html) オブジェクトを `igx-select` のオープン関数に渡せることにも注意してください。  

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
```typescript
export class MyClass implements OnInit {
    /* -- */
    private otherCustomOverlaySettings: OverlaySettings = {
        positionStrategy: new GlobalPositionStrategy(),
        scrollStrategy: new AbsoluteScrollStrategy()
    }
    onClick(event: MouseEvent): void {
        this.select.open(this.otherCustomOverlaySettings)
    }
    /* -- */
}
```
- テンプレートと同様に関数 `open` の引数としてカスタム設定を渡す場合、`igx-select` は関数 `open` で提供されるものを使用することに注意してください。ただし、`onOpening` または `onOpened` などのインターナル イベントにバインドした場合は、`igx-select` はテンプレートの設定を使用します。

## スタイル設定
[Ignite UI for Angular テーマ ](themes/index.md)を使用して、**igx-select** の外観を変更できます。 
`igx-select` は igx-drop-down を拡張するため、既存の `igx-drop-down` スタイル設定を活用できます。詳細については [igx-drop-down スタイル ガイド](drop_down.md#スタイル設定)をご覧ください。
さらに、`IgxInputGroup` には `IgxInputGroup` も含まれているため、入力グループのスタイル設定は `IgxSelect` コンポーネントに影響します。詳細については、[igx-input-group スタイル ガイド](input_group.md#スタイル設定) スタイル ガイドを参照できます。

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
> [**IgxSelect**]({environment:angularApiUrl}/classes/igxselectcomponent.html) コンポーネントは、[IgxOverlay](overlay_main.md) を使用して、`igx-select-items` リスト コンテナを保持および表示します。スタイルを適切にスコープするには、[OverlaySetting.outlet]({environment:angularApiUrl}/interfaces/overlaysettings.html#outlet) を使用してください。詳細については、[`IgxOverlay スタイル ガイド`](overlay_styling.md)を確認してください。

### デモ
<div class="sample-container loading" style="height:450px">
    <iframe id="select-styling-iframe" src='{environment:demosBaseUrl}/data-entries/select-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="select-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

<div class="divider--half"></div>

## API リファレンス 
[**IgxSelectComponent**]({environment:angularApiUrl}/classes/igxselectcomponent.html)  
[**IgxSelectItemComponent**]({environment:angularApiUrl}/classes/igxselectitemcomponent.html)  
[**IgxDropDownComponent**]({environment:angularApiUrl}/classes/igxdropdowncomponent.html)  
[**IgxDropDownItemComponent**]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html)  
[**OverlaySettings**]({environment:angularApiUrl}/interfaces/overlaysettings.html)  
[**ConnectedPositioningStrategy**]({environment:angularApiUrl}/classes/connectedpositioningstrategy.html)  
[**GlobalPositionStrategy**]({environment:angularApiUrl}/classes/globalpositionstrategy.html#constructor)  
[**AbsoluteScrollStrategy**]({environment:angularApiUrl}/classes/absolutescrollstrategy.html)  
[**PositionSettings**]({environment:angularApiUrl}/interfaces/positionsettings.html)

## その他のリソース
[**NgModel**](https://angular.io/api/forms/NgModel)
[**ViewChild**](https://angular.io/api/core/ViewChild)
[**ngForOf**](https://angular.io/api/common/NgForOf)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
