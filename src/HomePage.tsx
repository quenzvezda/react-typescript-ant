// HomePage.tsx
import React, { useEffect, useState } from 'react';
import { Card, List, Typography } from 'antd';

const { Title } = Typography;

const HomePage: React.FC = () => {
    const [news, setNews] = useState<any[]>([]);

    useEffect(() => {
        const fetchNews = async () => {
            const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=c0ac45ec9d5140a6801ddcebde17e0e2');
            const data = await response.json();
            setNews(data.articles);
        };

        fetchNews();
    }, []);

    return (
        <div>
            <Title level={2}>Top Headlines</Title>
    <List
    grid={{ gutter: 16, column: 4 }}
    dataSource={news}
    renderItem={item => (
        <List.Item>
            <Card
                title={item.title}
    extra={<a href={item.url} target="_blank" rel="noopener noreferrer">Read more</a>}
    >
    <p>{item.description}</p>
    </Card>
    </List.Item>
)}
    />
    </div>
);
};

    export default HomePage;
