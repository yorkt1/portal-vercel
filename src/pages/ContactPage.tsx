import { useState, useEffect } from 'react';

export default function ContactPage() {
    useEffect(() => {
        document.title = 'Contato — Portal Jurídico Fátima Felippe';
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [alert, setAlert] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.name && formData.email && formData.subject && formData.message) {
            // Mock submission
            setAlert({
                message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
                type: 'success'
            });
            setFormData({ name: '', email: '', subject: '', message: '' });

            // Clear alert after 5 seconds
            setTimeout(() => setAlert(null), 5000);
        } else {
            setAlert({
                message: 'Por favor, preencha todos os campos.',
                type: 'error'
            });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <main className="contact-page">
            <div className="container">
                <div className="contact-header">
                    <h1>Entre em Contato</h1>
                    <p>Tem alguma dúvida, sugestão ou deseja colaborar com nosso portal? Entre em contato conosco!</p>
                </div>

                {alert && (
                    <div className={`alert ${alert.type}`} style={{
                        position: 'fixed',
                        top: '20px',
                        right: '20px',
                        zIndex: 1001,
                        maxWidth: '300px'
                    }}>
                        {alert.message}
                    </div>
                )}

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="widget">
                            <h4>Informações de Contato</h4>
                            <div className="info-item">
                                <div className="info-icon">✉️</div>
                                <div className="info-content">
                                    <h3>Email</h3>
                                    <p>Fatimafelippe.adv@gmail.com</p>
                                </div>
                            </div>
                            <div className="info-item" style={{ marginTop: '15px' }}>
                                <div className="info-icon">📞</div>
                                <div className="info-content">
                                    <h3>Telefone</h3>
                                    <p>(48) 99802-1460</p>
                                </div>
                            </div>
                        </div>

                        <div className="widget">
                            <h4>Redes Sociais</h4>
                            <p>Siga-nos nas redes sociais para ficar por dentro das novidades:</p>
                            <div className="social-links">
                                <a
                                    href="https://www.instagram.com/fatimafelippe7?utm_source=qr&igsh=ZTUyeDhwcjlsem5h"
                                    className="btn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Instagram
                                </a>
                            </div>
                        </div>

                        <div className="contact-form">
                            <h2>Envie uma mensagem</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Seu Nome</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="form-control"
                                            placeholder="Digite seu nome"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Seu Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Digite seu email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Assunto</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="form-control"
                                        placeholder="Assunto da mensagem"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Mensagem</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="form-control"
                                        placeholder="Escreva sua mensagem aqui..."
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn primary" style={{ width: '100%', padding: '12px', fontSize: '16px', fontWeight: '600' }}>
                                    Enviar Mensagem
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
