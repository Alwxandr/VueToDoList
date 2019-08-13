<template>
    <div class="wrapper">
        <h1>{{title}}</h1>
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
            <tr v-for="(v,index) in listPlain"  :key="index">
                <th scope="row">{{index + 1}}</th>
                <td>{{v.name}}</td>
                <td>{{v.description}}</td>
                <td>{{v.dateEnd}}</td>
                <td><button class="btn btn-outline-primary" :rel="v.id" @click="editTask(v.id)">Приступить к выполнению</button></td>
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
                title: 'Запланированно',
            }
        },
        props:['listPlain'],

        methods: {
            editTask(id){
                db.collection('list').doc(id).update({ status : 0})
            },
        }
    }
</script>

<style scoped>

</style>