import { NewsArticle } from "@components/models/NewsArticles";
import { Card } from "react-bootstrap";

interface NewsArticleEntryProps {
    article: NewsArticle,
}

const NewsArticleEntry = ({article: {title, description, url, urlToImage} } : NewsArticleEntryProps) => {

    const validImageUrl = (urlToImage?.startsWith("http://") || urlToImage?.startsWith("https://")) ? urlToImage : undefined;

    return ( 
        <a href={url}>
            <Card className="h-100">
                <Card.Img
                    variant="top"
                    src={validImageUrl}
                />

            </Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>

        </a>

    );
}
 
export default NewsArticleEntry;