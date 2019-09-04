<template>
  <div>
    <AppHeader />
    <section class="main-section section">
      <div class="container content">
        <router-view></router-view>
      </div>
    </section>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";
import Category from "./Category.vue";
export default {
  components: {
    AppHeader,
    AppFooter,
    Category
  }
};
</script>

<style lang="scss">
$primary: #287ab1;
@import "~bulma";

.columns {
  flex-wrap: wrap;
}
</style>
