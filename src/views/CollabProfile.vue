<template>
  <div>
    <Navbar/>
    <Profile/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar'
import Profile from '@/components/Profile'
export default {
  name: 'CollabProfile',
  components: {
    Navbar,
    Profile,
  }
}
</script>

<style>

</style>