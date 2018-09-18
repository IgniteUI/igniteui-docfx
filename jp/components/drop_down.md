---
title: Drop Down コンポーネント
_description: Ignite UI for Angular Drop Down は、単一項目の選択が可能なグループ項目をスクロール付きのリストで表示します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Drop Down コンポーネント, Angular Drop Down コントロール
_language: ja
---

##Drop Down
<p class="highlight">Ignite UI for Angular Drop Down は、単一項目の選択が可能なグループ項目をスクロール付きのリストで表示します。項目をクリックまたはタップして選択するとドロップダウンが閉じられます。</p>
<div class="divider"></div>

### Drop Down デモ
<div class="sample-container" style="height:380px">
    <iframe id="dropdown-sample-3-iframe" src='{environment:demosBaseUrl}/dropdown-sample-3' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> Ignite UI for Angular コンポーネントをプロジェクトに追加する前に、必要なすべての依存関係を構成し、プロジェクトのセットアップが正しく完了したことを確認してください。[**インストール**](https://jp.infragistics.com/products/ignite-ui-angular/getting-started#installation) のトピックで手順を確認できます。

###使用方法
Ignite UI for Angular Drop Down コンポーネントを初期化する前に **IgxDropDownModule** を **app.module.ts** ファイルにインポートします。

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

選択可能な複数のオプション項目を提供するシンプルなドロップダウンを作成します。**igx-drop-down** コンポーネントと **igx-toggle** を使用してドロップダウンの開く/閉じるを有効にします。

構成の後、すべてのオプションを  [**IgxDropDownComponent**](drop_down.md) コンポーネントに表示します。ドロップダウンは、ドロップダウン項目として複数のオプションを含みます。

```html
<!-- dropdown.component.html -->

<div class="sample-wrapper drop-down-wrapper">
    <button igxButton="raised" (click)="toggleDropDown($event)" [igxDropDownItemNavigation]="dropdown1">Options</button>
    <igx-drop-down #dropdown1>
        <igx-drop-down-item *ngFor="let item of items">
            {{ item.field }}
        </igx-drop-down-item>
    </igx-drop-down>
</div>
```

```typescript
// dropdown.component.ts

...
    @ViewChild(IgxDropDownComponent) public igxDropDown: IgxDropDownComponent;

    public items: any[] = [];

    private _positionSettings = {
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalStartPoint: VerticalAlignment.Bottom
    };
    private _overlaySettings = {
      closeOnOutsideClick: true,
      modal: false,
      positionStrategy: new ConnectedPositioningStrategy(this._positionSettings),
      scrollStrategy: new CloseScrollStrategy()
    };

    public ngOnInit() {
        for (let i = 1; i < 4; i ++) {
            const item = { field: "Option " + i };
            this.items.push(item);
        }
    }

    public toggleDropDown(eventArgs) {
        this._overlaySettings.positionStrategy.settings.target = eventArgs.target;
        this.igxDropDown.toggle(this._overlaySettings);
    }

```


サンプルを正しく構成すると、複数のオプションを含むドロップダウンが表示されます。

<div class="sample-container" style="height: 200px">
    <iframe id="dropdown-sample-1-iframe" src='{environment:demosBaseUrl}/dropdown-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="dropdown-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">                StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

選択済みの項目をあらかじめ定義する場合、[**IgxDropDownComponent**](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/drop_down.html) の **igx-drop-down** `onOpening` イベントを処理します。

```html
<!-- dropdown.component.html -->

<div class="sample-wrapper drop-down-wrapper">
    <button igxButton="raised" (click)="toggleDropDown($event)" [igxDropDownItemNavigation]="dropdown2">Options</button>
    <igx-drop-down #dropdown2 (onOpening)="onOpening($event)">
        <igx-drop-down-item *ngFor="let item of items">
            {{ item.field }}
        </igx-drop-down-item>
    </igx-drop-down>
</div>
```

```typescript
// dropdown.component.ts

...
    @ViewChild(IgxDropDownComponent) public igxDropDown: IgxDropDownComponent;

    public items: any[] = [];

    private _positionSettings = {
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalStartPoint: VerticalAlignment.Bottom
    };

    private _overlaySettings = {
      closeOnOutsideClick: true,
      modal: false,
      positionStrategy: new ConnectedPositioningStrategy(this._positionSettings),
      scrollStrategy: new CloseScrollStrategy()
  };

    public ngOnInit() {
        for (let i = 1; i < 4; i ++) {
            const item = { field: "Option " + i };
            this.items.push(item);
        }
    }

    public toggleDropDown(eventArgs) {
        this._overlaySettings.positionStrategy.settings.target = eventArgs.target;
        this.igxDropDown.toggle(this._overlaySettings);
    }

```

<div class="sample-container" style="height: 200px">
    <iframe id="dropdown-sample-2-iframe" src='{environment:demosBaseUrl}/dropdown-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="dropdown-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">                StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

`isHeader` を使用して意味的なグループ化や `disabled` を使用して非インタラクティブな項目を表示するなど、有用なビジュアル情報を提供できます。

```html
<!-- dropdown.component.html -->

<div class="sample-wrapper drop-down-wrapper">
    <button igxButton="raised" (click)="toggleDropDown($event)" [igxDropDownItemNavigation]="dropdown3">Countries</button>
    <igx-drop-down #dropdown3>
        <igx-drop-down-item *ngFor="let item of items" [disabled]="item.disabled" [isHeader]="item.header" [isSelected]="item.selected">
            {{ item.field }}
        </igx-drop-down-item>
    </igx-drop-down>
</div>

```

```typescript
// dropdown.component.ts

...
    @ViewChild(IgxDropDownComponent) public igxDropDown: IgxDropDownComponent;

    public items: any[] = [
        { field: "EU", header: true },
        { field: "Germany" },
         { field: "Bulgaria", selected: true },
        { field: "UK", disabled: true },
        { field: "NA", header: true },
        { field: "Canada" },
        { field: "USA" },
        { field: "Mexico" }];

    private _positionSettings = {
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalStartPoint: VerticalAlignment.Bottom
    };

    private _overlaySettings = {
      closeOnOutsideClick: true,
      modal: false,
      positionStrategy: new ConnectedPositioningStrategy(this._positionSettings),
      scrollStrategy: new CloseScrollStrategy()
  };

    public toggleDropDown(eventArgs) {
        this._overlaySettings.positionStrategy.settings.target = eventArgs.target;
        this.igxDropDown.toggle(this._overlaySettings);
    }

```

サンプルを正しく構成すると EU ヘッダーの下に国の一覧がグループ形式で表示され、UK は非インタラクティブな項目、そして Bulgaria は選択済みの項目として表示されます。

<div class="sample-container" style="height: 380px">
    <iframe id="dropdown-sample-3-iframe" src='{environment:demosBaseUrl}/dropdown-sample-3' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">                StackBlitz で開く
    </button>
</div>

### igxDropDownItemNavigation directive

To enable keyboard navigation for the `igxDropDown` component, the `igxDropDownItemNavigation` directive can be applied. The directive should be applied to the active(focused) or a parent container. This will allow the directive to handle all triggered events. By default the the igxDropDown or its items don't take focus, so for example the directive can be placed on a button or input that controls the drop down.
The `igxDropDownItemNavigation` directive value should be target component that is or extends `IgxDropDownBase` class. This ensures that the target component implements the following methods:

| Name | Description |
| :--- | :--- |
| `close` | Closes target component. |
| `selectItem` | Select the active item in the target component. |
| `navigateNext` | Navigate to the next item in the target component. |
| `navigatePrev` | Navigate to the previous item in the target component. |
| `navigateLast` | Navigate to the last item in the target component. |
| `navigateFirst` | Navigate to the first item in the target component. |



The following sample demonstrates an input that on click opens and closes igxDropDown instance. Applying the `igxDropDownItemNavigation` on the input itself, will enable keyboard navigation, when using arrow up and arrow down. This relies on the default drop down behavior with `allowItemsFocus` disabled to allow the button input to maintain focus.


```
<input igxInput type="text" [igxDropDownItemNavigation]="dropdownProvince" (click)="toggleDDProvince()"/>
<igx-drop-down #dropdownProvince>
    <igx-drop-down-item *ngFor="let p of provinceData">
        {{ p }}
    </igx-drop-down-item>
</igx-drop-down>
```

Applying the directive will ensure the following actions are executed as a result from the keyboard navigation:

| Name | Description |
| :--- | :--- |
| `Enter` | Select item from the drop down and closes the drop down. |
| `Space` | Select item from the drop down and closes the drop down. |
| `Esc` | Closes the drop down. |
| `Arrow Down` | Navigate to the next item in the target component. |
| `Arrow Up` | Navigate to the previous item in the target component. |
| `End` | Navigate to the last item in the target component. |
| `Home` | Navigate to the first item in the target component. |



When `allowItemsFocus` is enabled, drop down items gain tab index and are focused when active. The focused drop down items are the ones that trigger events, during keyboard navigation, which means that the `igxDropDownItemNavigation` should be applied on the individual drop down items, or their parent container element that will handle the bubbled event. For convenience this could be the `igx-drop-down` component.
In addition, if you apply the `igxDropDownItemNavigation` on the drop down itself, defining directive's value is not necessary, because in that case the target is the `igx-drop-down` component and its value is evaluated internally.

```
<input igxInput type="text" (click)="toggleDDProvince()"/>
<igx-drop-down [allowItemsFocus]="true" igxDropDownItemNavigation>
    <igx-drop-down-item *ngFor="let p of provinceData">
        {{ p }}
    </igx-drop-down-item>
</igx-drop-down>
```

<div class="divider--half"></div>

<div class="divider--half"></div>

### API まとめ
以下の表は、便利な **igx-drop-down**  コンポーネントの入力、出力、およびメソッドを示します。

#### 入力
以下の入力は **igx-drop-down** コンポーネントで利用できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `width` | string | コントロールの幅を設定します。 |
| `height` | string | コントロールの高さを設定します。 |
| `allowItemsFocus` | boolean | フォーカスを取得する項目を許可します。 |

<div class="divider--half"></div>

#### 出力
以下の出力は **igx-drop-down** コンポーネントで利用できます。

| 名前 | キャンセル可 | 説明 | パラメーター
| :--- | :--- | :--- | :--- |
| `onSelection` | false | 選択を完了する前にアイテム選択が変更されるときに発生されます。| ISelectionEventArgs |
| `onOpening` | false | ドロップダウンが開かれる前に発生されます。 |
| `onOpened` | false | ドロップダウンが開いているときに発生します。 |
| `onClosed` | false | ドロップダウンが閉じているときに発生します。 |

#### メソッド
以下のメソッドは **igx-drop-down** コンポーネントで利用できます。

| シグネチャ | 説明 |
| :--- | :--- | :--- |
| `toggle()` | ドロップダウンの開く/閉じるを切り替えます。 |
| `setSelectedItem(index: number)` |ドロップダウン項目をインデックスで選択します。 |
| `open()` | ドロップダウンを開きます。|
| `close()` | ドロップダウンを閉じます。 |

#### ゲッター
以下のゲッターは **igx-drop-down** コンポーネントで利用できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `selectedItem` | `number` | 選択項目を取得します。|
| `items` | `IgxDropDownItemComponent[]` | ヘッダー以外のすべての項目を取得します。 |
| `headers` | `IgxDropDownItemComponent[]` | ヘッダー項目を取得します。 |
| `collapsed` | `boolean` | ドロップダウンが閉じたかどうかを取得します。 |

以下の表は、便利な **igx-drop-down-item** コンポーネントの入力を示します。

#### 入力
以下の入力は **igx-drop-down-item** コンポーネントで利用できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `isHeader` | `boolean`| 項目がグループ ヘッダーかどうかを定義します。 |
| `disabled` | `boolean`| 指定した項目が無効かどうかを定義します。 |
| `isFocused` | `boolean`| 指定した項目がフォーカスされるかどうかを定義します。 |
| `isSelected` | `boolean` | 指定した項目が選択されるかどうかを定義します。 |

###その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
