import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/axios';
import Navbar from '../components/Navbar';
import { ArrowLeft, Save } from 'lucide-react';

export default function NoteForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    priority: 'Basse'
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(isEditing);

  useEffect(() => {
    if (isEditing) {
      const fetchNote = async () => {
        try {
          const response = await api.get(`/api/notes/${id}`);
          setFormData({
            title: response.data.title,
            content: response.data.content || '',
            priority: response.data.priority
          });
        } catch (error) {
          console.error('Failed to fetch note', error);
          setError('Impossible de charger la note.');
        } finally {
          setLoading(false);
        }
      };
      fetchNote();
    }
  }, [id, isEditing]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      if (isEditing) {
        await api.put(`/api/notes/${id}`, formData);
      } else {
        await api.post('/api/notes', formData);
      }
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Une erreur est survenue lors de la sauvegarde.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex items-center">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Retour aux notes
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200">
            <h1 className="text-xl font-bold text-slate-900">
              {isEditing ? 'Éditer la note' : 'Créer une nouvelle note'}
            </h1>
          </div>
          
          <div className="p-6">
            {error && (
              <div className="mb-4 bg-red-50 text-red-500 p-3 rounded-lg text-sm">
                {error}
              </div>
            )}
            
            {loading ? (
              <div className="animate-pulse space-y-4">
                <div className="h-10 bg-slate-200 rounded w-full"></div>
                <div className="h-32 bg-slate-200 rounded w-full"></div>
                <div className="h-10 bg-slate-200 rounded w-1/3"></div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-slate-700">
                    Titre *
                  </label>
                  <input
                    type="text"
                    id="title"
                    required
                    maxLength={100}
                    className="mt-1 block w-full rounded-md border-slate-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm border"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-slate-700">
                    Contenu
                  </label>
                  <textarea
                    id="content"
                    rows={6}
                    className="mt-1 block w-full rounded-md border-slate-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm border resize-y"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="priority" className="block text-sm font-medium text-slate-700">
                    Priorité
                  </label>
                  <select
                    id="priority"
                    className="mt-1 block w-full rounded-md border-slate-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm border"
                    value={formData.priority}
                    onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                  >
                    <option value="Basse">Basse</option>
                    <option value="Moyenne">Moyenne</option>
                    <option value="Haute">Haute</option>
                  </select>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => navigate('/')}
                    className="mr-3 inline-flex items-center px-4 py-2 border border-slate-300 shadow-sm text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Enregistrer
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
