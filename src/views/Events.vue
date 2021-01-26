<template>
  <v-card
    height="100%"
    flat
    tile
    color="transparent"
    class="events text-justify"
  >
    <v-card flat class="mb-4" color="transparent">
      <v-card-title class="primary--text text-h4 pb-1 font-weight-bold"
        >Physical events</v-card-title
      >

      <v-row>
        <v-col cols="12">
          <v-card-text class="text-h7 py-0">
            The RE:SOURCING project will host eleven physical events: three
            Flagship Labs (Amsterdam, Leoben, Darmstadt), two Conferences (in
            Brussels and Vienna), three Roadmap Workshops (Brussels), three
            Global Advocacy Fora (Chile, South Africa, China), several online
            webinars and consultations for the RE:SOURCING platform.
          </v-card-text>
        </v-col>
      </v-row>

      <v-row
        no-gutters
        class="justify-center mx-auto"
        style="max-width: 1440px;"
      >
        <v-col
          cols="12"
          lg="6"
          v-for="(event, index) in physicalEvents"
          :key="index"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card
              :id="event.title.replaceAll(' ', '_')"
              class="pa-2 mx-3 my-3"
              hover
              :elevation="hover ? 12 : 4"
            >
              <div
                class="d-flex justify-center"
                style="min-height: 200px;"
                @click="event.showInfo = !event.showInfo"
              >
                <div
                  class="text-h4 primary--text font-weight-light pa-2 align-self-center text-center"
                >
                  {{ event.title }}
                </div>
              </div>

              <v-card-actions
                class="pa-0"
                @click="event.showInfo = !event.showInfo"
              >
                <v-img
                  :src="
                    require('../assets/logos/project_logo/re-sourcing_transparent.png')
                  "
                  max-width="125"
                >
                </v-img>

                <v-spacer />

                <v-btn icon :aria-label="`toggle ${event.title} info`">
                  <v-icon v-if="event.showInfo">fas fa-angle-up</v-icon>
                  <v-icon v-else>fas fa-angle-down</v-icon>
                </v-btn>
              </v-card-actions>

              <v-card-text class="text-body-1" v-if="event.showInfo">
                <div v-html="event.text" />
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-card>

    <v-card flat color="transparent" class="mb-4">
      <v-card-title class="primary--text text-h4 pb-1 font-weight-bold"
        >Virtual events</v-card-title
      >

      <v-row
        no-gutters
        class="justify-center mx-auto"
        style="max-width: 1440px;"
      >
        <v-col
          cols="12"
          lg="6"
          v-for="(event, index) in virtualEvents"
          :key="index"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="pa-2 mx-3 my-3"
              :id="event.title.replaceAll(' ', '_')"
              hover
              :elevation="hover ? 12 : 4"
            >
              <div
                class="d-flex justify-center flex-column"
                style="min-height: 200px;"
                @click="event.showInfo = !event.showInfo"
              >
                <div
                  class="text-h4 primary--text font-weight-light pa-2 align-self-center text-center"
                >
                  {{ event.title }}
                </div>
              </div>

              <v-card-actions
                class="pa-0"
                @click="event.showInfo = !event.showInfo"
              >
                <v-img
                  :src="
                    require('../assets/logos/project_logo/re-sourcing_transparent.png')
                  "
                  max-width="125"
                >
                </v-img>

                <v-spacer />

                <v-btn icon :aria-label="`toggle ${event.title} info`">
                  <v-icon v-if="event.showInfo">fas fa-angle-up</v-icon>
                  <v-icon v-else>fas fa-angle-down</v-icon>
                </v-btn>
              </v-card-actions>

              <v-card-text class="text-body-1" v-if="event.showInfo">
                <div v-html="event.text" />
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-card>

    <v-card flat color="transparent" class="mb-4">
      <v-card-title class="primary--text text-h4 pb-1 font-weight-bold"
        >Event Archive</v-card-title
      >

      <v-row
        no-gutters
        class="justify-center mx-auto"
        style="max-width: 1440px;"
      >
        <v-col
          cols="12"
          lg="6"
          v-for="(event, index) in eventsArchive"
          :key="index"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="pa-2 mx-3 my-3"
              :id="event.title.replaceAll(' ', '_')"
              hover
              :elevation="hover ? 12 : 4"
            >
              <div
                class="d-flex justify-center flex-column"
                style="min-height: 200px;"
                @click="event.showInfo = !event.showInfo"
              >
                <div
                  class="text-h4 primary--text font-weight-light pa-2 align-self-center text-center"
                >
                  {{ event.title }}
                </div>
              </div>

              <v-card-actions
                class="pa-0"
                @click="event.showInfo = !event.showInfo"
              >
                <v-img
                  :src="
                    require('../assets/logos/project_logo/re-sourcing_transparent.png')
                  "
                  max-width="125"
                >
                </v-img>

                <v-spacer />

                <v-btn icon :aria-label="`toggle ${event.title} info`">
                  <v-icon v-if="event.showInfo">fas fa-angle-up</v-icon>
                  <v-icon v-else>fas fa-angle-down</v-icon>
                </v-btn>
              </v-card-actions>

              <v-card-text class="text-body-1" v-if="event.showInfo">
                <div v-html="event.text" />
                <div v-for="(day, i) in event.days" :key="i">
                  <div class="text-center font-weight-bold mb-5 mt-5">
                    {{ day.title }}
                  </div>
                  <v-expansion-panels focusable>
                    <v-expansion-panel
                      v-for="(session, i) in day.sessions"
                      :key="i"
                    >
                      <v-expansion-panel-header>
                        <span class="font-weight-bold">{{
                          session.title
                        }}</span></v-expansion-panel-header
                      >
                      <v-expansion-panel-content>
                        <p>{{ session.subtitle }}</p>
                        <div v-html="session.text"></div>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-card>
  </v-card>
