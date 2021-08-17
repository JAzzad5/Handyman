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
                    <img  v-bind:src="collabs.img" class="card-img-top" alt="...">
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
                         <button  v-on:click="cargarimg(collabs.img)" class="btn btn-primary">
                            <router-link style="color: white; " :to="{ path: `CollabProfile/${collabs._id}`}"> Contact </router-link>
                         </button>
                            
                       
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
        collaborators:[],
        collabsImg:[
            'https://img.freepik.com/foto-gratis/hombre-constructor-feliz-positivo-chaleco-construccion-casco-seguridad-mirando-camara-sonriendo-alegremente-mostrando-pulgares-arriba-sobre-blanco_141793-109190.jpg?size=626&ext=jpg',
            'https://todoparaelconstructor.com/wp-content/uploads/todo-para-el-constructor.jpg',
            'https://static8.depositphotos.com/1002111/989/i/600/depositphotos_9899978-stock-photo-builder-shows-gesture-ok.jpg']
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
                let i =0;
                for (i = 0; i < this.collaborators.length; i++) { 
                    console.log(this.collaborators[i]);
                     this.collaborators[i]['img'] = this.collabsImg[i];
                }
                console.log(this.collabsImg);
                console.log("actualizados");
                console.log(this.collaborators);
            });
            
        } catch (error) {
                 console.log(error);
        }
  },
  methods:{
      async cargarimg(img){
          try {
               this.$cookie.delete('img');
               this.$cookie.set('img',img, { expires: '15m' });
          } catch (error) {
              
          }
         
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
.btn-primary, .btn-primary:hover, .btn-primary:active  {
    color: #fff;
    background-color: #EB9D02;
    border-color: #EB9D02;
    margin-right:auto; 
    margin-left:auto;
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