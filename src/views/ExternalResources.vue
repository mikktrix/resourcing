<template>
  <div class="wiki_on_rs white--text">
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
        <div class="text-h5 font-weight-bold mt-2">
          External resources
        </div>

        <v-row>
          <v-col cols="12" class="text-h7 text-justify"
            ><p>
              The RE-SOURCING project will be gathering resources from
              businesses, governments and civil society actors, to assist
              stakeholders in taking up responsible sourcing practices and
              further the global agenda in this area. These will include
              standards, guidelines, templates, reports and other documents.
            </p>

            <p>
              These external resources are being assessed for inclusion on three
              main criteria: Actuality, Relevance and Acceptance by primary and
              secondary stakeholders. These are underdevelopment at this time
              and will be available on the website in 2021.
            </p>
          </v-col>
        </v-row>
      </v-col>

      <v-col
        cols="12"
        md="4"
        class="py-3 px-5 d-flex justify-center align-center"
      >
        <v-img
          class="rounded align-self-center"
          style="border: 3px solid white"
          max-width="300px"
          :src="
            require('../assets/img/structure-and-content/External Resources.jpg')
          "
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ExternalResources"
};
</script>

<style scoped></style>
