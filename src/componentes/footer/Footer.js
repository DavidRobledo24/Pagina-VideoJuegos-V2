import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RoomIcon from '@mui/icons-material/Room';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

export default function Footer() {
    return (
        <div>
            <footer class="text-center text-lg-start bg-light text-muted">

                <section class="">
                    <div class="container text-center text-md-start mt-5">

                        <div class="row mt-3">

                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">
                                    <i class="fas fa-gem me-3"></i>TIENDA ONLINE DE VIDEOJUEGOS
                                </h6>
                                <p>
                                    En estas tienda puedes comprar keys de juegos adquiridas de manera fraudulenta. 
                                </p>
                            </div>



                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">
                                    Redes sociales
                                </h6>
                                <p>
                                    <FacebookIcon />
                                </p>
                                <p>
                                    <InstagramIcon />
                                </p>
                                <p>
                                    <TwitterIcon/>
                                </p>
                            </div>



                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">
                                    Plataformas
                                </h6>
                                <p>
                                    <a href="#!" class="text-reset">PlayStation</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Xbox</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">PC</a>
                                </p>
                            </div>



                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6> Contact</h6>
                                <p>
                                    <RoomIcon/> Islas Caiman 2024</p>
                                <p>
                                    <MarkEmailReadIcon/> correonofake@gmail.com
                                </p>
                                <p> <PhoneInTalkIcon/>  +57 555-cincorriente</p>

                            </div>

                        </div>

                    </div>
                </section>



                <div class="text-center p-4" >
                    Robamos tarjetas y compramos juegos para mantener vivi este mercado
                </div>

            </footer>
        </div>
    )
}
