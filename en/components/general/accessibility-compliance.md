---
title: Ignite UI for Angular Accessibility Compliance 
_description: Accessibility Compliance with Ignite UI for Angular - Section 508 Compliance, WCAG and ARIA .
_keywords: accessibility compliance, a11y, ignite ui for angular, infragistics
---
<style>
a:hover {
  text-decoration: none;
}


/**
 * Tooltip Styles
 */

/* Add this attribute to the element that needs a tooltip */
[data-tooltip] {
  position: absolute;
  z-index: 200000;
  cursor: pointer;
}

/* Hide the tooltip content by default */
[data-tooltip]:before,
[data-tooltip]:after {
  visibility: hidden;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  pointer-events: none;
}

/* Position tooltip above the element */
[data-tooltip]:before {
  position: absolute;
  bottom: 150%;
  left: 50%;
  margin-bottom: 5px;
  margin-left: -80px;
  padding: 7px;
  width: 180px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  background-color: #000;
  background-color: hsla(0, 0%, 20%, 0.9);
  color: #fff;
  content: attr(data-tooltip);
  text-align: center;
  font-size: 14px;
  line-height: 1.2;
}

/* Triangle hack to make tooltip look like a speech bubble */
[data-tooltip]:after {
  position: absolute;
  bottom: 150%;
  left: 50%;
  margin-left: -5px;
  width: 0;
  border-top: 5px solid #000;
  border-top: 5px solid hsla(0, 0%, 20%, 0.9);
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  content: " ";
  font-size: 0;
  line-height: 0;
}

/* Show tooltip content on hover */
[data-tooltip]:hover:before,
[data-tooltip]:hover:after {
  visibility: visible;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=100);
  opacity: 1;
}
</style>

## Accessibility Compliance
This topic contains the following sections:

