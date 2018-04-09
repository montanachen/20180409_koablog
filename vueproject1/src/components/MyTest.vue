<template>
<div id="example-3">
  <button v-on:click="say(todos[2].message)">Say hi</button>
  <button v-on:click="say(counter)">Say what</button>
</div>
</template>

<script>
export default {
  name: 'example-3',
  data () {
    return {
      todos: [
        { title: 'XXXg', message: 'Foo' },
        { title: 'XXXkkkkk', message: 'Bar' },
        { title: 'XXXpp', message: 'AAjjjjjjjAAA' },
        { title: 'XXX', message: 'BBBB' },
        { title: 'XXX', message: 'CCC' },
        { title: 'XXX', message: 'KKK' }
      ],
      newtitle: 'New  Iitle',
      newcontent: 'New  Content',
      counter: 98765
    }
  },
  methods: {
    say: function (message) {
      alert(message + ' ' + message)
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
