export default {
    template : `
    <li>
        <label class="p-2 flex justify-between items-center">
          {{ assignment.name }}
          <input type="checkbox" class="ml-3" v-model="assignment.complete">
        </label>
      </li>
    `,
    props: {
        assignment:Object
    }
}