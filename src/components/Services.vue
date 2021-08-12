<template>
  <div class="super-container">
      <div class="services-container">
          <div class="row">
              <div class="serviceName">
                  All our Collaborators
              </div>
          </div>
          <div class="row">
              <div class="service-card col-3"
                v-for="(collabs, item) in collaborators"
                :key="item"
              >
              <label></label>
              <div class="card" style="width: 18rem;">
                    <img src="../assets/Juan.png"  class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{collabs.name}} {{collabs.lastName}}</h5>
                        <p class="card-text">Service: {{collabs.profesion}}</p>
                        <p class="card-text">
                            <img class="star" src = "../assets/star.svg" />
                            <img class="star" src = "../assets/star.svg" />
                            <img class="star" src = "../assets/star.svg" />
                            <img class="star" src = "../assets/star.svg" />
                            <img class="star" src = "../assets/star.svg" />
                            ( {{collabs.cantidadPuntaje}} )</p>
                        <p class="card-text">{{collabs.descripcion}}</p>
                        <a href="#" class="btn btn-primary">Contact</a>
                    </div>
                </div>
                </div>
                
          </div>
          
      </div>
  </div>
</template>

<script>
import Collaborators from "../services/collaborators.service";
export default {
    name: "Services",
  data() {
    return {
        collaborators:[]
    };
  },
  created() {
    this.collab = new Collaborators();
  },
    async mounted() {
        try {
            await this.collab.obtenerColaboradores().then((data) => {
                console.log(data);
                this.collaborators = data;
            });
            
        } catch (error) {
                 console.log(error);
        }
  }
}

</script>

<style>

.card-img-top {
    max-height: 130px;
    width: 180px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
}
.services-container{
    padding-top: 125px;
    padding-left: 100px;
}
.card{
    min-height:334px;
}
.btn-primary {
    color: #fff;
    background-color: #EB9D02;
    border-color: #EB9D02;
}
.serviceName{
    font-size: 40px;
    font-weight: bold;
    margin-left: 15px;
    background-color: #EB9D02;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    margin-bottom: 20px;
}
.card-text{
    padding-left: 10px;
    text-align: left;
}
.star{
    height:17px;
    width: 17px;
    margin-right: 5px;
}
</style>