<template>
<div class="main-container" :class="setClassIfCurrentPath('/photography', ['full-width', 'is-dark'])">
  <div class="main-header header-container">
    <div class="header-bar">
      <button class="menu" :class="[isMenuOpen ? 'is-open' : 'is-close']" @click="toggleMenu">
        <div class="line1-container">
          <div class="line line1"></div>
        </div>
        <div class="line2-container">
          <div class="line line2"></div>
        </div>
        <div class="line3-container">
          <div class="line line3"></div>
        </div>
      </button>  
      <div>
        <a href="/"><h1 class="main-title">Ao.</h1></a>
      </div>
    </div>

    <div class="horizontal-nav" :class="{'is-visible': isMenuOpen}" @click="toggleMenu">
      <nuxt-link to="/" class="nav-item" :class="isActive('/')">
        Home
      </nuxt-link>
      <nuxt-link to="/projects" class="nav-item" :class="isActive('/projects')">
        Projects
      </nuxt-link>
      <a href="http://blog.abhiomkar.in" class="nav-item">
        Blog
      </a>
      <nuxt-link to="/photography" class="nav-item" :class="isActive('/photography')">
        Photography
      </nuxt-link>
      <nuxt-link to="/about" class="nav-item" :class="isActive('/about')">
        About
      </nuxt-link>
      <nuxt-link to="/contact" class="nav-item" :class="isActive('/contact')">
        Contact
      </nuxt-link>
    </div>    
  </div>

  <div class="body-content" :class="setClassIfCurrentPath('/photography', 'full-width')">
    <nuxt/>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  created() {
    this.isMenuOpen = false;
  },
  methods: {
    isActive(path) {
      return {
        active: this.$route.path === path,
      };
    },
    setClassIfCurrentPath(path, classes) {
      const result = {};
      if (this.$route.path == path) {
        if (classes instanceof Array) {
          for (const className of classes) {
            result[className] = true;
          }
        } else {
          result[classes] = true;
        }
      }
      return result;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style lang="scss">
@import '../assets/css/color.scss';
@import '../assets/css/shadow.scss';
@import '../assets/css/transition.scss';
@import '../assets/css/variable.scss';
@import '../assets/css/media.scss';

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

/* Reset */
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  margin: 0;
  padding: 0;
}

/* Base */
html, body {
  height: 100%;  
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: $blackAlpha84;
  background: #f9f9f9;  
}


h1 {
 font-size: 24px;
 margin: 22px 0 18px 0;
 font-weight: 300;
 color: rgba(0, 0, 0, 0.9);
}

h2 {
  font-size: 18px;
  margin: 28px 0 10px 0;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
}

article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after, q:before, q:after {
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

*, *:before, *:after {
  box-sizing: border-box;
}

/* Clearfix */
.clearfix:after {
  content: "";
  display: table;
  clear: both;
}

.hidden, .hide {
  display: none;
}

/* Spacing */
.post h1, h3, h4, h5, p, .post-body ul, #post-list li, pre {
  margin-bottom: 20px;
}

/* Typography */
/*Accent color*/
#title,
#post-list a:hover,
#post-list li:hover .dates,
#title:hover {
  text-decoration: none;
  color: #5badf0;
  color: #5694f1;
}

a {
  color: #3367D6;
  color: $alertRed;
}

p a {
  color: #5694f1;
}

p {
  line-height: 2;
}

#post-nav a,
#post-list a {
  transition: all 0.15s ease-in-out;
}

li {
  line-height: 1.5;
  list-style: none;
}

li:before {
  content: "·";
  font-size: 45px;
  vertical-align: middle;
  line-height: 20px;
  padding-right: 8px;
}

b, strong {
  font-weight: 500;
  color: rgba(0, 0, 0, 0.84);
}

em, i {
  font-style: italic;
}

h3, h4, h5 {
  color: #333;
}

h3 {
  font-size: 20px;
  font-weight: 500;
}

