
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Users, Calendar, MessageCircle, Trash2, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

interface RSVP {
  id: string;
  name: string;
  guests: number;
  message: string | null;
  created_at: string;
}

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [rsvps, setRsvps] = useState<RSVP[]>([]);
  const [loading, setLoading] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const navigate = useNavigate();

  // Simple password protection (in production, use proper authentication)
  const ADMIN_PASSWORD = 'celebration2025';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);
    
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast.success('Welcome to the admin dashboard!');
    } else {
      toast.error('Incorrect password');
    }
    setIsAuthenticating(false);
  };

  const fetchRSVPs = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('rsvps')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching RSVPs:', error);
        toast.error('Failed to load RSVPs');
        return;
      }

      setRsvps(data || []);
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error('Failed to load RSVPs');
    } finally {
      setLoading(false);
    }
  };

  const deleteRSVP = async (id: string) => {
    if (!confirm('Are you sure you want to delete this RSVP?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('rsvps')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting RSVP:', error);
        toast.error('Failed to delete RSVP');
        return;
      }

      setRsvps(rsvps.filter(rsvp => rsvp.id !== id));
      toast.success('RSVP deleted successfully');
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error('Failed to delete RSVP');
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchRSVPs();
    }
  }, [isAuthenticated]);

  const totalGuests = rsvps.reduce((sum, rsvp) => sum + rsvp.guests, 0);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pony-100 via-pink-100 to-balloon-100 flex items-center justify-center p-4">
        <div className="glass rounded-3xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-pony-500 to-balloon-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Admin Access</h1>
            <p className="text-gray-600">Enter the password to view RSVP submissions</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 glass rounded-xl border border-gray-200 focus:border-pony-500 focus:outline-none transition-colors"
                placeholder="Enter admin password"
                required
                disabled={isAuthenticating}
              />
            </div>

            <button
              type="submit"
              disabled={isAuthenticating}
              className="w-full bg-gradient-to-r from-pony-500 via-balloon-500 to-teddy-500 hover:from-pony-600 hover:via-balloon-600 hover:to-teddy-600 text-white p-4 rounded-xl font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isAuthenticating ? 'Authenticating...' : 'Access Admin Panel'}
            </button>
          </form>

          <button
            onClick={() => navigate('/')}
            className="mt-6 w-full flex items-center justify-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Main Page</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pony-100 via-pink-100 to-balloon-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="glass rounded-3xl p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold rainbow-text mb-2">RSVP Dashboard</h1>
              <p className="text-gray-600">Manage submissions for Dos' Dedication & Taya's 4th Birthday</p>
            </div>
            <button
              onClick={() => navigate('/')}
              className="mt-4 md:mt-0 flex items-center space-x-2 bg-gradient-to-r from-pony-500 to-balloon-500 hover:from-pony-600 hover:to-balloon-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Main Page</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-pony-500 to-pink-500 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">{rsvps.length}</p>
                <p className="text-gray-600">Total RSVPs</p>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-balloon-500 to-teddy-500 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">{totalGuests}</p>
                <p className="text-gray-600">Total Guests</p>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-teddy-500 to-pony-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">{rsvps.filter(rsvp => rsvp.message).length}</p>
                <p className="text-gray-600">With Messages</p>
              </div>
            </div>
          </div>
        </div>

        {/* RSVPs List */}
        <div className="glass rounded-3xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">RSVP Submissions</h2>
            <button
              onClick={fetchRSVPs}
              disabled={loading}
              className="bg-gradient-to-r from-pony-500 to-balloon-500 hover:from-pony-600 hover:to-balloon-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 disabled:opacity-50"
            >
              {loading ? 'Refreshing...' : 'Refresh'}
            </button>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pony-500 mx-auto"></div>
              <p className="text-gray-600 mt-4">Loading RSVPs...</p>
            </div>
          ) : rsvps.length === 0 ? (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-600 mb-2">No RSVPs yet</h3>
              <p className="text-gray-500">RSVPs will appear here as guests submit them.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {rsvps.map((rsvp) => (
                <div key={rsvp.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-800">{rsvp.name}</h3>
                        <span className="bg-gradient-to-r from-pony-500 to-balloon-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {rsvp.guests} {rsvp.guests === 1 ? 'guest' : 'guests'}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mb-3">
                        Submitted on {new Date(rsvp.created_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                      {rsvp.message && (
                        <div className="bg-gradient-to-r from-pony-50 to-balloon-50 rounded-xl p-4">
                          <p className="text-gray-700 italic">"{rsvp.message}"</p>
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => deleteRSVP(rsvp.id)}
                      className="ml-4 p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete RSVP"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
