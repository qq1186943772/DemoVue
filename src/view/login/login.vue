<template>
    <Row class="row" type="flex" justify="center" align="middle">
      <i-col :xs="4" :sm="6" :md="8" :lg="9" style="height:100%"> &nbsp; </i-col>
      <i-col :xs="16" :sm="12" :md="8" :lg="6" class="login">
        <Card class="card">
          <i-form :model="form" :label-width="80">
            <Form-item label="输入框：">
              <i-input :value.sync="form.input" placeholder="请输入"></i-input>
            </Form-item>
            <Form-item label="选择器：">
              <i-select :value.sync="form.select" placeholder="请选择">
                <i-option value="shenzhen">深圳</i-option>
                <i-option value="wuhan">武汉</i-option>
              </i-select>
            </Form-item>
            <FormItem label="单选框：">
              <RadioGroup :model="form.radio">
                <Radio label="男"></Radio>
                <Radio label="女"></Radio>
                <Radio label="中"></Radio>
              </RadioGroup>
            </FormItem>
            <FormItem label="复选框：">
              <CheckboxGroup :model="form.checkbox">
                <Checkbox label="1"></Checkbox >
                <Checkbox label="2"></Checkbox >
                <Checkbox label="3"></Checkbox >
              </CheckBoxGroup>
            </FormItem>
            <FormItem label="switch：">
              <i-switch :model="form.switch" size="large">
                <span slot="open">open</span>
                <span slot="close">close</span>
              </i-switch>
            </FormItem>
            <FormItem label="滑块：">
              <Slider :model="form.silder" range></Slider >
            </FormItem>
            <FormItem label="文本域：">
              <Input :model="form.test" type="textarea" :autosize="{minRows: 2,maxRows: 5}" />
            </FormItem>
            <FormItem>
              <Button type="primary" :loading="isLoad">Submit</Button>
              <Button style="margin-left: 8px" v-on:click="login">Cancel</Button>
            </FormItem>
          </i-form>
        </Card>
      </i-col>
      <i-col :xs="4" :sm="6" :md="8" :lg="9" style="height:100%"> &nbsp; </i-col>
    </Row>
</template>

<script>
// import router from '@/router/index'
export default {
  name: 'login',
  data () {
    return {
      form: {
        input: '',
        select: '',
        silder: [0, 100]
      },
      isLoad: false
    }
  },
  methods: {
    login () {
      this.$router.push({name: 'home'})
    }
  }
}
</script>

<style>

  .row{
    width: 100%;
    height: 100%;
  }

  .login{
    background-color: #3399ff;
  }

  .card{
    width: 100%;
  }
</style>
