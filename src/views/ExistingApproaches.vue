<template>
  <div>
    <v-row no-gutters>
      <v-col
        cols="12"
        class="py-3 "
        :class="{
          'px-5': $vuetify.breakpoint.smAndDown,
          'px-12': $vuetify.breakpoint.mdAndUp
        }"
      >
        <div class="text-h5 primary--text font-weight-bold mt-2">
          Existing approaches
        </div>

        <v-row>
          <v-col cols="12" lg="8" class="text-h7 text-justify">
            <p>
              A number of RS approaches currently exist to assist businesses in
              developing their operating strategies. The approaches are listed
              here in alphabetical order. Please note the RE-SOURCING Project
              <i><u>does not endorse these approaches</u></i> and these are
              listed here for informational purpose only.
            </p>

            <p>
              <i
                >For more details on these and other approaches, please see
                RE-SOURCING Report (1): State-of-play:
                <a
                  class="link"
                  href="https://re-sourcing.eu/files/D1.1_In%20RS%20template_FINAL.pdf"
                  >The International Responsible Sourcing Agenda.</a
                ></i
              >
            </p>
          </v-col>
          <v-col
            cols="12"
            lg="4"
            class="py-3 px-5 d-flex justify-center align-center text-center"
          >
            <figure>
              <v-img
                class="rounded align-self-center"
                style="border: 3px solid white"
                alt="Notebook with notes"
                max-width="350px"
                :src="
                  require('../assets/img/structure-and-content/Existing approaches.jpg')
                "
              ></v-img>
              <figcaption style="font-size: small">
                Photo by
                <a
                  href="https://unsplash.com/@medbadrc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                  target="blank"
                  class=""
                  >Med BadrChemmaoui</a
                >
                on
                <a href="https://unsplash.com/" target="blank" class=""
                  >Unsplash</a
                >
              </figcaption>
            </figure>
          </v-col>
        </v-row>
        <!-- Data -->
        <v-row>
          <v-row
            no-gutters
            style=""
            class="pb-5"
            v-for="(approach, index) in approaches"
            :key="index"
          >
            <v-col
              cols="12"
              class="text-h6 font-weight-bold primary--text pb-1"
            >
              {{ approach.title }}
            </v-col>

            <v-col
              cols="12"
              md="3"
              class="py-3 px-5 d-flex justify-center align-center"
            >
              <a :href="approach.link" target="blank" rel="noopener">
                <v-img
                  class="rounded align-self-center"
                  style="border: 3px solid white"
                  max-width="200px"
                  :src="approach.image"
                ></v-img
              ></a>
            </v-col>
            <v-col cols="12" md="9">
              <v-col
                cols="12"
                class="text-h7 text-justify"
                v-html="approach.text"
              >
              </v-col>
            </v-col>
          </v-row>
        </v-row>
        <!-- Data -->
      </v-col>
    </v-row>
  </div></template
>

