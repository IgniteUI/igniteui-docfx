---
title: Drop Down コンポーネント
_description: Ignite UI for Angular Drop Down は、単一項目の選択が可能なグループ項目をスクロール付きのリストで表示します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Drop Down コンポーネント, Angular Drop Down コントロール
_language: ja
---

## Drop Down
<p class="highlight">Ignite UI for Angular Drop Down は、単一項目の選択が可能なグループ項目をスクロール付きのリストで表示します。項目をクリックまたはタップして選択するとドロップダウンが閉じられます。</p>
<div class="divider"></div>

### Drop Down デモ
<div class="sample-container loading" style="height:220px">
    <iframe id="dropdown-sample-4-iframe" src='{environment:demosBaseUrl}/data-entries/dropdown-sample-4' width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法
[IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) を初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールする必要があります。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](general/getting_started.md)トピックををご覧ください。

次に、**app.module.ts** ファイルに `IgxDropDownModule` をインポートします。

```typescript
// app.module.ts

...
import { IgxDropDownModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxDropDownModule],
    ...
})
export class AppModule {}
```

選択可能な複数のオプション項目を提供するシンプルなドロップダウンを作成します。**igx-drop-down** コンポーネントと [igxToggleAction]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html) を使用してドロップダウンの開く/閉じるを有効にします。

構成の後、すべてのオプションを  [**IgxDropDownComponent**](drop_down.md) コンポーネントに表示します。ドロップダウンは、ドロップダウン項目として複数のオプションを含みます。

```html
<!-- dropdown.component.html -->

<div class="sample-wrapper">
    <button class="button" igxButton="raised" [igxToggleAction]="dropdown" [igxDropDownItemNavigation]="dropdown" >Options</button>
    <igx-drop-down #dropdown [width]="'100px'">
        <igx-drop-down-item *ngFor="let item of items">
            {{ item.field }}
        </igx-drop-down-item>
    </igx-drop-down>
</div>
```

```typescript
// dropdown.component.ts

export class MyDropDownComponent {
    public items: Array<{ field: string }> = [
        { field: "Option 1" },
        { field: "Option 2" },
        { field: "Option 3" }
    ];
}
```


サンプルを正しく構成すると、複数のオプションを含むドロップダウンが表示されます。

<div class="sample-container loading" style="height: 200px">
    <iframe id="dropdown-sample-1-iframe" data-src='{environment:demosBaseUrl}/data-entries/dropdown-sample-1' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="dropdown-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">                Stackblitz で表示
    </button>
</div>

<div class="divider--half"></div>

