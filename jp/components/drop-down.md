---
title: Angular Drop Down コンポーネント –  Ignite UI For Angular
_description: インタラクティブ機能を追加し、アプリ内の項目のスクロール可能なリストにスタイル設定オプションを表示します。今すぐ Ignite UI for Angular の Drop Down コンポーネントをお試しください。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, Angular UI コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular Drop Down コンポーネント, Angular Drop Down コントロール
_language: ja
---

# Angular Drop Down (ドロップダウン) コンポーネントの概要

<p class="highlight">Ignite UI for Angular Drop Down は事前定義された値の切り替え可能なリストを表示し、ユーザーがクリックするだけで 1 つのオプション項目を簡単に選択できるようにするコンポーネントです。ドロップダウン メニューとして機能するようにすばやく構成することも、データをグループ化することでより有用な視覚情報を提供するために使用することもできます。グループ化を使用すると、フラット データと階層データの両方を使用できます。Drop Down コンポーネントを使用すると、宣言型のバインディングが可能になり、追加のコンテンツやリンクを埋め込むことができます。これにより、UI をさらにカスタマイズして Angular ドロップダウン リストの外観をスタイル設定する余地も残されます。これに加えて、キーボードのドロップダウン ナビゲーションや仮想化などの主要な機能が満載です。</p>

## Angular Drop Down の例

この Angular ドロップダウンの例は、ドロップダウン リストの基本的な機能を示しています。それをクリックしてプリセット オプションを展開し、項目を選択して、ドロップダウンを閉じます。

<code-view style="height:200px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/dropdown-sample-1" alt="Angular Drop Down の例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Drop Down を使用した作業の開始

Ignite UI for Angular Drop Down コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxDropDownModule` をインポートします。

```typescript
// app.module.ts

...
import { IgxDropDownModule } from 'igniteui-angular';
// import { IgxDropDownModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxDropDownModule],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxDropDownComponent` をスタンドアロンの依存関係としてインポートすることも、[`IGX_DROP_DOWN_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/drop-down/public_api.ts) トークンを使用してコンポーネントとそのすべてのサポート コンポーネントおよびディレクティブをインポートすることもできます。

```typescript
// home.component.ts

import { NgFor } from '@angular/common';
import { IGX_DROP_DOWN_DIRECTIVES, IgxToggleActionDirective, IgxButtonDirective } from 'igniteui-angular';
// import { IGX_DROP_DOWN_DIRECTIVES, IgxToggleActionDirective, IgxButtonDirective } from '@infragistics/igniteui-angular'; for licensed package

@Component({
  selector: 'app-home',
  template: `
    <button
      igxButton="contained"
      [igxToggleAction]="dropdown"
      [igxDropDownItemNavigation]="dropdown"
    >
      Options
    </button>
    <igx-drop-down #dropdown>
      <igx-drop-down-item *ngFor="let item of items">
        {{ item.field }}
      </igx-drop-down-item>
    </igx-drop-down>
  `,
  styleUrls: ['home.component.scss'],
  standalone: true,
  imports: [ IGX_DROP_DOWN_DIRECTIVES, IgxToggleActionDirective, IgxButtonDirective, NgFor ],
  /* or imports: [IgxDropDownComponent, IgxDropDownItemComponent, IgxToggleActionDirective, IgxButtonDirective, NgFor] */
})
export class HomeComponent {}
```

Ignite UI for Angular Drop Down モジュールまたはディレクティブをインポートしたので、`igx-drop-down` コンポーネントの使用を開始できます。

## Angular Drop Down の使用

### ドロップダウンの追加

選択可能な複数のオプション項目を提供するシンプルなドロップダウンを作成します。これを実現するには、[IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) と [IgxToggleAction]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html) を使用してドロップダウンを開きます / 閉じます。

```html
<!-- dropdown.component.html -->
<button igxButton="contained" [igxToggleAction]="dropdown" [igxDropDownItemNavigation]="dropdown">
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
@Component({...})
export class MyDropDownComponent {
    public items: Array<{ field: string }> = [
        { field: 'Option 1' },
        { field: 'Option 2' },
        { field: 'Option 3' }
    ];
}
```

