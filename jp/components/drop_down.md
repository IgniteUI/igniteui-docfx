---
title: Drop Down コンポーネント
_description: Ignite UI for Angular Drop Down は、単一項目の選択が可能なグループ項目をスクロール付きのリストで表示します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Drop Down コンポーネント, Angular Drop Down コントロール
_language: ja
---

## Drop Down
<p class="highlight">Ignite UI for Angular Drop Down は、視覚的にグループ化するスクロール可能な項目のリストを表示します。項目をクリックまたはタップして選択するとドロップダウンが閉じられます。</p>
<div class="divider"></div>

### Drop Down デモ
<div class="sample-container loading" style="height:200px">
    <iframe id="dropdown-sample-1-iframe" src='{environment:demosBaseUrl}/data-entries/dropdown-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="dropdown-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法

#### はじめに

Drop Down コンポーネントを使用するには、まず `IgxDropDownModule` を **app.module.ts** ファイルにインポートします。

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

#### ドロップダウンの追加

選択可能な複数のオプション項目を提供するシンプルなドロップダウンを作成します。これを実現するには、[IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) と [IgxToggleAction]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html) を使用してドロップダウンを開きます / 閉じます。


```html
<!-- dropdown.component.html -->
<button igxButton="raised" 
        [igxToggleAction]="dropdown"
        [igxDropDownItemNavigation]="dropdown">
        Options
</button>
<igx-drop-down #dropdown>
    <igx-drop-down-item *ngFor="let item of items">
        {{ item.field }}
    </igx-drop-down-item>
</igx-drop-down>
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

### 例

#### 定義済みの選択項目
定義済みの選択項目を作成したいとします。1 つの方法は、ドロップダウン コンポーネントの [onOpening]({environment:angularApiUrl}/classes/igxdropdowncomponent.html#onopening) イベントを処理することです。

```html
<!-- dropdown.component.html -->
<button igxButton="raised" 
        [igxToggleAction]="dropdown" 
        [igxDropDownItemNavigation]="dropdown">
        Options
</button>
<igx-drop-down #dropdown (onOpening)="dropdown.setSelectedItem(0)">
    <igx-drop-down-item *ngFor="let item of items">
        {{ item.field }}
    </igx-drop-down-item>
</igx-drop-down>
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
    <iframe id="dropdown-sample-2-iframe" data-src='{environment:demosBaseUrl}/data-entries/dropdown-sample-2' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">                StackBlitz で表示
    </button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="dropdown-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">                codesandbox で表示
    </button>
</div>

<div class="divider--half"></div>

#### 項目のグループ化

より有益な視覚情報を提供するには、[isHeader]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html#isheader) プロパティを使用して項目をセマンティックにグループ化するか、[disabled]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html#disabled) プロパティを使用して項目を非インタラクティブとして表示します。[selected]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html#selected) プロパティを特定の項目に設定して選択済の項目にできます。

```html
<!-- dropdown.component.html -->
<button igxButton="raised" 
        [igxToggleAction]="dropdown"
        [igxDropDownItemNavigation]="dropdown">
        Countries
</button>
<igx-drop-down #dropdown [width]="'144px'">
    <div class="drop-down__scroll-container">
        <igx-drop-down-item *ngFor="let item of items" 
                            [disabled]="item.disabled"
                            [isHeader]="item.header"
                            [selected]="item.selected">
            {{ item.field }}
        </igx-drop-down-item>
    </div>
</igx-drop-down>
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

<div class="sample-container loading" style="height: 310px">
    <iframe id="dropdown-sample-3-iframe" data-src='{environment:demosBaseUrl}/data-entries/dropdown-sample-3' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">                StackBlitz で表示
    </button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="dropdown-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">                codesandbox で表示
    </button>
</div>

#### 階層データのグループ化

`igx-drop-down` 項目は [`igx-drop-down-item-group`]({environment:angularApiUrl}/classes/igxdropdowngroupcomponent.html) コンテナーによりグループ化して、ユーザーが個別のカテゴリを区別しやすくなります。`igx-drop-down-item-group` は、`igx-drop-down-item` 要素をコンテンツとして受け取り、グループ形式で描画します。

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

更にグループには本体の項目を無効にする機能があります。たとえば、`Meats` 食品グループのドロップダウン選択を無効にする場合です。`Meats` のすべてのエントリを個別に無効にする代わりに、グループおよび内部のすべての子項目を無効にできます。

```html
<igx-drop-down>
    <igx-drop-down-item-group *ngFor="let foodGroup of foods" [label]="foodGroup.name" [disabled]="foodGroup.name === 'Meats'">
        <igx-drop-down-item *ngFor="let food of foodGroup.entries" [value]='food.refNo'>
            {{ food.name }}
        </igx-drop-down-item>
    </igx-drop-down-item-group>
