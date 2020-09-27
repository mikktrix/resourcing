<template>
  <div class="sector_state_of_plays white--text">
    <v-row no-gutters>
      <v-col
        cols="12"
        class="py-3"
        :class="{
          'px-5': $vuetify.breakpoint.smAndDown,
          'px-12': $vuetify.breakpoint.mdAndUp
        }"
      >
        <div class="text-h5 font-weight-bold mt-2">
          Moving forward
        </div>

        <v-row>
          <v-col cols="12" lg="8" class="text-h7 text-justify">
            <p>
              Within the RE-SOURCING project, sectoral roadmaps, flagship cases
              and sector state-of-play reports will be developed for the three
              key European industrial sectors: Renewable Energy Sector, Mobility
              Sector and Electric and Electronic Equipment Sector.
            </p>
            <p>
              <i
                >This section will host the project findings and output as it is
                developed.</i
              >
            </p>
            <p>
              <i
                >For further details on what sectoral issues will be addressed,
                please see
                <router-link class="white--text link" to="/target_groups"
                  >Target Groups.</router-link
                ></i
              >
            </p>
            <p>
              <i
                >For more information on Sector Roadmaps and Flagship Cases,
                please see
                <a
                  class="white--text link"
                  href="https://re-sourcing.eu/files/D1.2_in%20RS%20template_FINAL.pdf"
                  target="blank"
                  >RE-SOURCING Report (2): The RE-SOURCING Common Approach</a
                >
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
                require('../assets/img/structure-and-content/Moving Forward.jpg')
              "
            ></v-img>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" md="4" v-for="(card, index) in cards" :key="index">
            <v-hover v-slot:default="{ hover }">
              <v-card
                class="pa-2 mx-3 my-3"
                :elevation="hover ? 12 : 4"
                hover
                @click="card.show = !card.show"
                :ripple="false"
              >
                <div class="d-flex justify-center" style="min-height: 200px;">
                  <div
                    class="text-h4 primary--text font-weight-light pa-2 align-self-center text-center"
                  >
                    {{ card.title }}
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

                  <v-btn icon :aria-label="`toggle ${card.title} info`">
                    <v-icon v-if="card.show">fas fa-angle-up</v-icon>
                    <v-icon v-else>fas fa-angle-down</v-icon>
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <div v-show="card.show">
                    <v-divider></v-divider>

                    <v-card-text>
                      {{ card.text }}
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
  name: "MovingForward",
  data: () => ({
    cards: [
      {
        title: "Sector state of play",
        show: false,
        text:
          "To afford a better understanding of the state-of-play in three raw material-based sectors: Renewable energy, mobility and electronics and electric equipment, the state-of-play reports will describe existing global and EU focused responsible sourcing approaches."
      },
      {
        title: "Flagship cases",
        show: false,
        text:
          "The challenges faced for broader RS implementation should not take away from the fact that a number of EU firms and sectors have taken significant steps in this area. Flagship cases will be used to facilitate application of good practice learning and transferability of responsible sourcing practices amongst and between the three sectors."
      },
      {
        title: "Roadmaps",
        show: false,
        text:
          "To address responsible sourcing in a holistic manner, such that collective synergies of industry, policy and civil society can be stimulated, RE-SOURCING will develop roadmaps for each sector. These roadmaps will form the basis for identifying actions required from businesses and the general shape of EU framework conditions for supporting RS."
      }
    ]
  })
};
</script>

<style scoped></style>