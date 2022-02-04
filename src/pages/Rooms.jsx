import React from 'react';
import Footer from '../components/Footer';
import Testimony from '../components/Testimony';

function Rooms(props) {
    return (
        <>
            <section className="breadcrumb_area">
                <div className="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background=""></div>
                <div className="container">
                    <div className="page-cover text-center">
                        <h2 className="page-cover-tittle">Our Rooms</h2>
                        <ol className="breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li className="active">Rooms</li>
                        </ol>
                    </div>
                </div>
            </section>

            <section className="accomodation_area section_gap">
                <div className="container">
                    <div className="section_title text-center">
                        <h2 className="title_color">Special Rooms</h2>
                        <p>We all live in an age that belongs to the young at heart. Life that is becoming extremely fast,</p>
                    </div>
                    <div className="row mb_30">
                        <div className="col-lg-3 col-sm-6">
                            <div className="accomodation_item text-center">
                                <div className="hotel_img">
                                    <img src="image/room1.jpg" alt="" />
                                    <a href="#" className="btn theme_btn button_hover">Book Now</a>
                                </div>
                                <a href="#"><h4 className="sec_h4">Double Deluxe Room</h4></a>
                                <h5>$250<small>/night</small></h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="accomodation_item text-center">
                                <div className="hotel_img">
                                    <img src="image/room2.jpg" alt="" />
                                    <a href="#" className="btn theme_btn button_hover">Book Now</a>
                                </div>
                                <a href="#"><h4 className="sec_h4">Single Deluxe Room</h4></a>
                                <h5>$200<small>/night</small></h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="accomodation_item text-center">
                                <div className="hotel_img">
                                    <img src="image/room3.jpg" alt="" />
                                    <a href="#" className="btn theme_btn button_hover">Book Now</a>
                                </div>
                                <a href="#"><h4 className="sec_h4">Honeymoon Suit</h4></a>
                                <h5>$750<small>/night</small></h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="accomodation_item text-center">
                                <div className="hotel_img">
                                    <img src="image/room4.jpg" alt="" />
                                    <a href="#" className="btn theme_btn button_hover">Book Now</a>
                                </div>
                                <a href="#"><h4 className="sec_h4">Economy Double</h4></a>
                                <h5>$200<small>/night</small></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="hotel_booking_area">Name
                <div class="container">
                    <div class="row hotel_booking_table">
                        <div class="col-md-3">
                            <h2>Book<br /> Your Room</h2>
                        </div>
                        <div class="col-md-9">
                            <div class="boking_table">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="book_tabel_item">
                                            <div class="form-group">
                                                <div class='input-group date' id='datetimepicker11'>
                                                    <input type='text' class="form-control" placeholder="Arrival Date"/>
                                                    <span class="input-group-addon">
                                                        <i class="fa fa-calendar" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class='input-group date' id='datetimepicker1'>
                                                    <input type='text' class="form-control" placeholder="Departure Date"/>
                                                    <span class="input-group-addon">
                                                        <i class="fa fa-calendar" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="book_tabel_item">
                                            <div class="input-group">
                                                <select class="wide">
                                                    <option data-display="Adult">Adult</option>
                                                    <option value="1">Old</option>
                                                    <option value="2">Younger</option>
                                                    <option value="3">Potato</option>
                                                </select>
                                            </div>
                                            <div class="input-group">
                                                <select class="wide">
                                                    <option data-display="Child">Child</option>
                                                    <option value="1">Child</option>
                                                    <option value="2">Baby</option>
                                                    <option value="3">Child</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="book_tabel_item">
                                            <div class="input-group">
                                                <select class="wide">
                                                    <option data-display="Child">Number of Rooms</option>
                                                    <option value="1">Room 01</option>
                                                    <option value="2">Room 02</option>
                                                    <option value="3">Room 03</option>
                                                </select>
                                            </div>
                                            <a class="book_now_btn button_hover" href="#">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="accomodation_area section_gap">
                <div className="container">
                    <div className="section_title text-center">
                        <h2 className="title_color">Normal Accomodation</h2>
                        <p>We all live in an age that belongs to the young at heart. Life that is becoming extremely fast,</p>
                    </div>
                    <div className="row accomodation_two">
                        <div className="col-lg-3 col-sm-6">
                            <div className="accomodation_item text-center">
                                <div className="hotel_img">
                                    <img src="image/room1.jpg" alt="" />
                                    <a href="#" className="btn theme_btn button_hover">Book Now</a>
                                </div>
                                <a href="#"><h4 className="sec_h4">Double Deluxe Room</h4></a>
                                <h5>$250<small>/night</small></h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="accomodation_item text-center">
                                <div className="hotel_img">
                                    <img src="image/room2.jpg" alt="" />
                                    <a href="#" className="btn theme_btn button_hover">Book Now</a>
                                </div>
                                <a href="#"><h4 className="sec_h4">Single Deluxe Room</h4></a>
                                <h5>$200<small>/night</small></h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="accomodation_item text-center">
                                <div className="hotel_img">
                                    <img src="image/room3.jpg" alt="" />
                                    <a href="#" className="btn theme_btn button_hover">Book Now</a>
                                </div>
                                <a href="#"><h4 className="sec_h4">Honeymoon Suit</h4></a>
                                <h5>$750<small>/night</small></h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="accomodation_item text-center">
                                <div className="hotel_img">
                                    <img src="image/room4.jpg" alt="" />
                                    <a href="#" className="btn theme_btn button_hover">Book Now</a>
                                </div>
                                <a href="#"><h4 className="sec_h4">Economy Double</h4></a>
                                <h5>$200<small>/night</small></h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="accomodation_item text-center">
                                <div className="hotel_img">
                                    <img src="image/room1.jpg" alt="" />
                                    <a href="#" className="btn theme_btn button_hover">Book Now</a>
                                </div>
                                <a href="#"><h4 className="sec_h4">Double Deluxe Room</h4></a>
                                <h5>$250<small>/night</small></h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="accomodation_item text-center">
                                <div className="hotel_img">
                                    <img src="image/room2.jpg" alt="" />
                                    <a href="#" className="btn theme_btn button_hover">Book Now</a>
                                </div>
                                <a href="#"><h4 className="sec_h4">Single Deluxe Room</h4></a>
                                <h5>$200<small>/night</small></h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="accomodation_item text-center">
                                <div className="hotel_img">
                                    <img src="image/room3.jpg" alt="" />
                                    <a href="#" className="btn theme_btn button_hover">Book Now</a>
                                </div>
                                <a href="#"><h4 className="sec_h4">Honeymoon Suit</h4></a>
                                <h5>$750<small>/night</small></h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="accomodation_item text-center">
                                <div className="hotel_img">
                                    <img src="image/room4.jpg" alt="" />
                                    <a href="#" className="btn theme_btn button_hover">Book Now</a>
                                </div>
                                <a href="#"><h4 className="sec_h4">Economy Double</h4></a>
                                <h5>$200<small>/night</small></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Rooms;