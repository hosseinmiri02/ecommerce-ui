<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Our Categories</h3>
        <router-link :to="{ name: 'AddCategory' }">
          <button class="btn" style="float: right">Add Category</button>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div
        v-for="category of categories"
        :key="category.id"
        class="col-xl-4 col-md-6 col-12 pt-3 d-flex">
        <category-box :category="category"> </category-box>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryBox from "../../components/Category/CategoryBox.vue";
export default {
  components: { CategoryBox },
  props: ["baseURL", "categories"],
  mounted() {
    if (this.$route.name == "AdminCategory" && !localStorage.getItem("token")) {
      this.$router.push({ name: "Signin" });
    }
  },
};
</script>

<style scoped>
h4 {
  font-family: "Roboto", sans-serif;
  color: #484848;
  font-weight: 700;
}

#add-category {
  float: right;
  font-weight: 500;
}
</style>
