<template>
    <div>

        <div class="container-fluid py-5 HomeSearchWrap">
            <div class="row">
                <div class="container py-5">
                    <div class="row">
                        <div class="col-12 text-center text-white pb-5">
                            <h1><strong>Linearminds</strong> </h1>
                            <h2 class="text-blue"><strong>Hotel</strong></h2>
                        </div>
                    </div>



                </div>
            </div>
        </div>


        <browse-your-stay />


        <div class="container-fluid offer-section py-5 mt-3">
            <div class="row pt-4">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center text-white">
                            <h2><strong>Plan Ahead and Save</strong> </h2>
                            <h1>50% of your money<strong></strong></h1>
                            <p class="mt-4">Plan your trip a month before and get 50% OFF on your stay! <br> Terms & Conditions applied.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <explore-nearby />


        <div class="container-fluid grey lighten-5 pt-2 pb-5">
            <div class="container">
                <div class="row">
                        <div class="col-lg-12">
                            <h3 class="mb-4"><strong>Our Services</strong></h3>
                            <div class="row feature-box wow animated fadeIn">

                                <div class="col-6 col-sm-4 col-lg-2"
                                v-for="(item,index) in specials" :key="'special'+index">
                                    <div class="feature-item">
                                        <img :src="item.image" :alt="item.name">
                                        <h4>{{item.name}}</h4>
                                    </div>
                                </div>







                                <!--
                                <div class="col-6 col-sm-4 col-lg-2">
                                    <div class="feature-item">
                                        <img src="../assets/images/wifi.svg" alt="Alm 34 Free Wifi">
                                        <h4>Free WIFI</h4>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4 col-lg-2">
                                    <div class="feature-item">
                                        <img src="../assets/images/car-parking.svg" alt="Alm 34 Free Parking">
                                        <h4>Free Parking</h4>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4 col-lg-2">
                                    <div class="feature-item">
                                        <img src="../assets/images/breakfast-tray.svg" alt="Alm 34 Breakfast">
                                        <h4>Breakfast</h4>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4 col-lg-2">
                                    <div class="feature-item">
                                        <img src="../assets/images/reception.svg" alt="Alm 34 Breakfast">
                                        <h4>Self Checkin</h4>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4 col-lg-2">
                                    <div class="feature-item">
                                        <img src="../assets/images/hot-shower.svg" alt="Alm 34 Breakfast">
                                        <h4>Hot Water {{name}}</h4>
                                    </div>
                                </div>
                                -->
                            </div>
                        </div>
                    </div>
            </div>
        </div>


    </div>
</template>

<script>
    // array object
    import BrowseYourStay from "./Home/BrowseYourStay";
    import ExploreNearby from "./Home/ExploreNearby";
    export default {
        name: "Home",
        components: {ExploreNearby, BrowseYourStay},
        data : function () {
            return  {
                specials : [
                    { name : "24 x 7 Anreise", image : "../assets/images/open-24-hours.svg" },
                    { name : "Free WIFI", image : "../assets/images/wifi.svg"},
                    { name : "Free Parking", image : "../assets/images/car-parking.svg" },
                    { name : "Breakfast", image : "../assets/images/breakfast-tray.svg" },
                    { name : "Self Checkin", image : "../assets/images/reception.svg" },
                    { name : "Hot Water", image : "../assets/images/hot-shower.svg" },
                ],
                name : "Regimon Pathrose"
            }
        }
    }
</script>

<style scoped>

</style>