h4 {
  font-size: 20px;
  font-weight: 500;
}

h5 {
  font-size: 15px;
  font-weight: 500;
}

h6 {
  font-size: 13px;
  font-weight: 500;
  color: #666;
  margin-bottom: 6px;
}

p.small {
  color: #bbb;
  font-size: 14px;
  line-height: 1.5;
  display: block;
}

blockquote {
  padding-left: 15px;
  border-left: 3px solid #eee;
}

hr {
  display: block;
  border: none;
  height: 3px;
  margin: 40px auto;
  background: #f4f4f4;
}

table {
  width: 100%;
  margin: 40px 0;
  border-collapse: collapse;
  font-size: 13px;
  line-height: 1.5em;
}

th, td {
  text-align: left;
  padding-right: 20px;
  vertical-align: top;
}

table td, td {
  border-spacing: none;
  border-style: solid;
  padding: 10px 15px;
  border-width: 1px 0 0 0;
}

tr > td {
  border-top: 1px solid #eaeaea;
}

tr:nth-child(odd) > td {
  background: #fcfcfc;
}

thead th, th {
  text-align: left;
  padding: 10px 15px;
  height: 20px;
  font-size: 13px;
  font-weight: 500;
  color: #444;
  border-bottom: 1px solid #dadadc;
  cursor: default;
  white-space: nowrap;
}

img {
  border-radius: 3px;
}

pre, code {
  font-family: Monaco, monospace;
  font-size: 12px;
  background-color: #f1f1f1;
  display: block;
  padding: 12px;
  border-radius: 3px;
  overflow-x: auto;
  line-height: 20px;
}

footer {
  color: #aaa;
  margin-top: 250px;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  border-top: 1px solid #eee;
  padding-top: 20px;
}

.base-icon {
    fill: $blackLight;
}

.base-icon path {
  vertical-align: middle;
}

img {
  opacity: 1;
  transition: opacity 0.15s ease-in-out;
}

img[data-src] {
  opacity: 0;
}

.paper-card {
  background: #fff;
  box-shadow: $elevation_1dp;
  border: 1px solid rgba(0, 0, 0, 0.14);
}

input[type="text"] {
  font-size: 14px;
  outline: 0;
  border: 0;
}

textarea {
  font-size: 14px;
  outline: 0;
  border: 0;
}

.flat-colored-button {
  background: #4285F4;
  text-transform: uppercase;
  color: #fff;
  border: 0;
  font-weight: bold;
  font-size: 13px;
  border-radius: 2px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 84px;
  outline: 0;
  transition: all 0.35 ease-in-out;
  cursor: pointer;
  box-shadow: $elevation_1dp;
  text-align: center;
}

.flat-colored-button[disabled] {
  background: #F5F5F5;
  color: #9E9E9E;
  box-shadow: none;
}

.flat-colored-button:focus {
  background: #3367D6;
}

.flat-colored-button:active {
  box-shadow: $elevation_6dp;
  background: #3367D6;
}

.flat-colored-button.disabled {
  color: $blackAlpha80;
  background: $blackAlpha20;
}

/* fixes auto zoom on focus on form inputs in iOS */
@media screen and (-webkit-min-device-pixel-ratio:0) { 
  select, textarea, input[type="text"], input[type="password"], input[type="datetime"], input[type="datetime-local"], input[type="date"], input[type="month"], input[type="time"], input[type="week"], input[type="number"], input[type="email"], input[type="url"], input[type="search"], input[type="tel"], input[type="color"] { font-size: 16px; }
}
</style>

<style lang="scss" scoped>
@import '../assets/css/color.scss';
@import '../assets/css/shadow.scss';
@import '../assets/css/transition.scss';
@import '../assets/css/variable.scss';
@import '../assets/css/media.scss';

.main-header {
  background: #fff;
  position: relative;
  color: $blackAlpha90;
  height: $headerHeight;
  display: flex;
  justify-content: center;
}

