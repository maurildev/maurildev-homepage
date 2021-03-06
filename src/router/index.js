import Language from '@/views/Language.vue';
import Home from "@/views/Home.vue";
import ChatIntro from '@/views/ChatIntro.vue';
import Contact from '@/views/Contact.vue';
import ChatAboutMe from '@/views/ChatAboutMe.vue';
import Mails from "@/views/Mails.vue";
import Photos from "@/views/Photos.vue";
import Projects from "@/views/Projects.vue";
import Project from "@/views/Project.vue";
import Technologies from "@/views/Technologies.vue";

import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: undefined,
    beforeEnter: (from, to, next) => {
      const languageCode = localStorage.getItem("languageCode");
      (languageCode) ? next({ name: `home-${languageCode}` }) : next({ name: "language" });
    }
  },
  {
    path: '/select-language/',
    name: 'language',
    component: Language
  },
  {
    path: '/de/',
    name: 'home-de',
    meta: {
      languageCode: "de",
    },
    component: Home
  },
  {
    path: '/en/',
    name: 'home-en',
    meta: {
      languageCode: "en",
    },
    component: Home
  },
  {
    path: '/de/chat/einfuehrung',
    name: 'chat-intro-de',
    meta: {
      languageCode: "de",
    },
    component: ChatIntro
  },
  {
    path: '/en/chat/intro',
    name: 'chat-intro-en',
    meta: {
      languageCode: "en",
    },
    component: ChatIntro
  },
  {
    path: '/de/kontakt/',
    name: 'contact-de',
    meta: {
      languageCode: "de",
    },
    component: Contact
  },
  {
    path: '/en/contact/',
    name: 'contact-en',
    meta: {
      languageCode: "en",
    },
    component: Contact
  },
  {
    path: '/de/chat/ueber-mich',
    name: 'chat-about-me-de',
    meta: {
      languageCode: "de",
    },
    component: ChatAboutMe
  },
  {
    path: '/en/chat/about-me',
    name: 'chat-about-me-en',
    meta: {
      languageCode: "en",
    },
    component: ChatAboutMe
  },
  {
    path: '/de/mails/',
    name: 'mails-de',
    meta: {
      languageCode: "de",
    },
    component: Mails
  },
  {
    path: '/en/mails/',
    name: 'mails-en',
    meta: {
      languageCode: "en",
    },
    component: Mails
  },
  {
    path: '/de/fotos/',
    name: 'photos-de',
    meta: {
      languageCode: "de",
    },
    component: Photos
  },
  {
    path: '/en/photos/',
    name: 'photos-en',
    meta: {
      languageCode: "en",
    },
    component: Photos
  },
  {
    path: '/de/projekte/',
    name: 'projects-de',
    meta: {
      languageCode: "de",
    },
    component: Projects
  },
  {
    path: '/en/projects/',
    name: 'projects-en',
    meta: {
      languageCode: "en",
    },
    component: Projects
  },
  {
    path: '/de/projekte/:project',
    name: 'project-de',
    meta: {
      languageCode: "de",
    },
    component: Project
  },
  {
    path: '/en/projects/:project',
    name: 'project-en',
    meta: {
      languageCode: "en",
    },
    component: Project
  },
  {
    path: '/de/technologien/',
    name: 'technologies-de',
    meta: {
      languageCode: "de",
    },
    component: Technologies
  },
  {
    path: '/en/technologies/',
    name: 'technologies-en',
    meta: {
      languageCode: "en",
    },
    component: Technologies
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
