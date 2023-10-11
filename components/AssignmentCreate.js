export default {

    template: `
    <form @submit.prevent="add">
    <div class=" text-black p-0 mt-4 rounded-sm flex ">
        <input v-model="newAssignment" class="text-black p-2 rounded-xl" type="text" placeholder="Add task">
        <button type="submit" class="bg-white p-3 border-l ml-1 rounded-xl">Add</button>
    </div>
    </form>
    `,

    props: {
        assignments: Array
    },

    data() {
        return {
            newAssignment: ''
        }
    },

    methods: {
        add() {
            this.$emit('add', this.newAssignment);

            this.newAssignment = '';
        }
    }
}