## その他の Angular Drop Down の例

デフォルトのデモでは、Angular で切り替え可能な Drop Down リストを使用して、エンドユーザーが事前定義されたすべての項目を展開し、そのうちの 1 つを選択できるようにしています。次の例は、Angular Drop Down リストの動作を示しています。

### 定義済みの選択項目

定義済みの選択項目を作成したいとします。1 つの方法は、ドロップダウン コンポーネントの [opening]({environment:angularApiUrl}/classes/igxdropdowncomponent.html#opening) イベントを処理することです。

```html
<!-- dropdown.component.html -->
<button igxButton="contained" [igxToggleAction]="dropdown" [igxDropDownItemNavigation]="dropdown">
  Options
</button>
<igx-drop-down #dropdown (opening)="dropdown.setSelectedItem(0)">
  <igx-drop-down-item *ngFor="let item of items">
    {{ item.field }}
  </igx-drop-down-item>
</igx-drop-down>
```

```typescript
// dropdown.component.ts
export class MyDropDownComponent {
  public items: Array<{ field: string }> = [
    { field: 'Option 1' },
    { field: 'Option 2' },
    { field: 'Option 3' },
  ];
}
```

<code-view style="height: 200px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/dropdown-sample-2" >
</code-view>

<div class="divider--half"></div>

### 項目のグループ化

より有益な視覚情報を提供するには、[isHeader]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html#isHeader) プロパティを使用して項目をセマンティックにグループ化するか、[disabled]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html#disabled) プロパティを使用して項目を非インタラクティブとして表示します。[selected]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html#selected) プロパティを特定の項目に設定して選択済の項目にできます。`igx-drop-down` 項目は、HTML 要素/他の Web コンポーネントに含める、または設定できる `igxPrefix`、`igxSuffix` および `igx-divider` ディレクティブをサポートしています。

```html
<!-- dropdown.component.html -->
<button igxButton="contained" [igxToggleAction]="dropdown" [igxDropDownItemNavigation]="dropdown">
  Countries
</button>
<igx-drop-down #dropdown [width]="'240px'">
  <div class="drop-down__scroll-container">
    <igx-drop-down-item *ngFor="let item of items" [disabled]="item.disabled" [isHeader]="item.header" [selected]="item.selected">
      <igx-icon igxPrefix>place</igx-icon>
      {{ item.field }}
      <span igxSuffix>{{ item.code }}</span>
      <igx-divider></igx-divider>
    </igx-drop-down-item>
  </div>
</igx-drop-down>
```

```typescript
// dropdown.component.ts
export class MyDropDownComponent {
  public items: any[] = [
    { field: 'European Union', code: 'EU', header: true },
    { field: 'Germany', code: 'DE' },
    { field: 'Bulgaria', code: 'BG', selected: true },
    { field: 'France', code: 'FR', disabled: true },
    { field: 'North America', code: 'NA', header: true },
    { field: 'Canada', code: 'CA' },
    { field: 'United States', code: 'US' },
    { field: 'Mexico', code: 'MX' },
  ];
}
```

サンプルを正しく構成すると European Union ヘッダーの下に国の一覧がグループ形式で表示され、France は非インタラクティブな項目、そして Bulgaria は選択済みの項目として表示されます。

<code-view style="height: 310px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/dropdown-sample-3" >
</code-view>

### 階層データのグループ化

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
            refNo: '00000'
        }, {
            name: 'Lettuce',
            refNo: '00001'
        },
        ...]
    }, {
        name: 'Fruits',
        entries: [{
            name: 'Banana',
            refNo: '10000'
        }, {
            name: 'Tomato',
            refNo: '10001'
        },
        ...]
    }, {
        name: 'Meats',
        entries: [{
            name: 'Chicken',
            refNo: '20000'
        }, {
            name: 'Beef',
            refNo: '20001'
        },
        ...]
    }];
}
```

```html
<igx-drop-down>
  <igx-drop-down-item-group *ngFor="let foodGroup of foods" [label]="foodGroup.name">
    <igx-drop-down-item *ngFor="let food of foodGroup.entries" [value]="food.refNo">
      {{ food.name }}
    </igx-drop-down-item>
  </igx-drop-down-item-group>
