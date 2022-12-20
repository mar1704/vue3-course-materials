import { fetchMeetups } from '../api.js';
import { onMounted, ref } from 'vue';

export async function useMeetupsFetch() {
  const meetups = ref(null);

  // В синхронном варианте можно как обычно запускать загрузку в mounted
  // onMounted(async () => {
  //   meetups.value = await fetchMeetups();
  // });

  meetups.value = await fetchMeetups();

  return {
    meetups,
  };
}
