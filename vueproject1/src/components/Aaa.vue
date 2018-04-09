<template>
<div >
  <p>{{ message }}</p>
  <input v-model = "message">
  <button v-on:click="reverseMessage">反转字符串</button>
    {{ message | capitalize }}

</div>
</template>

<script>
export default {
  name: 'MyTest',
  data () {
    return {
      message: 'hello kitty'
    }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
