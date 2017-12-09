<template>
<div class="container">
  <div class="content-wrapper">
    <h1 class="title">Photography</h1>

    <!-- gallery navigation list -->
    <div class="category-nav">
      <a v-for="(gallery, index) in galleryPhotoList"
          class="category-link"
          :class="isActive(index)"
          v-bind:key="gallery.name"
          @click="setActivateGalleryByIndex(index)">
        {{ gallery.name }}
      </a>
    </div>

    <div class="gallery-list">
      <!-- photo gallery -->
      <template v-for="photo_url in gallery.photo_urls">
        <div class="photo-container" v-bind:key="photo_url">
          <img v-bind:src="photo_url" class="photo" />
        </div>
      </template>
    </div>
  </div>
</div>
</template>

<script>
import data from '~/data/photography.json';

export default {
  data() {
    return {
      galleryPhotoList: data,
      currentActiveGalleryIndex: 0,
    };
  },
  computed: {
    gallery() {
      return this.galleryPhotoList[this.currentActiveGalleryIndex];
    },
  },
  filters: {
    hashFormat(value) {
      return value.replace(' ', '-').toLowerCase();
    },
  },
  methods: {
    setActivateGalleryByIndex(index) {
      this.currentActiveGalleryIndex = index;
    },
    isActive(index) {
      return {
        'is-selected': (this.currentActiveGalleryIndex == index),
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/css/variable.scss';
@import '../assets/css/media.scss';

.container {
  margin: 0 auto;
  padding-bottom: 20px;
  background: #141414;
  color: #fff;
}

.title {
  color: #fff;
  font-size: 24px;
  font-weight: 300;
  margin: 0 auto;
  width: 100%;
  padding: 18px 8px;
}

.category-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 0 0 12px 8px;
}

.category-link {
  color: rgba(255, 255, 255, 0.4);
  margin: 8px 12px 8px 0;
  cursor: pointer;
}

.category-link:hover, .category-link.is-selected {
  color: #fff;
}

.gallery-list {
  position: relative;
}

.gallery {
  display: flex;
  flex-direction: column;
  margin: 0 auto 22px auto;
  display: none;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.gallery.is-visible {
  display: block;
  opacity: 1;
}

.gallery.display-none {
  display: none;
}

.photo-container {
  padding: 0 8px 4px 8px;
  width: 100%;
}

.photo {
  width: 100%;
  border-radius: 2px;
}

@media #{$Tablet} {
  .content-wrapper {
    max-width: $containerWidth;
    margin: 0 auto;
  }
}
</style>