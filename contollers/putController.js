const establishmentVar = 'SELECT establishment_id, name, category, inspection_date, inspection_results, city, state, zip FROM FOOD_INSPECTION_GROUP8.Food_Inspection WHERE ';
const updateVar = 'SELECT establishment_id, name, category, inspection_date, inspection_results, city, state, zip FROM FOOD_INSPECTION_GROUP8.Food_Inspection WHERE';
export default {
  establishmentVar,
  updateVar
};