</igx-drop-down>
``` 

以下のサンプルで結果を確認できます。
<div class="sample-container loading" style="height: 310px">
    <iframe id="dropdown-sample-5-iframe" data-src='{environment:demosBaseUrl}/data-entries/dropdown-sample-5' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">                StackBlitz で表示
    </button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="dropdown-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">                codesandbox で表示
    </button>
</div>

#### ドロップダウン メニュー
ドロップダウンをメニューとして動作するように構成できます。[onSelection]({environment:angularApiUrl}/classes/igxdropdowncomponent.html#onselection) イベント ハンドラーで [ISelectionEventArgs]({environment:angularApiUrl}/interfaces/iselectioneventargs.html) インターフェイスの [cancel]({environment:angularApiUrl}/interfaces/iselectioneventargs.html#cancel) メンバーを true に設定します。この方法では、メニューを開いた際に選択した項目が保持されず、前の選択が無効になります。クリックされた項目は、イベントの [newSelection]({environment:angularApiUrl}/interfaces/iselectioneventargs.html#newselection) メンバー値で取得できます。

```html
<!-- dropdown.component.html -->
<div>
    <igx-navbar title="Contacts">
        <button [igxToggleAction]="menu"
                [igxToggleOutlet]="outlet"
                [overlaySettings]="overlaySettings"
                [igxDropDownItemNavigation]="menu"
                igxButton="icon">
            <igx-icon fontSet="material">more_vert</igx-icon>
        </button>
        <igx-drop-down #menu (onSelection)="onSelection($event)">
            <igx-drop-down-item *ngFor="let item of items" [value]="item.text">
                <div>{{ item.text }}</div>
            </igx-drop-down-item>
        </igx-drop-down>
    </igx-navbar>

    <div>
        <ng-container *ngIf="text">
            <label igxLabel>{{ text }}</label>
        </ng-container>
    </div>

    <div igxOverlayOutlet #outlet="overlay-outlet"></div>
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

<div class="sample-container loading" style="height: 240px">
    <iframe id="dropdown-menu-iframe" data-src='{environment:demosBaseUrl}/data-entries/dropdown-menu' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-menu-iframe" data-demos-base-url="{environment:demosBaseUrl}">                StackBlitz で表示
    </button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="dropdown-menu-iframe" data-demos-base-url="{environment:demosBaseUrl}">                codesandbox で表示
    </button>
</div>

#### Navigation ディレクティブ
[igxDropDownItemNavigation]({environment:angularApiUrl}/classes/igxdropdownitemnavigationdirective.html) ディレクティブを使用して、`igxDropDown` コンポーネントのキーボード ナビゲーションを有効にします。ディレクティブがトリガーされたすべてのイベントを処理できるようにするには、アクティブな (フォーカスされる) 要素または親コンテナーに適用する必要があります。デフォルトでは、ドロップダウンまたはその項目はフォーカスを取得しないため、ディレクティブはドロップダウンを制御する `button` または `input` に配置できます。ナビゲーション ディレクティブの値は、[IgxDropDownBaseDirective]({environment:angularApiUrl}/classes/igxdropdownbasedirective.html) クラスのインスタンスまたは子孫であるコンポーネントを対象とする必要があります。

