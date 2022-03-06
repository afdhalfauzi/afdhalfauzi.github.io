<template>
  <div class="projects">
    <h1 class="project-heading">My Project</h1>
    <div class="project-con">
      <div class="project-card" v-for="(project,index) in projects" :key="project.id">
        <a :href="project.gitHubLink" target="_blank">
          <div class="project-card-div">
            <div class="project-div-heading">
              <h3>{{project.projectName}}</h3>
            </div>
            <img :src="project.image" class="project-image" width="100%" alt="project_image">
            <div class="project-desc">
              <span>{{project.projectDescp}}</span>
            </div>
            <div class="tech-stack flex">
              <div class="tech flex" v-for="(tech) in projects[index].projectTech" :key="tech">
                <div class="circle"></div>
                <span>{{tech}}</span>
            </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="more-project flex">
      <a :href="links.github">
        <button class="button">More Projects</button>
      </a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['projects', 'links']),
  },
};
</script>

<style scoped>
  .projects {
    margin-top: 20px;
    margin-left: 10%;
    margin-right: 10%;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    min-height: 100vh;
  }
  .project-heading {
    font-size: 3rem;
    font-weight: bold;
    line-height: normal;
  }
  .project-con {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 1rem 1rem;
    gap: 1rem 1rem;
  }
  .project-card-div {
    background-color: #171c28;
    color:#fff;
    box-shadow: 0 10px 30px -15px rgb(0  0 0 / 20%);
    padding: 2rem;
    cursor: pointer;
  }
  .project-card-div:hover {
    background-color: #55198b;
    border-radius: 5px;
    transition: 0.3s;
    box-shadow: 0px 0px 4px 4px  #fff, 0px 0px 4px 4px #fff;
  }
  a {
    text-decoration: none;
  }
  .project-image{
    margin-top: 5px;
    border-radius: 2%;
  }
  .project-div-heading {
    font-weight: bold;
    font-size: 1.5rem;
  }
  .project-desc {
    margin-top: 15px;
  }
  .more-project {
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }
  .button {
    cursor: pointer;
    font-size: 1.2rem;
    padding: 10px 20px;
    background-color: #55198b;
    color: #fff;
    border: 1px solid #55198b;
    border-radius: 5px;
  }
  .tech-stack {
    margin-top: 15px;
  }
  .tech-stack span {
    margin-right: 10px;
    font-size: 0.7rem;
    font-weight: bold;
  }
  .tech {
    justify-content: center;
    align-items: center;
  }
  .circle {
    margin-right: 5px;
    background-color: yellow;
    padding-top: 1px;
    padding-bottom: 1px;
    padding-left: 5px;
    padding-right: 5px;
    height: 10px;
    border-radius: 50%;
  }
</style>
