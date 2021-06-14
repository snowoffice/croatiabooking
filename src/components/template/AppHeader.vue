<template>
    <div>

        <div class="container-fluid topHeader">
            <div class="container">
                <div class="row">
                    <ul class="float-left">
                                <li>
                                    <a href="tel:9876543210">
                                        <i class="fa fa-phone"></i>
                                        +43 9876543210
                                    </a>
                                    <a href="mailto:developer@snowoffice.at">
                                        <i class="fa fa-envelope"></i>
                                        developer@snowoffice.at
                                    </a>
                                </li>
                            </ul>
                </div>
            </div>
        </div>

        <div class="container-fluid pageHeader">
            <div class="container">
                    <div class="row" >
                        <div class="col-12">
                            <nav class="navbar navbar-expand-md navbar-light">
                                <a href="" class="navbar-brand">
                                    <img src="../../assets/images/logo.png" alt="hosbooking.net" style="height: 70px" />
                                </a>
                                <button type="button" class="navbar-toggler"
                                        data-toggle="collapse" data-target="#navbarCollapse">
                                    <span class="navbar-toggler-icon"></span>
                                </button>

                                <div class="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                                    <div class="navbar-nav">
                                        <a href="" class="nav-item nav-link me-3"><i class="fa fa-building-o"></i> Alle Räume</a>
                                        <a href="" class="nav-item nav-link me-3"><i class="fa fa-calendar-check-o"></i> Check Booking</a>
                                        <a href="" class="nav-item nav-link me-3"><i class="fa fa-life-ring"></i> Support</a>
                                        <a href="" class="nav-item nav-link"><i class="fa fa-phone-square"></i> Contact</a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "AppHeader",
        data : function() {
            return {
                hide : true
            }
        }
    }
</script>
