import { Link } from 'react-router-dom';
import { Calendar, Edit, Trash2 } from 'lucide-react';

const priorityColors = {
  Basse: 'bg-green-100 text-green-800 border-green-200',
  Moyenne: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  Haute: 'bg-red-100 text-red-800 border-red-200',
};

export default function NoteCard({ note, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-slate-900 line-clamp-1 flex-1 pr-4">
            {note.title}
          </h3>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${priorityColors[note.priority]}`}>
            {note.priority}
          </span>
        </div>
        
        <p className="text-slate-600 text-sm mb-6 line-clamp-3 min-h-[4.5rem]">
          {note.content || <span className="italic text-slate-400">Aucun contenu</span>}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center text-xs text-slate-500">
            <Calendar className="h-3.5 w-3.5 mr-1" />
            {new Date(note.created_at).toLocaleDateString('fr-FR')}
          </div>
          
          <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Link
              to={`/notes/edit/${note.id}`}
              className="p-1.5 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors"
            >
              <Edit className="h-4 w-4" />
            </Link>
            <button
              onClick={() => onDelete(note.id)}
              className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
