import React from 'react';
import { GALLERY_DATA } from '../data/LizardData';
import BannerLizardImg from '../assets/gallery/lzd1.jpeg'; 

export default function Home() {
    return (
        <div>
            <div style={styles.banner}>
                <div style={styles.bannerText}>
                    <h1 style={styles.bannerTitle}>멋진 파충류 친구를 구경해보세요!</h1>
                    <p style={styles.bannerDesc}>도마뱀 보면서 힐링하세요.</p>
                </div>
                <div style={styles.bannerCircleWrapper}>
                    <img src={BannerLizardImg} alt="Banner Lizard" style={styles.bannerCircleImg} />
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
    banner: { backgroundColor: '#c1ffff', borderRadius: '20px', padding: '30px', display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '5px', overflow: 'hidden' }, 
    bannerText: { flex: 1 },
    bannerTitle: { fontSize: '2rem', margin: 0, color: '#4e4340', fontWeight: '800' },
    bannerDesc: { margin: '15px 0 0 0', fontSize: '1rem', color: '#4e4340', opacity: 0.85, maxWidth: '500px', lineHeight: '1.5' },
    bannerCircleWrapper: { width: '200px', height: '200px', borderRadius: '50%', overflow: 'hidden', border: '5px solid #fff', flexShrink: 0, margin: '0 auto' }, 
    bannerCircleImg: { width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' },
    sectionHeading: { fontSize: '1.4rem', color: '#4e4340', margin: '40px 0 20px 0' },
    galleryGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px', marginBottom: '50px' },
    galleryCard: { backgroundColor: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', border: '1px solid #f0eade' },
    cardImgWrapper: { height: '220px', overflow: 'hidden' },
    cardImg: { width: '100%', height: '100%', objectFit: 'cover' },
    cardBody: { padding: '15px' },
    cardTitle: { fontWeight: 'bold', fontSize: '1.05rem', color: '#272727' },
    cardAuthor: { fontSize: '0.85rem', color: '#777', marginTop: '5px' }
};