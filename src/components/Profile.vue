<template>
    <div>
        <div class="container">
    <div class="main-body">
          <!-- /Breadcrumb -->
    
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img :src="img" alt="Admin" class="rounded-circle" width="180" height="180">
                    <div class="mt-3">
                      <h4>{{this.user.name}} {{this.user.lastName}}</h4>
                      <p class="card-text">
                            <img class="star" src = "../assets/star.svg" />
                            <img class="star" src = "../assets/star.svg" />
                            <img class="star" src = "../assets/star.svg" />
                            <img class="star" src = "../assets/star.svg" />
                            <img class="star" src = "../assets/star.svg" />
                            ( {{this.user.cantidadPuntaje}} )</p>
                      <p class="text-secondary mb-1">{{this.user.profesion}}</p>
                      <p class="text-muted font-size-sm">{{this.user.address}}</p>
                      <button class="btn btn-primary">Contact</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-3">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                    <span class="text-secondary">@bootdey</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                    <span class="text-secondary">bootdey</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                    <span class="text-secondary">bootdey</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                     {{this.user.name}} {{this.user.lastName}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{this.user.email}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{this.user.phone}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">City</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{this.user.city}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{this.user.address}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Description</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{this.user.descripcion}}
                    </div>
                  </div>
                </div>
              </div>
                <div class="row d-flex justify-content-center">
                        <div class="col-md-12">
                            <div class="headings d-flex justify-content-between align-items-center mb-3">
                                <h5>Comments(3)</h5>
                            </div>
                            <div class="card p-3">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="user d-flex flex-row align-items-center"> <img src="https://i.imgur.com/hczKIze.jpg" width="30" class="user-img rounded-circle mr-2"> <span><small class="font-weight-bold text-primary">james_olesenn</small> <small class="font-weight-bold">He did a fantastic job last week</small></span> </div> <small>2 days ago</small>
                                </div>
                                <div class="action d-flex justify-content-between mt-2 align-items-center">
                                    <div class="reply px-4"> <small>Remove</small> <span class="dots"></span> <small>Reply</small> <span class="dots"></span> <small>Translate</small> </div>
                                    <div class="icons align-items-center"> <i class="fa fa-star text-warning"></i> <i class="fa fa-check-circle-o check-icon"></i> </div>
                                </div>
                            </div>
                            <div class="card p-3 mt-2">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="user d-flex flex-row align-items-center"> <img src="https://i.imgur.com/C4egmYM.jpg" width="30" class="user-img rounded-circle mr-2"> <span><small class="font-weight-bold text-primary">olan_sams</small> <small class="font-weight-bold">very good service I will recommend it</small></span> </div> <small>3 days ago</small>
                                </div>
                                <div class="action d-flex justify-content-between mt-2 align-items-center">
                                    <div class="reply px-4"> <small>Remove</small> <span class="dots"></span> <small>Reply</small> <span class="dots"></span> <small>Translate</small> </div>
                                    <div class="icons align-items-center"> <i class="fa fa-check-circle-o check-icon text-primary"></i> </div>
                                </div>
                            </div>
                            <div class="card p-3 mt-2">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="user d-flex flex-row align-items-center"> <img src="https://i.imgur.com/0LKZQYM.jpg" width="30" class="user-img rounded-circle mr-2"> <span><small class="font-weight-bold text-primary">rashida_jones</small> <small class="font-weight-bold">The price was fair and the work was on time.</small></span> </div> <small>3 days ago</small>
                                </div>
                                <div class="action d-flex justify-content-between mt-2 align-items-center">
                                    <div class="reply px-4"> <small>Remove</small> <span class="dots"></span> <small>Reply</small> <span class="dots"></span> <small>Translate</small> </div>
                                    <div class="icons align-items-center"> <i class="fa fa-user-plus text-muted"></i> <i class="fa fa-star-o text-muted"></i> <i class="fa fa-check-circle-o check-icon text-primary"></i> </div>
                                </div>
                            </div>
                            
                        </div>
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
    name: "Profile",
    data() {
    return {
        user:[],
        id: this.$route.params.id,
        img: '',
    };

    
  },
  created() {
    this.collab = new Collaborators();
    this.img = this.$cookie.get('img');
  },
    async mounted() {
        try {
          await this.collab.obtenerColaborador(this.id).then((data) => {
                console.log(data);
                this.user = data[0];
                console.log(this.user);
            });
        }   catch (error) {
                console.log(error);
        }
  }
}
</script>

<style>

body{
    color: #1a202c;
    text-align: left;
    background-color: #e2e8f0;    
}
.main-body {
    padding: 15px;
}
.card {
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0,0,0,.125);
    border-radius: .25rem;
}
.star{
    height:17px;
    width: 17px;
    margin-right: 5px;
}
.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1rem;
}

.gutters-sm {
    margin-right: -8px;
    margin-left: -8px;
}

.gutters-sm>.col, .gutters-sm>[class*=col-] {
    padding-right: 8px;
    padding-left: 8px;
}
.mb-3, .my-3 {
    margin-bottom: 1rem!important;
}

.bg-gray-300 {
    background-color: #e2e8f0;
}
.h-100 {
    height: 100%!important;
}
.shadow-none {
    box-shadow: none!important;
}
.btn-primary, .btn-primary:active {
	color: #fff;
	background: #EB9D02 !important;
	border: none;
    border-color: none;
}	

.btn-primary:hover, .btn-primary:focus {		
	color: #fff;
	background: #EB9D02 !important;
     border-color: none;
}
</style>