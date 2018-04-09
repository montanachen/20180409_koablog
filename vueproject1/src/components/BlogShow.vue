<template>
<div>
  <ul>
    <!-- @click = "skip">Next Post</button> -->
    <!-- <p> No :  {{post}}  </p> -->
    <p> Title :  {{post.title}}  </p>
    <p> Message : {{post.content}}  </p>
    <button @click = "back">Back</button>

  </ul>
</div>
</template>

<script>
export default {
  name: 'BlogShow',
  props: ['post'],
  data () {
    return {
      /*
      todos: [
        { title: 'PPP', message: 'AAAA' },
        { title: 'PPP', message: 'AAAA' },
        { title: 'AAA', message: 'MMM' },
        { title: 'PPP', message: 'AAAA' },
        { title: 'QQQ', message: 'AAAA' }
      ],
      post: 0,
      a: 'aaaaa',
      b: 'bbbbb'
      */
      title: '',
      content: ''
    }
  },
  methods: {
    back: function () {
      this.$emit('back')
    }
    /*
    skip: function () {
      this.post++
      this.a = this.todos[this.post].title
      this.b = this.todos[this.post].message
    }
    */
  }
}
</script>
