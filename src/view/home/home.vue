<template>
  <div class="layout">
    <Layout class="home-layout">
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
              <MenuItem name="1">
                <Icon type="ios-navigate"></Icon>
                Item 1
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
        <Sider hide-trigger class="Sider">
          <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']" class="sider-menu">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                Item 1
              </template>
              <MenuItem name="1-1"> <router-link to="/user_list">用户列表</router-link></MenuItem>
              <MenuItem name="1-2">Option 2</MenuItem>
              <MenuItem name="1-3">Option 3</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                Item 2
              </template>
              <MenuItem name="2-1">Option 1</MenuItem>
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
    </Layout>
  </div>
</template>

<script>
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
.Sider{
  background: '#000';
  height: 100%;
}
.sider-menu{
  background: '#000';
  width: 100%;
  height: 100%;
}
.conter-layout{
  width: 100%;
  height: 100%;
}
.home-layout{
  width: 100%;
  height: 100%;
}
</style>
