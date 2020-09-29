<template>
  <v-navigation-drawer
    :value="drawer"
    @input="$emit('update:drawer', $event)"
    app
    temporary
    dark
    style="z-index: 2001"
    color="primary"
  >
    <v-list dense>
      <v-subheader></v-subheader>
      <v-list-item
        v-for="item in externalResources"
        :key="item.text"
        :title="item.text"
        :to="item.url"
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>
            {{ item.text }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavigationDrawer",
  props: {
    drawer: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    externalResources: [
      {
        icon: "fas fa-home",
        text: "Home",
        url: "/"
      },
      {
        icon: "far fa-address-card",
        text: "About",
        url: "/about"
      },
      {
        icon: "far fa-flag",
        text: "Purpose and objectives",
        url: "/about/purpose_and_objectives"
      },
      {
        icon: "far fa-handshake",
        text: "Partners",
        url: "/about/partners"
      },
      {
        icon: "fas fa-user-friends",
        text: "Platform Steering Committee",
        url: "/about/platform_steering_committee"
      },
      {
        icon: "fas fa-chalkboard-teacher",
        text: "Advisory Board",
        url: "/about/advisory_board"
      },
      {
        icon: "fas fa-users",
        text: "Target groups",
        url: "/target_groups"
      },
      {
        icon: "far fa-newspaper",
        text: "News",
        url: "/news"
      },
      {
        icon: "far fa-calendar-alt",
        text: "Events",
        url: "/events"
      },
      // {
      //   icon: "fas fa-info-circle",
      //   text: "Knowledge hub",
      //   url: "/knowledge_hub"
      // },
      {
        icon: "fab fa-wikipedia-w",
        text: "Wiki on RS",
        url: "/knowledge_hub/wiki_on_rs"
      },
      {
        icon: "far fa-flag",
        text: "Existing approaches",
        url: "/knowledge_hub/existing_approaches"
      },
      {
        icon: "fas fa-road",
        text: "Consultation",
        url: "/knowledge_hub/consultation"
      },
      {
        icon: "fas fa-project-diagram",
        text: "Moving forward",
        url: "/knowledge_hub/moving_forward"
      },
      {
        icon: "fas fa-download",
        text: "Project Outputs",
        url: "/knowledge_hub/project_outputs"
      },
      {
        icon: "fas fa-download",
        text: "External resources",
        url: "/knowledge_hub/external_resources"
      },
      {
        icon: "far fa-address-book",
        text: "Contact",
        url: "/contact"
      }
    ]
  })
};
</script>

<style scoped></style>
