---
title: Angular Color Editor | Color Editor | Infragistics
_description: Color Editor component provides an easily configurable option to change colors for any desirable component or aspect of your application.
_keywords: Angular Color Editor, Ignite UI for Angular, Infragistics
mentionedTypes: ["ColorEditor"]
namespace: Infragistics.Controls
---

# Angular Color Editor Overview <label class="badge badge--preview">PREVIEW</label>

The Ignite UI for Angular Color Editor is a lightweight color picker component. The Color Editor can pop open by clicking the brush icon. Both the rgba and hex values can be obtained from the desired color along the bottom. These values will update when the three sliders are modified. The center box is designed for adjusting the saturation and brightness along with two adjacent sliders for adjusting the rgb and luminance values. Rgb registers between (1-255). The lightness registers between(0-1).

## Angular Color Editor Example

<code-view style="height: 320px" alt="Angular Color Editor Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/inputs/color-editor/overview"
                                                 github-src="inputs/color-editor/overview">
</code-view>


<div class="divider--half"></div>

## Dependencies

<!-- Angular, WebComponents, React -->

First, you need to install the Ignite UI for Angular by running the following command:

```cmd
npm install igniteui-angular-core
npm install igniteui-angular-inputs
```

Before using the `ColorEditor`, you need to register the following modules as follows:

<!-- end:Angular, WebComponents, React -->

## Usage

The simplest way to start using the `ColorEditor` is as follows:

<!-- Angular -->

```html
<igx-color-editor
    name="colorEditor"
    #colorEditor>
    </igx-color-editor>
</div>
```

<!-- end: Angular -->

## Binding to events

The Color Editor component raises the following events:

- valueChanged
- valueChanging

<!-- Angular -->

```ts
@ViewChild("colorEditor", { static: true } )
private colorEditor: IgxColorEditorComponent
public ngAfterViewInit(): void 
{ 
    this.colorEditor.valueChanged.subscribe(this.onValueChanged);
}

public onValueChanged = (e: any) => {
    console.log("test");
}
```

<!-- end: Angular -->

<div class="divider--half"></div>

## API References

- `ColorEditor`

## Additional Resources

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
