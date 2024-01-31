const app = Vue.createApp({
	data() {
		return {
			assignments: [],
			enteredValue: "",
			isShow: true,
		};
	},
	computed: {
		buttonTitle() {
			return this.isShow ? "Hide List" : "Show List";
		},
	},
	methods: {
		addAssignment() {
			this.assignments.push(this.enteredValue);
		},
		toggleShow() {
			this.isShow = !this.isShow;
		},
	},
});

app.mount("#assignment");