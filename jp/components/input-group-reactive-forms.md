---
title: Reactive フォームの統合
_description: Ignite UI for Angular コントロールは簡単にリアクティブ フォームに統合できます。 
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Combo コンポーネント,  Angular リアクティブ フォーム, Angular フォーム
_language: ja
---

# リアクティブ フォームの統合
<p class="highlight">
Ignite UI for Angular コントロールは、フォーム入力を処理するためのモデル駆動型のアプローチを提供する Reactive フォームで簡単に統合できます。
</p>

## Angular リアクティブ フォームの統合の例
次のサンプルは、リアクティブ フォームで使用される場合の [`igx-input-group`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)、[`igx-select`]({environment:angularApiUrl}/classes/igxselectcomponent.html)、および [`igx-combo`]({environment:angularApiUrl}/classes/igxcombocomponent.html) コントロールを示しています。

<div class="sample-container loading" style="height: 850px;">
    <iframe id="reactive-forms-sample" frameborder="0" seamless="" width="100%" height="100%" src="{environment:demosBaseUrl}/data-entries/reactive-forms" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://jp.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="reactive-forms-sample" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="reactive-forms-sample" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

## 使用方法

### はじめに

リアクティブ フォームを使用する前に、Ignite UI コンポーネントのすべてのモジュールと `ReactiveFormsModule` をインポートします。

```typescript
// app.module.ts

...
import { IgxIconModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxDatePickerModule, IgxTimePickerModule, IgxComboModule, igxSelectModule } from "igniteui-angular";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    ...
    imports: [..., IgxIconModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxDatePickerModule, IgxTimePickerModule, IgxComboModule, igxSelectModule, ReactiveFormsModule],
    ...
})
export class AppModule {}
```

リアクティブ フォームについては、[こちら](https://angular.io/guide/reactive-forms) を参照してください。

### フォームの作成

フォームのモデルを設定するには、`form` 要素の `formGroup` プロパティを使用します。次に、各モデル プロパティに対応する各入力フィールドに `formControlName` を追加します。

```html
<form class="input-group-form" [formGroup]="user" (ngSubmit)="onSubmit()">
    <h4>Book your movie ticket</h4>
    <igx-select #select name="movies" formControlName="movie">
        <igx-select-item-group *ngFor="let genre of genres" [label]="genre.type">
            <igx-select-item *ngFor="let movie of genre.movies" [value]="movie">
                {{ movie }}
            </igx-select-item>
        </igx-select-item-group>
        <label igxLabel for="movies">Movie</label>
        <ng-template igxSelectToggleIcon>
            <igx-icon fontSet="material">local_movies</igx-icon>
        </ng-template>
    </igx-select>
    <igx-input-group>
        <input igxInput name="fullName" type="text" formControlName="fullName"/>
        <label igxLabel for="fullName">Full Name</label>
        <igx-suffix>
            <igx-icon>person</igx-icon>
        </igx-suffix>
    </igx-input-group>
    ...
     <igx-combo #combo1 class="input-container" width="100%" [itemsMaxHeight]="130"
        [data]="genres" [valueKey]="'type'" [displayKey]="'type'"
        type="line" formControlName="genres"
        placeholder="Select your favorite genres" searchPlaceholder="Search...">
    </igx-combo>
    ...
```
フォームの `formGroup` プロパティに設定したオブジェクトはフォーム モデルで `formGroup` タイプである必要があります。Angular のリアクティブ フォームのチュートリアルでは、デモのコンストラクターに `FormBuilder` を定義して異なるフォーム フィールドを定義する必要があります。

```typescript
export class ReactiveFormsSampleComponent {

    public user: FormGroup;
    constructor(fb: FormBuilder) {
        this.user = fb.group({
            date: [""],
            dateTime: [""],
            email: ["", Validators.required],
            fullName: new FormControl("", Validators.required),
            genres: ["", Validators.required],
            movie: ["", Validators.required],
            phone: [""]
        });
    }
}
```

この例では、`movie`、`fullName`、`email`、および `genres`のフィールドが必要となり、値がない場合は送信されません。

## API リファレンス
<div class="divider--half"></div>

* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [IgxComboComponent]({environment:angularApiUrl}/classes/igxcombocomponent.html) 
* [IgxLabelDirective]({environment:angularApiUrl}/classes/igxlabeldirective.html)
* [IgxSelectComponent]({environment:angularApiUrl}/classes/igxselectcomponent.html)  

## その他のリソース
<div class="divider--half"></div>

関連トピック:

* [Combo](combo.md)
* [Select](select.md)
* [Input Group](input-group.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
