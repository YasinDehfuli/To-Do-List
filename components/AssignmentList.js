import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
import Panel from "./Panel.js";

export default {

    components: {Assignment , AssignmentTags, Panel},

    template: `
    <panel v-show="assignments.length" class="w-80" >

    <div class="flex justify-between items-start ">
    <h1 class="font-bold mb-3">
      {{ title }}
        <span class="text-teal-300">
      ({{ assignments.length }})
        </span>
    </h1>
    
    <button v-show="canToggle" @click="$emit('toggle')" class="text-rose-500">&times;</button>
    </div>
    
    <assignment-tags 
    v-model:currentTag="currentTag"
    :initial-Tags="assignments.map(a => a.tag)"
    
     />

    <ul class="border border-gray-600 rounded-sm divide divide-gray-600 mt-4">
      <assignment
      v-for="assignment in filteredAssignments" 
      :key="assignment.id"
      :assignment="assignment"
      ></assignment>
    </ul>
    
   <slot></slot>
   
   <template #footer>
   Click Here to Learn More...
</template>

  </panel>

    `,

    props: {
        assignments: Array,
        title: String,
        canToggle: { type:Boolean, default:false}
    },

    data() {
        return {
            currentTag: 'all',
            show: true
        };
    },

    computed: {
        filteredAssignments() {
            if(this.currentTag === 'all'){
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag === this.currentTag);
        },

    }
}