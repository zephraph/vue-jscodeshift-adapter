const { testTransform } = require('../test-helper');
const transform = require('./transform');

const input = `
<template>
  <div class="widget">
    Hello {{name}}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
.widget {
  color: red;
}
</style>
`;

const output = `
<template>
  <div class="widget">
    Hello {{name}}
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number
    }
  }
};
</script>

<style>
.widget {
  color: red;
}
</style>
`;

testTransform(transform, 'Widget.vue', input, output);