</igx-drop-down>
```

更にグループには本体の項目を無効にする機能があります。たとえば、`Meats` 食品グループのドロップダウン選択を無効にする場合です。`Meats` のすべてのエントリを個別に無効にする代わりに、グループおよび内部のすべての子項目を無効にできます。

```html
<igx-drop-down>
  <igx-drop-down-item-group *ngFor="let foodGroup of foods" [label]="foodGroup.name" [disabled]="foodGroup.name === 'Meats'">
    <igx-drop-down-item *ngFor="let food of foodGroup.entries" [value]="food.refNo">
      {{ food.name }}
    </igx-drop-down-item>
  </igx-drop-down-item-group>
</igx-drop-down>
```

以下のサンプルで結果を確認できます。

<code-view style="height: 310px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/dropdown-sample-5" >
</code-view>

### ドロップダウン メニュー

ドロップダウンをメニューとして動作するように構成できます。[selectionChanging]({environment:angularApiUrl}/classes/igxdropdowncomponent.html#selectionChanging) イベント ハンドラーで [ISelectionEventArgs]({environment:angularApiUrl}/interfaces/iselectioneventargs.html) インターフェイスの [cancel]({environment:angularApiUrl}/interfaces/iselectioneventargs.html#cancel) メンバーを true に設定します。この方法では、メニューを開いた際に選択した項目が保持されず、前の選択が無効になります。クリックされた項目は、イベントの [newSelection]({environment:angularApiUrl}/interfaces/iselectioneventargs.html#newSelection) メンバー値で取得できます。

```html
<!-- dropdown.component.html -->
<div>
  <igx-navbar title="Contacts">
    <button
      [igxToggleAction]="menu"
      [igxToggleOutlet]="outlet"
      [overlaySettings]="overlaySettings"
      [igxDropDownItemNavigation]="menu"
      igxIconButton="flat"
    >
      <igx-icon fontSet="material">more_vert</igx-icon>
    </button>
    <igx-drop-down #menu (selectionChanging)="selectionHandler($event)">
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
  public items: Array<{ text: string }> = [
    { text: "Add New Contact" },
    { text: "Edit Contact" },
    { text: "Refresh" },
    { text: "Help" },
  ];
  public text: string;
  public overlaySettings = {
    positionStrategy: new ConnectedPositioningStrategy({
      horizontalDirection: HorizontalAlignment.Left,
      horizontalStartPoint: HorizontalAlignment.Right,
      verticalStartPoint: VerticalAlignment.Bottom,
    }),
    scrollStrategy: new NoOpScrollStrategy(),
  };

  public selectionHandler(eventArgs: ISelectionEventArgs) {
    this.text = eventArgs.newSelection.value;
    eventArgs.cancel = true;
  }
}
```

<code-view style="height: 240px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/dropdown-menu" >
</code-view>

### 複数レベルのドロップダウン メニュー

次のサンプルは、ユーザーが一連のネストされたメニュー上にマウスを移動することによって、コンテンツの階層をすばやく簡単に移動できるようにする複数レベルのドロップダウン メニューを実装する方法を示しています。

複数レベルのドロップダウン メニューの実装には、[`IgxDropDownComponent`]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) と、以下で説明するカスタム ディレクティブとサービスを使用します。

追加のドロップダウンを開くように [`IgxDropDownItem`]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html) を構成するには、ネストされたドロップダウンの [`overlay settings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) を処理し、その `innerDropdown` プロパティを通じてその開閉状態を管理する `multiLevel` ディレクティブを追加します。

```html
<igx-drop-down #dropdown1>
  <igx-drop-down-item [value]="'Web'" multiLevel [innerDropdown]="web">
    Web <igx-icon igxSuffix>chevron_right</igx-icon>
  </igx-drop-down-item>
  ...
</igx-drop-down>

<igx-drop-down #web>
  <igx-drop-down-item [value]="'App Builder'"> App Builder </igx-drop-down-item>
  ...
</igx-drop-down>
```

