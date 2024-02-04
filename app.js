const app = Vue.createApp({
	data() {
		return {
			friends: [
				{
					id: "manuel",
					name: "Manuel Lorenz",
					phone: "0120 589 3789",
					email: "manuel@example.com",
				},
				{
					id: "julie",
					name: "Julie Lorenz",
					phone: "0120 539 3389",
					email: "julie@example.com",
				},
			],
		};
	},
});

app.component("friend-contact", {
	template: /* html */ `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails()">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong>{{ friend.phone }}</li>
        <li><strong>Email:</strong>{{ friend.email }}</li>
        </ul>
    </li>

    `,
	data() {
		return {
			detailsAreVisible: false,
			friend: {
				id: "manuel",
				name: "Manuel Lorenz",
				phone: "0120 589 3789",
				email: "manuel@example.com",
			},
		};
	},
	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
		},
	},
});

app.mount("#app");