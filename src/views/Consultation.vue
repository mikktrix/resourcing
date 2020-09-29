<template>
  <div class="roadmaps ">
    <v-row no-gutters>
      <v-col
        cols="12"
        class="py-3"
        :class="{
          'px-5': $vuetify.breakpoint.smAndDown,
          'px-12': $vuetify.breakpoint.mdAndUp
        }"
      >
        <div class="text-h5 primary--text font-weight-bold mt-2">
          Consultations
        </div>

        <v-row>
          <v-col cols="12" lg="8" class="text-h7 text-justify">
            <p>
              RE-SOURCING is a network driven project and aims to share the
              experiences and knowledge from stakeholders facing the everyday
              challenges of responsible sourcing. Thus, the project focuses on
              interactions and dialogues with actors along the whole supply
              chain in the three key sectors.
            </p>
            <p>
              To facilitate these learning opportunities, project consultations
              involve both physical and virtual events in addition to
              conferences.
            </p>
            <p>
              <i
                >As these events take place over the project, this webpage will
                be updated to include agendas, presentations and summary
                findings of these events.</i
              >
            </p>
            <p>
              <i
                >For upcoming and past events, please see
                <router-link class=" link" to="/events">Events</router-link>
              </i>
            </p>
          </v-col>
          <v-col
            cols="12"
            lg="4"
            class="py-3 px-5 d-flex justify-center align-center"
          >
            <v-img
              class="rounded align-self-center"
              style="border: 3px solid white"
              max-width="400px"
              :src="
                require('../assets/img/structure-and-content/Consultation page.jpg')
              "
            ></v-img>
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col
            cols="12"
            md="4"
            v-for="(event, index) in projectEvents"
            :key="index"
          >
            <v-hover v-slot:default="{ hover }">
              <v-card
                class="pa-2 mx-3 my-3"
                :elevation="hover ? 12 : 4"
                hover
                @click="event.show = !event.show"
                :ripple="false"
              >
                <div class="d-flex justify-center" style="min-height: 200px;">
                  <div
                    class="text-h4 primary--text font-weight-light pa-2 align-self-center text-center"
                  >
                    {{ event.title }}
                  </div>
                </div>

                <v-card-actions class="pa-0">
                  <v-img
                    :src="
                      require('../assets/logos/project_logo/re-sourcing_transparent.png')
                    "
                    max-width="125"
                  >
                  </v-img>
                  <v-spacer />

                  <v-btn icon :aria-label="`toggle ${event.title} info`">
                    <v-icon v-if="event.show">fas fa-angle-up</v-icon>
                    <v-icon v-else>fas fa-angle-down</v-icon>
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <div v-show="event.show">
                    <v-divider></v-divider>

                    <v-card-text>
                      {{ event.text }}
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div></template
>

<script>
export default {
  name: "Consultation",
  data: () => ({
    projectEvents: [
      {
        title: "Roadmap workshops",
        show: false,
        text:
          "The project will be developing roadmaps for each of the three sectors. As part of the roadmap development process, workshops will be organised, with the aim of discussing the concepts, draft versions and visions with primary stakeholders."
      },
      {
        title: "Flagship labs",
        show: false,
        text:
          "In person and virtual workshops on good practices will be organised for each sector. Relevant actors to be included in these labs will constitute of three main groups of key decision-makers and practitioners: a) Individual firms, business associations and non-profit organisations with business background interested in new approaches to RS (e.g. Intel, Chambers of Commerce, Zinc Association etc.) b) Global and EU responsible sourcing initiatives & platforms (e.g. Responsible Business Alliance) and c) Other supporting stakeholders e.g. public policy authorities giving incentives to businesses towards the uptake of RS practices.  "
      },
      {
        title: "Global advocacy fora",
        show: false,
        text:
          "As part of the engagement with relevant international stakeholders to foster the application of responsible sourcing concepts in the global agenda setting, the project plans three Global Advocacy Fora: regional workshops in Chile, China and Sub-Saharan Africa. The aim of the Global Advocacy Fora is to a) encourage awareness and context for a global definition of responsible sourcing, b) networking and exchange with regional opinion leaders on pressing regional RS issues, and c) establishing interfaces with global influencers and EU sectoral roadmaps in creating a global RS level playing field. "
      }
    ]
  })
};
</script>

<style scoped>
.mui-ripple-circle {
  display: none;
}
</style>
