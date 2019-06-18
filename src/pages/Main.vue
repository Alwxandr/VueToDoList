<template>
    <div class="wrapper">
        <h1> {{title}} </h1>

        <table class="table" >
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Название</th>
                <th scope="col">Описание</th>
                <th scope="col">Срок выполнения</th>
                <th scope="col">Текущее состояние</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(v,index) in taskList" :key="index">
                <th scope="row">{{index + 1}}</th>
                <td>{{v.name}}</td>
                <td>{{v.description}}</td>
                <td>{{v.dateEnd}}</td>
                <td v-if="v.status === -1">Запланированно</td>
                <td v-else-if="v.status === 0">В работе</td>
                <td v-else-if="v.status === 1">Выполненно</td>
                <td ><button  class="btn btn-outline-danger" :rel="v.id" @click="delTask(v.id)">Удалить</button></td>
            </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
    import {db} from '../main.js'

    export default {
        data(){
            return {
                title:'Все дела',
                status: ''
            }
        },
        props:['taskList'],

        methods: {
            delTask(id){
                db.collection('list').doc(id).delete()
            }
        }
    }
</script>

<style scoped>

</style>