export default {
    template:`
    
    <div :class="{
    'p-4 border rounded-lg': true,
    'bg-gray-700 border-gray-600 text-white' : theme == 'dark',
    'bg-gray-700 border-gray-600 bg-white text-black' : theme == 'light'
    }">
    
        <h1 v-if="$slots.heading" class="font-bold mb-2">
            <slot name="heading" />
        </h1>
         <slot></slot>
         
            
         <footer class="border-t border-gray-600 pt-4 mt-4 text-sm " v-if="$slots.footer">
                <slot name="footer"></slot>
         </footer>
    </div>
       
    
`,

    props:{
        theme: { type: String, default:'dark'}
    }
}