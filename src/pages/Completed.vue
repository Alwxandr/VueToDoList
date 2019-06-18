<template>
    <div class="wrapper">
        <h1> {{title}} </h1>

        <table class="table" >
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Название</th>
                <th scope="col">Описание</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(v,index) in listCompleted"  :key="index">
                <th scope="row">{{index + 1}}</th>
                <td>{{v.name}}</td>
                <td>{{v.description}}</td>
                <td ><button class="btn btn-outline-danger"  :rel="v.id" @click="delTask(v.id)">Удалить</button></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {db} from '../main'
    export default {
        data(){
            return {
                title: 'Завершенные',
            }
        },
        props:['listCompleted'],

        methods: {
            delTask(id){
                db.collection('list').doc(id).delete()
            }
        }
    }
</script>

<style scoped>

</style>