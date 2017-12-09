<template>
<div class="item">
  <a class="item-body" v-bind:href="project.url">
    <div class="item-name">
      {{ project.name }}
    </div>
    <div class="item-description">
      {{ project.description }}
    </div>
  </a>
  <div class="item-footer">
    <a v-show="project.homepage" class="item-action-button" v-bind:href="project.homepage">
      Go to App
    </a>
    <a class="item-action-button" v-bind:href="project.url">
      Source code
    </a>
  </div>
</div>
</template>

<script>
export default {
  props: ['project'],
};
</script>

<style lang="scss" scoped>
@import '../assets/css/shadow.scss';
@import '../assets/css/transition.scss';
@import '../assets/css/media.scss';
@import '../assets/css/color.scss';
@import '../assets/css/variable.scss';

.item {
  margin: 10px 6px;
  box-shadow: $elevation_2dp;
  border-radius: 2px;
  transition: all .28s $easeInOut;
  background: #fff;

  a {
    text-decoration: none;
  }
}

  .item:hover {
  box-shadow: $elevation_6dp;
}

.item-body {
  padding: 25px 25px 0 25px;
  border-bottom: 1px solid $blackAlpha10;
  cursor: pointer;
  position: relative;
  display: block;
}

.item-star-count {
  font-size: 14px;
  position: absolute;
  right: 12px;
  top: 12px;
  display: flex;
  align-items: center;
  color: $blackAlpha60;
}

.star-icon {
  font-size: 18px;
  width: 20px;
  margin-left: 4px;
}

.item-name {
  color: $blackAlpha80;
  font-size: 17px;
  font-weight: 500;
  display: inline-block;
}

.item-name:hover {
  text-decoration: underline;
}

.item-description {
  color: $blackAlpha60;
  font-size: 14px;
  line-height: 48px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 16px 8px 16px 0;
}

.item-action-button {
  color: $blackAlpha50;
  font-weight: 500;
  font-size: 14px;
  margin: 0 10px;
}

.item-action-button:hover {
  color: $blackAlpha80;
}

@media screen and (--Tablet) {
  max-width: $contentWidth;

  .item {
    margin: 20px 6px;
  }
}
</style>
