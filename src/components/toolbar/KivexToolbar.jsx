import React, { useState, useRef, useEffect, memo } from 'react';
import { Monitor, Tablet, Smartphone, Maximize2, X, ChevronDown } from 'lucide-react';

/**
 * KIVEX Technology Website Preview Toolbar
 * Permanent application wrapper with #F5EFE5 background, #2D5FC7 blue and #E8B62A gold branding.
 */
function KivexToolbar({
  activeMode = 'pc',
  onSelectMode,
  onClose
}) {
  const [deviceMenuOpen, setDeviceMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click or Escape
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDeviceMenuOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && deviceMenuOpen) {
        setDeviceMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [deviceMenuOpen]);

  const MODES = [
    { id: 'pc', label: 'PC', icon: Monitor, widthLabel: '1280px' },
    { id: 'tablet', label: 'Tablet', icon: Tablet, widthLabel: '768px' },
    { id: 'phone', label: 'Phone', icon: Smartphone, widthLabel: '390px' },
    { id: 'fullscreen', label: 'Fullscreen', icon: Maximize2, widthLabel: '100%' }
  ];

  return (
    <header
      className="relative z-50 w-full select-none border-b shadow-sm transition-all duration-200"
      style={{
        backgroundColor: '#F5EFE5',
        borderColor: 'rgba(45, 95, 199, 0.15)'
      }}
      role="toolbar"
      aria-label="KIVEX Technology Preview Toolbar"
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        
        {/* Permanent KIVEX Technology Logo Lockup (LEFT SIDE) */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span
            className="text-lg sm:text-xl font-black tracking-tight"
            style={{ color: '#2D5FC7', fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            KIVEX
          </span>
          <span
            className="text-xs sm:text-sm font-semibold tracking-normal"
            style={{ color: '#E8B62A', fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Technology
          </span>
        </div>

        {/* Desktop Viewport Controls (CENTER) */}
        <div className="hidden md:flex items-center gap-1.5 p-1 rounded-full border bg-white/70 shadow-inner" style={{ borderColor: 'rgba(45, 95, 199, 0.2)' }}>
          {MODES.map((mode) => {
            const Icon = mode.icon;
            const isActive = activeMode === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => onSelectMode(mode.id)}
                aria-pressed={isActive}
                aria-label={`Preview as ${mode.label} (${mode.widthLabel})`}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7] ${
                  isActive
                    ? 'text-white shadow-sm'
                    : 'text-neutral-700 hover:text-[#2D5FC7] hover:bg-black/5'
                }`}
                style={{
                  backgroundColor: isActive ? '#2D5FC7' : 'transparent',
                  borderColor: isActive ? '#2D5FC7' : 'transparent'
                }}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{mode.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                    isActive ? 'bg-white/20 text-white' : 'bg-neutral-200/70 text-neutral-600'
                  }`}
                >
                  {mode.widthLabel}
                </span>
              </button>
            );
          })}
        </div>

        {/* Mobile / Compact Device Selector Dropdown (Responsive) */}
        <div className="relative md:hidden" ref={dropdownRef}>
          <button
            onClick={() => setDeviceMenuOpen(!deviceMenuOpen)}
            aria-expanded={deviceMenuOpen}
            aria-haspopup="true"
            aria-label="Device view menu"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold bg-white/80 text-[#2D5FC7] shadow-sm"
            style={{ borderColor: 'rgba(45, 95, 199, 0.25)' }}
          >
            <span className="capitalize">{activeMode}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${deviceMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Expanded Device-View Interface with Mandatory KIVEX Technology Branding */}
          {deviceMenuOpen && (
            <div
              className="absolute left-1/2 -translate-x-1/2 top-12 w-64 rounded-2xl border p-4 shadow-xl animate-in fade-in zoom-in-95 duration-150 z-50"
              style={{
                backgroundColor: '#F5EFE5',
                borderColor: 'rgba(45, 95, 199, 0.2)'
              }}
              role="menu"
              aria-label="Device selection panel"
            >
              {/* Mandatory KIVEX Technology lockup inside expanded panel */}
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-black/10">
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-black tracking-tight" style={{ color: '#2D5FC7' }}>
                    KIVEX
                  </span>
                  <span className="text-xs font-semibold" style={{ color: '#E8B62A' }}>
                    Technology
                  </span>
                </div>
                <button
                  onClick={() => setDeviceMenuOpen(false)}
                  className="p-1 rounded-full text-neutral-600 hover:text-neutral-900"
                  aria-label="Close device menu"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-1">
                {MODES.map((mode) => {
                  const Icon = mode.icon;
                  const isActive = activeMode === mode.id;
                  return (
                    <button
                      key={mode.id}
                      onClick={() => {
                        onSelectMode(mode.id);
                        setDeviceMenuOpen(false);
                      }}
                      role="menuitem"
                      aria-pressed={isActive}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                        isActive
                          ? 'text-white font-bold'
                          : 'text-neutral-800 hover:bg-black/5'
                      }`}
                      style={{
                        backgroundColor: isActive ? '#2D5FC7' : 'transparent'
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        <span>{mode.label}</span>
                      </div>
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isActive ? 'bg-white/20 text-white' : 'bg-black/5 text-neutral-600'}`}>
                        {mode.widthLabel}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Cross / Close Control (×) */}
        <div className="flex items-center gap-2">
          <button
            onClick={onClose}
            aria-label="Close preview toolbar"
            title="Close toolbar (reopen via floating control)"
            className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-700 transition-all duration-200 hover:bg-black/10 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </header>
  );
}

export default memo(KivexToolbar);
