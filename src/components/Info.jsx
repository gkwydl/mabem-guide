import React, { useState } from 'react';
import { LIZARD_DATA } from '../data/LizardData';

export default function Info() {
  const [selectedLizard, setSelectedLizard] = useState('crested');
  const lizard = LIZARD_DATA[selectedLizard];

  return (
    <div style={styles.contentPage}>
      <h2 style={styles.pageTitle}>🏠 도마뱀별 사육 환경 정보</h2>
      
      <div style={styles.tabBar}>
        {Object.keys(LIZARD_DATA).map((key) => (
          <button 
            key={key} 
            style={{...styles.tabBtn, ...(selectedLizard === key ? styles.activeTabBtn : {})}} 
            onClick={() => setSelectedLizard(key)}
          >
            {LIZARD_DATA[key].name}
          </button>
        ))}
      </div>

      <div style={styles.infoDetails}>
        <span style={styles.categoryBadge}>{lizard.category}</span>
        
        <h3 style={styles.lizardHeadline}>{lizard.name} <span style={styles.scientific}>{lizard.scientificName}</span></h3>
        <p style={styles.lizardIntro}>{lizard.description}</p>
        
        <div style={styles.infoBoxGrid}>
          <div style={styles.infoBox}>
            <strong style={styles.boxTitle}>🌡️ 사육 적정 온도 가이드</strong>
            {lizard.temperature.map((line, idx) => (
              <p key={idx} style={styles.boxP}>{line}</p>
            ))}
          </div>
          
          <div style={styles.infoBox}>
            <strong style={styles.boxTitle}>💧 사육 적정 습도 가이드</strong>
            {lizard.humidity.map((line, idx) => (
              <p key={idx} style={styles.boxP}>{line}</p>
            ))}
          </div>
        </div>

        <div style={styles.tipBox}>
          <strong>💡 핵심 사육 노하우</strong>
          <p style={{margin: '8px 0 0 0', fontSize: '0.95rem', lineHeight: '1.6'}}>{lizard.tips}</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  contentPage: { backgroundColor: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #f0eade' },
  pageTitle: { margin: '0 0 25px 0', color: '#4e4340' },
  tabBar: { display: 'flex', gap: '10px', marginBottom: '35px', flexWrap: 'wrap' },
  tabBtn: { padding: '10px 18px', border: '1px solid #e0d9d0', borderRadius: '8px', backgroundColor: '#fff', color: '#666', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.9rem' },
  activeTabBtn: { backgroundColor: '#99f9f9', color: '#4e4340', borderColor: '#99f9f9' },
  categoryBadge: { display: 'inline-block', backgroundColor: '#4e4340', color: '#fff', padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '10px' },
  infoDetails: { paddingTop: '5px' },
  lizardHeadline: { margin: '0 0 10px 0', fontSize: '1.7rem', color: '#4e4340' },
  scientific: { fontSize: '1rem', color: '#888', fontStyle: 'italic', fontWeight: 'normal', marginLeft: '10px' },
  lizardIntro: { color: '#555', lineHeight: '1.6', margin: '0 0 30px 0', fontSize: '1rem' },
  infoBoxGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px', marginBottom: '25px' },
  infoBox: { backgroundColor: '#fdfbfa', padding: '22px', borderRadius: '15px', borderLeft: '5px solid #99f9f9', display: 'flex', flexDirection: 'column', gap: '8px' },
  boxTitle: { color: '#4e4340', fontSize: '1.05rem', marginBottom: '4px' },
  boxP: { margin: 0, color: '#272727', fontSize: '0.92rem', lineHeight: '1.5' },
  tipBox: { backgroundColor: '#f5f7f7', padding: '20px', borderRadius: '12px', border: '1px dashed #4e4340' }
};