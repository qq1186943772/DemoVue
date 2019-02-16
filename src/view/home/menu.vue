<template>
  <div class="div-layout">
    <Layout class="layout">
      <Sider hide-trigger class="Sider">
        <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']" class="sider-menu">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              Item 1
            </template>
            <MenuItem name="1-1"><router-link to="/user_list">用户列表</router-link></MenuItem>
            <MenuItem name="1-2">Option 2</MenuItem>
            <MenuItem name="1-3">Option 3</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>
              Item 2
            </template>
            <MenuItem name="2-1"><router-link to="/role_list">角色列表</router-link></MenuItem>
            <MenuItem name="2-2">Option 2</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>
              Item 3
            </template>
            <MenuItem name="3-1">Option 1</MenuItem>
            <MenuItem name="3-2">Option 2</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Layout :style="{padding: '0 24px 24px'}">
        <Breadcrumb :style="{margin: '24px 0'}">
          <p>菜单项</p>
        </Breadcrumb>
        <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import router from '@/router'
router.push({path: 'user_list'})
export default {
  name: 'menu'
}
</script>

<style scoped>
.div-layout,.layout{
  width: 100%;
  height: 100%;
}
.Sider{
  background: '#000';
  height: 100%;
}
.sider-menu{
  background: '#000';
  height: 100%;
}
</style>
