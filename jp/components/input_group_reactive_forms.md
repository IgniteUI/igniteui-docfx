---
title: Reactive フォームの統合
_description: Ignite UI for Angular コントロールは簡単にリアクティブ フォームに統合できます。 
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Combo コンポーネント,  Angular リアクティブ フォーム, Angular フォーム
_language: ja
---

## リアクティブ フォームの統合
<p class="highlight">
Ignite UI for Angular コントロールは簡単にリアクティブ フォームに統合できます。
</p>
<div class="divider"></div>

### デモ
以下のデモは、[`igx-input-group`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html), [`igx-select`]({environment:angularApiUrl}/classes/igxselectcomponent.html) と [`igx-combo`]({environment:angularApiUrl}/classes/igxcombocomponent.html) コントロールをリアクティブ フォームの一部に使用しています。

<div class="sample-container loading" style="height: 800px;">
    <iframe id="reactive-forms-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/data-entries/reactive-forms" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="reactive-forms-sample" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法

リアクティブ フォームの使用方法、必要なモジュールについては、Angular [チュートリアル](https://angular.io/guide/reactive-forms) をご覧ください。

リアクティブ フォームを使用する前に Ignite UI コンポーネントのすべてのモジュールと **ReactiveFormsModule** をインポートします。

```typescript
// app.module.ts

...
import { IgxIconModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxDatePickerModule, IgxTimePickerModule, IgxComboModule, IgxSelectModule } from "igniteui-angular";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    ...
    imports: [..., IgxIconModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxDatePickerModule, IgxTimePickerModule, IgxComboModule, IgxSelectModule, ReactiveFormsModule],
    ...
})
export class AppModule {}
```


リアクティブ フォームに HTML `form` の `formGroup` を使用してモデルを設定し、各モデルのプロパティに対応する `formControlName` を各入力フィールドに設定します。

```html
<form class="input-group-form" [formGroup]="user" (ngSubmit)="onSubmit()">
    <h4 class="sample-title">Book your movie ticket</h4>
    <igx-select #select name="movies" formControlName="movie">
        <igx-select-item-group *ngFor="let genre of genres" [label]="genre.type">
            <igx-select-item *ngFor="let movie of genre.movies" [value]="movie">
                {{ movie }}
            </igx-select-item>
        </igx-select-item-group>
        <label igxLabel for="movies">Movie</label>
        <ng-template igxSelectToggleIcon><igx-icon fontSet="material">local_movies</igx-icon></ng-template>
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

Movie, その場合、姓名、メールアドレス、ジャンル フォームのフィールドが必要となり、値がない場合は送信されません。

## その他のリソース
<div class="divider--half"></div>

* [Combo](combo.md)
* [Select](select.md)
* [テンプレート駆動フォームの統合](input_group.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
