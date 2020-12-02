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

      <v-row no-gutters class="justify-center">
        <v-col
          cols="12"
          lg="4"
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

      <v-row no-gutters class="justify-center">
        <v-col
          cols="12"
          lg="4"
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

      <v-row no-gutters class="justify-center">
        <v-col
          cols="12"
          lg="4"
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
    virtualEvents: [
      {
        title: "Virtual Conferences",
        showInfo: false,
        text: `
        <div class="text-center font-weight-bold headline mb-2" >RE-SOURCING</div>
        <div class="text-center font-weight-bold mb-2 headline">Opening Conference</div>
        <div class="text-center font-weight-bold mb-2 title">Drivers of Responsible Sourcing: Find Common Ground, Prompt Collective Action, Create Lasting Change</div>
        <div class="text-center mb-5">Virtual Event</div>

        <div class="text-center font-weight-bold mb-2"><a href="https://www.re-sourcing.eu/files/OC_Agenda_external_02_12_2020.pdf" target="blank">Event agenda</a></div>
        <div class="mb-5 font-weight-bold text-center"><a href="https://www.eventbrite.at/e/re-sourcing-virtual-opening-conference-registration-127671046537" target="blank" rel="noreferrer noopener">Register</a></div>
        
        <div class="mb-2 font-weight-bold text-center">Please mark this event in your calendar:</div>
        <div class="text-center"><a href="https://mcusercontent.com/4131de53447fbeab61124f6d0/files/5fbd837f-3c04-4ad1-836e-20da6a7e4357/RE_SOURCING_Opening_Conference_Day_1.ics" target="blank" rel="noreferrer noopener">Calendar invitation Day 1: January 18 – 12:30-17:30 CET</a></div>
        <div class="mb-5 text-center"><a href="https://mcusercontent.com/4131de53447fbeab61124f6d0/files/bb3e3f3c-f118-496d-a357-f138d10affcd/RE_SOURCING_Opening_Conference_Day_2.ics" target="blank" rel="noreferrer noopener">Calendar invitation Day 2: January 19 – 10:00-16:00 CET</a></div>
        
        <div class="mb-3">The RE-SOURCING Project is hosting its Virtual Opening Conference – <b>“Drivers of Responsible Sourcing: Find Common Ground, Prompt Collective Action, Create Lasting Change”</b> – on 18th-19th January 2021!</div>
        <div class="mb-5">The virtual event will host <b>150+ participants from across the globe</b> and <b>we cordially invite you to join us:</b> Learn from and engage with high-level experts from business, policy and civil society! </div>
        
        <div class="mb-3 font-weight-bold title">Event Overview</div>
        <div class="mb-3">Responsible Sourcing has come of age, with a plethora of initiatives, actions, paradigms and management approaches to support global sustainability agendas. At the same time, Responsible Sourcing is facing a challenging moment in time: The <a href="https://www.youtube.com/watch?v=ioqfUXJ9QGY&feature=youtu.be" target="blank" rel="noopener norefferrer">EU Green Deal</a>, the <a href="https://www.youtube.com/watch?v=0HI6yeAA3cM&feature=youtu.be" target="blank" rel="noopener norefferrer">COVID-19 pandemic</a>, a narrowing window to meet global climate goals and various other changes require us to rethink the future of Responsible Sourcing.</div>
        <div class="mb-5">The RE-SOURCING Project recognizes the opportunity of this moment to consolidate our global experiences and forge an agreed path for the future. <b>We invite you to join the project’s Opening Conference that will dive into some of the major Drivers of Responsible Sourcing.</b> Examining the road already travelled and mapping the paths ahead, we will delve into the question: Are we on track to find common ground, prompt collective action, and create lasting change?</div>
        
        <div class="mb-3 font-weight-bold title">Who should attend this event?</div>
        <div class="mb-3"><b>Responsible Sourcing Opening Conference</b> “Drivers of Responsible Sourcing” welcomes businesses, policy makers, civil society and academia alike to bring forward their view on where we stand and where we should go with Responsible Sourcing. We encourage an open and critical, yet constructive discourse that increases problem awareness from all relevant perspectives.</div>
        <div class="mb-5">You should attend this event to learn more about the current state of Responsible Sourcing, engage with the RE-SOURCING network, and participate in peer learning and knowledge co-creation for supporting businesses and policy makers in their uptake of Responsible Sourcing.</div>
        
        <div class="mb-3 font-weight-bold text-center"><a href="https://www.eventbrite.at/e/re-sourcing-virtual-opening-conference-registration-127671046537" target="blank" rel="noreferrer noopener">Register here for the RE-SOURCING Opening Conference </a></div>

      `
      }
    ],
    eventsArchive: [
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
