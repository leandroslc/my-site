Often when we build responsive layouts, we get in doubt of which standards and which measure units to use for each situation, mainly if we are not using any ready-to-use CSS framework.

In this article I brought together some tips that have been helping me build more responsive and accessible layouts which I hope they can be useful to you 😊.

## Prevent changing the default font size

Setting an fixed font size means changing the `font-size` at the `root` or `html` element, in this manner:

```css
:root { font-size: 14px; } /* OR */ html { font-size: 14px; }
```

This affects the `rem` unit, but not only this, changing the font size at the root element prevents that the browser's font size to be configurable.

As part of the [UAAG](https://www.w3.org/TR/WAI-USERAGENT/guidelines.html#tech-configure-text-scale) specification, the default font size can be configured on the browser, for example, by a person who has some kind of visual limitation.

Although maybe this resource is not expressivelly used, it would be important to think in a design that ensures those use cases since the beginning. In addition to that, it is totally possible to create a layout using the default font size, without altering it.

Even so, if necessary, it is possible to relatively change the initial font size using percentage or `rem`, for example:

```css
/* Considering that the browser is configured with a size of 16px */

:root { font-size: 0.9rem; } /* 16 x 0.9rem = 14.4px */

:root { font-size: 90%; } /* 16 x 90% = 14.4px */
```

Be very careful while changing this size or else the other developers might also end with a headache when using `rem` 😄.

## Prevent using `rem` or `em` in box layouts

Often when we use `rem` or `em` we are really tempted to also use it in `margin`, `padding`, `border`, `border-radius` and other things. But this creates a problem, since the font size grow affects negativelly the layout.

When we use `rem` on these scenarios, as larger the font size, less space we will have for our content, as the margin will also grows, pushing the content and shortening the space.

On those cases, it is preferable to use static units, like `px`.

![Prevent using rem in box layouts](/assets/blog/tips-of-responsiveness-with-accessibility-in-web/prevent-using-rem-in-box-layouts.webp)

## Use `rem` or `em` in fixed widths and heights

Usually it is always better not to use fixed widths and heights. However, when we inevitable have to make them fixed, it is useful using `rem` (or `em`).

Differently from `padding` or `margin` which we saw previously, using `rem` in fixed `width` or `height` will make the container better adjustable as the font increases or decreases.

![Use rem in fixed width and height](/assets/blog/tips-of-responsiveness-with-accessibility-in-web/use-rem-in-fixed-width-and-height.webp)

## Use `rem` in _media queries_

Considering that a person can configure the font size on the browser, `rem` is a great solution for using with _media queries_, as the `min-width` and `max-width` queries will also be applied according to the font size and not only to the screen size.

The use is similar, just change the value in pixels to rem:

```css
@media (min-width: 48rem) {
  ...
}
```

![Use rem in media queries](/assets/blog/tips-of-responsiveness-with-accessibility-in-web/use-rem-in-media-queries.webp)

## Consider using the _mobile-first_ pattern

Since we are talking about media queries already, if you are using them for responsive layouts, opt to use _mobile-first_ queries, in other words, using `min-width`.

With this pattern people that access the website on devices with smaller screen sizes will benefit from the fact the device browser will have less instructions to interpret and thus less computation power is needed, using less battery.

It will also prevent the download of more resources like icons, images or videos, which would not be presented to small screen, saving mobile data usage.

This is not exatly an accessibility rule, but it is good to have in mind that many people ends up accessing a website via a mobile device (sometimes even because they do not have a desktop computer or a notebook).

## Prevent using _media queries_

Despite having a tip of media queries with `rem` in this article, should we use them for everything?

With more modern browsers and the evolution of CSS, it is important to always depend less on media queries to build responsive layouts. Media queries tend to be confusing and tend to a higher chance of code duplication.

Nowadays it is possible to do multiple things using flexbox and grid, frequently with less code that would be used with media queries. [This awesome article](https://css-tricks.com/responsive-layouts-fewer-media-queries/) shows a more detailed study as an alternative to media queries.

## Final words

It is vital to highlight that it is important to follow a standard, even if one of the tips would not be followed, since a CSS code base, if not well written, can become an huge obstacle.

In addition, unless the content is totally messy (of course 😄), people will not care if a margin has 2 or 4 more or less pixels. What they will truly care is if they can understand, read and navigate apropriately on your website.

That is why you should never build an website with counted pixels. Always choose to keep your site fluid, of ease navigation and accessible, independently of which device it will be accessed.
