import React, { useState } from 'react';
import { X, Send, Users, MessageCircle, User } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

interface RSVPFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const RSVPForm: React.FC<RSVPFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      toast.error('Please enter your name');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('rsvps')
        .insert({
          name: formData.name.trim(),
          guests: parseInt(formData.guests),
          message: formData.message.trim() || null
        });

      if (error) {
        console.error('RSVP submission error:', error);
        toast.error('Sorry, there was an error submitting your RSVP. Please try again.');
        return;
      }

      toast.success('Thank you for your RSVP! We can\'t wait to celebrate with you! 🎉');
      
      // Reset form and close modal
      setFormData({ name: '', guests: '1', message: '' });
      onClose();
      
      // Navigate to thank you page with the user's name
      navigate(`/thank-you?name=${encodeURIComponent(formData.name.trim())}`);
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error('Sorry, there was an unexpected error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100">
        <div className="relative p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 transition-colors"
            disabled={isSubmitting}
          >
            <X className="w-6 h-6" />
          </button>

          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold rainbow-text mb-4">
              RSVP for Our Celebration
            </h2>
            <p className="text-gray-600">
              We're so excited to celebrate with you! Please let us know if you'll be joining us.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                <User className="w-5 h-5 text-pony-500" />
                <span>Your Name *</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 glass rounded-xl border border-gray-200 focus:border-pony-500 focus:outline-none transition-colors"
                placeholder="Enter your full name"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Number of Guests */}
            <div>
              <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                <Users className="w-5 h-5 text-balloon-500" />
                <span>Number of Guests</span>
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full p-4 glass rounded-xl border border-gray-200 focus:border-balloon-500 focus:outline-none transition-colors"
                disabled={isSubmitting}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                  <option key={num} value={num.toString()}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                <MessageCircle className="w-5 h-5 text-teddy-500" />
                <span>Message (Optional)</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-4 glass rounded-xl border border-gray-200 focus:border-teddy-500 focus:outline-none transition-colors resize-none"
                placeholder="Share your excitement or special wishes for Dos and Taya..."
                disabled={isSubmitting}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-pony-500 via-balloon-500 to-teddy-500 hover:from-pony-600 hover:via-balloon-600 hover:to-teddy-600 text-white p-4 rounded-xl font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <Send className="w-5 h-5" />
              <span>{isSubmitting ? 'Sending...' : 'Send RSVP'}</span>
            </button>
          </form>

          <div className="mt-6 p-4 bg-gradient-to-r from-pony-50 to-balloon-50 rounded-xl">
            <p className="text-sm text-gray-600 text-center">
              Can't make it? No worries! We'll miss you but understand. 
              Feel free to send your wishes anyway! 💕
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSVPForm;