<script>
export default {
  name: "ExistingApproaches",
  data: () => ({
    approaches: [
      {
        title: "Extractive Industries Transparency Initiative (EITI)",
        image: require("../assets/img/existing_approaches/EITI.png"),
        link: "https://eiti.org/",
        text:
          "EITI promotes the open and accountable management of oil, gas and mining industry resources. The standard requires countries and companies to disclose information along the extractive industry value chain, from the point of extraction, following revenues through the government, to how they ultimately benefit the public. EITI reports from individual member countries provide information on the licensing and contracting processes, fiscal and legal arrangements, revenue payments, locations of allocated revenues, and economic contributions."
      },
      {
        title: "EU Due Diligence Ready Tool",
        image: require("../assets/img/existing_approaches/EU Due Dilligence Ready.png"),
        link:
          "https://ec.europa.eu/growth/sectors/raw-materials/due-diligence-ready_en",
        text:
          "'Due diligence ready!' was developed to help companies source minerals and metals responsibly and, if applicable, comply with regulatory requirements, including the new EU ‘conflict minerals’ regulation effective from 1 January 2021."
      },
      {
        title: "Fairmined & Fairtrade Certification",
        image: require("../assets/img/existing_approaches/Fairmined.png"),
        link: "https://fairmined.org/",
        text:
          "These refer to gold, silver and platinum mining from artisanal and small-scale mining (ASM) and aim to improve social and environmental performance. Fairmined and Fairtrade are already implemented in several mining organizations in Colombia, Peru, Bolivia and Mongolia. "
      },
      {
        title: "Global Reporting Initiative (GRI)",
        image: require("../assets/img/existing_approaches/Global Reporting initiative.png"),
        link: "https://www.globalreporting.org/",
        text:
          "The GRI reporting standard is commonly used within annual sustainability reports by a number of companies. It has been designed to report on the underlying question of ‘how an organization contributes, or aims to contribute in the future, to the improvement or deterioration of economic, environmental, and social conditions at the local, regional, or global level’. The reporting requirements and formats include a range of topics, some are mandatory and whilst others are encouraged."
      },
      {
        title: "LME Responsible Sourcing Requirements",
        image: require("../assets/img/existing_approaches/LME Responsible Sourcing.png"),
        link:
          "https://www.lme.com/en-GB/About/Responsibility/Responsible-sourcing",
        text:
          "The LME is introducing responsible sourcing requirements for all metals (by brand) for delivery through the exchange. The first reporting period for firms is set for 2021 with audits (where required) to be carried out by the end of 2023. The LME RS approach combines two principles: ethical responsibility and commercial interest, i.e. that it continues to provide a price discovery function that better reflects the value of responsibly sourced metal."
      },
      {
        title:
          "OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas",
        image: require("../assets/img/existing_approaches/OECD due dilligence.jpg"),
        link: "https://www.oecd.org/corporate/mne/mining.htm",
        text: `This Guidance has the underlying standard of a significant number of mineral certification schemes and audits, as well as of a number of companies’ corporate policies regarding mineral sourcing from Conflict-Affected and High Risk Areas (CAHRS). It provides structured and specific risk identification actions for a business to undertake as part of its RS practices and is considered by many to be the de facto standard for most RS due diligence templates. EU directives, including the one on <i><a class="link" href="https://ec.europa.eu/trade/policy/in-focus/conflict-minerals-regulation/regulation-explained/index_en.html" target="blank">EU Conflict Minerals</a></i> and <i><a class="link" href="https://ec.europa.eu/info/business-economy-euro/company-reporting-and-auditing/company-reporting/non-financial-reporting_en" target="blank">EU Non-Financial Reporting Directive</a></i> also make reference to this document.`
      },
      {
        title: "Towards Sustainable Mining (TSM) programme – Canada",
        image: require("../assets/img/existing_approaches/Towards sustainable mining.jpg"),
        link: "https://mining.ca/towards-sustainable-mining/",
        text:
          "TSM has developed responsible mining principles for environmental aspects and comprehensive guidelines for largely Canadian mining companies. TSM publishes a classification of members’ responsible mining performance within Canada. The principles are binding for members’ activities in Canada but only voluntary for operations outside of Canada."
      },
      {
        title: "The Initiative for Responsible Mining (IRMA)",
        image: require("../assets/img/existing_approaches/The Initiative for responsible mining.png"),
        link: "https://responsiblemining.net/resources/",
        text:
          "With members from Civil Society Organisations, communities, mining companies and downstream companies, the initiative has developed a best-practice standard for large-scale mining, which also includes auditing benchmarks."
      },
      {
        title: "The International Council on Metals and Mining (ICMM)",
        image: require("../assets/img/existing_approaches/The International Count on Metals.png"),
        link: "http://www.icmm.com/",
        text:
          "The 27 member companies commit to the 10 ICMM principles and very comprehensive guidelines for most environmental protection areas. Each member must conduct an annual third-party audit and publish its results. The ICMM guide to responsible sourcing, blends management strategy with information-collection strategies."
      }
    ]
  })
};
</script>

<style scoped></style>
