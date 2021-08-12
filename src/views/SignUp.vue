<template>
  <div>
    <Navbar/>
    <div class="login formRegistro">
      <form>
      <p class="txu"><b>Sign Up to get started</b></p><br>
      <div class="container">
        <div class="row">
          <div class="col-6">
           <p class="tx"><b>Name:</b></p>
            <div class="form-group">
              <input v-model="formRegistro.name" type="text" class="form-control" placeholder="Name" required="required">
            </div>
            <p class="tx"><b>Last Name:</b></p>
            <div class="form-group">
              <input v-model="formRegistro.lastName" type="text" class="form-control" placeholder="Last Name" required="required">
            </div>
            <p  class="tx"><b>Genero:</b></p>
            <select v-model="formRegistro.gender" class=" mb-3 form-control " required>
              <option selected value="0">Female</option>
              <option value="1">Male</option>
            </select>
            <p class="tx"><b>Ciudad:</b></p>
            <div class="form-group">
              <input v-model="formRegistro.city" type="text" class="form-control" placeholder="City" required="required">
            </div>
            <p class="tx"><b>Direccion:</b></p>
            <div class="form-group">
              <input v-model="formRegistro.address" type="text" class="form-control" placeholder="Address" required="required">
            </div>	
            <br>
          </div>
          <div class="col-6">
            <p class="tx"><b>Phone:</b></p>
            <div class="form-group">
              <input  v-model="formRegistro.phone" type="number" class="form-control" placeholder="Phone" required="required">
            </div>
            <p class="tx"><b>Email:</b></p>
            <div class="form-group">
              <input  v-model="formRegistro.email" type="email" class="form-control" placeholder="Email" required="required">
            </div>
            <p class="tx"><b>Password:</b></p>
            <div class="form-group">
              <input  v-model="formRegistro.password" type="password" class="form-control mb-5" placeholder="Password" required="required">
            </div>
            <div class="form-group">
              <div class="custom-control custom-radio mr-right">
                <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
                <label class="custom-control-label" for="customRadio1"> I agree with terms & conditions</label>
              </div>
             
            </div>
            <div class="form-group">
            <button class="btn btn-primary sign-btn mr-right" v-on:click="signup()" type="button">
              Sign Up
            </button>
            </div>
            
          </div>
        </div>
      </div>
      </form>
      
      <div class="img">
      <img src="../assets/constructor.png" width="200vw" alt="No hay nada">
      </div>
      
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar'
import SignUpService from "../services/signup.service";
export default {
  name: 'SignUp',
  data() {
    return {
      formRegistro:{
        status:1,
        registerDate:"",
      },
    }
  },
  components: {
    Navbar,
  },
  created() {
    this.SignUpService = new SignUpService();
  },
  methods: {
    async signup(){
      var f = new Date();
      this.formRegistro.registerDate = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
      console.log(this.formRegistro);

      try {
        await this.SignUpService.signup(this.formRegistro).then((data) => {
          if(data.ok === true ){
            console.log(data)
            this.redirectHome(data.uid,data.name,data.lastName)
            
          }
      else{
      console.log(data) 
      }
        });
      }
      catch (error) {
        console.log(error);
      }
    },
    async redirectHome(uid,name,lastName) {
        console.log
        this.$cookie.set('userId',uid, { expires: '15m' });
        this.$cookie.set('userName',name, { expires: '15m' });
        this.$cookie.set('userLName',lastName, { expires: '15m' });
        this.$router.push({
          path: '/',
        });
      },
  }
}
</script>

<style>
  
.card-body{
  color:#000;
  text-align: left;
}
.card-body h5{
  font-weight: bold;
}
.txu{
  font-size: 40px;
  
}
.tx {
    font-size: 18px;
    text-align: left;
    margin-left: 40px;
}
.form-control {
    font-size: 13px;
    border-radius: 10px;
    margin-left: 40px;
    width: 350px;
    height: 50px;
}
.radio{
margin-left: 40px;
}
.mr-right{
  margin-right: 170px;
}
.login {
    margin-top: 40px;
}

.sign-btn,  .l	ogin-btn:active {
	color: #fff;
	background: #EB9D02 !important;
	border: none;
  font-weight: bold;
  font-size:18px;
	border-radius: 10px;
	width: 250px;
	height: 50px;
}	

.sign-btn:hover, .sign-btn:focus {		
	color: #fff;
	background: #b97d03 !important;
}
.img{
	position: absolute;
	right: 20px;
	bottom: 0px;
}
</style>