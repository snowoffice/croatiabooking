<template>
    <div class="col-12 col-sm-3 mb-4">
        <a href="#" class="d-flex">
            <img src="../../assets/images/nearby-1.jpg" width="100" />
            <div class="justify-content-center ps-3 pt-3">
                <h6 class="text-black mb-0"><strong>{{city}}</strong></h6>
                <small class="text-black">{{distance}}</small>
            </div>
        </a>
    </div>
</template>

<script>
    export default {
        props : {
            city : String,
            distance : String
        },
        name: "ExploreNearbyCard"
    }
</script>

<style scoped>
    small {
        font-size: 80%;
        font-weight: 400;
    }
</style>