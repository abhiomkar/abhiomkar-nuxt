<template>
<div class="container">
  <h1 class="title">Projects</h1>
  <project-card v-for="project in projects" v-bind:project="project" v-bind:key="project.url"></project-card>
  <a class="view-all-link" href="https://github.com/abhiomkar">
    View All <span class="view-all-icon">&#8250;</span>
  </a>
</div>
</template>

<script>
import ProjectCard from '~/components/ProjectCard.vue';

export default {
  components: {
    ProjectCard,
  },
  data: function() {
    return {
      projects: [{
        url: 'https://github.com/abhiomkar/chessboard-io',
        description: 'Chessboard Multiplayer',
        name: 'chessboard-io',
      },
      {
        url: 'https://github.com/abhiomkar/pip-save',
        description: 'bringing npm like behavior to pip including init & save',
        name: 'pip-save',
        homepage: 'http://abhiomkar.github.io/pip-save/',
      },
      {
        url: 'https://github.com/abhiomkar/whois-home',
        description: 'Get a push notification on your iPhone/Android when ' +
            'someone enters or leaves your home.',
        name: 'whois-home',
      },
      {
        url: 'https://github.com/abhiomkar/raspberrypi-mac',
        description: 'Setup RaspberryPi on Mac',
        name: 'raspberrypi-mac',
      },
      {
        url: 'https://github.com/abhiomkar/save-martian',
        description: 'Communicate with astronaut Mark Watney - The Martian ' +
            'using hexadecimal system with Pathfinder. from NASA.',
        name: 'save-martian',
        homepage: 'http://abhiomkar.github.io/save-martian/',
      },
      {
        url: 'https://github.com/abhiomkar/Minimality',
        description: 'Minimal wordpress theme for real programmers & hackers.',
        name: 'Minimality',
      },
      {
        url: 'https://github.com/abhiomkar/good-quotes',
        description: 'Google Chrome Extension to replace new tab with ' +
            'inspirational quotes.',
        name: 'good-quotes',
        homepage: 'http://bit.ly/chrome-good-quotes',
      },
      {
        url: 'https://github.com/abhiomkar/pingpong-app',
        description: 'Pingpong game with Phaser.js',
        name: 'pingpong-app',
        homepage: 'http://abhiomkar.github.io/pingpong-app/',
      },
      {
        url: 'https://github.com/abhiomkar/portfoliojs',
        description: 'jQuery plugin for your beautiful portfolio images with ' +
            'horizontal scrolling',
        name: 'portfoliojs',
        homepage: 'http://portfoliojs.com/',
      },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/css/color.scss';

.container {
  padding-bottom: 50px;
}

.title {
  font-size: 24px;
  font-weight: 300;
  margin-left: 8px;
}

.view-all-link {
  color: $blackAlpha60;
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-decoration: none;
}

.view-all-link:hover {
  color: $blackAlpha80;
}

.view-all-icon {
  font-size: 24px;
  margin: -1px 0 0 5px;
}

</style>