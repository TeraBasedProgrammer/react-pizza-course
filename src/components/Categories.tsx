interface CategoriesProps {
  value: number;
  categoryOnClick: (categoryId: number) => void;
}

export default function Categories({ value, categoryOnClick }: CategoriesProps) {
  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => {
          return (
            <li
              key={index}
              onClick={() => categoryOnClick(index)}
              className={value === index ? 'active' : ''}>
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
