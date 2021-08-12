<template>
  <div>
    <Navbar/>
    <Services/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'

export default {
  name: 'AllServices',
  components: {
    Navbar,
    Services
  }
}
</script>

<style>
  
</style>