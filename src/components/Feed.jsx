import React, { useState } from 'react';
import { LIZARD_DATA } from '../data/LizardData';

export default function Feed() {
  const [selectedLizard, setSelectedLizard] = useState('crested');
  const lizard = LIZARD_DATA[selectedLizard];

  return (
    <div style={styles.contentPage}>
      <h2 style={styles.pageTitle}>🐛 무엇을 언제 얼마나 줘야 할까요?</h2>
      
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
        <h3 style={styles.lizardHeadline}>{lizard.name} 연령별 식단 매뉴얼</h3>
        
        <div style={styles.feedCardContainer}>
          {lizard.feed.map((paragraph, index) => (
            <div key={index} style={styles.feedParagraphBox}>
              <p style={styles.feedText}>{paragraph}</p>
            </div>
          ))}
        </div>

        {lizard.feedtips && (
          <div style={styles.feedTipsAlert}>
            <strong>💡 급여 노하우 체크 포인트:</strong>
            <p style={{margin: '6px 0 0 0', fontSize: '0.95rem', color: '#272727', lineHeight: '1.5'}}>{lizard.feedtips}</p>
          </div>
        )}
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
  categoryBadge: { display: 'inline-block', backgroundColor: '#99f9f9', color: '#4e4340', padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '10px' },
  lizardHeadline: { margin: '0 0 20px 0', fontSize: '1.5rem', color: '#4e4340' },
  feedCardContainer: { display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '25px' },
  feedParagraphBox: { backgroundColor: '#fdfcfb', padding: '18px 22px', borderRadius: '12px', borderLeft: '5px solid #4e4340' },
  feedText: { margin: 0, fontSize: '0.95rem', color: '#272727', lineHeight: '1.6' },
  feedTipsAlert: { backgroundColor: '#eefefe', border: '1px solid #99f9f9', padding: '20px', borderRadius: '12px' }
};