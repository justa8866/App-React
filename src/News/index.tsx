import React, { useState, useEffect } from "react";
import axios from "axios";

interface INews {
  title: string;
  url: string;
}

const News: React.FunctionComponent = () => {
  const newsClient = axios.create({
    baseURL: "https://newsapi.org",
    timeout: 30 * 1000,
    params: {
      apiKey: "6d0be3a943a2475b9939150db73c21ae",
    },
  });

  const [news, setNews] = useState([]);

  const getNews = async () => {
    const response = await newsClient.get(
      "/v2/everything?q=tesla&from=2022-12-03&sortBy=publishedAt"
    );

    if (response.data) {
      if (response.data.articles) {
        if (response.data.articles.length) {
          setNews(response.data.articles);
        }
      }
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  const generateNews = (item: INews) => {
    return (<h3>
      <a href={item.url}>{item.title}</a>
    </h3>);
  }

  return (
    <>
      {news.length
        ? news.map(generateNews)
        : "Brak newsow"}
    </>
  );
};

export default News;
