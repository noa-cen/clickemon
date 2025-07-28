// src/components/OverlayModal.jsx
import React, { useEffect, useRef } from 'react';
import '../styles/OverlayModal.css';

export default function OverlayModal({ children, onClose }) {
  const contentRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (contentRef.current && !contentRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div className="overlay">
      <div ref={contentRef}>
        {children}
      </div>
    </div>
  );
}
