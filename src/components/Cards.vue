<template>
      
    <div class="cards-container ">      
        <div class="promo">
        <div class="container">
            <div class="row">
            <div class="col">
                <div class="section_title_container text-center">
                <div class="section_title">Conoce nuestros servicios</div>
                </div>
            </div>
            </div>
            <div class="row promo_container">
            <!-- Actividad Item -->
            <div class="col-lg-4 col-md-6 col-sm-6 col-12 promo_col">
                <div class="promo_item">
                <div class="promo_image">
                    <img src="../assets/electric.svg" alt="" />
                </div>
                <div class="promo_link">
                    <a>Ver actividades artisticas</a>
                </div>
                </div>
            </div>

            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cards',

}

</script>

<style>
.section_title{
  text-align: center;
  font-size: 40px;
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
  margin-bottom: 10px;
}
.promo {
  padding-top: 88px;
}
.promo_container {
  margin-top: 75px;
}

.promo_col {
  border-radius: 15px;
  margin-bottom: 15px;
}

.promo_item {
  width: 90%;
}
.promo_image {
    background-color: #EB9D02;
    color: white;
  width: 100%;
}
.promo_image img {
  width: 50%;
  height: 200px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  box-sizing: content-box;
}
.promo_link {
  width: 100%;
  height: 60px;
  background: #aaa8a899;
  text-align: center;
  color: black;
  cursor: pointer;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.promo_link a {
  display: block;
  font-family: "Lucida", serif;
  font-size: 18px;
  color: #ffffff;
  line-height: 60px;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.promo_link:hover {
  background: #a9a7a7;
}

.promo_content {
  position: absolute;
  top: 43.6%;
  z-index: 1;
}

</style>