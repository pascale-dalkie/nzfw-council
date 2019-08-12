import React from "react"
import { Link } from "gatsby"
import { Row, Col, Container, ListGroup } from "react-bootstrap"
import Button from 'react-bootstrap/Button'

import Layout from "../components/layout"
import SEO from "../components/seo"
import EventSchedule from "../components/eventSchedule"
import EventSubscribe from "../components/eventSubscribe"

const Events = () => (
  <Layout pageInfo={{ pageName: "NZFW Library Events" }}>
    <SEO title="NZFW Library Events" />
    <Container className="no-margin">
      <Row className="title-row" id="events-hero">
        <Col lg="5" md="6">
          <h1 className="blue-accent">Events</h1>
        </Col>
      </Row>
    	<Row className="row-eq-height">
    		<Col md="3" id="fashionabletalk-image">
    		</Col>
            <Col md="3" className="row-card dark-grey-bg white-text">
                <div className="vertical-center text-center">
                    <h2>A Very Fashionable Talk<br />
                    <span className="mid-text">Friday 30 August 12.00pm - 01.00pm<br />Events Space, Ground Floor</span></h2>
                </div>
            </Col>
    		<Col md="6" className="row-card">
                <p>If you’re looking for an excuse to dress up during the day, dig out your finest and head over to the Central City Library for a very fashionable talk exploring the history of serving looks in New Zealand, and why dead peoples clothing should be your new wardrobe staple!</p>
                <p>Historically, New Zealanders have loved dressing up. From patriotic fundraisers and Sunday school picnics to fancy dress balls and the Rugby Sevens, Kiwis seem to find any excuse to get glammed up. On this topic, Marguerite Hill (heritage researcher for Auckland Council, long-time curator and textile expert) will deliver an illustrated presentation featuring fancy-dress makers of nineteen and twentieth century New Zealand, as well as some absolutely fabulous examples of ingenious Kiwi costuming.</p>
                <p>Following Marguerite, city planner Wayne Siu wants you to know why he wears dead people’s clothes, and why you should too. A sustainability expert and vintage fashion enthusiast with a particular interest in menswear from the 20’s, 30’s, and 40’s, Wayne will educate you on the current resurgence of slow fashion, and its deeper meanings and repercussions. Drawn to the complexity, detailing and quality found in clothing of the past, Wayne is also concerned with style meeting substance - not just an aesthetic preference for dedicated dandies, vintage clothing is a fashion choice which is ethical, just, and protects our planet.</p>
    		  <EventSubscribe />
            </Col>
    	</Row>
        <Row className="row-eq-height">
            <Col md="3" id="makesewdo-image">
            </Col>
            <Col md="3" className="row-card dark-grey-bg white-text">
                <div className="vertical-center text-center">
                    <h2>Make, Do, Mend<br />
                    <span className="mid-text">Daily sessions 10-2, additional sessions Mon-Wed 4-8<br />Makerspace, Ground Floor</span></h2>
                </div>
            </Col>
            <Col md="6" className="row-card">
                <p>The Make, Do and Mend program is a series of sewing, stitching and repurposing workshops, crafted by the teams at the Central City Library and New Zealand Fashion Week. Centered around the Japanese concept of “Mottaini” (a striving to minimize wastefulness in both action and thought), fashion technology graduate and professional costumer Gracie Matthews will be joining us as she works on a Mottaini-inspired period costume project. This will be happening adjacent to our activity slots, for those who wish to either observe or engage in Gracie’s work. There is no deadline in mind for this – instead, the emphasis is on the process of creation. For anyone wanting a quick demo on our pūrere tuitui (sewing machine) outside of workshop times, there will be fabric squares waiting to be fashioned into a community-constructed collaborative quilt! </p>
                <p>Tote Bags<br />Learn how to use a vintage sewing machine by making a simple tote bag from re-purposed materials – bring in your own items to upcycle, or use scrap material provided by our Makerspace.</p>
                <p>Boro/Sashiko stitching<br />Join us for a demonstration of repairing, mending and upcycling in the style Japanese styles of Boro (Japanese for “rags” or “tattered cloth”) and Sashiko (meaning “little stabs”).  Embracing the concept of 'wabi sabi’, these workshops will help you to repurpose disused items and learn a new skill, while learning to see the beauty in an object's impermanence and imperfection. Bring in your own items to upcycle or use scrap material provided by our Makerspace.</p>
                <EventSubscribe />
            </Col>
        </Row>
        <Row className="row-eq-height">
            <Col md="3" id="migrantzine-image">
            </Col>
            <Col md="3" className="row-card dark-grey-bg white-text">
                <div className="vertical-center text-center">
                    <h2>Migrant Zine Collective<br />
                    <span className="mid-text">Sunday 1 September 11.00am - 03.00pm<br />Makerspace, Ground Floor</span></h2>
                </div>
            </Col>
            <Col md="6" className="row-card">
                <p>Come along to the Central City Library and join Auckland’s Migrant Zine Collective in creating a publication based on the themes of sustainability and identity. You will be asked to print a pattern inspired by a recognisable fabric design, to be over-layed with illustrations, collages, prose, poetry, ranting, questions, or anything else you like, about sustainability and identity, what they mean to you, and where they intersect in your life.</p>
                <p>These artworks will be scanned and collated into a zine, which will be kept at the library in our zine collection! We will have assistance on the day from Helen Yeung, founder of Migrant Zine Collective, and creator of the publication “Gen M” (Generation Migrant.) </p>
                <p>This event is free, open to all ages, with all materials provided and no RSVP or booking necessary.</p>
                <p>So, start thinking about why sustainability is important to you!</p>
                <EventSubscribe />
            </Col>
        </Row>
        <Row className="row-eq-height">
            <Col md="3" id="SYOT-image">
            </Col>
            <Col md="3" className="row-card dark-grey-bg white-text">
                <div className="vertical-center text-center">
                    <h2>Miniature Fashion - Sew Your Own!<br />
                    <span className="mid-text">Sunday 1 September 11.00am - 03.00pm<br />Events Space, Ground Floor</span></h2>
                </div>
            </Col>
            <Col md="6" className="row-card">
                <p>If you’re always meaning to learn a craft, do more for the environment, take the kids out more, etc etc – we think you should start small. Tiny, even. Join upcycling masters and educators The Re-Creators for a truly special and 100% free activity, handcrafting and designing miniature clothing!</p>
                <p>The Recreator's mission is to move consumers away from new and mass-produced items, toward upcycled goods, by helping them develop the skills they need to make their own. We believe that the positivity of creative upcycling will help save our planet and bring us all closer together. This workshop will provide all of the tools and re-purposed materials you need to make miniature clothing and figurines from patterns, with general sewing tips and tricks and hands-on guidance. Suitable for ages 5+.</p>
                <EventSubscribe />
            </Col>
        </Row>
        <Row className="row-eq-height">
            <Col md="3" id="swapit-image">
            </Col>
            <Col md="3" className="row-card dark-grey-bg white-text">
                <div className="vertical-center text-center">
                    <h2>Swap it Like It’s Hot 3.0<br />
                    <span className="mid-text">Saturday 31 August 11.00am - 03.00pm<br />Events Space, Ground Floor</span></h2>
                </div>
            </Col>
            <Col md="6" className="row-card">
                <p>Craving some retail therapy to abolish the Winter blues, but not enough money left after bills? No longer willing to settle for fast fashion that lasts one season and then sits in a landfill for 200 years? Come along to the Central City Library for our 3rd installation of Swap it Like it’s Hot!</p>
                <p>Simply bring along up to 10 pre-loved clothing items, exchange them for tokens, and swap those for new-to-you garments. The only rules are: items must be in “gently used” condition (no stains, no rips, no intimates) and we won’t be accepting shoes or accessories.  We encourage you to drop off your items on Sun 25 or Tue 27 Aug, before Swap day.</p>
                <p>Textile artist and UOA Art History Society vice-president Monica Wang will be facilitating alongside us on the day, and any leftover clothing will be donated to Mercy Hospice, who provide specialty palliative care to the people of Tāmaki Makaurau. So, you’re not only treating yourself and saving Papatūānuku from extra waste, you’re giving back to your community.</p>
                <p>Lastly: this is an inclusive event, for all sizes, body shapes, genders and abilities</p>
                <EventSubscribe />
            </Col>
        </Row>
        <Row className="row-eq-height">
            <Col md="3" id="speeddating-image">
            </Col>
            <Col md="3" className="row-card dark-grey-bg white-text">
                <div className="vertical-center text-center">
                    <h2>Make/Haste: Speed-dating Sustainable Fashion Leaders<br />
                    <span className="mid-text">Tuesday 27 Aug 06.00pm - 07.00pm<br />Event Space, Ground Floor</span></h2>
                </div>
            </Col>
            <Col md="6" className="row-card">
                <p>Join the Central City Library for an evening with fashion industry experts, who want to have a quick deep & meaningful with you about sustainability, makery, workmanship, tradition and business in the big little world of New Zealand fashion.</p>
                <p>Meet Margaret Lewis, a self-taught textile artist and craft connoisseur into unexpected and re-contextualised materials; Angela Winter Means, creator and curator of Greatest Friend and longstanding stylist, buyer and influencer; and Julia Leuchars, Marketing and Brand Communication Director and Designer of the long-loved N.Z fashion institution, the Trelise Cooper group. With more speakers to be announced, you won’t want to miss this stylish gathering!</p>
                <p>Our experts will introduce themselves and give a short summary of their career history, passions, and involvement in sustainable practices. Next, our gracious MC Kate Hall (of the zero-waste fashion blog & online shop Ethically Kate) will lead a short panel discussion about the state of fashion in NZ and the importance of considering the impact on our planet when we shop. Finally, our experts will split up and the audience will be free to approach them for a quick one-on-one about fashion, industry, inspiration, or the meaning and fabric of life - in short, a short exchange about whatever you like! MC Kate will be roaming and prompting discussions for all to hear.</p>
                <p>Don’t be shy - come along, be yourself, and get to know some of the industry leaders who are working to make sure you not only look good but are doing good when you invest your money in NZ fashion.</p>
                <EventSubscribe />
            </Col>
        </Row>
        <Row className="row-eq-height">
            <Col md="3" id="printer-image">
            </Col>
            <Col md="3" className="row-card dark-grey-bg white-text">
                <div className="vertical-center text-center">
                    <h2>NZFW: 3D Printing Fashion Accessories<br />
                    <span className="mid-text">Monday 26 August – Friday 30 August, 10:00am and 02:00pm daily, plus 05:30PM Tuesday and Friday<br />Makerspace, Ground Floor</span></h2>
                </div>
            </Col>
            <Col md="6" className="row-card">
                <p>Accessorising is fundamental! If you want to invest in a new designer piece but can’t commit to something big, come to the Central City Library and print out something small and stylish (and free)!</p>
                <p>We’ll be running 3D printing sessions in our Makerspace, where you can a choose a jewelry design from a range inspired by the designers at New Zealand Fashion Week 2019, learn to use our 3D printers, and watch your new piece magically appear before your eyes, via the wonder of modern technology.</p>
                <p>Bookings are required. To request a place, fill out our webform. First come first served.</p>
                <EventSubscribe />
            </Col>
        </Row>
        <Row className="row-eq-height">
            <Col md="3" id="projection-image">
            </Col>
            <Col md="3" className="row-card dark-grey-bg white-text">
                <div className="vertical-center text-center">
                    <h2>Lighting up Lorne<br />
                    <span className="mid-text">Monday 26 August – Sunday 1 September, 06.00pm - 10.00pm<br />Library Entrance, St James Theatre, Ground Floor</span></h2>
                </div>
            </Col>
            <Col md="6" className="row-card">
                <p>For those of you who live and breathe Fashion, we’re pleased to announce that we’ll be serving you sartorial glamour 24/7, with a large scale street mural and evening film projections against the beloved St James Theatre.</p>
                <p>Ross Liew, aka TRUSTME, renowned Auckland street artist and founding member of creative ensemble Cut Collective, will be working to aesthetically recalibrate Lorne Street outside the Central City Library. His work can be seen across Tāmaki Makaurau, and places a strong emphasis on the local and collective spirit. Swing by anytime to see our hoardings made over and dressed up, with much aroha for our uniquely beautiful city and community.</p>
                <p>From 6-10pm in the evenings, our St James Theatre projections will feature archived footage from the NZ Fashion Museum, the Auckland Libraries Heritage Collection, the Zambesi archive, and some extras from the New Zealand Fashion Week tent in Aotea Square. Dress warmly, get comfortable and enjoy some outdoor cinema that will inspire you and enrich your understanding of New Zealand Fashion history.</p>
                <EventSubscribe />
            </Col>
        </Row>
    </Container>
    <Container>
        <EventSchedule />
    </Container>
  </Layout>
)

export default Events
