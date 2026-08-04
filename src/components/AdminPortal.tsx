import React, { useState, useEffect } from 'react';
import { X, Lock, Save, Plus, Trash2, Edit3, ChevronDown, ChevronRight, Layers, Users, Settings } from 'lucide-react';
import varanLogo from '../assets/varan logo.png';
import { useServices } from '../hooks/useServices';
import type { ServiceCategory, ServiceDetail } from '../types/domain';

interface AdminPortalProps {
  onClose: () => void;
}

export const AdminPortal: React.FC<AdminPortalProps> = ({ onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { services, saveServices } = useServices();
  const [editableServices, setEditableServices] = useState<ServiceCategory[]>([]);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [editingServiceId, setEditingServiceId] = useState<string | null>(null);

  useEffect(() => {
    // Check session storage
    if (sessionStorage.getItem('varan_admin_auth') === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    // Deep clone to avoid direct mutation
    setEditableServices(JSON.parse(JSON.stringify(services)));
  }, [services]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminId === 'varan.corporation' && password === 'varan@123') {
      setIsAuthenticated(true);
      sessionStorage.setItem('varan_admin_auth', 'true');
      setError('');
    } else {
      setError('Invalid Admin ID or Password');
    }
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to sign out?")) {
      setIsAuthenticated(false);
      sessionStorage.removeItem('varan_admin_auth');
    }
  };

  const saveChanges = () => {
    saveServices(editableServices);
    setEditingServiceId(null);
    alert('Changes saved successfully to local storage.');
  };

  const handleServiceChange = (categoryId: string, serviceId: string, field: keyof ServiceDetail, value: string) => {
    setEditableServices(prev => 
      prev.map(cat => {
        if (cat.id !== categoryId) return cat;
        return {
          ...cat,
          services: cat.services.map(srv => {
            if (srv.id !== serviceId) return srv;
            return { ...srv, [field]: value };
          })
        };
      })
    );
  };

  const deleteService = (categoryId: string, serviceId: string) => {
    if (confirm('Are you sure you want to delete this service?')) {
      setEditableServices(prev => 
        prev.map(cat => {
          if (cat.id !== categoryId) return cat;
          return {
            ...cat,
            services: cat.services.filter(srv => srv.id !== serviceId)
          };
        })
      );
    }
  };

  const addService = (categoryId: string) => {
    const newService: ServiceDetail = {
      id: `new-service-${Date.now()}`,
      title: 'New Service',
      description: 'Service description here...',
      keyDeliverables: ['Deliverable 1'],
      targetSectors: ['Sector 1'],
      metrics: [{ label: 'Metric', value: 'Value' }]
    };

    setEditableServices(prev => 
      prev.map(cat => {
        if (cat.id !== categoryId) return cat;
        return {
          ...cat,
          services: [...cat.services, newService]
        };
      })
    );
    
    setEditingServiceId(newService.id);
    if (expandedCategory !== categoryId) {
      setExpandedCategory(categoryId);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-[100] bg-slate-900/50 backdrop-blur-md flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
            <X className="w-6 h-6" />
          </button>
          
          <div className="p-8">
            <div className="flex justify-center mb-6">
              <div className="bg-apcoRed text-white p-4 rounded-full">
                <Lock className="w-8 h-8" />
              </div>
            </div>
            <h2 className="text-2xl font-black text-center uppercase tracking-tight text-apcoBlue mb-2">Restricted Access</h2>
            <p className="text-center text-sm text-slate-500 mb-8 font-semibold uppercase tracking-wider">Corporate Administration Portal</p>
            
            <form onSubmit={handleLogin} className="space-y-4">
              {error && <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm text-center font-semibold">{error}</div>}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Admin ID</label>
                <input 
                  type="text" 
                  value={adminId}
                  onChange={(e) => setAdminId(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-apcoRed focus:ring-1 focus:ring-apcoRed"
                  placeholder="Enter Admin ID"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-apcoRed focus:ring-1 focus:ring-apcoRed"
                  placeholder="Enter Password"
                />
              </div>
              <button type="submit" className="w-full bg-apcoBlue hover:bg-apcoRed transition-colors text-white font-bold uppercase tracking-widest py-4 rounded-lg mt-4">
                Authenticate
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-[#f4f5f7] flex h-[100dvh] overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-[#1b55e2] text-white flex flex-col shrink-0 overflow-y-auto shadow-xl z-10">
        <div className="p-6 flex items-center gap-3 border-b border-white/10">
          <div className="bg-white p-1.5 rounded-lg shrink-0">
            <img src={varanLogo} alt="Varan Logo" className="w-8 h-8 object-contain" />
          </div>
          <div>
            <div className="font-black tracking-tight leading-none text-lg">VARAN CORP</div>
            <div className="text-[9px] text-white/70 uppercase tracking-[0.2em] mt-1">Admin Panel</div>
          </div>
        </div>
        
        <div className="p-4 flex-1">
          <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-3 px-3">Navigation</div>
          <nav className="space-y-1">
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 bg-white/15 rounded-xl text-sm font-bold text-white shadow-sm border border-white/10">
              <Layers className="w-4 h-4" />
              Service Cards
            </a>
            {/* Mock links */}
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 hover:bg-white/10 rounded-xl text-sm font-semibold text-white/70 hover:text-white transition-colors">
              <Users className="w-4 h-4" />
              User Management
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 hover:bg-white/10 rounded-xl text-sm font-semibold text-white/70 hover:text-white transition-colors">
              <Settings className="w-4 h-4" />
              System Settings
            </a>
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white px-6 sm:px-8 py-4 flex items-center justify-between shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] z-0">
          <div>
            <h1 className="text-xl font-black text-slate-800 tracking-tight">Dashboard <span className="text-slate-400 font-medium mx-2">/</span> <span className="text-apcoBlue">Service Cards</span></h1>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={saveChanges} className="bg-[#1b55e2] hover:bg-blue-700 px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/20 transition-all active:scale-95">
              <Save className="w-4 h-4" />
              <span className="hidden sm:inline">Save Changes</span>
            </button>
            <button onClick={handleLogout} className="px-5 py-2.5 text-sm font-bold text-slate-600 hover:text-red-600 bg-slate-50 hover:bg-red-50 rounded-xl border border-slate-200 hover:border-red-200 transition-colors">
              Logout
            </button>
            <div className="w-px h-8 bg-slate-200 mx-2"></div>
            <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors" title="Close Admin Panel">
              <X className="w-6 h-6" />
            </button>
          </div>
        </header>

        {/* Editor Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {editableServices.map(category => (
            <div key={category.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div 
                className="bg-slate-100 p-4 flex items-center justify-between cursor-pointer hover:bg-slate-200 transition-colors"
                onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
              >
                <h2 className="text-lg font-bold text-apcoBlue uppercase tracking-wide flex items-center gap-2">
                  {expandedCategory === category.id ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  {category.title}
                </h2>
                <button 
                  onClick={(e) => { e.stopPropagation(); addService(category.id); }}
                  className="bg-white text-apcoBlue border border-slate-300 hover:border-apcoBlue px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Service
                </button>
              </div>

              {expandedCategory === category.id && (
                <div className="p-4 space-y-4">
                  {category.services.map(service => (
                    <div key={service.id} className="border border-slate-200 rounded-lg p-4">
                      {editingServiceId === service.id ? (
                        <div className="space-y-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Service Title</label>
                            <input 
                              type="text" 
                              value={service.title}
                              onChange={(e) => handleServiceChange(category.id, service.id, 'title', e.target.value)}
                              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-apcoBlue focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Description</label>
                            <textarea 
                              value={service.description}
                              onChange={(e) => handleServiceChange(category.id, service.id, 'description', e.target.value)}
                              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-apcoBlue focus:outline-none min-h-[100px]"
                            />
                          </div>
                          
                          <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
                            <button 
                              onClick={() => setEditingServiceId(null)}
                              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-700 transition-colors"
                            >
                              Done Editing
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-bold text-slate-800">{service.title}</h3>
                            <p className="text-sm text-slate-500 mt-1 line-clamp-2">{service.description}</p>
                          </div>
                          <div className="flex gap-2 ml-4 shrink-0">
                            <button 
                              onClick={() => setEditingServiceId(service.id)}
                              className="p-2 text-apcoBlue bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                              title="Edit"
                            >
                              <Edit3 className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => deleteService(category.id, service.id)}
                              className="p-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {category.services.length === 0 && (
                    <div className="text-center py-8 text-slate-400 text-sm">
                      No services in this category.
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};
