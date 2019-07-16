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
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で開く</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> Ignite UI for Angular コンポーネントをプロジェクトに追加する前に、必要なすべての依存関係を構成し、プロジェクトのセットアップが正しく完了したことを確認してください。[**インストール**](https://jp.infragistics.com/products/ignite-ui-angular/getting-started#installation) のトピックで手順を確認できます。

### 使用方法
Ignite UI for Angular Drop Down コンポーネントを初期化する前に `IgxDropDownModule` を **app.module.ts** ファイルにインポートします。

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
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="dropdown-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">                StackBlitz で開く
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
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="dropdown-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">                StackBlitz で開く
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
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">                StackBlitz で開く
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
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">                stackblitz で開く
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
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-menu-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on stackblitz
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
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で開く</button>
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

### Styling
Using the [Ignite UI for Angular Theming](themes/index.md), we can greatly alter the **igx-drop-down** appearance. We are going to create and style an `igx-drop-down` component to choose an RPG 'Hero Class' from. 

#### Import theme
First, in order for us to use the functions exposed by the theme engine, we need to import the `index` file in our style file: 

```scss
// in component.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

#### Define palette & colors
After we've imported the `index` file we can go ahead and use the [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) function to define some color variables we would like to use in our custom theme. We are going to use these for our custom igx-drop-down styling in conjunction with our own color [palette](themes/palette.md) where we can specify our main colors to be used by the component.
Fist define a custom palette and pass our main colors:
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
In order to see our custom palette and colors applied, we need to pass these to a theme function.
So in one bold move we will [`create a custom theme`](themes/component-themes.md#creating-themes) and pass our cool colors to a number of predefined `igx-drop-down-theme parameters` . Let's say we have decided modifying these specific parameters will be more than sufficient to make our component look the way we like. It is really convenient to take use of the previously created [palette](themes/palette.md) and base our new colors on it. Lets say we are going for some different shades of purple.
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
As in this particular sample we are going to use a button to toggle the `igx-drop-down`, we can go a bit further and style it as well. So we go a bit outside the `igx-drop-down` topic and to complement the overall drop-down theme styling we will create a custom button theme passing it our color palette like: 
```scss
$custom-button-theme: igx-button-theme(
    $palette: $my-color-palette
);

```

#### Applying
All that's left is to properly scope our newly created themes.

##### Globally
In case you want this newly created `igx-drop-down` theme to be applied [`globally`](themes/component-themes.md#creating-themes) in your app (to all of the components of this type, keep in mind we are actually extending igx-drop-down-theme), all that is needed is to include the theme in your app root style file. The same applies for our custom button theme:
```scss
// in root app.scss
// Pass our drop-down theme to the `igx-drop-down` mixin
    @include igx-drop-down($custom-drop-down-theme);
// Pass our button theme to the `igx-button` mixin
    @include igx-button($custom-button-theme);

```
##### Scoped
There may be a case where you want a particular `igx-drop-down` be styled differently than the others in the app. This will require to use angular specific pseudo-class selectors like `:host`, `::ng-deep`, etc.

 >[!NOTE]
 >If the component is using an [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`.

On the other side, in order to prevent our custom theme to leak to other component descendants, be sure to include the `:host` selector before `::ng-deep`:

```scss
:host {
    ::ng-deep {
        @include igx-drop-down($custom-drop-down-theme);
        @include igx-button($custom-button-theme);
    }
}
```

> [!NOTE]
> The [**IgxDropDown**]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) component uses [IgxOverlay](overlay_main.md) to hold and display the `igx-drop-down-items` list container. To properly scope your styles you might have to use an [OverlaySetting.outlet]({environment:angularApiUrl}/interfaces/overlaysettings.html#outlet). For more details check: [`IgxOverlay styling guide`](overlay_styling.md).

#### Demo
<div class="sample-container loading" style="height:350px">
    <iframe id="dropdown-styling-iframe" src='{environment:demosBaseUrl}/data-entries/dropdown-styling' width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

### API まとめ

* [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) 
* [IgxDropDownComponent Styles]({environment:sassApiUrl}/index.html#mixin-igx-drop-down)
* [IgxDropDownItemComponent]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html).
* [IgxOverlay]({environment:angularApiUrl}/interfaces/overlaysettings.html)
* [IgxOverlay Styles]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
