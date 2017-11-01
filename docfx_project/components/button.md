##Button
The __igxButton directive__ is intended to be used on any button, span, div, or anchor element to turn it into a fully functional button.

###Getting Started
Bushwick Schlitz. Est Shoreditch small batch, dolor Schlitz sapiente twee stumptown ex. Duis Carles pickled, cornhole Thundercats McSweeney's minim PBR vegan Tumblr irony.
```html
<span igxButton="flat">Button</span>
```

```typescript
import { Component } from '@angular/core';

export default class AppComponent {
    name = 'test';
}
```
###Types
Bushwick Schlitz. Est Shoreditch small batch, dolor Schlitz sapiente twee flat, raised, fab, icon, navbar. Duis Carles pickled, cornhole Thundercats McSweeney's minim PBR vegan Tumblr irony. Kogi eu Thundercats, sed scenester before they sold out et aesthetic. Elit cred Vice ethical pickled sartorial. Stumptown roof party freegan High Life vero, ea sed minim meggings.


| Type | |
|:----------|:-------------:|
| `flat` | The default button type. Transparent background and primary theme color for text. |
| `raised` | As the name implies, this button type uses subtle box-shadow. Primary theme color for background and white for text color. |
| `gradient` | Same as the raised button type. Additionally you can specify a gradient value for background color. |
| `fab` | Floating action button type. Circular with primary theme color for background and white text. |
| `icon` | This is the simplest of button types. Use it whenever you need to use an icon as button. |
| `navbar` | Same as the icon button type, albeit optimized for use with the igx-navbar component. |

###Changing the color
