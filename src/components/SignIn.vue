<template>
	<div class="login action-form">
		<form action="/examples/actions/confirmation.php" method="post">
		<p class="txu"><b>Sign Up to get started</b></p><br>
		<p class="tx"><b>Email:</b></p>
		<div class="form-group">
			<input type="text" class="form-control" placeholder="Username" required="required">
		</div>	
		<br><p class="tx"><b>Password:</b></p>
		<div class="form-group">
			<input type="password" class="form-control" placeholder="Password" required="required">
		</div>
		<label><input type="radio" name="Eula" value="eula">  I agree with terms & conditions</label><br>
		<br><input type="submit" class="btn btn-primary sign-btn " value="Sign Up"><br><br>
		<div class="img">
		<img src="../assets/constructor.png" width="200vw" alt="No hay nada">
		</div>
		</form>
	</div>

</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
    };
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
	margin-left: 40vw;
}

.logo{
	margin-top: 10vw;
	color: #EB9D02;
	font-size: 4vw;
}

.img{
	position: absolute;
	right: 0px;
	bottom: 0px;
}

.form-control {
	font-weight: 70vw;
	font-size: 13px;
	border-radius: 1vh;
	margin-left: 40vw;
	width: 20vw;
	height: 5vh;
	display: block;
}

.login {
	color: rgb(0, 0, 0);
	font-weight: normal;
	border-radius: 1px;
	border-color: #e5e5e5;
	margin-top: 10vw;
}

.sign-btn,  .l	ogin-btn:active {
	color: #fff;
	background: #EB9D02 !important;
	border: none;
	border-radius: 1vh;
	width: 20vw;
	height: 5vh;
}	

.sign-btn:hover, .sign-btn:focus {		
	color: #fff;
	background: #EB9D02 !important;
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