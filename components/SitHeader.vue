<template>
  <section class="header-section">
    <h1 class="header-title">
      <nuxt-link class="title-link" to="/">
        <img class="logo" src="~static/Logo.png">
      </nuxt-link>
    </h1>
    <nav class="header-right menu-pc">
      <nuxt-link to="what-is-sit" tag="div" class="menu-item-pc">
        <el-button type="text">"SIT"とは？</el-button>
      </nuxt-link>
      <nuxt-link to="how-to-use" tag="div" class="menu-item-pc">
        <el-button type="text">使い方</el-button>
      </nuxt-link>
      <nuxt-link to="about" tag="div" class="menu-item-pc">
        <el-button type="text">当サイトについて</el-button>
      </nuxt-link>
    </nav>
    <nav class="header-right menu-mobile">
      <el-dropdown class="menu-button" trigger="click">
        <span class="el-dropdown-link menu-icon">
          <i class="el-icon-menu"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            class="menu-item"
          >
            <nuxt-link to="what-is-sit" tag="div" class="menu-item-mobile">
              <el-button type="text">"SIT"とは？</el-button>
            </nuxt-link>
          </el-dropdown-item>
          <el-dropdown-item
            class="menu-item"
          >
            <nuxt-link to="how-to-use" tag="div" class="menu-item-mobile">
              <el-button type="text">使い方</el-button>
            </nuxt-link>
          </el-dropdown-item>
          <el-dropdown-item
            class="menu-item"
          >
            <nuxt-link to="about" tag="div" class="menu-item-mobile">
              <el-button type="text">当サイトについて</el-button>
            </nuxt-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </nav>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped>
.header-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.header-title {
  height: 90%;
}
.title-link {
  height: 100%;
}
.logo {
  height: 100%;
}
.header-right {
  display: flex;
}
.menu-icon {
  font-size: 36px;
}
.menu-item-pc {
  margin: 0 10px;
}
.social {
  display: flex;
  align-items: stretch;
}

.menu-pc {
  display: flex;
}
.menu-mobile {
  display: none;
}
@media screen and (max-width: 768px) {
  .menu-pc {
    display: none;
  }
  .menu-mobile {
    display: block;
  }
}
</style>

