<template>
<div >
  <ul id = "MyTest">
    <li v-for="item in items" :key="item.message">{{ item.message }}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'MyTest',
  data () {
    return {
      items: [
        { message: 'Foo' },
        { message: 'Bar' },
        { message: 'AAAAA' },
        { message: 'BBBB' },
        { message: 'CCC' },
        { message: 'KKK' }
      ]
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
