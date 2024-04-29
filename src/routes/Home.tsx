import { useContext, useEffect, useState } from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import axios from 'axios';
import Skeleton from '../components/PizzaBlock/Skeleton';
import PizzaBlock from '../components/PizzaBlock/Index';
import Pagination from '../components/Pagination/Index';
import { SearchTextContext } from '../contexts/SearchTextContext';

interface Pizza {
  id: number;
  imageUrl: string;
  title: string;
  types: Array<number>;
  sizes: Array<number>;
  price: number;
  category: number;
  rating: number;
}

export default function Home() {
  const [items, setItems] = useState<Pizza[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSortId, setCurrentSortId] = useState(0);
  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const { searchText } = useContext(SearchTextContext);

  const sortQueryParams = [
    { param: 'rating', order: 'asc' },
    { param: 'rating', order: 'desc' },
    { param: 'price', order: 'asc' },
    { param: 'price', order: 'desc' },
    { param: 'title', order: 'asc' },
    { param: 'title', order: 'desc' },
  ];

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('https://65263e7967cfb1e59ce80c2e.mockapi.io/items', {
        params: {
          sortBy: sortQueryParams[currentSortId].param,
          order: sortQueryParams[currentSortId].order,
          category: categoryId > 0 ? categoryId : '',
          title: searchText,
          limit: 4,
          page: currentPage
        },
      })
      .then((res) => {
        setError(null);
        setItems(res.data);
        setIsLoading(false);
      })
      .catch((error: any) => {
        if (error.response) {
          if (error.response.status === 404) {
            setError('Ничего не найдено :(');
          } else {
            setError('Unknown error occurred, please try again');
          }
        } else if (error.request) {
          setError('No response received, please try again');
        } else {
          setError('An unexpected error occurred, please try again');
        }
        setIsLoading(false);
        setItems([]); 
      });

    window.scrollTo(0, 0);
  }, [currentSortId, categoryId, searchText, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} categoryOnClick={setCategoryId} />
        <Sort value={currentSortId} sortOnClick={setCurrentSortId} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {error && <h1 className="error-message">{error}</h1>}
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
      <Pagination page={currentPage} onChangePage={setCurrentPage}/>
    </div>
  );
}