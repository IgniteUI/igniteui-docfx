---
title: Drop Down コンポーネント
_description: Ignite UI for Angular Drop Down は、単一項目の選択が可能なグループ項目をスクロール付きのリストで表示します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Drop Down コンポーネント, Angular Drop Down コントロール
_language: ja
---

##Drop Down
<p class="highlight">Ignite UI for Angular Drop Down は、単一項目の選択が可能なグループ項目をスクロール付きのリストで表示します。項目をクリックまたはタップして選択するとドロップダウンが閉じます。</p>
<div class="divider"></div>

### Drop Down デモ
<div class="sample-container" style="height:240px">
    <iframe id="dropdown-sample-3-iframe" src='{environment:demosBaseUrl}/dropdown-sample-3' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="dropdown-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
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

次にすべての必要なモジュールを含み、**app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import {
    IgxDropDownModule,
    IgxToggleModule
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxDropDownModule, IgxToggleModule],
})
export class AppModule {}
```　
構成の後、すべてのオプションを  [**IgxDropDownComponent**](drop_down.md) コンポーネントに表示します。ドロップダウンは、ドロップダウン項目として複数のオプションを含みます。

```html
<!-- dropdown.component.html -->

<div class="sample-wrapper drop-down-wrapper">
    <button igxButton="raised" (click)="toggleDropDown($event)">Options</button>
    <igx-drop-down>
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
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="dropdown-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">                StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

選択済みの項目をあらかじめ定義する場合、[**IgxDropDownComponent**](drop_down.md) **igx-drop-down** の `onOpening` イベントを処理します。

```html
<!-- dropdown.component.html -->

<div class="sample-wrapper drop-down-wrapper">
    <button igxButton="raised" (click)="toggleDropDown($event)">Options</button>
    <igx-drop-down (onOpening)="onOpening($event)">
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
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="dropdown-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">                StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

`isHeader` を使用して意味的なグループ化や `disabled` を使用して非インタラクティブな項目を表示するなど、有用なビジュアル情報を提供できます。

```html
<!-- dropdown.component.html -->

<div class="sample-wrapper drop-down-wrapper">
    <button igxButton="raised" (click)="toggleDropDown($event)">Countries</button>
    <igx-drop-down>
        <igx-drop-down-item *ngFor="let item of items" disabled={{item.disabled}} isHeader={{item.header}}>
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
        { field: "Bulgaria" },
        { field: "UK", disabled: true }];

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

サンプルが正しく構成されると EU ヘッダーの下に国の一覧がグループ形式で表示され、UK は非インタラクティブな項目として表示されます。

<div class="sample-container" style="height: 280px">
    <iframe id="dropdown-sample-3-iframe" src='{environment:demosBaseUrl}/dropdown-sample-3' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="dropdown-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">                StackBlitz で開く
    </button>
</div>

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

以下の表は、便利な **igx-drop-down-item** コンポーネントの入力、出力、およびメソッドを示します。

#### 入力
以下の入力は **igx-drop-down-item** コンポーネントで利用できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `isHeader` | ブール値| 項目がグループ ヘッダーかどうかを定義します。 |
| `disabled` | boolean| Gets if given item is disabled. |
| `isFocused` | ブール値| 指定した項目がフォーカスされるかどうかを定義します。|

#### ゲッター
以下のゲッターは **igx-drop-down-item** コンポーネントで利用できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `isSelected` | `boolean` | 指定した項目が選択されるかどうかを定義します。 |

###その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
