import React, { useState, useEffect, memo } from 'react';
import KivexToolbar from './KivexToolbar';
import DeviceFrame from './DeviceFrame';

/**
 * KivexPreviewWrapper
 * Top-level application wrapper hosting the KIVEX Technology preview toolbar,
 * device viewport switcher (PC, Tablet, Phone, Fullscreen), and floating reopen control.
 */
function KivexPreviewWrapper() {
  const [activeMode, setActiveMode] = useState('pc');
  const [isToolbarVisible, setIsToolbarVisible] = useState(true);

  // Restore toolbar shortcut (Ctrl/Cmd + Shift + K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'k') {
        setIsToolbarVisible((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden flex flex-col bg-[#141416]">
      {/* 1. KIVEX Technology Preview Toolbar */}
      {isToolbarVisible && (
        <KivexToolbar
          activeMode={activeMode}
          onSelectMode={(mode) => setActiveMode(mode)}
          onClose={() => setIsToolbarVisible(false)}
        />
      )}

      {/* 2. Isolated Device Preview Workspace */}
      <main className="flex-1 w-full h-full overflow-hidden relative">
        <DeviceFrame 
          activeMode={isToolbarVisible ? activeMode : 'fullscreen'} 
          targetUrl="/?preview=target"
        />
      </main>

      {/* 3. Floating Reopen Control (Visible only when toolbar is hidden) */}
      {!isToolbarVisible && (
        <button
          onClick={() => setIsToolbarVisible(true)}
          aria-label="Reopen KIVEX Technology Preview Toolbar"
          title="Reopen KIVEX Preview Toolbar (or press Ctrl+Shift+K)"
          className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-3.5 py-2 rounded-full shadow-2xl border transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7]"
          style={{
            backgroundColor: '#F5EFE5',
            borderColor: '#2D5FC7',
            boxShadow: '0 12px 30px -5px rgba(0,0,0,0.6)'
          }}
        >
          {/* KIVEX Logo Mini Lockup */}
          <div className="flex items-center gap-1">
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center font-black text-xs text-white"
              style={{ backgroundColor: '#2D5FC7' }}
            >
              K
            </div>
            <span
              className="text-xs font-black tracking-tight"
              style={{ color: '#2D5FC7' }}
            >
              KIVEX
            </span>
            <span
              className="text-[10px] font-semibold"
              style={{ color: '#E8B62A' }}
            >
              Technology
            </span>
          </div>

          <span className="text-[10px] font-mono text-neutral-600 bg-white/70 px-1.5 py-0.5 rounded border border-neutral-300">
            Open Toolbar
          </span>
        </button>
      )}
    </div>
  );
}

export default memo(KivexPreviewWrapper);
