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
Ignite UI for Angular Drop Down コンポーネントを初期化する前に [IgxDropDownModule]({environment:angularApiUrl}/classes/igxdropdownmodule.html) を **app.module.ts** ファイルにインポートします。

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

選択済みの項目をあらかじめ定義する場合、[IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) の **igx-drop-down** [onOpening]({environment:angularApiUrl}/classes/igxdropdowncomponent.html#onopening) イベントを処理します。

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

[isHeader]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html#isheader) を使用して意味的なグループ化や [disabled]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html#disabled) を使用して非インタラクティブな項目を表示するなど、有用なビジュアル情報を提供できます。You can also set [isSelected]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html#isselected) to a particular item to make it the selected item.

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

### igxDropDownItemNavigation ディレクティブ

`igxDropDown` コンポーネントのキーボード ナビゲーションを有効にするには、[igxDropDownItemNavigation]({environment:angularApiUrl}/classes/igxdropdownitemnavigationdirective.html) ディレクティブを適用します。ディレクティブをアクティブ (フォーカスした) 要素または親コンテナに適用することにより、トリガーしたすべてのイベントを処理できるようになります。デフォルトでは、igxDropDown またはその項目にフォーカスが当たらないため、たとえばディレクティブをドロップダウンを制御するボタンや入力に配置できます。
[igxDropDownItemNavigation]({environment:angularApiUrl}/classes/igxdropdownitemnavigationdirective.html) ディレクティブ値は、ターゲット コンポーネントまたは拡張 [IgxDropDownBase]({environment:angularApiUrl}/classes/igxdropdownbase.html) クラスにする必要があります。


以下のサンプルは、クリックによって igxDropDown インスタンスを開いたり閉じたりする例です。入力に [igxDropDownItemNavigation]({environment:angularApiUrl}/classes/igxdropdownitemnavigationdirective.html) を適用し、上矢印と下矢印の使用時にキーボード ナビゲーションを有効にします。[allowItemsFocus]({environment:angularApiUrl}/classes/igxcombodropdowncomponent.html#allowitemsfocus) が無効のデフォルトのドロップダウン動作に依存し、ボタン入力にフォーカスを維持することが可能です。


```
<igx-input-group [igxToggleAction]="dropdownProvince">
    <input igxInput type="text" [igxDropDownItemNavigation]="dropdownProvince">
</igx-input-group>
<igx-drop-down #dropdownProvince>
    <igx-drop-down-item *ngFor="let p of provinceData">
        {{ p }}
    </igx-drop-down-item>
</igx-drop-down>
```

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



[allowItemsFocus]({environment:angularApiUrl}/classes/igxcombodropdowncomponent.html#allowitemsfocus) が有効な場合、ドロップダウン項目がタブ インデックスを取得し、アクティブな時にフォーカスされます。フォーカスされたドロップダウン項目がキーボード ナビゲーション時にイベントをトリガーするため、 [igxDropDownItemNavigation]({environment:angularApiUrl}/classes/igxdropdownitemnavigationdirective.html) を各ドロップダウン項目に適用する必要があります。

```
<igx-input-group [igxToggleAction]="dropdownProvince">
    <input igxInput type="text">
</igx-input-group>
<igx-drop-down #dropdownProvince [allowItemsFocus]="true">
    <igx-drop-down-item *ngFor="let p of provinceData" [igxDropDownItemNavigation]="dropdownProvince">
        {{ p }}
    </igx-drop-down-item>
</igx-drop-down>
```

<div class="divider--half"></div>

### API まとめ

**igx-drop-down** component [**API Reference**]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) and
[**Themes Reference**]({environment:sassApiUrl}/index.html#mixin-igx-drop-down).

**igx-drop-down-item** component [**API Reference**]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html).
###その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
