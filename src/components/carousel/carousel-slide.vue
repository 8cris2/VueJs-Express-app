<template>

  <div>

    <form id="slide_uploader" method="POST" @submit.prevent.stop="handleSubmitMethod">
      
      <div class="u-carousel-component">
        
        <transition-group name="fadeslide" class="o-carousel">
          <div class="col-lg-12 col-md-12 -col-sm-12 col-xs-12" v-for="(slide, index) in slideData" :key="slide">
            <span class="o-carousel__text"> {{ slide }} </span>
          </div>
        </transition-group>
        
        <div class="u-scroller">
          <div class="u-scroller__btn-wrap">
            <div class="u-scroller__btn-wrap--prev" @click="prev"> 
              <span class="carousel-control-prev-icon" aria-hidden="true"></span> 
            </div>
            <div class="u-scroller__btn-wrap--next" @click="next"> 
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </div>
          </div>
        </div>
        
      </div>
      
      <input :class="errorBorder" 
             class="form-control col-lg-6 col-md-6 col-sm-12 col-xs-12" 
             type="text" 
             name="slide_text"
             v-model="item.slideText" 
             placeholder="Enter text here"
             >
      
      
      <button class="submit" type="submit"> Submit </button>
      
      <transition name="fade" v-if="item.slideText === ''">
        <div class="error-message">
          {{ errorMessage }}
        </div>
      </transition>
      
      <transition name="fade" v-else>
        <div class="success-message">
          {{ successMessage }}
        </div>
      </transition>
      
    </form>
    
  </div>

</template>

<script type="text/javascript">
  import axios from 'axios'

  export default {
    name: 'carousel-slide',
    data() {
      return {
        slideData: [],
        item: {
          slideText: ''
        },
        errorMessage: '',
        successMessage: ''
      }
    },
    computed: {

    },
    created() {
      this.fetchCarousel();
    },
    methods: {
      prev() {
        const last = this.slideData.pop()
        this.slideData = [last].concat(this.slideData)
      },
      next() {
        const first = this.slideData.shift()
        this.slideData = this.slideData.concat(first)

      },
      fetchCarousel() {
        axios.get('http://localhost:3000/').then((response) => {

            console.log('response.data: ', response.data);
            this.slideData = response.data.Carousel;

          })
          .catch((error) => {
            console.log(error);
          });
      },
      saveCarousel() {
        axios.post('http://localhost:3000/', {
            body: this.item.slideText
          }).then(response => {
            this.fetchCarousel();
          })
          .catch((error) => {
            console.log(error);
          });
      },
      errorBorder() {
        this.item.slideText === '' ? 'error-border' : ''
      },
      handleSubmitMethod(e) {

        console.log(e);

        if (!this.item.slideText) {

          this.errorBorder;
          this.errorMessage = 'Please enter some text!';
          e.preventDefault();

        } else {

          this.saveCarousel();

          if (this.slideData.push(this.item.slideText)) {
            setInterval(() => {
              this.successMessage = 'Your slide was successfully added!';
            }, 200);
          }
          
        }

        // this.item.slideText = '';
        e.target.reset();

      }
    },
    components: {

    }

  }

</script>

<style lang="scss" scoped>
  /* bem naming conventions
  
    u - utility
    o - object
  
  */

  @mixin text-no-wrap {
    white-space: nowrap;
    transition: 0.3s;
  }

  .u-carousel-component {
    width: 100%;
    margin-bottom: 30px;
    border-radius: 10px;
    border: 10px solid gray;
    overflow: hidden;
  }

  .u-scroller {
    display: flex;
    justify-content: space-between;
    margin: 15px auto 0;
    padding: 15px;
    /* width: 120px; */
    background-color: #efefef;
    &__btn-wrap {
      display: flex;
      justify-content: space-between;
      width: 80px;
      margin: auto;
      &--next,
      &--prev {
        padding: 5px;
        line-height: 0;
        color: #FFFFFF;
        border-radius: 5px;
        background-color: seagreen;
        &:hover {
          background-color: lightseagreen;
          cursor: pointer;
        }
      }
    }
  }

  .o-carousel {
    display: flex;
    justify-content: space-between;
    height: auto;
    padding: 15px;
    text-align: center;
    overflow: hidden;
    &__text {
      width: 100%;
      font-size: 12vw;
      text-align: center;
      cursor: -webkit-grab;
      @include text-no-wrap;
    }
  }

  .form-control {
    margin-bottom: 30px;
  }

  .error-message {
    color: red;
    margin-bottom: 30px;
  }

  .success-message {
    color: limegreen;
    margin-bottom: 30px;
  }

  .error-border {
    border: 2px solid red;
  }

  .submit {
    padding: 8px 15px;
    margin-bottom: 10px;
    border: 0;
    border-radius: 5px;
    color: #FFFFFF;
    background-color: lightseagreen;
  } // vuejs transition classes start
  .fadeslide-enter-active,
  .fadeslide-leave-active {
    transition: all .5s;
  }

  .fadeslide-enter,
  .fadeslide-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter,
  .fade-leave-to
  /* .fade-leave-active below version 2.1.8 */

    {
    opacity: 0;
  } // vuejs transition classes end
  @media only screen and (min-width: 576px) and (max-width: 767px) {
    .o-carousel {
      &__text {
        font-size: 18vw;
        @include text-no-wrap;
      }
    }
  }

  @media only screen and (min-width: 321px) and (max-width: 575px) {
    .o-carousel {
      &__text {
        font-size: 25vw;
        @include text-no-wrap;
      }
    }
  }

  @media only screen and (max-width: 320px) {
    .o-carousel {
      &__text {
        font-size: 16vw;
        @include text-no-wrap;
      }
    }
  }

</style>
