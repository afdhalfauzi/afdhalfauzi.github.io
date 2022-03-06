<template>
  <div class="home-container flex flex-column">
    <!-- Introduction section -->
    <div class="self-introduction flex">
      <div class="about-section flex flex-column" >
          <div class="greet">
            <div class="flex name">
              <h1>Hi all, I'm {{firstName}} {{lastName}}</h1>
            </div>
            <span class="nick-name">( {{grettings.nickName}} )</span>
          </div>
          <div class="introduction">
            <h2>{{grettings.subTitle}}</h2>
          </div>
          <div class="social-links">
            <ul class="social-list flex">
              <a :href="links.github" target="_blank">
                <li class="social-list"><img src="../assets/github.png"></li>
              </a>
              <a :href="links.gitlab" target="_blank">
                <li class="social-list"><img src="../assets/gitlab.png"></li>
              </a>
              <a :href="links.linkedin" target="_blank">
                <li class="social-list"><img src="../assets/linkedin.png"></li>
              </a>
              <a :href="links.instagram" target="_blank">
                <li class="social-list"><img src="../assets/instagram.png"></li>
              </a>
              <a :href="links.facebook" target="_blank">
                <li class="social-list"><img src="../assets/facebook.png"></li>
              </a>
              <a :href="links.whatsapp" target="_blank">
                <li class="social-list"><img src="../assets/whatsapp.png"></li>
              </a>
              <a :href="`mailto:${links.gmail}`">
                <li class="social-list"><img src="../assets/gmail.png"></li>
              </a>
            </ul>
          </div>
          <div class="buttons">
            <button class="resume">
              <a :href="links.resume" target="_blank">
                See My Resume
              </a>
            </button>
          </div>
      </div>
      <div class="pasphoto">
          <img src="../assets/pasphoto.jpg" alt="myPhoto">
      </div>
    </div>
    <!-- Education section -->
    <education></education>
    <!-- Experiences section -->
    <experiences></experiences>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Education from '../components/Education.vue';
import Experiences from '../components/Experiences.vue';

export default {
  components: {
    Education,
    Experiences,
  },
  computed: {
    ...mapState(['grettings', 'firstName', 'lastName', 'links']),
  },
  methods: {
  },
};
</script>

<style scoped>
  .home-container {
    margin-top: 20px;
    margin-left: 10%;
    margin-right: 10%;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
  }
  .about-section {
    width: 80%;
    margin-top: 50px;
  }
  .pasphoto img{
    border-radius: 50%;
    width: 60%;
    float: right;
    margin-top: 50px;
    box-shadow: 10px 10px 5px black;
  }

  .greet {
    margin-bottom: 20px;
  }
  .introduction h2 {
    font-size: 1.1rem;
    line-break: auto;
    text-overflow: clip;
    line-height: 1.5;
    font-weight: normal;
  }
  .name {
    align-items: center;
  }
  .name h1 {
    font-size: 3rem;
  }
  .introduction {
    margin-bottom: 20px;
  }
  .nick-name {
    margin-top: 20px;
    font-size: 1.3rem;
  }
  .social-list {
    text-decoration: none;
    list-style: none;
  }
  .social-list a {
    color: #fff;
    text-decoration: none;
    margin-right: 10px;
  }
  .social-list a li img {
    fill: white;
    width: 35px;
    height: 35px;
  }
  .buttons {
    margin-top: 20px;
  }
  .resume {
    border: 1px solid #55198b;
    background-color: #55198b;
    padding: 12px 15px;
    border-radius: 5px;
  }
  .resume a {
    font-weight: 700;
    text-decoration: none;
    color: white;
    font-size: 1.1rem;
    letter-spacing: 1px;
  }
</style>
