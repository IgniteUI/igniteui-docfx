---
title: カスケーディング
_description: igx-combo と igx-drop-down は、簡単にカスケーディングを作成できるイベント、プロパティ、メソッドを公開します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Combo コンポーネント, Angular Combo コントロール、Angular カスケーディング Combo, Angular Drop Down, Angular カスケーディング
_language: ja
---

## カスケーディング
<p class="highlight">
 igx-combo と igx-drop-down は、簡単にカスケーディングを作成できるイベント、プロパティ、メソッドを公開します。
</p>
<div class="divider"></div>

### デモ

以下のサンプルは、2 つの igx-drop-down と igx-combo コンポーネントを使用しています。

<div class="sample-container loading" style="height: 540px;">
    <iframe id="cascading-combos-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/cascading-combos" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="cascading-combos-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### 使用方法
To get started import the **IgxComboModule**, **IgxDropDownModule**, **IgxIconModule**, **IgxInputGroupModule** in the **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxComboModule, IgxDropDownModule, IgxIconModule, IgxInputGroupModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxComboModule, IgxDropDownModule, IgxIconModule, IgxInputGroupModule],
    ...
})
export class AppModule {}
```

以下のサンプルは、igx-combo と 2 つの igx-drop-down コンポーネント、それらに対応する入力要素を使用しています。両コンポーネントの API は、選択された項目を取得してドロップダウンまたはコンボのいずれかにデータソースを読み込み、選択をクリアまたはデータソースをリセットします。

```html

<div class="combo-container">
    <igx-input-group type="box" #inputGroupCountry style="width: 300px;" (click)="toggleDDCountry()">
        <input igxInput #inputCountry name="inputCountry" type="text" [(ngModel)]="country" readonly placeholder="Choose Country..."/>
        <igx-suffix><igx-icon [name]="arrowCountry"></igx-icon></igx-suffix>
    </igx-input-group>
    <igx-drop-down #dropdownCountry igxDropDownItemNavigation width="300px"
        (onSelection)="selectCountry($event)" (onClosed)="onCountryClosed()">
        <igx-drop-down-item *ngFor="let c of countryData">
            {{ c }}
        </igx-drop-down-item>
    </igx-drop-down>
</div>

<div class="combo-container">
    <igx-input-group type="box" #inputGroupProvince style="width: 300px;" (click)="toggleDDProvince()" [disabled]="disabledProvince">
        <input igxInput #inputProvince name="inputProvince" type="text" [(ngModel)]="province" readonly placeholder="Choose Province..."/>
        <igx-suffix><igx-icon [name]="arrowProvince"></igx-icon></igx-suffix>
    </igx-input-group>
    <igx-drop-down #dropdownProvince igxDropDownItemNavigation width="300px"
        (onSelection)="selectProvince($event)" (onClosed)="onProvinceClosed()">
        <igx-drop-down-item *ngFor="let p of provinceData">
            {{ p }}
        </igx-drop-down-item>
    </igx-drop-down>
</div>

<div class="combo-container">
    <igx-combo #comboTown width="300px" [itemsMaxHeight]="225"
        [data]="townData" [disabled]="true"
        placeholder="Choose Town..." searchPlaceholder="Search..."
        [allowCustomValues]="false">
    </igx-combo>
</div>

```

```typescript
export class CascadingCombos {

    @ViewChild("inputGroupCountry", { read: IgxInputGroupComponent}) public inputGroupCountry: IgxInputGroupComponent;
    @ViewChild("inputGroupProvince", { read: IgxInputGroupComponent}) public inputGroupProvince: IgxInputGroupComponent;
    @ViewChild("inputCountry") public inputCountry: HTMLInputElement;
    @ViewChild("inputProvince") public inputProvince: HTMLInputElement;
    @ViewChild("dropdownCountry", { read: IgxDropDownComponent}) public dropdownCountry: IgxDropDownComponent;
    @ViewChild("dropdownProvince", { read: IgxDropDownComponent}) public dropdownProvince: IgxDropDownComponent;
    @ViewChild("comboTown", { read: IgxComboComponent }) public comboTown: IgxComboComponent;
    public arrowCountry = "arrow_drop_down";
    public arrowProvince = "arrow_drop_down";
    public disabledProvince = true;

    public countryData: any[] = [];
    public provinceData: any[] = [];
    public townData: any[] = [];
    public country: string;
    public province: string;
    public town: string;
    private _overlaySettings: OverlaySettings = {
        closeOnOutsideClick: true,
        modal: false,
        positionStrategy: new ConnectedPositioningStrategy(),
        scrollStrategy: new NoOpScrollStrategy()
    };

    constructor() {
        this.countryData = Object.keys(data);
    }

    public toggleDDCountry() {
        this._overlaySettings.positionStrategy.settings.target = this.inputGroupCountry.element.nativeElement;
        this.dropdownCountry.toggle(this._overlaySettings);
        this.arrowCountry = "arrow_drop_up";
    }

    public toggleDDProvince() {
        this._overlaySettings.positionStrategy.settings.target = this.inputGroupProvince.element.nativeElement;
        this.dropdownProvince.toggle(this._overlaySettings);
        this.arrowProvince = "arrow_drop_up";
    }

    public selectCountry(args) {
        this.disabledProvince = false;
        this.country = Object.keys(data)[args.newSelection.index];
        this.provinceData = Object.keys(data[this.country]);
        this.province = "";
        this.comboTown.deselectAllItems();
    }

    public selectProvince(args) {
        this.arrowProvince = "arrow_drop_down";
        this.comboTown.disabled = false;
        this.province = this.provinceData[args.newSelection.index];
        this.townData = data[this.country][this.province];
        this.comboTown.deselectAllItems();
    }

    public onCountryClosed() {
        this.arrowCountry = "arrow_drop_down";
    }

    public onProvinceClosed() {
        this.arrowProvince = "arrow_drop_down";
    }
}
```
> 注: igx-overly 配置機能は、入力の下にドロップダウンを表示して単一選択コンボをエミュレートするために使用します。

## その他のリソース
<div class="divider--half"></div>

* Combo 機能
* [コンボ リモート バインディング](combo_remote.md)
* [コンボ テンプレート](combo_templates.md)
* [テンプレート駆動フォームの統合](input_group.md)
* [リアクティブ フォームの統合](input_group_reactive_forms.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
