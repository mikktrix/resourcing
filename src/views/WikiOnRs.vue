<template>
  <div class="wiki_on_rs">
    <v-row no-gutters>
      <v-col
        cols="12"
        md="8"
        class="py-3"
        :class="{
          'px-5': $vuetify.breakpoint.smAndDown,
          'px-12': $vuetify.breakpoint.mdAndUp
        }"
      >
        <div class="text-h5 primary--text font-weight-bold mt-2">
          WIKI on RS
        </div>

        <v-row>
          <v-col cols="12" class="text-h7 text-justify">
            Responsible sourcing practices are embedded in the wider
            sustainability agenda; they are a means to an end. Numerous
            approaches have been developed by industry and civil society to
            address RS challenges, across global value chains, ranging from
            employing safe and fair labour practices, protecting human rights,
            safeguarding financial integrity, mitigating impacts on the
            environment linked to operations, the social impact on communities
            and inter-related business practices, to name a few.
          </v-col>

          <v-col cols="12" class="text-h7 text-justify">
            Businesses, dependent on their size and location within global value
            chains, have different options to adopt, adapt, implement and report
            on their RS practices. With the multitude of management strategies,
            reporting standards, certification schemes and templates for the
            collection and sharing of information, implementing responsible
            sourcing can be a struggle for the well-intentioned firm.
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="4" class="pt-3 pt-md-8 text-center ">
        <div>
          <figure>
            <v-img
              class="rounded align-self-center"
              style="border: 3px solid white; display: block; margin: 0 auto"
              alt="Post-it notes on a wall"
              max-width="300px"
              :src="
                require('../assets/img/structure-and-content/Responsible Sourcing.jpg')
              "
            ></v-img>
            <figcaption style="font-size: small">
              Photo by
              <a
                href="https://unsplash.com/@nathaliarosa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="blank"
                >Nathália Rosa</a
              >
              on
              <a href="https://unsplash.com/" target="blank">Unsplash</a>
            </figcaption>
          </figure>
        </div>
      </v-col>
    </v-row>

    <div class="d-flex justify-center">
      <v-row no-gutters>
        <v-col
          cols="12"
          class="py-3"
          :class="{
            'px-5': $vuetify.breakpoint.smAndDown,
            'px-12': $vuetify.breakpoint.mdAndUp
          }"
        >
          <!-- questions -->
          <v-row class="pt-3">
            <v-col md="6" cols="12" class="pt-0">
              <v-card
                v-for="(question, index) in firstColumnQuestions"
                :key="index"
                rounded="0"
                flat
                style="width:100%"
                color="primary5"
              >
                <v-card-actions
                  class="pa-0"
                  style="cursor: pointer"
                  @click="question.show = !question.show"
                >
                  <v-card-title
                    class="text-h7 font-weight-bold text-left primary--text"
                    style="word-break: keep-all; "
                  >
                    {{ question.question }}
                  </v-card-title>
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
                  class="d-flex flex-column text-h7 black--text text-justify"
                  v-if="question.show"
                  v-html="question.answer"
                >
                </v-card-text>
              </v-card>
            </v-col>
            <v-col md="6" cols="12" class="pt-0">
              <v-card
                v-for="(question, index) in secondColumnQuestions"
                :key="index"
                rounded="0"
                flat
                style="width:100%"
                color="primary5"
              >
                <v-card-actions
                  class="pa-0"
                  style="cursor: pointer"
                  @click="question.show = !question.show"
                >
                  <v-card-title
                    class="text-h7 font-weight-bold text-left primary--text"
                    style="word-break: keep-all; "
                  >
                    {{ question.question }}
                  </v-card-title>
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
                  class="d-flex flex-column text-h7 black--text text-justify"
                  v-if="question.show"
                  v-html="question.answer"
                >
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <!-- /questions -->
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "WikiOnRs",
  data: () => ({
    questions: [
      {
        question: "What does Responsible Sourcing mean?",
        show: false,
        answer:
          "Evolving from various strands of good corporate behaviour and external impacts of operations on not only first-tier but second and third tier stakeholders, responsible sourcing refers to a business’s ability to have a positive impact on the environment, social relations and economic systems. A firm’s operating and procurement choices have trade-offs and interlinkages, whose positive impacts need to be amplified and negative impacts need to be mitigated. Responsible Sourcing is an umbrella term that encapsulates these approaches, strategies and results."
      },
      {
        question: "Why does a business need to Responsibly Source?",
        show: false,
        answer:
          "<p>Apart from commitments to a better world, business competitiveness is increasingly dependent on a firm’s sustainability credentials, and its responsible sourcing practices are part of earning those credentials. With an increase in Environmental Social and Governance (ESG) related investment indices, a firm’s ability to raise finance, attract new employees, access global value chains governed by RS principles, will be dependent on the business strategy it adopts for the future. It also reduces risk exposure, such as reputational and litigation risk.</p>" +
          "<p><i>Future RE-SOURCING Reports will address this in more detail.</p></i>"
      },
      {
        question:
          "As a business, what Responsible Sourcing obligations do I have?",
        show: false,
        answer:
          "A firm’s responsible souring obligations stems from a number of factors: " +
          "<ul><li><strong>Law & other regulatory requirements:</strong> It must meet the legal and regulatory requirements of the jurisdictions it operates in.</li>" +
          "<li><strong>Investors & Shareholders:</strong> Investors are increasingly linking RS (and sustainability) standards as a prerequisite of equity and debt financing. As a recipient of such finance, a firm is obliged to uphold RS standards endorsed by financial institutions.</li>" +
          "<li><strong>Permit & licensing conditions:</strong> A subset of regulatory standards, in order to receive and maintain permits and licences, a firm needs to meet the requirements set for these permits to remain valid.</li>" +
          "<li><strong>Agreement terms & conditions:</strong> In some cases, a contract with the government, lead firm, supplier, developer or financier, will incorporates RS factors. Thus, RS obligations need to be met as part of contract fulfilment.</li>" +
          "<li><strong>Commitments to stakeholders:</strong> Voluntary commitments, such as those made under a Social Licence to Operate, or commitments that do not take a legal form, but none-the-less are part of a firm’s corporate commitments to specific stakeholders, need to be upheld.</li>" +
          "<li><strong>Voluntary/Corporate Commitments:</strong> Voluntary commitments at the firm level, either to international principles (such as the UN Human Rights Principles) or Industry Association Standards (such as the Automobile Association) apply at a more general level. These need to be respected as part of a firm’s corporate behaviour.</li></ul>" +
          `<br /><i>For more details, please see RE-SOURCING Briefing Document (1): <a class="link" href="https://re-sourcing.eu/files/RE-SOURCING-Briefing-1-12.9.20.pdf">Responsible Sourcing: The Case for Business Competitiveness.</a></i>`
      },
      {
        question:
          "How does a business incorporate Responsibly Sourcing Approaches?",
        show: false,
        answer:
          "A firm can consider a series of hierarchical steps in implementing RS." +
          "<ul><li><strong>Commitment:</strong>Acknowledging RS as a core operating procedure and committing to RS principles at the board level.</li>" +
          "<li><strong>Strategy:</strong>Based on RS principles, designing business strategies that are suitable to the firm, under all major operations: production, procurement, human resources, finance, marketing, reporting and disposal.</li>" +
          "<li><strong>Compliance:</strong> Implementing the RS strategy is often a key hurdle, as new vectors are introduced and incorporated within functioning systems. Compliance with objectives set under RS commitments and implementing the strategies to deliver on these objectives is a crucial stage for a business.</li>" +
          "<li><strong>Auditing:</strong>Standardised reporting on RS practices and execution of third-party audits to provide information to employees, shareholders and the larger community, assists a business to report on its RS practices as well as identify key areas for improvement in the future.</li></ul>" +
          `<br /><i>For more details, please see RE-SOURCING Briefing Document (1): <a class="link" href="https://re-sourcing.eu/files/RE-SOURCING-Briefing-1-12.9.20.pdf">Responsible Sourcing: The Case for Business Competitiveness.</a></i>`
      },
      {
        question: "What help do businesses have to Source more Responsibly?",
        show: false,
        answer:
          "<p>A number of guidelines, templates and certifications are available for businesses; some are more generic while others are sector or material specific.</p>" +
          "<p>These are provided by governmental institutions, industry associations, civil society and certification associations.</p>" +
          `<i>A full list of guidelines & templates is being developed under the RE-SOURCING Project. Please see <a class="link" href="https://re-sourcing.eu/files/D1.2_in%20RS%20template_FINAL.pdf">Existing Approaches</a> for some of the main approaches.</i>`
      },
      {
        question:
          "Why has Responsible Sourcing become a concern for businesses?",
        show: false,
        answer:
          "Responsible Sourcing (RS) is a culmination of several economic, social and environmental factors and can be considered as a means to deliver on a sustainable growth and development agenda. Initially sustainability driven initiatives ledto the emergence of RS initiatives, setting out either voluntary or regulatory RS requirements. It is difficult to pinpoint how the need for RS emerged; safeguarding working conditions, protecting the environment and habitats and defending human rights etc have been around for centuries. Similarly, the emergence of advocacy for RS practices from civil society organisations, governments and international actors have an equally long history. However, over the past two decades, the impetus from a sustainability driven international agenda has incentivised a greater focus on RS practices, under one umbrella."
      },
      {
        question: "How will the RE-SOURCING Project help businesses?",
        show: false,
        answer:
          "<p>While RS initiatives and practices have increased in number and scope, they are fragmented at this time. There are a myriad number of actors, initiatives and standards operating across the raw material sector focusing on sustainability and RS practices, standards and reporting mechanisms. This fragmentation of RS approaches, as well as inadequate and inconsistent measurement and reporting RS practices, are becoming a challenge in constructing a unified, internationally agreed definition of RS or an RS reporting mechanism.</p>" +
          "<p>Primarily focusing on helping businesses adapt RS practices, the RE-SOURCING Project will use peer-learning, knowledge co-creation and stakeholder engagement to identify viable and competitive business practices and policy to assist wider uptake of RS practices by EU businesses.</p>" +
          `<p><i>For more details on project approach and objectives, please see <a class="link" href="https://re-sourcing.eu/about/purpose_and_objectives">Purpose & Objectives</a> for some of the main approaches.</p></i>`
      }
    ]
  }),
  computed: {
    firstColumnQuestions() {
      if (this.questions.length % 2 !== 0) {
        const halfEnd = Math.ceil(this.questions.length / 2);
        return this.questions.slice(0, halfEnd);
      } else {
        let half = this.questions.length / 2;
        return this.questions.slice(0, half);
      }
    },
    secondColumnQuestions() {
      if (this.questions.length % 2 !== 0) {
        const halfStart = Math.ceil(this.questions.length / 2);
        return this.questions.slice(halfStart, this.questions.length);
      } else {
        let half = this.questions.length / 2;
        return this.questions.slice(half, this.questions.length);
      }
    }
  }
};
</script>

<style scoped></style>
