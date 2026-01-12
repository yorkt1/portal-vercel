import { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import { supabase } from '../services/supabase';
import type { Article } from '../data/content';
import {
    Bold, Italic, Heading1, Heading2, List,
    AlignLeft, AlignCenter, AlignRight, AlignJustify,
    Upload
} from 'lucide-react';

interface ArticleFormProps {
    type: string;
    initialData?: Article | null;
    onCancel: () => void;
    onSuccess: () => void;
}

export default function ArticleForm({ type, initialData, onCancel, onSuccess }: ArticleFormProps) {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<Partial<Article>>(initialData || {
        title: '',
        category: '',
        categoryName: '',
        excerpt: '',
        image: '',
        author: 'Fátima T. Felippe',
        content: '',
        date: new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' }),
        readTime: '5 min de leitura',
        tags: []
    });

    const isEditing = !!initialData;

    const editor = useEditor({
        extensions: [
            StarterKit,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
        ],
        content: formData.content || '',
        onUpdate: ({ editor }) => {
            setFormData(prev => ({ ...prev, content: editor.getHTML() }));
        },
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            setLoading(true);
            if (!e.target.files || e.target.files.length === 0) return;

            const file = e.target.files[0];
            const fileExt = file.name.split('.').pop();
            const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
            const filePath = `${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('content-images')
                .upload(filePath, file);

            if (uploadError) throw uploadError;

            const { data } = supabase.storage
                .from('content-images')
                .getPublicUrl(filePath);

            setFormData(prev => ({ ...prev, image: data.publicUrl }));
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('Erro ao enviar imagem. Verifique sem permissões.');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            let error;

            if (isEditing && initialData?.id) {
                const { error: updateError } = await supabase
                    .from('contents')
                    .update({ ...formData, type })
                    .eq('id', initialData.id);
                error = updateError;
            } else {
                const { error: insertError } = await supabase
                    .from('contents')
                    .insert([
                        { ...formData, type }
                    ]);
                error = insertError;
            }

            if (error) throw error;

            alert(`Conteúdo ${isEditing ? 'atualizado' : 'adicionado'} com sucesso!`);
            onSuccess();
        } catch (error) {
            console.error('Error saving content:', error);
            alert('Erro ao salvar conteúdo. Verifique as configurações do Supabase.');
        } finally {
            setLoading(false);
        }
    };

    const EditorButton = ({ onClick, isActive, children }: { onClick: () => void, isActive?: boolean, children: React.ReactNode }) => (
        <button
            type="button"
            onClick={onClick}
            className={`editor-btn ${isActive ? 'is-active' : ''}`}
        >
            {children}
        </button>
    );

    return (
        <div style={{ background: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ marginBottom: '24px', fontSize: '1.25rem', color: '#111827' }}>{isEditing ? 'Editar Conteúdo' : 'Novo Conteúdo'}</h2>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="form-row">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#374151' }}>Título</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="admin-login-input" // Reusing input style for consistency
                        placeholder="Digite o título do artigo..."
                    />
                </div>

                <div className="form-row form-row-group">
                    <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#374151' }}>Categoria</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={(e) => {
                                const val = e.target.value;
                                setFormData(prev => ({
                                    ...prev,
                                    category: val
                                }));
                            }}
                            required
                            className="admin-login-input"
                        >
                            <option value="">Selecione uma categoria</option>
                            <option value="artigo">Artigo</option>
                            <option value="reflexao">Reflexão</option>
                            <option value="noticia">Notícia</option>
                        </select>
                    </div>
                    <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#374151' }}>Nome Exibido</label>
                        <input
                            type="text"
                            name="categoryName"
                            placeholder="ex: Direito Civil"
                            value={formData.categoryName}
                            onChange={handleChange}
                            required
                            className="admin-login-input"
                        />
                    </div>
                </div>

                <div className="form-row form-row-group">
                    <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#374151' }}>Data</label>
                        <input
                            type="text"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            className="admin-login-input"
                            placeholder="ex: 11 de janeiro de 2024"
                        />
                    </div>
                    <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#374151' }}>Tempo de Leitura</label>
                        <input
                            type="text"
                            name="readTime"
                            value={formData.readTime}
                            onChange={handleChange}
                            required
                            className="admin-login-input"
                            placeholder="ex: 5 min de leitura"
                        />
                    </div>
                </div>
                <div className="form-row">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#374151' }}>Imagem de Capa</label>

                    <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '14px', fontWeight: 500, color: '#374151', minWidth: '100px' }}>Cole uma URL:</span>
                        <input
                            type="text"
                            name="image"
                            placeholder="https://..."
                            value={formData.image}
                            onChange={handleChange}
                            className="admin-login-input"
                            style={{ flex: 1 }}
                        />
                    </div>

                    <div className="image-upload-area">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="image-upload-input"
                        />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: '#6b7280' }}>
                            <Upload size={32} />
                            <span>Ou clique para upload / arraste uma imagem</span>
                        </div>
                    </div>

                    {formData.image && (
                        <div className="image-preview-wrapper">
                            <span className="image-preview-label">Pré-visualização</span>
                            <img
                                src={formData.image}
                                alt="Preview"
                                style={{ width: '100%', maxHeight: '300px', objectFit: 'contain', display: 'block' }}
                            />
                        </div>
                    )}
                </div>

                <div className="form-row">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#374151' }}>Tags (separadas por vírgula)</label>
                    <input
                        type="text"
                        name="tagsInput"
                        placeholder="Ex: Importância, Constituição Federal/88, Emendas, Lei Complementar nº 101/2000, Princípios, Instrumentos, Outro"
                        value={formData.tags?.join(', ') || ''}
                        onChange={(e) => {
                            const value = e.target.value;
                            // Split by comma, trim whitespace, and filter out empty strings
                            const newTags = value.split(',').map(tag => tag.trim());
                            setFormData(prev => ({ ...prev, tags: newTags }));
                        }}
                        className="admin-login-input"
                    />
                    <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>
                        Digite as tags separadas por vírgula.
                    </p>
                </div>

                <div className="form-row">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#374151' }}>Resumo</label>
                    <textarea
                        name="excerpt"
                        value={formData.excerpt}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="admin-login-input" // layout matches styled inputs
                        placeholder="Breve descrição do artigo..."
                    />
                </div>

                <div className="form-row">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#374151' }}>Conteúdo Completo</label>
                    <div style={{ border: '1px solid #d1d5db', borderRadius: '8px', overflow: 'hidden' }}>
                        <div className="editor-toolbar">
                            <EditorButton onClick={() => editor?.chain().focus().toggleBold().run()} isActive={editor?.isActive('bold')}>
                                <Bold size={18} />
                            </EditorButton>
                            <EditorButton onClick={() => editor?.chain().focus().toggleItalic().run()} isActive={editor?.isActive('italic')}>
                                <Italic size={18} />
                            </EditorButton>
                            <div style={{ width: '1px', background: '#d1d5db', margin: '0 4px' }} />
                            <EditorButton onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()} isActive={editor?.isActive('heading', { level: 1 })}>
                                <Heading1 size={18} />
                            </EditorButton>
                            <EditorButton onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()} isActive={editor?.isActive('heading', { level: 2 })}>
                                <Heading2 size={18} />
                            </EditorButton>
                            <div style={{ width: '1px', background: '#d1d5db', margin: '0 4px' }} />
                            <EditorButton onClick={() => editor?.chain().focus().toggleBulletList().run()} isActive={editor?.isActive('bulletList')}>
                                <List size={18} />
                            </EditorButton>
                            <div style={{ width: '1px', background: '#d1d5db', margin: '0 4px' }} />
                            <EditorButton onClick={() => editor?.chain().focus().setTextAlign('left').run()} isActive={editor?.isActive({ textAlign: 'left' })}>
                                <AlignLeft size={18} />
                            </EditorButton>
                            <EditorButton onClick={() => editor?.chain().focus().setTextAlign('center').run()} isActive={editor?.isActive({ textAlign: 'center' })}>
                                <AlignCenter size={18} />
                            </EditorButton>
                            <EditorButton onClick={() => editor?.chain().focus().setTextAlign('right').run()} isActive={editor?.isActive({ textAlign: 'right' })}>
                                <AlignRight size={18} />
                            </EditorButton>
                            <EditorButton onClick={() => editor?.chain().focus().setTextAlign('justify').run()} isActive={editor?.isActive({ textAlign: 'justify' })}>
                                <AlignJustify size={18} />
                            </EditorButton>
                        </div>
                        <EditorContent
                            editor={editor}
                            style={{ minHeight: '350px', padding: '16px', background: 'white' }}
                        />
                    </div>
                </div>

                <div className="form-actions">
                    <button type="submit" className="btn primary" disabled={loading} style={{ padding: '10px 24px', fontSize: '1rem' }}>
                        {loading ? 'Salvando...' : 'Salvar Conteúdo'}
                    </button>
                    <button type="button" className="btn" onClick={onCancel} disabled={loading} style={{ padding: '10px 24px', fontSize: '1rem' }}>
                        Cancelar
                    </button>
                </div>
            </form >
        </div >
    );
}
