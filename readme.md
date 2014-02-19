Pastels
===========

## Introduction

This repository houses the source code for the [Pastels](http://rishabhsrao.github.io/pastels) theme. It uses the following tools/frameworks (not in any particular order)&hellip;

* Jekyll &mdash; [jekyllrb.com](http://jekyllrb.com) &mdash; Jekyll is a blog-aware, static site generator in Ruby.
* HTML5 Boilerplate &mdash; [h5bp.com](http://html5boilerplate.com) &mdash; A professional front-end template for building fast, robust, and adaptable web apps or sites.
* Normalize.css &mdash; [necolas.github.io/normalize.css](http://necolas.github.io/normalize.css) &mdash; A modern, HTML5-ready alternative to CSS resets.
* Fira &mdash; [mozilla.github.io/Fira](https://mozilla.github.io/Fira) &mdash; Mozilla's new typeface, used in Firefox OS.
* Bower &mdash; [bower.io](http://bower.io) &mdash; A package manager for the web.
* Compass &mdash; [compass-style.org](http://compass-style.org) &mdash; An open-source CSS Authoring Framework.
* Yummy &mdash; [Yummy by IconEden](https://www.iconfinder.com/search/?q=iconset:ie_yummy) &mdash; Lovely set of icons.

## Setting up

To get started, just clone this repository and install all the dependencies in [`bower.json`](bower.json).

    git clone git@github.com:rishabhsrao/pastels.git
    cd pastels
    bower install

## Development

Run Compass' `watch` task and Jekyll's `serve` tasks&hellip;

    compass watch
    jekyll serve --watch

Note: If you change the `_config.yml` file, then you must stop `jekyll serve --watch` and start it again.

## License

All content on this site is available under the [MIT License](license.md).

---
