# 🖱 Introduction

Clicker.js is an innovative JS/TS framework that makes it easier to develop amazing clicker games :video\_game:.  It adds features on top of classes you already know and creates new classes with features you didn't even know you wanted.&#x20;



### The `Element` Class :electric\_plug: <a href="#element-class" id="element-class"></a>

The element class, arguably the most important one, as it allows DOM interactions, is defined in `Element.ts`. It is not dependent on any other classes or libraries.

It has the following methods and properties.

<table data-full-width="true"><thead><tr><th>Name</th><th data-type="checkbox">Mutable</th><th data-type="checkbox">Is Function</th><th data-type="number">Version Introduced</th><th>Return Type</th><th>Input type(s)</th><th>HTML DOM</th></tr></thead><tbody><tr><td>element</td><td>true</td><td>false</td><td>1</td><td>HTMLElement</td><td>HTMLElement</td><td>this</td></tr><tr><td>text</td><td>true</td><td>false</td><td>1</td><td>string</td><td>string</td><td>.textContent</td></tr><tr><td>html</td><td>true</td><td>false</td><td>1</td><td>string</td><td>string</td><td>.outerHTML</td></tr><tr><td>value</td><td>true</td><td>false</td><td>1</td><td>string</td><td>string</td><td>.value</td></tr><tr><td>children</td><td>false</td><td>false</td><td>1</td><td>HTMLCollection</td><td>void</td><td>.children</td></tr><tr><td>parent</td><td>false</td><td>false</td><td>1</td><td>HTMLElement</td><td>void</td><td>.parent</td></tr><tr><td>css</td><td>false</td><td>true</td><td>1</td><td>string | void</td><td>prop: string, val: string?</td><td>.style[val]</td></tr></tbody></table>
