import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../services/supabase';
import type { Article } from '../data/content';
import SkeletonArticleDetail from '../components/SkeletonArticleDetail';

export default function NoticiaPage() {
    const { id } = useParams<{ id: string }>();
    const [noticia, setNoticia] = useState<Article | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNoticia = async () => {
            if (!id) return;
            try {
                const { data, error } = await supabase
                    .from('contents')
                    .select('*')
                    .eq('id', id)
                    .single();

                if (error) throw error;
                setNoticia(data);
            } catch (error) {
                console.error('Error fetching noticia:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchNoticia();
    }, [id]);

    if (loading) {
        return <SkeletonArticleDetail />;
    }

    if (!noticia) {
        return (
            <div className="container" style={{ padding: '40px 0', textAlign: 'center' }}>
                <h1>Notícia não encontrada</h1>
                <Link to="/noticias" className="btn primary">Voltar para Notícias</Link>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '20px 0' }}>
            <div className="article-content" style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '30px', borderRadius: '12px' }}>
                <div className="article-header">
                    <span className={`category ${noticia.category}`}>{noticia.categoryName}</span>
                    <h1>{noticia.title}</h1>
                    <div className="article-meta">
                        <span>{noticia.date}</span>
                        <span>{noticia.readTime}</span>
                    </div>
                    {noticia.tags && noticia.tags.length > 0 && (
                        <div className="article-tags" style={{ marginTop: '16px', borderTop: 'none', paddingTop: 0, marginBottom: '20px' }}>
                            {noticia.tags.map((tag, index) => (
                                <span key={index} className="tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <img src={noticia.image} alt={noticia.title} className="article-hero-img" />

                <div
                    className="article-section"
                    dangerouslySetInnerHTML={{ __html: noticia.content }}
                />



                <div style={{ marginTop: '40px', textAlign: 'center' }}>
                    <Link to="/noticias" className="btn primary">
                        ← Voltar para Notícias
                    </Link>
                </div>
            </div>
        </div>
    );
}