</template>

<script>
export default {
  name: "Events",
  data: () => ({
    physicalEvents: [
      {
        title: "Conferences",
        showInfo: false,
        text: `
          <div class="text-center font-weight-bold mb-2">RE-SOURCING Virtual Opening Conference</div>
          <div class="text-center font-weight-bold mb-6">18-19 January 2021</div>
          <div class="mb-3">Due to the ongoing COVID-19 Pandemic, we decided to hold the RE-SOURCING Opening Conference virtually.</div>
          <div class="mb-3">Please see the event under virtual events.</div>
          `
      },
      {
        title: "Flagship Labs",
        showInfo: false,
        text:
          "RE-SOURCING will organise three sector-specific Flagship Lab Workshops for peer learning. Peer learning will serve to: 1) learn from good practice in FS cases; 2) develop an action catalogue for unresolved challenges in the FS cases; and 3) provide input to contextualise and generalise good practice factors in other organisational and EU MS settings (in preparation to Good Practice Guidance Reports)."
      }
    ],
    virtualEvents: [],
    eventsArchive: [
      {
        title: "Virtual Conferences",
        showInfo: false,
        text: `
        <div class="text-center font-weight-bold headline mb-2" >Drivers of Responsible Sourcing</div>
        <div class="text-center font-weight-bold mb-2 headline">Common Grounds - Collective Actions - Lasting Change </div>
        <div class="text-center font-weight-bold mb-5 title">Virtual Conference, Jan 18th and 19th 2021</div>
        <div class="text-center font-weight-bold mb-5">THANK YOU!</div>

        <div class="text-center font-weight-bold mb-5"><a href="https://www.re-sourcing.eu/files/OC_Agenda_external_02_12_2020.pdf" target="blank">Event agenda</a></div>
          
        <div class="mb-3">The RE-SOURCING project team would like to thank you for taking part in our first virtual Conference: Drivers of Responsible Sourcing, Common Grounds - Collective Actions - Lasting Change.</div>
        <div class="mb-3">The event was a great success for us, with more than 240 participants from around the globe, plenty of interesting presentations, discussions, questions and comments that we will take on as input for our project!</div>
        <div class="">The event outlined the main mechanisms that drive this transition towards more responsible sourcing practices along the topics of:</div>
        <ul class="mb-3">
        <li>Awareness Building & Advocacy: Our global pledge to leave no one behind</li>
        <li>Industry Frontrunners & Business Alliances: Improving Supply Risks, Competitiveness & Reputation</li>
        <li>Regulations & Standards: The Interplay between policies & standards</li>
        <li>Investment & Stock and Commodity Markets: How the financial sector can push for more Responsible Sourcing</li>
        </ul>

        <div class="mb-3">Here is a quick recap teaser for those of you who participated, and a small taste for those who were not able to do so: </div>
        <div style="max-width: 560px; margin: auto">
        <div class="mt-4 mb-4 video-container">
            <iframe class="video" width="560" height="315" title="Disruptions to responsible sourcing after-movie" src="https://www.youtube.com/embed/3K2OQiqMXUI" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
        
        <div class="mb-3">Here you can find the event’s individual sessions, recordings and presentation slides:</div>
      `,
        days: [
          {
            title: "DAY 1: Monday 18th of January 2021",
            sessions: [
              {
                title: "Session 1. Introduction",
                subtitle: "",
                text: `
                    <ul class="mb-3">
        <li>Conference Welcome by <strong>André Martinuzzi</strong>, Institute for Managing Sustainability, Vienna University of Economics and Business (pdf)</li>
        <li>Opening Key-note by <strong>MaijaLaurila, EC DG JUST</strong></li>
        <li>Opening Key-note by <strong>MasumaFarooki</strong>, Minehutte </li>
        <li>Opening Key-note by <strong>Andreas Endl</strong>, Institute for Managing Sustainability, Vienna University of Economics and Business (pdf)</li>
        <li>Session recording (youtube link)</li>
        </ul>
            `
              },
              {
                title: "Session 2. Awareness Building & Advocacy",
                subtitle:
                  "Our global pledge to leave no one behind - How to make frontline communities heard and respected in the process towards RS?",
                text: `
                   <ul class="mb-3">
        <li>Key-note presentation by <strong>Mark Dummett</strong>, Amnesty international (pdf)</li>
        <li>Practice example by <strong>Emmanuel Umpula</strong>, AFREWATCH(pdf)</li>
        <li>Session recording (youtube link)</li>
        </ul>
            `
              },
              {
                title: "Session 3. Industry Frontrunners & Business Alliances",
                subtitle:
                  "Exploring the case for building Alliances: Challenges & opportunities in strengthening business competitiveness and bench-marking responsible sourcing",
                text: `
                   <ul class="mb-3">
        <li>Key-note presentation by <strong>Alexander Nick</strong>, BMW (pdf)</li>
        <li>Practice example by Badrinath Veluri, Rare Earth Industry Association (pdf)</li>
        <li>Session recording (youtube link)</li>
        </ul>
            `
              }
            ]
          },
          {
            title: "DAY 2: Tuesday 19th of January 2021",
            sessions: [
              {
                title: "Session 4. Regulations & Standards",
                subtitle:
                  "The Interplay between policies & standards: A mutually supportive or conflicting relationship?",
                text: `
        <ul class="mb-3">
        <li>Key-note presentation byTyler Gillard, OECD(only recording)</li>
        <li>Practice example by Fiona Solomon, Aluminium Stewardship Initiative (pdf)</li>
        <li>Session recording (youtube link)</li>
        </ul>
            `
              },
              {
                title: "Session 5. Investment & Stock and Commodity Markets",
                subtitle:
                  "How can the financial sector push for more Responsible Sourcing – the role of ESG ratings, impact investment and what else?",
                text: `
        <ul class="mb-3">
        <li>Key-note presentation by Andreas Hoepner, OECD(only recording)</li>
        <li>Practice example by John Howchin, Swedish Pension Fund (pdf)</li>
        <li>Session recording (youtube link)</li>
        </ul>
            `
              },
              {
                title: "Session 6. Wrap up of the Opening Conference",
                subtitle:
                  "Change is in the air – What is it and are we on the right track?",
                text: `
                          <ul class="mb-3">
        <li>Session recording (youtube link)</li>

        </ul>
            `
              }
            ]
          }
        ]
      },
      {
        title: "Virtual Events",
        subtitle:
          "Disruptions to Responsible Sourcing - The Good, The Bad and The Ugly",
        date: "9 October 2020, 10:00-13:30 CET",
        showInfo: false,
        text: `
        <div class="text-center font-weight-bold mb-2">RE-SOURCING Virtual Event</div>
        <div class="text-center font-weight-bold mb-2">“Disruptions to Responsible Sourcing; The Good, The Bad and The Ugly”</div>
        <div class="text-center font-weight-bold mb-5">On 9 October 2020, 10:00-13:30 CET</div>
        <div class="text-center font-weight-bold mb-5">THANK YOU!</div>
        <div class="text-center font-weight-bold mb-2"><a href="https://www.re-sourcing.eu/files/Disruptions_to_RS_Agenda.pdf" target="blank">Event agenda</a></div>
        <div class="text-center font-weight-bold mb-2"><a href="https://www.re-sourcing.eu/files/Disruptions_to_Responsible_Sourcing_Briefing.pdf" target="blank">Post event briefing</a></div>
        <div class="text-center font-weight-bold mb-5"><a href="https://www.re-sourcing.eu/files/RE-SOURCING Virtual Event - Presentation Slides.pdf" target="blank">Presentation slides</a></div>
        <div class="mb-3">The RE-SOURCING project team would like to thank you for taking part in our first virtual event: <b>Disruptions to Responsible Sourcing; The Good, The Bad & The Ugly.</b></div>
        <div class="mb-2">The event was a great success for us, with plenty of interesting presentations, discussions, questions and comments that we will take on as input for our project!</div>
        <div class="mb-3">The event outlined the responsible sourcing challenges for businesses transitioning their practices, particularly in the face of emerging challenges from Covid-19 and the expected impetus for materials demand resulting from the Green Deal. Together, we explored the positives and negatives for responsible sourcing in the short, medium and long term.</div>
        <div class="mb-3">Here is a quick recap teaser for those of you who participated, and a small taste for those who were not able to do so: </div>
        <div style="max-width: 560px; margin: auto">
        <div class="mt-4 mb-4 video-container">
            <iframe class="video" width="560" height="315" title="Disruptions to responsible sourcing after-movie" src="https://www.youtube.com/embed/3K2OQiqMXUI" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
        <div class="mb-3">In case you were not able to attend the event, you can view the recording at:</div>
        <div class="mb-5"><a href="https://www.facebook.com/GoodElectronics-Network-181391811880541/" target="blank">https://www.facebook.com/GoodElectronics-Network-181391811880541/ </a></div>
        <div class="mb-3">Here you can <b>find the event’s two panel discussions</b> about the impact of COVID-19 and the Green Deal on Responsible Sourcing:</div>
        <div class="">COVID-19: <a href="https://youtu.be/0HI6yeAA3cM" target="blank">https://youtu.be/0HI6yeAA3cM</a></div>
        <div class="mb-5">EU Green Deal: <a href="https://youtu.be/ioqfUXJ9QGY" target="blank">https://youtu.be/ioqfUXJ9QGY</a></div>
        <div class="mb-2">You can also read our <b><a href="https://www.re-sourcing.eu/files/Disruptions_to_Responsible_Sourcing_Briefing.pdf" target="blank">short briefing</a></b> on the event’s most important outcomes.</div>
      `
      },
      {
        title: "Roadmap Workshops",
        showInfo: false,
        text: `
          <div class="text-center font-weight-bold mb-3">RE-SOURCING Renewable Energy Sector Virtual Roadmap Workshop</div>
          <div class="text-center font-weight-bold mb-1">Responsible Sourcing in the Renewable Energy Supply Chain:</div>
          <div class="text-center font-weight-bold mb-5">A reality or still a long way to go?</div>
          <div class="text-center font-weight-bold mb-5">THANK YOU!</div>
          <div class="text-center font-weight-bold mb-2"><a href="https://www.re-sourcing.eu/files/RE-Sourcing_Roadmap_WS_Agenda_final.pdf" target="blank">Event agenda</a></div>
          <div class="text-center font-weight-bold mb-5"><a href="https://www.re-sourcing.eu/files/Minutes Roadmap Workshop.pdf" target="blank">Workshop Minutes</a></div>
          <div class="pt-3 mb-4">On 29 October 2020 Montanuniversität Leoben hosted the first Roadmap Workshop of the RE-SOURCING project <b>“Responsible Sourcing in the Renewable Energy Supply Chain: A reality or still a long way to go?”</b> as a virtual event.</div>
          <div class="mb-4">We would like to thank you for your participation and for joining us in the discussion about the current situation of the renewable energy sector and necessary developments to ensure a sustainable and responsible supply.</div>
          <div class="mb-4">The discussion basis was formed by the previously finished report “State of play and roadmap concepts for the renewable energy sector” (D4.1). Talks revolved around the <b>mining</b> of copper, rare earth elements, and silicon required for the <b>manufacturing</b> of wind turbines and solar PV panels and finally the <b>recycling</b> of the equipment.</div>
          <div class="mb-4">D4.1 is now in the validation phase and we welcome any comments or feedback that will help to enhance the report. We would also like to ask all participants to continue participating in the roadmap development process and to support us with their expertise. </div>
          <div class="mb-4">Furthermore, the presentations and a summary of the event are available for download <a href="https://www.re-sourcing.eu/files/RE_Virtual_Roadmap_Workshop_Presentations.zip" download>here</a> (.zip, 7.8 MB).</div>
          <div class="mb-4">We encourage you to contact us if you were not able to attend the workshop but would like to be involved in the development of the roadmap for the renewable energy sector.</div>
          <div class="mb-4 text-left">Marie-Theres Kügerl, Montanuniversität Leoben, <br/><a href="mailto:marie-theres.kuegerl@unileoben.ac.at">marie-theres.kuegerl[at]unileoben.ac.at</a></div>
          `
      }
    ]
  }),

  mounted() {
    if (this.$route.query && this.$route.query.tab) {
      let tab = this.$route.query.tab;

      this.physicalEvents.forEach(item => {
        if (item.title === tab) {
          item.showInfo = true;
          this.$vuetify.goTo(`#${tab.replaceAll(" ", "_")}`, { offset: -40 });
        } else item.showInfo = false;
      });

      this.virtualEvents.forEach(item => {
        if (item.title === tab) {
          item.showInfo = true;
          this.$vuetify.goTo(`#${tab.replaceAll(" ", "_")}`, { offset: -40 });
        } else item.showInfo = false;
      });

      this.eventsArchive.forEach(item => {
        if (item.title === tab) {
          item.showInfo = true;
          this.$vuetify.goTo(`#${tab.replaceAll(" ", "_")}`, { offset: -40 });
        } else item.showInfo = false;
      });
    }
  }
};

