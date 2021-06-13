<template>
    <input type="text" v-model="nama">
    {{no}}
    <button @click="tambah">tamabah nomor</button>
    
  <div>{{ nama }}</div>
</template>

<script>
export default {
    name: "Pilputhello",
    data(){
        return({
            no: 0,
            nama:'asad'
        })
    },
    methods: {
        tambah(){
            this.no++
        }
    },
    mounted(){
        this.no++
    }
}
</script>

<style>

</style>