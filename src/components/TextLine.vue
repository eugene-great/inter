<template>
  <p @click="clicked = !clicked" :class="{'text--line-contrast': clicked}" class="text--line">
    <span>{{text}}</span>
  </p>
</template>

<script>

export default {
  name: 'TextLine',
  data() {
    return {
      clicked: false,
    }
  },
  props: {
    text: String,
  },
  methods: {
  }
}

</script>

<style scoped>

p {
  text-align: left;
}

span {
  display: inline;
  background: lightgray;
  color: lightgray;
  cursor: pointer;
}

.text--line-contrast span {
  color: black;
  background: transparent;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
