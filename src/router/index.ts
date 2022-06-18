import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth"
import App from "../App.vue"

const router = createRouter({
	history: createWebHistory('/learning-resource-ui/'),
	routes: [
		{ 
			path: "/user-home", 
			component: () => import("../views/UserHome.vue"),
			meta: {
				requiresAuth: true,
			} 
		},
		{ 
			path: "/tool-list", 
			component: () => import("../views/ToolList.vue"),
			meta: {
				requiresAuth: true,
			} 
		},
		{ path: "/sign-in", component: () => import("../views/SignIn.vue") },
	],
	
});

const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const removeListener = onAuthStateChanged(
			getAuth(),
			(user) => {
				removeListener();
				resolve(user);
			},
			reject
		);
	});
};

router.beforeEach(async (to, from, next) => {
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (await getCurrentUser()) {
			next();
		} else {
			alert("You must sign in to view this page");
			next("/");
		}
	} else {
		next();
	}
});

export default router;