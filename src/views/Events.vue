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
        <div class="text-center font-weight-bold mb-2">SAVE THE DATE</div>
        <div class="text-center font-weight-bold mb-2">RE-SOURCING Virtual Opening Conference</div>
        <div class="text-center font-weight-bold mb-5">18-19 January 2021</div>
        
        <div class="mb-2">The EU Green New Deal will lead to a significant increase in the consumption of mineral resources, which are the material backbone of many green technologies. At the same time, new legal requirements and policy strategies at the EU and national levels require adherence to increasingly stringent environmental and social standards, strongly influencing the sourcing of these minerals.</div>
        <div class="mb-3">The <b>RE-SOURCING Virtual Opening Conference</b> will focus on the various aspects of implementing responsible sourcing from the business and policy perspective. </div>
        <div class="mb-3">The conference will look at the future of <b>responsible sourcing and its implementation in Europe</b> including recent developments such as the launch of the Critical Raw Materials Action Plan, European Raw Materials Alliance, and the Conflict Minerals Regulation that is coming into force in 2021. In addition, we will equally address the <b>global situation of responsible sourcing</b>, how it affects and is affected by European policies, business practices and more.</div>
       
        <div class="mb-3">The conference will <b>take place online</b> and host over 250 participants with representatives from all relevant stakeholder groups (industry, policy, CSOs and research) across Europe, Latin America, Africa and Asia, offering an excellent opportunity to learn, exchange and network.</div>
        <div class="mb-5">Please stay tuned and block the dates in your calendar - More detailed information on the agenda will be provided soon!</div>
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
        <div class="text-center font-weight-bold mb-5"><a href="https://www.re-sourcing.eu/files/Disruptions_to_Responsible_Sourcing_Briefing.pdf" target="blank">Post event briefing</a></div>
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
          <div class="text-center font-weight-bold mb-3">A reality or still a long way to go?</div>
          <div class="text-center font-weight-bold mb-3" >On 29 October 2020, 13:00 - 17:00 CET</div>
          <div class="text-center font-weight-bold mb-5"><a href="https://www.re-sourcing.eu/files/RE-Sourcing_Roadmap%20WS%20Agenda.pdf" target="blank">Event agenda</a></div>
          <div class="text-center font-weight-bold mb-5"><a href="https://re-sourcing.eu/files/MUL_Consent%20Form.pdf" target="blank">Participant Information Sheet</a></div>
          <div class="mb-4">The RE-SOURCING project is aiming to develop a roadmap for the renewable energy sector to achieve a sustainable and responsible value chain. To achieve this goal a virtual roadmap workshop will be held on <b>29 October 2020, 13:00 - 17:00 CET</b>.</div>
          <div class="font-weight-bold mb-4">At this workshop, our focus will be on:</div>
          <ul class="mb-4">
            <li>mining & processing of copper, rare earth elements, and silicon</li>
            <li>manufacturing and recycling of wind turbines and solar panels</li>
            <li>standards for sustainability and responsible sourcing</li>
          </ul>
          <div class="text-center text-decoration-none font-weight-bold red--text ml-1">Registration closed!</div>

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
