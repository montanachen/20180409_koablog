<template>
<div >
  <p>AAAAAAA</p>
  <li v-for="(n, index) in even(numbers)" :key="index">{{ n }}</li>
  </div>
</template>

<script>
export default {
  name: 'MyTest',
  data () {
    return {
      numbers: [ 1, 2, 3, 4, 5 ]
    }
  },
  methods: {
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
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
