# 🌪️ Tailwind CSS - Lesson 01: Setup & Basics

Bu proje, Tailwind CSS öğrenme serüvenimin ilk adımıdır. Projede Vanilla CSS yazmak yerine, npm üzerinden Tailwind motoru kurularak Utility-First (Fayda-Odaklı) CSS yaklaşımına giriş yapılmıştır.

## 🚀 Öğrenilen Kavramlar ve Özellikler
- **NPM Entegrasyonu:** `npm init` ile proje başlatma ve bağımlılıkları yönetme.
- **Tailwind Kurulumu:** Tailwind CSS (v3) paketinin projeye dahil edilmesi ve `tailwind.config.js` yapılandırmasının ayarlanması.
- **JIT Motoru:** Yazılan HTML class'larını anında tarayıp sadece kullanılan class'ların CSS'e derlenmesi.
- **CLI Watch Modu:** Terminal üzerinden izleme (`--watch`) modunun aktif edilerek otomatik derleme (build) sürecinin çalıştırılması.
- **Utility Classes:** Arka plan renkleri (`bg`), yuvarlak köşeler (`rounded`), gölgelendirmeler (`shadow`) ve ortalama (flex/grid) işlemleri için temel Tailwind class'larının kullanımı.

## 📸 Proje Çıktısı
İlk dersin sonunda, sadece HTML class'ları kullanılarak iç içe geçmiş, ortalanmış ve gölgelendirilmiş bir "Hedef Tahtası" tasarımı elde edilmiştir.

![Tailwind İlk Ders Ekran Görüntüsü](img/target-ss.png)

## 🛠️ Nasıl Çalıştırılır?
1. Bağımlılıkları indirin: `npm install`
2. Tailwind izleme modunu başlatın: 
   `npx tailwindcss -i ./src/input.css -o ./build/css/style.css --watch`
3. `build/index.html` dosyasını VS Code Live Server ile açın.