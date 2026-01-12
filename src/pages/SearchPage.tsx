import { useSearchParams, Link } from 'react-router-dom';
import { posts, reflexoes, noticias } from '../data/content';
import { useState, useEffect } from 'react';
import type { Article } from '../data/content';

export default function SearchPage() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [results, setResults] = useState<{
        artigos: Article[];
        reflexoes: Article[];
        noticias: Article[];
    }>({ artigos: [], reflexoes: [], noticias: [] });

    useEffect(() => {
        if (!query) {
            setResults({ artigos: [], reflexoes: [], noticias: [] });
            return;
        }

        const lowerQuery = query.toLowerCase();

        const filterContent = (items: Article[]) =>
            items.filter(item =>
                item.title.toLowerCase().includes(lowerQuery) ||
                item.excerpt.toLowerCase().includes(lowerQuery) ||
                item.content.toLowerCase().includes(lowerQuery) ||
                item.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
            );

        setResults({
            artigos: filterContent(posts),
            reflexoes: filterContent(reflexoes),
            noticias: filterContent(noticias)
        });
    }, [query]);

    const hasResults = results.artigos.length > 0 || results.reflexoes.length > 0 || results.noticias.length > 0;

    return (
        <div className="container" style={{ padding: '40px 20px' }}>
            <h1 style={{ marginBottom: '30px' }}>Resultado da busca por: "{query}"</h1>

            {!hasResults && (
                <div style={{ padding: '60px 0', textAlign: 'center', color: 'var(--muted)' }}>
                    <div style={{ fontSize: '48px', marginBottom: '20px' }}>🔍</div>
                    <h2 style={{ color: '#333', marginBottom: '10px' }}>Nenhum resultado encontrado</h2>
                    <p style={{ marginBottom: '30px' }}>Não encontramos nada correspondente a "{query}".</p>

                    <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', display: 'inline-block', textAlign: 'left', maxWidth: '400px' }}>
                        <p style={{ fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>Sugestões:</p>
                        <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
                            <li>Verifique a ortografia das palavras.</li>
                            <li>Tente usar termos mais genéricos.</li>
                            <li>Tente sinônimos ou palavras relacionadas.</li>
                        </ul>
                        <div style={{ marginTop: '20px', borderTop: '1px solid #e6e9ee', paddingTop: '15px' }}>
                            <p style={{ fontSize: '14px', marginBottom: '8px' }}>Temas populares:</p>
                            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                {['Direito', 'Família', 'Trabalho', 'Curatela', 'Pensão'].map(term => (
                                    <Link
                                        key={term}
                                        to={`/busca?q=${term}`}
                                        style={{
                                            background: 'white',
                                            border: '1px solid #e6e9ee',
                                            padding: '4px 10px',
                                            borderRadius: '20px',
                                            fontSize: '12px',
                                            color: 'var(--accent)',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        {term}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {results.artigos.length > 0 && (
                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ borderLeft: '4px solid var(--accent)', paddingLeft: '12px', color: 'var(--accent)', marginBottom: '20px' }}>Artigos</h2>
                    <div className="posts">
                        {results.artigos.map(post => (
                            <div key={post.id} className="post">
                                <img src={post.image} alt={post.title} />
                                <div>
                                    <h3><Link to={`/artigo/${post.id}`}>{post.title}</Link></h3>
                                    <p className="excerpt">{post.excerpt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {results.reflexoes.length > 0 && (
                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ borderLeft: '4px solid var(--accent)', paddingLeft: '12px', color: 'var(--accent)', marginBottom: '20px' }}>Reflexões</h2>
                    <div className="posts">
                        {results.reflexoes.map(post => (
                            <div key={post.id} className="post">
                                <img src={post.image} alt={post.title} />
                                <div>
                                    <h3><Link to={`/reflexao/${post.id}`}>{post.title}</Link></h3>
                                    <p className="excerpt">{post.excerpt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {results.noticias.length > 0 && (
                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ borderLeft: '4px solid var(--accent)', paddingLeft: '12px', color: 'var(--accent)', marginBottom: '20px' }}>Notícias</h2>
                    <div className="posts">
                        {results.noticias.map(post => (
                            <div key={post.id} className="post">
                                <img src={post.image} alt={post.title} />
                                <div>
                                    <h3><Link to={`/noticia/${post.id}`}>{post.title}</Link></h3>
                                    <p className="excerpt">{post.excerpt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
