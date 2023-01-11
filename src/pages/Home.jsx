import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilter,
  setCategoryId,
  setCurrentPage,
} from "../redux/slices/filterSlice";
import sadSmile from "../assets/img/errorsmile.png";
import { Link } from "react-router-dom";

import Categories from "../components/Categories";
import Sorting from "../components/Sorting";
import AppleBlock from "../components/AppleBlock/AppleBlock";
import { Skeleton } from "../components/AppleBlock/Skeleton";
import Pagination from "../components/Pagination/Pagination";
import { fetchAppleId, selectAppleItems } from "../redux/slices/appleSlice";

function Home() {
  const isSearch = React.useRef(false);
  const dispatch = useDispatch();
  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter);
  const { items, status } = useSelector(selectAppleItems);

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const getApple = async () => {
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `search=${searchValue}` : "";

    dispatch(
      fetchAppleId({
        sortBy,
        order,
        category,
        search,
        currentPage,
      })
    );

    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      getApple();
    }
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const apples = items.map((obj) => <AppleBlock key={obj.id} {...obj} />);

  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sorting />
      </div>
      <h2 className="content__title">Товари в наявності</h2>
      {status === "error" ? (
        <div className="error-items">
          <img src={sadSmile} alt="error" />
          <p>
            Не вдалося отримати товари, спробуйте повторити пізніше, або
            перезавантажте сторінку.
          </p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : apples}
        </div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
}

export default Home;
