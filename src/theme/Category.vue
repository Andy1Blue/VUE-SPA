<template>
  <div class="columns">
    <div class="column is-one-third" v-for="(post, title) in posts" v-bind:key="post.id">
      <div class="card">
        <div class="card-content">
          <h3>{{ post.title }}</h3>
          {{ post.content }}
        </div>
        <footer class="card-footer">
          <a class="card-footer-item" :href="post.link" target="_blank">Read More</a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
