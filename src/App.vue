<template>
  <div id="app">
    <div class="container">

      <nav class="navbar">
        <ul>
          <li><router-link to="/" active-class="active" exact >Все</router-link></li>
          <li><router-link to="/new" active-class="active">Новое задание</router-link></li>
          <li><router-link to="/current" active-class="active">Текущие дела</router-link></li>
          <li><router-link to="/plain" active-class="active">Запланированные</router-link></li>
          <li><router-link to="/completed" active-class="active">Выполненно</router-link></li>
        </ul>
      </nav>
      <router-view :listPlain="listPlain" :listCurrent="listCurrent" :taskList="taskList" :listCompleted="listCompleted" ></router-view>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import  MainComponent from './pages/Main'
import  CurrentTask from './pages/Current'
import  SheduledTask from './pages/Completed'
import  NewTask from './pages/New'

import {db} from './main'
export default {

  name: 'app',
  data () {
    return {
      msg: 'My toDo list',
        taskList: [],
    }
  },
    firestore(){
      return {
          taskList: db.collection('list')
      }
  },
  components : {
      MainComponent,
      CurrentTask,
      SheduledTask,
      NewTask
  },
  computed: {
      listPlain: function () {
          return this.taskList.filter(v => v.status === -1)
      },
      listCurrent: function () {
          return this.taskList.filter(v => v.status === 0)
      },
      listCompleted: function () {
          return this.taskList.filter(v => v.status === 1)
      },
  }
}
</script>

<style >
  .wrapper{
    margin: 15px auto;

  }
  h1  {
    text-align: center;
  }
  .navbar {
    background: aliceblue;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 60%;
  }
  ul {
    justify-content: center;
  }
  li {
    display: inline-block;
    margin-left: 15px;
  }
  li a {
    text-decoration: none;
    color: black;

  }
  li a:hover {
    color: grey;
  }
  .active {
    font-weight: bold;
  }
</style>
