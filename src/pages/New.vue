<template>
    <div class="wrapper">
        <h1> {{title}} </h1>
        <form @submit.prevent="onSubmit">
            <div class="form-group">
                <label for="name">Название задания</label>
                <input type="text" id="name" class="form-control " :class="{'is-invalid':$v.name.$error}" v-model="name" @blur="$v.name.$touch()">
                <div v-if="!$v.name.required" class="invalid-feedback">Обязательное поле</div>
                <div v-if="!$v.name.minLength" class="invalid-feedback">Минимум 4 символа</div>

                <label for="description">Описание задания</label>
                <input type="text" id="description" class="form-control " :class="{'is-invalid':$v.description.$error}" v-model="description" @blur="$v.description.$touch()">
                <div v-if="!$v.description.required" class="invalid-feedback">Обязательное поле</div>
                <div v-if="!$v.description.minLength" class="invalid-feedback">Минимум 15 символов</div>

                <label for="dateEnd">Дата завершения</label>
                <input placeholder="Дата в формате DD/MM/YYYY" type="text" id="dateEnd" class="form-control " :class="{'is-invalid':$v.dateEnd.$error}" v-model="dateEnd" @blur="$v.dateEnd.$touch()">
                <div v-if="!$v.dateEnd.required" class="invalid-feedback">Обязательное поле</div>
                <div v-if="!$v.dateEnd.validDate" class="invalid-feedback">Дата в формате DD/MM/YYYY</div>
            </div>
            <button class="btn btn-success" type="submit" :disabled="$v.$invalid">Добавить задание</button>
        </form>

    </div>
</template>

<script>
    import { required, minLength } from 'vuelidate/lib/validators'
    import {db} from '../main'

    export default {
        data(){
            return{
                title:'Новое задание',
                name: '',
                description: '',
                dateEnd: '',
                status: -1,
                taskList: []
            }
        },
        firestore(){
            return {
                taskList: db.collection('list')
            }
        },
        methods: {
            onSubmit (){
                const task = {
                    name: this.name,
                    description: this.description,
                    dateEnd : this.dateEnd,
                    status : -1
                }

                db.collection('list').add( task );

                this.name = '';
                this.description = '';
                this.dateEnd = '';
                alert("Задание добавлено")
            },
        },
        validations: {
            name: {
                required,
                minLength: minLength(4)
            },
            description:{
                required,
                minLength: minLength(15)

            },
            dateEnd : {
                required,
                validDate: function (str) {
                    let result = str.match(/(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/);
                    let res;
                    result ? res= true: res = false;
                    return res
                }
            }
        }
    }
</script>

<style scoped>

</style>