#### Section 508 Compliance
[Section 508](http://www.section508.gov/) of the Rehabilitation Act was amended in 1998 by Congress to require all Federal agencies to make their electronic and information technology accessible to people with disabilities. Since then, Section 508 compliance has not only been a requirement in government agencies, but it's also important when providing software solutions and designing Web pages.

Section 1194.22 of the Section 508 law specifically targets Web-based intranet and internet information and systems, and contains a set of 16 rules to follow. In order to enable you to keep your Web applications and Web sites compatible with these rules with minimal effort on your part, Infragistics has taken steps to ensure that the Ignite UI for jQuery™ controls and components are compliant with the relevant accessibility rules.

The matrix below provides a high-level outline of the accessibility support provided by our visual controls (and related components). To learn more about an individual control/component's accessibility compliance, click the name of the control/component.

**TABLE WITH ALL COMPONENTS**

|Component|Section 508 Compliance||||||||||||||||
|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|
||<a data-tooltip="A text equivalent for every non-text element shall be provided (e.g., via 'alt', 'longdesc', or in element content).">(a)</a>|<a data-tooltip="Equivalent alternatives for any multimedia presentation shall be synchronized with the presentation">(b)</a><br/>|<a data-tooltip="Web pages shall be designed so that all information conveyed with color is also available without color, for example from context or markup">(c)</a><br/>|<a data-tooltip="Documents shall be organized so they are readable without requiring an associated style sheet">(d)</a><br/>|<a data-tooltip="Redundant text links shall be provided for each active region of a server-side image map">(e)</a><br/>|<a data-tooltip="Client-side image maps shall be provided instead of server-side image maps except where the regions cannot be defined with an available geometric shape">(f)</a><br/>|<a data-tooltip="Row and column headers shall be identified for data tables">(g)</a><br/>|<a data-tooltip="Markup shall be used to associate data cells and header cells for data tables that have two or more logical levels of row or column headers">(h)</a><br/>|<a data-tooltip="Frames shall be titled with text that facilitates frame identification and navigation">(i)</a><br/>|<a data-tooltip="Pages shall be designed to avoid causing the screen to flicker with a frequency greater than 2 Hz and lower than 55 Hz">(j)</a><br/>|<a data-tooltip="A text-only page, with equivalent information or functionality, shall be provided to make a web site comply with the provisions of this part, when compliance cannot be accomplished in any other way">(k)</a><br/>|<a data-tooltip="When pages utilize scripting languages to display content, or to create interface elements, the information provided by the script shall be identified with functional text that can be read by assistive technology.">(l)</a><br/>|<a data-tooltip="When a web page requires that an applet, plug-in or other application be present on the client system to interpret page content, the page must provide a link to a plug-in or applet that complies with §1194.21 (a)">(m)</a><br/>|<a data-tooltip="When electronic forms are designed to be completed online, the form shall allow people using assistive technology to access the information, field elements, and functionality required for completion and submission of the form, including all directions and cues.">(n)</a><br/>|<a data-tooltip="A method shall be provided that permits users to skip repetitive navigation links.">(o)</a><br/>|<a data-tooltip="When a timed response is required, the user shall be alerted and given sufficient time to indicate more time is required">(p)</a><br/>|
|**Grids**||||||||||✔*|||||||
| - Grid|✔|✔|✔||||✔|✔||✔*||❌||✔||❌|
| - HierarchicalGrid|✔|✔|✔||||✔|✔||✔*||❌||✔||❌|
| - TreeGrid|✔|✔|✔||||✔|✔||✔*||❌||✔||❌|
|**Other**||||||||||✔*|||||||
| - Avatar|✔||✔|✔||||||||✔||✔|||
| - Badge|✔||✔|||||||||✔||✔|||
| - Banner|||✔|✔||||||✔*||❌||✔|||
| - Bottom navigation|||✔|||||||✔*||❌||✔|||
| - Button|||✔|✔||||||✔*||✔||✔|||
| - Button group|||✔|✔||||||✔*||✔||✔|||
| - Calendar|✔||✔|✔||||||✔*||❌||✔|||
| - Card|✔||✔|✔||||||||✔||✔|||
| - Carousel|✔||✔|||||||✔*||❌||✔||❌|
| - checkbox|✔||✔|✔||||||||✔||✔|||
| - Chip|||✔|✔||||||✔*||✔||✔|||
| - Circular progress|✔||✔|||||||✔*||✔||✔|||
| - Combo|✔||✔|||||||✔*|✔|✔||✔|||
| - Date time editor|||✔|✔||||||✔*||❌||✔|||
| - Date picker|||✔|||||||✔*||❌||✔|||
| - Divider|✔||✔|||||||||✔|||||
| - Dialog|✔||✔|✔||||||✔*||✔||✔|||
| - Drop down|✔||✔|✔||||||✔*|✔|✔||✔|||
| - Expansion panel|✔||✔|✔||||||✔*||✔||✔|||
| - Icon|||✔|||||||||❌|||||
| - Input|✔||✔|✔||||||||✔||✔|||
| - input group|✔||✔|✔||||||✔*||✔||✔|||
| - Label|✔||✔|✔||||||||✔||✔|||
| - Linear progress|✔||✔|||||||✔*||✔||✔|||
| - List|✔||✔|✔||||||||✔||✔|||
| - Month picker|||✔|✔||||||✔*||❌||✔|||
| - Navbar|✔||✔|||||||✔*||❌||✔|||
| - Navigation drawer|✔||✔|✔||||||✔*||❌||✔|||
| - Radio group|✔||✔|✔||||||||✔||✔|||
| - Radio|✔||✔|✔||||||||✔||✔|||
| - Select|✔||✔|✔||||||✔*|✔|✔||✔|||
| - Slider|||✔|||||||✔*||❌||✔|||
| - Snackbar|||✔|✔||||||✔*||❌||✔||❌|
| - Switch|✔||✔|✔||||||✔*||✔||✔|||
| - Tabs|✔||✔|✔||||||✔*||✔||✔|||
| - Time picker|||✔|✔||||||✔*||❌||✔|||
| - Toast|||✔|✔||||||✔*||❌||✔||❌|
| - Tooltip|✔||✔|✔||||||✔*||❌||✔|||



**LEGEND**

|Legend|||
|:--|:--|:--|
|✔|The control/component is completely accessible in this particular area.||
|✔*|The control/component is accessible in this particular area after implementing certain configurations| Example: Use `NoopAnimationsModule` utility module to allow disabling of animations|
|❌|The control/component is not entirely accessible unless you perform some sort of action.||
|'white space'|this particular rule does not apply to the control||

**Compliance Information**

- **a** - A text equivalent for every non-text element shall be provided (e.g., via "alt", "longdesc", or in element content).
- **b** - Equivalent alternatives for any multimedia presentation shall be synchronized with the presentation.
- **c** - Web pages shall be designed so that all information conveyed with color is also available without color, for example from context or markup.
- **d** - Documents shall be organized so they are readable without requiring an associated style sheet.
- **e** - Redundant text links shall be provided for each active region of a server-side image map.
- **f** - Client-side image maps shall be provided instead of server-side image maps except where the regions cannot be defined with an available geometric shape.
- **g** - Row and column headers shall be identified for data tables.
- **h** - Markup shall be used to associate data cells and header cells for data tables that have two or more logical levels of row or column headers.
- **i** - Frames shall be titled with text that facilitates frame identification and navigation.
- **j** - Pages shall be designed to avoid causing the screen to flicker with a frequency greater than 2 Hz and lower than 55 Hz.
- **k** - A text-only page, with equivalent information or functionality, shall be provided to make a web site comply with the provisions of this part, when compliance cannot be accomplished in any other way. The content of the text-only page shall be updated whenever the primary page changes.
- **l** - When pages utilize scripting languages to display content, or to create interface elements, the information provided by the script shall be identified with functional text that can be read by assistive technology.
- **m** - When a web page requires that an applet, plug-in or other application be present on the client system to interpret page content, the page must provide a link to a plug-in or applet that complies with §1194.21(a) through l.
- **n** - When electronic forms are designed to be completed on-line, the form shall allow people using assistive technology to access the information, field elements, and functionality required for completion and submission of the form, including all directions and cues.
- **o** - A method shall be provided that permits users to skip repetitive navigation links.
- **p** - When a timed response is required, the user shall be alerted and given sufficient time to indicate more time is required.

#### WAI-ARIA Support
In 2014 the W3C finalized their [WAI-ARIA specification](http://www.w3.org/TR/wai-aria/) which defined how to design Web content and Web applications to be more accessible to users with disabilities.

This section shows the accessibility (ARIA) support of the framework as well as how easily manageable the `directionality` of the components is.

**Enabling right-to-left direction (RTL).**

`Ignite UI for Angular` library is susceptible to `directionality` manipulation only when setting `dir` attribute on either `html` or `body` tags. Also, keep in mind that runtime changes are not detected.

With that being said, let's move to the following example:

##### Step - 1 - Setting the 'dir' attribute on both tags.

```html
<html dir="rtl">
...
  <body dir="ltr">
  </body>
</html>
```

The precedence takes the inner tag which in the above case is the attribute at the `body` tag.

##### Step - 2 - Notifying the [theming engine](../../themes/index.md) for the respective direction.

Setting the `$direciton` parameter of [igx-core]({environment:sassApiUrl}/index.html#mixin-igx-core) mixin does the magic.

```scss 
@include igx-core($direction: rtl);
```

These are all the steps needed to adjust your content.


##### RTL Support 
Most of the components in the framework now have full **right-to-left (RTL)** support via the newly included RTL themes.

For **CSS-based** projects add `node_modules/igniteui-angular/styles/igniteui-angular-rtl.css` to your `angular.json` styles collection.

For **Sass-based** projects pass `$direction` to the `igx-core` mixin in your root stylesheet.

Example:

```scss
// $direction defaults to ltr if it's omitted.
@include igx-core($direction: rtl);
```

Currently the following components have only partial RTL support:

* Grid (igx-grid)
* Tabs (igx-tabs)


