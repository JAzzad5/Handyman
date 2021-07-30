<template>
      
    <div class="carousel-container">
      <div class="welcome-text">
        Your best choice for <b>repair</b> and <b>construction</b> services!
      </div>    
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/tipos-de-obra-construccion.jpg" class="d-block w-100" alt="img-1">
          </div>
          <div class="carousel-item">
            <img src="../assets/construccion-2.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/construccion-3.jpg" class="d-block w-100" alt="...">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      
      
  </div>
</template>

<script>
export default {
    name: 'Carousel',

}

</script>

<style>
.carousel-item{
  max-width: 100%;
}

.carousel-container{
  align-content: center;
  margin-top: 50px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.carousel-inner{
      height: 450px;
}

.carousel-item {
    text-align: center;
}

.carousel-item img {
    width: 100%;
    object-fit: cover;
}
.welcome-text{
  text-align: left;
  font-size: 40px;
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
  margin-bottom: 10px;

}

.welcome-text b {
	color: #EB9D02;		
}
</style>