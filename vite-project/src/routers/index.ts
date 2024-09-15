import { createRouter, createWebHistory } from "vue-router";

import HomeV1View from "../views/Home/HomeV1.vue";
import HomeV2View from "../views/Home/HomeV2.vue";
import HomeV3View from "../views/Home/HomeV3.vue";
import HomeV4View from "../views/Home/HomeV4.vue";
import BlogDetailsV1 from "../views/Blog/BlogDetailsV1.vue";
import BlogDetailsV2 from "../views/Blog/BlogDetailsV2.vue";
import BlogListV1 from "../views/Blog/BlogListV1.vue";
import BlogListV2 from "../views/Blog/BlogListV2.vue";
import BlogListV3 from "../views/Blog/BlogListV3.vue";
import BlogListV4 from "../views/Blog/BlogListV4.vue";
import CourseDetailsV1 from "../views/Course/CourseDetailsV1.vue";
import CourseDetailsV2 from "../views/Course/CourseDetailsV2.vue";
import CourseListV1 from "../views/Course/CourseListV1.vue";
import CourseListV2 from "../views/Course/CourseListV2.vue";
import CourseListV3 from "../views/Course/CourseListV3.vue";
import CourseListV4 from "../views/Course/CourseListV4.vue";
import CourseDashboard from "../views/Dashboard/Course.vue";
import InstructorDashboard from "../views/Dashboard/Instructor.vue";
import StudentsDashboard from "../views/Dashboard/Students.vue";
import InstructorDetailsV1 from "../views/Instructor/InstructorDetailsV1.vue";
import InstructorDetailsV2 from "../views/Instructor/InstructorDetailsV2.vue";
import InstructorListV1 from "../views/Instructor/InstructorListV1.vue";
import InstructorListV2 from "../views/Instructor/InstructorListV2.vue";
import LessonsPage from "../views/LessonsPage/LessonsPage.vue";
import AboutPage from "../views/Others/About.vue";
import ContactPage from "../views/Others/Contact.vue";
import FaqPage from "../views/Others/Faq.vue";



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomeV1View",
      component: HomeV1View,
    },
    {
      path: "/home-v2",
      name: "HomeV2View",
      component: HomeV2View,
    },
    {
      path: "/home-v3",
      name: "HomeV3View",
      component: HomeV3View,
    },
    {
      path: "/home-v4",
      name: "HomeV4View",
      component: HomeV4View,
    },
    {
      path: "/blog-v1",
      name: "BlogListV1",
      component: BlogListV1,
    },
    {
      path: "/blog-v2",
      name: "BlogListV2",
      component: BlogListV2,
    },
    {
      path: "/blog-v3",
      name: "BlogListV3",
      component: BlogListV3,
    },
    {
      path: "/blog-v4",
      name: "BlogListV4",
      component: BlogListV4,
    },
    {
      path: "/blog-details-v1",
      name: "BlogDetailsV1",
      component: BlogDetailsV1,
    },
    {
      path: "/blog-details-v2",
      name: "BlogDetailsV2",
      component: BlogDetailsV2,
    },
    {
      path: "/course-list-v1",
      name: "CourseListV1",
      component: CourseListV1,
    },
    {
      path: "/course-list-v2",
      name: "CourseListV2",
      component: CourseListV2,
    },
    {
      path: "/course-list-v3",
      name: "CourseListV3",
      component: CourseListV3,
    },
    {
      path: "/course-list-v4",
      name: "CourseListV4",
      component: CourseListV4,
    },
    {
      path: "/course-details-v1",
      name: "CourseDetailsV1",
      component: CourseDetailsV1,
    },
    {
      path: "/course-details-v2",
      name: "CourseDetailsV2",
      component: CourseDetailsV2,
    },
    {
      path: "/instructor-list-v1",
      name: "InstructorListV1",
      component: InstructorListV1,
    },
    {
      path: "/instructor-list-v2",
      name: "InstructorListV2",
      component: InstructorListV2,
    },
    {
      path: "/instructor-details-v1",
      name: "InstructorDetailsV1",
      component: InstructorDetailsV1,
    },
    {
      path: "/instructor-details-v2",
      name: "InstructorDetailsV2",
      component: InstructorDetailsV2,
    },
    {
      path: "/course-dashboard",
      name: "CourseDashboard",
      component: CourseDashboard,
    },
    {
      path: "/instructor-dashboard",
      name: "InstructorDashboard",
      component: InstructorDashboard,
    },
    {
      path: "/student-dashboard",
      name: "StudentsDashboard",
      component: StudentsDashboard,
    },
    {
      path: "/lessons-page",
      name: "LessonsPage",
      component: LessonsPage,
    },
    {
      path: "/about-page",
      name: "AboutPage",
      component: AboutPage,
    },
    {
      path: "/faq-page",
      name: "FaqPage",
      component: FaqPage,
    },
    {
      path: "/contact-page",
      name: "ContactPage",
      component: ContactPage,
    },
    // {
    //   path: "/:catchAll(.*)",

    //   name: "NotFoundView",
    //   component: NotFoundView,
    // },
  ],
});

export default router;
