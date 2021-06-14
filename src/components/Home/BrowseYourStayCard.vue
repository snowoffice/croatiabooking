<template>
    <div class="col-6 col-sm-3 mb-4 mb-sm-0">
        <a href="#">
            <img :src="image" />
            <h5 class="text-black mt-2">{{title}}</h5>
            <h6 class="text-light-gray mt-2">{{total}} {{title}}</h6>
        </a>
    </div>
</template>

<script>
    import image from "../../assets/images/browse-1.jpg"

    export default {
        props : {
            title : String,
            total : String,
        },
        data : function () {
            return {
                image: image
            }
        },
        name: "BrowseYourStayCard"
    }
</script>


<style scoped>

</style>