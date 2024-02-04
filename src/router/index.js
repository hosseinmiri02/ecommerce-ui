import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

import AdminPage from "../views/Admin/AdminPage.vue";

import PageNotFound from "../views/PageNotFound.vue";

import ProductPage from "../views/Product/ProductPage.vue";
import AddProduct from "../views/Product/AddProduct.vue";
import EditProduct from "../views/Product/EditProduct.vue";
import ShowDetails from "../views/Product/ShowDetails.vue";
import WishList from "../views/Product/WishList.vue";
import CartDetails from "../views/Cart/CartDetails.vue";
import CheckOut from "../views/Checkout/CheckOut.vue";

import CategoryPage from "../views/Category/CategoryPage.vue";
import AddCategory from "../views/Category/AddCategory.vue";
import EditCategory from "../views/Category/EditCategory.vue";
import ListProducts from "../views/Category/ListProducts.vue";
import SignUp from "../views/SignUp.vue";
import SignIn from "../views/SignIn.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  //Admin routes
  {
    path: "/admin",
    name: "Admin",
    component: AdminPage,
  },
  //Product routes
  {
    path: "/product",
    name: "Product",
    component: ProductPage,
  },
  {
    path: "/admin/product",
    name: "AdminProduct",
    component: ProductPage,
  },
  {
    path: "/admin/product/add",
    name: "AddProduct",
    component: AddProduct,
  },
  {
    path: "/admin/product/:id",
    name: "EditProduct",
    component: EditProduct,
  },
  {
    path: "/product/show/:id",
    name: "ShowDetails",
    component: ShowDetails,
  },
  //Category routes
  {
    path: "/category",
    name: "Category",
    component: CategoryPage,
  },
  {
    path: "/admin/category",
    name: "AdminCategory",
    component: CategoryPage,
  },
  {
    path: "/admin/category/add",
    name: "AddCategory",
    component: AddCategory,
  },
  {
    path: "/admin/category/:id",
    name: "EditCategory",
    component: EditCategory,
  },
  {
    path: "/category/show/:id",
    name: "ListProducts",
    component: ListProducts,
  },
  //Page Not found
  {
    path: "/:catchAll(.*)",
    name: "PageNotFound",
    component: PageNotFound,
  },
  //Signin and Signup
  {
    path: "/signup",
    name: "Signup",
    component: SignUp,
  },
  {
    path: "/signin",
    name: "Signin",
    component: SignIn,
  },
  {
    path: "/wishlist",
    name: "Wishlist",
    component: WishList,
  },
  {
    path: "/cart",
    name: "Cart",
    component: CartDetails,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: CheckOut,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//scroll to top after every route change
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;
