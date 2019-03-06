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
<div class="sample-container" style="height:220px">
    <iframe id="dropdown-sample-4-iframe" src='{environment:demosBaseUrl}/data-entries/dropdown-sample-4' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
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

<div class="sample-container" style="height: 200px">
    <iframe id="dropdown-sample-1-iframe" src='{environment:demosBaseUrl}/data-entries/dropdown-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
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

<div class="sample-container" style="height: 200px">
    <iframe id="dropdown-sample-2-iframe" src='{environment:demosBaseUrl}/data-entries/dropdown-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="dropdown-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">                StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

[isHeader]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html#isheader) を使用して意味的なグループ化や [disabled]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html#disabled) を使用して非インタラクティブな項目を表示するなど、有用なビジュアル情報を提供できます。また [isSelected]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html#isselected) は特定の項目に設定して選択項目にできます。

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

<div class="sample-container" style="height: 298px">
    <iframe id="dropdown-sample-3-iframe" src='{environment:demosBaseUrl}/data-entries/dropdown-sample-3' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
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
<div class="sample-container" style="height: 298px">
    <iframe id="dropdown-sample-5-iframe" src='{environment:demosBaseUrl}/data-entries/dropdown-sample-5' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
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

<div class="sample-container" style="height: 280px">
    <iframe id="dropdown-menu-iframe" src='{environment:demosBaseUrl}/data-entries/dropdown-menu' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
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

<div class="sample-container" style="height:220px">
    <iframe id="dropdown-sample-4-iframe" src='{environment:demosBaseUrl}/data-entries/dropdown-sample-4' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
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
