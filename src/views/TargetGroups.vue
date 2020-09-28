<template>
  <div class="target-groups text-justify">
    <v-row no-gutters>
      <v-col
        cols="12"
        class="py-3"
        :class="{
          'px-5': $vuetify.breakpoint.smAndDown,
          'px-12': $vuetify.breakpoint.mdAndUp
        }"
      >
        <div
          class="text-h4 primary--text font-weight-bold mt-2 d-flex justify-center"
        >
          Industrial sectors
        </div>

        <v-row no-gutters>
          <v-col class="mx-auto" cols="12" sm="11" md="10" lg="8" xl="6">
            <v-card flat color="transparent">
              <v-card-text class="text-h7">
                <p>
                  The European Green Deal marks Europe’s commitment to become
                  the world’s first climate-neutral continent by
                  2050.RE-SOURCING will develop visions & roadmaps for
                  responsible sourcing in the three sectors of Renewable Energy,
                  Mobility and Electric and Electronic Equipment to guarantee a
                  sustainable transition based on environmentally friendly,
                  socially equitable and economically profitable sourcing in
                  global mineral value chains.
                </p>

                <p>
                  These three sectors represent essential priorities in the
                  European long-term vision: the
                  <span class="accent2--text font-weight-bold">Mobility</span>
                  sector for clean mobility and
                  <span class="accent--text font-weight-bold"
                    >Renewable energy</span
                  >
                  for the fully de-carbonised energy supply. The
                  <span class="accent3--text font-weight-bold">EEE-sector</span>
                  reflects the relevant questions on the conflict mineral
                  regulation. Their contribution is essential to achieving the
                  targets that have been set by the EU Green Deal. To ensure
                  that the ‘output’ from these sectors contributes to the
                  sustainability agenda, responsible sourcing practices within
                  these sectors need to be strengthened.
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col
            cols="12"
            md="4"
            v-for="(group, index) in targetGroups"
            :key="index"
          >
            <v-card flat color="transparent" class="mx-auto" max-width="500">
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="ma-3 group-border"
                  :elevation="hover ? 24 : 4"
                  :class="[
                    hover
                      ? `elevation-24-${group.accent.hover}`
                      : `elevation-4-${group.accent.hover}`,
                    group.style
                  ]"
                  hover
                >
                  <v-img
                    :src="group.image"
                    aspect-ratio="1"
                    @click="group.show = !group.show"
                  >
                  </v-img>

                  <v-card-actions
                    class="pa-0 title-top"
                    :class="group.style"
                    @click="group.show = !group.show"
                  >
                    <v-card-title
                      class="font-weight-bold text-uppercase justify-end pb-2 text-center flex-grow-1"
                      :class="group.accent.text"
                      style="word-break: break-word"
                      >{{ group.name }}</v-card-title
                    >
                    <v-spacer />

                    <v-btn
                      icon
                      @click.stop="group.show = !group.show"
                      aria-label="toggle mobility text"
                    >
                      <v-icon v-if="group.show">fas fa-angle-up</v-icon>
                      <v-icon v-else>fas fa-angle-down</v-icon>
                    </v-btn>
                  </v-card-actions>

                  <v-card-text class="text-body-1" v-if="group.show">
                    <p>
                      {{ group.text }}
                    </p>
                    <!-- FAQ -->
                    <v-card
                      v-for="(question, index) in group.questions"
                      :key="index"
                      flat
                    >
                      <v-card-actions
                        class="pa-0"
                        @click="question.show = !question.show"
                      >
                        <v-card-title
                          class="text-h7 font-weight-bold text-left"
                          style="word-break: keep-all "
                          >{{ question.question }}</v-card-title
                        >
                        <v-spacer />

                        <v-btn
                          icon
                          @click.stop="question.show = !question.show"
                          aria-label="toggle question"
                        >
                          <v-icon v-if="question.show">fas fa-angle-up</v-icon>
                          <v-icon v-else>fas fa-angle-down</v-icon>
                        </v-btn>
                      </v-card-actions>
                      <v-card-text
                        class="d-flex flex-column"
                        v-if="question.show"
                        v-html="question.answer"
                      >
                      </v-card-text>
                    </v-card>
                    <!-- FAQ -->
                  </v-card-text>
                </v-card>
              </v-hover>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "TargetGroups",
  data: () => ({
    targetGroups: [
      {
        name: "RENEWABLE ENERGY",
        show: false,
        image: require("../assets/img/renewable_energy.jpg"),
        style: "renewable",
        accent: { hover: "accent", text: "accent--text" },
        text: `The Renewable Energy (RE) sector encompasses the installation and operations for the production and delivery of energy that originates from renewable sources. In 2017, 30% of energy production in the EU was from renewable sources. The EU Directive 2018/2001 on the promotion of the use of energy from renewable sources has set a target of 32% by 2030.`,
        questions: [
          {
            question: "What challenges are we considering?",
            show: false,
            answer:
              "With the predicted capacity expansion of renewable energies, the demand for certain raw materials is expected to considerably increase. This will lead to a number of challenges, including:" +
              "<ul><li>How will the rapid increase in demand for raw materials be met without disregarding sustainable and responsible mining practices?</li>" +
              "<li>Recycling can make significant contributions to metal supply, and yet Indium, Lithium, Neodymium, and Vanadium, essential for successful energy transition, show end-of-life recycling rates of less than 1%. How can recycling rates be improved?</li>" +
              "<li>With only small steps having been taken towards the implementation OECD Due Diligence Guidance on Responsible Business Conduct in the renewable energy sector, what actions are required to reinforce efforts to take up responsible sourcing along the supply chain?</li></ul>"
          },
          {
            question: "What segments of the value chain are we engaging?",
            show: false,
            answer:
              "The research team will be focusing on the mining and manufacturing segments of the renewable energy value chain." +
              `<br /><img src="https://github.com/mikktrix/resourcing/blob/master/src/assets/img/structure-and-content/Target_Group_RE_Sector.jpg?raw=true" alt="RE-sectors"></img>`
          },
          {
            question: "What questions are we asking?",
            show: false,
            answer:
              "<ul><li>What indicators and approaches should be included for responsible sourcing and a responsible supply chain for the renewable energy sector?</li>" +
              "<li>What is the current state of responsible sourcing initiatives and are they fit-for-purpose?</li>" +
              "<li>What actions and strategies have been adopted by the industry to meet responsible sourcing objectives?</li>" +
              "<li>Are the current responsible sourcing approaches and standards adequate and fit-for-purpose, or does the industry need additional guidelines and assistance to ensure responsible sourcing?</li></ul>"
          },
          {
            question: "What minerals are we studying?",
            show: false,
            answer:
              "The research team will focus on materials required for the energy transition. This includes traditional metals (mainly copper), as well as green tech minerals (e.g. rare earth elements)."
          },
          {
            question: "How are we going to do this?",
            show: false,
            answer:
              "<p><strong>Road maps: proposed consultations starting in Q4 2020</strong></p>" +
              "<p>A draft roadmap/discussion paper is being developed in cooperation with project partners (Platform Steering Committee) mainly via online consultations. We will include expert interviews and a narrative analysis to analyse the current state of the renewable energy sector. This will focus on challenges to outline required areas of action, responsible sourcing initiatives, define relevant actors and stakeholders, and develop a first draft for the roadmap. The roadmap will then be the basis for further elaboration during the roadmap workshop where we hope for input from all relevant stakeholders.</p>" +
              "<p><strong>Workshops: A workshop for the REE sector is envisaged in summer 2021 </strong></p>" +
              "<p><strong>Sector state of play reports/guidelines: </strong></p>" +
              "The project foresees three publications for the renewable energy sector: " +
              "<ul><li>“State-of-Play and roadmap concepts”: A report on the current situation of the sector including the proposed process for developing the roadmap and a first draft roadmap, due in Q3 2020.</li>" +
              "<li>“Guidelines for good practice learning and impact in the renewable energy sector”: A report on flagship cases (good practice cases incl. guidance for peer-learning), due in Q2 2021.</li>" +
              "<li>“Renewable energy sector roadmap for responsible sourcing of raw materials”: the final roadmap including milestones of how to reach responsible sourcing until 2050 and good practise information.</li></ul>"
          },
          {
            question: "Who should get involved?",
            show: false,
            answer:
              "The research team would be interested in the views all interested stakeholders, both from the EU and the international community, working in the renewable energy sector, particularly from the industry (mining/refining companies, equipment manufacturers – wind turbines, solar panels, recycling companies), as well as civil society and research institutions."
          }
        ]
      },
      {
        name: "MOBILITY",
        show: false,
        image: require("../assets/img/mobility.jpg"),
        style: "mobility",
        accent: { hover: "accent2", text: "accent2--text" },
        text: `The mobility sector includes manufacturing of motor vehicles and other transport equipment. The sector contributed nearly 3.5% to EU27 GDP in 2019, with 25% of the EU’s GHG emissions came from the transport sector. Under the Green Deal, 90% reduction of emissions from transport is required by 2050 to achieve climate neutrality with necessary contribution from all modes of transport.`,
        questions: [
          {
            question: "What challenges are we considering?",
            show: false,
            answer:
              "In the mobility sector, a rapid transformation is needed to achieve the climate targets set out for the EU. This will create a number of challenges including:" +
              "<ul><li>A rapid increase in demand for the materials used in electronic batteries, in response to the rapid market upturn in electric mobility, will require new mining projects to be brought on line as well expanding production at existing facilities. Such a rapid increase risks non-compliance with environmental and social standards as well as governance issues emerging, in response to raw material demands.</li>" +
              "<li>Technical and economic measures are needed to increase recycling yields. A significant amount of spent batteries will need to be collected and recycled in the future, requiring adequate infrastructure to facilitate recycling. Additionally, the recovery of raw materials used in lithium ion batteries via recycling is currently not addressing all relevant raw materials, which will need to be addressed.</li></ul>"
          },
          {
            question: "What segments of the value chain are we engaging?",
            show: false,
            answer:
              "<p>The research in the mobility sector will focus on the lithium ion batteries for electric vehicles. Within the electric car value chain, the battery is the most valuable component, account for 40% of the value addition.</p>" +
              "<p>Within the battery value chain, the project team is considering looking at three steps: Mining, Cell Manufacturing, and Recycling.</p>" +
              `<br /><img src="https://github.com/mikktrix/resourcing/blob/master/src/assets/img/structure-and-content/Target_Group_Mobility_GVC.jpg?raw=true" alt="Mobility sector"></img>`
          },
          {
            question: "What questions are we asking?",
            show: false,
            answer:
              "<ul><li>Does the current certification landscape around responsible and sustainable mining meet the requirements to achieve sustainable material production?</li>" +
              "<li>What constitutes sustainable cell production in Europe? And how can sustainable cell production be better established across Europe?</li>" +
              "<li>What actions and policies need to be undertaken to increase material specific recovery rates in recycling of electric batteries?</li></ul>"
          },
          {
            question: "What minerals are we studying?",
            show: false,
            answer:
              "The team will be considering traditional minerals (such as copper and steel), green technology minerals (such as cobalt, lithium and nickel). The expected focus will be on the battery materials: lithium, cobalt, nickel, and graphite."
          },
          {
            question: "How are we going to do this?",
            show: false,
            answer:
              "<p><i>Road maps</i>: Proposed consultations starting in summer 2022.</p>" +
              "<p>A draft roadmap/discussion paper will be developed in cooperation with project partners (Platform Steering Committee), including expert interviews and a narrative analysis to analyse the current state of the mobility sector, to develop a first draft for the roadmap. The roadmap will be further elaborated during the roadmap workshops with input from all relevant stakeholders.</p>" +
              "<p><i>Workshops</i>: A workshop on the mobility sector is envisaged in summer 2021.</p>" +
              "<p><i>Sector state of play reports/guidelines</i>: The project foresees three publications for the mobility sector, beginning in early 2021:</p>" +
              "<ul><li>“State-of-Play and roadmap concepts”: A report on the current situation of the sector including the proposed process for developing the roadmap and a first draft roadmap.</li>" +
              "<li>“Guidelines for good practice learning and impact in the renewable energy sector”: A report on flagship cases (good practice cases incl. guidance for peer-learning).</li>" +
              "<li>“Renewable energy sector roadmap for responsible sourcing of raw materials”: the final roadmap including milestones of how to reach responsible sourcing until 2050 and good practise information.</li></ul>"
          },
          {
            question: "Who should get involved?",
            show: false,
            answer:
              "The research team invites all interested stakeholders, both from the EU and the international community who work in the areas related to electric car battery manufacturing, battery recyclers and those involved in lithium extraction and production, particularly in Chile."
          }
        ]
      },
      {
        name: "ELECTRONICS & ELECTRONIC EQUIPMENT",
        show: false,
        image: require("../assets/img/electronics.jpg"),
        style: "electronics",
        accent: { hover: "accent3", text: "accent3--text" },
        text: `The Electronics sector is one of the largest industries in the world, with approximately 18 million workers who produce 20% of global imports in electronics products. In Europe, the revenue from the consumer electronics segment is expected to be around US$ 78mn (€ 71mn) in 2020; the sales of European semiconductors alone are expected to reach US$ 3.25bn (€ 2.97 bn) this year.`,
        questions: [
          {
            question: "What challenges are we considering?",
            show: false,
            answer:
              "<p>Sub-standard working conditions and human rights violations are pervasive along the production value chain in the EEE sector, including low wages, exposure to toxic chemicals, negative environmental impacts, health & safety risks, child labour and forced labour, indigenous people’s rights, intimidation, to name a few.</p>" +
              "<p>The risks that are specific to the supply chain of 3T from conflict and high-risk areas and include lack of implementation of Artisanal mining zones; Child labour; Unfair compensation and Corruption. Mica in particular is associated with dire working conditions in mines.</p>" +
              "<p>Given the prevailing risks that arise in this sector, related to the nature of the industrial work undertaken, how can responsible sourcing practices be implemented and verified across the supply chain?</p>"
          },
          {
            question: "What segments of the value chain are we engaging?",
            show: false,
            answer:
              "<p>Given the width and depth of actors in the EEE sector, the research team will be considering: End-users; Smelters/refineries; Component & Product Manufacturers and Mining companies within the EEE value chain. </p>" +
              `<br /><img src="https://github.com/mikktrix/resourcing/blob/master/src/assets/img/structure-and-content/Target_Group_EEE%20GVC.jpg?raw=true" alt="EEE sector" class="faq-img"></img>`
          },
          {
            question: "What questions are we asking?",
            show: false,
            answer:
              "<p>The research team will have a strong focus on solutions favouring reducing the material and energy throughput that goes into consumption and production, including material efficiency and recycling rather than focusing on mining virgin raw materials.</p>" +
              "<ul><li>o	How can virgin raw material extraction meet responsible sourcing requirements through verified third-party certification schemes and (mandatory) due diligence of the supply chains?</li>" +
              "<li>o	How can we build a cross sectoral responsible sourcing approach between the mining sector, electronics and automotive industries, given that they share a number of mineral supply chains and sources?</li></ul>"
          },
          {
            question: "What minerals are we studying?",
            show: false,
            answer:
              "The research team will be focusing on: " +
              "<ul><li>3TG (Tin, Tungsten, Tantalum, Gold)</li>" +
              "<li>Mica</li></ul>"
          },
          {
            question: "How are we going to do this?",
            show: false,
            answer:
              "<p><i>Road maps</i>: Proposed consultations starting in summer 2022.</p>" +
              "<p>A draft roadmap/discussion paper will be developed in cooperation with project partners (Platform Steering Committee), including expert interviews, to develop a first draft for the roadmap. The roadmap will be further elaborated during the roadmap workshops with input from all relevant stakeholders.</p>" +
              "<p><i>Workshops</i>: they are expected to be held in the Summer of 2022.</p>" +
              "<p><i>Sector state of play reports/guidelines</i>: The project foresees three publications for the EEE sector starting in Spring 2023:</p>" +
              "<ul><li>“State-of-Play and roadmap concepts”: A report on the current situation of the sector including the proposed process for developing the roadmap and a first draft roadmap</li>" +
              "<li>“Guidelines for good practice learning and impact in the renewable energy sector”: A report on so-called flagship cases (good practice cases incl. guidance for peer-learning)</li>" +
              "<li>“Renewable energy sector roadmap for responsible sourcing of raw materials”: the final roadmap including milestones of how to reach responsible sourcing until 2050 and good practise information. </li></ul>"
          },
          {
            question: "Who should get involved?",
            show: false,
            answer:
              "The research team would be interested in the views all interested stakeholders, both from the EU and the international community, particularly if you are an Electronic Equipment manufacturing (including brands) company, work with or for the Responsible Minerals Initiative/ Responsible Business Alliance (industry), part of the GoodElectronics Network (civil society, trade unions, academics), work with or for the Responsible Mica Initiative, have experience with IRMA and work with/for Mining companies involved in the extraction of raw materials under focus."
          }
        ]
      }
    ],
    showMobility: false,
    showEnergy: false,
    showElectronics: false
  }),
  methods: {}
};
</script>

