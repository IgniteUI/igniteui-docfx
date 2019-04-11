---
title: Divider Component
_description: Ignite UI for Angular Divider component enables users to separate content both horizontally and vertically.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Divider component, Angular Divider control
---

#Divider
The divider component enables users to separate content both horizontally and vertically

##### Divider Demo
By default the divider is a solid horizontal line
```
<igx-divider></igx-divider>
```
##### Divider Demo (vertically)
By adding the vertical attribute and set it to true you can change the direction from horizontal to vertical
```
<igx-divider [vertical]="true"></igx-divider>
```
##### Divider Demo dashed style
The default style of the divider is a `solid` line but it can also be `dashed` line.
To change the default look simply use the type attribute of the divider and set it to `dashed`.

```
<igx-divider type="dashed"></igx-divider>
```

##### Divider Demo inset functionality
The divider can have offset from both sides.
To add offset set the `middle` attribute of the divider to `true` and add desired `inset` value, the divider will start shrinking from both ends.
**Keep in mind that you have to add unit(px,rem,%...) at the end of the value otherwise, it will not work**

```       
<igx-divider type="dashed" [middle]="true" inset="16px"></igx-divider>
```
