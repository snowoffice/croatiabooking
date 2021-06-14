<template>
    <div>
        <div class="container-fluid py-5 footer">
            <div class="row">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-sm-4">
                            <h4>Hosbooking.net</h4>
                            <p class="p-0">
                                Sie suchen eine gemütliche und geschmackvoll eingerichtete Unterkunft in attraktiver Lage? Dann haben wir genau das Objekt, nach dem Sie suchen!
                                <a href="http://www.hosbooking.net">Learn More</a>
                            </p>
                        </div>
                        <div class="col-12 col-sm-1"></div>
                        <div class="col-12 col-sm-3 mt-sm-0 mt-5">
                            <h4>Navigation</h4>
                            <ul>
                                <li><a href=""><i class="fa fa-angle-double-right"></i> Check Booking</a></li>
                                <li><a href="https://www.snowoffice.at/impressum" target="_blank"><i class="fa fa-angle-double-right"></i> Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div class="col-12 col-sm-4 mt-sm-0 mt-5">
                            <h4>Reach Us</h4>
                            <ul>
                                <li>
                                    <a>
                                        <i class="fa fa-map-marker" ></i>
                                        <div class="w-100" ></div>
                                        Brucker Bundesstrasse 98,
                                        <div class="w-100" ></div>
                                        5700 Zell am See, Austria
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+43 (0) 664 5112348>">
                                        <i class="fa fa-phone" ></i>
                                        +43 (0) 664 5112348
                                    </a>
                                    <a href="tel:+43 (0) 6582 21500">
                                        +43 (0) 6582 21500
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:office@snowoffice.at">
                                        <i class="fa fa-envelope" ></i>
                                        office@snowoffice.at
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 pt-4 paymentsIcons text-center">
<!--                            <img src="<?php echo base_url('static/payments/visa.png') ?>">-->
<!--                            <img src="<?php echo base_url('static/payments/amex.png') ?>">-->
<!--                            <img src="<?php echo base_url('static/payments/diners.png') ?>">-->
<!--                            <img src="<?php echo base_url('static/payments/discover.png') ?>">-->
<!--                            <img src="<?php echo base_url('static/payments/elv.png') ?>">-->
<!--                            <img src="<?php echo base_url('static/payments/jcb.png') ?>">-->
<!--                            <img src="<?php echo base_url('static/payments/klarna.png') ?>">-->
<!--                            <img src="<?php echo base_url('static/payments/maestro.png') ?>">-->
<!--                            <img src="<?php echo base_url('static/payments/master.png') ?>">-->
<!--                            <img src="<?php echo base_url('static/payments/paypal.png') ?>">-->
<!--                            <img src="<?php echo base_url('static/payments/sofortueberweisung.png') ?>">-->
<!--                            <img src="<?php echo base_url('static/payments/unionpay.png') ?>">-->
<!--                            <img src="<?php echo base_url('static/payments/vpay.png') ?>">-->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="copyright py-3">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <p class="">&copy; {{new Date().getFullYear()}}
                            <a href="https://www.snowoffice.at" target="_blank" >Snowoffice GmbH</a>
<!--                            <?php echo lang('lang_textallrights');?>-->
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppFooter",
        data : function() {
            return {
                hide : true
            }
        }
    }
</script>
