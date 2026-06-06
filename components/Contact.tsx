'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Copy, Check, Briefcase, Code, Users, Sparkles } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { Section, SectionTitle } from './ui/Section';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Formspree integration
    const formId = 'xgobawob';
    const formDataObj = new FormData();
    formDataObj.append('name', formData.name);
    formDataObj.append('email', formData.email);
    formDataObj.append('subject', formData.subject);
    formDataObj.append('message', formData.message);

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: formDataObj,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const availabilityItems = [
    { icon: Briefcase, label: 'Internships', color: 'from-blue-500 to-cyan-500' },
    { icon: Code, label: 'Freelance Projects', color: 'from-purple-500 to-pink-500' },
    { icon: Users, label: 'Collaborations', color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <Section id="contact" className="bg-gradient-to-b from-background/50 to-background relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <SectionTitle>Get In Touch</SectionTitle>

      {/* CTA Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Let's Build Something <span className="gradient-text">Amazing</span> Together
        </h2>
        <p className="text-muted text-lg">
          I'm actively seeking internship opportunities and open to exciting collaborations. 
          Whether you're a recruiter looking for talent or a fellow developer with a project idea, 
          I'd love to hear from you.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Availability Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <GlassCard hover={false} className="relative bg-white/[0.08] backdrop-blur-xl border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                </div>
                <h3 className="text-xl font-bold text-white">Available For</h3>
              </div>
              
              <div className="space-y-4">
                {availabilityItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/item"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${item.color} group-hover/item:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-medium">{item.label}</span>
                    <Check className="w-5 h-5 text-green-400 ml-auto" />
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Contact Information Card */}
          <GlassCard hover={false} className="bg-white/[0.08] backdrop-blur-xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="group relative">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted mb-1">Email</p>
                    <a href="mailto:arpitkumar0211@gmail.com" className="text-white hover:text-primary transition-colors truncate block">
                      arpitkumar0211@gmail.com
                    </a>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => copyToClipboard('arpitkumar0211@gmail.com', 'email')}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    aria-label="Copy email"
                  >
                    <AnimatePresence mode="wait">
                      {copied === 'email' ? (
                        <motion.div
                          key="check"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <Check className="w-4 h-4 text-green-400" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="copy"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <Copy className="w-4 h-4 text-muted" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </div>

              <div className="group relative">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted mb-1">Phone</p>
                    <a href="tel:+919142170211" className="text-white hover:text-primary transition-colors truncate block">
                      +91 9142170211
                    </a>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => copyToClipboard('+919142170211', 'phone')}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    aria-label="Copy phone"
                  >
                    <AnimatePresence mode="wait">
                      {copied === 'phone' ? (
                        <motion.div
                          key="check"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <Check className="w-4 h-4 text-green-400" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="copy"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <Copy className="w-4 h-4 text-muted" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </div>

              <div className="group relative">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted mb-1">Location</p>
                    <span className="text-white truncate block">Jaipur, Rajasthan, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 mt-6 border-t border-white/10">
              <p className="text-sm text-muted mb-4">Connect with me</p>
              <div className="flex gap-3 flex-wrap">
                {[
                  { href: 'https://www.linkedin.com/in/arpitkumar0211', icon: 'fab fa-linkedin', label: 'LinkedIn' },
                  { href: 'https://github.com/arpitkumar28', icon: 'fab fa-github', label: 'GitHub' },
                  { href: 'https://x.com/Arpit_patel28', icon: 'fab fa-x-twitter', label: 'Twitter' },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-gradient-to-br hover:from-primary/20 hover:to-accent/20 hover:border-primary/50 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <i className={`${social.icon} text-xl text-muted group-hover:text-white transition-colors`}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard hover={false} className="bg-white/[0.08] backdrop-blur-xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="peer w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  placeholder="Your name"
                  id="name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-4 text-muted transition-all duration-300 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-background peer-focus:px-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:left-3 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-primary peer-not-placeholder-shown:bg-background peer-not-placeholder-shown:px-2"
                >
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="peer w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  placeholder="your@email.com"
                  id="email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-4 text-muted transition-all duration-300 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-background peer-focus:px-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:left-3 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-primary peer-not-placeholder-shown:bg-background peer-not-placeholder-shown:px-2"
                >
                  Email Address
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="peer w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  placeholder="What's this about?"
                  id="subject"
                />
                <label
                  htmlFor="subject"
                  className="absolute left-4 top-4 text-muted transition-all duration-300 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-background peer-focus:px-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:left-3 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-primary peer-not-placeholder-shown:bg-background peer-not-placeholder-shown:px-2"
                >
                  Subject
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="peer w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                  placeholder="Your message..."
                  id="message"
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 top-4 text-muted transition-all duration-300 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-background peer-focus:px-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:left-3 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-primary peer-not-placeholder-shown:bg-background peer-not-placeholder-shown:px-2"
                >
                  Your Message
                </label>
              </div>

              <Button 
                type="submit" 
                className="w-full relative overflow-hidden group"
                disabled={isSubmitted || isLoading}
              >
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Sparkles className="w-4 h-4" />
                      </motion.div>
                      Sending...
                    </motion.div>
                  ) : isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Message Sent!
                    </motion.div>
                  ) : (
                    <motion.div
                      key="send"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </form>

            <p className="text-xs text-muted mt-4 text-center">
              I'll get back to you within 24 hours
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </Section>
  );
};
