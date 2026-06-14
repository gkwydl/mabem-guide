import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import Info from './components/Info';
import Feed from './components/Feed';
import Shop from './components/Shop';

export default function App() {
  const [currentTab, setCurrentTab] = useState(() => {
    return localStorage.getItem('mabem-guide-current-tab') || 'home';
  });

  useEffect(() => {
    localStorage.setItem('mabem-guide-current-tab', currentTab);
    document.title = `Mabem Guide - ${
      currentTab === 'home'
        ? '홈'
        : currentTab === 'info'
          ? '사육 정보'
          : currentTab === 'feed'
            ? '먹이 정보'
            : '상점'
    }`;
  }, [currentTab]);

  const renderContent = () => {
    switch (currentTab) {
      case 'home': return <Home />;
      case 'info': return <Info />;
      case 'feed': return <Feed />;
      case 'shop': return <Shop />;
      default: return <Home />;
    }
  };

  return (
    <div style={styles.appContainer}>
      <nav style={styles.navbar}>
        <div style={styles.navLogo} onClick={() => setCurrentTab('home')}>Mabem Guide</div>
        <div style={styles.navMenu}>
          <button 
            style={{...styles.navLink, ...(currentTab === 'home' ? styles.activeNavLink : {})}} 
            onClick={() => setCurrentTab('home')}
          >
            홈
          </button>
          <button 
            style={{...styles.navLink, ...(currentTab === 'info' ? styles.activeNavLink : {})}} 
            onClick={() => setCurrentTab('info')}
          >
            사육 정보
          </button>
          <button 
            style={{...styles.navLink, ...(currentTab === 'feed' ? styles.activeNavLink : {})}} 
            onClick={() => setCurrentTab('feed')}
          >
            먹이 정보
          </button>
          <button 
            style={{...styles.navLink, ...(currentTab === 'shop' ? styles.activeNavLink : {})}} 
            onClick={() => setCurrentTab('shop')}
          >
            상점
          </button>
        </div>
      </nav>

      <main style={styles.main}>
        {renderContent()}
      </main>

      <footer style={styles.footer}>
        <div style={styles.footerLogo}>Mabem Guide</div>
        <p style={styles.copy}>© 2026 Mabem Guide. 전문가의 파충류 케어 가이드.</p>
      </footer>
    </div>
  );
}

const styles = {
  appContainer: { fontFamily: '"Noto Sans KR", sans-serif', backgroundColor: '#fffdfb', color: '#272727', minHeight: '100vh', display: 'flex', flexDirection: 'column' },
  navbar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 8%', backgroundColor: '#fff', borderBottom: '1px solid #f0edf9' },
  navLogo: { fontSize: '1.5rem', fontWeight: 'bold', color: '#4e4340', cursor: 'pointer' },
  navMenu: { display: 'flex', gap: '35px' },
  
navLink: { 
    border: 'none', 
    backgroundColor: 'transparent', 
    fontSize: '1.05rem', 
    color: '#8e8581', 
    cursor: 'pointer', 
    fontWeight: '500', 
    padding: '4px 0',
    outline: 'none',
    textDecoration: 'none',
    transition: 'color 0.2s ease'
  },
  
 activeNavLink: { 
    color: '#4e4340', 
    fontWeight: '700',
    textDecoration: 'none'
  },
  
  main: { flex: 1, width: '84%', margin: '0 auto', padding: '40px 0 80px 0' },
  footer: { backgroundColor: '#f5f0eb', padding: '40px 0', textAlign: 'center', borderTop: '1px dashed #dcd5cc' },
  footerLogo: { fontSize: '1.2rem', fontWeight: 'bold', color: '#4e4340', marginBottom: '10px' },
  footerLinks: { fontSize: '0.85rem', color: '#777', marginBottom: '15px' },
  copy: { margin: 0, fontSize: '0.8rem', color: '#999' }
};