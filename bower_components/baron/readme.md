[![Build Status](https://travis-ci.org/Diokuz/baron.svg)](https://travis-ci.org/Diokuz/baron)

*You cannot change the world, but you can change a scrollbar!*

Baron — a small, fast and crossbrowser custom scrollbar with native system scroll mechanic. 

## Demo

http://diokuz.github.io/baron/

## Features

- Doesn't replace native system scroll mechanic.
- Customizable scrollbar design with full CSS support.
- No strong dependencies on jQuery.
- Plugin system (fixable headers, sticky footer, autotests and more)
- Can be inited on hidden blocks
- Vertical, horizontal and bidirectional scroll
- Infinite scroll

Baron just hides the system scrollbar, without removing it. This guarantees scrolling will work on any system.

## 1.0 migration

If you have any problems, just set [`cssGuru`](#params) option to `true`.

## Simple usage

If you want only to hide system scrollbar:

* Include either the development or minified version of baron.js:

```html
<script src="baron.js"></script>
```

* Make some HTML:

```html
<div class="scroller">
    Your scrollable content here
</div>
```

* And CSS

```css
.scroller::-webkit-scrollbar { /* For Mac OS X styled scrollbars */
    width: 0;
}
```

* Initialize baron:

```js
$('.scroller').baron();
```

## Advanced usage

```html
<div class="scroller">
    Your scrollable content here
    <div class="scroller__track"><!-- Track is optional -->
        <div class="scroller__bar"></div>
    </div>
</div>
```

```css
.scroller {
    -ms-overflow-style: none; // better feel in ie10+ in some rare cases
    overflow-y: scroll;
    /* -webkit-overflow-scrolling: touch; *//* uncomment to accelerate scrolling on iOS */
}
.scroller::-webkit-scrollbar { /* For Mac OS X styled scrollbars */
    width: 0;
}
.scroller__track {
    display: none; /* Invisible by default */
    position: absolute;
    right: 4px;
    top: 10px;
    bottom: 4px;
    width: 10px;
    background: rgba(0, 0, 0, .1);
}
.baron .scroller__track {
    display: block; /* Visible when scrolling is possible */
}
.scroller__bar { /* The bar. You should define width, right position and background */
    position: absolute;    
    z-index: 1;
    right: 0;
    width: 10px;
    background: #999;
}
```

You can specify some parameters on baron initialization:

```js
$('.scroller').baron(params);

// or
var scroll = baron(params);
```

and store baron scrollbar object to `scroll` variable (or dont - baron stores all its instances and links them with html-nodes).

where:

<a name="params"></a>
```js
var params = {
    // Flag, indicating that you know your css,
    // and baron must minimize the count of setted inline css rules
    // (i.e. overflow: hidden for clipper and overflow-y: scroll for scroller)
    // Default: false
    cssGuru: true,

    // Whos width (height) will be setted?
    // Default: 'scroller' for vertical, 'clipper' for horizontal direction.
    impact: 'scroller',

    // Selector for `scroller` element.
    // Default: this (in jQuery mode).
    scroller: '.scroller',

    // `Root` html element for baron. Use this param when your html-scrollbar content is outside scroller
    // Default: scroller
    root: $('.my_scroller'),

    // Selector for `bar` element
    // Default: 'undefined'
    bar: '.scroller__bar',

    // `Track`
    // Default: parent node of bar
    track: '.scroller__track',

    // CSS classname for `scroller` when its needed (when content height above scroller heights)
    // Default: 'baron'
    barOnCls: 'baron',
    // Note: by default scroller__bar should be invisible

    // CSS classname for `scroller` from start till end + 300ms of scrolling process
    // You can boost performance by using `_scrolling {pointer-events: none}`
    // Default: undefined
    scrollingCls: '_scrolling',

    // CSS classname for `bar` when it dragging by cursor
    // Its better than `.bar:hover` rule
    // Default: undefined
    draggingCls: '_dragging',

    // Scroll direction
    // Default: 'v' (vertical), 'h' for second baron invocation
    direction: 'h',

    // Minimum time delay between two resize events fires in seconds [0..1] or milliseconds (1..∞)
    // Default: 300 ms
    resizeDebounce: .2, // s

    // Local copy of jQuery-like utility
    // Default: window.jQuery
    $: function(selector, context) {
        return bonzo(qwery(selector, context));
    },

    // Event manager
    // Default: function(elem, event, func, mode) { params.$(elem)[mode || 'on'](event, func); };
    event: function(elem, event, func, mode) { // Events manager
        if (mode == 'trigger') {
            mode = 'fire';
        }

        bean[mode || 'on'](elem, event, func);
    }
};
```

All parameters are optional (except scroller; or root, if you are not using baron as jQuery plugin).

## Methods

### update

In some cases, such as infinity scroll (container size changing) in old browsers, which does not support MutationObserver; or css-transition applied to size, need for baron updating is raises. You can do this in two ways:

```js
// 1. Invoke update method on baron-variable, which you stored after baron initialization
scroll.update();

// 2. Invoke update method on html-node
$('.scroller').baron().update();
// In that case you use baron() just as getter for baron instance from $('.scroller') html-nodes, and to do this, you should call baron() without arguments; or it will throw a "second inicialization" error.
```

### dispose

If html-block with scroller is removed from your page, to prevent memory-leaking and performance issues, you should dispose corresponding baron instances, by calling method dispose:

```js
scroll.dispose();

// or
$('.scroller').baron().dispose();
```

Note: baron returns the baron object, even in jQuery mode. That breaks jQuery chaining. For example, you can't do this:

```js
$('.scroller').baron().css().animate();
```

but you can:

```js
$('.scroller').css().animate() // jQuery chaining
    .baron().update(); // baron chaining
```

and even more:

```js
var scroll = $('.scroller').css().animate().baron().fix();

scroll.baron({direction: 'h'}).test().anotherBaronPlugin();
```

Every baron plugin sould return baron object (this);

## Horizontal and bidirectional scroll

To switch default vertical direction to horizontal direction just set 'direction' param to 'h' value:

```js
baron({
    ...
    direction: 'h'
});
```

If you want to scroll in both directions (vertical and horizontal) you must initialize baron two times: one per direction. In than case you can do chaining:

```js
baron(vParams).baron(hParams);
```

Note: think about horizontal baron as about second independent baron instance, or as about plugin for 'baron', which simply calls 'baron' with redefined default params - both statements are true, actually. Unfortunately, in case above you only can manage last baron instance in chain (to update or dispose it). To manage both you have to initialize them independently:

```js
vScroll = baron(vParams);
hScroll = baron(hParams);
...
vScroll.dispose();
hScroll.dispose();
```

*Note: horizontal scroll works in a different way: height of scroller is auto (you can set it to particular value in CSS), and height of clipper is varing by baron.*

## Updating baron

When container size changed (for example: you load additional data to the container using ajax), you should call update() method:

```js
scroll.update();
```

or fire custom event 'sizeChange' to wrapper:

```js
$('.scroller').trigger('sizeChange');
```

## Disposing baron

If you removed html-nodes, which was used by baron, from DOM, dont forget dispose related baron instance manually. Use 'dispose' method for that. There are two ways for disposing:

```js
var scroll = $('.scroller').baron();
scroll.dispose();

// or
$('.scroller').baron().dispose();
```

Baron stores all its instances in window.baron._instances, and link them with html-nodes by data-baron-[dir]-id attribute values.

##noConflict mode

If you need window.baron for another purposes you can restore original value:
```js
// window.baron points to some other library
...
// you include baron, it replaces the window.baron variable to baron namespace

var graf = baron.noConflict();
// now window.baron points to that other library again, and you can use window.graf() etc.
```

## Browsers support

Baron uses two old `CSS 2.1` technologies: 1) `overflow: scroll` 2) `overflow: hidden`.

| <img src="http://diokuz.github.io/pics/chrome.png" width="48px" height="48px" alt="Chrome logo"> | <img src="http://diokuz.github.io/pics/firefox.png" width="48px" height="48px" alt="Firefox logo"> | <img src="http://diokuz.github.io/pics/ie.png" width="48px" height="48px" alt="Internet Explorer logo"> | <img src="http://diokuz.github.io/pics/opera.png" width="48px" height="48px" alt="Opera logo"> | <img src="http://diokuz.github.io/pics/safari.png" width="48px" height="48px" alt="Safari logo"> | <img src="http://diokuz.github.io/pics/android.png" width="48px" height="48px" alt="Android browser logo"> |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 1+ ✔ | 1+ ✔ | 6+ ✔ | 9+ ✔ | 5+ ✔ | 4+ ✔ |

`overflow: scroll` not supported by Opera mini and old versions of Android browser (2-). That means, you cannot make scrollable html-elements for them anyway.

## Plugins

@see [docs/plugins.md](https://github.com/Diokuz/baron/blob/master/docs/plugins.md)

## License

MIT.