複数レベルのドロップダウンがメニューとして動作するように構成するには、階層内のすべてのドロップダウンの [selectionChanging]({environment:angularApiUrl}/classes/igxdropdowncomponent.html#selectionChanging) イベントを処理し、デフォルトの動作をキャンセルする必要があります。次に、選択を適切に処理するには、`MultiLevelService` の `handleSelection` メソッドを使用します。また、メニュー項目をクリックしたときにドロップダウンが閉じないようにするには、`MultiLevelService` の `handleClosing` メソッドを使用します。

```ts
@ViewChildren(IgxDropDownComponent, { read: IgxDropDownComponent })
private _dropdowns: QueryList<IgxDropDownComponent>;

@ViewChild('dropdown1', { read: IgxDropDownComponent })
private _multiLevelDropdown: IgxDropDownComponent;

constructor(private _multiLevelService: MultiLevelService) { }

public ngAfterViewInit(): void {
    this._dropdowns.forEach((dropdown) => {
        dropdown.selectionChanging.subscribe((args) => {
            args.cancel = true;
            const value = args.newSelection.value;
            const categories = this._multiLevelService.categories;

            if (categories.includes(value)) {
                this.selection = '';
                return;
            }

            if (this._multiLevelService.isMultiLevel(dropdown)) {
                this._multiLevelService.handleSelection();
            } else {
                dropdown.close();
            }

            this.selection = value;
        });
    });

    this._multiLevelDropdown.closing.subscribe((args) => {
        this._multiLevelService.handleClosing(args);
    });
}
```

上記の構成の結果は、次のサンプルで確認できます。

<code-view style="height:400px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/dropdown-multi-level-menu">
</code-view>

> [!NOTE]
> 最初に開いた Dropdown コンポーネントを表示するには、open メソッドを requestAnimationFrame メソッドのコールバックとして設定することをお勧めします。これにより、DOM ツリーが再描画され、すべての要素が正しく配置されるようになります。

### Navigation ディレクティブ

[igxDropDownItemNavigation]({environment:angularApiUrl}/classes/igxdropdownitemnavigationdirective.html) ディレクティブを使用して、`igxDropDown` コンポーネントのキーボード ナビゲーションを有効にします。ディレクティブがトリガーされたすべてのイベントを処理できるようにするには、アクティブな (フォーカスされる) 要素または親コンテナーに適用する必要があります。デフォルトでは、ドロップダウンまたはその項目はフォーカスを取得しないため、ディレクティブはドロップダウンを制御する `button` または `input` に配置できます。ナビゲーション ディレクティブの値は、[IgxDropDownBaseDirective]({environment:angularApiUrl}/classes/igxdropdownbasedirective.html) クラスのインスタンスまたは子孫であるコンポーネントを対象とする必要があります。

以下のサンプルでは、クリックで `igxDropDown` インスタンスを開閉できます。入力自体に [igxDropDownItemNavigation]({environment:angularApiUrl}/classes/igxdropdownitemnavigationdirective.html) ディレクティブを適用すると、上下矢印キーを使用するキーボード ナビゲーションが有効になります。これは、[allowItemsFocus]({environment:angularApiUrl}/classes/igxdropdowncomponent.html#allowItemsFocus) プロパティを `false` に設定し、入力でフォーカスを維持できるデフォルトのドロップダウン動作に依存します。

```html
<!-- input-dropdown.component.html -->
<igx-input-group #inputGroup [igxToggleAction]="dropDown">
  <input
    type="text"
    igxInput
    [igxDropDownItemNavigation]="dropDown"
    readonly="true"
    placeholder="choose an option"
    [value]="dropDown.selectedItem?.value"
    (keydown.ArrowDown)="openDropDown()"
  />

  <igx-suffix igxIconButton="flat" igxRipple>
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
  @ViewChild('inputGroup', { read: IgxInputGroupComponent })
  public inputGroup: IgxInputGroupComponent;

  public items: Array<{ field: string }> = [
    { field: 'Option 1' },
    { field: 'Option 2' },
    { field: 'Option 3' },
  ];

  public openDropDown() {
    if (this.igxDropDown.collapsed) {
      this.igxDropDown.open({
        modal: false,
        positionStrategy: new ConnectedPositioningStrategy({
          target: this.inputGroup.element.nativeElement,
        }),
      });
    }
  }
}
```

<code-view style="height:220px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/dropdown-sample-4" >
</code-view>

<div class="divider--half"></div>

ディレクティブを適用すると、キーボード ナビゲーションの結果として以下の動作が実行します。

|     名前     |                            説明                            |
| :----------- | :--------------------------------------------------------- |
| `Enter`      | ドロップダウンから項目の選択後、ドロップダウンを閉じます。 |
| `Space`      | ドロップダウンから項目の選択後、ドロップダウンを閉じます。 |
| `Esc`        | ドロップダウンを閉じます。                                 |
| `Arrow Down` | ターゲット コンポーネントの次の項目に移動します。          |
| `Arrow Up`   | ターゲット コンポーネントの前の項目に移動します。          |
| `End`        | ターゲット コンポーネントの最後の項目に移動します。        |
| `Home`       | ターゲット コンポーネントの最初の項目に移動します。        |

`allowItemsFocus` プロパティが有効な場合、ドロップダウン項目がタブ インデックスを取得し、アクティブな時にフォーカスされます。フォーカスされたドロップダウン項目がキーボード ナビゲーション時にイベントをトリガーするため、ナビゲーション ディレクティブを各ドロップダウン項目に適用する必要があります。

```html
<igx-input-group [igxToggleAction]="dropDown">
  <input igxInput type="text" />
</igx-input-group>
<igx-drop-down #dropDown [allowItemsFocus]="true">
  <igx-drop-down-item *ngFor="let p of provinceData" [igxDropDownItemNavigation]="dropDown">
    {{ p }}
  </igx-drop-down-item>
</igx-drop-down>
```

## スタイル設定

[Ignite UI for Angular テーマ](themes/index.md) を使用して、ドロップダウンの外観を変更できます。はじめに、テーマ エンジンによって公開されている関数を使用するために、スタイル ファイルに `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最もシンプルな方法として、[`drop-down-theme`]({environment:sassApiUrl}/themes#function-drop-down-theme) を拡張し、既定のテーマ パラメーターの一部を指定することで、新しいテーマを作成します。背景色を指定するだけで、インタラクション状態の色や適切な前景色が自動的に計算されます。`$background` プロパティを設定すると、完全にスタイル設定されたドロップダウンが表示されます。

```scss
$custom-drop-down-theme: drop-down-theme(
  $header-text-color: #345779,
  $item-text-color: #2dabe8,
  $hover-item-text-color: #345779,
  $selected-item-background: #345779,
);
```

最後に、カスタム ドロップダウン テーマをクラスまたは要素セレクターに渡します。

```scss
.drop-down__scroll-container {
  @include css-vars($custom-drop-down-theme);
}
```

### デモ

<code-view style="height:350px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/dropdown-styling" >
</code-view>

<div class="divider--half"></div>

## API リファレンス
* [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) 
* [IgxDropDownComponent スタイル]({environment:sassApiUrl}/themes#function-drop-down-theme)
* [IgxDropDownItemComponent]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html)
* [IgxOverlay]({environment:angularApiUrl}/interfaces/overlaysettings.html)
* [IgxOverlay スタイル]({environment:sassApiUrl}/themes#function-overlay-theme)
* [IgxDividerDirective]({environment:angularApiUrl}/classes/igxdividerdirective.html)
* [IgxDividerDirective スタイル]({environment:sassApiUrl}/themes#function-divider-theme)

## テーマの依存関係
* [IgxOverlay テーマ]({environment:sassApiUrl}/themes#function-overlay-theme)

## その他のリソース

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
