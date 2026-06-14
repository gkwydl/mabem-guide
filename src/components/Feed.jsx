import React, { useState } from 'react';
import { LIZARD_DATA } from '../data/LizardData';

export default function Feed() {
  const sortedKeys = Object.keys(LIZARD_DATA).sort((a, b) => {
    return LIZARD_DATA[a].name.localeCompare(LIZARD_DATA[b].name, 'ko');
  });

  const [selectedLizard, setSelectedLizard] = useState(sortedKeys[0] || 'crested');
  const lizard = LIZARD_DATA[selectedLizard];

  return (
    <div style={styles.contentPage}>
      <h2 style={styles.pageTitle}>🐛 무엇을 언제 얼마나 줘야 할까요?</h2>
      
      <div style={styles.containerLayout}>
        <aside style={styles.sidebar}>
          <div style={styles.sidebarHeader}>🦎 도마뱀 식단 목록</div>
          <ul style={styles.listContainer}>
            {sortedKeys.map((key) => (
              <li 
                key={key} 
                style={{
                  ...styles.listItem, 
                  ...(selectedLizard === key ? styles.activeListItem : {})
                }}
                onClick={() => setSelectedLizard(key)}
              >
                <span style={styles.listBullet}>•</span> {LIZARD_DATA[key].name}
              </li>
            ))}
          </ul>
        </aside>

        <section style={styles.infoDetails}>
          {lizard ? (
            <>
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
                  <strong style={{color: '#4e4340'}}>💡 급여 노하우 체크 포인트:</strong>
                  <p style={{margin: '6px 0 0 0', fontSize: '0.95rem', color: '#272727', lineHeight: '1.5'}}>{lizard.feedtips}</p>
                </div>
              )}
            </>
          ) : (
            <p style={{color: '#666'}}>도마뱀을 선택해 주세요.</p>
          )}
        </section>
      </div>
    </div>
  );
}

const styles = {
  contentPage: { backgroundColor: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #f0eade' },
  pageTitle: { margin: '0 0 30px 0', color: '#4e4340', borderBottom: '2px solid #99f9f9', paddingBottom: '15px' },
  containerLayout: { display: 'flex', gap: '30px', alignItems: 'flex-start' },
  
  // 사이드바 목록 스타일
  sidebar: { width: '240px', minWidth: '240px', backgroundColor: '#fdfcfb', borderRadius: '12px', border: '1px solid #e0d9d0', overflow: 'hidden' },
  sidebarHeader: { backgroundColor: '#4e4340', color: '#fff', padding: '12px 15px', fontSize: '0.95rem', fontWeight: 'bold' },
  listContainer: { listStyle: 'none', padding: 0, margin: 0, maxHeight: '450px', overflowY: 'auto' },
  listItem: { padding: '12px 18px', cursor: 'pointer', borderBottom: '1px solid #f0eade', color: '#666', fontSize: '0.95rem', fontWeight: '500', display: 'flex', alignItems: 'center', transition: 'all 0.2s' },
  activeListItem: { backgroundColor: '#99f9f9', color: '#4e4340', fontWeight: 'bold' },
  listBullet: { marginRight: '8px', color: '#4e4340', fontSize: '1.1rem' },
  
  // 본문 영역 스타일
  infoDetails: { flex: 1, paddingLeft: '10px' },
  categoryBadge: { display: 'inline-block', backgroundColor: '#99f9f9', color: '#4e4340', padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '12px' },
  lizardHeadline: { margin: '0 0 20px 0', fontSize: '1.5rem', color: '#4e4340', fontWeight: 'bold' },
  feedCardContainer: { display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '25px' },
  feedParagraphBox: { backgroundColor: '#fdfcfb', padding: '18px 22px', borderRadius: '12px', border: '1px solid #f0eade', borderLeft: '5px solid #4e4340' },
  feedText: { margin: 0, fontSize: '0.95rem', color: '#272727', lineHeight: '1.6' },
  feedTipsAlert: { backgroundColor: '#eefefe', border: '1px solid #99f9f9', padding: '20px', borderRadius: '12px' }
};