<style scoped>
.group-border {
  border: 8px solid;
}

.title-top {
  border-top: 8px solid;
}

.mobility {
  border-color: #a7b32a;
  color: #a7b32a;
}

.renewable {
  border-color: #972e63;
  color: #972e63;
}

.electronics {
  border-color: #f0a846;
}

.faq-img {
  max-width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.elevation-4-accent {
  box-shadow: 0px 2px 4px -1px rgba(151, 46, 99, 0.4),
    0px 4px 5px 0px rgba(151, 46, 99, 0.28),
    0px 1px 10px 0px rgba(151, 46, 99, 0.24) !important;
}

.elevation-4-accent2 {
  box-shadow: 0px 2px 4px -1px rgba(167, 179, 42, 0.4),
    0px 4px 5px 0px rgba(167, 179, 42, 0.28),
    0px 1px 10px 0px rgba(167, 179, 42, 0.24) !important;
}

.elevation-4-accent3 {
  box-shadow: 0px 2px 4px -1px rgba(248, 168, 70, 0.4),
    0px 4px 5px 0px rgba(248, 168, 70, 0.28),
    0px 1px 10px 0px rgba(248, 168, 70, 0.24) !important;
}

.elevation-24-accent {
  box-shadow: 0px 11px 15px -7px rgba(151, 46, 99, 0.4),
    0px 24px 38px 3px rgba(151, 46, 99, 0.28),
    0px 9px 46px 8px rgba(151, 46, 99, 0.24) !important;
}

.elevation-24-accent2 {
  box-shadow: 0px 11px 15px -7px rgba(167, 179, 42, 0.4),
    0px 24px 38px 3px rgba(167, 179, 42, 0.28),
    0px 9px 46px 8px rgba(167, 179, 42, 0.24) !important;
}

.elevation-24-accent3 {
  box-shadow: 0px 11px 15px -7px rgba(248, 168, 70, 0.4),
    0px 24px 38px 3px rgba(248, 168, 70, 0.28),
    0px 9px 46px 8px rgba(248, 168, 70, 0.24) !important;
}
</style>