以下のサンプルでは、クリックで `igxDropDown` インスタンスを開閉できます。入力自体に [igxDropDownItemNavigation]({environment:angularApiUrl}/classes/igxdropdownitemnavigationdirective.html) ディレクティブを適用すると、上下矢印キーを使用するキーボード ナビゲーションが有効になります。これは、[allowItemsFocus]({environment:angularApiUrl}/classes/igxdropdowncomponent.html#allowitemsfocus) プロパティを `false` に設定し、入力でフォーカスを維持できるデフォルトのドロップダウン動作に依存します。


```html
<!-- input-dropdown.component.html -->
<igx-input-group #inputGroup [igxToggleAction]="dropDown">
    <input type="text" igxInput [igxDropDownItemNavigation]="dropDown"
        readonly= "true"
        placeholder="choose an option"
        [value]="dropDown.selectedItem?.value"
        (keydown.ArrowDown)="openDropDown()"/>

    <igx-suffix igxButton="icon" igxRipple>
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
    <iframe id="dropdown-sample-4-iframe" data-src='{environment:demosBaseUrl}/data-entries/dropdown-sample-4' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="dropdown-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
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

`allowItemsFocus` プロパティが有効な場合、ドロップダウン項目がタブ インデックスを取得し、アクティブな時にフォーカスされます。フォーカスされたドロップダウン項目がキーボード ナビゲーション時にイベントをトリガーするため、ナビゲーション ディレクティブを各ドロップダウン項目に適用する必要があります。

```html
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
[Ignite UI for Angular テーマ](themes/index.md) を使用して、ドロップダウンの外観を変更できます。はじめに、テーマ エンジンによって公開されている関数を使用するために、スタイル ファイルに `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

最も簡単な方法は、[`igx-drop-down-theme`]({environment:sassApiUrl}/index.html#function-igx-drop-down-theme) を拡張する新しいテーマを作成し、デフォルト テーマのいくつかのパラメーターを受け取る方法です。

```scss
$custom-drop-down-theme: igx-drop-down-theme(
    $background-color: #fdfdfd,
    $header-text-color: #345779,
    $item-text-color: #2dabe8,
    $selected-item-background: #345779,
    $selected-item-text-color: #fdfdfd,
    $selected-hover-item-background: #345779,
    $selected-hover-item-text-color: #fdfdfd,
    $selected-focus-item-background: #345779,
    $selected-focus-item-text-color: #fdfdfd,
    $hover-item-background: rgba(0, 0, 0, 0.12),
    $hover-item-text-color: #345779,
);
```

#### CSS 変数の使用

最後にカスタム ドロップダウン テーマを設定します。

```scss
 @include igx-css-vars($custom-drop-down-theme);
```

#### テーマ オーバーライドの使用

Internet Explorer 11 などの古いブラウザーのコンポーネントをスタイル設定するには、CSS 変数をサポートしていないため、別のアプローチを用いる必要があります。

コンポーネントが [`Emulated`](themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。カスタム テーマが他のコンポーネントに影響しないようにするには、`::ng-deep` の前に `:host` セレクターを含めるようにしてください。

 ```scss
:host {
  ::ng-deep {
    @include igx-drop-down($custom-drop-down-theme);
  }
}
```

> [!NOTE]
> [IgxDropDown]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) コンポーネントは、[IgxOverlay](overlay_main.md) を使用して、`igx-drop-down-items` リスト コンテナを保持および表示します。スタイルを適切にスコープするには、[OverlaySetting.outlet]({environment:angularApiUrl}/interfaces/overlaysettings.html#outlet) を使用してください。詳細については、[IgxOverlay スタイリング ガイド](overlay_styling.md)を確認してください。

#### デモ
<div class="sample-container loading" style="height:350px">
    <iframe id="dropdown-styling-iframe" src='{environment:demosBaseUrl}/data-entries/dropdown-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="dropdown-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
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
