import React from 'react';
import { GALLERY_DATA } from '../data/LizardData';

export default function Home() {
  return (
    <div>
      <div style={styles.banner}>
        <div style={styles.bannerText}>
          <h1 style={styles.bannerTitle}>멋진 파충류 친구를 구경해보세요!</h1>
          <p style={styles.bannerDesc}>따뜻한 파충류 갤러리에 참여하세요. 가장 아끼는 사진을 업로드하고 소중한 동반자와의 일상을 공유해보세요.</p>
          <button style={styles.bannerBtn}>📸 사진 추가하기</button>
        </div>
        <div style={styles.bannerCircleWrapper}>
          <img src="https://images.unsplash.com/photo-1629812456605-4a044aa38fbc?w=400" alt="Banner Lizard" style={styles.bannerCircleImg}/>
        </div>
      </div>

      <h2 style={styles.sectionHeading}>도마뱀 갤러리</h2>
      <div style={styles.galleryGrid}>
        {GALLERY_DATA.map((item) => (
          <div key={item.id} style={styles.galleryCard}>
            <div style={styles.cardImgWrapper}>
              <img src={item.img} alt={item.title} style={styles.cardImg} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  banner: { backgroundColor: '#c1ffff', borderRadius: '20px', padding: '40px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px', overflow: 'hidden' },
  bannerText: { flex: 1 },
  bannerTitle: { fontSize: '2rem', margin: 0, color: '#4e4340', fontWeight: '800' },
  bannerDesc: { margin: '15px 0 25px 0', fontSize: '1rem', color: '#4e4340', opacity: 0.85, maxWidth: '500px', lineHeight: '1.5' },
  bannerBtn: { backgroundColor: '#4e4340', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' },
  bannerCircleWrapper: { width: '240px', height: '240px', borderRadius: '50%', overflow: 'hidden', border: '5px solid #fff' },
  bannerCircleImg: { width: '100%', height: '100%', objectFit: 'cover' },
  sectionHeading: { fontSize: '1.4rem', color: '#4e4340', margin: '40px 0 20px 0' },
  galleryGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px', marginBottom: '50px' },
  galleryCard: { backgroundColor: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', border: '1px solid #f0eade' },
  cardImgWrapper: { height: '220px', overflow: 'hidden' },
  cardImg: { width: '100%', height: '100%', objectFit: 'cover' },
  cardBody: { padding: '15px' },
  cardTitle: { fontWeight: 'bold', fontSize: '1.05rem', color: '#272727' },
  cardAuthor: { fontSize: '0.85rem', color: '#777', marginTop: '5px' },
  statsBar: { display: 'flex', justifyContent: 'space-around', backgroundColor: '#fff', padding: '25px', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.02)', border: '1px solid #99f9f9', textAlign: 'center' },
  statItem: { fontSize: '1rem', color: '#666' },
  statNum: { display: 'block', fontSize: '1.5rem', color: '#4e4340', marginTop: '5px' }
};