import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../services/supabase';
import type { Article } from '../data/content';
import SkeletonArticleDetail from '../components/SkeletonArticleDetail';

export default function ReflexaoPage() {
    const { id } = useParams<{ id: string }>();
    const [reflexao, setReflexao] = useState<Article | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReflexao = async () => {
            if (!id) return;
            try {
                const { data, error } = await supabase
                    .from('contents')
                    .select('*')
                    .eq('id', id)
                    .single();

                if (error) throw error;
                setReflexao(data);
            } catch (error) {
                console.error('Error fetching reflexao:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchReflexao();
    }, [id]);

    if (loading) {
        return <SkeletonArticleDetail />;
    }

    if (!reflexao) {
        return (
            <div className="container" style={{ padding: '40px 0', textAlign: 'center' }}>
                <h1>Reflexão não encontrada</h1>
                <Link to="/reflexoes" className="btn primary">Voltar para Reflexões</Link>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '20px 0' }}>
            <div className="article-content" style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '30px', borderRadius: '12px' }}>
                <div className="article-header">
                    <span className={`category ${reflexao.category}`}>{reflexao.categoryName}</span>
                    <h1>{reflexao.title}</h1>
                    <div className="article-meta">
                        <span>{reflexao.date}</span>
                        <span>{reflexao.readTime}</span>
                    </div>
                    {reflexao.tags && reflexao.tags.length > 0 && (
                        <div className="article-tags" style={{ marginTop: '16px', borderTop: 'none', paddingTop: 0, marginBottom: '20px' }}>
                            {reflexao.tags.map((tag, index) => (
                                <span key={index} className="tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <img src={reflexao.image} alt={reflexao.title} className="article-hero-img" />

                <div
                    className="article-section"
                    dangerouslySetInnerHTML={{ __html: reflexao.content }}
                />



                <div style={{ marginTop: '40px', textAlign: 'center' }}>
                    <Link to="/reflexoes" className="btn primary">
                        ← Voltar para Reflexões
                    </Link>
                </div>
            </div>
        </div>
    );
}