@media #{$TillDesktop} {
  .main-header {
    justify-content: flex-start;
  }
}

a {
  text-decoration: none;
}

.header-bar {
  display: flex;
  padding: 22px 0 8px 0;
  height: $headerHeight;
  z-index: 9999;
  background: #fff;
}

@media #{$TillDesktop} {
  .header-bar {
    width: 100%;
  }
}

.menu {
  cursor: pointer;
  margin: -16px 16px 0 16px;
  background: transparent;
  border: 0;
  outline: 0;
}

@media #{$Desktop} {
  .menu {
    display: none;
  }
}

.menu .line {
  margin: 4px 0;
  background: rgba(0, 0, 0, 0.64);
  height: 2px;
  width: 24px;
  border-radius: 2px;
  transform: none;
  opacity: 1;
  transition: all $transitionSpeed ease-in-out;
}

.menu .line1-container, .menu .line3-container {
  transition: all $transitionSpeed ease-in-out;
  transition-delay: $transitionSpeed;
}

.menu .line1-container {
  transform-origin: center;
}

.menu .line3-container {
  transform-origin: center;
}

/** is opening */

.menu.is-open .line1 {
  transform: translateY(4px);
}

.menu.is-open .line1-container  {
  transform: rotate(45deg) scaleX(0.8) translateY(4px);
}

.menu.is-open .line2 {
  transform: scale(0.1);
  visibility: hidden;
  opacity: 0;
}

.menu.is-open .line3 {
  transform: translateY(-4px);
}

.menu.is-open .line3-container {
  transform: rotate(-45deg) scaleX(0.8) translateY(-5px);
}


/** is closing */
.menu.is-close .line2 {
  transition-delay: $transitionSpeed;
}

.menu.is-close .line1-container, .menu.is-close .line3-container {
  transition-delay: 0s;
}

.header-menu-button {
  cursor: pointer;
  margin: 5px 10px 0 10px;
  background: transparent;
  border: 0;
  outline: 0;
  box-sizing: border-box;
  width: 32px;
  height: 32px;

  &.is-active {
    color: $blueSelected;
  }
}

.main-title {
  display: inline-block;
  line-height: 100%;
  font-weight: 500;
  font-size: 32px;
  margin: 0;
  letter-spacing: -1px;
  width: 100%;
  display: block;
  margin: 10px 6px;
  color: $blackAlpha90;
}

@media #{$Desktop} {
  .main-title {
    margin-left: 14px;
  }
}

@media #{$Desktop} {
  .horizontal-nav {
    white-space: nowrap;
    display: flex;
    margin-left: 20px;
    height: $headerHeight;
    padding: 42px 0 8px;

    .nav-item {
      color: $blackAlpha90;
      display: block;
      font-weight: 500;
      margin: 0 14px;
      font-size: 14px;
    }

    .nav-item.active {
      color: $blueSelected;
    }  
  }
}

@media #{$TillDesktop} {
  .horizontal-nav {
    position: absolute;
    width: 100%;
    top: $headerHeight;
    background: #fff;
    border-top: 1px solid #f1f1f1;
    box-shadow: $elevation_2dp;
    visibility: hidden;
    transform: translateY(-100%);
    transition: all 0.24s ease-in-out;
    z-index: 999;

    .nav-item {
      color: $blackAlpha90;
      display: block;
      font-weight: 500;
      padding: 20px 12px;
      text-align: center;
      border-bottom: 1px solid #f1f1f1;
    }

    .nav-item.active {
      color: $blueSelected;
    }
  }

  .horizontal-nav.is-visible {
    transform: none;
    visibility: visible;
  }
}

.body-content {
  max-width: $contentWidth;
  margin: 0 auto;

  &.full-width {
    max-width: none;
  }
}

.main-container, .main-content {
  height: 100vh;
}

.main-container.is-dark {
  background: #141414;
}

</style> <!-- scoped CSS -->

