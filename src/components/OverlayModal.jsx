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
        <section className="overlay">
          <article ref={contentRef}>
            {children}
          </article>
        </section>
    );
}
