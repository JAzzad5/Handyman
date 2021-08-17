<template>
  <div>
    <Navbar/>
    <Login/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar'
import Login from '@/components/Login'

export default {
  name: 'Log-in',
  components: {
    Navbar,
    Login,
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
</style>