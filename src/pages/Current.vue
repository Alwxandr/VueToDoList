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
            <tr v-for="(v,index) in listCurrent"  :key="index">
                <th scope="row">{{index + 1}}</th>
                <td>{{v.name}}</td>
                <td>{{v.description}}</td>
                <td>{{v.dateEnd}}</td>
                <td><button class="btn btn-outline-success" :rel="v.id" @click="editTask(v.id)">Завершить</button></td>

            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {db} from '../main'
    export default {

        data(){
            return{
                title:'Текущие',
            }
        },
        props: ['listCurrent'],
        methods : {
            editTask(id){
                db.collection('list').doc(id).update({ status : 1})
            }
        },
    }

</script>

<style scoped>

</style>