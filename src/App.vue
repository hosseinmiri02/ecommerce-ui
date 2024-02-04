<template>
  <the-navbar
    :cartCount="cartCount"
    @resetCartCount="resetCartCount"
    v-if="!['Signup', 'Signin'].includes($route.name)">
  </the-navbar>
  <div style="min-height: 60vh">
    <router-view
      v-if="products && categories"
      :baseURL="baseURL"
      :products="products"
      :categories="categories"
      @fetchData="fetchData">
    </router-view>
  </div>
  <the-footer v-if="!['Signup', 'Signin'].includes($route.name)"></the-footer>
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
import TheFooter from "./components/TheFooter.vue";
import axios from "axios";

export default {
  data() {
    return {
      baseURL: "https://limitless-lake-55070.herokuapp.com/",
      products: null,
      categories: null,
      key: 0,
      token: null,
      cartCount: 0,
    };
  },

  components: { TheFooter, TheNavbar },
  methods: {
    async fetchData() {
      // fetch products
      await axios
        .get(this.baseURL + "product/")
        .then((res) => (this.products = res.data))
        .catch((err) => console.log(err));

      //fetch categories
      await axios
        .get(this.baseURL + "category/")
        .then((res) => (this.categories = res.data))
        .catch((err) => console.log(err));

      //fetch cart items
      if (this.token) {
        await axios.get(`${this.baseURL}cart/?token=${this.token}`).then(
          (response) => {
            if (response.status == 200) {
              // update cart
              this.cartCount = Object.keys(response.data.cartItems).length;
            }
          },
          (error) => {
            console.log(error);
          }
        );
      }
    },
    resetCartCount() {
      this.cartCount = 0;
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.fetchData();
  },
};
</script>

<style>
html {
  overflow-y: scroll;
}
</style>
