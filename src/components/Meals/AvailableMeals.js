import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm5',
    name: 'Paneer Tikka',
    description: 'Marinated and grilled cottage cheese',
    price: 250,
  },
  {
    id: 'm6',
    name: 'Masala Dosa',
    description: 'Fermented crepe made from rice batter, filled with spiced mashed potatoes',
    price: 120,
  },
  {
    id: 'm7',
    name: 'Vegetable Biryani',
    description: 'Fragrant rice cooked with mixed vegetables and aromatic spices',
    price: 320,
  },
  {
    id: 'm8',
    name: 'Palak Paneer',
    description: 'Creamy spinach curry with cottage cheese',
    price: 280,
  },
  {
      id: 'm9',
      name: 'Masala Chai',
      description: 'Traditional Indian spiced tea with aromatic spices and herbs',
      price: 20,
    },
    {
      id: 'm11',
      name: 'Filtered Coffee',
      description: 'Smooth and rich coffee brewed through a filter',
      price: 30,
    },
  ];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;