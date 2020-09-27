import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/"
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    children: [
      {
        path: "purpose_and_objectives",
        name: "Purpose and objectives",
        component: () => import("../views/PurposeAndObjectives.vue")
      },
      {
        path: "partners",
        name: "Partners",
        component: () => import("../views/Partners.vue")
      },
      {
        path: "platform_steering_committee",
        name: "Platform steering committee",
        component: () => import("../views/PlatformSteeringCommittee.vue")
      },
      {
        path: "advisory_board",
        name: "Advisory board",
        component: () => import("../views/AdvisoryBoard.vue")
      }
    ]
  },
  {
    path: "/target_groups",
    name: "Target groups",
    component: () => import("../views/TargetGroups.vue")
  },
  {
    path: "/news",
    name: "News",
    component: () => import("../views/News.vue")
  },
  {
    path: "/events",
    name: "Events",
    component: () => import("../views/Events.vue")
  },
  {
    path: "/knowledge_hub",
    name: "Knowledge hub",
    component: () => import("../views/KnowledgeHub.vue"),
    children: [
      {
        path: "wiki_on_rs",
        name: "Wiki on rs",
        component: () => import("../views/WikiOnRs.vue")
      },
      {
        path: "existing_approaches",
        name: "Existing approaches",
        component: () => import("../views/ExistingApproaches.vue")
      },
      {
        path: "consultation",
        name: "Consultation",
        component: () => import("../views/Consultation.vue")
      },
      {
        path: "moving_forward",
        name: "Moving forward",
        component: () => import("../views/MovingForward.vue")
      },
      {
        path: "project_outputs",
        name: "Project outputs",
        component: () => import("../views/ProjectOutputs.vue")
      },
      {
        path: "external_resources",
        name: "External resources",
        component: () => import("../views/ExternalResources.vue")
      }
    ]
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
