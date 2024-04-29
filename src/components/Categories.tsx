interface CategoriesProps{
  value: number
  categoryOnClick: (categoryId: number) => void
}

export default function Categories(props: CategoriesProps) {
  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
        <ul>
        {categories.map((category, index) => {
          return (
            <li
              key={index}
              onClick={() => props.categoryOnClick(index)}
              className={props.value === index ? 'active' : ''}>
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
