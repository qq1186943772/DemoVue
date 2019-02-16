<template>
  <div class="layout">
    <Layout class="home-layout">
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
              <MenuItem name="1">
                <Icon type="ios-navigate"></Icon>
                <router-link to="/system_menu">系统管理</router-link>
              </MenuItem>
              <MenuItem name="2">
                <Icon type="ios-keypad"></Icon>
                Item 2
              </MenuItem>
              <MenuItem name="3">
                <Icon type="ios-analytics"></Icon>
                Item 3
              </MenuItem>
              <MenuItem name="4">
                <Icon type="ios-paper"></Icon>
                Item 4
              </MenuItem>
            </div>
        </Menu>
      </Header>
      <Layout class="conter-layout">
        <router-view></router-view>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import router from '@/router'
router.push({path: 'system_menu'})
export default {
  name: 'home'
}

</script>

<style scoped>
.layout{
  width: 100%;
  height: 100%;
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo{
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav{
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}

.home-layout,.conter-layout{
  width: 100%;
  height: 100%;
}
</style>