#### 選択済み項目の定義
選択済みの項目をあらかじめ定義する場合、[IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) の **igx-drop-down** [onOpening]({environment:angularApiUrl}/classes/igxdropdowncomponent.html#onopening) イベントを処理します。

```html
<!-- dropdown.component.html -->

<div class="sample-wrapper">
    <button class="button" igxButton="raised" [igxToggleAction]="dropdown" [igxDropDownItemNavigation]="dropdown">Options</button>
    <igx-drop-down #dropdown (onOpening)="dropdown.setSelectedItem(0)" [width]="'100px'">
        <igx-drop-down-item *ngFor="let item of items">
            {{ item.field }}
        </igx-drop-down-item>
    </igx-drop-down>
</div>
```

```typescript
// dropdown.component.ts

export class MyDropDownComponent {
    public items: Array<{ field: string }> = [
        { field: "Option 1" },
        { field: "Option 2" },
        { field: "Option 3" }
    ];
}
```

<div class="sample-container loading" style="height: 200px">
    <iframe id="dropdown-sample-2-iframe" data-src='{environment:demosBaseUrl}/data-entries/dropdown-sample-2' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="dropdown-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">                Stackblitz で表示
    </button>
</div>

<div class="divider--half"></div>

[isHeader]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html#isheader) を使用して意味的なグループ化や [disabled]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html#disabled) を使用して非インタラクティブな項目を表示するなど、有用なビジュアル情報を提供できます。また [selected]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html#selected) は特定の項目に設定して選択項目にできます。

```html
<!-- dropdown.component.html -->

<div class="sample-wrapper">
    <button class="button" igxButton="raised" [igxToggleAction]="dropdown" [igxDropDownItemNavigation]="dropdown">Countries</button>
    <igx-drop-down #dropdown [width]="'144px'">
        <div class="drop-down__scroll-container">
            <igx-drop-down-item *ngFor="let item of items" [disabled]="item.disabled" [isHeader]="item.header"
                [selected]="item.selected">
                {{ item.field }}
            </igx-drop-down-item>
        </div>
    </igx-drop-down>
</div>
```

```typescript
// dropdown.component.ts

export class MyDropDownComponent {
    public items: any[] = [
        { field: "EU", header: true },
        { field: "Germany" },
        { field: "Bulgaria", selected: true },
        { field: "UK", disabled: true },
        { field: "NA", header: true },
        { field: "Canada" },
        { field: "USA" },
        { field: "Mexico" }
    ];
}
```

サンプルを正しく構成すると EU ヘッダーの下に国の一覧がグループ形式で表示され、UK は非インタラクティブな項目、そして Bulgaria は選択済みの項目として表示されます。

<div class="sample-container loading" style="height: 298px">
    <iframe id="dropdown-sample-3-iframe" data-src='{environment:demosBaseUrl}/data-entries/dropdown-sample-3' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">                Stackblitz で表示
    </button>
</div>

#### 階層データのグループ化

`igx-drop-down` の項目は、[`igx-drop-down-item-group`]({environment:angularApiUrl}/classes/igxdropdowngroupcomponent.html) を使用してグループ化することもできます。`igx-drop-down-item-group` は、`igx-drop-down-item` をコンテンツとして許容し、グループ形式で描画します。
以下のコード スニペットは、`igx-drop-down-item-group` を使用して `foods` 配列の例を表示する方法を示します。
```typescript
// dropdown.component.ts
export class MyCustomDropDownComponent {
    ...
    public foods: { 
        name: string,
        entries: { name: string, refNo: string }[]
    }[] = [
    {
        name: 'Vegetables',
        entries: [{
            name: 'Cucumber',
            refNo: `00000`
    }, {
        name: 'Lettuce',
        refNo: `00001`
    },
        ...]
    }, {
        name: 'Fruits',
        entries: [{
            name: 'Banana',
            refNo: `10000`
        }, {
            name: 'Tomato',
            refNo: `10001`
        },
        ...]
    }, {
        name: 'Meats',
        entries: [{
            name: 'Chicken',
            refNo: `20000`
        }, {
            name: 'Beef',
            refNo: `20001`
        },
        ...]
    }];
}
```
```html
    <igx-drop-down>
        <igx-drop-down-item-group *ngFor="let foodGroup of foods" [label]="foodGroup.name">
            <igx-drop-down-item *ngFor="let food of foodGroup.entries" [value]='food.refNo'>
                {{ food.name }}
            </igx-drop-down-item>
        </igx-drop-down-item-group>
    </igx-drop-down>
```

`igx-drop-down-item-group` は、グループ形式ですべての `igx-drop-down-item` を表示することにより、ユーザーが食品のカテゴリを区別しやすくなります。更にグループにはボディの `igx-drop-down-item` を無効にする機能があります。たとえば、`Meats` 食品グループのドロップダウン選択を無効にする場合です。すべての `Meats` のエントリすべての個別に無効にする代わりに、以下が可能です。

```html
    <igx-drop-down>
        <igx-drop-down-item-group *ngFor="let foodGroup of foods" [label]="foodGroup.name" [disabled]="foodGroup.name === 'Meats'">
            <igx-drop-down-item *ngFor="let food of foodGroup.entries" [value]='food.refNo'>
                {{ food.name }}
            </igx-drop-down-item>
        </igx-drop-down-item-group>
    </igx-drop-down>
``` 

これにより `Meats` とすべての子項目が無効になります。

以下のサンプルで結果を確認できます。
<div class="sample-container loading" style="height: 298px">
    <iframe id="dropdown-sample-5-iframe" data-src='{environment:demosBaseUrl}/data-entries/dropdown-sample-5' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">                Stackblitz で表示
    </button>
</div>

#### ドロップダウン メニュー
[`igxDropDown`]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) を設定してメニューとして使用できます。[`onSelection`]({environment:angularApiUrl}/classes/igxdropdowncomponent.html#onselection) イベント ハンドラーで [`ISelectionEventArgs`]({environment:angularApiUrl}/interfaces/iselectioneventargs.html) [`cancel`]({environment:angularApiUrl}/interfaces/iselectioneventargs.html#cancel) メンバーを *true* に設定します。そのため選択した項目は開いているメニューに保存されずに選択が無効になります。[`ISelectionEventArgs`]({environment:angularApiUrl}/interfaces/iselectioneventargs.html) [`newSelection`]({environment:angularApiUrl}/interfaces/iselectioneventargs.html#newselection) メンバー値でクリックした項目を取得できます。

```html
<!-- dropdown.component.html -->

<div class="drop-down-wrapper">
    <igx-navbar title="Contacts">
        <button [igxToggleAction]="menu" [igxToggleOutlet]="outlet" [overlaySettings]="overlaySettings" [igxDropDownItemNavigation]="menu"
            igxButton="icon">
            <igx-icon fontSet="material">more_vert</igx-icon>
        </button>
        <igx-drop-down #menu (onSelection)="onSelection($event)">
            <igx-drop-down-item *ngFor="let item of items" [value]="item.text">
                <div>{{ item.text }}</div>
            </igx-drop-down-item>
        </igx-drop-down>
    </igx-navbar>

    <div class="textContainer">
        <ng-container *ngIf="text">
            <label igxLabel>Clicked menu item: {{ text }}</label>
        </ng-container>
    </div>

    <div class="overlayOutlet" igxOverlayOutlet #outlet="overlay-outlet"></div>
</div>
```

```typescript
// dropdown.component.ts

export class MyMenuComponent {
    public items: Array<{ text: string }> =
        [{ text: "Add New Contact" }, { text: "Edit Contact" }, { text: "Refresh" }, { text: "Help" }];
    public text: string;
    public overlaySettings = {
        positionStrategy: new ConnectedPositioningStrategy({
            horizontalDirection: HorizontalAlignment.Left,
            horizontalStartPoint: HorizontalAlignment.Right,
            verticalStartPoint: VerticalAlignment.Bottom
        }),
        scrollStrategy: new NoOpScrollStrategy()
    };

    public onSelection(eventArgs: ISelectionEventArgs) {
        this.text = eventArgs.newSelection.value;
        eventArgs.cancel = true;
    }
}
```

<div class="sample-container loading" style="height: 280px">
    <iframe id="dropdown-menu-iframe" data-src='{environment:demosBaseUrl}/data-entries/dropdown-menu' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-menu-iframe" data-demos-base-url="{environment:demosBaseUrl}">                Stackblitz で表示
    </button>
</div>

#### Navigation ディレクティブ
`igxDropDown` コンポーネントのキーボード ナビゲーションを有効にするには、[igxDropDownItemNavigation]({environment:angularApiUrl}/classes/igxdropdownitemnavigationdirective.html) ディレクティブを適用します。ディレクティブをアクティブ (フォーカスした) 要素または親コンテナに適用することにより、トリガーしたすべてのイベントを処理できるようになります。デフォルトでは、igxDropDown またはその項目にフォーカスが当たらないため、たとえばディレクティブをドロップダウンを制御する`ボタン`や`入力`に配置できます。
[igxDropDownItemNavigation]({environment:angularApiUrl}/classes/igxdropdownitemnavigationdirective.html) ディレクティブ値は、ターゲット コンポーネントまたは拡張 [IgxDropDownBase]({environment:angularApiUrl}/classes/igxdropdownbase.html) クラスにする必要があります。


以下のサンプルは、クリックによって igxDropDown インスタンスを開いたり閉じたりする例です。入力に [igxDropDownItemNavigation]({environment:angularApiUrl}/classes/igxdropdownitemnavigationdirective.html) を適用し、上矢印と下矢印の使用時にキーボード ナビゲーションを有効にします。[allowItemsFocus]({environment:angularApiUrl}/classes/igxdropdowncomponent.html#allowitemsfocus) が無効のデフォルトのドロップダウン動作に依存し、ボタン入力にフォーカスを維持することが可能です。


```html
<!-- input-dropdown.component.html -->

<igx-input-group #inputGroup [igxToggleAction]="dropDown" class="input-group">
    <input class="input"  type="text" igxInput [igxDropDownItemNavigation]="dropDown"
        readonly= "true"
        placeholder="choose an option"
        [value]="dropDown.selectedItem?.value"
        (keydown.ArrowDown)="openDropDown()"/>

    <igx-suffix igxButton="icon" class="dropdownToggleButton" igxRipple>
        <igx-icon>arrow_drop{{ dropDown.collapsed ? '_down' : '_up' }}</igx-icon>
    </igx-suffix>
</igx-input-group>

<span>Selected: {{ dropDown.selectedItem?.value }}</span>
<igx-drop-down #dropDown [width]="'160px'">
    <igx-drop-down-item *ngFor="let item of items" [value]="item.field">
        {{ item.field }}
    </igx-drop-down-item>
</igx-drop-down>
```

```typescript
// input-dropdown.component.ts

export class InputDropDownComponent {
    @ViewChild(IgxDropDownComponent) public igxDropDown: IgxDropDownComponent;
    @ViewChild("inputGroup", { read: IgxInputGroupComponent}) public inputGroup: IgxInputGroupComponent;

    public items: Array<{ field: string }> = [
        { field: "Option 1" },
        { field: "Option 2" },
        { field: "Option 3" }
    ];

    public openDropDown() {
        if (this.igxDropDown.collapsed) {
            this.igxDropDown.open({
                modal: false,
                positionStrategy: new ConnectedPositioningStrategy({
                    target: this.inputGroup.element.nativeElement
                })
            });
        }
    }
}
```

<div class="sample-container loading" style="height:220px">
    <iframe id="dropdown-sample-4-iframe" data-src='{environment:demosBaseUrl}/data-entries/dropdown-sample-4' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>


ディレクティブを適用すると、キーボード ナビゲーションの結果として以下の動作が実行します。

| 名前 | 説明 |
| :--- | :--- |
| `Enter` | ドロップダウンから項目の選択後、ドロップダウンを閉じます。 |
| `Space` | ドロップダウンから項目の選択後、ドロップダウンを閉じます。 |
| `Esc` | ドロップダウンを閉じます。 |
| `Arrow Down` | ターゲット コンポーネントの次の項目に移動します。|
| `Arrow Up` | ターゲット コンポーネントの前の項目に移動します。 |
| `End` | ターゲット コンポーネントの最後の項目に移動します。 |
| `Home` | ターゲット コンポーネントの最初の項目に移動します。 |



[allowItemsFocus]({environment:angularApiUrl}/classes/igxdropdowncomponent.html#allowitemsfocus) が有効な場合、ドロップダウン項目がタブ インデックスを取得し、アクティブな時にフォーカスされます。フォーカスされたドロップダウン項目がキーボード ナビゲーション時にイベントをトリガーするため、 [igxDropDownItemNavigation]({environment:angularApiUrl}/classes/igxdropdownitemnavigationdirective.html) を各ドロップダウン項目に適用する必要があります。

```
<igx-input-group [igxToggleAction]="dropDown">
    <input igxInput type="text">
</igx-input-group>
<igx-drop-down #dropDown [allowItemsFocus]="true">
    <igx-drop-down-item *ngFor="let p of provinceData" [igxDropDownItemNavigation]="dropDown">
        {{ p }}
    </igx-drop-down-item>
</igx-drop-down>
```
### スタイル設定
[Ignite UI for Angular テーマ](themes/index.md)を使用して、**igx--combo** の外観を変更できます。RPG 'Hero Class' を選択するために、`igx-drop-down` コンポーネントを作成およびスタイル設定します。 

#### テーマのインポート
はじめに、テーマ エンジンによって公開されている関数を使用するために、スタイル ファイルに `index` ファイルをインポートする必要があります。 

```scss
// in component.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

#### パレットと色の定義
インデックス ファイルをインポート後、 [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用して、カスタムテーマで使用するいくつかの色変数を定義できます。コンポーネントで使用するメイン カラーを指定できる独自のカラー[パレット](themes/palette.md)と組み合わせて、カスタムigxドロップダウン スタイルにこれらを使用します。
最初にカスタム パレットを定義し、メイン カラーを渡します。
```scss
$my-primary-color:#FFC314;
$my-secondary-color: #7344df;
$my-info-color: #ffffff;

$my-color-palette: igx-palette(
    $primary: $my-primary-color,
    $secondary: $my-secondary-color,
    $info: $my-info-color
);
```
カスタム パレットと適用された色を確認するには、これらをテーマ関数に渡す必要があります。
次に[`カスタム テーマを作成`](themes/component-themes.md#テーマの作成)し、定義済みの多数の `igx-drop-down-theme` パラメーターに色を渡します。これらの特定のパラメーターを変更してコンポーネントを希望する外観にできると仮定します。以前に作成したパレットを使用して、新しい色をその[パレット](themes/palette.md)に基づいて作成すると非常に便利です。紫色のいくつかの異なる色合いを使用します。
```scss
$custom-drop-down-theme: igx-drop-down-theme(
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
```
この特定のサンプルのように、ボタンを使用して `igx-drop-down` を切り替えますが、さらにスタイルを設定することもできます。したがって、`igx-drop-down` トピック外でドロップダウンテーマの全体的なスタイルを補完するために、次のようなカラーパレットを渡すカスタムボタンテーマを作成します。 
```scss
$custom-button-theme: igx-button-theme(
    $palette: $my-color-palette
);

```

#### 適用
あとは新しく作成したテーマを適切にスコープするだけです。

##### グローバル
この新しく作成された `igx-drop-down` テーマをアプリで[`グローバル`](themes/component-themes.md#テーマの作成)に適用したい場合 (このタイプのすべてのコンポーネントに、実際に igx-drop-down-theme を拡張していることに注意してください)、必要なすべてテーマをアプリのルート スタイルファイルに含めてください。同じことがカスタム ボタン テーマにも当てはまります。
```scss
// in root app.scss
// Pass our drop-down theme to the `igx-drop-down` mixin
    @include igx-drop-down($custom-drop-down-theme);
// Pass our button theme to the `igx-button` mixin
    @include igx-button($custom-button-theme);

```
##### スコープ
特定の `igx-drop-down` のスタイルをアプリ内の他のものとは異なるようにする場合があります。これには、`:host`、`::ng-deep` などの Angular 固有の擬似クラス セレクターを使用する必要があります。

 >[!NOTE]
 >コンポーネントが [`Emulated`](themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を `penetrate` する必要があります。

 

一方、カスタム テーマが他のコンポーネントの子孫に影響しないようにするには、`::ng-deep` の前に `:host` セレクターを含めるようにしてください。

```scss
:host {
    ::ng-deep {
        @include igx-drop-down($custom-drop-down-theme);
        @include igx-button($custom-button-theme);
    }
}
```

> [!NOTE]
> [**IgxDropDown**]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) コンポーネントは、[IgxOverlay](overlay_main.md) を使用して、`igx-drop-down-items` リスト コンテナを保持および表示します。スタイルを適切にスコープするには、[OverlaySetting.outlet]({environment:angularApiUrl}/interfaces/overlaysettings.html#outlet) を使用してください。詳細については、[`IgxOverlay スタイリング ガイド`](overlay_styling.md)を確認してください。

#### デモ
<div class="sample-container loading" style="height:350px">
    <iframe id="dropdown-styling-iframe" src='{environment:demosBaseUrl}/data-entries/dropdown-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

<div class="divider--half"></div>

### API リファレンス

* [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) 
* [IgxDropDownComponent スタイル]({environment:sassApiUrl}/index.html#mixin-igx-drop-down)
* [IgxDropDownItemComponent]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html)
* [IgxOverlay]({environment:angularApiUrl}/interfaces/overlaysettings.html)
* [IgxOverlay スタイル]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)

### その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
