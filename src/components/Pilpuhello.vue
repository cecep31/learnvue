<template>
    <input type="text" v-model="nama">
    <div v-for="user in user" :key="user.id">{{user.nama}}</div>
    <img alt="Vue logo" class="transform transition duration-150 cursor-pointer" src="../assets/logo.png">
    <img src="../assets/sdaaa.png" class="spin-slow mb-36 animate-spin mx-auto cursor-pointer w-12" alt="">
    <div class="flex-container mt-36">
        <div class="nomor">{{no}}</div>
        <button @click="tambah" class="text-white font-bold p-2 bg-purple-600 rounded-sm shadow-lg">tamabah nomor</button>
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
            this.no = this.no+222222
        }
    },
    mounted(){
        axios.get("http://localhost:3000/users")
        .then(res=>{
            this.user = res.data
        })
        setInterval(()=>{
            this.no = this.no+5
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