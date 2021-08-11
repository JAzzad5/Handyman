<template>
<div class="row">
    <div class="column">
		<br><br><br><br><br><br><br><br><p class="logo"><img src="/icon.png" alt="">
		<b>Handyman</b></p>
  	</div>
  <div class="column">
		<div class="login action-form">
    		<form action="/examples/actions/confirmation.php" method="post">
        	<p class="txu"><b>Login to your account</b></p><br>
          	<div class="form-group">
				<p class="tx"><b>Email:</b></p>
            	<input v-model="formLogin.email" type="email" class="form-control" placeholder="email" required="required">
          	</div>	
        	<div class="form-group">
				<br><p class="tx"><b>Password:</b></p>
            	<input  v-model="formLogin.password" type="password" class="form-control" placeholder="Password" required="required">
        	</div>
        	<br>
			<button class="btn btn-primary login-btn" v-on:click="login()" type="button">
              Login
            </button>
			<br><br>
			<input type="submit" class="btn btn-primary sign-btn" value="Sign up">
        	<div class="text-center mt-2">
         		<a href="#">Forgot Your password?</a>
        	</div>
			</form>
		</div>
	</div>
</div>

</template>

<script>

import LoginService from "../services/login.service";
export default {
  name: 'Login',
  data() {
    return {
		formLogin: {
        email: "",
        password: "",
      },
    };
  },
  created() {
    this.loginService = new LoginService();
  },
	methods: {
    async login() {
		console.log(this.formLogin);
      try {
        await this.loginService.login(this.formLogin).then((data) => {
          if(data.ok === true ){
			console.log(data)
			this.$cookie.set('userId',data.uid, { expires: '15m' });
            this.$cookie.set('userName',data.name, { expires: '15m' });
            this.$cookie.set('userLName',data.lastName, { expires: '15m' });
            this.redirectLanding();
          }
		  else{
			 console.log(data) 
		  }
        });
      } catch (error) {
        console.log(error);
      }
    },
	redirectLanding() {
      this.$router.push({
        path: '/',
      });
    },
	},
 
};
</script>

<style>
.txu{
	font-size: 4vh;
	text-align: center;
}

.tx{
	font-size: 2vh;
	text-align: left;
	display: block;
	margin-left: 15vw;
}

.row:after {
	content: "";
	display: table;
	clear: both;
}

.column {
	float: left;
	width: 50%;
	height: 100%;
}
.logo{
	margin-top: 10vw;
	color: #EB9D02;
	font-size: 4vw;
}

.form-control {
	font-weight: 70vw;
	font-size: 13px;
	border-radius: 1vh;
	width: 20vw;
	height: 5vh;
	display: block;
	margin-left: 15vw;
}

.login {
	color: rgb(0, 0, 0);
	font-weight: normal;
	border-radius: 1px;
	border-color: #e5e5e5;
	margin-top: 10vw;
}

.login-btn,  .l	ogin-btn:active {
	color: #fff;
	background: #EB9D02 !important;
	border: none;
	border-radius: 1vh;
	width: 20vw;
	height: 5vh;
}	

.login-btn:hover, .login-btn:focus {		
	color: #fff;
	background: #EB9D02 !important;
}

.sign-btn,  .sign-btn:active {
	color: #fff;
	background: #000000bb !important;
	border: none;
	border-radius: 1vh;
	width: 20vw;
	height: 5vh;
}	

.sign-btn:hover, .sign-btn-btn:focus {		
	color: #fff;
	background: #000000 !important;
}

@media (min-width: 1200px){
	.form-inline .input-group {
		width: 300px;
		margin-left: 30px;
	}
}
@media (max-width: 768px){
	.navbar .dropdown-menu.action-form {
		width: 100%;
		padding: 10px 15px;
		background: transparent;
		border: none;
	}
	.navbar .form-inline {
		display: block;
	}
	.navbar .input-group {
		width: 100%;
	}
}
</style>