import yamakasi from '../logo/Yamakasi_(альбом).jpeg';
import buster from '../logo/busterKeaton.jpg';
import burevestnik from '../logo/burevestnik.jpg';
import vse from '../logo/LOGO2.jpg';
import nochi from '../logo/nochiVodnogo.jpg';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCarouselElement } from 'mdb-react-ui-kit';

const Main = () => {
    return (
        <div className='Main'>
            {/* Cards */}
            <div class="cards">
                <div class="card">
                    <a href='#s'>
                        <img src={yamakasi} alt={"foto"}
                            height={300} width={300}
                        />
                        <b>Yamakasi</b>
                    </a>
                </div>

                <div class="card">
                    <a href='#s'>
                        <img src={buster} alt={"foto"}
                            height={300} width={300}
                        />
                        <b>Buster Ceaton</b>
                    </a>
                </div>

                <div class="card">
                    <a href='#s'>
                        <img src={burevestnik} alt={"foto"}
                            height={300} width={300}
                        />
                        <b>Буревестник</b>
                    </a>
                </div>
            </div>
            {/* Cards */}

            {/* Section */}
            <section class="section-1"></section>
            <section class="section-2"><img src={vse} alt={"foto vse"} height={300} /></section>
            <section class="section-3"></section>
            {/* Section */}

            {/* Carousel */}
            <p className='pi'>G a l l e r y</p>
            <div className='carousel'>
                <MDBCarousel className='car' style={{ height: 350, width: 750 }} showControls showIndicators dark fade>
                    <MDBCarouselInner>

                        <MDBCarouselItem>
                            <MDBCarouselElement src='https://i.ytimg.com/vi/__FBxeGH8bM/maxresdefault.jpg' alt='...' />
                        </MDBCarouselItem>

                        <MDBCarouselItem>
                            <MDBCarouselElement src='https://i.ytimg.com/vi/4Ua1g8hU81A/maxresdefault.jpg' alt='...' />
                        </MDBCarouselItem>

                        <MDBCarouselItem>
                            <MDBCarouselElement src='https://i.ytimg.com/vi/CIfQQ7-SoTs/maxresdefault.jpg' alt='...' />
                        </MDBCarouselItem>

                        <MDBCarouselItem>
                            <MDBCarouselElement src='https://i.ytimg.com/vi/vN12KY7eR8U/maxresdefault.jpg' alt='...' />
                        </MDBCarouselItem>

                        <MDBCarouselItem>
                            <MDBCarouselElement src='https://i.ytimg.com/vi/NrGe6H2zcoE/maxresdefault.jpg' alt='...' />
                        </MDBCarouselItem>

                        <MDBCarouselItem>
                            <MDBCarouselElement src='https://i.ytimg.com/vi/6aTYceNFDP4/maxresdefault.jpg' alt='...' />
                        </MDBCarouselItem>

                        <MDBCarouselItem className='active'>
                            <MDBCarouselElement src={nochi} alt='...' />
                        </MDBCarouselItem>

                    </MDBCarouselInner>
                </MDBCarousel>

                <MDBCarousel className='car' style={{ height: 350, width: 750 }} showControls showIndicators dark fade>
                    <MDBCarouselInner>

                        <MDBCarouselItem>
                            <MDBCarouselElement src='https://i.ytimg.com/vi/__FBxeGH8bM/maxresdefault.jpg' alt='...' />
                        </MDBCarouselItem>

                        <MDBCarouselItem>
                            <MDBCarouselElement src='https://i.ytimg.com/vi/4Ua1g8hU81A/maxresdefault.jpg' alt='...' />
                        </MDBCarouselItem>

                        <MDBCarouselItem>
                            <MDBCarouselElement src='https://i.ytimg.com/vi/CIfQQ7-SoTs/maxresdefault.jpg' alt='...' />
                        </MDBCarouselItem>

                        <MDBCarouselItem>
                            <MDBCarouselElement src='https://i.ytimg.com/vi/vN12KY7eR8U/maxresdefault.jpg' alt='...' />
                        </MDBCarouselItem>

                        <MDBCarouselItem>
                            <MDBCarouselElement src='https://i.ytimg.com/vi/NrGe6H2zcoE/maxresdefault.jpg' alt='...' />
                        </MDBCarouselItem>

                        <MDBCarouselItem>
                            <MDBCarouselElement src='https://i.ytimg.com/vi/6aTYceNFDP4/maxresdefault.jpg' alt='...' />
                        </MDBCarouselItem>

                        <MDBCarouselItem className='active'>
                            <MDBCarouselElement src={nochi} alt='...' />
                        </MDBCarouselItem>

                    </MDBCarouselInner>
                </MDBCarousel>

                <MDBCarousel className='car' style={{ height: 350, width: 750 }} showControls showIndicators dark fade>
                    <MDBCarouselInner>

                        <MDBCarouselItem>
                            <MDBCarouselElement src='https://i.ytimg.com/vi/__FBxeGH8bM/maxresdefault.jpg' alt='...' />
                        </MDBCarouselItem>

                        <MDBCarouselItem>
                            <MDBCarouselElement src='https://i.ytimg.com/vi/4Ua1g8hU81A/maxresdefault.jpg' alt='...' />
                        </MDBCarouselItem>

                        <MDBCarouselItem>
                            <MDBCarouselElement src='https://i.ytimg.com/vi/CIfQQ7-SoTs/maxresdefault.jpg' alt='...' />
                        </MDBCarouselItem>

                        <MDBCarouselItem>
                            <MDBCarouselElement src='https://i.ytimg.com/vi/vN12KY7eR8U/maxresdefault.jpg' alt='...' />
                        </MDBCarouselItem>

                        <MDBCarouselItem>
                            <MDBCarouselElement src='https://i.ytimg.com/vi/NrGe6H2zcoE/maxresdefault.jpg' alt='...' />
                        </MDBCarouselItem>

                        <MDBCarouselItem>
                            <MDBCarouselElement src='https://i.ytimg.com/vi/6aTYceNFDP4/maxresdefault.jpg' alt='...' />
                        </MDBCarouselItem>

                        <MDBCarouselItem className='active'>
                            <MDBCarouselElement src={nochi} alt='...' />
                        </MDBCarouselItem>

                    </MDBCarouselInner>
                </MDBCarousel>

                <MDBCarousel className='car' style={{ height: 350, width: 750 }} showControls showIndicators dark fade>
                    <MDBCarouselInner>

                        <MDBCarouselItem>
                            <MDBCarouselElement src='https://i.ytimg.com/vi/__FBxeGH8bM/maxresdefault.jpg' alt='...' />
                        </MDBCarouselItem>

                        <MDBCarouselItem>
                            <MDBCarouselElement src='https://i.ytimg.com/vi/4Ua1g8hU81A/maxresdefault.jpg' alt='...' />
                        </MDBCarouselItem>

                        <MDBCarouselItem>
                            <MDBCarouselElement src='https://i.ytimg.com/vi/CIfQQ7-SoTs/maxresdefault.jpg' alt='...' />
                        </MDBCarouselItem>

                        <MDBCarouselItem>
                            <MDBCarouselElement src='https://i.ytimg.com/vi/vN12KY7eR8U/maxresdefault.jpg' alt='...' />
                        </MDBCarouselItem>

                        <MDBCarouselItem>
                            <MDBCarouselElement src='https://i.ytimg.com/vi/NrGe6H2zcoE/maxresdefault.jpg' alt='...' />
                        </MDBCarouselItem>

                        <MDBCarouselItem>
                            <MDBCarouselElement src='https://i.ytimg.com/vi/6aTYceNFDP4/maxresdefault.jpg' alt='...' />
                        </MDBCarouselItem>

                        <MDBCarouselItem className='active'>
                            <MDBCarouselElement src={nochi} alt='...' />
                        </MDBCarouselItem>

                    </MDBCarouselInner>
                </MDBCarousel>

            </div>
            {/* Carousel */}

        </div>
    );
}

export default Main; 