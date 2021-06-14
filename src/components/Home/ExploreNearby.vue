<template>

    <div class="container-fluid grey lighten-5 py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h3 class="mb-4"><strong>Explore Nearby</strong></h3>
                    <div class="row">
                        <explore-nearby-card city="Dubrovnik" distance="20 Minutes Drive" />
                        <explore-nearby-card city="Zagreb" distance="1 Hour Drive" />
                        <explore-nearby-card city="Zadar" distance="1.5 Hours Drive" />
                        <explore-nearby-card city="Pula" distance="2 Hours Drive" />
                        <explore-nearby-card city="Vienna" distance="2.5 Hours Drive" />
                        <explore-nearby-card city="Salzburg" distance="3 Hours Drive" />
                        <explore-nearby-card city="Innsbruck" distance="4 Hours Drive" />
                        <explore-nearby-card city="Graz" distance="5.5 Hours Drive" />
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!--<div class="container-fluid grey lighten-5 py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h3 class="mb-4"><strong>Explore Nearby</strong></h3>
                    <div class="row">
                        <div class="col-12 col-sm-3 mb-4">
                            <a href="#" class="d-flex">
                                <img src="<?php echo base_url('static/images/nearby-1.jpg') ?>" width="100" />
                                <div class="justify-content-center pl-3 pt-3">
                                    <h6 class="black-text mb-0"><strong>Dubrovnik</strong></h6>
                                    <small class="black-text">20 Minutes Drive</small>
                                </div>
                            </a>
                        </div>
                        <div class="col-12 col-sm-3 mb-4">
                            <a href="#" class="d-flex">
                                <img src="<?php echo base_url('static/images/nearby-2.jpg') ?>" width="100" />
                                <div class="justify-content-center pl-3 pt-3">
                                    <h6 class="black-text mb-0"><strong>Zagreb</strong></h6>
                                    <small class="black-text">1 Hour Drive</small>
                                </div>
                            </a>
                        </div>
                        <div class="col-12 col-sm-3 mb-4">
                            <a href="#" class="d-flex">
                                <img src="<?php echo base_url('static/images/nearby-3.jpg') ?>" width="100" />
                                <div class="justify-content-center pl-3 pt-3">
                                    <h6 class="black-text mb-0"><strong>Zadar</strong></h6>
                                    <small class="black-text">1.5 Hours Drive</small>
                                </div>
                            </a>
                        </div>
                        <div class="col-12 col-sm-3 mb-4">
                            <a href="#" class="d-flex">
                                <img src="<?php echo base_url('static/images/nearby-4.jpg') ?>" width="100" />
                                <div class="justify-content-center pl-3 pt-3">
                                    <h6 class="black-text mb-0"><strong>Pula</strong></h6>
                                    <small class="black-text">2 Hours Drive</small>
                                </div>
                            </a>
                        </div>

                        <div class="col-12 col-sm-3 mb-4">
                            <a href="#" class="d-flex">
                                <img src="<?php echo base_url('static/images/nearby-5.jpg') ?>" width="100" />
                                <div class="justify-content-center pl-3 pt-3">
                                    <h6 class="black-text mb-0"><strong>Vienna</strong></h6>
                                    <small class="black-text">2.5 Hours Drive</small>
                                </div>
                            </a>
                        </div>
                        <div class="col-12 col-sm-3 mb-4">
                            <a href="#" class="d-flex">
                                <img src="<?php echo base_url('static/images/nearby-6.jpg') ?>" width="100" />
                                <div class="justify-content-center pl-3 pt-3">
                                    <h6 class="black-text mb-0"><strong>Salzburg</strong></h6>
                                    <small class="black-text">3 Hours Drive</small>
                                </div>
                            </a>
                        </div>
                        <div class="col-12 col-sm-3 mb-4">
                            <a href="#" class="d-flex">
                                <img src="<?php echo base_url('static/images/nearby-7.jpg') ?>" width="100" />
                                <div class="justify-content-center pl-3 pt-3">
                                    <h6 class="black-text mb-0"><strong>Innsbruck</strong></h6>
                                    <small class="black-text">4 Hours Drive</small>
                                </div>
                            </a>
                        </div>
                        <div class="col-12 col-sm-3 mb-4">
                            <a href="#" class="d-flex">
                                <img src="<?php echo base_url('static/images/nearby-8.jpg') ?>" width="100" />
                                <div class="justify-content-center pl-3 pt-3">
                                    <h6 class="black-text mb-0"><strong>Graz</strong></h6>
                                    <small class="black-text">5.5 Hours Drive</small>
                                </div>
                            </a>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>-->
</template>



<script>
    import ExploreNearbyCard from "./ExploreNearbyCard";
    export default {
        name: "ExploreNearby",
        components: {ExploreNearbyCard}
    }
</script>

<style scoped>

</style>