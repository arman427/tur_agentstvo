export const formatDuration = (duration: number) => {
   if (duration === 1) {
      return "день";
   } else if (duration > 2 && duration < 5) {
      return "дня";
   } else {
      return "дней";
   }
}