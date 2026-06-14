import React from 'react';
import { SHOP_DATA } from '../data/LizardData';

export default function Shop() {
  return (
    <div style={styles.contentPage}>
      <h2 style={styles.pageTitle}>🛒 추천 파충류 샵 특징 및 링크</h2>
      <p style={{color: '#666', marginBottom: '20px'}}>초보자분들이 안심하고 이용할 수 있는 메이저 샵들의 특징 요약입니다.</p>
      <div style={styles.shopGrid}>
        {SHOP_DATA.map((shop, idx) => (
          <div key={idx} style={styles.shopCard}>
            <h3 style={{margin: 0, color: '#4e4340'}}>{shop.name}</h3>
            <div style={styles.tagWrapper}>
              {shop.tags.map((tag, tIdx) => <span key={tIdx} style={styles.shopTag}>{tag}</span>)}
            </div>
            <p style={styles.shopDesc}>{shop.desc}</p>
            <a href={shop.url} target="_blank" rel="noopener noreferrer" style={styles.shopGoBtn}>웹사이트 방문하기</a>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  contentPage: { backgroundColor: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #f0eade' },
  pageTitle: { margin: '0 0 25px 0', color: '#4e4340' },
  shopGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '25px' },
  shopCard: { backgroundColor: '#fffdfa', border: '1px solid #f0eade', padding: '25px', borderRadius: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
  tagWrapper: { display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '10px' },
  shopTag: { fontSize: '0.75rem', backgroundColor: '#99f9f9', color: '#4e4340', padding: '4px 8px', borderRadius: '5px', fontWeight: 'bold' },
  shopDesc: { fontSize: '0.95rem', color: '#555', margin: '10px 0 20px 0', lineHeight: '1.5' },
  shopGoBtn: { display: 'block', textAlign: 'center', backgroundColor: '#4e4340', color: '#fff', padding: '10px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.95rem' }
};