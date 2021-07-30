<template>
  <div>
    <Navbar/>
    <Carousel/>
    <Cards/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar'
import Carousel from '@/components/Carousel'
import Cards from '@/components/Cards'

export default {
  name: 'Landing',
  components: {
    Navbar,
    Carousel,
    Cards,
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