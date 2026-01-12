import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../services/supabase';
import type { Article } from '../data/content';
import SkeletonCard from '../components/SkeletonCard';

export default function Home() {
    const [posts, setPosts] = useState<Article[]>([]);
    const [reflexoes, setReflexoes] = useState<Article[]>([]);
    const [noticias, setNoticias] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [featuredArticle, setFeaturedArticle] = useState<Article | null>(null);

    const [currentPageArtigos, setCurrentPageArtigos] = useState(1);
    const [currentPageReflexoes, setCurrentPageReflexoes] = useState(1);
    const [currentPageNoticias, setCurrentPageNoticias] = useState(1);
    const itemsPerPage = 4;

    useEffect(() => {
        fetchAllContent();
    }, []);

    const fetchAllContent = async () => {
        setLoading(true);
        try {
            const { data: artigosData } = await supabase
                .from('contents')
                .select('*')
                .eq('type', 'artigos')
                .order('position', { ascending: true })
                .order('id', { ascending: false });

            const { data: reflexoesData } = await supabase
                .from('contents')
                .select('*')
                .eq('type', 'reflexoes')
                .order('position', { ascending: true })
                .order('id', { ascending: false });

            const { data: noticiasData } = await supabase
                .from('contents')
                .select('*')
                .eq('type', 'noticias')
                .order('position', { ascending: true })
                .order('id', { ascending: false });

            setPosts(artigosData || []);
            setReflexoes(reflexoesData || []);
            setNoticias(noticiasData || []);

            // Apenas 1 artigo em destaque
            const featured = artigosData?.find(a => a.featured) || null;
            setFeaturedArticle(featured);
        } catch (error) {
            console.error('Error fetching content:', error);
        } finally {
            setLoading(false);
        }
    };

    // Calculate Hero and Main List content
    const leadArticle = featuredArticle || posts[0];
    const sideArticles = leadArticle
        ? posts.filter(p => p.id !== leadArticle.id).slice(0, 2)
        : [];
    const mainArtigosList = leadArticle
        ? posts.filter(p => p.id !== leadArticle.id)
        : posts;

    const totalTopics = new Set([
        ...posts.flatMap(p => p.tags || []),
        ...reflexoes.flatMap(r => r.tags || []),
        ...noticias.flatMap(n => n.tags || [])
    ]).size;

    const paginate = (items: Article[], currentPage: number) => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return items.slice(startIndex, startIndex + itemsPerPage);
    };

    const totalPages = (items: Article[]) => Math.ceil(items.length / itemsPerPage);

    const Pagination = ({ current, total, onChange }: { current: number; total: number; onChange: (page: number) => void }) => {
        if (total <= 1) return null;

        let visiblePages = [];
        if (total <= 5) {
            visiblePages = Array.from({ length: total }, (_, i) => i + 1);
        } else {
            if (current <= 3) {
                visiblePages = [1, 2, 3, 4, 5];
            } else if (current >= total - 2) {
                visiblePages = [total - 4, total - 3, total - 2, total - 1, total];
            } else {
                visiblePages = [current - 2, current - 1, current, current + 1, current + 2];
            }
        }

        return (
            <div className="pagination">
                <button
                    onClick={() => onChange(current - 1)}
                    disabled={current === 1}
                    className="btn"
                >
                    « Anterior
                </button>
                {visiblePages.map(page => (
                    <button
                        key={page}
                        onClick={() => onChange(page)}
                        className={`btn ${current === page ? 'primary' : ''}`}
                    >
                        {page}
                    </button>
                ))}
                <button
                    onClick={() => onChange(current + 1)}
                    disabled={current === total}
                    className="btn"
                >
                    Próxima »
                </button>
            </div>
        );
    };

    return (
        <>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-image">
                            <div className="frame-rectangular">
                                <img
                                    src="https://res.cloudinary.com/dqewxdbfx/image/upload/v1758832833/WhatsApp_Image_2025-09-25_at_17.37.40-Photoroom_noiqhc.png"
                                    alt="Mulher representando o Direito"
                                />
                            </div>
                        </div>
                        <div className="hero-text">
                            <h2>Bem-vindo ao Portal Jurídico</h2>
                            <p>
                                Este é um espaço online para escrever, publicar e compartilhar conhecimentos na área do direito e matérias
                                afins, com pessoas interessadas e conectadas a grande rede.
                            </p>
                            <p>
                                Esperamos que você tenha acesso a informações precisas e relevantes para sua prática profissional,
                                estudos ou vida pessoal.
                            </p>
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <span className="stat-number">+{posts.length}</span>
                                    <span className="stat-label">Artigos Publicados</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">+{totalTopics}</span>
                                    <span className="stat-label">Tópicos Abordados</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">+{posts.length + reflexoes.length + noticias.length}</span>
                                    <span className="stat-label">Conteúdo Produzido</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="container">
                {/* Hero Section - Always show 3 cards (1 large + 2 small) */}
                <section className="hero">
                    {loading ? (
                        <>
                            <div className="lead-article">
                                <SkeletonCard />
                            </div>
                            <div className="side-cards">
                                <SkeletonCard />
                                <SkeletonCard />
                            </div>
                        </>
                    ) : leadArticle ? (
                        <>
                            {/* Main featured card */}
                            <div className="lead-article">
                                <span className={`category ${leadArticle.category}`}>
                                    {leadArticle.categoryName}
                                </span>
                                <div className="meta">
                                    {leadArticle.date} • {leadArticle.readTime}
                                </div>
                                <Link to={`/artigo/${leadArticle.id}`}>
                                    <img
                                        src={leadArticle.image}
                                        alt={leadArticle.title}
                                        onError={(e) => {
                                            e.currentTarget.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                                        }}
                                    />
                                </Link>
                                <Link to={`/artigo/${leadArticle.id}`}>
                                    <h1>{leadArticle.title}</h1>
                                </Link>
                                <p>{leadArticle.excerpt}</p>
                                <div style={{ marginTop: '12px' }}>
                                    <Link
                                        to={`/artigo/${leadArticle.id}`}
                                        className="btn primary"
                                    >
                                        Leia na íntegra
                                    </Link>
                                </div>
                            </div>

                            {/* 2 side cards */}
                            <div className="side-cards">
                                {sideArticles.map((post) => (
                                    <Link key={post.id} to={`/artigo/${post.id}`} className="card-small">
                                        <span className={`category ${post.category}`}>{post.categoryName}</span>
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            onError={(e) => {
                                                e.currentTarget.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                                            }}
                                        />
                                        <h3>{post.title}</h3>
                                        <div className="meta">
                                            por {post.author} • {post.date}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </>
                    ) : (
                        <p style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: 'var(--muted)' }}>
                            Nenhum artigo disponível no momento.
                        </p>
                    )}
                </section>

                {/* Artigos Section */}
                <div className="titulo">Artigos</div>
                <section className="main">
                    <section className="posts">
                        {loading ? (
                            <>
                                {[1, 2, 3, 4].map(i => <SkeletonCard key={i} />)}
                            </>
                        ) : (
                            paginate(mainArtigosList, currentPageArtigos).map((post) => (
                                <article key={post.id} className="post">
                                    <div>
                                        <span className={`category ${post.category}`}>{post.categoryName}</span>
                                        <div className="post-meta">
                                            <span>{post.date}</span>
                                            <span>•</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                        <Link to={`/artigo/${post.id}`}>
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                onError={(e) => {
                                                    e.currentTarget.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                                                }}
                                            />
                                        </Link>
                                        <h3>
                                            <Link to={`/artigo/${post.id}`}>{post.title}</Link>
                                        </h3>
                                        <p className="excerpt">{post.excerpt}</p>
                                    </div>
                                </article>
                            ))
                        )}
                    </section>

                    <aside>
                        <div className="widget">
                            <h4>Mais lidos</h4>
                            <ol style={{ paddingLeft: '18px', margin: 0 }}>
                                {posts.slice(0, 5).map((post) => (
                                    <li key={post.id}>
                                        <Link to={`/artigo/${post.id}`}>{post.title}</Link>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </aside>
                </section>

                <Pagination
                    current={currentPageArtigos}
                    total={totalPages(mainArtigosList)}
                    onChange={setCurrentPageArtigos}
                />

                {/* Reflexões Section */}
                <div className="titulo">Reflexões</div>
                <section className="main">
                    <section className="posts">
                        {loading ? (
                            <>
                                {[1, 2, 3, 4].map(i => <SkeletonCard key={i} />)}
                            </>
                        ) : (
                            paginate(reflexoes, currentPageReflexoes).map((reflexao) => (
                                <article key={reflexao.id} className="post">
                                    <div>
                                        <span className={`category ${reflexao.category}`}>{reflexao.categoryName}</span>
                                        <div className="post-meta">
                                            <span>{reflexao.date}</span>
                                            <span>•</span>
                                            <span>{reflexao.readTime}</span>
                                        </div>
                                        <Link to={`/reflexao/${reflexao.id}`}>
                                            <img
                                                src={reflexao.image}
                                                alt={reflexao.title}
                                                onError={(e) => {
                                                    e.currentTarget.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                                                }}
                                            />
                                        </Link>
                                        <h3>
                                            <Link to={`/reflexao/${reflexao.id}`}>{reflexao.title}</Link>
                                        </h3>
                                        <p className="excerpt">{reflexao.excerpt}</p>
                                    </div>
                                </article>
                            ))
                        )}
                    </section>

                    <aside>
                        <div className="widget">
                            <h4>Mais lidos</h4>
                            <ol style={{ paddingLeft: '18px', margin: 0 }}>
                                {reflexoes.slice(0, 5).map((reflexao) => (
                                    <li key={reflexao.id}>
                                        <Link to={`/reflexao/${reflexao.id}`}>{reflexao.title}</Link>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </aside>
                </section>

                <Pagination
                    current={currentPageReflexoes}
                    total={totalPages(reflexoes)}
                    onChange={setCurrentPageReflexoes}
                />

                {/* Notícias Section */}
                <div className="titulo">Notícias</div>
                <section className="main">
                    <section className="posts">
                        {loading ? (
                            <>
                                {[1, 2, 3, 4].map(i => <SkeletonCard key={i} />)}
                            </>
                        ) : noticias.length > 0 ? (
                            paginate(noticias, currentPageNoticias).map((noticia) => (
                                <article key={noticia.id} className="post">
                                    <div>
                                        <span className={`category ${noticia.category}`}>{noticia.categoryName}</span>
                                        <div className="post-meta">
                                            <span>{noticia.date}</span>
                                            <span>•</span>
                                            <span>{noticia.readTime}</span>
                                        </div>
                                        <Link to={`/noticia/${noticia.id}`}>
                                            <img
                                                src={noticia.image}
                                                alt={noticia.title}
                                                onError={(e) => {
                                                    e.currentTarget.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                                                }}
                                            />
                                        </Link>
                                        <h3>
                                            <Link to={`/noticia/${noticia.id}`}>{noticia.title}</Link>
                                        </h3>
                                        <p className="excerpt">{noticia.excerpt}</p>
                                    </div>
                                </article>
                            ))
                        ) : (
                            <p style={{ color: 'var(--muted)', textAlign: 'center', padding: '40px', gridColumn: '1 / -1' }}>
                                Nenhuma notícia disponível no momento.
                            </p>
                        )}
                    </section>

                    <aside>
                        <div className="widget">
                            <h4>Mais lidos</h4>
                            <ol style={{ paddingLeft: '18px', margin: 0 }}>
                                {noticias.slice(0, 5).map((noticia) => (
                                    <li key={noticia.id}>
                                        <Link to={`/noticia/${noticia.id}`}>{noticia.title}</Link>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </aside>
                </section>

                <Pagination
                    current={currentPageNoticias}
                    total={totalPages(noticias)}
                    onChange={setCurrentPageNoticias}
                />
            </main>
        </>
    );
}
