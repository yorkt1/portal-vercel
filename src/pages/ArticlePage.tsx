import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { supabase } from '../services/supabase';
import type { Article } from '../data/content';
import SkeletonArticleDetail from '../components/SkeletonArticleDetail';

export default function ArticlePage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [article, setArticle] = useState<Article | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticle = async () => {
            if (!id) return;
            try {
                const { data, error } = await supabase
                    .from('contents')
                    .select('*')
                    .eq('id', id)
                    .single();

                if (error) throw error;
                setArticle(data);
            } catch (error) {
                console.error('Error fetching article:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id]);

    if (loading) {
        return <SkeletonArticleDetail />;
    }

    if (!article) {
        return (
            <div className="container" style={{ padding: '40px 0', textAlign: 'center' }}>
                <h1>Artigo não encontrado</h1>
                <Link to="/artigos" className="btn primary">Voltar para Artigos</Link>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '20px 0' }}>
            <div className="article-content" style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '30px', borderRadius: '12px', position: 'relative' }}>
                <button className="close-btn" onClick={() => navigate(-1)}>×</button>

                <div className="article-header">
                    <div className={`category ${article.category}`}>{article.categoryName}</div>

                    <div className="article-meta">
                        <div className="meta">
                            {article.date} • por {article.author} • {article.readTime}
                        </div>
                        <div className="meta">
                            Compartilhar:
                            <a href="#" style={{ marginLeft: '5px' }} title="Compartilhar">📱</a>
                            <a href={`mailto:?subject=${article.title}&body=Confira este artigo: ${window.location.href}`} style={{ marginLeft: '5px' }} title="Email">📧</a>
                            <button onClick={() => navigator.clipboard.writeText(window.location.href)} style={{ marginLeft: '5px', background: 'none', border: 'none', cursor: 'pointer' }} title="Copiar Link">🔗</button>
                        </div>
                    </div>

                    <h2>{article.title}</h2>

                    {article.tags && article.tags.length > 0 && (
                        <div className="article-tags">
                            {article.tags.map((tag, index) => (
                                <span key={index} className="tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <img src={article.image} alt={article.title} className="article-hero-img" />

                <div
                    className="article-section"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />

                <div style={{ marginTop: '40px', textAlign: 'center' }}>
                    <Link to="/artigos" className="btn primary">
                        ← Voltar para Artigos
                    </Link>
                </div>
            </div>
        </div>
    );
}