/* 
      {
        title: "Virtual Conferences",
        showInfo: false,
        text: `
        <div class="text-center font-weight-bold headline mb-2" >Drivers of Responsible Sourcing</div>
        <div class="text-center font-weight-bold mb-2 headline">Common Grounds - Collective Actions - Lasting Change </div>
        <div class="text-center font-weight-bold mb-5 title">Virtual Conference, Jan 18th and 19th 2021</div>
        <div class="text-center font-weight-bold mb-5">THANK YOU!</div>

        <div class="text-center font-weight-bold mb-5"><a href="https://www.re-sourcing.eu/files/OC_Agenda_external_02_12_2020.pdf" target="blank">Event agenda</a></div>
          
        <div class="mb-3">The RE-SOURCING project team would like to thank you for taking part in our first virtual Conference: Drivers of Responsible Sourcing, Common Grounds - Collective Actions - Lasting Change.</div>
        <div class="mb-3">The event was a great success for us, with more than 240 participants from around the globe, plenty of interesting presentations, discussions, questions and comments that we will take on as input for our project!</div>
        <div class="">The event outlined the main mechanisms that drive this transition towards more responsible sourcing practices along the topics of:</div>
        <ul class="mb-3">
        <li>Awareness Building & Advocacy: Our global pledge to leave no one behind</li>
        <li>Industry Frontrunners & Business Alliances: Improving Supply Risks, Competitiveness & Reputation</li>
        <li>Regulations & Standards: The Interplay between policies & standards</li>
        <li>Investment & Stock and Commodity Markets: How the financial sector can push for more Responsible Sourcing</li>
        </ul>

        <div class="mb-3">Here is a quick recap teaser for those of you who participated, and a small taste for those who were not able to do so: </div>
        <div style="max-width: 560px; margin: auto">
        <div class="mt-4 mb-4 video-container">
            <iframe class="video" width="560" height="315" title="Disruptions to responsible sourcing after-movie" src="https://www.youtube.com/embed/3K2OQiqMXUI" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
        
        <div class="mb-3">Here you can find the event’s individual Sessionsrecordings and presentation slides:</div>
        <div class="text-center font-weight-bold mb-5">DAY 1: Monday 18th of January 2021</div>

        <div><span class="font-weight-bold">Session 1. Introduction: </span>Welcome, Understanding the drivers & needs for RS</div>
        <ul class="mb-3">
        <li>Conference Welcome by <strong>André Martinuzzi</strong>, Institute for Managing Sustainability, Vienna University of Economics and Business (pdf)</li>
        <li>Opening Key-note by <strong>MaijaLaurila, EC DG JUST</strong></li>
        <li>Opening Key-note by <strong>MasumaFarooki</strong>, Minehutte </li>
        <li>Opening Key-note by <strong>Andreas Endl</strong>, Institute for Managing Sustainability, Vienna University of Economics and Business (pdf)</li>
        <li>Session recording (youtube link)</li>
        </ul>

        <div><span class="font-weight-bold">Session 2. Awareness Building & Advocacy: </span>Our global pledge to leave no one behind - How to make frontline communities heard and respected in the process towards RS?</div>
        <ul class="mb-3">
        <li>Key-note presentation by <strong>Mark Dummett</strong>, Amnesty international (pdf)</li>
        <li>Practice example by <strong>Emmanuel Umpula</strong>, AFREWATCH(pdf)</li>
        <li>Session recording (youtube link)</li>
        </ul>

        <div><span class="font-weight-bold">Session 3. Industry Frontrunners & Business Alliances: </span>Exploring the case for building Alliances: Challenges & opportunities in strengthening business competitiveness and bench-marking responsible sourcing</div>
        <ul class="mb-3">
        <li>Key-note presentation by <strong>Alexander Nick</strong>, BMW (pdf)</li>
        <li>Practice example by Badrinath Veluri, Rare Earth Industry Association (pdf)</li>
        <li>Session recording (youtube link)</li>
        </ul>

        <div class="text-center font-weight-bold mb-5">DAY 2: Tuesday 19th of January 2021</div>

        <div><span class="font-weight-bold">Session 4. Regulations & Standards: </span>The Interplay between policies & standards: A mutually supportive or conflicting relationship?</div>
        <ul class="mb-3">
        <li>Key-note presentation byTyler Gillard, OECD(only recording)</li>
        <li>Practice example by Fiona Solomon, Aluminium Stewardship Initiative (pdf)</li>
        <li>Session recording (youtube link)</li>
        </ul>

        <div><span class="font-weight-bold">Session 5. Investment & Stock and Commodity Markets: </span>How can the financial sector push for more Responsible Sourcing – the role of ESG ratings, impact investment and what else?</div>
        <ul class="mb-3">
        <li>Key-note presentation by Andreas Hoepner, OECD(only recording)</li>
        <li>Practice example by John Howchin, Swedish Pension Fund (pdf)</li>
        <li>Session recording (youtube link)</li>
        </ul>

        <div><span class="font-weight-bold">Session 6. Wrap up of the Opening Conference: </span>Change is in the air – What is it and are we on the right track?</div>
        <ul class="mb-3">
        <li>Key-note presentation by Andreas Hoepner, OECD(only recording)</li>
        <li>Practice example by John Howchin, Swedish Pension Fund (pdf)</li>
        <li>Session recording (youtube link)</li>
        </ul>
      `,
        days: [
          {
            title: "DAY 1: Monday 18th of January 2021",
            sessions: [
              {
                title: "Session 1. Introduction: ",
                subtitle: "",
                text: `
                    <ul class="mb-3">
        <li>Conference Welcome by <strong>André Martinuzzi</strong>, Institute for Managing Sustainability, Vienna University of Economics and Business (pdf)</li>
        <li>Opening Key-note by <strong>MaijaLaurila, EC DG JUST</strong></li>
        <li>Opening Key-note by <strong>MasumaFarooki</strong>, Minehutte </li>
        <li>Opening Key-note by <strong>Andreas Endl</strong>, Institute for Managing Sustainability, Vienna University of Economics and Business (pdf)</li>
        <li>Session recording (youtube link)</li>
        </ul>
            `,
              },
              {
                title: "Session 2. Awareness Building & Advocacy: ",
                subtitle:
                  "Our global pledge to leave no one behind - How to make frontline communities heard and respected in the process towards RS?",
                text: `
                   <ul class="mb-3">
        <li>Key-note presentation by <strong>Mark Dummett</strong>, Amnesty international (pdf)</li>
        <li>Practice example by <strong>Emmanuel Umpula</strong>, AFREWATCH(pdf)</li>
        <li>Session recording (youtube link)</li>
        </ul>
            `,
              },
              {
                title:
                  "Session 3. Industry Frontrunners & Business Alliances: ",
                subtitle:
                  "Exploring the case for building Alliances: Challenges & opportunities in strengthening business competitiveness and bench-marking responsible sourcing",
                text: `
                   <ul class="mb-3">
        <li>Key-note presentation by <strong>Alexander Nick</strong>, BMW (pdf)</li>
        <li>Practice example by Badrinath Veluri, Rare Earth Industry Association (pdf)</li>
        <li>Session recording (youtube link)</li>
        </ul>
            `,
              },
            ],
          },
          {
            title: "DAY 2: Tuesday 19th of January 2021",
            sessions: [
              {
                title: "Session 4. Regulations & Standards: ",
                subtitle:
                  "The Interplay between policies & standards: A mutually supportive or conflicting relationship?",
                text: `
        <ul class="mb-3">
        <li>Key-note presentation byTyler Gillard, OECD(only recording)</li>
        <li>Practice example by Fiona Solomon, Aluminium Stewardship Initiative (pdf)</li>
        <li>Session recording (youtube link)</li>
        </ul>
            `,
              },
              {
                title: "Session 5. Investment & Stock and Commodity Markets: ",
                subtitle:
                  "How can the financial sector push for more Responsible Sourcing – the role of ESG ratings, impact investment and what else?",
                text: `
        <ul class="mb-3">
        <li>Key-note presentation by Andreas Hoepner, OECD(only recording)</li>
        <li>Practice example by John Howchin, Swedish Pension Fund (pdf)</li>
        <li>Session recording (youtube link)</li>
        </ul>
            `,
              },
              {
                title: "Session 6. Wrap up of the Opening Conference: ",
                subtitle:
                  "Change is in the air – What is it and are we on the right track?",
                text: `
                          <ul class="mb-3">
        <li>Session recording (youtube link)</li>

        </ul>
            `,
              },
            ],
          },
        ],
      },
*/
</script>

<style scoped>
.video-container {
  height: 0;
  padding-bottom: 56.25%;
  position: relative;
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
