# 🚀 Acme Rockets - Tailwind CSS Landing Page

Bu proje, Tailwind CSS kullanılarak sıfırdan inşa edilmiş, tamamen duyarlı (responsive) ve karanlık mod (dark mode) destekli modern bir web sitesi açılış sayfasıdır (landing page).

## 🌟 Proje Özellikleri ve Öğrenilen Kavramlar

- **Mobile-First (Önce Mobil) Tasarım:** Tailwind'in `sm:` ve `md:` breakpoint'leri kullanılarak mobil cihazlardan masaüstü ekranlara kusursuz geçiş sağlandı. Üst ve alt (footer) navigasyon menüleri ekran boyutuna göre yeniden yapılandırıldı (Gizlenen/Açılan hamburger menü yapısı).
- **Karanlık Mod (Dark Mode):** `dark:` varyantları kullanılarak işletim sisteminin veya tarayıcının temasına göre otomatik değişen renk paleti (slate ve teal tonları) eklendi.
- **Gelişmiş Flexbox Mimarisi:** Sayfa iskeleti, navigasyon barları, roket kartları ve iletişim formu `flex`, `flex-col` ve `flex-row` yapıları ile hizalandı.
- **Pseudo-element Entegrasyonu (`::before`, `::after`):** Müşteri yorumları (Testimonials) bölümünde, HTML'e dokunmadan doğrudan Tailwind class'ları üzerinden CSS pseudo-elementleri kontrol edilerek devasa, şeffaf tırnak işaretleri tasarıma yerleştirildi.
- **Smooth Scrolling (Akıcı Kaydırma):** `sm:scroll-smooth` ve `scroll-mt` (scroll margin top) ayarları ile sayfa içi linklere tıklandığında yumuşak geçişler ve yapışkan menünün (sticky header) başlıkları kapatmaması sağlandı.
- **Form Şekillendirme:** İletişim (Contact) bölümünde kullanıcı giriş alanları (`input`, `textarea`) ve butonlar modern UI standartlarına göre yuvarlatıldı ve pürüzsüzleştirildi.

## 📂 Sayfa Yapısı (Bölümler)
1. **Hero Section:** Etkileyici bir karşılama alanı ve ana mesaj.
2. **Our Rockets:** Flexbox ile şekillendirilmiş roket paketleri ve fiyatlandırma kartları.
3. **Testimonials:** Gelişmiş CSS tırnak işareti tasarımlarına sahip müşteri yorumları.
4. **Contact Us:** Sola hizalı (`items-start`), duyarlı iletişim formu.
5. **Footer:** Adres, iletişim bilgileri ve yatay/dikey navigasyon menüsü barındıran alt bilgi alanı.

## 📸 Proje Görseli

*(Aydınlık ve Karanlık Mod görünümleri)*

![Acme Rockets Final](build/img/final-ss.png)

## 🛠️ Kullanılan Teknolojiler

- HTML5
- Tailwind CSS (v3 - JIT Compiler)
- NPM (Node Package Manager)

## 🚀 Nasıl Çalıştırılır?

1. Projeyi bilgisayarınıza indirin veya klonlayın.
2. Gerekli bağımlılıkları kurmak için terminalde `npm install` komutunu çalıştırın.
3. Tailwind derleyicisini başlatmak için: `npm run tailwind`
4. `build/index.html` dosyasını tarayıcınızda veya VS Code Live Server ile açarak görüntüleyin.