<template>
  <div>
    <Navbar/>
    <Carousel/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar'
import Carousel from '@/components/Carousel'

export default {
  name: 'Landing',
  components: {
    Navbar,
    Carousel
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