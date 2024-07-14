<template>  
  <div class="max-w-[800px] mx-auto p-8">
    <h1 class="text-4xl font-bold mb-5 text-orange-500">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]">
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
      </div>
      <div>
        <strong class="font-bold">Area:</strong> {{ meal.strArea }}
      </div>
      <div>
        <strong class="font-bold">Tags:</strong> {{ meal.strTags }}
      </div>
    </div>

    <div class="my-3">
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div >
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div >
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strMeasure${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div class="mt-10">
        <YouTubeButton :href="meal.strYoutube" />
        <DownloadButton :href="meal.download" />
      </div>
      <div>
        <div class="flex items-center gap-2 py-3 cursor-pointer  text-indigo-600 hover:text-red-500 bg-slate-100" >
          <a :href="meal.strSource" target="_blank" class="">
            View Original Source
          </a>
        </div>
        <div class="" >          
          <div class="text-indigo-600 hover:text-red-500" >
            <a href="https://www.heidisql.com/installers/HeidiSQL_12.8.0.6908_Setup.exe">
              <button>Remove City</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import YouTubeButton from '../components/YouTubeButton.vue';
import DownloadButton from '../components/DownloadButton.vue';

const route = useRoute();
const meal = ref({})

onMounted(() => {
  console.log(`${route.params.id}`);
  axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({ data }) => {  
      meal.value = data.meals[0] || {}
      meal.value.download = "https://www.heidisql.com/installers/HeidiSQL_12.8.0.6908_Setup.exe";
      // meal.value.download = "https://rdss.moi.gov.tw/MND_NCA/downloadSysFileAction.do?fileID=2299";
      // debugger;
    })
})

</script>
