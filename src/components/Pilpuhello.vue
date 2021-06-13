<template>
    <input type="text" v-model="nama">
    <div v-for="user in user" :key="user.id">{{user.nama}}</div>
    <div class="flex-container">
        <div class="nomor">{{no}}</div>
        <button @click="tambah">tamabah nomor</button>
    </div>
    

    
  <div>{{ nama }}</div>
</template>

<script>
import 'axios'
import axios from 'axios'

export default {
    setup(){

    },
    name: "Pilputhello",
    data(){
        return({
            no: 0,
            nama:'cecep',
            user: []
        })
    },
    methods: {
        tambah(){
            this.no++
        }
    },
    mounted(){
        axios.get("http://localhost:3000/users")
        .then(res=>{
            this.user = res.data
        })
        setInterval(()=>{
            this.no++
        },200)
    }
}
</script>

<style>
    .flex-container{
        justify-content: center;
        margin: auto;
        display: flex;
    }
    .nomor{
        margin-right: 12px;
    }
</style>