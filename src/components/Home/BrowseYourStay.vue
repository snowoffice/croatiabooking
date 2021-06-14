<template>
    <div class="container-fluid grey lighten-5 py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h3 class="mb-4"><strong>Browse your stay</strong></h3>
                    <div class="row feature-box wow animated fadeIn">
                       <browse-your-stay-card
                               v-for="(item,index) in stays" :key="'stays'+index"
                               :title="item.title" :total="item.total" :image="item.image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BrowseYourStayCard from "./BrowseYourStayCard";
    export default {
        name: "BrowseYourStay",
        components: {BrowseYourStayCard},
        data : function () {
            return {
                stays : [
                    { title : "Hotels", total : "6345", image : "browse-1.jpg" },
                    { title : "Resorts", total : "434", image : "browse-2.jpg" },
                    { title : "Apartments", total : "3", image : "browse-3.jpg" },
                    { title : "Villas", total : "787", image : "browse-4.jpg" },
                ]
            }
        }
    }
</script>

<style scoped>

</style>