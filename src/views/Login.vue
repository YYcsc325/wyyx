<template>
  <div>
     <div id="container">
		<!-- logo图标 -->
		<div class=logo></div>
		<!-- 登录表单 -->
	  <div class="black">
	    <form action="data/login.php">
		   <table>
		    <tr>
			   <td>
			     <h4>欢迎登录</h4>
			   </td>
			   <td>
			     <p><a href="#">用户注册</a></p>
			   </td>	
			 	</tr>
		    <tr>
			   <td colspan="2"><hr></td>
			 	</tr>
		    <tr>
			   <td colspan="2">
			     <input type="text" class="my_width" placeholder="请输入您的用户名" id="uname" onpress.enter="doLogin" v-model="uname">
			   </td>
			 	</tr>
		    <tr>
			   <td colspan="2">
			     <input type="password" class="my_width" placeholder="请输入您的密码" id="upwd" onpress.enter="doLogin" v-model="upwd">
			   </td>
			 	</tr>
		    <tr>
			   <td>
            <div class=mg>
              <input type="checkbox" class="login">自动登录
            </div>
			   </td>
			   <td>
           <div class=mg>
              <a href="#">忘记密码？</a>
          </div> 
			   </td>
			  </tr>
		    <tr>
			   <td colspan="2">
			     <input type="submit" class="my_width" id="login"  value="登录" @click.prevent="doLogin">
			   </td>
			  </tr>
		   </table>
		 	</form>
	  </div> 
  </div>
  </div>
</template>
<script>
import "../assets/css/login.css";
import axios from "axios"; //引入axios模块
export default {
  data() {
    return {
      uname: "",
      upwd: ""
    };
  },
  components: {},
  methods: {
    doLogin() {
      var url = `http://127.0.0.1/data/user/login.php?uname=${this.uname}&upwd=${this.upwd}`;
      axios.get(url).then(data => {
          console.log(data);
          if (data.data.code == "200") {
            alert("登陆成功");
            this.$router.push("/");
          } else {
            alert("登陆失败，用户名或密码错误");
          }
        }).catch(err => {
          console.log("不能获取服务器程序");
        });
    }
  },
  computed: {},
  mounted() {}
};
</script>
<style scoped>
</style>
